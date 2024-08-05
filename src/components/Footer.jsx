import React, { useEffect, useState } from 'react';
import Telegram from '../img/Telegram.png';
import wh from '../img/wh.png';
import vk from '../img/vk.png';
import yandex from '../img/yandex.png';
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {

  // Telegram bot
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false); // New state for checkbox error
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setRotate(true);
    setIsModalOpen(prev => !prev);
    setTimeout(() => setRotate(false), 300);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    setCheckboxError(false); // Reset error state when checkbox is changed
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
  
    if (trimmedName === "" || trimmedPhone === "") {
      alert("Iltimos malumotni to'ldiring");
    } else if (!isCheckboxChecked) {
      setCheckboxError(true); // Show error message if checkbox is not checked
      alert("Iltimos, shaxsiy ma'lumotlaringizni tasdiqlang");
    } else {
      const telegram_bot_id = "7233272711:AAH91LcYfkmAKISHvEZrCQwnisVlVIf7MBE";
      const chat_id = "-1002167792051";
  
      const telegramMessage = `Name: ${name}\nPhone Number: ${phone}`;
  
      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setPhone("");
          setIsCheckboxChecked(false);
          setCheckboxError(false); //
          alert("Ma'lumot yuborildi!");
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    }
  };
  

  const toggleInfoModal = () => {
    setIsInfoModalOpen(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
        setIsInfoModalOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setIsInfoModalOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);


  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ name: '', message: '', phone: '' });
  const [error, setError] = useState('');

  const closeModal = (e) => {
    if (e.target.id === 'overlay') setModal(false);
  }

  const clickEscape = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  }
  document.addEventListener('keydown', clickEscape);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className='bg-[#1f1e1e]'>
      <div className='w-full max-w-base pt-20 mx-auto px-5'>
        <ul className='w-full max-w-base mx-auto pb-16 px-5 flex flex-col md:flex-row md:flex-wrap items-start justify-between'>
          <li className='mb-10 md:mb-0 w-full md:w-1/2 lg:w-1/3'>
            <h3 className='text-white font-medium text-[24px] md:text-[30px] mb-5'>Строительная компания</h3>
            <p className='text-[#acacac] text-[16px] md:text-[20px]'>ИНН 780621518596</p>
            <p className='text-[#acacac] text-[16px] md:text-[20px] mb-5'>ОГРНИП 31878470038539</p>
            <Link onClick={() => setModal(true)} className='text-[#45ca39] text-[16px] md:text-[20px]'>Бесплатная консультация</Link>
            <hr className='w-[190px] md:w-[245px] border-y-2 mb-5 border-[#45ca39]' />
            <div className='flex items-center'>
              <Link><img className='w-[40px] md:w-[70px] hover:-translate-y-3 duration-700' src={vk} alt="" /></Link>
              <Link><img className='w-[30px] md:w-[49px] hover:-translate-y-3 duration-700' src={yandex} alt="" /></Link>
              <Link><img className='w-[35px] md:w-[65px] hover:-translate-y-3 duration-700' src={wh} alt="" /></Link>
              <Link><img className='w-[35px] md:w-[65px] hover:-translate-y-3 duration-700' src={Telegram} alt="" /></Link>
            </div>
          </li>
          <li className='mb-10 md:mb-0 w-full md:w-1/2 lg:w-1/3'>
            <h3 className='text-white font-medium text-[24px] md:text-[30px] mb-5'>Контакты</h3>
            <div className='flex items-center mb-3'>
              <p className='text-white mr-3 text-[16px] md:text-[20px]'>+7 (000) 123 54 98</p>
              <img className='w-8 md:w-12' src={Telegram} alt="" />
            </div>
            <div className='flex items-center mb-3'>
              <p className='text-white mr-3 md:mr-6 text-[16px] md:text-[20px]'>8 (000) 456 78 09</p>
              <img className='w-8 md:w-11' src={wh} alt="" />
            </div>
            <p className='text-white text-[16px] md:text-[20px] mb-5'>+7 (000) 456 78 09</p>
            <p className='text-[#acacac] text-[14px] md:text-[16px]'>E-mail:</p>
            <label className='text-white text-[16px] md:text-[18px]'>login@domain.ru</label>
            <hr className='w-[140px] border-spacing-y-1.5' />
          </li>
          <li className='w-full lg:w-1/3'>
            <h3 className='text-white font-medium text-[24px] md:text-[30px] mb-5'>Наш офис</h3>
            <p className='text-[#acacac]'>Адрес офиса:</p>
            <p className='text-white text-[16px] md:text-[20px] mb-5'>г. Москва, Ленинский проспект, дом</p>
            <p className='text-[#acacac]'>График работы:</p>
            <p className='text-white text-[16px] md:text-[20px]'>
              Пн-Пт с 9:00 до 18:00<br />
              Суббота с 10:00 до 17:00<br />
              Воскресенье - выходной
            </p>
          </li>
        </ul>

        <div className='mb-10'>
          <hr className='border-[#535252] border-spacing-y-1.5' />
        </div>
        <div className='flex flex-col md:flex-row items-center justify-between pb-5'>
          <p className='text-[#acacac] text-[14px] md:text-[16px] mb-3 md:mb-0'>Copyright © 2022 - 2024 Название компании</p>
          <p className='text-[#acacac] text-[14px] md:text-[16px]'>Поддержка. <u>Разработка сайтов</u> в Megagroup.</p>
        </div>
      </div>
      {modal && (
        <div onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-50 z-20 pt-10' id='overlay'>
          <div className='max-w-[470px] bg-white w-full mx-auto min-h-4/5 bg-bgModal rounded-3xl relative'>
            <button onClick={() => setModal(false)} className='absolute top-0 right-0 w-12 h-12 flex items-center justify-center rounded-full text-[#79c701] text-3xl font-bold font-mono'>&times;</button>
            <div className='px-5 md:px-10 py-12'>
              <h1 className='text-black text-3xl text-center font-semibold mb-3'>Заказать звонок</h1>
              <p className="text-black text-xl text-center mb-5">Мы ответим в удобное для вас время</p>
              <form onSubmit={handleSubmitInput}>
              <ul>
                <li className="mb-5">
                  <form action="">
                    <input
                      data-aos="fade-up"
                      required
                      type="text"
                      name="name"
                      placeholder="Ваше имя"
                      onChange={handleName}
                      value={name}
                      className="py-[20px] pr-[220px] mb-5 lg:mb-0 pl-5 rounded-lg text-black font-medium mr-6"
                    />
                    <input
                      onChange={handlePhone}
                      data-aos="fade-up"
                      type="text"
                      name="phone"
                      placeholder="+7 (___) ___ __ __"
                      value={phone}
                      className="py-[20px] pr-[220px] mt-5 pl-5 rounded-lg text-black font-medium"
                    />
                  </form>
                </li>
                <li>
                  <div className="flex items-center mb-5">
                    <input
                      id="privacy"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                      data-aos="fade-up"
                      type="checkbox"
                      className="mr-3 h-5 w-5 rounded-lg border-none"
                    />
                    <p
                      data-aos="fade-up"
                      className="text-[15px] font-medium text-[#868686]"
                    >
                      <Link data-aos="fade-up" to={"/FoydalanishSharti"}>
                        Ознакомлен(а) с{" "}
                      </Link>{" "}
                      <u>пользовательским соглашением *</u>
                    </p>
                    {checkboxError && (
                      <p className="text-red-500 text-sm">
                        Пожалуйста, подтвердите согласие
                      </p>
                    )}
                  </div>
                </li>
                <li>
                  <button
                    data-aos="fade-up"
                    type="submit"
                    className="bg-[#79c701] py-6 rounded-lg px-7 text-white text-[20px] font-semibold"
                  >
                    Заказать звонок
                  </button>
                </li>
              </ul>
            </form>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
