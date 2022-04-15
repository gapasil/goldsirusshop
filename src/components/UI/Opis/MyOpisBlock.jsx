import React from 'react'
import style from "./opis.module.css"
import img from "../../../img/light/восклиц.jpg"

export const MyOpisBlock = ({text}) => {
  return (
    <div className={style.tableOpis}>
        <img src={img} width="40px"/>
        <p>{text}</p>
    </div>
  )
}
