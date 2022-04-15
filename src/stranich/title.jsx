/* global VK */
import {React, useRef, useState, useEffect} from 'react'
import dostavkaimgwhite from "../img/light/fast-delivery.png"
import anonimgwhite from "../img/light/online-shopping.png"
import cenaimgwhite from "../img/light/цена.png"
import optimgwhite from "../img/light/опт.png"
import krugimgwhite from "../img/light/24.png"
import edtovimgwhite from "../img/light/1товар.png"
import dostavkaimgblack from "../img/black/fast-deliveryblack.png"
import anonimgblack from "../img/black/online-shoppingblack.png"
import cenaimgblack from "../img/black/ценаblack.png"
import optimgblack from "../img/black/оптblack.png"
import krugimgblack from "../img/black/24black.png"
import edtovimgblack from "../img/black/1товарblack.png"
import voronkawhite from "../img/light/воронка.jpg"
import peshwhite from "../img/light/песчинка.png"
import saronitwhite from "../img/light/саронит.png"
import {MyInput} from "../components/UI/MyInput/MyInput"
import {MyOpisBlock} from "../components/UI/Opis/MyOpisBlock"
import {Shethik} from "../components/Shethik"
import {Link} from "react-router-dom";
import karzinawhite from "../img/light/карзина.png"
import karzinablack from "../img/black/карзинаblack.png"
import siruswhite from "../img/light/х5.png"
import sirusblack from "../img/black/х5black.png"
import vkwhite from "../img/light/vk.png"
import tgwhite from "../img/light/telegram.png"
import {MyBottom} from "../components/UI/MyButtom/MyBottom"
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/Themes";
import { useDispatch, useSelector } from 'react-redux';
import {Modal} from "../components/UI/modal/Modal"

const Title = () => {
  const dispatch = useDispatch()
  let table = useSelector(state => state.table)
  let posiiton = useSelector(state => state.position)
  let theme = localStorage.getItem("theme")
  let maskartinki = []
  if(theme == "light"){
    maskartinki = [dostavkaimgwhite,anonimgwhite,cenaimgwhite,optimgwhite,krugimgwhite,edtovimgwhite,karzinawhite,siruswhite,vkwhite,tgwhite]
  }
  else{maskartinki = [dostavkaimgblack,anonimgblack,cenaimgblack,optimgblack,krugimgblack,edtovimgblack,karzinablack,sirusblack,vkwhite,tgwhite]}
  const [img,setImg] = useState(maskartinki)
  const goldref = useRef(null);
  const regref = useRef(null)
  const infref = useRef(null)
  const komref = useRef(null)
  const logoref = useRef(null)
  const [valueKorzina,setValueKroz] = useState(localStorage.length)
  const [,settt] = useState('')
  const [masreg,setMasreg] = useState([
    ["Добавить в корзину","Воронка пустоты",voronkawhite,"voronka"],
    ["Добавить в корзину","Песчинка потерянного времени",peshwhite,"pesh"],
    ["Добавить в корзину","Древнейший саронит",saronitwhite,"saronit"]
  ])

  const switchTheme = () => {
    if(theme == "light"){
      localStorage.setItem("theme","dark")
      setImg([dostavkaimgblack,anonimgblack,cenaimgblack,optimgblack,krugimgblack,edtovimgblack,karzinablack,sirusblack,vkwhite,tgwhite])     
    }
    else {
      localStorage.setItem("theme","light")
      setImg([dostavkaimgwhite,anonimgwhite,cenaimgwhite,optimgwhite,krugimgwhite,edtovimgwhite,karzinawhite,siruswhite,vkwhite,tgwhite])   
    }
  };
  useEffect(()=>{
    if(posiiton!=0){
      if(posiiton=="goldref"){goldref.current.scrollIntoView({behavior: "smooth",block:"start"})}
      if(posiiton=="regref"){regref.current.scrollIntoView({behavior: "smooth",block:"start"})}
      if(posiiton=="infref"){infref.current.scrollIntoView({behavior: "smooth",block:"start"})}
      if(posiiton=="logoref"){logoref.current.scrollIntoView({behavior: "smooth",block:"start"})}
    }
  },[])

  const callbackcolgold = (value,rezim,rub) =>{ 
    dispatch({type:`x${rezim}`,payload:rub})
    localStorage.setItem(`x${rezim}`,value)
    setValueKroz(localStorage.length)
  }
  const callbackcolreg = (props,value) =>{
    localStorage.setItem(props,value)   
    setValueKroz(localStorage.length)
  }
  const deleted = (index) =>{
    masreg[index].splice(0,1,false)
    setMasreg(masreg)
    settt(Math.random())
  }
  const korzObnov = () =>{
    setValueKroz(localStorage.length)
  }
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
    <GlobalStyles />
    <div className="container">
      <head className="head">
        <header className="header">
          <h2 className="logo" onClick={()=>logoref.current.scrollIntoView({behavior: "smooth",block:"start"})}>HG</h2>
          <h2 style={{"color":"white"}} className="logotext">Выбрать тему</h2>
          <div class="rss">
           <input className="perekl" type="checkbox" id="buttonThree" />
           <label className="prekl"for="buttonThree" onClick={switchTheme}>
            <i></i>
           </label>
          </div>
          <div className="header_blockknop">
            <button onClick={()=>goldref.current.scrollIntoView({behavior: "smooth",block:"start"})} className="knopheader">Золото</button>
            <button onClick={()=>regref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="knopheader">Реагенты</button>
            <button onClick={()=>infref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="knopheader">Информация</button>
            <button onClick={()=>komref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="knopheader">Отзывы</button>
            <button onClick={()=>infref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="knopheader">Гарантий</button>
            <Link to="/oplat" id="linkimgkartinka"><p>{valueKorzina-1}</p><img src={img[6]} height="40px"/></Link>
          </div>
          <div class="hamburger-menu">
            <input id="menu__toggle" type="checkbox" />
            <label class="menu__btn" for="menu__toggle">
              <span></span>
            </label>
           <ul class="menu__box">
              <Link to="/oplat" id="linkimgkartinkaburger"><p>{valueKorzina}</p><img src={img[6]} height="40px"/></Link>
              <li><Link to="" onClick={()=>goldref.current.scrollIntoView({behavior: "smooth",block:"start"})} className="menu__item">Золото</Link></li>
              <li><Link to="" onClick={()=>regref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="menu__item">Реагенты</Link></li>
              <li><Link to="" onClick={()=>infref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="menu__item">Информация</Link></li>
              <li><Link to="" onClick={()=>komref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="menu__item">Отзывы</Link></li>
              <li><Link to="" onClick={()=>infref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="menu__item">Гарантий</Link></li>
           </ul>
          </div>
        </header>
      </head>
      <din className="headotstup"></din>
      <main>
        <div className="zagolovokmain" ref={logoref}><h1>Нужно больше</h1></div>
        <Modal visible={table}/>
        <div className="container_first_content">
          <div className="block_textandknop"> 
            <h1 style={{"color":"gold","height":"160px"}}>GoldЫ!</h1>
            <p>Покупая золото в HYDRAGOLD Вы получаете гарантии:</p>
            <ul class="spisk">
              <li><img src={img[0]} width="40px"/><a>Быстрая доставка</a><div className="opisblock"><MyOpisBlock text="Доставка осуществляется в течений часа после ответа оператора"/></div></li>
              <li><img src={img[1]} width="40px"/><a>Конфиденциальность личных данных пользователя</a><div className="opisblock"><MyOpisBlock text="Наш магазин использует самые эффективные схемы обхода бана"/></div></li>
              <li><img src={img[2]} width="40px"/><a>Разумная цена на игровую валюту – за 1к голд от 6.99 руб</a><div className="opisblock"><MyOpisBlock text="Разумные цены выбрав нас вы выбираете скорость и выгоду"/></div></li>
              <li><img src={img[3]} width="40px"/><a>Мы делаем щедрые оптовые скидки</a><div className="opisblock"><MyOpisBlock text="При покупке золота от 10к мы делаем скидки в размере 5%"/></div></li>
              <li><img src={img[4]} width="40px"/><a>Работаем 24/7</a><div className="opisblock"><MyOpisBlock text="Продаем золото и реагенты в любое удобное вам время так же постоянная отзывчивость и тех поддержка"/></div></li>
              <li><img src={img[5]} width="40px"/><a>МИНИМАЛЬНЫЙ ЗАКАЗ ОТ 1-ЕД ТОВАРА</a><div className="opisblock"><MyOpisBlock text="Уникальное предложение на рынке золота вов больше такого вы нигде не найдете"/></div></li>
           </ul>
          </div>            
          <div className="fotoputin"></div>
        </div>
        <div className="lentdel">
          <h2 id="golddd">Купить золото WOW Sirus – ВОВ Сирус</h2>
        </div>
        <div className="container_doble_knop"ref={goldref}>
          <div className="content_kalkulator">     
              <MyInput rezim={2} callback={callbackcolgold} theme={theme} prop={korzObnov}/>
              <MyInput rezim={4} callback={callbackcolgold} theme={theme} prop={korzObnov}/>          
              <MyInput rezim={5} callback={callbackcolgold} theme={theme} prop={korzObnov}/>
              <div className='blockreg' ref={regref}>             
                {masreg.map((value,index)=>{
                  if(value[0]==false||localStorage.getItem(value[3])!==null){
                    return(                
                      <div className="blocktov">
                        <img src={value[2]} width="70px" height="70px"/>
                        <h2>{value[1]}</h2>
                        <Shethik props={value[3]} callback={callbackcolreg}/>
                      </div>         
                    )
                  }                         
                  return(                
                    <div className="blocktov">
                      <img src={value[2]} width="70px" height="70px"/>
                      <h2>{value[1]}</h2>
                      <MyBottom callback={deleted} text={value[0]} index={index} theme={theme}/>
                    </div>         
                  )
                })}
              </div>                          
          </div>
        </div>  
        <div className="lentdel">
          <h2>Информация</h2>
        </div>
        <div className="container_inf_content" ref={infref}>
          <img src={img[7]} width="300px" onClick={()=>logoref.current.scrollIntoView({behavior: "smooth",block:"start"})} style={{"cursor":"pointer"}}/>
          <div className="block_text_content">
            <div className="textifblock">
              <p>Покупая золото в HYDRAGOLD, вы получаете гарант качества и скорости в доставке золота до ваших сумок . С помощью HYDRAGOLD вы сэкономите кучу времени на скучном фарме голды и поскорее начнете закрывать основной контент, одев лучшие доспехи и оружие сервера с помощью нашего магазина этап прокачки персонажа становится на порядок лучше, качественней и приятней.</p>
            </div>
            <div></div>
            <div className="textifblock" style={{"maxWidth":"400px"}}>
              <p>У нас самая опытная команда игроков сервера, которая гарантирует скорость, качество а так же разумные цены лучше магазина HYDRAGOLD вы уже ни где не найдете. Покупайте золото, услуги, реагенты у нас и наслаждайтесь игровым процессом с HYDRAGOLD.</p>
            </div>
          </div> 
        </div>
        <div className="lentdel" ref={komref}>
            <h2>Отзывы</h2>
          </div>
          <p>Отзыв о нашем магазине вы можете оставить после 1 покупки</p>
          <div className="contotziv">           
            <div className="contentotziv">
              <p>papuas</p>
              <div className="otziv">
                <p>все круто золото в кармане закскачу еще</p>
              </div>
              <p>gapasil</p>
              <div className="otziv">
              <p>Беру уже не первый раз все как часы</p>
              </div>
              <p>valerapro3000</p>
              <div className="otziv">
              <p>Норм цены</p>
              </div>
              <p>anonimus</p>
              <div className="otziv">
              <p>Говнор магазин не бьерите тут пис</p>
              </div>
              <p>suhadrel</p>
              <div className="otziv">
              <p>я обосрался</p>
              </div>
            </div>
          </div>
      </main>
      <footer>
        <p>© 2022 HYDRAGOLD</p>
        <div className="svaz">
          <a href="https://vk.com/talgat98ufa"><img src={img[9]} alt="" width="50px"/></a>
          <a href=""><img src={img[8]} alt="" width="50px"/></a>  
        </div>
      </footer>
    </div>
    </ThemeProvider>
  )
}
export default Title
