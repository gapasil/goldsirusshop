import {React, useState, useEffect} from 'react'
import style from "./svaz.module.css"

export const Svaz = ({callback}) => {
    const [value,setValue] = useState("")

    useEffect(()=>{callback(value)},[value])
    
  return (
    <div className={style.container}>
        <div className={style.blocksvaz}>
          <p>Ваши данные для связи </p>
          <p>подойдут любые соц.сети или мессенджеры</p>
          <textarea value={value} onChange={(e)=>{setValue(e.target.value)}} placeholder="Введите данные:"></textarea>
        </div>
        <div className={style.viborka}>
        <div className={style.block}>
           <p>Выберите реалм</p>
        <select>
            <option>X2</option>
            <option>X4</option>
            <option>X5</option>
        </select> 
        </div>
        <div className={style.block}>
                    <p>Выберите способ доставки</p>
        <select>
            <option>Аукцион</option>
            <option>Обмен</option>
            <option>Почта</option>
        </select>
        </div>
        
        </div>
        <p>После заполнения анкеты в течений 5 минут с вами свяжется наш оператор</p>
    </div>
  )
}
