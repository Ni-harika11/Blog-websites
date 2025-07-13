"use client";

import axios from "axios";
import { useEffect, useState } from "react";

const AddBlog = () => {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("Draft");

  const handleSubmit = async (e:any):Promise<any> => {
    e.preventDefault();
    const newBlog = {
      title,
      slug,
      category,
      description,
      content,
      status,
    };
    console.log(newBlog);
    try{
      const res=await axios.post(`/api/blogs`,newBlog)
      if(res.status === 201 || res.status ===200){
        alert("Blog added successfully!")
        console.log(res.data.blogs);
        setTitle("");
        setSlug("");
        setCategory("");
        setDescription("");
        setContent("");
        setStatus("Draft");
      }
    }catch(error:any){
      console.log(" Error adding blog:", error);
      alert(error?.response?.data?.message || "Something went wrong.");
    }
    // Here, you can POST this data to your backend API
  };
 
 

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-purple-700 mb-1">Add Blog</h2>
      <p className="mb-4 text-sm text-gray-500 uppercase tracking-wide">
        Admin Panel
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Title</label>
          <input
            type="text"
            placeholder="Enter small title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Slug</label>
          <input
            type="text"
            placeholder="Enter slug URL"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Category</label>
           <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="">Select category</option>
            
            <option value="Next Js, React Js">Next Js, React Js</option>
            <option value="Database">Database</option>
            <option value="Deployment">Deployment</option>
             
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Description</label>
          <textarea 
            placeholder="Enter short description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        {/* Blog Content */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Blog Content</label>
          <textarea 
            placeholder="Write the blog content here..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          ></textarea>
        </div>

        {/* Status */}
        <div>
          <label className="block mb-1 text-gray-700 font-medium">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <option value="Draft">Draft</option>
            <option value="Public">Public</option>
          </select>
        </div>

        {/* Save Button */}
        <div>
          <button 
            type="submit"
            className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition"
          >
            Save Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBlog;
