import React from 'react'
import style from "./buttom.module.css"

export const MyBottom = ({callback,text,index,type,theme}) => {
  let tem
  if(theme == "light"){
    tem = style.knoplight
  }
  else{
    tem = style.knopblack
  }
  if(type == "green"){
  return (
    <>
        <button onClick={()=>{callback(index)}} className={style.knopgreen} >{text}</button>
    </>
  )
  }
  return (
    <>
        <button onClick={()=>{callback(index)}} className={tem} >{text}</button>
    </>
  )
}
