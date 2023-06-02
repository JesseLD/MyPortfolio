import Particles from "react-tsparticles"
import particlesConfig from "./config/particles-config"
import { loadFull } from "tsparticles"

function ParticlesBG (){
  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
    
  };

  const particlesLoaded = (container)=>{
    console.log(container)
  }

  return(
    <>
      <Particles 
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
      params={particlesConfig}/>
    </>
  )
}

export default ParticlesBG