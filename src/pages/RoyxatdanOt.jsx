import React from 'react'
import { Link } from "react-router-dom";
import Button from '../img/Button.png'
import Telegram from '../img/Telegram.png'
import wh from '../img/wh.png'
import vk from '../img/vk.png'

const Registration = () => {
    return (
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
                <div className=' flex flex-col md:flex-row items-center md:items-start'>
                    <div className='mr-0 md:mr-36 mb-10 md:mb-0'>
                        <p className='text-[20px] mb-2'>Электронная почта <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-2 px-3 mb-5 rounded-md border-2' type="email" />
                        <p className='text-[20px] mb-2'>Пароль  <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-2 px-3 mb-5 rounded-md border-2' type="password" />
                        <p className='text-[20px] mb-2'>Повторите пароль <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-2 px-3 mb-5 rounded-md border-2' type="password" />
                        <p className='text-[20px] mb-2'>Имя<span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-2 px-3 mb-5 rounded-md border-2' type="text" />
                        <p className='text-[20px] mb-2'>Телефон <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-2 px-3 mb-8 rounded-md border-2' type="tel" />
                        <div>
                            <Link to={'/RoyxatdanOt'} className='bg-[#19579e] w-full md:w-auto px-3 py-2 rounded-lg border-2 border-[#19579e] text-white font-bold '>Зарегистрироваться</Link>
                        </div>
                    </div>
                    <div className='pr-0 md:pr-14 text-center md:text-start'>
                        <p className='text-[20px] font-bold mb-3'>Также вы можете войти через:</p>
                        <img src={Button} alt="" className='mb-3' />
                        <div className='flex items-center justify-center md:justify-start'>
                        <img className='w-[90px] h-10 md:w-auto mr-2 md:mr-5' src={Telegram} alt="" />
                        <img className='w-[90px] h-10 md:w-auto mr-2 md:mr-5' src={wh} alt="" />
                        <img className='w-[90px] h-10 md:w-auto' src={vk} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration
