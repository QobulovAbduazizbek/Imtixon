import React from 'react';
import { Link } from "react-router-dom";
import Ichki_6 from '../img/Ichki_6.webp';
import PageWrapper from '../components/PageWrapper';

const YogochUy = () => {
  return (
    <PageWrapper>
    <div className='w-full max-w-base pt-12 pb-14 my-12 mx-auto'>
      
      <div className="flex items-center mb-5">
        <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u></Link>
        <p className="text-[#969494] text-[16px]"><span className='mx-1'>/</span>Бревенчатые дома</p>
      </div>
      <h3 className='text-[50px] font-bold mb-10'>Бревенчатые дома</h3>
      <div className='flex flex-col sm:flex-row items-start justify-between'>
        <img className='w-full sm:w-[450px] h-auto mr-0 sm:mr-10 mb-10 sm:mb-0' src={Ichki_6} alt="" />
        <div className='ml-0 sm:ml-10'>
          <p className='text-[15px] text-[#6b6a6a] font-medium mb-3'>Строительство бревенчатых домов - это процесс создания дома, используя бревна как основной строительный материал. Бревна могут быть различного диаметра и длины, нарезаны и обработаны для создания стен и потолков дома.</p>
          <p className='text-[15px] text-[#6b6a6a] font-medium mb-3'>Процесс строительства бревенчатых домов включает в себя несколько этапов:</p>
          {/* Qolgan matnlar */}
        </div>
      </div>
      {/* Qolgan kodlar */}
    </div>
    </PageWrapper>
  );
}

export default YogochUy;
