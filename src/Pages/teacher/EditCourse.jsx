import React, { useEffect } from 'react';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import SectionManager from '../../Components/SectionManager';
import { 
  useGetCourseDetailQuery, 
  useUpdateCourseMutation,
  useDeleteCourseMutation
} from '../../store/apiSlice';
import { uploadCourseImage } from '../../Services/storageService';

function EditCourse() {
  const { courseId } = useParams(); 
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  
  const [deleteCourse, { isLoading: isDeleting }] = useDeleteCourseMutation();
  const [updateCourse, { isLoading: isUpdating }] = useUpdateCourseMutation();
  const { data: course, isLoading: isCourseLoading } = useGetCourseDetailQuery(courseId);

  useEffect(() => {
    if (course) {
      reset({
        title: course.title,
        description: course.description,
        price: course.price,
      });
    }
  }, [course, reset]);

  const onSaveDetails = async (data) => {
    try {
      const imageFile = data.image[0];
      let imageUrl = course.imgUrl; // Default to existing image
      
      if (imageFile) {
        toast.info('Uploading new image...');
        imageUrl = await uploadCourseImage(imageFile);
        toast.success('Image uploaded successfully');
        
      }

      const newCourseInfo = {
        id: courseId,
        title: data.title,
        description: data.description,
        price: data.price,
        imgUrl: imageUrl,
      };

      await updateCourse(newCourseInfo).unwrap();
      toast.success('Course updated successfully');
      navigate('/teacher/mycourse', { replace: true });
    } catch (error) {
      console.log("Failed to update course:", error);
      toast.error('Failed to update course');
    }
  };

  const deletethecourse = async () => {
    if(!window.confirm("Are you sure you want to delete this course? This action cannot be undone.")) return;
    
    try {
      await deleteCourse(courseId).unwrap();
      toast.success('Successfully deleted');
      navigate('/teacher/mycourse', { replace: true });
    } catch (error) {
      console.log("Failed to delete course:", error);
      toast.error('Failed to delete');
    }
  };

  if (isCourseLoading) return <div className="min-h-screen flex items-center justify-center">Loading course data...</div>;

  return (
    <div className="bg-linear-to-b from-[#E6FFFF] to-[#FFFFFF] p-6 pt-0">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6">
        
        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h1 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
              Edit Course Details
            </h1>
          
            <form onSubmit={handleSubmit(onSaveDetails)} className="flex flex-col gap-5">
              
              <div className="flex flex-col gap-1">
                <label htmlFor="title" className="font-semibold text-gray-700 text-sm">Course Title</label>
                <input 
                  type="text" 
                  id="title"
                  className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Enter the title"
                  {...register("title", { required: "Title is required" })}
                />
                {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="description" className="font-semibold text-gray-700 text-sm">Description</label>
                <textarea 
                  id="description"
                  rows="4"
                  className={`w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
                  placeholder="Course description..."
                  {...register("description", { required: "Description is required" })} 
                />
                {errors.description && <span className="text-red-500 text-xs">{errors.description.message}</span>}
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="price" className="font-semibold text-gray-700 text-sm">Price ($)</label>
                <input 
                  type="number" 
                  id="price"
                  step="0.01"
                  className="w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                  {...register("price", { required: true, valueAsNumber: true })} 
                />
              </div>

              <div className="flex flex-col gap-2 border-t pt-4 mt-2">
                <label className="font-semibold text-gray-700 text-sm">Course Thumbnail</label>
                
                {course.imgUrl && (
                  <div className="relative w-full h-48 bg-gray-100 rounded overflow-hidden border">
                    <img 
                      src={course.imgUrl} 
                      alt={course.title} 
                      className="w-full h-full object-cover" 
                    />
                  </div>
                )}
                
                <input 
                  type="file" 
                  accept="image/*" 
                  className="text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer mt-2"
                  {...register("image")} 
                />
              </div>

              <div className="flex justify-between items-center pt-6 mt-2 border-t">
                
                <button 
                  type="button" 
                  onClick={deletethecourse} 
                  disabled={isDeleting}
                  className="px-4 py-2 text-sm font-medium text-red-600 border rounded transition-colors disabled:opacity-50"
                >
                  {isDeleting ? "Deleting..." : "Delete Course"}
                </button>

                <button 
                  type="submit" 
                  disabled={isUpdating}
                  className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded shadow-sm transition-colors disabled:opacity-70"
                >
                  {isUpdating ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </form>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-full">
            <h2 className="text-xl font-bold text-gray-800 mb-6 border-b pb-4">
              Manage Content
            </h2>
            <SectionManager courseId={courseId} />
          </div>
        </div>

      </div>
    </div>
  );
}

export default EditCourse;