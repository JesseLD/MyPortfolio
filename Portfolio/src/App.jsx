import { Container } from "./styles"
// import FG from './assets/FG.png'
// import FG2 from './assets/FG1080p.png'
// import cloud from './assets/cloud.png'
import rocks from './assets/rocks1080p.png'
// import test from './assets/test.png'

import { Header } from "./components/Header/Index"
import { Button } from "./components/Button"

import ParticlesBG from "./components/Particles"
import { IoMenuOutline } from "react-icons/io5";


export default function App(){
  return(
    <>
    
    <Header/>
    <Container>
      <section className="primary-content">
        <div className="primary-text">
          <ParticlesBG/>
          <h1 className="title">Jessé Oliveira</h1>
          <h2 className="subtitle">Desenvolvedor fullstack com design ui/ux criativo</h2>
          <Button type="button" text="Saiba Mais"/>
        </div>
      </section>

      <section className="rocks-div">
        <img className="rocks" src={rocks} alt="rocks" />
      </section>

      <section className="second-content">
        <div className="rock-container">
          
        </div>

      </section>
    </Container>
    </>
  )
}


// const fgd = document.querySelector('.foreground');
const pText = document.querySelector('.primary-text');
// const particles = document.querySelector('ParticlesBG');
// const vct = document.querySelector('#var');

//115

window.addEventListener('scroll',()=>{
  let value = window.scrollY;

  // vct.innerText = value

  pText.style.transitionDuration = "250ms"
  if(value >= 100){
    
    pText.style.opacity = 0

  }else{
    pText.style.opacity = 1

  }

  // // particles.style.transitionDuration = "250ms"
  // if(value >= 200){
    
  //   particles.style.opacity = 0

  // }else{
  //   particles.style.opacity = 1

  // }


})