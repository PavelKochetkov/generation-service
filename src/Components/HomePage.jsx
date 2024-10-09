import React from 'react';
import { useTranslation } from 'react-i18next';
import '../css/home.css';

const HomePage = (props) => {
  const { home } = props;
  const { t } = useTranslation();

  return (
    <>
      <div className="home">
        <div className="logoPage">
          <img src={home.logo.img} alt={home.logo.alt} />
        </div>
        <div className="info">{home.info}</div>
        <div className="down">
          <img src={home.down.img} alt={home.down.alt} />
        </div>
      </div>
      <div className="description">
        <div className="descrTitle">{t('homePage.mainQuestion')}</div>
        <div className="genereateInfo">
          <div className="block">
            <img
              src={home.description.password.img}
              alt={home.description.password.alt}
            />
            <div>{home.description.password.title}</div>
          </div>
          <div className="block">
            <img
              src={home.description.numbers.img}
              alt={home.description.numbers.alt}
            />
            <div>{home.description.numbers.title}</div>
          </div>
          <div className="block">
            <img
              src={home.description.others.img}
              alt={home.description.others.alt}
            />
            <div>{home.description.others.title}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
