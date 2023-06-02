import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  :root{
    --dark-purple-background: #140D29;
    --dark-violet-background: #361028;
    --font-custom: GreyHound, sans-serif;
  }

  @font-face {
    font-family: GreyHound, sans-serif;
    src: url('./assets/customfont/greyhoundbold.ttf');


  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;

  }

  body{
    background-image: linear-gradient(
      to bottom, 
      var(--dark-purple-background),
      var(--dark-violet-background));
    min-height: 100vh;

  }

  a{
    text-decoration: none;
  }
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1aa;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #A40726;
  transition: all 150ms ease 0s;
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #A40726aa;
}

`

export default GlobalStyle