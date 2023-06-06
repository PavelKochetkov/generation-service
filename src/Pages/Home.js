import React from 'react'
import '../css/home.css'
import HomePage from '../Components/HomePage'
import logo from '../img/logo.jpg'
import down from '../img/down.jpg'
import password from '../img/password.png'
import numbers from '../img/numbers.png'
import other from '../img/other.png'

export const Home = () => {
    const objHome = {
        info: 'Сервис генерации',
        logo: {
            logo,
            alt: 'logo'
        },
        down: {
            down,
            alt: 'down'
        },
        description: {
            password: {
                password,
                alt: 'passwordlogo',
                title: 'Создать устойчивый к взлому пароль'
            },
            numbers: {
                numbers,
                alt: 'numberslogo',
                title: 'Сгенерировать случайные числа'
            },
            others: {
                other,
                alt: 'otherlogo',
                title: '...и другое. Следите за обновлениями :)'
            }
        }
    }
    return(
        <HomePage
            home = {objHome}
        />
    )
}