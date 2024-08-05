import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Qulay_1 from "../img/Qulay_1.webp";
import Qulay_2 from "../img/Qulay_2.webp";
import Qulay_3 from "../img/Qulay_3.webp";
import Qulay_4 from "../img/Qulay_4.webp"; 
import Qulay_5 from "../img/Qulay_5.webp";
import Qulay_6 from "../img/Qulay_6.webp";

const UyProekti = () => {
    useEffect(() => {
        AOS.init({ duration: 700 }); // Animatsiya davomiyligi
    }, []);


    const list = [
        {
            img: Qulay_1,
            title: "Двухэтажный дом К-102",
            glazing: "Площадь:      63,5 м2",
            seal: "Размер:          10х7.5м",
            fittings: "Кол-во комнат:   10х7.5м",
            price: "10 505 000",
            linkTitle: '/Komfort'
        },
        {
            img: Qulay_2,
            title: "Двухэтажный дом К-102",
            glazing: "Площадь:      63,5 м2",
            seal: "Размер:          10х7.5м",
            fittings: "Кол-во комнат:   10х7.5м",
            price: "10 505 000",
            linkTitle: '/Komfort2'

        },
        {
            img: Qulay_3,
            title: "Двухэтажный дом К-102",
            glazing: "Площадь:      63,5 м2",
            seal: "Размер:          10х7.5м",
            fittings: "Кол-во комнат:   10х7.5м",
            price: "10 505 000",
            linkTitle: '/Komfort3'

        },
        {
            img: Qulay_4,
            title: "Двухэтажный дом К-102",
            glazing: "Площадь:      63,5 м2",
            seal: "Размер:          10х7.5м",
            fittings: "Кол-во комнат:   10х7.5м",
            price: "10 505 000",
            linkTitle: '/Komfort4'

        },
        {
            img: Qulay_5,
            title: "Двухэтажный дом К-102",
            glazing: "Площадь:      63,5 м2",
            seal: "Размер:          10х7.5м",
            fittings: "Кол-во комнат:   10х7.5м",
            price: "10 505 000",
            linkTitle: '/Komfort5'

        },
        {
            img: Qulay_6,
            title: "Двухэтажный дом К-102",
            glazing: "Площадь:      63,5 м2",
            seal: "Размер:          10х7.5м",
            fittings: "Кол-во комнат:   10х7.5м",
            price: "10 505 000",
            linkTitle: '/Komfort6'

        },
        
    
    ];

    return (
        <div className='w-full max-w-[1450px] mx-auto py-16 px-5'>
            <div className='mb-8' data-aos="fade-up">
                <h1 className='sm:font-extrabold mb-4 text-3xl text-center font-bold md:text-4xl lg:text-5xl'>Проекты домов</h1>
                <p className='font-medium text-md sm:text-xl text-center opacity-70'>Мы разработали более 1000 проектов комфортных домов</p>
            </div>

            <div>
                <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-3 sm:gap-4  md:gap-6 lg:gap-8">
                {list.map((item) => (
                         <li className='flex flex-col border-2 rounded-lg p-6 space-y-4'>
                             <img className='w-full h-50' src={item.img} alt={item.title} />
                             <Link>
                                 <h2 className='font-bold  text-2xl sm:text-3xl mb-4'>{item.title}</h2>
                             </Link>
                             <p>{item.glazing}</p>
                             <p>{item.seal} </p>
                             <p>{item.fittings} </p>
                             <p>
                                 <span className='opacity-60'>oт</span>
                                 <span className='text-black opacity-100 font-semibold text-xl sm:text-3xl mx-2'>{item.price}</span>
                                 <span className='opacity-60'>руб./м²</span>
                             </p>
                             
                             <Link to={item.linkTitle} className='grow border-b-2 w-[50%] border-black pb-2'> подробнее о профиле</Link>
                         </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};


export default UyProekti;
