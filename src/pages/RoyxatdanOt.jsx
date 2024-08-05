import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '../img/Button.png';
import Telegram from '../img/Telegram.png';
import wh from '../img/wh.png';
import vk from '../img/vk.png';
import PageWrapper from '../components/PageWrapper';
import axios from "axios";

const Registration = () => {
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

    return (
        <PageWrapper>
        <div className='w-full max-w-base py-12 px-5 mx-auto'>
            <div className='flex flex-col items-center'>
                <div className='flex items-center mb-7'>
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u><span className='mx-1'>/</span></Link>
                    <Link to={'/SingUp'} className="text-[#6cd16c] text-[16px]"> <u>Регистрация</u><span className='mx-1'>/</span></Link>
                    <p className='text-[#a5a3a3]'>Регистрация</p>
                </div>
                <h3 className='text-[50px] font-bold mb-10'>
                    Регистрация
                </h3>
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
        </PageWrapper>
    );
};

export default Registration;
