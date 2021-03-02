import React from "react"
import styled from "styled-components"

export default function FeatureAnimation() {
  return (
    <Wrapper>
      <div className="feature1" />
      <div className="feature1" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: relative;
  perspective: 5000;

  @media (max-width: 768px) {
    transform: scale(0.6);
    transform-origin: top left;
  }
  @media (max-width: 450px) {
    transform: scale(0.4);
  }

  /* div {
    transform: rotateY(-20deg) rotateX(20deg);
    transform-origin: bottom left;
  } */

  * {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  /* :hover div {
    transform: rotateY(0deg) rotateX(0deg);
    &.feature1 {
      transition-delay: 0.1s;
      transform: translate(-30px, -30px);
    }
    :hover {
      filter: brightness(150%) saturate(120%);
    } */
  /* } */

  .feature1 {
    position: relative;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    min-width: 200px;
    height: 360px;
    border-radius: 20px;
    background: linear-gradient(
      209.21deg,
      rgb(159, 127, 229) 13.57%,
      rgb(78, 153, 227) 98.38%
    );
    box-shadow: rgb(78 153 227 / 30%) 0px 20px 40px, rgb(0 0 0 / 5%) 0px 1px 3px;
    padding: 20px;
  }
`
