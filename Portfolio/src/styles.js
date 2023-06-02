import styled from "styled-components";
import BG from './assets/BGREPEAT.png'
import test from './assets/test.png'


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-family: var(--font-custom);


  
   .primary-content{
    position: relative;
    width: 100%;
    height: 100vh;
    /* background-image: linear-gradient(to right,#ffe8ce 4%,#ffba90 10%, #f18390 40%,#a984b0,#3f88cf); */
    background-image: url(${test});
    background-size: cover;
    background-attachment: fixed;
    /* background-position: center; */
    overflow: hidden;
    
    
  } 

   img.foreground{
    display: block;
    position: absolute;
    top: -115px;
    width: 100%;
    /* height: 100%; */
    overflow-x: hidden;
    /* transform: scaleX(0.95); */
    /* background-image: url(${BG}); */
    
    
   }

 

  .primary-text{
    position: absolute;
    /* background-color: red; */
    top: 14vw;
    left: 10vw;
    color: white;
    z-index: 10;

    .title{
      font-size: 9vw;
    }
    .subtitle{
      font-size: 1.9vw;
      text-transform: uppercase;
      margin-bottom: 20px;
    }
  }
  .rock-container{
    
    width: 100%;
    height: 100%;
    top: 0;
    
  
    
   }

   .rocks-div{
    width: 100%;
    height: 400px;  
    display: flex;
    align-items: center;
    justify-content: center;

    img{
      display: 
      width: 100%;
      
    }
   }
  .second-content{
    width: 100%;
    height: 100vh;
    position: relative;
    background-color: blue;
    display: flex;
    align-items: start;
    /* overflow-block: auto; */
    
  }


  @media (max-width:840px){

  }
  @media (max-width:400px){
    .rocks{
    position: absolute;
    width: 100%;
    top:0;

   }
  }

`