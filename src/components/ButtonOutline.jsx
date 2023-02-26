import React from "react";

export default function ButtonOutlined({children, clazz}) {
    return (
        <button
            type="button"
            className={clazz +
                " inline-flex items-center rounded-md border border-gray-300 bg-transparent px-4 py-2 text-base font-medium text-gray-300 shadow-sm hover:bg-gray-50/10 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"}
        >
            {children}
        </button>
    )
}