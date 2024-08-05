import React from 'react';
import { Link } from "react-router-dom";
import grid_2 from '../img/grid_2.webp';
import grid_5 from '../img/grid_5.webp';
import grid_3 from '../img/grid_3.webp';
import PageWrapper from '../components/PageWrapper';

const Maqolalar = () => {
  return (
    <PageWrapper>
    <div className='bg-white'>
      <div className='w-full max-w-screen-xl mx-auto pb-5 px-5'>
        <div className='w-full max-w-screen-xl mx-auto mb-7 px-5'>
          <div className='flex items-center pt-10 mb-5'>
            <Link to={'/'} className="text-[#6cd16c] text-[16px]">
              <u>Главная</u><span className='mx-1'>/</span>
            </Link>
            <p className='text-[#a5a3a3]'>Статьи</p>
          </div>
          <h3 className='text-[50px] font-bold '>Статьи</h3>
        </div>
        <ul className="space-y-5">
          {/* 1 */}
          <li className='py-5 px-6 bg-gray-200'>
            <p className='mb-1 text-gray-400'>07.06.2022</p>
            <Link to={'/Komfort7'}>
              <h3 className='mb-5 text-green-700 sm:text-[19px] md:text-[21px] lg:text-[30px] text-[15px]'>
                <u>Осень – не повод откладывать стройку!</u>
              </h3>
            </Link>
            <div className='flex flex-col lg:flex-row items-center lg:items-start'>
              <img className='h-[200px] lg:w-[300px] mb-5 lg:mb-0' src={grid_2} alt="" />
              <p className='lg:ml-10'>В холодное время года в принципе можно строить коттеджи на основе любых материалов: из традиционного кирпича, газобетона или дерева.</p>
            </div>
          </li>
          {/* 2 */}
          <li className='py-5 px-6 bg-gray-200'>
            <p className='mb-1 text-gray-400'>07.06.2022</p>
            <Link to={'/Komfort8'}>
              <h3 className='mb-5 text-green-700 sm:text-[19px] md:text-[21px] lg:text-[30px] text-[15px]'>
                <u>Преимущества деревянного домостроения</u>
              </h3>
            </Link>
            <div className='flex flex-col lg:flex-row items-center lg:items-start'>
              <img className='h-[200px] lg:w-[300px] mb-5 lg:mb-0' src={grid_3} alt="" />
              <p className='lg:ml-10'>В холодное время года в принципе можно строить коттеджи на основе любых материалов: из традиционного кирпича, газобетона или дерева.</p>
            </div>
          </li>
          {/* 3 */}
          <li className='py-5 px-6 bg-gray-200'>
            <p className='mb-1 text-gray-400'>07.06.2022</p>
            <Link to={'/Komfort3'}>
              <h3 className='mb-5 text-green-700 sm:text-[19px] md:text-[21px] lg:text-[30px] text-[15px]'>
                <u>С чего начать строительство загородного дома</u>
              </h3>
            </Link>
            <div className='flex flex-col lg:flex-row items-center lg:items-start'>
              <img className='h-[200px] lg:w-[300px] mb-5 lg:mb-0' src={grid_5} alt="" />
              <p className='lg:ml-10'>Архитектурный проект — едва ли не самый важный этап в подготовке к строительству собственного дома.</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    </PageWrapper>
  );
};

export default Maqolalar;
