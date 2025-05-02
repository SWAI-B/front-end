import React from "react"
import { useNavigate } from 'react-router-dom';
import "./document.css";

const Document = () => {
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
                <div>
                    <img className="backBtn"/>
                </div>
            </header>
            <main>
                <div className="main_top">
                    <button>전체</button>
                    <button>근로계약서</button>
                    <button>기타</button>
                </div>
                <div className="main_main">
                    <button className="fileBtn">
                        <img className="file"/>
                        <div className="file_title">
                            <p>근로계약서</p>
                            <Date></Date>
                        </div>
                        <img className="Shortcut"/>
                    </button>
                    <button className="fileBtn">
                        <img className="file"/>
                        <div className="file_title">
                            <p>임대차계약서서</p>
                            <Date></Date>
                        </div>
                        <img className="Shortcut"/>
                    </button>
                    <button className="fileBtn">
                        <img className="file"/>
                        <div className="file_title">
                            <p>보험험계약서</p>
                            <Date></Date>
                        </div>
                        <img className="Shortcut"/>
                    </button>
                    <button className="fileBtn">
                        <img className="file"/>
                        <div className="file_title">
                            <p>기타타계약서</p>
                            <Date></Date>
                        </div>
                        <img className="Shortcut"/>
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

    )
}
export default Document