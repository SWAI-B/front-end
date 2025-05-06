import React from "react"
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FiUpload } from "react-icons/fi";
import BottomNav from "../../lib/nav/BottomNav";
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
            <header className="pageHeader">
                <GoArrowLeft className="backBtn" onClick={goHome}/>
                <p>내 문서 기록</p>
            </header>
            <main className="docPage">
                <div className="main_top">
                    <button>전체</button>
                    <button>근로계약서</button>
                    <button>기타</button>
                </div>
                <div className="main_main">
                    <button className="fileBtn">
                        <IoDocumentTextOutline/>
                        <div className="file_title">
                            <p>근로계약서</p>
                            <Date></Date>
                        </div>
                        <FiUpload/>
                    </button>
                    <button className="fileBtn">
                        <IoDocumentTextOutline/>
                        <div className="file_title">
                            <p>임대차계약서서</p>
                            <Date></Date>
                        </div>
                        <FiUpload/>
                    </button>
                    <button className="fileBtn">
                        <IoDocumentTextOutline/>
                        <div className="file_title">
                            <p>보험험계약서</p>
                            <Date></Date>
                        </div>
                        <FiUpload/>
                    </button>
                    <button className="fileBtn">
                        <IoDocumentTextOutline/>
                        <div className="file_title">
                            <p>기타타계약서</p>
                            <Date></Date>
                        </div>
                        <FiUpload/>
                    </button>
                </div>
            </main>
            <BottomNav />

        </>

    )
}
export default Document