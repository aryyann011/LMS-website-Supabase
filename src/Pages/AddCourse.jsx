import React, { useEffect } from "react";
import { useAddCoursesMutation } from "../store/apiSlice";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { uploadCourseImage } from "../Services/storageService";
import { useAuth } from "../Context/Authcontext";

function AddCourse() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [addCourses, { isLoading, isError, isSuccess, error: mutationError }] = useAddCoursesMutation();
  const { user } = useAuth();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Course Added Successfully!");
      reset();
      navigate('/teacher/mycourse', { replace: true }); // Ensure correct path
    }
    if (isError) {
      const message = mutationError?.data?.message || "Failed to add course. Please try again.";
      toast.error(message);
    }
  }, [isError, isSuccess, isLoading, navigate, mutationError, reset]);

  const AddInfo = async (data) => {
    try {
      const imageFile = data.image[0];
      let imageUrl = null;
      if (imageFile) {
        toast.info('Uploading image...');
        imageUrl = await uploadCourseImage(imageFile);
        toast.success('Image uploaded successfully');
      }

      const newCourseInfo = {
        title: data.title,
        description: data.description,
        price: data.price,
        imgUrl: imageUrl,
        user_id: user.id
      };

      await addCourses(newCourseInfo).unwrap();
    } catch (error) {
      console.log("Failed to add course:", error);
      toast.error('Failed to add course');
    }
  };

  return (
    <div className="bg-linear-to-b from-[#E6FFFF] to-[#FFFFFF] flex justify-center items-center">
      <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-md border border-gray-200">
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Add New Course</h2>
        
        {isError && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded text-sm text-center">
            {mutationError?.data?.message || "Failed to add course. Please try again."}
          </div>
        )}

        <form onSubmit={handleSubmit(AddInfo)} className="flex flex-col gap-5">
          
          <div className="flex flex-col gap-1">
            <label htmlFor="title" className="font-semibold text-gray-700">Course Title</label>
            <input
              type="text"
              id="title"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.title ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g. React for Beginners"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && <span className="text-red-500 text-sm mt-1">{errors.title.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="description" className="font-semibold text-gray-700">Description</label>
            <textarea
              id="description"
              rows="3"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.description ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Brief overview of the course content..."
              {...register("description", { required: "Description is required" })}
            />
            {errors.description && <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="price" className="font-semibold text-gray-700">Price ($)</label>
            <input
              type="number"
              id="price"
              className={`w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${errors.price ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="e.g. 49.99"
              {...register("price", { required: "Price is required" })}
            />
            {errors.price && <span className="text-red-500 text-sm mt-1">{errors.price.message}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="image" className="font-semibold text-gray-700">Course Thumbnail</label>
            <input
              type="file"
              id="image"
              accept="image/*"
              className="w-full p-2 border border-gray-300 rounded bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 cursor-pointer"
              {...register("image", { required: "Image is required" })}
            />
            {errors.image && <span className="text-red-500 text-sm mt-1">{errors.image.message}</span>}
          </div>

          <div className="mt-4">
            <button 
              type="submit" 
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded shadow transition duration-200 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {isLoading ? "Creating Course..." : "Create Course"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default AddCourse;