import React from "react"
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { FiUpload } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";


import "./result.css";


const Result = () => {
    const navigate = useNavigate();
    const goSummary = () => {
        navigate("/ocr-summary");
    };
    const goHome = () => {
        navigate("/home");
    };
    return (
        <>
            <header className="pageHeader">
                <GoArrowLeft className="backBtn" onClick={goHome}/>
                <p>번역 결과</p>
            </header>

            <main className="resltPage">
                <div className="resultBtn">
                    <button>번역 결과</button>
                    <button>원본 텍스트</button>
                </div>

                <div className="result_main">
                    <p>결과 내용 임시 설정</p>
                </div>
                
                <div className="saveAndShareBtn">
                    <button className="saveBtn">
                        <FaRegSave/>
                        <p>저장하기</p>
                    </button>
                    <button className="shareBtn">
                        <FiUpload/>
                        <p>공유하기</p>
                    </button>
                </div>
                
                <button className="SummaryBtn" onClick={goSummary}>법률 분석 보기</button>
            </main>
        </>
    )
}
export default Result