import React, { useState } from "react";
import { Link } from "react-router-dom";
import Arrowd from '../img/Arrowd.png'
import Telegram from '../img/Telegram.png'
import vk from '../img/vk.png'
import yandex from '../img/yandex.png'

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

const Header = () => {

  const YourComponent = () => {
    const [modal, setModal] = useState(true);
  
    const closeModal = () => {
      setModal(false);
    }
  }



  const [down, setDown] = useState(false);

  const handleOpen = () => {
    setDown(true);
  };
  const handleClose = () => {
    setDown(false);
  };

  const [bir, setbir] = useState(false);

  const birOpen = () => {
    setbir(true);
  };
  const birClose = () => {
    setbir(false);
  };

  const [modal, setModal] = useState(false);
  const closeModal = (e) => {
    if (e.target.id === 'overlay') setModal(false);
  }
  const clickEscape = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  }
  document.addEventListener('keydown', clickEscape);

  return (
    <div>
      <header className="py-5 bg-[#fafafa]">
        <div className="w-full max-w-base px-4 md:px-12 mx-auto flex justify-between items-center">
          <button>
            <div onMouseMove={handleOpen} onMouseLeave={handleClose}>
              <Link>
                <span className="py-3 px-5 border-2 border-green-500 hover:bg-[#79c701] hover:text-white duration-700 text-black rounded-md font-medium text-[16px] md:text-[20px]">
                  Проекты
                </span>
              </Link>
              {down && (
                <div onMouseMove={handleOpen} onMouseLeave={handleClose} className="z-10 absolute left-4 md:left-16 top-[68px] py-5 px-5 rounded-md bg-[#fff]">
                  <ul className="text-start">
                    <li>
                      <Link to={'/ToshUy'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Каменные дома
                      </Link>
                      <hr className="my-2 text-black" />
                    </li>
                    <li>
                      <Link to={'/BloklanganUylar'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Блочные дома
                      </Link>
                      <hr className="my-2 text-black" />
                    </li>
                    <li>
                      <Link to={'/RamkaliUy'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Каркасные дома
                      </Link>
                      <hr className="my-2 text-black" />
                    </li>
                    <li>
                      <Link to={'/YogochdanYasalgan'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Дома из бруса
                      </Link>
                      <hr className="my-2 text-black" />
                    </li>
                    <li>
                      <Link to={'/YogochUy'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Бревенчатые дома
                      </Link>
                      <hr className="my-2 text-black" />
                    </li>
                    <li>
                      <Link to={'/YarimYogoch'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Фахверковые дома
                      </Link>
                      <hr className="my-2 text-black" />
                    </li>
                    <li>
                      <Link to={'/Vannalar'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Бани
                      </Link>
                      <hr className="my-2 text-black" />
                    </li>
                    <li>
                      <Link to={'/Gazebos'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Беседки
                      </Link>
                      <hr className="my-2 text-black" />
                    </li>
                    <li>
                      <Link to={'/Garaj'} className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]">
                        Гаражи
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </button>
          <ul className="hidden md:flex">
            <li>
              <Link to={'/'}>
                <span className="text-black font-normal text-[16px] mr-5 lg:mr-10 hover:text-[#79c701] duration-300">Главная</span>
              </Link>
            </li>
            <li onMouseMove={birOpen} onMouseLeave={birClose}>
              <Link to={'/Kompaniya'} className="flex items-center">
                <span className="text-black font-normal text-[16px] hover:text-[#79c701] duration-300">О компании</span>
                <img className='w-4 h-4 md:w-6 md:h-5 bg-gray-200 ml-2 md:ml-3 mr-5 lg:mr-10' src={Arrowd} alt="" style={{ padding: '5px', borderRadius: '4px' }} />
              </Link>
              {bir && (
                <div onMouseMove={birOpen} onMouseLeave={birClose} className="z-10 absolute left-4 md:left-70 top-[55px] py-5 pr-10 pl-3 rounded-md bg-[#fff]">
                  <ul className="text-start">
                    <li>
                      <Link to={'/BizHaqimizda'} className="text-[16px] text-[#a19f9f] font-medium ml-[400px] hover:text-[#79c701]">
                        Отзывы о нас
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to={'/BizningLoiha'}>
                <span className="text-black font-normal text-[16px] mr-5 lg:mr-10 hover:text-[#79c701] duration-300">Наши проекты</span>
              </Link>
            </li>
            <li>
              <Link to={'/Galareya'}>
                <span className="text-black font-normal text-[16px] mr-5 lg:mr-10 hover:text-[#79c701] duration-300">Фотогалерея</span>
              </Link>
            </li>
            <li>
              <Link to={'/Aksiya'}>
                <span className="text-black font-normal text-[16px] mr-5 lg:mr-10 hover:text-[#79c701] duration-300">Акции</span>
              </Link>
            </li>
            <li>
              <Link to={'/Maqolalar'}>
                <span className="text-black font-normal text-[16px] mr-5 lg:mr-10 hover:text-[#79c701] duration-300">Статьи</span>
              </Link>
            </li>
            <li>
              <Link to={'/Kontakt'} className="text-black font-normal text-[16px] mr-5 lg:mr-10 hover:text-[#79c701] duration-300">Контакты</Link>
            </li>
          </ul>
          <div className="md:hidden">
            <Popover placement="bottom-end">
              <PopoverHandler>
                <Button>
                  <div className="bg-[#79c701] hover:bg-[#97d23a] duration-500 px-5 py-3 rounded-lg">
                    <span className="font-medium">Меню</span>
                  </div>
                </Button>
              </PopoverHandler>
              <PopoverContent className="w-64">
                <div className="flex flex-col p-5">
                  <Link to={'/'} className="mb-2 hover:text-[#79c701] duration-300">Главная</Link>
                  <Link to={'/Kompaniya'} className="mb-2 hover:text-[#79c701] duration-300">О компании</Link>
                  <Link to={'/BizningLoiha'} className="mb-2 hover:text-[#79c701] duration-300">Наши проекты</Link>
                  <Link to={'/Galareya'} className="mb-2 hover:text-[#79c701] duration-300">Фотогалерея</Link>
                  <Link to={'/Aksiya'} className="mb-2 hover:text-[#79c701] duration-300">Акции</Link>
                  <Link to={'/Maqolalar'} className="mb-2 hover:text-[#79c701] duration-300">Статьи</Link>
                  <Link to={'/Kontakt'} className="hover:text-[#79c701] duration-300">Контакты</Link>
                </div>
              </PopoverContent>
            </Popover>
          </div>
          <div className="hidden md:block">
            <Link>
              <div className="bg-[#79c701] hover:bg-[#97d23a] duration-500 px-5 py-3 rounded-lg">
                <span onClick={() => setModal(true)} className="font-medium">Расчёт стоимости</span>
              </div>
            </Link>
          </div>
        </div>
      </header>
      <div className="bg-white text-black">
        <div className='w-full max-w-base px-4 md:px-12 mx-auto py-5'>
          <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='mb-5 md:mb-0'>
              <h3 className='font-semibold text-[20px] md:text-[25px]'>Название компании</h3>
              <p className='font-normal text-[14px] md:text-[16px]'>Загородное строительство</p>
            </div>
            <div>
              <p>Мы на связи 24/7</p>
              <div className='flex flex-col md:flex-row items-center'>
                <p className='font-semibold text-[20px] md:text-[25px] mr-0 md:mr-5'>+7 (000) 000 00 00</p>
                <Popover placement="bottom-end">
                  <PopoverHandler>
                    <Button>
                      <div>
                        <img className='w-6 h-6 md:w-8 md:h-8 bg-gray-200 hover:bg-green-400 duration-700' src={Arrowd} alt="" style={{ padding: '5px', borderRadius: '4px' }} />
                      </div>
                    </Button>
                  </PopoverHandler>
                  <PopoverContent className="w-72">
                    <div className="mb-4 text-start z-10 absolute items-center rounded-md bg-white w-full gap-4 px-5 pb-4">
                      <h3 className='text-black text-[20px] font-bold mb-3'>Контакты</h3>
                      <p>Телефон горячей линии:</p>
                      <div className='flex items-center'>
                        <p className='text-[20px] font-bold mr-3 mb-3'>+7 (000) 000 00 00</p>
                        <img className='w-12' src={Telegram} alt="" />
                      </div>
                      <p className='text-[20px] font-bold mb-5'>8 (000) 111-11-11</p>
                      <p className='text-[#807f7f]'>Адрес офиса:</p>
                      <p className='text-[16px] font-medium text-[black] mb-3'>г. Москва, Ленинский проспект, дом</p>
                      <p>E-mail:</p>
                      <Link className='text-[#45ca39] text-[16px]'>login@domain.ru</Link>
                      <hr className='w-[125px] border-y-1 mb-5 border-[#45ca39]' />
                      <p className='text-black text-[20px] font-bold mb-3'>График работы</p>
                      <p>Пн-Пт с 9:00 до 18:00</p>
                      <p>Суббота с 10:00 до 17:00</p>
                      <p className='mb-3'>Воскресенье - выходной</p>
                      <p className='text-black text-[20px] font-bold mb-3'>Мы в сетях</p>
                      <div className='flex items-center'>
                        <Link><img className='w-[40px] md:w-[60px] hover:-translate-y-3 duration-700' src={vk} alt="" /></Link>
                        <Link><img className='w-[25px] md:w-[39px] hover:-translate-y-3 duration-700' src={yandex} alt="" /></Link>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
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
            <form>
              <input className='text-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-[1px] rounded-md hover:border-green-500 duration-500' type="text" placeholder="Ваше имя" />
              <textarea className='text-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-[1px] rounded-md hover:border-green-500 duration-500' name="Message" placeholder="Объяснение"></textarea>
              <input className='text-black w-full text-base sm:text-lg px-5 py-3 mb-5 border-[1px] rounded-md hover:border-green-500 duration-500' type="tel" placeholder="+7 (___) ___ __ __" />
            </form>
            <div className='flex items-center mb-4'>
              <input type="checkbox" className='mr-3 h-5 w-5 rounded-lg border-none' />
              <a href="/FoydalanishSharti" target="_blank" onClick={closeModal} className='text-sm text-black duration-500 sm:text-base'>
                <u className='text-black'>Моя личная информация</u> Я принимаю условия обработки <span className="text-red-600 text-bold text-xl"> *</span>
              </a>
            </div>
            <div className="flex justify-center">
              <button className='w-full py-5 bg-[#79c701] text-lg text-white rounded-md sm:text-xl'>ОТПРАВЛЯТЬ</button>
            </div>
          </div>
        </div>
      </div>
    )
      }
    </div>
  );
};

export default Header;
