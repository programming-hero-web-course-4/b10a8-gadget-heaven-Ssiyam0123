import React from 'react'
import Cart from '../Cart'
import { NavLink, Outlet, useLoaderData } from "react-router-dom"
export default function DashboardButtons({ isInCartPage }) {

  // const data = useLoaderData()
  // console.log(data)

  return (
    <div>
      <div className="flex flex-col items-center justify-center py-20 bg-gradient-to-r from-[#9538E2] to-[#9538E2] pb-28">
        <h1 className="text-5xl font-bold mb-4 text-white">
        Dashboard
        </h1>
        <p className="text-lg font-normal mb-8 text-white">
        Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>

       <div className='flex gap-5'>
       
       <NavLink to={'/dashboard'}>
       <button className="px-6 py-3 bg-white text-[#9538E2] font-semibold rounded-full transition btn">
         Cart
        </button>
       </NavLink>

       <NavLink to={'/dashboard/wishlist'}>
       <button className='px-6 py-3 bg-transparent text-white border-2 rounded-full btn'>WishList</button>
       </NavLink>
       </div>
      </div>

      <div className='w-[80%] mx-auto'>
        <Outlet></Outlet>
      </div>
    </div>
  )
}
