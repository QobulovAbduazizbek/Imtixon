import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arrowd from '../img/Arrowd.png';
import Telegram from '../img/Telegram.png';
import vk from '../img/vk.png';
import yandex from '../img/yandex.png';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

const Header = () => {
  const [down, setDown] = useState(false);
  const [bir, setBir] = useState(false);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ name: '', message: '', phone: '' });
  const [error, setError] = useState('');

  const handleOpen = () => setDown(true);
  const handleClose = () => setDown(false);
  const birOpen = () => setBir(true);
  const birClose = () => setBir(false);

  const closeModal = (e) => {
    if (e.target.id === 'overlay') setModal(false);
  };

  const clickEscape = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', clickEscape);
    return () => document.removeEventListener('keydown', clickEscape);
  }, []);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message || !form.phone) {
      setError('Please fill all fields');
      return;
    }
    // Handle form submission logic here
    setError('');
    setModal(false);
  };

  return (
    <div>
      <header className="py-5 bg-[#fafafa]">
        <div className="w-full max-w-base px-4 md:px-12 mx-auto flex items-center relative">
          <div className="flex-grow flex items-center justify-between space-x-5">
            <button>
              <div onMouseMove={handleOpen} onMouseLeave={handleClose} className="relative">
                <Link to="/projects">
                  <span className="py-3 px-5 border-2 border-green-500 hover:bg-[#79c701] hover:text-white duration-700 text-black rounded-md font-medium text-[16px] md:text-[20px]">
                    Проекты
                  </span>
                </Link>
                {down && (
                  <div onMouseMove={handleOpen} onMouseLeave={handleClose} className="absolute left-0 top-full mt-2 py-5 px-5 rounded-md bg-[#fff] shadow-lg z-10">
                    <ul className="text-center">
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
            <ul className="hidden lg:flex space-x-5 justify-center">
              <li>
                <Link to={'/'}>
                  <span className="text-black font-normal text-[16px] hover:text-[#79c701] duration-300">Главная</span>
                </Link>
              </li>
              <li onMouseMove={birOpen} onMouseLeave={birClose} className="relative">
                <Link to={'/Kompaniya'} className="flex items-center">
                  <span className="text-black font-normal text-[16px] hover:text-[#79c701] duration-300">О компании</span>
                  <img className='w-4 h-4 md:w-6 md:h-5 bg-gray-200 ml-2 md:ml-3' src={Arrowd} alt="" style={{ padding: '5px', borderRadius: '4px' }} />
                </Link>
                {bir && (
                  <div onMouseMove={birOpen} onMouseLeave={birClose} className="absolute left-0 top-full px-5 mt-2 py-5 pr-10 pl-3 rounded-md bg-[#fff] shadow-lg z-10">
                    <ul className="text-center">
                      <li>
                        <Link to={'/BizHaqimizda'} className="text-[16px] text-[#a19f9f] font-medium hover:text-[#79c701]" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                          Отзывы о нас
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li>
                <Link to={'/BizningLoiha'}>
                  <span className="text-black font-normal text-[16px] hover:text-[#79c701] duration-300">Наши проекты</span>
                </Link>
              </li>
              <li>
                <Link to={'/Galareya'}>
                  <span className="text-black font-normal text-[16px] hover:text-[#79c701] duration-300">Фотогалерея</span>
                </Link>
              </li>
              <li>
                <Link to={'/Aksiya'}>
                  <span className="text-black font-normal text-[16px] hover:text-[#79c701] duration-300">Акции</span>
                </Link>
              </li>
              <li>
                <Link to={'/Maqolalar'}>
                  <span className="text-black font-normal text-[16px] hover:text-[#79c701] duration-300">Статьи</span>
                </Link>
              </li>
              <li>
                <Link to={'/Kontakt'} className="text-black font-normal text-[16px] hover:text-[#79c701] duration-300">Контакты</Link>
              </li>
            </ul>
            <div className="ml-auto hidden lg:block">
            <Link>
              <div className="bg-[#79c701] hover:bg-[#97d23a] duration-500 px-5 py-3 rounded-lg">
                <span onClick={() => setModal(true)} className="font-medium">Расчёт стоимости</span>
              </div>
            </Link>
          </div>
          </div>
         
          <div className="lg:hidden">
          <div className="lg:hidden">
  <Popover placement="bottom-end">
    <PopoverHandler>
      <Button>
        <div className="bg-[#79c701] hover:bg-[#97d23a] duration-500 px-5 py-3 rounded-lg">
          <span className="font-medium">Меню</span>
        </div>
      </Button>
    </PopoverHandler>
    <PopoverContent className="w-64 z-50 border-none"> {/* Border removed here */}
      <div className="flex flex-col p-5">
        <Link to={'/'} className="mb-2 text-xl hover:text-[#79c701] duration-300">Главная</Link>
        <Link to={'/Kompaniya'} className="mb-2 text-xl hover:text-[#79c701] duration-300">О компании</Link>
        <Link to={'/BizningLoiha'} className="mb-2 text-xl hover:text-[#79c701] duration-300">Наши проекты</Link>
        <Link to={'/Galareya'} className="mb-2 text-xl hover:text-[#79c701] duration-300">Фотогалерея</Link>
        <Link to={'/Aksiya'} className="mb-2 text-xl hover:text-[#79c701] duration-300">Акции</Link>
        <Link to={'/Maqolalar'} className="mb-2 text-xl hover:text-[#79c701] duration-300">Статьи</Link>
        <Link to={'/Kontakt'} className="text-xl hover:text-[#79c701] duration-300">Контакты</Link>
      </div>
    </PopoverContent>
  </Popover>
</div>

          </div>
        </div>
      </header>
      {modal && (
        <div id="overlay" className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" onClick={closeModal}>
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button className="absolute top-0 right-0 mt-2 mr-2 text-2xl font-bold text-gray-600 hover:text-gray-800" onClick={() => setModal(false)}>&times;</button>
            <h1 className='text-black text-xl sm:text-2xl text-center font-semibold mb-3'>Рассчитать стоимость строительства</h1>
            <p className="text-black text-sm sm:text-base text-center mb-5">Мы ответим вам в удобное для вас время</p>
            <form onSubmit={handleSubmit}>
              <input
                className='text-black w-full text-base sm:text-lg px-4 py-2 mb-4 border-[1px] rounded-md hover:border-green-500 duration-500'
                type="text"
                placeholder="Ваше имя"
                name="name"
                value={form.name}
                onChange={handleChange}
              />
              <textarea
                className='text-black w-full text-base sm:text-lg px-4 py-2 mb-4 border-[1px] rounded-md hover:border-green-500 duration-500'
                name="message"
                placeholder="Объяснение"
                value={form.message}
                onChange={handleChange}
              ></textarea>
              <input
                className='text-black w-full text-base sm:text-lg px-4 py-2 mb-4 border-[1px] rounded-md hover:border-green-500 duration-500'
                type="tel"
                placeholder="+7 (___) ___ __ __"
                name="phone"
                value={form.phone}
                onChange={handleChange}
              />
              <div className='flex items-center mb-4'>
              <input type="checkbox" className='mr-3 h-5 w-5 rounded-lg border-none' />
              <label className="text-black">Моя личная информация <Link to={'/FoydalanishSharti'} className='text-sm text-black duration-500 sm:text-base'><u>Я принимаю условия обработки</u></Link> <span className="text-red-600 text-bold text-xl"> *</span></label>
            </div>
              <button className="bg-[#79c701] hover:bg-[#97d23a] duration-500 px-5 py-2 rounded-lg text-white" type="submit">
                Отправить
              </button>
              {error && <p className="text-red-500 mt-3">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
