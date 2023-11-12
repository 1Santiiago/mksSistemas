import styled from "styled-components";
import apple from "../img/apple-watch.png";
export const Container = styled.div`
  width: 22rem;
  height: 22rem;
  border-radius: 0.5rem;
  background: var(--color-two);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
  position: relative;
  text-align: center;
`;
export const Img = styled.div`
  background-image: url(${apple});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  height:9rem;

`;


export const containerTitlePrice = styled.div`
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 3rem;
`

export const H2 = styled.h2`
  color: #2c2c2c;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.1875rem;

`;
export const Button = styled.button`
  border: 0;
  width: 100%;
  border-radius: 0rem 0rem 0.5rem 0.5rem;
  color: var(--color-two);
  background-color: var(--color-background);
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-transform: uppercase;
  height: 2rem;
`;

export const P = styled.p`
  width: 100%;
  margin-top: 1rem;
  height: 1.5625rem;
  text-align: left;
`;
export const Span = styled.span`
display: block;
width: 4rem;
height: 1.6rem;
border-radius: 0.3125rem;
background: #373737;
color: var(--color-two);
align-items: center;
`