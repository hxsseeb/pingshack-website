import React from "react"
import styled, { keyframes } from "styled-components"
import FeatureAnimation from "../animations/FeatureAnimation"
import { themes } from "../styles/ColorStyles"
import { Caption2, H2, MediumText } from "../styles/TextStyles"

function FeatureSection() {
  return (
    <Wrapper>
      <CardWrapper>
        <TextWrapper>
          <UpperTitle>100+ unique features</UpperTitle>
          <Title>
            Premuium
            <br /> features.
          </Title>
          <Description>
            We lead the industry offering our members the top standard of a
            cookgroup.
          </Description>
          <FeatureAnimation />
        </TextWrapper>
      </CardWrapper>
    </Wrapper>
  )
}

export default FeatureSection

const animation = keyframes`
  0% { opacity: 0; transform: translateY(-10px); filter: blur(10px); }
  100% { opacity: 1; transform: translateY(0px); filter: blur(0px); }
`

const Wrapper = styled.div`
  overflow: hidden;
  display: block;
  position: relative;
  padding-top: 85px;
  height: 1222px;
  @media (max-width: 700px) {
    height: 1390px;
  }

  @media (max-width: 1280px) {
    height: 1306px;
  }

  @media (max-width: 1254px) {
    padding-top: 150px;
  }
`

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 218px);
  justify-items: center;
  gap: 20px;
  max-width: 1234px;
  margin: 40px auto;
  padding: 40px 30px;
  position: relative;
  top: -40px;

  @media (max-width: 1234px) {
    top: -180px;
    grid-template-columns: repeat(5, minmax(200px, 1fr));
    padding-bottom: 120px;
    overflow-x: scroll;
  }
`

const TextWrapper = styled.div`
  max-width: 360px;
  display: grid;
  gap: 15px;

  > * {
    opacity: 0;
    animation: ${animation} 1s forwards;

    :nth-child(1) {
      animation-delay: 0s;
    }
    :nth-child(2) {
      animation-delay: 0.2s;
    }
    :nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`

const UpperTitle = styled(Caption2)`
  color: ${themes.dark.text2};
`

const Title = styled(H2)`
  color: ${themes.dark.text1};

  span {
    background: linear-gradient(180deg, #ffd7ff 0%, #ffb6ff 100%);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (max-width: 450px) {
    font-size: 30px;
  }
`

const Description = styled(MediumText)`
  color: ${themes.dark.text1};
`
