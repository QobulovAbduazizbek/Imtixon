import React from 'react';
import { Link } from "react-router-dom";
import Ichki_2 from '../img/Ichki_2.webp';
import PageWrapper from '../components/PageWrapper';

const BloklanganUylar = () => {
  return (
    <PageWrapper>
    <div className='w-full max-w-base pt-12 pb-14 my-12 mx-auto  px-4 md:px-10'>
      <div className="flex items-center mb-5">
        <Link to={'/'} className="text-[#6cd16c] text-[16px]">
          <u>Главная</u>
        </Link>
        <p className="text-[#969494] text-[16px]">
          <span className='mx-1'>/</span> Блочные дома
        </p>
      </div>
      <div>
        <h3 className='text-[32px] md:text-[50px] font-bold mb-10'>
          Блочные дома
        </h3>
        <div className='flex flex-col lg:flex-row items-start justify-between'>
          <div className='w-full lg:w-1/2 mb-5 lg:mb-0'>
            <img className='w-[500px]  h-auto object-cover ' src={Ichki_2} alt="Блочные дома" />
          </div>
          <div className='w-full lg:w-1/2'>
            <p className='text-[14px] md:text-[17px] text-[#6b6a6a] font-medium mb-3'>
              Строительство блочных домов является популярным направлением в сфере строительной индустрии. 
              Блочные дома, также известные как панельные дома или здания из сборных блоков, состоят из 
              предварительно изготовленных бетонных или кирпичных блоков, которые затем собираются вместе для 
              создания стен, потолков и других конструкций здания.
            </p>
            <p className='text-[14px] md:text-[17px] text-[#6b6a6a] font-medium mb-3'>
              Преимущества блочного строительства включают:
            </p>
            <ul className='list-inside list-decimal text-[14px] md:text-[17px] text-[#6b6a6a] font-medium mb-3 space-y-2'>
              <li>Более быстрое строительство. Изготовление блоков может проводиться параллельно с основными работами, что позволяет сократить сроки строительства.</li>
              <li>Устойчивость к различным внешним факторам. Бетонные блоки обладают высокой прочностью и могут выдерживать экстремальные погодные условия, включая сильные ветры, землетрясения и пожары.</li>
              <li>Теплоизоляция. Бетонные блоки имеют хорошие теплоизоляционные свойства, что позволяет снизить затраты на отопление и кондиционирование воздуха.</li>
              <li>Экономическая эффективность. Стоимость блочного строительства может быть ниже по сравнению с традиционным кирпичным или бетонным строительством.</li>
            </ul>
            <p className='text-[14px] md:text-[17px] text-[#6b6a6a] font-medium mb-3'>
              Однако, как и у любого метода строительства, у блочного строительства есть и некоторые недостатки, такие как ограничение в выборе дизайна и ограниченная возможность изменения планировки в будущем.
            </p>
            <p className='text-[14px] md:text-[17px] text-[#6b6a6a] font-medium mb-3'>
              В целом, блочное строительство представляет собой эффективный и надежный способ создания качественных и долговечных домов. Оно широко используется во многих странах и продолжает развиваться с появлением новых технологий и материалов.
            </p>
            <div>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium'>Цена</p>
              <p className='text-[24px] md:text-[30px] font-bold text-black'>1 500 р.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
};

export default BloklanganUylar;
