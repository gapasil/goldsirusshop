import {React, useState} from 'react'
import style from "./modal.module.css"
import img from "../../../img/light/cross.png"

export const Modal = ({visible}) => {
  const [display,setVisible] = useState(style.openModal)

  if(visible){
  return (
    <div id={display} class={style.modal} onClick={()=>{setVisible("")}}>
  <div class={style.modaldialog}>
    <div className={style.krest} onClick={()=>{setVisible("")}}>
      <img src={img} width="15px" />
    </div>  
    <div class={style.modalcontent}>
      <div class={style.modalheader}>
        <h3 class={style.modaltitle}>Заявка на рассмотрений</h3>
      </div>
      <div class={style.modalbody}>    
        <p>С вами свяжутся по оставленным контактным данным ожидайте...</p>
      </div>
    </div>
  </div>
</div>
  )
  }
}
