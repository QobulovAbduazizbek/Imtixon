import React from 'react'
import { Link } from 'react-router-dom';
import K_1 from '../img/K_1.webp'
import PageWrapper from '../components/PageWrapper';

const Kompaniya = () => {
  return (
    <PageWrapper>
    <div className='bg-[#fafafa]'>
      <div className='w-full max-w-base px-12 mx-auto py-5 '>
        <div className='flex items-center mb- pt-10'>
          <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u><span className='mx-1'>/</span></Link>
          <p className='text-[#a5a3a3]'>О компании</p>
        </div>
      </div>
      <div className='w-full max-w-base px-8 mx-auto py-5 '>
        <h3 className='text-[30px] sm:text-[50px] font-bold mb-10'>
          О компании
        </h3>
        <div className='flex flex-col lg:flex-row items-start'>
        <div className='lg:w-1/2 mb-5 sm:mb-0'>
            <img className='w-full lg:w-[400px]' src={K_1} alt="" />
          </div>
          <div className='lg:mr-7 lg:w-1/2 mb-5 lg:mb-0'>
            <p className='text-[20px] text-[#6b6a6a] font-medium mb-5'>Сегодня загородный дом - это не только престиж и статус.</p>
            <p className='text-[20px] text-[#6b6a6a] font-medium mb-5'>В первую очередь, это забота о здоровье. Свежий воздух, радость от регулярного <br /> общения с природой, возможность гулять с детьми под открытым небом, тишина, от <br /> которой так отвыкли жители больших городов - это неполный перечень преимуществ, <br /> которые доступны обладателю загородного дома.</p>
            <p className='text-[20px] text-[#6b6a6a] font-medium mb-5'>Строительство дома-это очень ответственный шаг. Вы хотите построить загородный дом <br /> или баню, но не знаете с чего начать? На нашем сайте мы расскажем Вам, как <br /> осуществляется строительство загородных домов, какие при этом возникают сложности <br /> и как их можно избежать.</p>
          </div>
          
        </div>
        <div className='mb-5'>
          <p className='text-[20px] text-[#6b6a6a] font-medium mb-5'>Воспользовавшись нашими советами, Вы сможете со знанием дела выбрать, какой из типов домов Вам больше подходит. Кроме <br /> этого, мы с радостью ответим на все Ваши вопросы о строительстве по телефону.</p>
          <p className='text-[20px] text-[#6b6a6a] font-medium mb-5'>Наша компания с 1995 года занимается строительством домов и бань. За это время мы построили более 930 жилых объектов.</p>
          <p className='text-[20px] text-[#6b6a6a] font-medium mb-5'>Мы не нанимаем сезонных рабочих, а делаем ставку на профессиональных строителей, работающих у нас не один год. Наша <br /> компания много лет работает только с надежными поставщиками строительных материалов, что существенно снижает конечную <br /> стоимость строительства загородных домов и бань.</p>
          <p className='text-[20px] text-[#6b6a6a] font-medium mb-10'>За счет профессионализма наших монтажников и отсутствия перебоев в поставках строительных материалов, мы гарантируем <br /> кратчайшие сроки строительства.</p>
        </div>
      </div>
    </div>
    </PageWrapper>
  )
}

export default Kompaniya
