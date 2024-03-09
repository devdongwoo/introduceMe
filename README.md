# IntroduceMe (toy project)

- 배포주소(vercel)<br/>
  https://introduce-me-puce.vercel.app/
- 개발기간<br/>
  2023.08.25 ~ 2023.08.27

- PC버전(반응형)
  ![image](/public/img/readmeImg/pc_1.png)

# 프로젝트 소개

next.js 13버전을 사용하여 자기소개 페이지를 제작하였습니다.<br/>
섹션별로 위치를 emotion으로 지정하여 스크롤을 내릴때
font-weight, font-size가 변경되도록 하였습니다.

# 시작 가이드

- ### frontend

```
  $ npm install
  $ npm run dev
```

# Stacks

### **Environment**<br/>

<img src="https://img.shields.io/badge/visual studio code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
&nbsp;<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

### **Config**<br/>

<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white"><br/>

### **Development**<br/>

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/react-20232a?style=for-the-badge&logo=react&logoColor=5dcfee">&nbsp;
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/emotion-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">&nbsp;
<img src="https://img.shields.io/badge/vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"><br/>

# 화면구성(반응형)

| Introduction                             |
| ---------------------------------------- |
| ![image](/public/img/readmeImg/pc_1.png) |

| Career                                   |
| ---------------------------------------- |
| ![image](/public/img/readmeImg/pc_2.png) |

| Project                                  |
| ---------------------------------------- |
| ![image](/public/img/readmeImg/pc_3.png) |

# 아키텍쳐

- 디렉토리 구조

```
📦introduceMe-main
 ┣ 📂app
 ┃ ┣ 📂common
 ┃ ┃ ┗ 📜utilities.ts
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂3dSphere --> Introduction 오른쪽 구 컴포넌트
 ┃ ┃ ┃ ┣ 📜animatedSphere.tsx
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂aboutSkill
 ┃ ┃ ┃ ┣ 📂skills --> Project 텍스트 객체 배열
 ┃ ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂first --> Introduction 컴포넌트
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂position --> 왼쪽에 Nav, scroll에 따라 폰트사이즈, weight달라짐
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┣ 📂second --> Career 컴포넌트
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┃ ┗ 📂Third --> Project 컴포넌트
 ┃ ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📜favicon.ico
 ┃ ┣ 📜globals.css
 ┃ ┣ 📜layout.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂public
 ┃ ┣ 📂font
 ┃ ┃ ┣ 📜LINESeedKR-Bd.ttf
 ┃ ┃ ┣ 📜LINESeedKR-Bd.woff
 ┃ ┃ ┣ 📜LINESeedKR-Rg.ttf
 ┃ ┃ ┣ 📜LINESeedKR-Rg.woff
 ┃ ┃ ┣ 📜LINESeedKR-Th.ttf
 ┃ ┃ ┗ 📜LINESeedKR-Th.woff
 ┃ ┣ 📂img
 ┃ ┃ ┣ 📂readmeImg
 ┃ ┃ ┃ ┣ 📜pc_1.png
 ┃ ┃ ┃ ┣ 📜pc_2.png
 ┃ ┃ ┃ ┗ 📜pc_3.png
 ┃ ┃ ┣ 📜background_img.png
 ┃ ┃ ┣ 📜bhc_logo.png
 ┃ ┃ ┣ 📜disney_plus_site.png
 ┃ ┃ ┣ 📜flora_main.png
 ┃ ┃ ┣ 📜github-mark-white.png
 ┃ ┃ ┣ 📜github-mark.png
 ┃ ┃ ┣ 📜green_cross.png
 ┃ ┃ ┣ 📜happy_narea_logo.png
 ┃ ┃ ┣ 📜introduceMe.png
 ┃ ┃ ┣ 📜sajo_logo.png
 ┃ ┃ ┣ 📜sajo_logo_2.png
 ┃ ┃ ┣ 📜seekerMain.png
 ┃ ┃ ┗ 📜ticon.png
 ┃ ┣ 📜next.svg
 ┃ ┗ 📜vercel.svg
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜tsconfig.json
```
