# 개발 문서

### ■ 프로젝트명

- The Hitchhiker's Guide to Python
- Backend.ai API 를 활용한 Python 코드 실습 사이트

### ■ 팀명

- Python Hitchhiker

### ■ 팀원 구성

| 인트라 아이디 | Name | Tags | 담당 개발 | email | github ID |
| --- | --- | --- | --- | --- | --- |
| sokim | 김소연 | 프론트엔드, 오거나이저 | mock-up / 로그인 | 42.4.sokim@gmail.com | SOYKIM |
| jasong | 송재룡 | 프론트엔드, 리드 | mock-up / 예제코드 뷰 | jasong@sutdent.42seoul.kr | ft-jasong |
| sunghwki | 김성환 | python 예제 | 프론트엔드 / python 예제 개발 | python 예제 30개 정리 | sunghwki@studet.42seoul.kr | swkim12345 |
| jeonghwl | 이정환 | 백엔드 / 리드 | 백엔드 개선 참여 | jeonghwanlee15@gamil.com | toy-k |
| sikang | 강시온 | 백엔드 / 풀스택 | express.js + SQLite + passport.js 기반 백엔드 개발 | 

### ■ 아이템 개요

- 웹 상에서 돌아가는 python 교육 프로그램

### ■ 개발 계획 및 목표

- 사용자에게 온라인상에서 쉽게 코드를 따라 치면서 최종 목표인 ()를 만드는 것
- 프론트엔드 / 백엔드 / python 예제 로 역할을 분담함.

### ■ 용어 정리

| 원래 용어 | 여기서 사용하는 용어 |
| --- | --- |
| template | 템플릿 |
| parsing | 파싱 |
| front-end | 프론트엔드 |
| back-end | 백엔드 |
| framework | 프레임워크 |


### ■ 구체적인 개발 방법

- 프론트엔드, 백엔드, Python 예제 정리로 나눠 개발
    - 프론트엔드
        - bootstrap 템플릿을 활용한 웹 페이지 개발
        - Material UI 를 사용한 디자인

            [Material Design for Bootstrap 5 & 4](https://mdbootstrap.com/)

        - 회원가입, 로그인, 로그아웃 기능
        - 로그인 후 자신의 진도를 확인할 수 있음.
        - plain md을 파싱해 설명, 코드를 양 쪽에 표시함
        - codemirror을 사용해 코드를 화면에 표시하고, backend.AI를 사용해 python 코드를 웹상에서 작동하고, 결과를 웹에서 볼 수 있음.
        - 추가로 codemirror을 사용해 사용자가 원하는 코드를 타이핑할 수 있음.

    - 백엔드
        - node.js 기반 express.js 프레임워크를 사용하고, sqlite를 데이터베이스로 사용함.
        - 설명, 코드를 plain md으로 프론트엔드단으로 보냄
        - Rest API 형식으로 프론트 엔드, 백엔드 간 통신을 함.
        - javascript를 통해 sqlite 데이터베이스에 파싱을 하여 유저 정보 관리
        - 자신의 진도를 sqlite에 user 정보와 같이 관리하며 진도에 맞는 md 파일을 선택해 프론트엔드로 보내줌.

    - python 예제 정리
        - 최종 목표인 ()을 만들기 위해 6개의 중간 단계를 만듦
            - 소개
            - 제어 구문
            - 자료형
            - 함수, 클래스
            - 라이브러리
            - 알고리즘
            - ()
        - 한 수업당 여러 예제를 들고, 유기적으로 연결된 학습 예제를 통해 사용자가 쉽게 Python에 대한 이해를 할 수 있음

### ■ 기대 효과 및 전망

- 타겟팅하는 20, 30대 유저층에게 Python으로 하는 코딩의 즐거움을 환경 설정 없이 웹 상에서 쉽게 알려줄 수 있음
-
