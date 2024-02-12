"use client"
import styled from "@emotion/styled"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import dynamic from "next/dynamic"

const LIST = [{ name: "Introduction" }, { name: "Career" }, { name: "Project" }]

function PositionMenu() {
  const [position, setPosition] = useState(
    typeof window !== "undefined"
      ? Number(sessionStorage.getItem("scrollPos"))
      : 0
  )

  const onClickSection = (name: string) => {
    let pos_y = 0

    if (name === "Introduction") {
      pos_y = 0
    } else if (name === "Career") {
      pos_y = 844
    } else if (name === "Project") {
      pos_y = 2251
    }

    return window.scrollTo({ top: pos_y, behavior: "smooth" })
  }

  const onScroll = () => {
    setTimeout(() => {
      sessionStorage.setItem("scrollPos", String(window.scrollY))
      setPosition(window.scrollY)
    }, 200)
  }

  useEffect(() => {
    history.scrollRestoration = "auto"
    setPosition(window.scrollY)

    window.addEventListener("scroll", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
    }
  }, [])

  return (
    <Wrap className="positionMenu">
      <Menu position={position}>
        {LIST.map((el) => {
          return (
            <List
              key={el.name}
              onClick={() => {
                onClickSection(el.name)
              }}
            >
              {el.name}
            </List>
          )
        })}
      </Menu>
      <UnderBox>
        <Email>donig1225@naver.com</Email>
        <Telephone>tel: 010-8839-4592</Telephone>
        <Link
          href="https://github.com/devdongwoo"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            width: "30px"
          }}
        >
          <Github src="/img/github-mark-white.png" width="30" />
        </Link>
        <div style={{display:"flex", alignItems: "center"}}>
          <Link
            href="https://github.com/devdongwoo"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "30px"
            }}
          >
            <Github src="/img/github-mark-white.png" width="30" />
          </Link>
          <Link
            href="https://velog.io/@devdongwoo/posts"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: "30px",
              marginLeft: "12px"
            }}
          >
            <Velog src="/img/velog_icon.svg" width="30"/>
          </Link>
        </div>
      </UnderBox>
    </Wrap>
  )
}

interface IStyled {
  position: number
}

const Wrap = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  align-items: center;
  background-color: #000;
  width: 200px;
  height: 100%;
  z-index: 99;
`
const Menu = styled.ul`
  position: relative;
  list-style: none;
  li:first-of-type {
    transition: all 0.2s ease 0s;
    transform: ${(props: IStyled) => {
      return props.position >= 0 && props.position < 422 ? "scale(1.1)" : "none"
    }};
    font-weight: ${(props: IStyled) => {
      return props.position >= 0 && props.position < 422 ? "500" : "200"
    }};
  }

  li:nth-of-type(2) {
    transition: all 0.2s ease 0s;
    transform: ${(props: IStyled) => {
      return props.position >= 422 && props.position < 1618
        ? "scale(1.1)"
        : "none"
    }};
    font-weight: ${(props: IStyled) => {
      return props.position >= 422 && props.position < 1618 ? "500" : "200"
    }};
  }

  li:nth-of-type(3) {
    transition: all 0.2s ease 0s;
    transform: ${(props: IStyled) => {
      return props.position >= 1619 && props.position <= 7900
        ? "scale(1.1)"
        : "none"
    }};
    font-weight: ${(props: IStyled) => {
      return props.position >= 1619 && props.position <= 7900 ? "500" : "200"
    }};
  }
`
const List = styled.li`
  font-size: 18px;
  color: #fff;
  font-weight: 200;
  margin-bottom: 2rem;
  width: 134px;
  height: 24px;
  cursor: pointer;
`

const UnderBox = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 1rem;
  left: 2rem;
`

const Telephone = styled.span`
  margin-bottom: 10px;
  font-size: 12px;
  color: #fff;
`
const Email = styled(Telephone)`
  margin-bottom: 10px;
`

const Github = styled.img``

const Velog = Github

export default dynamic(() => Promise.resolve(PositionMenu), { ssr: false })
