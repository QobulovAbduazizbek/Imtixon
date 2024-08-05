import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'

const Page = () => {
  return (
    <PageWrapper>
   <div className='py-10 px-5'>
     <div className='flex items-center pt-10 mb-7'>
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u><span className='mx-1'>/</span></Link>
                    <p className='text-[#a5a3a3]'>Page</p>
                </div>
    <div>
      <h1 className='text-[30px]'>Salom</h1>
    </div>
   </div>
   </PageWrapper>
  )
}

export default Page
