"use client"
import styled from "@emotion/styled"
import { faBookmark, faLink, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  floraSkills,
  disneyPlusSkills,
  introduceSkills,
  SeekerSkills
} from "../aboutSkill/skills"
import AboutSkil from "../aboutSkill"
import Link from "next/link"

export default function Projects() {
  return (
    <Wrap>
      <Container className="thirdSection">
        <Title>Project</Title>
        <ProjectSection>
          <Project className="project">
            <ProjectImg src="/img/seekerMain.png" />
            <AboutProject className="aboutproject">
              <Explanation>Seeker 롤 전적검색(반응형)</Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>{" "}
                Next.js, Axios, Redux/toolkit...
              </Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>
                전적검색 기능, 반응형사이트, Spinner, SkeletonUi...
              </Explanation>
              <Explanation>
                <Link
                  href="https://github.com/devdongwoo/seeker"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github src="/img/github-mark-white.png" width="30" />
                </Link>
                <Link
                  style={{
                    marginLeft: "20px"
                  }}
                  href="https://seeker-flame.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    style={{
                      fontSize: "26px",
                      marginRight: "4px",
                      color: "#fff"
                    }}
                    icon={faLink}
                  />
                </Link>
              </Explanation>
            </AboutProject>
          </Project>
          <SkillCategory>
            <FontAwesomeIcon
              style={{
                fontSize: "21px",
                marginRight: "4px",
                color: "rgb(255, 153, 0)"
              }}
              icon={faBookmark}
            />
            사용한 기술들
          </SkillCategory>
          <SkillBox>
            {SeekerSkills.map((el: { name: string; explanation: string }) => {
              return (
                <AboutSkil
                  key={el.name}
                  data={{
                    name: el.name,
                    explanation: el.explanation
                  }}
                />
              )
            })}
          </SkillBox>
        </ProjectSection>
        <ProjectSection className="projectsection">
          <Project className="project">
            <ProjectImg src="/img/flora_main.png" />
            <AboutProject className="aboutproject">
              <Explanation>Flora</Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>
                1인 프로젝트 개발
              </Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>{" "}
                강의 GraphQL Api 사용( Docs 보고 사용 )
              </Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>
                자유게시판, 중고마켓, 로그인, 로그아웃, 카카오페이 충전등..
              </Explanation>
              <Explanation>
                <Link
                  href="https://github.com/devdongwoo/Flora"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github src="/img/github-mark-white.png" width="30" />
                </Link>
              </Explanation>
            </AboutProject>
          </Project>
          <SkillCategory>
            <FontAwesomeIcon
              style={{
                fontSize: "21px",
                marginRight: "4px",
                color: "rgb(255 153 0)"
              }}
              icon={faBookmark}
            />
            사용한 기술들
          </SkillCategory>
          <SkillBox>
            {floraSkills.map((el: { name: string; explanation: string }) => {
              return (
                <AboutSkil
                  key={el.name}
                  data={{
                    name: el.name,
                    explanation: el.explanation
                  }}
                />
              )
            })}
          </SkillBox>
        </ProjectSection>
        <ProjectSection>
          <Project className="project">
            <ProjectImg src="/img/introduceMe.png" />
            <AboutProject className="aboutproject">
              <Explanation>나만의 포트폴리오(현재화면)</Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>
                1인 프로젝트 개발(반응형)
              </Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>{" "}
                React, Next.js, emotion, typescript, Threejs..
              </Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>
                인사말, 경력, 프로젝트 순으로 소개
              </Explanation>
              <Explanation>
                <Link
                  href="https://github.com/devdongwoo/introduce_portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github src="/img/github-mark-white.png" width="30" />
                </Link>
              </Explanation>
            </AboutProject>
          </Project>
          <SkillCategory>
            <FontAwesomeIcon
              style={{
                fontSize: "21px",
                marginRight: "4px",
                color: "rgb(255 153 0)"
              }}
              icon={faBookmark}
            />
            사용한 기술들
          </SkillCategory>
          <SkillBox>
            {introduceSkills.map(
              (el: { name: string; explanation: string }) => {
                return (
                  <AboutSkil
                    key={el.name}
                    data={{
                      name: el.name,
                      explanation: el.explanation
                    }}
                  />
                )
              }
            )}
          </SkillBox>
        </ProjectSection>
        <ProjectSection>
          <Project className="project">
            <ProjectImg src="/img/disney_plus_site.png" />
            <AboutProject className="aboutproject">
              <Explanation>Disney+ 클론 사이트</Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>{" "}
                React, Axios, styled-components
              </Explanation>
              <Explanation>
                <Check className="check">
                  <FontAwesomeIcon
                    style={{
                      fontSize: "16px"
                    }}
                    icon={faCheck}
                  />
                </Check>
                로그인, 로그아웃, 검색, 반응형, 상세 모달등...
              </Explanation>
              <Explanation>
                <Link
                  href="https://github.com/devdongwoo/disney_plus_clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github src="/img/github-mark-white.png" width="30" />
                </Link>
                <Link
                  style={{
                    marginLeft: "20px"
                  }}
                  href="http://react-disney-plus-22cb3.web.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon
                    style={{
                      fontSize: "26px",
                      marginRight: "4px",
                      color: "#fff"
                    }}
                    icon={faLink}
                  />
                </Link>
              </Explanation>
            </AboutProject>
          </Project>
          <SkillCategory>
            <FontAwesomeIcon
              style={{
                fontSize: "21px",
                marginRight: "4px",
                color: "rgb(255 153 0)"
              }}
              icon={faBookmark}
            />
            사용한 기술들
          </SkillCategory>
          <SkillBox>
            {disneyPlusSkills.map(
              (el: { name: string; explanation: string }) => {
                return (
                  <AboutSkil
                    key={el.name}
                    data={{
                      name: el.name,
                      explanation: el.explanation
                    }}
                  />
                )
              }
            )}
          </SkillBox>
        </ProjectSection>
      </Container>
    </Wrap>
  )
}
const Wrap = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-family: "LINESeedKR";
  position: relative;
  color: #fff;
`

const Container = styled.div`
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  max-width: 60rem;
  padding: 0 20px;
`

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 120px;
`

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  :nth-of-type(2) {
    margin-top: 200px;
  }

  :nth-of-type(3) {
    margin-top: 200px;
  }

  :last-of-type {
    margin-top: 200px;
    height: 800px;
  }
`

const Project = styled.div`
  display: flex;
  margin-bottom: 40px;
`

const ProjectImg = styled.img`
  width: 400px;
  height: 200px;
`

const AboutProject = styled.ul`
  font-weight: 500;
  font-size: 18px;
  padding-left: 14px;
  margin-left: 60px;
  li:first-of-type {
    font-weight: bold;
    font-size: 32px;
  }
`

const Explanation = styled.li`
  list-style: none;
  word-break: pre-line;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`

const Github = styled.img``

const SkillCategory = styled.p`
  font-size: 24px;
  margin-bottom: 20px;
`

const Check = styled.span`
  color: #ffc831;
  margin-right: 4px;
`

const Skill = styled.span`
  color: #ffc831;
`

const SkillBox = styled.div``
