import React from 'react'
import { Link } from "react-router-dom";
import Telegram from '../img/Telegram.png'
import wh from '../img/wh.png'
import yandex from '../img/yandex.png'
import PageWrapper from '../components/PageWrapper';

const Kontakt = () => {
    return (
        <PageWrapper>
        <div className='bg-[#fafafa]'>
            <div className='w-full max-w-base pt-12 py-16 px-10 mx-auto'>
                <div className='flex items-center pt-10 mb-7'>
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u><span className='mx-1'>/</span></Link>
                    <p className='text-[#a5a3a3]'>Контакты</p>
                </div>
                <h3 className='text-[50px] font-bold mb-10'>
                    Контакты
                </h3>
                <div className='flex flex-col lg:flex-row items-start lg:justify-between mb-14'>
                    <div className='mb-10 lg:mb-0'>
                        <div className='flex items-center mb-3'>
                            <p className='text-xl font-bold'>+7 (000) 000-00-00</p>
                            <Link to='/telegram'><img className='w-[60px] lg:mr-5' src={Telegram} alt="" /></Link>
                            <Link to='/whatsapp'><img className='w-[55px] lg:mr-5' src={wh} alt="" /></Link>
                            <Link to='/yandex'><img className='w-[60px]' src={yandex} alt="" /></Link>
                        </div>
                        <div>
                            <p className='text-black text-[20px] mb-3'> Пн—Пт с 11:00 до 21:00</p>
                            <p className='text-black text-[20px] mb-5'>Сб—Вс Выходной</p>
                            <p className='text-black text-[20px] mb-3'> г. Москва, ул. Ленинская, дом 0, корп 0, офис 0</p>
                            <p className='text-blue-500 text-[20px] mb-3'>mail@company.ru</p>
                            <p className='text-black text-[20px] mb-3'>ИНН 000000000 ОГРН 000000000</p>
                        </div>
                    </div>
                    <div>
                        <iframe className='w-full sm:w-[600px] lg:w-[785px] h-[400px]' frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=635&amp;height=484&amp;hl=en&amp;q=Maskva%20Moscow+()&amp;t=k&amp;z=9&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://google-map-generator.com/'>Maps Generator</a>
                    </div>
                </div>
                <div>
                    <p className='text-2xl font-bold mb-2'>Наши реквизиты</p>
                    <p className='text-[16px] mb-3'>(Общество с ограниченной ответственностью «Название компании»)</p>
                    <div className='flex flex-col lg:flex-row items-start '>
                        <div className='mr-[80px]'>
                            <p className='text-[18px] mb-2 '>Юридический адрес:</p>
                            <p className='text-[18px] mb-2 '>Фактический адрес:</p>
                            <p className='text-[18px] mb-2 '>ИНН:</p>
                            <p className='text-[18px] mb-2 '>КПП:</p>
                            <p className='text-[18px] mb-2 '>ОРГН:</p>
                        </div>
                        <div>
                            <p className='text-[18px] mb-2'>г. Москва, ул. Ленинская, дом 0, корп 0, офис 0</p>
                            <p className='text-[18px] mb-2'>г. Москва, ул. Ленинская, дом 0, корп 0, офис 0</p>
                            <p className='text-[18px] mb-12'>0000000000</p>
                            <p className='text-[18px] mb-2'>000000000</p>
                            <p className='text-[18px] mb-2'>0000000000000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
    )
}

export default Kontakt
