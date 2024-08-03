import React from 'react';
import { Link } from 'react-router-dom';
import Ichki_3 from '../img/Ichki_3.webp';
import PageWrapper from '../components/PageWrapper';

const RamkaliUy = () => {
  return (
    <PageWrapper>
    <div className="w-full max-w-base pt-12 pb-14 my-12 mx-auto">
      <div className="flex items-center mb-5">
        <Link to={'/'} className="text-[#6cd16c] text-[16px]">
          <u>Главная</u>
        </Link>
        <p className="text-[#969494] text-[16px]">
          <span className='mx-1'>/</span> Каркасные дома
        </p>
       
      </div>
      <div>
        <h3 className="text-3xl lg:text-5xl font-bold mb-10">
          Каркасные дома
        </h3>
        <div className="flex flex-col lg:flex-row items-start justify-between">
          <div className="mb-5 lg:mb-0">
            <img className="w-full lg:w-[480px] h-[250px]" src={Ichki_3} alt="" />
          </div>
          <div className="ml-0 lg:ml-10">
            <p className="text-sm lg:text-base text-[#6b6a6a] font-medium mb-5">
              Строительство каркасных домов - это процесс возведения жилых или коммерческих зданий, основанный на использовании каркасной конструкции.
            </p>
            <div className="lg:ml-0">
              <p className="text-[18px] text-[#6b6a6a] font-medium mb-3 lg:mb-0">Цена</p>
              <p className="text-2xl lg:text-4xl font-bold text-black lg:ml-0">3 500 р.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default RamkaliUy;
