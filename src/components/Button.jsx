import React from "react";

export default function Button({children}) {
    return (
        <button
            type="button"
            className="inline-flex text-lg items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm
            hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
            {children}
        </button>
    )
}