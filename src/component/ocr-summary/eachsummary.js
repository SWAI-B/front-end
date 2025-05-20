import React from "react"
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft, GoInfo } from "react-icons/go";
import { AiOutlineWarning } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import "./eachsummary.css";

const Eachsummary = () => {

    const navigate = useNavigate();
    const goSummary = () => {
        navigate("/ocr-summary");
    };

    return (
        <>
            <header>
                <GoArrowLeft className="backBtn" onClick={goSummary}/>
                <p>근로기준법 제 34조</p>
            </header>

            <main className="eachsummary">
                <div className="main_top">
                    <span>법률 조항에 대한 상세 정보와 쉬운 설명을 제공합니다.</span>
                </div>
                
                <div className="main_main">
                    <div className="main_box">
                        <div className="main_box_title">
                            <p>법률목적</p>
                        </div>
                        <div className="content">
                            <span>내용</span>
                        </div>
                    </div>
                    <div className="main_box">
                        <div className="main_box_title">
                            <p>법률목적</p>
                        </div>
                        <div className="content">
                            <span>내용</span>
                        </div>
                    </div>
                    <div className="main_box">
                        <div className="main_box_title">
                            <p>법률목적</p>
                        </div>
                        <div className="content">
                            <span>내용</span>
                        </div>
                    </div>
                    <div className="main_box">
                        <div className="main_box_title">
                            <p>법률목적</p>
                        </div>
                        <div className="content">
                            <span>내용</span>
                        </div>
                    </div>
                </div>
                <button className="BlueBtn">국가법령정보센터에서 보기<HiArrowTopRightOnSquare className="icon"/></button>

                            
                <div className="add_text">
                    <p>본 분석은 법률 정보 제공 목적으로만 사용되며, 법적 조언이 아닙니다.</p>
                    <p>정확한 법률 상담은 변호사와 상담하시기 바랍니다.</p>
                </div>
            </main>
        </>
    )
}
export default Eachsummary