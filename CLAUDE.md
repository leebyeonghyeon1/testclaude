# CLAUDE.md

## 프로젝트

회사소개 홈페이지 개발

### 기술스택

* React 19
* React Router
* Tailwind CSS
* Supabase
* Supabase Auth
* Supabase Database
* Supabase Storage
* React Hook Form
* Zod

---

# 프로젝트 목표

기업형 홈페이지 구축

### 제공 기능

* 회사소개
* 제품소개
* 온라인문의
* 커뮤니티 게시판
* 회원관리
* 관리자 페이지

---

# MCP 우선 사용 원칙

모든 Supabase 관련 작업은 Supabase MCP를 우선 사용한다.

코드 작성 전에 반드시 다음을 확인한다.

1. 현재 프로젝트 연결 상태
2. 데이터베이스 스키마
3. 컬럼 구조
4. Foreign Key
5. RLS 정책
6. Storage Bucket
7. Auth 설정

확인 없이 테이블이나 컬럼을 추측하여 생성하지 않는다.

---

# MVP 범위

## 포함

* 회원가입
* 로그인
* 로그아웃
* 회사소개
* 제품소개
* 온라인문의
* 게시판
* 관리자 페이지

## 제외

* 댓글
* 좋아요
* 채팅
* 알림
* 결제

---

# 권한

## user

* 제품 조회
* 게시글 조회
* 게시글 작성
* 게시글 수정(본인)
* 게시글 삭제(본인)
* 문의 작성
* 문의 조회(본인)

## admin

* 회원관리
* 제품관리
* 게시판관리
* 문의관리
* 사이트관리

---

# 사이트맵

```txt
/

├─ 회사소개
│  ├─ 회사소개
│  ├─ CEO 인사말
│  ├─ 비전
│  ├─ 연혁
│  └─ 오시는 길
│
├─ 제품소개
│  ├─ 제품목록
│  └─ 제품상세
│
├─ 커뮤니티
│  ├─ 목록
│  ├─ 상세
│  └─ 작성
│
├─ 온라인문의
│  ├─ 문의작성
│  └─ 문의조회
│
├─ 로그인
├─ 회원가입
├─ 마이페이지
│
└─ 관리자
   ├─ 회원관리
   ├─ 제품관리
   ├─ 문의관리
   ├─ 게시판관리
   └─ 사이트설정
```

---

# 데이터베이스

MCP로 실제 DB 확인 후 작업한다.

예상 테이블

```txt
profiles
products
inquiries
posts
```

---

# ERD

```txt
profiles
 │
 ├── posts
 │
 └── inquiries

products
```

---

# Storage

```txt
products/
company/
editor/
```

### products

제품 이미지

### company

회사소개 이미지

### editor

게시판 첨부파일

---

# 화면 구성

## 공통

* Header
* Footer
* Navigation
* Breadcrumb

---

## 메인

* Hero Banner
* 회사소개 요약
* 대표 제품
* 문의하기 CTA
* 최신 게시글

---

## 회사소개

* 회사소개
* CEO 인사말
* 비전
* 연혁
* 조직도
* 오시는 길

---

## 제품소개

### 목록

* 카드형 UI
* 검색
* 카테고리

### 상세

* 이미지
* 설명
* 문의하기 버튼

---

## 온라인문의

### 사용자

* 문의 등록
* 문의 내역 조회

### 관리자

* 답변 작성
* 상태 변경

---

## 게시판

### 목록

* 검색
* 페이징
* 공지 상단고정

### 상세

* 조회수 증가

### 작성

* 에디터
* 파일첨부

---

# 개발 순서

## Phase 1

* Vite 생성
* Tailwind 설치
* Router 설정
* Layout 구성

## Phase 2

* Supabase 연결
* Auth 구현

## Phase 3

* 회사소개
* 제품소개

## Phase 4

* 게시판 CRUD

## Phase 5

* 온라인문의 CRUD

## Phase 6

* 관리자 페이지

---

# 개발 규칙

* MCP 우선 사용
* 실제 DB 확인 후 개발
* Service Layer 분리
* 컴포넌트 재사용
* Protected Route 적용
* Admin Route 적용
* React Hook Form 사용
* Zod Validation 사용
* Tailwind Utility First 원칙 사용

---

# Claude 행동 규칙

새 기능 개발 요청 시

1. MCP로 현재 DB 확인
2. 영향받는 테이블 확인
3. 필요한 SQL 제안
4. React 코드 작성
5. RLS 검토
6. 테스트 시나리오 작성

컬럼명과 테이블명은 MCP 결과를 기준으로 사용한다.
