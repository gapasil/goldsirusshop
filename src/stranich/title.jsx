import React from 'react'
import "../style/title.css"
import dostavkaimg from "../img/fast-delivery.png"
import anonimg from "../img/online-shopping.png"
import cenaimg from "../img/цена.png"
import optimg from "../img/опт.png"
import krugimg from "../img/24.png"
import edtovimg from "../img/1товар.png"
import logo from "../img/logo.jpg"

const Title = () => {
  return (
    <div className="container">
      <head className="head">
        <header className="header">
          <img src={logo} width="100px"/>
          <div className="header_blockknop">
            <button className="knopheader">Золото</button>
            <button className="knopheader">Реагенты</button>
            <button className="knopheader">Информация</button>
            <button className="knopheader">Отзывы</button>
            <button className="knopheader">Гарантий</button>
          </div>
          <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
           <ul class="menu__box">
              <li><a class="menu__item" href="#">Золото</a></li>
              <li><a class="menu__item" href="#">Реагенты</a></li>
              <li><a class="menu__item" href="#">Информация</a></li>
              <li><a class="menu__item" href="#">Отзывы</a></li>
              <li><a class="menu__item" href="#">Гарантий</a></li>
           </ul>
          </div>
        </header>
      </head>
      <din className="headotstup"></din>
      <main>
        <h1>Нужно больше</h1>
        <div className="container_first_content">
          <div className="block_textandknop"> 
            <h1 style={{"color":"gold"}}>золота!</h1>
            <p>Покупая золото в HYDRAGOLD Вы получаете гарантии:</p>
            <ul class="spisk">
              <li><img src={dostavkaimg} width="40px"/><a>1. Быстрая доставка</a></li>
              <li><img src={anonimg} width="40px"/><a>2. Конфиденциальность личных данных пользователя</a></li>
              <li><img src={cenaimg} width="40px"/><a>3. Разумная цена на игровую валюту – за 1к голд от 6.99 руб</a></li>
              <li><img src={optimg} width="40px"/><a>4. Мы делаем щедрые оптовые скидки</a></li>
              <li><img src={krugimg} width="40px"/><a>5. Работаем 24/7</a></li>
              <li><img src={edtovimg} width="40px"/><a>6. МИНИМАЛЬНЫЙ ЗАКАЗ ОТ 1-ЕД ТОВАРА</a></li>
           </ul>
          </div>            
          <div className="fotoputin"></div>
        </div>
        <div className="lentdel">
          <h2>Купить золото WOW Sirus – ВОВ Сирус</h2>
        </div>
        <div className="content_kalkulator">
          
        </div>
      </main>
      <footer>
        
      </footer>
    </div>
  )
}
export default Title
