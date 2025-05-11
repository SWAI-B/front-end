import React from "react"
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { FiUpload } from "react-icons/fi";
import { FaRegSave } from "react-icons/fa";
import BottomNav from "../../lib/nav/BottomNav";


import "./result.css";


const Result = () => {
    const navigate = useNavigate();
    const goSummary = () => {
        navigate("/ocr-summary");
    };
    const goOcr = () => {
        navigate("/ocr");
    };
    return (
        <>
            <header>
                <GoArrowLeft className="backBtn" onClick={goOcr}/>
                <p>번역 결과</p>
            </header>

            <main className="resltPage">
                <div className="resultBtn">
                    <button>전체</button>
                    <button>번역 결과</button>
                    <button>원본 텍스트</button>
                </div>

                <div className="result_main">
                    <p>결과 내용 임시 설정</p>
                </div>
                
                <div className="saveAndShareBtn">
                    <button><FaRegSave className="icon"/>저장하기</button>
                    <button><FiUpload className="icon"/>공유하기</button>
                </div>
                
                <button className="BlueBtn" onClick={goSummary}>법률 분석 보기</button>
            </main>
            <BottomNav />
        </>
    )
}
export default Result