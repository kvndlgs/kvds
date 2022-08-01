import DateComponent from '../components/date'
import CoverImage from '../components/cover-image'
import ProjectTitle from '../components/project-title'

export default function ProjectHeader({ title, coverImage, date }) {
  return (
    <>
      <ProjectTitle>{title}</ProjectTitle>

      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} url={coverImage.url} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
         
        </div>
        <div className="mb-6 text-lg">
          <DateComponent dateString={date} />
        </div>
      </div>
    </>
  )
}
