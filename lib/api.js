const WORK_GRAPHQL_FIELDS = `
slug
title
coverImage {
  url
}
author {
  picture {
    url
  }
  name
}
date
category
url
excerpt
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`


async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractEntry(fetchResponse) {
  return fetchResponse?.data?.workCollection?.items?.[0]
}

function extractEntries(fetchResponse) {
  return fetchResponse?.data?.workCollection?.items
}

export async function getPreviewBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      workCollection(where: { slug: "${slug}" }, preview: true, limit: 1) {
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractEntry(entry)
}


export async function getAllEntriesWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      workCollection(where: { slug_exists: true }, order: date_DESC) {
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractEntries(entries)
}

export async function getAllEntriesForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      workCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}) {
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractEntries(entries)
}


export async function getAllEntriesByDate(preview) {
  const entries = await fetchGraphQL(
    `query {
      workCollection(order: date_DESC, preview ${preview ? 'true' : 'false'}) {
        items {
          ${WORK_GRAPHQL_FIELDS}
        }
      } 
    }`,
    preview
  )
  return extractEntries(entries)
}

export async function getEntryAndMoreEntries(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      workCollection(where: { slug: "${slug}" }, preview: ${
        preview ? 'true' : 'false'
      }, limit: 1) {
          items {
            ${WORK_GRAPHQL_FIELDS}
          }
        }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      workCollection(where: { slug_not_in: "${slug}" }, order: date_DESC, preview: ${
        preview ? 'true' : 'false'
      }, limit: 2) {
          items {
            ${WORK_GRAPHQL_FIELDS}
          }
        }
    }`,
    preview
  )
  return {
    work: exctractWork(entry),
    moreWorks: extractEntries(entries),
  }
}
