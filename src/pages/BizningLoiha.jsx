import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Ichki_1 from '../img/Ichki_1.webp';
import Ichki_2 from '../img/Ichki_2.webp';
import Ichki_3 from '../img/Ichki_3.webp';
import Ichki_4 from '../img/Ichki_4.webp';
import Ichki_5 from '../img/Ichki_5.webp';
import Ichki_6 from '../img/Ichki_6.webp';
import Ichki_7 from '../img/Ichki_7.webp';
import Ichki_8 from '../img/Ichki_8.webp';
import Ichki_9 from '../img/Ichki_9.webp';
import PageWrapper from '../components/PageWrapper';

const BizningLoiha = () => {
    useEffect(() => {
        window.scroll(0 , 0);
    }, [])
    return (
        <PageWrapper>
        <div>
            <div className='w-full max-w-base py-12 px-4 md:px-10 mx-auto'>
                <div className='flex items-center pt-10 mb-7'>
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u><span className='mx-1'>/</span></Link>
                    <p className='text-[#a5a3a3]'>Наши проекты</p>
                </div>
                <h3 className='text-[32px] md:text-[50px] font-bold mb-10'>
                    Наши проекты
                </h3>
                <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {/* Project Item */}
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_1} alt="Каменные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Каменные дома</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>от 1 500 р.</p>
                            <div className='flex'>
                                <Link to={'/ToshUy'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_2} alt="Блочные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Блочные дома</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>1 500 р.</p>
                            <div className='flex'>
                                <Link to={'/BloklanganUylar'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_3} alt="Блочные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Каркасные дома</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>3 500 р.</p>
                            <div className='flex'>
                                <Link to={'/RamkaliUy'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_4} alt="Блочные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Дома из бруса</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>4 750 р.</p>
                            <div className='flex'>
                                <Link to={'/YogochdanYasalgan'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_6} alt="Блочные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Бревенчатые дома</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>10 250 р.</p>
                            <div className='flex'>
                                <Link to={'/YogochUy'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_5} alt="Блочные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Фахверковые дома</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>14 500 р.</p>
                            <div className='flex'>
                                <Link to={'/YarimYogoch'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_7} alt="Блочные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Бани</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>3 500 р.</p>
                            <div className='flex'>
                                <Link to={'/Vannalar'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_8} alt="Блочные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Беседки</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>2 500 р.</p>
                            <div className='flex'>
                                <Link to={'/Gazebos'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    <li className='flex flex-col'>
                        <div className='grow h-auto'>
                            <img className='h-[200px] md:h-[300px] w-full object-cover' src={Ichki_9} alt="Блочные дома" />
                            <h3 className='text-[20px] md:text-[25px] font-bold my-3'>Гаражи</h3>
                            <p className='text-[14px] md:text-[17px] mb-7'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень.</p>
                            <p className='text-[16px] md:text-[18px] font-medium'>Стоимость:</p>
                            <p className='text-[24px] md:text-[30px] font-bold text-black mb-5'>1 500 р.</p>
                            <div className='flex'>
                                <Link to={'/Garaj'} className='bg-[#1d63a5] w-full text-center text-[16px] md:text-[20px] py-2 rounded-lg text-[#90f041] font-bold hover:bg-[#2782d6] hover:text-white duration-500'>Подробнее</Link>
                            </div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </div>
        </PageWrapper>
    );
};

export default BizningLoiha;
