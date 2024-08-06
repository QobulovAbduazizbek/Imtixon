import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import axios from "axios";
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import opaxon from "../img/S_1.webp";
import ayiqcha from "../img/S_2.webp";
import arrow from "../img/Arrow.png";

const HomeHero = () => {
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

  // boshqalar
  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        setModal(false);
      }
    };

    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [modal, setModal] = useState(false);

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="w-16 h-16  bg-gray-600 mt-36 mr-3 opacity-70 rounded-2xl absolute top-1/2 right-5 flex items-center justify-center z-10 hover:bg-[#63b700] cursor-pointer"
      onClick={onClick}
    >
      <img className="w-8 h-8" src={arrow} alt="Next" />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="w-16 h-16 bg-gray-600 mt-36 mr-3  opacity-70 rounded-2xl absolute top-1/2 right-24 flex items-center justify-center z-10 hover:bg-[#63b700] cursor-pointer"
      onClick={onClick}
    >
      <img className="w-8 h-8 rotate-180" src={arrow} alt="Prev" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    adaptiveHeight: true,
    beforeChange: handleBeforeChange,
    dots: true,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "12px",
          height: "12px",
          backgroundColor: currentSlide === i ? "#79c701" : "white",
          border: "2px white solid",
          borderRadius: "50%",
          margin: "0 5px",
          cursor: "pointer",
        }}
      />
    ),
  };

  const closeModal = (e) => {
    if (e.target.id === 'modal-background') {
      setModal(false);
    }
  };

  return (
    <div className="w-full flex flex-col items-center py-0 px-0 relative">
      <div className="w-full h-full bg-white relative">
  <Slider {...settings} className="w-full">
    <div className="relative w-full h-[80vh]">
      <img className="w-full h-full object-cover" src={opaxon} alt="Opaxon" />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div
        data-aos="fade-up"
        className="absolute inset-0 flex flex-col w-full max-w-[1400px] mx-auto px-5 pb-20 justify-center items-center text-white text-center md:items-start md:ml-20"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[30px] md:leading-[46px] break-words text-center md:text-left">
          Остекление балконов со<br /> скидкой 30%
        </h3>
        <p className="text-lg leading-[25px] font-medium mt-5">
          При заказе комплексной услуги под ключ
        </p>
        <Link
          onClick={() => setModal(true)}
          className="bg-[#79c701] px-4 mt-5 py-3 sm:px-5 sm:py-4 md:px-5 md:py-6 text-[14px] sm:text-[16px] md:text-[18px] font-bold rounded-md cursor-pointer"
        >
          Расчёт стоимости
        </Link>
      </div>
    </div>

    <div className="relative w-full h-[80vh]">
      <img className="w-full h-full object-cover" src={ayiqcha} alt="Ayiqcha" />
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div
        data-aos="fade-up"
        className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 md:items-start md:ml-20"
      >
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[30px] md:leading-[46px] break-words text-center md:text-left">
          <span>Сделаем всё под ключ:</span>
        </h3>
        <p className="text-lg leading-[25px] font-medium mt-5">
          от производства до установки за 5 дней
        </p>
        <Link
          onClick={() => setModal(true)}
          className="bg-[#79c701] px-4 mt-5 py-3 sm:px-5 sm:py-4 md:px-5 md:py-6 text-[14px] sm:text-[16px] md:text-[18px] font-bold rounded-md cursor-pointer"
        >
          Расчёт стоимости
        </Link>
      </div>
    </div>
  </Slider>
</div>

      {modal && (
        <div
          id="modal-background"
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="bg-white p-8 rounded-lg max-w-lg w-full relative">
            <button
              className="absolute top-2 right-2 text-black text-2xl font-bold"
              onClick={() => setModal(false)}
            >
              &times;
            </button>
            <div className="px-6 py-8 sm:px-4 sm:py-6">
              <h1 data-aos="fade-up" className="text-black text-2xl sm:text-3xl text-center font-semibold mb-3">
                Рассчитать стоимость строительства
              </h1>
              <p data-aos="fade-up" className="text-black text-base sm:text-lg text-center mb-5">
                Мы ответим вам в удобное для вас время
              </p>
              <form onSubmit={handleSubmitInput}>
                <ul>
                  <li className="mb-5">
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
                        <p className="text-red-500 text-sm" data-aos="fade-up">
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
};

export default HomeHero;
