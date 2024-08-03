import React from 'react'
import { Link } from "react-router-dom";
import Ichki_1 from '../img/Ichki_1.webp'
import PageWrapper from '../components/PageWrapper';

const StoneHouse = () => {
    return (
        <PageWrapper>
        <div>
            <div className='w-full max-w-base pt-6 md:pt-12 pb-8 md:pb-14 my-6 md:my-12 mx-auto'>
                <div className="flex flex-col md:flex-row items-center mb-3 md:mb-5">
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]"> <u>Главная</u></Link>
                    <p className="text-[#969494] text-[16px] md:ml-2 md:mr-2"><span className='mx-1'>/</span> Каменные дома</p>
                </div>
                <div>
                    <h3 className='text-[30px] md:text-[50px] font-bold mb-6 md:mb-10'>
                        Каменные дома
                    </h3>
                    <div className='flex flex-col md:flex-row items-start justify-between'>
                        <img className='w-full md:w-[400px] h-auto md:h-[250px] mb-5 md:mb-0 md:mr-10' src={Ichki_1} alt="" />
                        <div className='ml-0 md:ml-10'>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-3'>Строительство каменных домов - это процесс создания здания с использованием каменных материалов, таких как кирпич, природный камень или искусственный камень. Каменные дома имеют ряд преимуществ, таких как прочность, надежность, устойчивость к пожарам и долговечность.</p>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-3'>Строительство каменных домов обычно включает в себя следующие шаги:</p>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-3'><span className='text-[16px] md:text-[18px] font-bold text-[#6b6a6a]'>1.</span> Подготовительная работа: это включает определение участка для строительства, проведение геологических и инженерных изысканий, разработку проекта и получение необходимых разрешений.</p>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-3'><span className='text-[16px] md:text-[18px] font-bold text-[#6b6a6a]'>2.</span> Фундамент: у каменных домов фундамент играет особую роль, так как он должен быть достаточно крепким, чтобы выдерживать вес стен. Часто используют бетонные фундаменты с арматурой для усиления.</p>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-3'><span className='text-[16px] md:text-[18px] font-bold text-[#6b6a6a]'>3.</span> Стены: каменные стены могут быть построены с использованием различных методов, включая кладку камня или кирпича с помощью цемента или известняка. Также может быть использован искусственный камень.</p>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-3'><span className='text-[16px] md:text-[18px] font-bold text-[#6b6a6a]'>4.</span> Перегородки и перекрытия: внутренние стены и перекрытия, как правило, строятся из кирпича или бетонных блоков.</p>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-3'><span className='text-[16px] md:text-[18px] font-bold text-[#6b6a6a]'>5.</span> Кровля: стандартные методы кровельного покрытия, такие как черепица, могут быть использованы для каменных домов.</p>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-3'><span className='text-[16px] md:text-[18px] font-bold text-[#6b6a6a]'>6.</span> Отделка: это включает установку окон, дверей, внутреннюю и наружную отделку стен, установку систем отопления, водопровода и электричества.</p>
                            <p className='text-[14px] md:text-[15px] text-[#6b6a6a] font-medium mb-7'>Строительство каменных домов требует определенной экспертизы и опыта, поэтому рекомендуется обратиться к специализированной строительной компании или мастерам, специализирующимся на данном типе строительства.</p>
                            <div>
                                <p className='text-[14px] md:text-[18px] text-[#6b6a6a] font-medium mb-2'>Цена</p>
                                <p className='text-[24px] md:text-[30px] font-bold text-black'>1 500 р.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
    )
}

export default StoneHouse
