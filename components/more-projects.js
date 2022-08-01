import ProjectPreview from '../components/project-preview'

export default function MoreProjects({ works }) {
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
        More Project
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
        {works.map((work) => (
          <ProjectPreview
            key={work.slug}
            title={work.title}
            coverImage={work.coverImage}
            date={work.date}
            slug={work.slug}
            excerpt={work.excerpt}
          />
        ))}
      </div>
    </section>
  )
}
