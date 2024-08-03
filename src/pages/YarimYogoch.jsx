import React from 'react'
import { Link } from "react-router-dom";
import Ichki_5 from '../img/Ichki_5.webp'
import PageWrapper from '../components/PageWrapper';

const YarimYogoch = () => {
  return (
    <PageWrapper>
    <div className='w-full max-w-base pt-12 pb-14 my-12 mx-auto'>
      <div className="flex items-center mb-5">
        <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u></Link>
        <p className="text-[#969494] text-[16px]"><span className='mx-1'>/</span>Фахверковые дома</p>
      </div>
      <div className='flex flex-col md:flex-row items-start justify-between'>
        <div className='md:w-[350px] md:h-[250px] mb-5'>
          <img className='w-full h-full' src={Ichki_5} alt="" />
        </div>
        <div className='md:w-[calc(100% - 350px)] md:ml-10'>
          <p className='text-[16px] text-[#6b6a6a] font-medium mb-3'>Строительство фахверковых домов и коттеджей можно разбить на несколько основных этапов:</p>
          <p className='text-[16px] text-[#6b6a6a] font-medium mb-3'></p>
          <p className='text-[16px] text-[#6b6a6a] font-medium '> <span className='text-[18px] font-bold text-black'>1.</span><span className='text-[18px] font-bold text-black'>Проектирование:</span>
            Вначале необходимо разработать проект дома. При создании проекта учитываются <br /> многие параметры, такие как пожелания владельца, особенности местности, климатические условия, а также <br /> современные требования к уровню комфорта и энергоэффективности. Специалисты также учтут <br /> исторические и традиционные аспекты фахверкового строительства.
          </p>
          {/* Здесь остальной контент */}
          <p className='text-[16px] text-[#6b6a6a] font-medium my-5'>Фахверковые дома характеризуются своеобразной фактурностью и красотой, а также отличной <br /> энергоэффективностью, но требуют высокого уровня мастерства при строительстве.</p>
          <div>
            <p className='text-[18px] text-[#6b6a6a] font-medium '>Цена</p>
            <p className='text-[30px] font-bold text-black'><span className='mr-2'>14</span>500 р.</p>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  )
}

export default YarimYogoch
