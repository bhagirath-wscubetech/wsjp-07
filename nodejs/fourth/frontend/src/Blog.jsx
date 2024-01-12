import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Blog() {
    const [blogs, setBlog] = useState([]);

    useEffect(
        () => {
            fetchBlogs()
        },
        []
    )

    const fetchBlogs = () => {
        axios.get(
            "http://localhost:5000/read-file?file_name=blog.json"
        ).then(
            (success) => {
                if (success.data.status == 1) {
                    setBlog([...success.data.entries].reverse());
                } else {
                    setBlog([]);
                }
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        )
    }

    const addBlog = (event) => {
        event.preventDefault();
        const d = new Date()
        if (
            event.target.title.value != ""
            && event.target.author.value != ""
            && event.target.content.value != ""
        ) {
            const data = {
                title: event.target.title.value,
                author: event.target.author.value,
                content: event.target.content.value,
                id: d.getTime(),
                date: `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
            }
            axios.post(
                "http://localhost:5000/add-blog",
                JSON.stringify(data)
            ).then(
                (success) => {
                    if (success.data.status == 1) {
                        event.target.reset();
                        fetchBlogs();
                    } else {
                    }
                }
            ).catch(
                (error) => {
                    console.log(error);
                }
            )
        } else {
            alert("Data toh daal bhai");
        }
    }

    return (
        <div className='grid grid-cols-4 max-w-[1300px] mx-auto gap-5 my-4'>
            <div className='col-span-3 border-r p-2'>
                <div className="relative overflow-x-auto">
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Title
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Content
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Author
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Date
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map(
                                    (blog) => {
                                        return (
                                            <tr key={blog.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                <td scope="row" className="px-6 py-4">
                                                    {blog.title}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {blog.content}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {blog.author}
                                                </td>
                                                <td className="px-6 py-4">
                                                    {blog.date}
                                                </td>
                                            </tr>
                                        )
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>

            </div>
            <div>
                <form className="sticky top-[20px] max-w-sm mx-auto" onSubmit={addBlog}>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Blog Author
                        </label>
                        <input
                            type="text"
                            name='author'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="email"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Blog title
                        </label>
                        <input
                            type="text"
                            name='title'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        />
                    </div>
                    <div className="mb-5">
                        <label
                            htmlFor="password"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                            Blog Description
                        </label>
                        <textarea
                            name='content'
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            required=""
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                </form>

            </div>
        </div>
    )
}
