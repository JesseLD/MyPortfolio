import styled from "styled-components";

export const Container = styled.button`
  color: #A40726;
  background-color: #FFD7DD;
  width: 220px;
  height: 50px;
  border-radius: 5px;
  outline: none;
  border: none;
  font-size: 1rem;
  font-family: var(--font-custom);
  text-transform: uppercase;
  transition: all 150ms ease 0s;
  
  &:hover {
    filter: brightness(1.1);
    cursor: pointer;
    box-shadow: 0 0 20px #FFD7DD;
    color: #f84165;
  }

  &:active {
    filter: brightness(1.1);
    cursor: pointer;
  }
`