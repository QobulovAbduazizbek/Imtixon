import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import S_1 from '../img/S_1.webp';
import S_2 from '../img/S_2.webp';
import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Aksiya = () => {
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

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
    

    return (
        <PageWrapper>
        <div>
            <div className='w-full max-w-7xl pt-12 pb-[100px] px-4 sm:px-6 lg:px-8 mx-auto'>
                <div className='flex items-center pt-10 mb-7'>
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]"><u>Главная</u><span className='mx-1'>/</span></Link>
                    <p className='text-[#a5a3a3]'>Акции</p>
                </div>
                <h3 className='text-[30px] sm:text-[40px] md:text-[50px] font-bold mb-10' data-aos="fade-up"
>Акции</h3>
                <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* 1 */}
                    <li>
                        <img className='h-[200px] sm:h-[300px] w-full object-cover' src={S_2} alt="" />
                        <p className='text-[14px] my-2' data-aos="fade-up">с 26 сентября по 9 декабря</p>
                        <h3 className='text-[20px] sm:text-[25px] font-bold mb-2' data-aos="fade-up">Теплый семейный дом с террасой за 30 дней</h3>
                        <p className='text-[16px] text-gray-700 mb-7' data-aos="fade-up">Гарантия 5 лет с момента сдачи объекта</p>
                        <div className='flex'>
                            <Link onClick={() => setModal(true)} className='bg-[#1d63a5] mr-5 w-full sm:w-auto text-center text-[20px] py-2 px-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Связаться с нами</Link>
                        </div>
                    </li>
                    {/* 2 */}
                    <li>
                        <img className='h-[200px] sm:h-[300px] w-full object-cover' src={S_1} alt="" />
                        <p className='text-[14px] my-2' data-aos="fade-up">с 20 августа по 29 сентября</p>
                        <h3 className='text-[20px] sm:text-[25px] font-bold my-3' data-aos="fade-up">Строительство загородных домов</h3>
                        <p className='text-[16px] text-gray-700 mb-5' data-aos="fade-up">Справьте новоселье в своем доме через</p>
                        <div className='flex'>
                            <Link onClick={() => setModal(true)} className='bg-[#1d63a5] mr-5 w-full sm:w-auto text-center text-[20px] py-2 px-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Связаться с нами</Link>
                        </div>
                    </li>
                </ul>
            </div>
            {
                modal && (
                    <div onClick={closeModal} className='fixed inset-0 bg-black bg-opacity-50 z-20 py-5 flex items-center justify-center' id='overlay'>
                        <div className='bg-white w-full max-w-[650px] mx-auto p-8 rounded-3xl relative'>
                            <button onClick={() => setModal(false)} className='absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-3xl font-bold text-black'>&times;</button>
                            <div className='px-4 py-6'>
                                <h1 className='text-black text-3xl font-semibold mb-7'>Заказать звонок</h1>
                                <form>
                                    <div className='mb-5'>
                                        <label className='block text-[20px] mb-1'>Имя<span className='text-red-500 font-bold'>*</span></label>
                                        <input className='text-black w-full text-[16px] px-5 py-3 border border-gray-300 rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' type="text" />
                                    </div>
                                    <div className='mb-5'>
                                        <label className='block text-[20px] mb-1'>Телефон<span className='text-red-500 font-bold'>*</span></label>
                                        <input className='text-black w-full text-[16px] px-5 py-3 border border-gray-300 rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' type="tel" />
                                    </div>
                                </form>
                                <div className='flex items-center mb-7'>
                                    <input type="checkbox" className='mr-3 h-5 w-5 rounded-lg border-none' />
                                    <Link to={'/FoydalanishSharti'} className='text-[16px] hover:text-[#51bef0e3] duration-500'>Я принимаю условия обработки <u className='text-[#51bef0e3]'>моих персональных данных</u><span>*</span></Link>
                                </div>
                                <button className='w-full py-4 bg-[#2c9dd1] text-white rounded-md hover:bg-[#33afe9] duration-500'>Отправить</button>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
        </PageWrapper>
    );
}

export default Aksiya;
