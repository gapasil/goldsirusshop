import {React,useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';

export const Shethik = ({props,callback,shethikk,kol,prop}) => {
  let [value,setValue] = useState(localStorage.getItem(props)||0)
  let [suma,setSum] = useState(0)
  const dispatch = useDispatch()
    
  useEffect(()=>{
    dispatch({type:props,payload:suma})
    if(prop){prop()}  
  },[suma])

  useEffect(()=>{  
    if(callback){callback(props,value)}
    else localStorage.setItem(props,value)   
  },[value])

  useEffect(()=>{
    if(props=="voronka"){setSum(value*15)}
    if(props=="pesh"){setSum(value*60)}
    if(props=="saronit"){setSum(value*10)}
  },[value])

  useEffect(()=>{
  if(shethikk==false){
    setValue(kol)
  }},[])

  
  if(shethikk==false){
  return (
    <div className="contshethikkorz">
    <div className="shethik">
      <button className="knopshethik" onClick={()=>{
        if(value == 100){return}
        setValue(++value)}}>+</button>
      <input
      type="number"
      value={value}
      onChange={(e)=>{
        if(e.target.value<99){setValue(e.target.value++)}}}
      />
      <button className="knopshethik" onClick={()=>{           
        if(value == 0){return}
        setValue(value-1)}}>-</button>
    </div>
        <h2>{`Итого:${suma} рублей`}</h2>
  </div>
  )
}
return (
      <div className="contshethik">     
      <div className="shethik">
        <button className="knopshethik" onClick={()=>{
          if(value == 100){return}
          setValue(++value)}}>+</button>
        <input
        type="number"
        value={value}
        onChange={(e)=>{if(e.target.value<99){setValue(e.target.value++)}}}/>
        <button className="knopshethik" onClick={()=>{           
          if(value == 0){return}
          setValue(value-1)}}>-</button>
      </div>
      <div class="slidecontainer">
        <input 
        type="range" 
        min="1" 
        max="100" 
        class="slider" 
        id="myRange"
        value={value}
        onChange={(e)=>{ if(e.target.value<99){setValue(e.target.value++)}}}
        />
      </div>
      <h2>{`Итого:${suma} рублей`}</h2>
    </div>
)
}
