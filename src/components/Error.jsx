import React from 'react'

const Error = ({error}) => {
  return (
    <div className="text-4xl text-white font-semibold absolute top-[55%] left-[55%] -translate-x-1/2 -translate-y-1/2 p-5">
      <p>{error}</p>
    </div>
  )
}

export default Error