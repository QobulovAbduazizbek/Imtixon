import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const QurilishniKechiktirish = () => {
  return (
    <PageWrapper>
    <div className="w-full max-w-base pt-12 pb-10 px-5 mx-auto">
      <div className="mb-7">
        <Link to={'/'} className="text-[#6cd16c] text-sm">
          <u>Главная</u>
        </Link>
        <span className="text-[#6cd16c] text-sm mx-1">/</span>
        <Link to={'/Maqolalar'} className="text-[#6cd16c] text-sm">
          <u>Статьи</u>
        </Link>
        <span className="text-[#6cd16c] text-sm mx-1">/</span>
        <p className="text-[#a5a3a3] text-sm">Осень – не повод откладывать стройку!</p>
      </div>
      <h3 className="text-3xl lg:text-5xl font-bold mb-10">
        Осень – не повод откладывать стройку!
      </h3>
      <p className="text-gray-400 text-sm lg:text-base">Дата публикации: 07.06.2022</p>
    </div>
    </PageWrapper>
  );
};

export default QurilishniKechiktirish;
