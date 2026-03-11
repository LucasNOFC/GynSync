import React from 'react'

const MemberCardInfo = ({memberInfo, title, desc}) => {
  return (
    <div className='ml-4 bg-[#262626] p-5 justify-center gap-3 rounded-3xl w-75 h-35 mt-5 flex flex-col border border-zinc-700'>
        <p className='text-[18px] text-zinc-400 tracking-wider'>{title}</p>
        <p className='text-[22px] text-white font-bold tracking-wide'>{memberInfo}</p>
        <p className='text-[18px] text-yellow-600'>{desc}</p>
    </div>
  )
}

export default MemberCardInfo