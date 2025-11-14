import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  useGetChapterForCourseQuery,
  useGetCourseDetailQuery,
  useGetSectionsForCourseQuery,
} from "../store/apiSlice";

function CourseDetail() {
  const { courseId } = useParams();
  const { data: sections, isLoading: isSectionLoading } =
    useGetSectionsForCourseQuery(courseId);
  const { data: course, isLoading: isCourseLoading } =
    useGetCourseDetailQuery(courseId);

  if (isSectionLoading || isCourseLoading) {
    return <h1>Course details Loading....</h1>;
  }
  if (!course) return <h1>Course not found</h1>;
  return (
    <div>

      <div>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
        <div className="flex flex-row gap-2">
            <span>5</span>
            <ul className="flex flex-row items-center">
                {[...Array(5)].map((_, i) => (
                <li key={i}>
                    <img src="/image/star_icon.png" alt="" />
                </li>
                ))}
            </ul>
            <span>(122)</span>
        </div>
        <div>
            <h1>Course Structure</h1>
            
        </div>
      </div>

      <div
        key={course.id}
        className="h-80 rounded-xl shadow-md flex flex-col hover:shadow-lg transition"
      >
        <img
          className="w-full h-1/2 object-cover rounded-t-xl"
          src={course.imgUrl}
          alt=""
        />
        <div className="h-1/2 w-4/5 ml-3 flex flex-col gap-1 mt-3">
          <h1 className="text-[#0E0E0E] text-1xl font-bold">{course.title}</h1>
          <span>{course.description}</span>
          <div className="flex flex-row gap-2">
            <span>5</span>
            <ul className="flex flex-row items-center">
              {[...Array(5)].map((_, i) => (
                <li key={i}>
                  <img src="/image/star_icon.png" alt="" />
                </li>
              ))}
            </ul>
            <span>(122)</span>
          </div>
          <h1>{course.price}</h1>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;
