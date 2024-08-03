import React from 'react';
import { Link } from "react-router-dom";
import Ichki_4 from '../img/Ichki_4.webp';
import PageWrapper from '../components/PageWrapper';

const YogochdanYasalgan = () => {
  return (
    <PageWrapper>
    <div className='w-full max-w-base pt-12 pb-14 my-12 mx-auto'>
      <div className="flex items-center mb-5">
        <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u></Link>
        <p className="text-[#969494] text-[16px]"><span className='mx-1'>/</span>Дома из бруса</p>
      </div>
      <h3 className='text-[50px] font-bold mb-10'>Дома из бруса</h3>
      <div className='flex flex-col sm:flex-row items-start justify-between'>
        <img className='w-full sm:w-[450px] h-auto mr-0 sm:mr-10 mb-10 sm:mb-0' src={Ichki_4} alt="" />
        <div className='ml-0 sm:ml-10'>
          <p className='text-[16px] text-[#6b6a6a] font-medium mb-3'>Строительство домов из бруса – это процесс возведения жилого здания, основанный на использовании деревянных брусов как основного материала.</p>
          <p className='text-[16px] text-[#6b6a6a] font-medium mb-3'>Преимущества строительства домов из бруса:</p>
          <p className='text-[16px] text-[#6b6a6a] font-medium '>
            <span className='text-[20px] font-bold text-[#6b6a6a]'>1.</span>Экологичность и натуральность: дерево является природным материалом без использования химических добавок.
          </p>
          {/* Qolgan matnlar */}
        </div>
      </div>
      {/* Qolgan kodlar */}
    </div>
    </PageWrapper>
  );
}

export default YogochdanYasalgan;
