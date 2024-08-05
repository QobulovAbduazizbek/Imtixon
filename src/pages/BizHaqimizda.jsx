import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Togo_1 from '../img/Togo_1.webp';
import Togo_2 from '../img/Togo_2.webp';
import Hola_1 from '../img/Hola_1.webp';
import PageWrapper from '../components/PageWrapper';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BizHaqimizda = () => {
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
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [errors, setErrors] = useState({ name: '', phone: '', message: '' });

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <PageWrapper>
    <div>
      <div className='w-full max-w-base pt-12 pb-16 md:pb-[100px] px-5 md:px-10 mx-auto'>
        <div className='flex items-center pt-10 mb-7'>
          <Link to={'/'} className="text-[#6cd16c] text-[14px] md:text-[16px]"><u>Главная</u><span className='mx-1'>/</span></Link>
          <Link to={'/Kompaniya'} className="text-[#6cd16c] text-[14px] md:text-[16px]"><u>О компании </u><span className='mx-1'>/</span></Link>
          <p className='text-[#a5a3a3] text-[14px] md:text-[16px]'>Отзывы о нас</p>
        </div>
        <h3 data-aos="fade-up" className='text-[32px] md:text-[50px] font-bold mb-10'>Отзывы о нас</h3>
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
          <li>
            <p data-aos="fade-up" className='text-[15px] md:text-[17px] mb-2'>Начинаем строительство уже второго дома. Первый строили для себя, теперь решили родителям жены сделать подарок, чтобы не ютились в маленькой квартире. Ребята, вы вообще молодцы и реально профессионалы! Хочу искренне поблагодарить Виктора, который проектировал, учесть столько мелочей… Спасибо! Надеемся, что все и дальше пойдет слажено, качественно и позитивно.</p>
            <div className='flex items-center mb-7'>
              <img data-aos="fade-up" className='rounded-full w-[60px] md:w-[80px] h-[60px] md:h-[80px] mr-5' src={Togo_1} alt="" />
              <p data-aos="fade-up" className='text-[18px] md:text-[20px] font-bold'>Кирилл Яковлев</p>
            </div>
          </li>
          <li>
            <p data-aos="fade-up" className='text-[15px] md:text-[17px] mb-2'>У нас была масса сомнений по поводу строительства, но нам устроили экскурсию на строящемся объекте. Менеджер отвечал на все наши вопросы честно, толково. Очень располагает, когда люди прямо говорят: вот это сделать можно, это нельзя, а тут проблему можно обойти вот таким способом. В целом проект продуман прекрасно. В доме просто приятно находиться, душой отдыхаешь.</p>
            <div className='flex items-center mb-7'>
              <img data-aos="fade-up" className='rounded-full w-[60px] md:w-[80px] h-[60px] md:h-[80px] mr-5' src={Hola_1} alt="" />
              <p data-aos="fade-up" className='text-[18px] md:text-[20px] font-bold'>Александра Сомова</p>
            </div>
          </li>
          <li>
            <p data-aos="fade-up" className='text-[15px] md:text-[17px] mb-2'>Очень благодарен за теплый и профессиональный подход, который я получил. Спасибо за ответственность, открытость и готовность помочь. Всегда буду рекомендовать вас друзьям и знакомым.</p>
            <div className='flex items-center mb-7'>
              <img data-aos="fade-up" className='rounded-full w-[60px] md:w-[80px] h-[60px] md:h-[80px] mr-5' src={Togo_2} alt="" />
              <p data-aos="fade-up" className='text-[18px] md:text-[20px] font-bold'>Александр Ягудин</p>
            </div>
          </li>
        </ul>
        <button onClick={() => setModal(true)} className='bg-blue-600 px-6 md:px-10 py-3 rounded-md text-[14px] md:text-[16px] text-green-500 hover:bg-blue-400 hover:text-white'>Оставить отзыв</button>
      </div>
      {modal && (
        <div onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-50 z-20 py-5' id='overlay'>
          <div className='max-w-[400px] md:max-w-[650px] bg-white w-full mx-auto min-h-4/5 bg-bgModal rounded-3xl relative'>
            <button onClick={() => setModal(false)} className='absolute top-0 right-0 w-12 md:w-16 h-12 md:h-16 flex items-center justify-center rounded-full text-3xl font-bold bg-white text-black font-mono'>&times;</button>
            <div className='px-5 md:px-10 py-12'>
              <h1 className='text-black text-2xl md:text-3xl font-semibold mb-7'>Оставить отзыв</h1>
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
                      className="py-[20px] pr-[220px] lg:mb-0 pl-5 rounded-lg text-black font-medium mr-6"
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
    </PageWrapper>
  );
}

export default BizHaqimizda;
