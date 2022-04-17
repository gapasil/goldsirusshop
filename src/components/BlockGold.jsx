import React, { useState, useEffect} from 'react'
import style from "./UI/MyInput/input.module.css"
import img from "../img/light/выебистая.png"
import x2 from "../img/light/х2.jpg"
import x4 from "../img/light/х4.png"
import x5 from "../img/light/х5.png"
import x2black from "../img/black/х2black.jpg"
import x4black from "../img/black/х4black.png"
import x5black from "../img/black/х5black.png"
import {MyBottom} from "./UI/MyButtom/MyBottom"
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

export const BlockGold = ({rezim,callback,props,theme}) => {

  let [valueGold,setValueGold]= useState(localStorage.getItem(`x${rezim}`))
  let [valueRub,setValueRub]= useState(useSelector(state => state[`x${rezim}`]))
  const [kartink,setKartink] = useState([
    x2,x4,x5
  ])
  const dispatch = useDispatch()
    let cssrub,cssgold

    if(theme == "light"){  
      cssrub = style.goldlight;
      cssgold  = style.rublight;
      if(kartink[0]==x2black){setKartink([x2,x4,x5])} 
    }
    else{  
      cssrub = style.goldblack;
      cssgold  = style.rubblack;
      if(kartink[0]==x2){setKartink([x2black,x4black,x5black])}
    }
  useEffect(()=>{
    dispatch({type:`x${rezim}`,payload:valueRub})
    props()
  },[valueRub])

  let callbackcolgold = () =>{
    localStorage.removeItem(`x${rezim}`)
    dispatch({type:`x${rezim}`,payload:0})
    callback(Math.random())
  } 

  let callbackValueGold = (e) =>{
    if(e.target.value > 9999999){
      return
    }
    if(rezim==2){
      let suma = (e.target.value/6.99)*1000;
      setValueGold(Math.floor10(suma, -2));
    }
    if(rezim==4){
      let suma = (e.target.value/12.99)*1000;
      setValueGold(Math.floor10(suma, -2));
    }
    if(rezim==5){
      let suma = (e.target.value/29.99)*1000;
      setValueGold(Math.floor10(suma, -2));
    }
    
    setValueRub(e.target.value)
  }
  let callbackValueRub = (e) =>{
    if(e.target.value > 9999999){
      return
    }
    if(rezim==2){
      let suma = (6.99/1000)*e.target.value;
      setValueRub(Math.floor10(suma, -2));
    }
    if(rezim==4){
      let suma = (12.99/1000)*e.target.value;
      setValueRub(Math.floor10(suma, -2));
    }
    if(rezim==5){
      let suma = (29.99/1000)*e.target.value;
      setValueRub(Math.floor10(suma, -2));
    }
    setValueGold(e.target.value)
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
  if(rezim==2){
    return (
      <div className="calcx">
      <h2 style={{"textAlign":"center"}}>Цена за 1000 золота 6.99</h2>
      <div className="kalk" style={{"height":"200px"}}><Link to="/oplat" className='link'><img src={kartink[0]} width="200px" height="150px"></img></Link><h2>x2</h2><MyBottom callback={callbackcolgold} text="Удалить"/></div> 
      <div className="kalk">     
          <div className='continput'>
            <p>Получу</p>
            <input type="number" className={cssgold} value={valueGold} onChange={callbackValueRub} />
          </div>
          <img src={img} width="40px" />
          <div className='continput'>
            <p>Заплачу</p>
            <input type="number" className={cssrub} value={valueRub} onChange={callbackValueGold} />
          </div>      
      </div> 
     </div> 
    )}
    if(rezim==4){
      return(
      <div className="calcx">
      <h2 style={{"textAlign":"center"}}>Цена за 1000 золота 12.99</h2>
      <div className="kalk" style={{"height":"200px"}}><Link to="/oplat" className='link'><img src={kartink[1]} width="200px" height="150px"></img></Link><h2>x4</h2><MyBottom callback={callbackcolgold} text="Удалить"/></div> 
      <div className="kalk">     
          <div className='continput'>
            <p>Получу</p>
            <input type="number" className={cssgold} value={valueGold} onChange={callbackValueRub} />
          </div>
          <img src={img} width="40px" />
          <div className='continput'>
            <p>Заплачу</p>
            <input type="number" className={cssrub} value={valueRub} onChange={callbackValueGold} />
          </div>      
      </div> 
     </div>
      )
    }
    if(rezim==5){
      return(
      <div className="calcx"> 
      <h2 style={{"textAlign":"center"}}>Цена за 1000 золота 29.99</h2>
      <div className="kalk" style={{"height":"200px"}}><Link to="/oplat" className='link'><img src={kartink[2]} width="200px" height="150px"></img></Link><h2>x5</h2><MyBottom callback={callbackcolgold} text="Удалить"/></div> 
      <div className="kalk">
          <div className='continput'>
            <p>Получу</p>
            <input type="number" className={cssgold} value={valueGold} onChange={callbackValueRub} />
          </div>
          <img src={img} width="40px" />
          <div className='continput'>
            <p>Заплачу</p>
            <input type="number" className={cssrub} value={valueRub} onChange={callbackValueGold} />
          </div>      
      </div> 
     </div>
      )
    }
  }
    
