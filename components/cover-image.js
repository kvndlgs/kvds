import ContentfulImage from './contentful-image';


export default function CoverImage({title, url}){
 const image = (
    <ContentfulImage
       width={300}
       height={300}
       alt={`Thumbnail image for ${title}`}
       src={url}
       />
    )
    return (
        <div>
            { image }
        </div>
    )
}