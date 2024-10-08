// import React, { useState} from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
    let registerFlag = localStorage.getItem("flag")
  return (
    <div className="header">
        <nav>
            <ul>
                <div className='account'></div>
            {   registerFlag ? 
                <Link to={"/account"} >
                    <li> <img className='icon' src="./user.png" alt="" /> Профиль</li>
                </Link> :
                <Link to={"/register"} > <li><img className='icon' src="./user.png" alt="" />Регистрация</li></Link>
            }

                <li> <img className='icon' src="./settings.png" alt="" /> Настройки</li>

                <Link to={'/'} >
                    <li> <img className='icon' src="./home-page.png" alt="" /> Главная страница</li>
                </Link>

                <li> <img className='icon' src="./favorite.png" alt="" />Избранное </li>
                <li> <img className='icon' src="./comments.png" alt="" />Комментарии</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header