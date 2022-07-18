import React from 'react'

const SubmitButton = ({name}) => {
  return (
    <button type="submit" className="w-full rounded bg-secondaryBlue px-8 py-2 text-white hover:bg-opacity-90">
        {name}
    </button>
  )
}

export default SubmitButton