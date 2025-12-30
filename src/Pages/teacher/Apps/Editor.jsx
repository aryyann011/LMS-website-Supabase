import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { kanbanData, cartData } from '../../../data/dummy'; 

const CourseEditor = () => {
  const [title, setTitle] = useState('Untitled Lesson');
  const [category, setCategory] = useState('General');
  const [linkedTask, setLinkedTask] = useState('');
  const [content, setContent] = useState('Welcome to TinyMCE!');

  const handleSave = () => {
    const finalData = {
      title,
      category,
      linkedTask,
      content,
      savedAt: new Date().toLocaleTimeString()
    };
    console.log("Saving this data to DB:", finalData);
    alert(`Saved "${title}"! Check console for data object.`);
  };

  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-gray-900 rounded-3xl drop-shadow-xl'>
      
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <input 
          type="text" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-2xl font-bold text-gray-800 dark:text-white bg-transparent border-none outline-none focus:ring-0 w-full md:w-1/2 placeholder-gray-400"
          placeholder="Enter Lesson Title..."
        />

        <div className="flex gap-3 w-full md:w-auto">
          <select 
            value={linkedTask}
            onChange={(e) => setLinkedTask(e.target.value)}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border-none text-gray-600 dark:text-gray-200 cursor-pointer w-full"
          >
            <option value="">Link to Task...</option>
            {kanbanData.map((task) => (
              <option key={task.Id} value={task.Id}>{task.Title}</option>
            ))}
          </select>

          <select 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg border-none text-gray-600 dark:text-gray-200 cursor-pointer w-full"
          >
            <option value="General">General</option>
            {cartData.map((item, index) => (
              <option key={index} value={item.category}>{item.category}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
        <Editor
          apiKey='o0a48ax3zezmgmj7ikgeqd70d95uba5zfzan1bq7d9uar7q8'
          value={content}
          onEditorChange={(newValue) => setContent(newValue)}
          init={{
            height: 500, 
            menubar: false,
            plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
            toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
            skin: "oxide", 
          }}
        />
      </div>

      <div className="flex justify-end mt-6 gap-4">
        <button 
          type="button"
          className="px-6 py-2 rounded-xl text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 font-medium transition-all"
        >
          Cancel
        </button>
        <button 
          type="button"
          onClick={handleSave}
          className="px-6 py-2 rounded-xl text-white font-bold shadow-md transition-all hover:opacity-90"
          style={{ backgroundColor: '#03C9D7' }} 
        >
          Save Changes
        </button>
      </div>

    </div>
  );
};

export default CourseEditor;