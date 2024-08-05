import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Button from '../img/Button.png';
import Telegram from '../img/Telegram.png';
import wh from '../img/wh.png';
import axios from "axios";
import vk from '../img/vk.png';
import PageWrapper from '../components/PageWrapper';
import AOS from 'aos';

const SignUp = () => {
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

    return (
        <PageWrapper>
        <div>
            <div className='w-full max-w-base py-8 px-5 md:px-10 mx-auto'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]">
                        <u>Главная</u>
                    </Link>
                    <span className='mx-1'>/</span>
                    <p className='text-[#a5a3a3] md:self-end'>Авторизация</p>
                </div>
                <div>
                    <h3 className='text-[30px] md:text-[50px] font-bold mb-6 md:mb-10'>
                        Разрешение
                    </h3>
                    <div className='border-2 py-4 md:py-5 px-3 md:px-5'>
                        <p className='text-[16px] md:text-[18px] font-bold mb-1'>Электронная почта:</p>
                        <div className='flex flex-col md:flex-row items-start md:justify-between'>
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
                          className="py-[20px] pr-[270px] lg:mb-0 pl-5 rounded-lg text-black font-medium mr-6"
                        />
                        <input
                          onChange={handlePhone}
                          data-aos="fade-up"
                          type="text"
                          name="phone"
                          placeholder="+7 (___) ___ __ __"
                          value={phone}
                          className="py-[20px] pr-[270px] mt-5 pl-5 rounded-lg text-black font-medium"
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
                        className="bg-blue-500 py-3 rounded-lg px-8 mr-5 text-white text-[20px] font-semibold"
                      >
                        Заказать звонок
                      </button>
                      <Link
                      to={'/RoyxatdanOt'}
                        data-aos="fade-up"
                        className=" py-3 rounded-lg px-7 text-black bg-white text-xl font-semibold"
                      >
                        Заказать звонок
                      </Link>
                    </li>
                  </ul>
                </form>
                            <div className='text-start'>
                                <p className='text-[16px] md:text-[20px] font-bold mb-3 md:mb-0'>Вы также можете войти через:</p>
                                <img className="w-full md:w-auto" src={Button} alt="" />
                                <div className='flex items-center'>
                                    <img className='w-[90px] h-10 md:w-auto mr-2 md:mr-5' src={Telegram} alt="" />
                                    <img className='w-[90px] h-10 md:w-auto mr-2 md:mr-5' src={wh} alt="" />
                                    <img className='w-[90px] h-10 md:w-auto' src={vk} alt="" />
                                </div>
                                <p className='text-[14px] md:text-[16px]'>Подключившись и зарегистрировавшись, вы</p>
                                <Link className='text-[#6cd16c] text-[14px] md:text-[16px] hover:underline' to={'/FoydalanishSharti'}>
                                    <u>принимаете пользовательское соглашение</u>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
    );
};

export default SignUp;
