import { UserCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Card = ({title = "Membros ativos totais", number = "67"}) => {
  return (
        <div className='rounded-2xl w-76 bg-linear-to-l from-[#1f1c0162] to-[#53330348]  p-5 flex-col'>
        <UserCircleIcon className='w-10 text-amber-400 bg-amber-300/35 rounded-2xl'/>
        <h2 className='text-zinc-300 font-semibold'>{title}</h2>
        <p className='text-4xl font-bold'>{number}</p>
    </div>
  )
}

export default Card