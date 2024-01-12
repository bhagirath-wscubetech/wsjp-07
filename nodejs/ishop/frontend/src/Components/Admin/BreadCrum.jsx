import React from 'react'
import { Link } from 'react-router-dom'
export default function BreadCrum({ items }) {
    return (
        <nav class="flex mb-2 pl-1" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <Link to="/admin/dashboard" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        Dashboard
                    </Link>
                </li>
                {
                    items.map(
                        (item, index) => {
                            return (
                                <li key={index}>
                                    <div class="flex items-center">
                                        <svg class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <Link to={item.url} class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">{item.name}</Link>
                                    </div>
                                </li>
                            )
                        }
                    )
                }

            </ol>
        </nav>
    )
}
