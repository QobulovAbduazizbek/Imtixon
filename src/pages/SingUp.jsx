import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '../img/Button.png';
import Telegram from '../img/Telegram.png';
import wh from '../img/wh.png';
import vk from '../img/vk.png';

const SignUp = () => {
    // Holatlarni yaratish
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Input maydonlarini tekshirish
        if (!email || !password) {
            setErrorMessage('Толдиринг'); // Xatolik xabari
            return;
        }

        // Ma'lumotlarni console.log orqali chiqarish
        console.log('Email:', email);
        console.log('Password:', password);

        // Formani tozalash
        setEmail('');
        setPassword('');
        setIsSubmitted(true);
        setErrorMessage('');

        // 3 soniya davomida xabarni ko'rsatish
        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    return (
        <div>
            <div className='w-full max-w-base py-8 px-5 md:px-10 mx-auto'>
                <div className='flex items-center mb-4 md:mb-0'>
                    <Link to={'/'} className="text-[#6cd16c] text-[16px]">
                        <u>Главная</u>
                    </Link>
                    <span className='mx-1'>/</span>
                    <p className='text-[#a5a3a3] md:self-end'>Авторизация</p>
                </div>
                <div>
                    <h3 className='text-[30px] md:text-[50px] font-bold mb-6 md:mb-10'>
                        Разрешение
                    </h3>
                    <div className='border-2 py-4 md:py-5 px-3 md:px-5'>
                        <p className='text-[16px] md:text-[18px] font-bold mb-1'>Электронная почта:</p>
                        <div className='flex flex-col md:flex-row items-start md:justify-between'>
                            <div className="mb-4 md:mb-0 md:mr-4">
                                <input
                                    className='w-full md:w-[500px] py-2 px-2 text-black rounded-md shadow-lg mb-4'
                                    type="email"
                                    placeholder='sample@domain.ru'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <div>
                                    <div className="flex flex-col md:flex-row md:items-center">
                                        <p className='text-[16px] md:text-[18px] font-bold'>Пароль:</p>
                                        <Link className='text-[16px] md:text-[18px] text-[#79c701] md:ml-2 mb-2'>Забыли пароль?</Link>
                                    </div>
                                    <input
                                        className='w-full md:w-[500px] py-2 px-2 text-black rounded-md shadow-lg mb-4'
                                        type="password"
                                        placeholder='*********'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <div className='flex items-center'>
                                        <button
                                            onClick={handleSubmit}
                                            className='bg-[#1d63a5] mr-2 md:mr-5 w-full md:w-[300px] text-center py-2 rounded-lg text-white font-bold mb-2 md:mb-0'
                                        >
                                            Вход
                                        </button>
                                        <Link
                                            to={'/RoyxatdanOt'}
                                            className='bg-white w-full md:w-[180px] text-center py-2 rounded-lg border-2 border-[#19579e] text-[#19579e] font-bold hover:bg-[#19579e] hover:text-white duration-500'
                                        >
                                            Зарегистрироваться
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className='text-start'>
                                <p className='text-[16px] md:text-[20px] font-bold mb-3 md:mb-0'>Вы также можете войти через:</p>
                                <img className="w-full md:w-auto" src={Button} alt="" />
                                <div className='flex items-center'>
                                    <img className='w-[90px] h-10 md:w-auto mr-2 md:mr-5' src={Telegram} alt="" />
                                    <img className='w-[90px] h-10 md:w-auto mr-2 md:mr-5' src={wh} alt="" />
                                    <img className='w-[90px] h-10 md:w-auto' src={vk} alt="" />
                                </div>
                                <p className='text-[14px] md:text-[16px]'>Подключившись и зарегистрировавшись, вы</p>
                                <Link className='text-[#6cd16c] text-[14px] md:text-[16px] hover:underline' to={'/FoydalanishSharti'}>
                                    <u>принимаете пользовательское соглашение</u>
                                </Link>
                            </div>
                        </div>
                    </div>
                    {errorMessage && <p className="mt-4 text-red-600">{errorMessage}</p>}
                    {isSubmitted && <p className="mt-4 text-green-600">Форма успешно отправлена!</p>}
                </div>
            </div>
        </div>
    );
};

export default SignUp;
