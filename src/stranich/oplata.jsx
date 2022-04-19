import {React,useState,useEffect,useRef} from 'react'
import {MyBottom} from "../components/UI/MyButtom/MyBottom"
import {Shethik} from "../components/Shethik"
import {Link} from "react-router-dom";
import x2 from "../img/light/х2.jpg"
import x4 from "../img/light/х4.png"
import x5 from "../img/light/х5.png"
import voronka from "../img/light/воронка.jpg"
import pesh from "../img/light/песчинка.png"
import saronit from "../img/light/саронит.png"
import {BlockGold} from "../components/BlockGold"
import { useDispatch, useSelector } from 'react-redux';
import krestik from "../img/light/cross.png"
import vk from "../img/light/vk.png"
import tg from "../img/light/telegram.png"
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from "../components/Themes";
import {Svaz} from "../components/UI/forma/Svaz"

const Oplata = () => {
    let mas = []
    const komref = useRef(null)
    const dispatch = useDispatch()
    const sum = useSelector(state => state)
    let [deler,usedelerr] = useState("")
    const startpozition = useRef(null);  
    let [mastovar,setMasTovar] = useState([])
    let [suma,setSum] = useState(0)
    let zx = 0
    let [,stet] = useState("")
    let theme = localStorage.getItem("theme")
    let [silka,setSilka] = useState("/oplat")
    let [tetxt,setText] = useState("")
    let clas
    
    if(localStorage.length >= 2){
      clas = "knopAndSum"
    }
    else{clas = "noneclass"}

    const switchTheme = () => {
      if(theme == "light"){
        localStorage.setItem("theme","dark")
        stet(Math.random())
      }
      else {
        localStorage.setItem("theme","light")
        stet(Math.random())
      }
    };
    
    useEffect(()=>{
      dispatch({type:"table",payload:false})
      setTimeout(()=>{
      startpozition.current.scrollIntoView({behavior: "smooth",block:"start"})
    },500)
    },[])

    useEffect(()=>{perech()})

    useEffect(()=>{
      mas = []
      for(let key in localStorage){     
        if (!localStorage.hasOwnProperty(key)) {
          continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        let karttovar = [key,localStorage[key]]
        mas.push(karttovar)
    }},[deler])
    
    useEffect(()=>{
      setMasTovar(mas)
    },[deler])

    let perech = () =>{
      for(let key in sum ){
        if(key == "theme"){continue}
        if(sum[key]){
          if(sum[key]>=6){
            zx += sum[key]
          }         
        }       
      }
      setSum(Math.floor10(zx, -2))
    }

    let deleted = (bol) =>{
      usedelerr(bol)
    }

    let proverka =(value)=>{
      if(value){setSilka("/")}
    }
    let proverk = () =>{
      dispatch({type:"table",payload:true})
      if(suma<6.99){
        dispatch({type:"table",payload:false})
        setText("Минимальное количество золота к покупке 1000")       
      }
      else if(silka == "/oplat"){
        dispatch({type:"table",payload:false})
        setText("Заполните анкету!")
      }
    }

    function decimalAdjust(type, value, exp) {
      // Если степень не определена, либо равна нулю...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Если значение не является числом, либо степень не является целым числом...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Сдвиг разрядов
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Обратный сдвиг
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
    if (!Math.floor10) {
        Math.floor10 = function(value, exp) {
          return decimalAdjust('floor', value, exp);
        }
    }
    return (
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div> 
        <head className="head">
         <header className="header">
           <Link to="/" onClick={()=>{dispatch({type:"position",payload:"logoref"})}} style={{"textDecoration":"none"}}>
              <h2 className="logo">HG</h2>
           </Link>         
           <h2 style={{"color":"white"}} className="logotext">Выбрать тему</h2>
           <div class="rss">
           <input className="perekl" type="checkbox" id="buttonThree" />
           <label className="prekl"for="buttonThree" onClick={switchTheme}>
            <i></i>
           </label>
          </div>
           <div className="header_blockknop">
             <Link to="/" onClick={()=>{dispatch({type:"position",payload:"goldref"})}} className="knopheader">Золото</Link>
             <Link to="/" onClick={()=>{dispatch({type:"position",payload:"regref"})}}className="knopheader">Реагенты</Link>
             <Link to="/" onClick={()=>{dispatch({type:"position",payload:"infref"})}}className="knopheader">Информация</Link>
             <button onClick={()=>komref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="knopheader">Отзывы</button>
             <Link to="/" onClick={()=>{dispatch({type:"position",payload:"infref"})}}className="knopheader">Гарантий</Link>
           </div>
           <div class="hamburger-menu">
             <input id="menu__toggle" type="checkbox" />
             <label class="menu__btn" for="menu__toggle">
                <span></span>
             </label>
             <ul class="menu__box">
                <li><Link to="/" onClick={()=>{dispatch({type:"position",payload:"goldref"})}} className="menu__item">Золото</Link></li>
                <li><Link to="/" onClick={()=>{dispatch({type:"position",payload:"regref"})}}className="menu__item">Реагенты</Link></li>
                <li><Link to="/" onClick={()=>{dispatch({type:"position",payload:"infref"})}}className="menu__item">Информация</Link></li>
                <li><Link to="" onClick={()=>komref.current.scrollIntoView({behavior: "smooth",block:"start"})}className="menu__item">Отзывы</Link></li>
                <li><Link to="/" onClick={()=>{dispatch({type:"position",payload:"infref"})}}className="menu__item">Гарантий</Link></li>
             </ul>
            </div>
          </header>
        </head>
        <main>
          <din className="headotstup" ref={startpozition}></din>     
          <div className="container_korzina_content">
            <div className="block_korzina">
              <div className="tovar_korzina">
                {mastovar.map((value,index)=>{
                  if(localStorage.length >= 2){
                  let deletes = () =>{
                    localStorage.removeItem(value[0])
                    dispatch({type:value[0],payload:0})
                    usedelerr(Math.random())
                  }
                  let imgg
                  let nameReg              
                  if(value[0]=="x2"){imgg=x2}
                  if(value[0]=="x4"){imgg=x4}
                  if(value[0]=="x5"){imgg=x5}
                  if(value[0]=="x5"||value[0]=="x4"||value[0]=="x2"){
                    let rez  = value[0]
                    return(
                      <BlockGold rezim={rez[1]} callback={deleted} props={perech} theme={theme}/>
                    )
                  }
                  if(value[0]=="voronka"){imgg=voronka;nameReg="Воронка пустоты"}
                  if(value[0]=="pesh"){imgg=pesh;nameReg="Песчинка потерянного времени"}
                  if(value[0]=="saronit"){imgg=saronit;nameReg="Древнейщий саронит"}
                  if(value[0]=="saronit"||value[0]=="pesh"||value[0]=="voronka"){
                    return(
                      <div style={{"width":"90%"}}>
                        <p>{nameReg}</p>
                        <div className="blocktovar" key={index}>
                          <img src={imgg} width="70px" height="70px"/>
                          <Shethik props={value[0]} shethikk={false} kol={value[1]} prop={perech}/>
                          <img src={krestik} width="30px" className='krestik' onClick={deletes}/>
                        </div>
                      </div>
                  )}}
                  else{
                    return(
                      <h2 style={{"paddingTop":"100px","color":"teal"}}>Сдесь будут ваши товары</h2>
                    )                   
                  }
                  })}
                  <div className={clas}>
                    <h2 style={{"color":"teal"}}>{`Итого: ${suma} рублей`}</h2>
                    <Link to={silka} className="knopgreen" onClick={proverk}>Купить</Link>
                    <h2 style={{"color":"red"}}>{tetxt}</h2>
                    <Svaz callback={proverka}/>  
                  </div>                  
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
          <a href="https://vk.com/talgat98ufa"><img src={vk} alt="" width="50px"/></a>
          <a href=""><img src={tg} alt="" width="50px"/></a>  
        </div>   
      </footer>
      </div>
      </ThemeProvider>
    )
}
export default Oplata
