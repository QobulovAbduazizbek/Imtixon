import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Togo_1 from '../img/Togo_1.webp';
import Togo_2 from '../img/Togo_2.webp';
import Hola_1 from '../img/Hola_1.webp';
import PageWrapper from '../components/PageWrapper';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BizHaqimizda = () => {
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let valid = true;
    let newErrors = { name: '', phone: '', message: '' };

    if (!form.name) {
      newErrors.name = 'Имя обязательно';
      valid = false;
    }

    if (!form.phone) {
      newErrors.phone = 'Телефон обязателен';
      valid = false;
    }

    if (!form.message) {
      newErrors.message = 'Текст отзыва обязателен';
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Handle form submission
      console.log('Form submitted:', form);
      setModal(false);
    }
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
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
              <form onSubmit={handleSubmit}>
                <p className='text-[18px] md:text-[20px] mb-1'>Имя <span className='text-red-500 font-bold'>*</span></p>
                <input
                  className={`text-black w-full md:w-[550px] text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md ${errors.name ? 'border-red-500' : 'hover:bg-[#a8dff8da] hover:border-[#a8dff8da]'} duration-500`}
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
                
                <p className='text-[18px] md:text-[20px] mb-1'>Телефон <span className='text-red-500 font-bold'>*</span></p>
                <input
                  className={`text-black w-full md:w-[550px] text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md ${errors.phone ? 'border-red-500' : 'hover:bg-[#a8dff8da] hover:border-[#a8dff8da]'} duration-500`}
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className='text-red-500 text-sm'>{errors.phone}</p>}
                
                <p className='text-[18px] md:text-[20px] mb-1'>Текст отзыва <span className='text-red-500 font-bold'>*</span></p>
                <textarea
                  className={`text-black w-full md:w-[550px] text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md ${errors.message ? 'border-red-500' : 'hover:bg-[#a8dff8da] hover:border-[#a8dff8da]'} duration-500`}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
                
                <div className='flex items-center mb-7'>
                  <input type="checkbox" className='mr-3 h-5 w-5 rounded-lg border-none' />
                  <Link to={'/FoydalanishSharti'} className='text-[14px] md:text-[16px] hover:text-[#51bef0e3] duration-500'>
                    Я принимаю условия обработки моих <u className='text-[#51bef0e3]'>персональных данных</u> <span className='text-red-600'>*</span>
                  </Link>
                </div>
                <button type='submit' className='px-5 md:px-7 py-4 bg-[#2c9dd1] text-white rounded-md hover:bg-[#33afe9] duration-500'>Отправить</button>
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
