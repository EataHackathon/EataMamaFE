<p align="center">
  <img src="[프로젝트 로고 이미지 주소]" width="200" alt="logo">
</p>

<h1 align="center"> EATAMAMA </h1>

<p align="center">
  <strong>임산부를 위한 가장 똑똑하고 신뢰할 수 있는 식단 나침반 🧭</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-brightgreen" alt="build status"/>
  <img src="https://img.shields.io/badge/version-1.0.0-blue" alt="version"/>
  <img src="https://img.shields.io/badge/license-MIT-yellow" alt="license"/>
  <img src="https://img.shields.io/badge/React-61DAFB?logo=React&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=white" alt="TypeScript"/>
</p>

---

<p align="center">
  <img src="[✨ 우리 앱 핵심 기능 시연 GIF 파일 주소 (매우 중요!)]" alt="demo gif">
</p>

---

## ## 🎯 프로젝트 소개 (About the Project)

**맘스키친**은 정보의 홍수 속에서 식단에 대한 불안감을 느끼는 **임산부들을 위한 초개인화 음식 안전 가이드 서비스**입니다.

단순히 '먹어도 된다/안된다'를 넘어, 사용자의 **임신 주차, 건강 상태, 알레르기 정보**를 종합적으로 고려하여 가장 신뢰할 수 있는 맞춤형 식단 정보를 제공함으로써, 예비맘이 모든 음식을 **'안심'**하고 즐길 수 있도록 돕습니다.

---

## ## 🤔 개발 동기 (Motivation)

> **"임산부에게 햄버거는 괜찮다던데... 안에 들어간 소스는요?"**

임신이라는 특별한 여정 속, 예비맘들은 매일 수많은 정보와 선택지 앞에서 혼란을 겪습니다. 저희는 이들의 목소리에서 세 가지 핵심적인 문제점(Pain Point)을 발견했습니다.

* **🤯 정보의 불확실성**: 인터넷의 정보는 저마다 말이 다릅니다. 맘카페, 블로그, 뉴스를 찾아볼수록 예비맘의 불안감은 커져만 갑니다.
* **🤷‍♂️ 개인화의 부재**: 임신 8주차와 38주차의 몸 상태는 완전히 다릅니다. 하지만 대부분의 정보는 모든 임산부에게 동일한 일반론적인 이야기만 반복합니다.
* **🥣 재료 단위 확인의 어려움**: '김밥'이 안전한지보다 중요한 것은 그 안의 '날치알'이나 '참치'가 안전한지 여부입니다. 기존 서비스들은 음식 속 재료 하나하나의 안전성까지 알려주지 못했습니다.

저희는 이 모든 불안을 기술로 해결하고, 모든 예비맘이 **'확신'**을 갖고 건강한 식단을 꾸릴 수 있도록 돕기 위해 이 프로젝트를 시작했습니다.

---

## ## ✨ 주요 기능 (Features)

### **1. AI 기반 실시간 음식/재료 검색**
음식이나 재료를 검색하면, 신뢰할 수 있는 데이터를 기반으로 **안전/주의/위험** 3단계의 명확한 가이드를 즉시 제공합니다.
<br/>


### **2. 내 몸에 맞춘 초개인화 필터링**
**임신 주차, 기저 질환(빈혈, 당뇨 등), 알레르기 정보**를 입력하면, 모든 검색 결과와 가이드가 나의 현재 상태에 맞춰 동적으로 변경됩니다.
<br/>


### **3. 한눈에 보는 영양 대시보드**
하루 동안 섭취한 음식을 기록하고, **부족하거나 과다 섭취된 영양소**를 시각적인 대시보드로 한눈에 파악할 수 있습니다.
<br/>


---

## ## 🛠️ 개발 환경 및 방법 (Tech Stack & Architecture)

### **Frontend**
`React.js`, `TypeScript`, `Emotion`, `React-Query`

### **Backend**
`Node.js`, `Express`, `TypeORM`

### **Database**
`PostgreSQL`

### **Deployment**
`Vercel`, `AWS RDS`

### **Architecture**
```mermaid
graph TD
    A[User] --> B{React App (Vercel)};
    B --> C[API Server (Node.js)];
    C --> D[Database (PostgreSQL on AWS)];
    C --> E[Public Health Data API];
```

---

## ## ⚙️ 시작하기 (Getting Started)

프로젝트를 로컬 환경에서 실행하는 방법은 다음과 같습니다.

1.  **저장소 복제 (Clone)**
    ```bash
    git clone [https://github.com/](https://github.com/)[네-아이디]/[프로젝트-주소].git
    ```
2.  **패키지 설치 (Install)**
    ```bash
    npm install
    ```
3.  **환경 변수 설정 (Environment Variables)**
    `.env.example` 파일을 복사하여 `.env` 파일을 만들고, 필요한 환경 변수를 설정해주세요.
4.  **실행 (Run)**
    ```bash
    npm start
    ```

---

## ## 👨‍👩‍👧‍👦 팀원 소개 (Contributors)

| 역할 | 이름 | GitHub |
| :--: | :--: | :--: |
| **팀장 / 프론트엔드** | [이름] | [@github-id](https://github.com/[github-id]) |
| **백엔드** | [이름] | [@github-id](https://github.com/[github-id]) |
| **UI/UX 디자인** | [이름] | [@github-id](https://github.com/[github-id]) |

<br/>
