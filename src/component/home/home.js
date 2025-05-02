import React from "react"
import { useNavigate } from 'react-router-dom';
import "./home.css";

const Home = () => {
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
    
    
    return (
        <>
            <header>
                <div className="logo">
                    <img className="logoImg"/>
                    <img className="logoName"/>
                </div>
                <div>
                    <img className="hamburgerBtn"/>
                    <img className="profileBtn"/>
                </div>
            </header>

            <main>
                <h1>안녕하세요, 홍길동님</h1>
                <div className="pageBtn">
                    <button className="main_myFile" onClick={goMydocument}>
                        <img className="file"/>
                        <div className="pageBtnText">
                            <p>내 기록 보기</p>
                            <span>저장된 문서와 번역 기록을 확인하세요</span>
                        </div>
                    </button>
                    <button className="main_OCRPicture" onClick={goOcr}>
                        <img className="camera"/>
                        <div className="pageBtnText">
                            <p>OCR찍기</p>
                            <span>근로계약서를 촬영하여 번역 및 분석하세요</span>
                        </div>
                    </button>
                    <button className="main_law" onClick={goInformation}>
                        <img className="lawBook"/>
                        <div className="pageBtnText">
                            <p>법률 정보 보기</p>
                            <span>외국인 근로자 관련 법률 정보를 확인하세요</span>
                        </div>
                    </button>
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
    );
};
export default Home