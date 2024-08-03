import React from 'react';
import { Link } from "react-router-dom";
import Ichki_9 from '../img/Ichki_9.webp';
import PageWrapper from '../components/PageWrapper';

const Garaj = () => {
  return (
    <PageWrapper>
    <div>
      <div className='w-full max-w-base pt-6 md:pt-12 pb-8 md:pb-14 my-6 md:my-12 mx-auto'>
        <div className="flex items-center mb-3 md:mb-5">
          <Link to={'/'} className="text-[#6cd16c] text-[16px]">
            <u>Главная</u>
          </Link> 
          <p className="text-[#969494] text-[16px]"><span className='mx-1'>/</span>Гаражи</p>
        </div>
        <div>
          <h3 className='text-[32px] md:text-[50px] font-bold mb-8 md:mb-10'>
            Гаражи
          </h3>
          <div className='flex flex-col md:flex-row items-start justify-between'>
            <div className='mb-6 md:mb-0'>
              <img className='w-full md:w-[480px] h-[250px] mb-6 md:mb-0' src={Ichki_9} alt="" />
            </div>
            <div className='ml-0 md:ml-10'>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>Строительство гаражей – это процесс возведения здания или сооружения, предназначенного для хранения и защиты автомобилей от атмосферных воздействий.</p>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>В процесс строительства гаражей включает в себя следующие этапы:</p>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>1.</span>Планирование и проектирование. Важно определить размеры гаража, его местоположение и планировку, а также предусмотреть необходимое количество мест для парковки.</p>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>2.</span>Подготовка строительной площадки. <br /> На данном этапе необходимо произвести подготовку площадки, удалить растительность, провести выравнивание и установку фундамента.</p>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>3.</span>Возведение стен и крыши. Для гаражей часто используется каркасно-панельный или кирпичный вариант. <br /> Стены и крышу можно оснастить окнами, дверями, воротами, вентиляцией и другими необходимыми <br /> элементами.</p>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>4.</span>Прокладка коммуникаций. Если планируется оснащение гаража электричеством, водой или системой отопления, то необходимо установить соответствующие коммуникации.</p>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>5.</span>Отделка. После завершения строительства основной конструкции гаража, приступают к его отделке – <br /> штукатурка, окраска, настил пола.</p>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'> <span className='text-[20px] font-bold text-black'>6.</span>Установка дополнительных приспособлений. В завершении строительства гаража, можно установить дополнительные приспособления, такие как полки, ящики, мойку и т.д.</p>
              <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium mb-7'>Все работы выполняются с учетом местных строительных норм и требований безопасности.</p>
              <div>
                <p className='text-[16px] md:text-[18px] text-[#6b6a6a] font-medium '>Цена</p>
                <p className='text-[24px] md:text-[30px] font-bold text-black'>1 500 р.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}

export default Garaj;
