import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Arrowd from "../img/Arrowd.png";
import axios from "axios";
import AOS from 'aos';
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";
import Dropdown1 from "./Dropdown1";

const Header = () => {
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

  const [down, setDown] = useState(false);
  const [bir, setBir] = useState(false);
  const [modal, setModal] = useState(false);
  const [form, setForm] = useState({ name: "", message: "", phone: "" });
  const [error, setError] = useState("");

  const handleOpen = () => setDown(true);
  const handleClose = () => setDown(false);
  const birOpen = () => setBir(true);
  const birClose = () => setBir(false);

  const closeModal = (e) => {
    if (e.target.id === "overlay") setModal(false);
  };

  const clickEscape = (e) => {
    if (e.key === "Escape") {
      setModal(false);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", clickEscape);
    return () => document.removeEventListener("keydown", clickEscape);
  }, []);

  return (
    <div>
      <header className="py-5 bg-[#fafafa]">
        <div className="w-full max-w-base px-4 md:px-12 mx-auto flex items-center relative">
          <div className="flex-grow flex items-center justify-between space-x-5">
            <Link to={'#'}>
              <div
                onMouseMove={handleOpen}
                onMouseLeave={handleClose}
                className="relative"
              >
                <Link to={'#'}>
                  <span className="py-3 px-5 border-2 border-green-500 hover:bg-[#79c701] hover:text-white duration-700 text-black rounded-md font-medium text-[16px] md:text-[20px]">
                    Проекты
                  </span>
                </Link>
                {down && (
                  <div
                    onMouseMove={handleOpen}
                    onMouseLeave={handleClose}
                    className="absolute left-0 top-full mt-2 py-5 px-16 rounded-md bg-[#fff] shadow-lg z-10"
                  >
                    <ul className="text-center">
                      <li>
                        <Link
                          to={"/ToshUy"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Каменные дома
                        </Link>
                        <hr className="my-2 text-black" />
                      </li>
                      <li>
                        <Link
                          to={"/BloklanganUylar"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Блочные дома
                        </Link>
                        <hr className="my-2 text-black" />
                      </li>
                      <li>
                        <Link
                          to={"/RamkaliUy"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Каркасные дома
                        </Link>
                        <hr className="my-2 text-black" />
                      </li>
                      <li>
                        <Link
                          to={"/YogochdanYasalgan"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Дома из бруса
                        </Link>
                        <hr className="my-2 text-black" />
                      </li>
                      <li>
                        <Link
                          to={"/YogochUy"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Бревенчатые дома
                        </Link>
                        <hr className="my-2 text-black" />
                      </li>
                      <li>
                        <Link
                          to={"/YarimYogoch"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Фахверковые дома
                        </Link>
                        <hr className="my-2 text-black" />
                      </li>
                      <li>
                        <Link
                          to={"/Vannalar"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Бани
                        </Link>
                        <hr className="my-2 text-black" />
                      </li>
                      <li>
                        <Link
                          to={"/Gazebos"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Беседки
                        </Link>
                        <hr className="my-2 text-black" />
                      </li>
                      <li>
                        <Link
                          to={"/Garaj"}
                          className="text-[16px] md:text-[20px] text-black font-medium hover:text-[#79c701]"
                        >
                          Гаражи
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </Link>
            <ul className="hidden lg:flex space-x-5 justify-center">
              <li>
                <Link to={"/"}>
                  <span className="text-black font-normal xl:text-[16px] text-[13px] hover:text-[#79c701] duration-300">
                    Главная
                  </span>
                </Link>
              </li>
              <li>
                <Dropdown1/>
              </li>
              <li>
                <Link to={"/BizningLoiha"}>
                  <span className="text-black font-normal xl:text-[16px] text-[13px] hover:text-[#79c701] duration-300">
                    Наши проекты
                  </span>
                </Link>
              </li>
              <li>
                <Link to={"/Galareya"}>
                  <span className="text-black font-normal xl:text-[16px] text-[13px] hover:text-[#79c701] duration-300">
                    Фотогалерея
                  </span>
                </Link>
              </li>
              <li>
                <Link to={"/Aksiya"}>
                  <span className="text-black font-normal xl:text-[16px] text-[13px] hover:text-[#79c701] duration-300">
                    Акции
                  </span>
                </Link>
              </li>
              <li>
                <Link to={"/Maqolalar"}>
                  <span className="text-black font-normal xl:text-[16px] text-[13px] hover:text-[#79c701] duration-300">
                    Статьи
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  to={"/Kontakt"}
                  className="text-black font-normal xl:text-[16px] text-[13px] hover:text-[#79c701] duration-300"
                >
                  Контакты
                </Link>
              </li>
            </ul>
            <div className="ml-auto hidden lg:block">
              <Link to={'#'}>
                <div className="bg-[#79c701] hover:bg-[#97d23a] duration-500 px-5 py-3 rounded-lg">
                  <span onClick={() => setModal(true)} className="font-medium text-white">
                    Расчёт стоимости
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className="lg:hidden">
            <div className="lg:hidden">
              <Popover placement="bottom-end">
                <PopoverHandler>
                  <Link to={'#'}>
                    <div className="bg-[#79c701] hover:bg-[#97d23a] duration-500 px-5 py-3 rounded-lg">
                      <span className=" font-medium">Меню</span>
                    </div>
                  </Link>
                </PopoverHandler>
                <PopoverContent className="w-64 z-50 border-none">
                  {" "}
                  {/* Border removed here */}
                  <div className="flex flex-col p-5">
                    <Link
                      to={"/"}
                      className="mb-2 text-xl hover:text-[#79c701] duration-300"
                    >
                      Главная
                    </Link>
                    <Link
                      to={"/Kompaniya"}
                      className="mb-2 text-xl hover:text-[#79c701] duration-300"
                    >
                      О компании
                    </Link>
                    <Link
                      to={"/BizningLoiha"}
                      className="mb-2 text-xl hover:text-[#79c701] duration-300"
                    >
                      Наши проекты
                    </Link>
                    <Link
                      to={"/Galareya"}
                      className="mb-2 text-xl hover:text-[#79c701] duration-300"
                    >
                      Фотогалерея
                    </Link>
                    <Link
                      to={"/Aksiya"}
                      className="mb-2 text-xl hover:text-[#79c701] duration-300"
                    >
                      Акции
                    </Link>
                    <Link
                      to={"/Maqolalar"}
                      className="mb-2 text-xl hover:text-[#79c701] duration-300"
                    >
                      Статьи
                    </Link>
                    <Link
                      to={"/Kontakt"}
                      className="text-xl hover:text-[#79c701] duration-300"
                    >
                      Контакты
                    </Link>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </header>
      {modal && (
        <div
          id="overlay"
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={closeModal}
        >
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-0 right-0 mt-2 mr-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
              onClick={() => setModal(false)}
            >
              &times;
            </button>
            <h1 className="text-black text-xl sm:text-2xl text-center font-semibold mb-3">
              Рассчитать стоимость строительства
            </h1>
            <p className="text-black text-sm sm:text-base text-center mb-5">
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
      )}
    </div>
  );
};

export default Header;
