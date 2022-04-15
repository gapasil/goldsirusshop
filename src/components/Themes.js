import {createGlobalStyle} from "styled-components"
export const darkTheme = {
    body: "rgb(10, 10, 10);",
    head:"#2a2a2a",
    teni:"2px 2px 10px rgb(40, 40, 40)",
    content:"rgb(20, 20, 20)",
    headingColor:"white"
  }
  
  export const lightTheme = {
    body: "rgb(199, 199, 199);",
    head:"black",
    teni:"2px 2px 10px rgb(150, 150, 150)",
    content:"rgb(255, 255, 255)",
    headingColor:"black"
  }
  
  export const GlobalStyles = createGlobalStyle`
   main {
    background: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: .3s ease;
   }
   .head{
    background:${props => props.theme.head};
    box-shadow:${props => props.theme.teni};
   }
   .knopheader{
    background:${props => props.theme.head};
   }
   .container_first_content{
    background:${props => props.theme.content};
   }
   .zagolovokmain{
    background:${props => props.theme.content};
   }
   .spisk li{
    background:${props => props.theme.content};  
   }
   .spisk li:before{
    background:${props => props.theme.content};
    color: ${props => props.theme.headingColor};
   }
   .lentdel{
    background:${props => props.theme.head};
    box-shadow:${props => props.theme.teni};
   }
   .container_inf_content{
    background:${props => props.theme.content};  
   }
   .container_korzina_content{
    background:${props => props.theme.content};  
   }
   .content_kalkulator{
    background:${props => props.theme.content};
   }
   .shethik input{
    background:${props => props.theme.content};
    color: ${props => props.theme.headingColor}
   }
   .rss{
     background:${props => props.theme.head}
   }
   label i{
     background:${props => props.theme.content}
   }
   .contotziv{
     background:${props => props.theme.content}
   }
   .menu__box{
     background:${props => props.theme.head}
   }
   .menu__item{
     color: white
   }
   h2{
     color: white
   }
   p{
     color: ${props => props.theme.headingColor}
   }
   a{
     color: ${props => props.theme.headingColor}
   }
   h3{
     color:${props => props.theme.content}
   }
   h1{
     color:${props => props.theme.headingColor}
   }`