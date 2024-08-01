import React from 'react'
import { Link } from "react-router-dom";
import grid_2 from '../img/grid_2.webp'
import grid_5 from '../img/grid_5.webp'
import grid_3 from '../img/grid_3.webp'

const Maqolalar = () => {
  return (
    <div className='bg-[#fafafa]'>
        <div className='w-full max-w-base pt-12 pb-[100px] px-10 mx-auto'>
            <div className='flex items-center pt-10 mb-7'>
                <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u><span className='mx-1'>/</span></Link>
                <p className='text-[#a5a3a3]'>Статьи</p>
            </div>
            <h3 className='text-[50px] font-bold mb-10'>
                Статьи
            </h3>
        </div>
        <ul className="space-y-5">
            {/* 1 */}
            <li className='py-5 px-6 bg-gray-200'>
                <p className='mb-1 text-gray-400'>07.06.2022</p>
                <Link to={'/QurilishniKechiktirish'}>
                    <h3 className='mb-5 text-green-700'><u className='text-green-700 text-[25px]'>Осень – не повод откладывать стройку!</u></h3>
                </Link>
                <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                    <img className='h-[200px] lg:w-[300px] mr-0 lg:mr-10 mb-5 lg:mb-0 text-[30px]' src={grid_2} alt="" />
                    <p>В холодное время года в принципе можно строить коттеджи на основе любых материалов: из традиционного кирпича, газобетона или дерева.</p>
                </div>
            </li>
            {/* 2 */}
            <li className='py-5 px-6 bg-gray-200'>
                <p className='mb-1 text-gray-400'>07.06.2022</p>
                <Link to={'/QurilishniKechiktirish'}>
                    <h3 className='mb-5 text-green-700'><u className='text-green-700 text-[25px]'>Преимущества деревянного домостроения</u></h3>
                </Link>
                <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                    <img className='h-[200px] lg:w-[300px] mr-0 lg:mr-10 mb-5 lg:mb-0 text-[30px]' src={grid_3} alt="" />
                    <p>В холодное время года в принципе можно строить коттеджи на основе любых материалов: из традиционного кирпича, газобетона или дерева.</p>
                </div>
            </li>
            {/* 3 */}
            <li className='py-5 px-6 bg-gray-200'>
                <p className='mb-1 text-gray-400'>07.06.2022</p>
                <Link to={'/QurilishniKechiktirish'}>
                    <h3 className='mb-5 text-green-700'><u className='text-green-700 text-[25px]'>С чего начать строительство загородного дома</u></h3>
                </Link>
                <div className='flex flex-col lg:flex-row items-center lg:items-start'>
                    <img className='h-[200px] lg:w-[300px] mr-0 lg:mr-10 mb-5 lg:mb-0 text-[30px]' src={grid_5} alt="" />
                    <p>Архитектурный проект — едва ли не самый важный этап в подготовке к строительству собственного дома.</p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Maqolalar
