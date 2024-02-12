"use client"
import styled from "@emotion/styled"
import { Typewriter } from "react-simple-typewriter"
import { useEffect, useRef, useState } from "react"
import ThreeShpere from "../3dSphere"

export default function Production() {
  let percentage = 0
  const [cur, setCur] = useState(true)
  const [typing, setTyping] = useState(false)
  const subTextRef = useRef<HTMLSpanElement>(null)
  const subIntroductionRef = useRef<HTMLDivElement>(null)

  const underline = () => {
    subTextRef?.current?.style.setProperty(
      "background-image",
      "linear-gradient(transparent 80%, #ffc831 20%)"
    )

    const stop = setInterval(() => {
      if (percentage === 99) {
        clearInterval(stop)
      }
      percentage += 1
      subTextRef?.current?.style.setProperty(
        "background-size",
        `${percentage}% 100%`
      )
    })
  }

  const fadeIn = () => {
    if (subIntroductionRef?.current) {
      subIntroductionRef.current.style.transition = `opacity 1s 1s`
      subIntroductionRef.current.style.opacity = `1`
    }
  }

  useEffect(() => {
    setTimeout(() => {
      underline()
      fadeIn()
    }, 1500)
  }, [])

  return (
    <Wrap className="firstSection">
      <Container className="firstContainer">
        <CenterSection className="centersection">
          <Circle className="circle">
            <Character src="/img/ticon.png" />
          </Circle>
          <Introduction>
            안녕하세요,&nbsp;
            <SubText ref={subTextRef}>
              <Typewriter
                words={["김동우"]}
                typeSpeed={100}
                onType={() => {
                  setTyping(true)
                }}
              />
            </SubText>
            {typing && (
              <Typewriter
                words={["입니다."]}
                typeSpeed={200}
                cursor={cur}
                onType={() => {
                  setCur(false)
                }}
              />
            )}
          </Introduction>
          <SubIntroduction ref={subIntroductionRef}>
            <About>
              <Highlight>2년차 주니어</Highlight>
              개발자입니다.
            </About>
            <About>
              <Highlight>다양한 프로젝트 경험 </Highlight> 과
              <Highlight> 다양한 언어</Highlight>를 접하면서
            </About>
            <About>
              <Highlight>배움을 끊임없이 도전하는</Highlight> 개발자로써
            </About>
            <About>항상 변하는 모습을 보여드리고 싶습니다.</About>
          </SubIntroduction>
        </CenterSection>
        <RightSection className="rightSection">
          <ThreeShpere />
        </RightSection>
      </Container>
    </Wrap>
  )
}
const Wrap = styled.section`
  width: 100%;
  height: 100%;
  font-family: "LINESeedKR";
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-bottom: 500px;
`

const Container = styled.div`
  max-width: 60rem;
  height: 100%;
  display: flex;
  padding: 0 20px;
`

const Circle = styled.div`
  background-color: #fff;
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin-bottom: 2rem;
  z-index: 1;
  &::selection {
    background: none;
  }
  :hover {
    transform: scale(1.1);
  }
`

const Character = styled.img`
  width: 120px;
  &::selection {
    background: none;
  }
`

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* position: absolute;
  left: 30rem;
  top: 20rem; */
  &::selection {
    background: none;
  }
`

const Introduction = styled.span`
  width: 362px;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #fff;
  &::selection {
    background: none;
  }
`
const SubText = styled.span`
  font-size: 42px;
  background-image: linear-gradient(rgba(0, 0, 0, 0) 80%, #ffc831 20%);
  background-size: 0% 100%;
  background-repeat: no-repeat;
  &::selection {
    background: none;
  }
`

const Highlight = styled.span`
  color: #ffc831;
  &::selection {
    background: none;
  }
`

const SubIntroduction = styled.div`
  opacity: 0;
  /* position: absolute;
  left: 0;
  top: 6rem; */
  color: #fff;
  &::selection {
    background: none;
  }
`

const About = styled.p`
  margin-bottom: 8px;
  &::selection {
    background: none;
  }
`

const RightSection = styled.div`
  /* position: absolute;
  right: 24rem;
  top: 10rem; */
  margin-left: 140px;
`
