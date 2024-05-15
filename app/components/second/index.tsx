"use client"
import styled from "@emotion/styled"

export default function Career() {
  return (
    <Wrap>
      <Container className="secondSection">
        <Title>Career</Title>
        <Company>前) - (주)래디스</Company>
        <GreenCross>
          <GreenLogo src="/img/green_cross.png" width={120} height={60} />
          <CareerAbout style={{ paddingTop: "10px", paddingLeft: "10px" }}>
            <First>
              ● 혈액 ERP 관리 프로젝트 (2022.11 ~ 2022.12) - 개발자
            </First>
            <Second>
              ● 기술 - <Skill>JavaScript</Skill>(Vanila, Jquery) /{" "}
              <Skill>JAVA</Skill>
              (Spring boot) / <Skill>MSSQL</Skill>
            </Second>
          </CareerAbout>
        </GreenCross>
        <BhcSection>
          <BhcLogo src="/img/bhc_logo.png" width={120} height={60} />
          <CareerAbout style={{ paddingTop: "4px" }}>
            <First>
              ● 영업 ERP 프로젝트 (2022.03 ~ 2022.10) - 개발자, ASP를 JAVA
              Spring boot로 convert
            </First>
            <Second>
              ● 물류 창고 WMS 프로젝트 (2021.05 ~ 2021.08) - 개발자
            </Second>
            <Third>
              ● 기술 - <Skill>JavaScript</Skill>(Vanila, Jquery) /{" "}
              <Skill>JAVA</Skill>
              (Spring boot) / <Skill>MSSQL</Skill>
            </Third>
          </CareerAbout>
        </BhcSection>
        <HappyNarea>
          <HappyNareaLogo
            src="/img/happy_narea_logo.png"
            width={120}
            height={60}
          />
          <CareerAbout style={{ paddingTop: "10px" }}>
            <First>
              ● ERP 신규 관리, 경매 프로젝트 (2021.08 ~ 2021.12) - QA, 개발자{" "}
            </First>
            <Second>
              ● 기술 - <Skill>JavaScript</Skill>(React, Axios, Vanila) /{" "}
              <Skill>MSSQL</Skill>
            </Second>
          </CareerAbout>
        </HappyNarea>
        <Sajo>
          <SajoLogo src="/img/sajo_logo_2.png" width={80} height={60} />
          <CareerAbout style={{ paddingTop: "10px" }}>
            <First>● WMS 프로젝트 기능중 고정 그리드 설정 추가로 출장</First>
            <Second>
              ● 기술 - <Skill>JavaScript</Skill>(Vanila)
            </Second>
          </CareerAbout>
        </Sajo>
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
  color: #fff;
  margin-bottom: 200px;
`

const Container = styled.div`
  flex-direction: column;
  max-width: 60rem;
  width: 1100px;
  height: 100%;
  display: flex;
  padding: 0 20px;
`

const Company = styled.p`
  font-size: 18px;
  margin-bottom: 60px;
  padding-left: 4px;
`

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 80px;
`

const BhcSection = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
`

const BhcLogo = styled.img`
  /* position: absolute;
  top: 100px;
  left: 480px; */
`

const CareerAbout = styled.ul`
  font-weight: 500;
  font-size: 14px;
  padding-left: 14px;
  /* position: absolute;
  left: 660px;
  top: 100px; */
`

const First = styled.li`
  list-style: none;
  margin: 5px 0;
`

const Second = styled(First)``

const Third = styled(First)``

const Skill = styled.span`
  color: #ffc831;
`

const GreenCross = styled(BhcSection)``

const GreenLogo = styled(BhcLogo)``

const Sajo = styled(BhcSection)``

const SajoLogo = styled(BhcLogo)`
  margin-right: 40px;
`
const HappyNarea = styled(BhcSection)``

const HappyNareaLogo = styled(BhcLogo)``
