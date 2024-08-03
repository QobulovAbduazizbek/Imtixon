import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'


const PageNoteFound = () => {
  return (
    <PageWrapper>
    <div className='w-full max-w-base pt-12 pb-14 my-12 mx-auto'>
        <div className="flex items-center mb-5">
        <Link to={'/'} className="text-[#6cd16c] text-[16px]">
          <u>Главная</u>
        </Link>
        <p className="text-[#969494] text-[16px]">
          <span className='mx-1'>/</span> Страница не найдена
        </p>
       
      </div>
        <div className='py-20'>
        <h1 className='text-[50px] font-bold'>Страница не найдена <br /> 404 Not Found</h1>
        </div>
      
    </div>
    </PageWrapper>
  )
}

export default PageNoteFound
