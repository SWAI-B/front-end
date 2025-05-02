import React from "react"
import { useNavigate } from 'react-router-dom';
import "./mypage.css";

const Mypage = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate("/home");
        };
    const goMypage = () => {
        navigate("/mypage");
        };
    const goMydocument = () => {
        navigate("/mydocument");
        };
    const goOcr = () => {
        navigate("/ocr");
        };
    const goInformation = () => {
        navigate("/information");
        };
    const goLogin = () => {
            navigate("/");
            };
    return (
        <>
            <header>
                <div>
                    <img className="backBtn"/>
                </div>
            </header>

            <main>
                <h1>개인 정보</h1>
                <div className="main_main">
                    <label htmlFor="nation">국적</label>
                    <input id="nation" placeholder="국적을 베트남" />

                    <label htmlFor="lang">사용언어</label>
                    <input id="lang" placeholder="베트남어" />

                    <label htmlFor="username">이름</label>
                    <input id="username" placeholder="홍길동"/>

                    <label htmlFor="phoneNum">연락처</label>
                    <input id="phoneNum" placeholder="010-1234-5678"/>

                    <label htmlFor="id">아이디</label>
                    <input id="id" placeholder="honggildong"/>

                    <label htmlFor="pw">현재 비밀번호</label>
                    <input id="pw" placeholder="현재 비밀번호를 입력하세요"/>

                    <label htmlFor="newpw">새 비밀번호</label>
                    <input id="newpw" placeholder="현재 비밀번호를 입력하세요"/>

                    <label htmlFor="newpwCheck">새 비밀번호 확인</label>
                    <input id="newpwCheck" placeholder="비밀번호를 다시 입력하세요"/>
                </div>

                <div className="main_bottom">
                    <button>저장하기</button>
                    <button onClick={goLogin}>로그아웃</button>
                </div>
            </main>

            <nav>
                <button onClick={goHome} className="bottom_nav_btn">
                    <img className="home"/>
                    <span>홈</span>
                </button>
                <button onClick={goMydocument} className="bottom_nav_btn">
                    <img className="file"/>
                    <span>내 문서</span>
                </button>
                <button onClick={goOcr} className="bottom_nav_btn">
                    <img className="camera"/>
                    <span>스캔</span>
                </button>
                <button onClick={goInformation} className="bottom_nav_btn">
                    <img className="lawBook"/>
                    <span>법률 정보</span>
                </button>
                    <button onClick={goMypage} className="bottom_nav_btn">
                    <img className="profileBtn"/>
                    <span>내 정보</span>
                </button>
            </nav>
        </>
    )
}
export default Mypage