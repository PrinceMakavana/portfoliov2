import React from 'react'

function Tooltip({ children , content }) {
  return (
    <div className="relative group overflow-visible cursor-help">
{children}
    <div
    role="tooltip"
    className="absolute left-0 bottom-full mb-3 z-50 invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus:visible group-focus:opacity-100 inline-block px-3 py-2 text-sm text-white transition-opacity duration-200 bg-dark_primary rounded-base shadow-md rounded-md"
  >
    {content}
  </div>
    </div>
  )
}

export default Tooltip