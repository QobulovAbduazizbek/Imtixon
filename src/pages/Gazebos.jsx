import React from 'react'
import { Link } from "react-router-dom";
import Ichki_8 from '../img/Ichki_8.webp'
import PageWrapper from '../components/PageWrapper';

const Gazebos = () => {
  return (
    <PageWrapper>
    <div>
    <dir className='w-full max-w-base pt-12 pb-14 my-12 mx-auto'>
    <div className="flex items-center mb-5">
     <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u></Link> 
     <p className="text-[#969494] text-[16px]"><span className='mx-1'>/</span>Беседки</p>
     </div>
     <div>
        <h3 className='text-[50px] font-bold mb-10'>
        Беседки
        </h3>
        <div className='flex flex-col items-start justify-between sm:flex-row'>
        <div className='w-full sm:w-1/2'>
              <img className='w-full h-auto mb-5 sm:mr-10' src={Ichki_8} alt="" />
            </div>
            <div className='w-full sm:w-1/2 ml-0 sm:ml-10'>
              <p className='text-[16px] text-[#6b6a6a] font-medium mb-3'>Строительство беседок - процесс создания специальных открытых конструкций, предназначенных для отдыха <br /> и проведения времени на открытом воздухе. Беседки могут быть различных форм и размеров и могут быть <br /> выполнены из различных материалов, таких как дерево, металл или пластик.</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium mb-3'>Вот некоторые шаги, которые обычно включает в себя процесс строительства беседки:</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>1.</span>Планирование: определение размеров и формы беседки, выбор материалов и стиля, установка бюджета.</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>2.</span>Подготовительные работы: подготовка места для строительства, удаление растений и других преград, <br /> земляные работы при необходимости.</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>3.</span>Фундамент: постройка фундамента или площадки, чтобы обеспечить устойчивость и прочность беседки.</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>4.</span>Каркас: создание каркаса беседки, который будет поддерживать крышу и стены конструкции. Каркас может быть выполнен из дерева или металла.</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>5.</span>Покрытие: установка крыши и стен беседки. Крыша может быть выполнена из шифера, металла, <br /> поликарбоната или других материалов, а стены могут быть открытыми или закрытыми, в зависимости от <br /> желаемой степени защиты от погоды.</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>6.</span>Отделка: установка дверей, окон и других деталей, таких как полы или сидения.</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium '> <span className='text-[20px] font-bold text-black'>7.</span>Элементы декора: добавление декоративных элементов, таких как ограждение, освещение или растения, <br /> чтобы придать беседке законченный и привлекательный вид.</p>
              <p className='text-[16px] text-[#6b6a6a] font-medium mb-3'> <span className='text-[20px] font-bold text-black'>8.</span>Последние штрихи: проведение окончательных проверок конструкции, качества и безопасности, <br /> устранение дефектов и применение защитных покрытий для долговечности.</p>
            <p  className='text-[16px] text-[#6b6a6a] font-medium mb-7'>Важно учесть местные строительные нормы и требования, а также иметь необходимые навыки и инструменты <br /> для выполнения строительных работ. Если у вас нет опыта в строительстве, рекомендуется обратиться к <br /> профессиональным строителям или заказать готовую беседку у специализированной компании.</p>
            <div>
                <p className='text-[18px] text-[#6b6a6a] font-medium '>Цена</p>
                <p className='text-[30px] font-bold text-black'>2 500 р.</p>
            </div>
            </div>
          </div>
     </div>
      </dir>
    </div>
    </PageWrapper>
  )
}

export default Gazebos
