import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "swiper/swiper-bundle.css";
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
import Qulay_8 from "../img/Qulay_8.webp";
import Qulay_9 from "../img/Qulay_9.webp";
import Qulay_10 from "../img/Qulay_10.webp";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-rotate.css";
import LightGallery from "lightgallery/react/Lightgallery.es5";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgVideo from "lightgallery/plugins/video";
import lgShare from "lightgallery/plugins/share";
import lgRotate from "lightgallery/plugins/rotate";

import { Swiper, SwiperSlide } from "swiper/react";
import HomeHero from "../components/HomeHero"

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import AOS from "aos";
import "aos/dist/aos.css";

import { Parallax, Pagination, Navigation } from "swiper/modules";
import PageWrapper from "../components/PageWrapper";
import UyProekti from "../components/UyProekti";

const Home = () => {
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
    setIsModalOpen((prev) => !prev);
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
      const telegram_bot_id = "7151234929:AAHvZF3cYXukCLo4ywa_ec0c-u753vznJck";
      const chat_id = "-1002083076166";

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

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    message: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let errors = { name: "", message: "", phone: "" };

    if (!formData.name) {
      errors.name = "Ваше имя обязательно для заполнения";
      valid = false;
    }
    if (!formData.message) {
      errors.message = "Объяснение обязательно для заполнения";
      valid = false;
    }
    if (!formData.phone) {
      errors.phone = "Телефон обязателен для заполнения";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log("Form submitted:", formData);
      setModal(false);
    }
  };
  const handleSubmit1 = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log("Form submitted:", formData);
      setButtonText("Отправлено");
      // Reset form or additional actions if needed
      setFormData({ name: "", phone: "" });
    }
  };
  const projects = [
    {
      id: 1,
      img: Qulay_1,
      title: "Двухэтажный дом К-102",
      area: "63,5 м2",
      size: "10х7.5м",
      rooms: "10х7.5м",
      price: "от 10 505 000 руб.",
    },
    {
      id: 2,
      img: Qulay_2,
      title: "Двухэтажный дом К-102",
      area: "63,5 м2",
      size: "10х7.5м",
      rooms: "10х7.5м",
      price: "от 10 505 000 руб.",
    },
    {
      id: 3,
      img: Qulay_3,
      title: "Двухэтажный дом К-102",
      area: "63,5 м2",
      size: "10х7.5м",
      rooms: "10х7.5м",
      price: "от 10 505 000 руб.",
    },
    {
      id: 4,
      img: Qulay_4,
      title: "Двухэтажный дом К-102",
      area: "63,5 м2",
      size: "10х7.5м",
      rooms: "10х7.5м",
      price: "от 10 505 000 руб.",
    },
    {
      id: 5,
      img: Qulay_5,
      title: "Двухэтажный дом К-102",
      area: "63,5 м2",
      size: "10х7.5м",
      rooms: "10х7.5м",
      price: "от 10 505 000 руб.",
    },
    {
      id: 6,
      img: Qulay_6,
      title: "Двухэтажный дом К-102",
      area: "63,5 м2",
      size: "10х7.5м",
      rooms: "10х7.5м",
      price: "от 10 505 000 руб.",
    },
  ];

  const images = [u_1, u_2, u_3, u_4];

  const renderGallery = () => {
    return images.map((src, index) => (
      <a
        key={index}
        href={src}
        data-lg-size="1406-1390"
        className="group w-full mb-3 h-[500px] rounded-md overflow-hidden relative inline-block cursor-pointer mx-auto"
      >
        <img
          className="w-full h-full  object-cover transition-transform duration-500 group-hover:scale-110"
          src={src}
          alt=""
        />
      </a>
    ));
  };

  const onInit = () => {
    console.log("lightGallery has been initialized");
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <PageWrapper>
      <div className="bg-[#ffffff]">
      <HomeHero />

        <div className="w-full max-w-[1450px] mx-auto"></div>

        <div>
          <UyProekti />

          <div className="w-full max-w-[1400px] mx-auto px-5 pb-20">
            <h3
              data-aos="fade-up"
              className="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-10 text-center"
            >
              Проекты домов
            </h3>
            <p
              data-aos="fade-up"
              className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-center sm:mb-7 md:mb-10 mb-4"
            >
              Мы разработали более 1000 проектов комфортных домов
            </p>
            <LightGallery
              speed={500}
              plugins={[
                lgThumbnail,
                lgShare,
                lgRotate,
                lgVideo,
                lgAutoplay,
                lgZoom,
              ]}
              elementClassNames="grid grid-cols-1 sm:grid-cols-1   md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
            >
              {renderGallery()}
            </LightGallery>
          </div>

          <div className="bg-[#fafafa]">
            <div className="w-full max-w-base mx-auto px-5 pb-20">
              <div className="text-center">
                <h3
                  data-aos="fade-up"
                  className="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-10 text-center"
                >
                  Типы возводимых домов
                </h3>
                <p
                  data-aos="fade-up"
                  className="text-[16px] sm:text-[25px] mb-7"
                >
                  Красивые дома для комфортного проживания
                </p>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
                <li className="flex flex-col">
                  <Link to={"/ToshUy"}>
                    <div className=" flex flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_1}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Кирпичные дома и коттеджи
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link to={"/BloklanganUylar"}>
                    <div className=" flex flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_2}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Блочные дома и коттеджи
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link to={"/YarimYogoch"}>
                    <div className=" flex flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_3}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Фахверковые дома и коттеджи
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link to={"/RamkaliUy"}>
                    <div className=" flex flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_4}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Каркасные дома и коттеджи
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link to={"/YogochdanYasalgan"}>
                    <div className=" flex flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_5}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Дома и коттеджи из бруса
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link to={"/YogochUy"}>
                    <div className=" flex flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_6}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Бревенчатые дома и коттеджи
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link to={"/Vannalar"}>
                    <div className=" flex flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_10}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Бани
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link to={"/Gazebos"}>
                    <div className=" flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_8}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Беседки
                      </h3>
                    </div>
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link to={"/Garaj"}>
                    <div className=" flex flex-col h-full pb-5">
                      <img
                        className="rounded-lg object-cover w-full h-64 "
                        src={Qulay_9}
                        alt=""
                      />
                      <h3 className="py-3 px-5 text-[25px] hover:text-[#6cd16c] duration-500 text-center font-bold">
                        Гаражи
                      </h3>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full max-w-base mx-auto">
            <h3
              data-aos="fade-up"
              className="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-10 text-center"
            >
              Этапы работ
            </h3>
            <p data-aos="fade-up" className="text-[16px] text-center mb-10">
              С нами выгодно строить
            </p>
            <ul className="w-full max-w-base px-5 pb-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-7">
              <li className="border-2 rounded-md flex items-center py-3 pl-5">
                <h4 className="font-bold text-[50px] text-[#bef762da] mr-5">
                  01.
                </h4>
                <div>
                  <p className="text-[20px] font-bold">Заявка</p>
                  <p className="text-[16px] text-[#b8b5b5]">
                    Вы связываетесь с нами
                  </p>
                </div>
              </li>
              <li className="border-2 rounded-md flex items-center py-3 pl-5">
                <h4 className="font-bold text-[50px] text-[#bef762da] mr-5">
                  02.
                </h4>
                <div>
                  <p className="text-[20px] font-bold">Расчет стоимости</p>
                  <p className="text-[16px] text-[#b8b5b5]">
                    При необходимости выезжаем на участок
                  </p>
                </div>
              </li>
              <li className="border-2 rounded-md flex items-center py-3 pl-5">
                <h4 className="font-bold text-[50px] text-[#bef762da] mr-5">
                  03.
                </h4>
                <div>
                  <p className="text-[20px] font-bold">Заключение договора</p>
                  <p className="text-[16px] text-[#b8b5b5]">
                    Согласовываем смету, подписываем договор
                  </p>
                </div>
              </li>
              <li className="border-2 rounded-md flex items-center py-3 pl-5">
                <h4 className="font-bold text-[50px] text-[#bef762da] mr-5">
                  04.
                </h4>
                <div>
                  <p className="text-[20px] font-bold">
                    Проектирование и согласование
                  </p>
                  <p className="text-[16px] text-[#b8b5b5]">
                    Проектируем, составляем смету
                  </p>
                </div>
              </li>
              <li className="border-2 rounded-md flex items-center py-3 pl-5">
                <h4 className="font-bold text-[50px] text-[#bef762da] mr-5">
                  05.
                </h4>
                <div>
                  <p className="text-[20px] font-bold">Строительство</p>
                  <p className="text-[16px] text-[#b8b5b5]">
                    Начинаем работу согласно договору
                  </p>
                </div>
              </li>
              <li className="border-2 rounded-md flex items-center py-3 pl-5">
                <h4 className="font-bold text-[50px] text-[#bef762da] mr-5">
                  06.
                </h4>
                <div>
                  <p className="text-[20px] font-bold">Ваш объект готов!</p>
                  <p className="text-[16px] text-[#b8b5b5]">
                    Счастливого новоселья
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="bg-[#fdfdfd]">
            <div className="w-full max-w-base  mx-auto px-10 py-20">
              <h3
                data-aos="fade-up"
                className="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-10 text-center"
              >
                Преимущества загородного дома
              </h3>
              <p data-aos="fade-up" className="text-center text-[16px] mb-10">
                Ощутите прелесть загородной жизни
              </p>
              <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2">
                <li className="bg-[#fafafa] text-center ">
                  <img
                    data-aos="fade-up"
                    className="mx-auto mb-3"
                    src={h_icon}
                    alt=""
                  />
                  <p data-aos="fade-up" className="font-semibold text-[20px]">
                    Собственная планировка
                  </p>
                  <p
                    data-aos="fade-up"
                    className="font-medium text-[16px] pb-4 text-gray-400"
                  >
                    Описание для информативности
                  </p>
                </li>
                <li className="bg-[#fafafa] text-center">
                  <img
                    data-aos="fade-up"
                    className="mx-auto"
                    src={h_icon}
                    alt=""
                  />
                  <p data-aos="fade-up" className="font-semibold text-[20px]">
                    Отсутствие шума и соседей
                  </p>
                  <p
                    data-aos="fade-up"
                    className="font-medium text-[16px] pb-4 text-gray-400"
                  >
                    Описание для информативности
                  </p>
                </li>
                <li className="bg-[#fafafa] text-center">
                  <img
                    data-aos="fade-up"
                    className="mx-auto"
                    src={h_icon}
                    alt=""
                  />
                  <p data-aos="fade-up" className="font-semibold text-[20px]">
                    Чистый воздух
                  </p>
                  <p
                    data-aos="fade-up"
                    className="font-medium text-[16px] pb-4 text-gray-400"
                  >
                    Описание для информативности
                  </p>
                </li>
                <li className="bg-[#fafafa] text-center">
                  <img
                    data-aos="fade-up"
                    className="mx-auto"
                    src={h_icon}
                    alt=""
                  />
                  <p data-aos="fade-up" className="font-semibold text-[20px]">
                    Собственный бассейн
                  </p>
                  <p
                    data-aos="fade-up"
                    className="font-medium text-[16px] pb-4 text-gray-400"
                  >
                    Описание для информативности
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="bg-img bg-no-repeat bg-cover w-full ">
            <div className="w-full max-w-base  mx-auto px-5 pt-14">
              <h3
                data-aos="fade-up"
                className="text-[40px] sm:text-[40px] text-white md:text-[50px] lg:text-[60px] font-bold mt-10  text-center"
              >
                О компании
              </h3>
              <div className="bg-white rounded-lg mb-14 w-full max-w-5xl py-10 px-12  mx-auto ">
                <p
                  data-aos="fade-up"
                  className="text-[15px] text-[#999797] mb-5"
                >
                  Сегодня загородный дом - это не только престиж и статус.
                </p>
                <p
                  data-aos="fade-up"
                  className="text-[15px] text-[#999797] mb-5"
                >
                  В первую очередь, это забота о здоровье. Свежий воздух,
                  радость от регулярного общения с природой, возможность гулять
                  с детьми под открытым небом, тишина, от которой так отвыкли
                  жители больших городов - это неполный перечень преимуществ,
                  которые доступны обладателю загородного дома.
                </p>
                <p
                  data-aos="fade-up"
                  className="text-[15px] text-[#999797] mb-7"
                >
                  Строительство дома - это очень ответственный шаг. Вы хотите
                  построить загородный дом или баню, но не знаете с чего начать?
                  На нашем сайте мы расскажем Вам, как осуществляется
                  строительство загородных домов, какие при этом возникают
                  сложности и как их можно избежать. Воспользовавшись нашими
                  советами, Вы сможете со знанием дела выбрать, какой из типов
                  домов Вам больше подходит.
                </p>
                <div className="text-center">
                  <Link
                    data-aos="fade-up"
                    to={"/Kompaniya"}
                    className="text-[#45ca39] text-[18px]"
                  >
                    Подробнее
                  </Link>
                  <hr className=" mx-auto w-[150px] border-y-2 mb-5 border-[#45ca39] " />
                </div>
              </div>
            </div>
            <ul className="w-full max-w-5xl pb-16 mx-auto grid grid-cols-1 gap-5 md:grid-cols-2 md:grid-rows-2">
              <li className="flex items-center">
                <img
                  data-aos="fade-up"
                  className="w-[150px]"
                  src={h_icon}
                  alt=""
                />
                <div>
                  <p
                    data-aos="fade-up"
                    className="text-white text-[20px] sm:text-[28px]"
                  >
                    Фиксированная смета
                  </p>
                  <p data-aos="fade-up" className="text-[20px] text-[#999797]">
                    Описание для информативности
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  data-aos="fade-up"
                  className="w-[150px]"
                  src={h_icon}
                  alt=""
                />
                <div>
                  <p
                    data-aos="fade-up"
                    className="text-white text-[20px] sm:text-[28px]"
                  >
                    Соблюдаем график работ
                  </p>
                  <p data-aos="fade-up" className="text-[20px] text-[#999797]">
                    Описание для информативности
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  data-aos="fade-up"
                  className="w-[150px]"
                  src={h_icon}
                  alt=""
                />
                <div>
                  <p
                    data-aos="fade-up"
                    className="text-white text-[20px] sm:text-[28px]"
                  >
                    Проектирование в подарок
                  </p>
                  <p data-aos="fade-up" className="text-[20px] text-[#999797]">
                    Описание для информативности
                  </p>
                </div>
              </li>
              <li className="flex items-center">
                <img
                  data-aos="fade-up"
                  className="w-[150px]"
                  src={h_icon}
                  alt=""
                />
                <div>
                  <p
                    data-aos="fade-up"
                    className="text-white text-[20px] sm:text-[28px]"
                  >
                    Гарантия 5 лет
                  </p>
                  <p data-aos="fade-up" className="text-[16px] text-[#999797]">
                    Описание для информативности
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#fafafa]">
            <div className="w-full max-w-base px-5 mx-auto items-center">
              <h3
                data-aos="fade-up"
                className="text-[40px] sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-10 text-center"
              >
                Статьи
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
      <li>
        <Link to={"/Komfort"}>
          <div className="bg-white pb-5">
            <img
              className="inline-block h-[300px] w-full rounded-lg"
              src={projects[0].img}
              alt={projects[0].title}
            />
            <h3
              data-aos="fade-up"
              className="py-3 px-5 text-center text-[25px] hover:text-[#6cd16c] duration-500"
            >
              {projects[0].title}
            </h3>
            <p data-aos="fade-up">{projects[0].text}</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to={"/Komfort2"}>
          <div className="bg-white pb-5">
            <img
              className="inline-block h-[300px] w-full rounded-lg"
              src={projects[1].img}
              alt={projects[1].title}
            />
            <h3
              data-aos="fade-up"
              className="py-3 px-5 text-center text-[25px] hover:text-[#6cd16c] duration-500"
            >
              {projects[1].title}
            </h3>
            <p data-aos="fade-up">{projects[1].text}</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to={"/Komfort3"}>
          <div className="bg-white pb-5">
            <img
              className="inline-block h-[300px] w-full rounded-lg"
              src={projects[2].img}
              alt={projects[2].title}
            />
            <h3
              data-aos="fade-up"
              className="py-3 px-5 text-center text-[25px] hover:text-[#6cd16c] duration-500"
            >
              {projects[2].title}
            </h3>
            <p data-aos="fade-up">{projects[2].text}</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to={"/Komfort4"}>
          <div className="bg-white pb-5">
            <img
              className="inline-block h-[300px] w-full rounded-lg"
              src={projects[3].img}
              alt={projects[3].title}
            />
            <h3
              data-aos="fade-up"
              className="py-3 px-5 text-center text-[25px] hover:text-[#6cd16c] duration-500"
            >
              {projects[3].title}
            </h3>
            <p data-aos="fade-up">{projects[3].text}</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to={"/Komfort5"}>
          <div className="bg-white pb-5">
            <img
              className="inline-block h-[300px] w-full rounded-lg"
              src={projects[4].img}
              alt={projects[4].title}
            />
            <h3
              data-aos="fade-up"
              className="py-3 px-5 text-center text-[25px] hover:text-[#6cd16c] duration-500"
            >
              {projects[4].title}
            </h3>
            <p data-aos="fade-up">{projects[4].text}</p>
          </div>
        </Link>
      </li>
      <li>
        <Link to={"/Komfort6"}>
          <div className="bg-white pb-5">
            <img
              className="inline-block h-[300px] w-full rounded-lg"
              src={projects[5].img}
              alt={projects[5].title}
            />
            <h3
              data-aos="fade-up"
              className="py-3 px-5 text-center text-[25px] hover:text-[#6cd16c] duration-500"
            >
              {projects[5].title}
            </h3>
            <p data-aos="fade-up">{projects[5].text}</p>
          </div>
        </Link>
      </li>
    </ul>
              <div className="text-center">
                <Link to={"/Maqolalar"} className="text-[#45ca39] text-[20px]">
                  {" "}
                  Все публикации
                </Link>
                <hr className=" mx-auto w-[150px] border-y-2 mb-5 border-[#45ca39] " />
              </div>
            </div>
          </div>

          <div className="bg-img bg-no-repeat bg-cover">
            <div className="w-full max-w-base mx-auto pt-20 pb-36 px-5">
              <div className="flex flex-col md:flex-row items-start justify-between">
                <div className="md:mr-10 mb-10 md:mb-0">
                  <ul>
                    <h3
                      data-aos="fade-up"
                      className="text-[40px] text-white sm:text-[40px] md:text-[50px] lg:text-[60px] font-bold mt-10"
                    >
                      Остались вопросы?
                    </h3>
                    <p
                      data-aos="fade-up"
                      className="text-[18px] font-medium text-gray-300 mb-5"
                    >
                      Свяжитесь с нами или оставьте заявку <br />и мы
                      проконсультируем вас по любому вопросу
                    </p>
                    <div className="flex items-center">
                      <p
                        data-aos="fade-up"
                        className="text-[18px] sm:text-[25px] text-white font-bold mr-3"
                      >
                        +7 (000) 000 00 00
                      </p>
                      <img
                        data-aos="fade-up"
                        className="w-16"
                        src={Telegram}
                        alt="Telegram"
                      />
                    </div>
                    <div className="flex items-center">
                      <p
                        data-aos="fade-up"
                        className="text-[18px] sm:text-[25px] text-white font-bold mr-3"
                      >
                        +7 (000) 000 00 00
                      </p>
                      <img
                        data-aos="fade-up"
                        className="w-16"
                        src={wh}
                        alt="WhatsApp"
                      />
                    </div>
                    <Link
                      data-aos="fade-up"
                      className="text-[#45ca39] text-[16px]"
                    >
                      test@example.com
                    </Link>
                    <hr className="w-[125px] border-y-1 mb-5 border-[#45ca39]" />
                  </ul>
                </div>
                <div>
                  <form onSubmit={handleSubmitInput}>
                    <ul>
                      <li>
                        <p
                          data-aos="fade-up"
                          className="text-[45px] sm:text-[25px] font-bold text-white mb-3"
                        >
                          Мы ответим в удобное для <br /> вас время
                        </p>
                        <p
                          data-aos="fade-up"
                          className="text-[15px] font-medium text-[#868686] mb-5"
                        >
                          Оставьте заявку на звонок прямо сейчас
                        </p>
                      </li>
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
                            className="py-[20px] pr-[50px] mb-5 lg:mb-0 pl-5 rounded-lg text-black font-medium mr-6"
                          />
                          <input
                            onChange={handlePhone}
                            data-aos="fade-up"
                            type="text"
                            name="phone"
                            placeholder="+7 (___) ___ __ __"
                            value={phone}
                            className="py-[20px] pr-[50px] pl-5 rounded-lg text-black font-medium"
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
          </div>
        </div>

        {modal && (
          <div
            onClick={closeModal}
            className="fixed max-w-full min-h-[800px] inset-0 bg-black bg-opacity-50 z-20 pt-10"
            id="overlay"
          >
            <div className="max-w-full bg-white w-[500px] mx-auto min-h-4/5 bg-bgModal rounded-3xl relative">
              <button
                onClick={() => setModal(false)}
                className="absolute top-0 right-0 w-12 h-12 flex items-center justify-center rounded-full text-[#79c701] text-3xl font-bold font-mono"
              >
                &times;
              </button>
              <div className="px-6 py-8 sm:px-4 sm:py-6">
                <h1 className="text-black text-2xl sm:text-3xl text-center font-semibold mb-3">
                  Рассчитать стоимость строительства
                </h1>
                <p className="text-black text-base sm:text-lg text-center mb-5">
                  Мы ответим вам в удобное для вас время
                </p>
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
    </PageWrapper>
  );
};

export default Home;
