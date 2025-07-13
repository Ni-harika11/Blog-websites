"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaEdit, FaTrash } from "react-icons/fa";
import axios from "@/lib/axios"; // Adjust path if needed

interface Blog {
    _id: string;
    title: string;
    slug: string;
}

const Blogs = () => {
    const [search, setSearch] = useState("");
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true);
    const limit = 5;

    const api = process.env.NEXT_PUBLIC_BLOG_API
    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await axios.get(`/api/blogs?page=${page}&limit=${limit}`);
                const newBlogs = res.data.blogs;

                if (newBlogs.length > 0) {
                    setBlogs((prev) => [...prev, ...newBlogs]);
                    const totalPages = res.data.pages;
                    if (page >= totalPages) {
                        setHasMore(false);
                    }
                } else {
                    setHasMore(false);
                }
            } catch (err) {
                console.error("Error fetching blogs:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, [page]);

    const filteredBlogs = blogs.filter((blog) =>
        blog.title.toLowerCase().includes(search.toLowerCase())
    );
    //  delete handler
    const handleDelete = async (id: string) => {
        try {
            await axios.delete(`/api/blogs/${id}`);
            setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
            alert("Blog deleted")
        } catch (error) {
            console.error("Error deleting blog:", error);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md ml-60">
            <h2 className="text-2xl font-bold text-purple-700 mb-1">All Published Blogs</h2>
            <p className="mb-4 text-sm text-gray-500 uppercase tracking-wide">Admin Panel</p>

            <div className="mb-4">
                <label className="block mb-1 text-gray-600 font-medium">Search Blogs:</label>
                <input
                    type="text"
                    placeholder="search by title..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
                />
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-blue-100 text-left text-gray-700 uppercase text-sm">
                            <th className="py-2 px-4 border">#</th>
                            <th className="py-2 px-4 border">Title</th>
                            <th className="py-2 px-4 border">Slug</th>
                            <th className="py-2 px-4 border">Edit / Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={4} className="text-center py-4">Loading...</td>
                            </tr>
                        ) : filteredBlogs.length === 0 ? (
                            <tr>
                                <td colSpan={4} className="text-center py-4 text-gray-500">
                                    No blogs found.
                                </td>
                            </tr>
                        ) : (
                            filteredBlogs.map((blog, index) => (
                                <tr key={blog._id} className="hover:bg-gray-50">
                                    <td className="py-2 px-4 border">{index + 1}</td>
                                    <td className="py-2 px-4 border">{blog.title}</td>
                                    <td className="py-2 px-4 border">{blog.slug}</td>
                                    <td className="py-2 px-4 border space-x-2">
                                        <Link href={`/blogs/edit/${blog._id}`}>
                                            <button className="text-blue-500 hover:text-blue-700">
                                                <FaEdit />
                                            </button>
                                        </Link>
                                        <button
                                            onClick={() => handleDelete(blog._id)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            <FaTrash />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-4">
                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => setPage((prev) => prev + 1)}
                >
                    Load more...

                </button>
            </div>
        </div>
    );
};


export default Blogs;
