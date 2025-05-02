import React from "react"
import { useNavigate } from 'react-router-dom';
import "./ocr.css";

const Ocr = () => {
    const navigate = useNavigate();
    // 임의로 카메라 버튼과 연결시킴
    const goResult = () => {
        navigate("/ocr-result");
    };
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
                <img className="backBtn"/>
                <p>근로계약서 스캔</p>
            </header>

            <main>
                <div className="main_main">
                    <div className="main_main_text">
                        <p>근로 계약서를 촬영하거나 파일을 업로드하세요</p>
                        <p>개인정보는 자동으로 필터링됩니다.</p>
                    </div>
                    <div className="main_btm">
                        <button onClick={goResult} className="cameraBtn">
                            <img className="camera"/>
                            <p>카메라</p>
                        </button>
                        <button className="uploadBtn">
                            <img className="upload"/>
                            <p>업로드</p>
                        </button>
                    </div>
                </div>
                <div className="main_bottom">
                    <p>촬영된 문서는 개인정보 보호를 위해 자동으로 필터링 됩니다.</p>
                    <p>번역 및 범률 정보 재공 목적으로만 사용됩니다.</p>
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
export default Ocr