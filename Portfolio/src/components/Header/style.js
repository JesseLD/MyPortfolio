import styled from "styled-components";

export const Container = styled.header`
  margin: 10px 10vw;
  max-width: 80vw;
  width: 100%;
  height: 80px;
  position: fixed;
  font-family: var(--font-custom);
  color: white;
  z-index: 10;

  .menu{
    display: none;
    font-size: 5vw;

  }

  li{
    
    list-style: none;
    transition: all 150ms 0s ease;

  }
  a{
    color: white;
    font-size: 2vw;
    

    &:hover{
      cursor: pointer;
      filter: brightness(1.2);
      text-shadow: 0 0 15px #FFD7DD;


    }
  }

  nav{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;

  }

  .nav-items{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 700px;
    width: 100%;
    /* background-color: red; */

  }

  .logo{
    width: clamp(50px, 50%, 80px);
    transition: all 150ms 0s ease;

    &:hover{
      transform: scale(1.1);

      }
    }
    @media (max-width:1000px){
      .nav-items{
        width: 900px;
      }

    }

  /* @media (max-width: 840px){
      
    a{
      font-size: 16px;
      margin-right: 16px;

    }
    .nav-items{
     justify-content: flex-end;
      
    }
  }  
     */
  @media (max-width: 840px){
    .Home, .About, .Contact, .Job{
    display: none;
   }
  
   .menu{
    display: list-item;
    
   }

  a{
    font-size: 16px;
    margin-right: 16px;

    }
  .nav-items{
    justify-content: flex-end;
      
  }

  
  }

  @media (max-width: 400px){
   .logo{
     width: 50px;
   }
   
   /* .menu{
    display: block;
   } */


  }

`
