import React from "react"
import { useNavigate } from 'react-router-dom';
import "./information.css";


const Information = () => {
    const navigate = useNavigate();
    const informToSummary = () => {
        navigate("/ocr-summary");
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
                <p>법률 정보</p>
            </header>

            <main>
                <p>외국인 근로자 관련 주요 법률정보를 확인하세요</p>
                <div className="row_inform_box">
                    <button className="row_inform">
                        <img className="file"/>
                        <div className="row_inform_text">
                            <p>근로계약 관련 법률</p>
                            <p>근로계약 체결, 해지, 갱신에 관한 법률 정보</p>
                        </div>
                    </button>                
                    <button className="row_inform">
                        <img className="file"/>
                        <div className="row_inform_text">
                            <p>근로계약 관련 법률</p>
                            <p>근로계약 체결, 해지, 갱신에 관한 법률 정보</p>
                        </div>
                    </button>                
                    <button className="row_inform">
                        <img className="file"/>
                        <div className="row_inform_text">
                            <p>근로계약 관련 법률</p>
                            <p>근로계약 체결, 해지, 갱신에 관한 법률 정보</p>
                        </div>
                    </button>                
                    <button className="row_inform">
                        <img className="file"/>
                        <div className="row_inform_text">
                            <p>근로계약 관련 법률</p>
                            <p>근로계약 체결, 해지, 갱신에 관한 법률 정보</p>
                        </div>
                    </button>                
                    <button className="row_inform">
                        <img className="file"/>
                        <div className="row_inform_text">
                            <p>근로계약 관련 법률</p>
                            <p>근로계약 체결, 해지, 갱신에 관한 법률 정보</p>
                        </div>
                    </button>
                </div>
                <div className="row_site_box">
                    <div className="row_site_tilte">
                        <img className="profileBtn"/>
                        <p>외부 법률 정보 자료</p>
                    </div>
                    <button className="row_site_link">
                        <p>고용노동부 외국인 근로자 안내</p>
                        <img className="Shortcut"/>
                    </button>
                    <button className="row_site_link">
                        <p>고용노동부 외국인 근로자 안내</p>
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
export default Information