"use client"
import styled from "@emotion/styled"
import { useState, useRef } from "react"

interface SkillExplanation {
  name: string
  explanation: string
}

interface IProps {
  data: SkillExplanation
}

export default function AboutSkil(props: IProps) {
  const skillBox = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const arrowRef = useRef<HTMLDivElement>(null)

  const [show, setShow] = useState(true)

  const OpenClosehandler = () => {
    if (skillBox.current && wrapRef.current && arrowRef.current) {
      if (show) {
        skillBox.current.style.height = "120px"
        wrapRef.current.style.margin = "12px 0px"
        arrowRef.current.style.transform = "rotate(0deg)"
      } else {
        skillBox.current.style.height = "40px"
        wrapRef.current.style.margin = "0px"
        arrowRef.current.style.transform = "rotate(180deg)"
        arrowRef.current.style.transition =
          "transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      }

      setShow((prev) => !prev)
    }
  }

  return (
    <Wrap ref={wrapRef}>
      <SkillBox ref={skillBox}>
        <SkillNameBox onClick={OpenClosehandler}>
          <SkillName>{props?.data?.name}</SkillName>
          <Down ref={arrowRef}>&#94;</Down>
          {/* <Up>&#94;</Up> */}
        </SkillNameBox>
        <SkillExplanation id={props?.data?.name} className="skillexplanation">
          {props?.data?.explanation}
        </SkillExplanation>
      </SkillBox>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  height: auto;
`

const SkillBox = styled.div`
  font-size: 18px;
  font-weight: 200;
  display: flex;
  flex-direction: column;
  padding: 0px 16px;
  background-color: #fff;
  border-bottom: 1px solid #d3d1d1;
  color: #000;
  height: 40px;
  overflow: hidden;
  transition-duration: 220ms;
`
const SkillNameBox = styled.div`
  display: flex;
  font-weight: 500;
  padding: 10px 0 10px 5px;
  justify-content: space-between;
  cursor: pointer;
`

const SkillName = styled.div`
  display: inline-block;
`

const Up = styled.div`
  display: inline-block;
  font-weight: bold;
  font-size: 24px;
  width: 21px;
  height: 21px;
  text-align: center;
`

const Down = styled(Up)`
  transform: rotate(180deg);
  cursor: pointer;
`

const SkillExplanation = styled(SkillNameBox)`
  border-top: 1px solid #d3d1d1;
  cursor: default;
`
