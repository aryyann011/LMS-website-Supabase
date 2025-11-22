import React from 'react'
import { useGetSectionsForCourseQuery, useAddSectionMutation } from '../store/apiSlice'
import Dropdown from './Dropdown';
import ChapterList from './ChapterList';

function SectionManager({courseId}) {

    const {data : sections, isLoading : isSectionLoading} = useGetSectionsForCourseQuery(courseId)
    const [addSection] = useAddSectionMutation()

  return (
    <div>
      {Array.isArray(sections) && sections.map((section) => (
        <Dropdown
        course_Id={courseId}
        id={section.id}
        title={section.title}
        subtitle={section.subtitle}
        edit={true}
        >
            <ChapterList sectionId={section.id} edit={true} />
        </Dropdown>
      ))}
    </div>
  )
}

export default SectionManager
