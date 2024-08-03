import React from 'react'
import { Link } from "react-router-dom";
import Ichki_7 from '../img/Ichki_7.webp'
import PageWrapper from '../components/PageWrapper';

const Baths = () => {
    return (
        <PageWrapper>
        <div>
            <div className='w-full max-w-base pt-6 md:pt-12 pb-8 md:pb-14 my-6 md:my-12 mx-auto'>
                <div className="flex flex-col md:flex-row items-center mb-3 md:mb-5">
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u></Link>
                    <p className="text-[#969494] text-[16px] md:ml-2 md:mr-2"><span className='mx-1'>/</span>Бани</p>
                </div>
                <div>
                    <h3 className='text-[30px] md:text-[50px] font-bold mb-6 md:mb-10'>
                        Бани
                    </h3>
                    <div className='flex flex-col md:flex-row items-start justify-between'>
                        <img className='w-full md:w-[400px] h-auto md:h-[250px] mb-5 md:mb-0 md:mr-10' src={Ichki_7} alt="" />
                        <div className='ml-0 md:ml-10'>
                            <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>Наша компания занимается строительством бань и саун. Мы возводим русские бани, финские сауны, турецкие бани, сауны с бассейном и пр. Возможны более интересные, эксклюзивные проекты - все зависит от Вашей фантазии.</p>
                            <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>Мы занимаемся строительством как типовых бань и саун, так и возведением по индивидуальным эскизам с высокохудожественными элементами. Все нюансы, касающиеся используемых материалов, планировки, окон и дверей, марок печей и их расположения и т.д. всегда согласуются с заказчиком.</p>
                            <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>Мы же в свою очередь гарантируем качество работы, отличные материалы, удобные сроки и умеренные цены.</p>
                            <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>Мы предоставляем широчайший выбор печей на любой вкус и цвет. Ассортимент материалов Вас не разочарует, загляните в наши каталоги. Двери и окна Вы также можете подобрать из каталога или сделать на заказ.</p>
                            <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>Еще один важный момент - освещение. Это именно то, что задает общую атмосферу в помещении. Тут мы также готовы предложить массу вариантов, часть из которых Вы можете просмотреть на фотографиях в нашем портфолио.</p>
                            <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-3'>Стоимость бани или сауны будет рассчитываться исходя из цены выбранных материалов, сложности работы, а также общей площади помещений. Однако, спешим Вас порадовать - наши цены не кусаются, Вас ждут выгодные предложения и существенные скидки!</p>
                            <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-7'>Качество, доступные цены и индивидуальный подход - три принципа, на которых держится наша компания!</p>
                            <div>
                                <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-2'>Цена</p>
                                <p className='text-[24px] md:text-[30px] font-bold text-black'>3 500 р.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
    )
}

export default Baths
