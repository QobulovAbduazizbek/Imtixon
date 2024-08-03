import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data";
import u_1 from "../img/u_1.webp";
import u_2 from "../img/u_2.webp";
import u_3 from "../img/u_3.webp";
import u_4 from "../img/u_4.webp";
import h_icon from "../img/h_icon.png";
import Telegram from "../img/Telegram.png";
import wh from "../img/wh.png";
import Qulay_1 from "../img/Qulay_1.webp";
import Qulay_2 from "../img/Qulay_2.webp";
import Qulay_3 from "../img/Qulay_3.webp";
import Qulay_4 from "../img/Qulay_4.webp"; 
import Qulay_5 from "../img/Qulay_5.webp";
import Qulay_6 from "../img/Qulay_6.webp";
import Qulay_10 from "../img/Qulay_10.webp";
import Qulay_8 from "../img/Qulay_8.webp";
import Qulay_9 from "../img/Qulay_9.webp";
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"
import "lightgallery/css/lg-autoplay.css"
import "lightgallery/css/lg-share.css"
import "lightgallery/css/lg-rotate.css"
import LightGallery from "lightgallery/react/Lightgallery.es5";

import lgThumbnail from 'lightgallery/plugins/thumbnail'
import lgZoom from 'lightgallery/plugins/zoom'
import lgAutoplay from 'lightgallery/plugins/autoplay'
import lgVideo from 'lightgallery/plugins/video'
import lgShare from 'lightgallery/plugins/share'
import lgRotate from 'lightgallery/plugins/rotate'


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import { Parallax, Pagination, Navigation } from "swiper/modules";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
    phone: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    message: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  

  const validateForm = () => {
    let valid = true;
    let errors = { name: '', message: '', phone: '' };

    if (!formData.name) {
      errors.name = 'Ваше имя обязательно для заполнения';
      valid = false;
    }
    if (!formData.message) {
      errors.message = 'Объяснение обязательно для заполнения';
      valid = false;
    }
    if (!formData.phone) {
      errors.phone = 'Телефон обязателен для заполнения';
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log('Form submitted:', formData);
      setModal(false);
    }
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log('Form submitted:', formData);
      setButtonText('Отправлено');
      // Reset form or additional actions if needed
      setFormData({ name: '', phone: '' });
    }
  };
  const projects = [
    { id: 1, img: Qulay_1, title: 'Двухэтажный дом К-102', area: '63,5 м2', size: '10х7.5м', rooms: '10х7.5м', price: 'от 10 505 000 руб.' },
    { id: 2, img: Qulay_2, title: 'Двухэтажный дом К-102', area: '63,5 м2', size: '10х7.5м', rooms: '10х7.5м', price: 'от 10 505 000 руб.' },
    { id: 3, img: Qulay_3, title: 'Двухэтажный дом К-102', area: '63,5 м2', size: '10х7.5м', rooms: '10х7.5м', price: 'от 10 505 000 руб.' },
    { id: 4, img: Qulay_4, title: 'Двухэтажный дом К-102', area: '63,5 м2', size: '10х7.5м', rooms: '10х7.5м', price: 'от 10 505 000 руб.' },
    { id: 5, img: Qulay_5, title: 'Двухэтажный дом К-102', area: '63,5 м2', size: '10х7.5м', rooms: '10х7.5м', price: 'от 10 505 000 руб.' },
    { id: 6, img: Qulay_6, title: 'Двухэтажный дом К-102', area: '63,5 м2', size: '10х7.5м', rooms: '10х7.5м', price: 'от 10 505 000 руб.' }
  ];

  const images = [u_1, u_2, u_3, u_4];

  const renderGallery = () => {
    return images.map((src, index) => (
      <a key={index} href={src} data-lg-size="1406-1390" className="group w-full m-5 h-[500px] rounded-md overflow-hidden relative inline-block cursor-pointer mx-auto">
        <img
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={src}
          alt=""
        />
      </a>
    ));
  };

  const onInit = () => {
    console.log('lightGallery has been initialized');
};
  const [modal, setModal] = useState(false);
  const closeModal = (e) => {
    if (e.target.id === "overlay") setModal(false);
  };
  const clickEscape = (e) => {
    if (e.key == "Escape") {
      setModal(false);
      setOpenNav(false);
    }
  };
  document.addEventListener("keydown", clickEscape);
  return (
    <div className="bg-[#ffffff]">
     <Swiper
        parallax={true}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}  
        className="mySwiper"
      >
        <div className="w-full max-w-base px-4 sm:px-8 md:px-12 mx-auto py-5">
          <SwiperSlide
            style={{
              "background-image":
                "url(https://mos-cottage-house.oml.ru/thumb/2/H_QkEI07sikBiaBXUYWQ0A/2000r1300/d/sl_2.jpg)",
            }}
          >
            <div className="w-full max-w-[1450px] mx-auto py-5 px-5">
              <div
                className="font-semibold text-[24px] sm:text-[32px] md:text-[50px]"
                data-swiper-parallax="-300"
              >
                Строительство <br /> загородных домов
              </div>
              <div
                className="subtitle mb-6 sm:mb-8 md:mb-10"
                data-swiper-parallax="-200"
              >
                <p>Заселяйтесь в свой дом через 60 дней</p>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <Link
                  onClick={() => setModal(true)}
                  className="bg-[#79c701] px-4 py-3 sm:px-5 sm:py-4 md:px-5 md:py-6 text-[14px] sm:text-[16px] md:text-[18px] font-bold rounded-md"
                >
                  Связаться с нами
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              "background-image":
                "url(https://mos-cottage-house.oml.ru/thumb/2/H_QkEI07sikBiaBXUYWQ0A/2000r1300/d/sl_2.jpg)",
            }}
          >
            <div className="w-full max-w-[1450px] mx-auto py-5 px-5">
              <div
                className="font-semibold text-[24px] sm:text-[32px] md:text-[50px]"
                data-swiper-parallax="-300"
              >
                Теплый семейный дом <br /> с террасой за 30 дней
              </div>
              <div
                className="subtitle mb-6 sm:mb-8 md:mb-10"
                data-swiper-parallax="-200"
              >
                <p>Гарантия 5 лет с момента сдачи объекта</p>
              </div>
              <div className="text" data-swiper-parallax="-100">
                <Link
                  onClick={() => setModal(true)}
                  className="bg-[#79c701] px-4 py-3 sm:px-5 sm:py-4 md:px-5 md:py-6 text-[14px] sm:text-[16px] md:text-[18px] font-bold rounded-md"
                >
                  Расчёт стоимости
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
       <div className="w-full max-w-[1450px] mx-auto">
  
</div>


<div>

<div className='w-full max-w-[1400px] mx-auto px-5 mt-10'>
  <h3 className='text-[24px] sm:text-[30px] md:text-[36px] lg:text-[42px] xl:text-[48px] 2xl:text-[54px] font-bold mt-24 text-center'>Проекты домов</h3>
  <p className='text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] text-center mb-10'>
    Мы разработали более 1000 проектов комфортных домов
  </p>
  <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 2xl:gap-14'>
    {projects.map((project) => (
      <Link key={project.id} to={'BizningLoiha'}>
        <li className='bg-gray-50'>
            <img className='w-full  h-full  object-cover transition-transform duration-500 group-hover:scale-110' src={project.img} alt="Logo" />
          <h2 className='text-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] xl:text-[26px] 2xl:text-[28px] mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 mt-2 sm:mt-3 md:mt-4 lg:mt-5 xl:mt-6 2xl:mt-7 font-bold hover:text-green-600'>{project.title}</h2>
          <p className='ml-5 sm:ml-6 text-center md:ml-7 lg:ml-8 xl:ml-9 2xl:ml-10 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 text-gray-600'>
            Площадь: <span className='ml-28 sm:ml-32 md:ml-36 lg:ml-40 xl:ml-44 2xl:ml-48'>{project.area}</span>
          </p>
          <p className='ml-5 sm:ml-6 md:ml-7 text-center lg:ml-8 xl:ml-9 2xl:ml-10 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 text-gray-600'>
            Размер: <span className='ml-24 sm:ml-28 md:ml-32 lg:ml-36 xl:ml-40 2xl:ml-44'>{project.size}</span>
          </p>
          <p className='ml-5 sm:ml-6 md:ml-7 text-center lg:ml-8 xl:ml-9 2xl:ml-10 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] mb-1 sm:mb-2 md:mb-3 lg:mb-4 xl:mb-5 2xl:mb-6 text-gray-600'>
            Кол-во комнат: <span className='ml-10 sm:ml-12 md:ml-14 lg:ml-16 xl:ml-18 2xl:ml-20'>{project.rooms}</span>
          </p>
          <h3 className='text-center mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 2xl:mb-7 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[23px] xl:text-[25px] 2xl:text-[27px]'>{project.price}</h3>
        </li>
      </Link>
    ))}
  </ul>
</div>

<div className='w-full max-w-[1400px] mx-auto px-5 pb-20'>
      <h3 className='text-[30px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-24 text-center'>
        Проекты домов
      </h3>
      <p className='text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center mb-10'>
        Мы разработали более 1000 проектов комфортных домов
      </p>
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgShare, lgRotate, lgVideo, lgAutoplay, lgZoom]}
        elementClassNames="grid grid-cols-1 sm:grid-cols-1   md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
      >
        {renderGallery()}
      </LightGallery>
    </div>

    <div className='bg-[#fafafa]'>
  <div className='w-full max-w-base mx-auto px-5 pb-20'>
    <div className='text-center'>
      <h3 className='text-[30px] sm:text-[50px] font-bold text-center pt-10 mb-5'>Типы возводимых домов</h3>
      <p className='text-[20px] sm:text-[25px] mb-7'>Красивые дома для комфортного проживания</p>
    </div>
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
      <li className='flex flex-col'>
        <Link to={'/ToshUy'}>
          <div className=' flex flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_1} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Кирпичные дома и коттеджи</h3>
          </div>
        </Link>
      </li>
      <li className='flex flex-col'>
        <Link to={'/BloklanganUylar'}>
          <div className=' flex flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_2} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Блочные дома и коттеджи</h3>
          </div>
        </Link>
      </li>
      <li className='flex flex-col'>
        <Link to={'/YarimYogoch'}>
          <div className=' flex flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_3} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Фахверковые дома и коттеджи</h3>
          </div>
        </Link>
      </li>
      <li className='flex flex-col'>
        <Link to={'/RamkaliUy'}>
          <div className=' flex flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_4} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Каркасные дома и коттеджи</h3>
          </div>
        </Link>
      </li>
      <li className='flex flex-col'>
        <Link to={'/YogochdanYasalgan'}>
          <div className=' flex flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_5} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Дома и коттеджи из бруса</h3>
          </div>
        </Link>
      </li>
      <li className='flex flex-col'>
        <Link to={'/YogochUy'}>
          <div className=' flex flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_6} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Бревенчатые дома и коттеджи</h3>
          </div>
        </Link>
      </li>
      <li className='flex flex-col'>
        <Link to={'/Vannalar'}>
          <div className=' flex flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_10} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Бани</h3>
          </div>
        </Link>
      </li>
      <li className='flex flex-col'>
        <Link to={'/Gazebos'}>
          <div className=' flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_8} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Беседки</h3>
          </div>
        </Link>
      </li>
      <li className='flex flex-col'>
        <Link to={'/Garaj'}>
          <div className=' flex flex-col h-full pb-5'>
            <img className='rounded-lg object-cover w-full h-64 transform transition-transform duration-500 hover:scale-105' src={Qulay_9} alt="" />
            <h3 className='py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold'>Гаражи</h3>
          </div>
        </Link>
      </li>
    </ul>
  </div>
</div>




<div className='w-full max-w-base mx-auto'>
      <h3 className='text-[40px] sm:[50px] font-bold mt-24 text-center'>
        Этапы работ
      </h3>
      <p className='text-[16px] text-center mb-10'>С нами выгодно строить</p>
      <ul className='w-full max-w-base px-5 pb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-7'>
        <li className='border-2 rounded-md flex items-center py-3 pl-5'>
          <h4 className='font-bold text-[50px] text-[#bef762da] mr-5'>01.</h4>
          <div>
            <p className='text-[20px] font-bold'>Заявка</p>
            <p className='text-[16px] text-[#b8b5b5]'>Вы связываетесь с нами</p>
          </div>
        </li>
        <li className='border-2 rounded-md flex items-center py-3 pl-5'>
          <h4 className='font-bold text-[50px] text-[#bef762da] mr-5'>02.</h4>
          <div>
            <p className='text-[20px] font-bold'>Расчет стоимости</p>
            <p className='text-[16px] text-[#b8b5b5]'>При необходимости выезжаем на участок</p>
          </div>
        </li>
        <li className='border-2 rounded-md flex items-center py-3 pl-5'>
          <h4 className='font-bold text-[50px] text-[#bef762da] mr-5'>03.</h4>
          <div>
            <p className='text-[20px] font-bold'>Заключение договора</p>
            <p className='text-[16px] text-[#b8b5b5]'>Согласовываем смету, подписываем договор</p>
          </div>
        </li>
        <li className='border-2 rounded-md flex items-center py-3 pl-5'>
          <h4 className='font-bold text-[50px] text-[#bef762da] mr-5'>04.</h4>
          <div>
            <p className='text-[20px] font-bold'>Проектирование и согласование</p>
            <p className='text-[16px] text-[#b8b5b5]'>Проектируем, составляем смету</p>
          </div>
        </li>
        <li className='border-2 rounded-md flex items-center py-3 pl-5'>
          <h4 className='font-bold text-[50px] text-[#bef762da] mr-5'>05.</h4>
          <div>
            <p className='text-[20px] font-bold'>Строительство</p>
            <p className='text-[16px] text-[#b8b5b5]'>Начинаем работу согласно договору</p>
          </div>
        </li>
        <li className='border-2 rounded-md flex items-center py-3 pl-5'>
          <h4 className='font-bold text-[50px] text-[#bef762da] mr-5'>06.</h4>
          <div>
            <p className='text-[20px] font-bold'>Ваш объект готов!</p>
            <p className='text-[16px] text-[#b8b5b5]'>Счастливого новоселья</p>
          </div>
        </li>
      </ul>
    </div>
<div className='bg-[#fdfdfd]'>
  <div className='w-full max-w-base  mx-auto px-10 py-20'>
    <h3 className='text-center font-bold text-[30px] sm:text-[60px]'>Преимущества загородного дома</h3>
    <p className='text-center text-[20px] mb-10'>Ощутите прелесть загородной жизни</p>
    <ul className='grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2'>
      <li className='bg-[#fafafa] text-center '>
        <img className='mx-auto mb-3' src={h_icon} alt="" />
        <p className='font-semibold text-[20px]'>Собственная планировка</p>
        <p className='font-medium text-[16px] pb-4 text-gray-400'>Описание для информативности</p>
      </li>
      <li className='bg-[#fafafa] text-center'>
        <img className='mx-auto' src={h_icon} alt="" />
        <p className='font-semibold text-[20px]'>Отсутствие шума и соседей</p>
        <p className='font-medium text-[16px] pb-4 text-gray-400'>Описание для информативности</p>
      </li>
      <li className='bg-[#fafafa] text-center'>
        <img className='mx-auto' src={h_icon} alt="" />
        <p className='font-semibold text-[20px]'>Чистый воздух</p>
        <p className='font-medium text-[16px] pb-4 text-gray-400'>Описание для информативности</p>
      </li>
      <li className='bg-[#fafafa] text-center'>
        <img className='mx-auto' src={h_icon} alt="" />
        <p className='font-semibold text-[20px]'>Собственный бассейн</p>
        <p className='font-medium text-[16px] pb-4 text-gray-400'>Описание для информативности</p>
      </li>
    </ul>
  </div>
</div>
<div className='bg-img bg-no-repeat bg-cover w-full '>
  <div className='w-full max-w-base  mx-auto px-5 pt-14'>
    <h3 className='text-center text-[30px] sm:[60px] font-bold text-white mb-10'>О компании</h3>
    <div className='bg-white rounded-lg mb-14 w-full max-w-5xl py-10 px-12  mx-auto '>
      <p className='text-[15px] text-[#999797] mb-5'>Сегодня загородный дом - это не только престиж и статус.</p>
      <p className='text-[15px] text-[#999797] mb-5'>В первую очередь, это забота о здоровье. Свежий воздух, радость от регулярного общения с природой, возможность гулять с детьми под открытым небом, тишина, от которой так отвыкли жители больших городов - это неполный перечень преимуществ, которые доступны обладателю загородного дома.</p>
      <p className='text-[15px] text-[#999797] mb-7'>Строительство дома - это очень ответственный шаг. Вы хотите построить загородный дом или баню, но не знаете с чего начать? На нашем сайте мы расскажем Вам, как осуществляется строительство загородных домов, какие при этом возникают сложности и как их можно избежать. Воспользовавшись нашими советами, Вы сможете со знанием дела выбрать, какой из типов домов Вам больше подходит.</p>
      <div className='text-center'>
        <Link to={'/Kompaniya'} className='text-[#45ca39] text-[18px]'>Подробнее</Link>
        <hr className=' mx-auto w-[150px] border-y-2 mb-5 border-[#45ca39] ' />
      </div>
    </div>
  </div>
  <ul className='w-full max-w-5xl pb-16 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2'>
    <li className='flex items-center'>
      <img className='w-[150px]' src={h_icon} alt="" />
      <div>
        <p className='text-white text-[20px] sm:text-[28px]'>Фиксированная смета</p>
        <p className='text-[20px] text-[#999797]'>Описание для информативности</p>
      </div>
    </li>
    <li className='flex items-center'>
      <img className='w-[150px]' src={h_icon} alt="" />
      <div>
        <p className='text-white text-[20px] sm:text-[28px]'>Соблюдаем график работ</p>
        <p className='text-[20px] text-[#999797]'>Описание для информативности</p>
      </div>
    </li>
    <li className='flex items-center'>
      <img className='w-[150px]' src={h_icon} alt="" />
      <div>
        <p className='text-white text-[20px] sm:text-[28px]'>Проектирование в подарок</p>
        <p className='text-[20px] text-[#999797]'>Описание для информативности</p>
      </div>
    </li>
    <li className='flex items-center'>
      <img className='w-[150px]' src={h_icon} alt="" />
      <div>
        <p className='text-white text-[20px] sm:text-[28px]'>Гарантия 5 лет</p>
        <p className='text-[16px] text-[#999797]'>Описание для информативности</p>
      </div>
    </li>
  </ul>
</div>

<div className='bg-[#fafafa]'>
  <div className='w-full max-w-base px-5 mx-auto items-center'>
    <h3 className='text-[50px] font-bold text-center py-10'>Статьи</h3>
    <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10 mb-10">
      {projects.map((project) => {
        return (
          <li key={project.id}>
            <Link to={`/portfolio/${project.title}`}  >
              <div className='bg-white pb-5 '>
                <img className='inline-block h-[300px] w-full rounded-lg ' src={project.img} alt={project.title} />
                <h3 className='py-3 px-5 text-center text-[25px] hover:text-[#6cd16c] duration-500 '>{project.title}</h3>
                <p>{project.text}</p>
              </div>
            </Link>
          </li>
        );
      })}

    </ul>
    <div className='text-center'>
      <Link to={'/Maqolalar'} className='text-[#45ca39] text-[20px]'> Все публикации</Link>
      <hr className=' mx-auto w-[150px] border-y-2 mb-5 border-[#45ca39] ' />
    </div>
  </div>
</div>
<div className='bg-img bg-no-repeat bg-cover'>
      <div className='w-full max-w-base mx-auto pt-20 pb-36 px-5'>
        <div className='flex flex-col md:flex-row items-start justify-between'>
          <div className="md:mr-10 mb-10 md:mb-0">
            <ul>
              <h3 className='text-[25px] sm:text-[45px] font-bold text-white mb-3'>
                Остались вопросы?
              </h3>
              <p className='text-[15px] font-medium text-[#868686] mb-5'>
                Свяжитесь с нами или оставьте заявку <br />
                и мы проконсультируем вас по любому вопросу
              </p>
              <div className='flex items-center'>
                <p className='text-[18px] sm:text-[25px] text-white font-bold mr-3'>+7 (000) 000 00 00</p>
                <img className='w-16' src={Telegram} alt="Telegram" />
              </div>
              <div className='flex items-center'>
                <p className='text-[18px] sm:text-[25px] text-white font-bold mr-3'>+7 (000) 000 00 00</p>
                <img className='w-16' src={wh} alt="WhatsApp" />
              </div>
              <Link className='text-[#45ca39] text-[16px]'>test@example.com</Link>
              <hr className='w-[125px] border-y-1 mb-5 border-[#45ca39]' />
            </ul>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <ul>
                <li>
                  <p className='text-[45px] sm:text-[25px] font-bold text-white mb-3'>
                    Мы ответим в удобное для <br /> вас время
                  </p>
                  <p className='text-[15px] font-medium text-[#868686] mb-5'>
                    Оставьте заявку на звонок прямо сейчас
                  </p>
                </li>
                <li className='mb-5'>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder='Ваше имя'
                    value={formData.name}
                    onChange={handleChange}
                    className='py-[20px] pr-[50px] mb-5 lg:mb-0 pl-5 rounded-lg text-black font-medium mr-6'
                  />
                  {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
                  <input
                    type="text"
                    name="phone"
                    placeholder='+7 (___) ___ __ __'
                    value={formData.phone}
                    onChange={handleChange}
                    className='py-[20px] pr-[50px] pl-5 rounded-lg text-black font-medium'
                  />
                  {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
                </li>
                <li>
                  <div className='flex items-center mb-5'>
                    <input type="checkbox" className='mr-3 h-5 w-5 rounded-lg border-none' />
                    <p className='text-[15px] font-medium text-[#868686]'>
                      <Link to={'/FoydalanishSharti'}>Ознакомлен(а) с </Link> <u>пользовательским соглашением *</u>
                    </p>
                  </div>
                </li>
                <li>
                  <button
                    type="submit"
                    className='bg-[#79c701] py-6 rounded-lg px-7 text-white text-[20px] font-semibold'
                  >
                    Заказать звонок
                  </button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </div>
</div>
{
   modal && (
    <div onClick={closeModal} className='fixed max-w-full min-h-[800px] inset-0 bg-black bg-opacity-50 z-20 pt-10' id='overlay'>
      <div className='max-w-full bg-white w-[500px] mx-auto min-h-4/5 bg-bgModal rounded-3xl relative'>
        <button onClick={() => setModal(false)} className='absolute top-0 right-0 w-12 h-12 flex items-center justify-center rounded-full text-[#79c701] text-3xl font-bold font-mono'>&times;</button>
        <div className='px-6 py-8 sm:px-4 sm:py-6'>
          <h1 className='text-black text-2xl sm:text-3xl text-center font-semibold mb-3'>Рассчитать стоимость строительства</h1>
          <p className="text-black text-base sm:text-lg text-center mb-5">Мы ответим вам в удобное для вас время</p>
          <form onSubmit={handleSubmit}>
            <input
              className='text-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-[1px] rounded-md hover:border-green-500 duration-500'
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Ваше имя"
            />
            {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
            <textarea
              className='text-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-[1px] rounded-md hover:border-green-500 duration-500'
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Объяснение"
            ></textarea>
            {errors.message && <p className="text-red-600 text-sm">{errors.message}</p>}
            <input
              className='text-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-[1px] rounded-md hover:border-green-500 duration-500'
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+7 (___) ___ __ __"
            />
            {errors.phone && <p className="text-red-600 text-sm">{errors.phone}</p>}
            <div className='flex items-center mb-4'>
              <input type="checkbox" className='mr-3 h-5 w-5 rounded-lg border-none' />
              <Link to={'/FoydalanishSharti'} className='text-sm text-black duration-500 sm:text-base'><u className='text-black'>Моя личная информация </u> Я принимаю условия обработки <span className="text-red-600 text-bold text-xl"> *</span></Link>
            </div>
            <div className="flex justify-center">
              <button className='w-full py-5 bg-[#79c701] text-lg text-white rounded-md sm:text-xl' type="submit">ОТПРАВЛЯТЬ</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


    </div>
  );
};

export default Home;
