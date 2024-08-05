import React from 'react'
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';
import Qulay_1 from "../img/Qulay_5.webp";

const Komfort5 = () => {

    return (
        <PageWrapper>
            <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-12'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl opacity-75 font-bold mb-4 sm:mb-14">Комфорт</h2>
                <h3 className='mb-5 opacity-60 flex space-x-3'>
                    <Link to='/' className='text-[#79c701] text-lg'>Главная /</Link><span className='font-medium'>Комфорт</span>
                </h3>
                <ul className='grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 items-start lg:space-x-10'>
                    <li>
                        <img className=' w-full rounded' src={Qulay_1} alt="komfort" />
                    </li>
                    <li>
                        <h3 className='text-xl sm:text-2xl md:text-4xl font-bold mb-4 opacity-60 sm:mb-10"'>Двухэтажный дом К-102</h3>
                        <p className=' opacity-60 text-md sm:text-lg md:text-xl leading-relaxed mb-3'>Номера «Комфорт» — это более просторные номера с большим количеством удобств. В наших номерах этого типа спальное место шире и мягче, что делает отдых наших гостей приятнее. В номерах «Комфорт» также есть мини-бар, принадлежности для чая/кофе и телевизор с большим экраном. Наши гости могут чувствовать себя как дома в этих номерах.
                        </p>
                        <div className='flex flex-col space-y-3  opacity-60 text-md sm:text-lg md:text-xl leading-relaxed'>
                            <span>Одноместные номера</span>
                            <span>Площадь - 10x7.5 м</span>
                            <span>Стоимость за сутки:</span>
                            <span>от 10 505 000 р.</span>
                        </div>
                    </li>
                </ul>

            </div>
        </PageWrapper>
    )
}

export default Komfort5;
