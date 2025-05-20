import React from "react"
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft, GoInfo } from "react-icons/go";
import { AiOutlineWarning } from "react-icons/ai";
import { HiArrowTopRightOnSquare } from "react-icons/hi2";
import "./summary.css";

const Summary = () => {

    const navigate = useNavigate();
    const goResult = () => {
        navigate("/ocr-result");
    };
    // 자세히보기를 법률 정보 페이지랑 연결함
    const goEachsummary = () => {
        navigate("/eachsummary");
    };

    return (
        <>
            <header>
                <GoArrowLeft className="backBtn" onClick={goResult}/>
                <p>법률 분석 결과</p>
            </header>

            <main className="sumaryPage">
                <div className="main_top">
                    <span>계약서 내용 중 한국 노동법 기준으로 주의가 필요한 부분을 안내 해 드립니다.</span>
                </div>
                
                <div className="main_main">
                    <div className="warning_box">
                        <div className="warning_title">
                            <AiOutlineWarning className="icon"/>
                            <p>주의가 필요한 내용</p>
                        </div>
                        <span>계약서에 퇴직금 지급 조건이 명시되어 있으나, 한국 노동법에 따르면 1년 이상 근무한 모든 근로자에게 퇴직금을 지급해야 합니다.</span>
                    </div>

                    <div className="main_box">
                        <div className="main_box_title">
                            <GoInfo className="icon"/>
                            <p>관련법률 정보</p>
                        </div>
                        <p className="row_title">근로기준법 제 34조</p>
                        <div className="content">
                            <p>내용</p>
                            <p className="content_ex">설명</p>
                        </div>
                        <button className="detail_btn" onClick={goEachsummary}>
                            <p>자세히 보기</p>
                            <HiArrowTopRightOnSquare/>
                        </button>
                    </div>
                    <div className="main_box">
                        <div className="main_box_title">
                            <GoInfo className="icon"/>
                            <p>추가 확인 사항</p>
                        </div>
                        <p className="row_title">근로시간 및 휴게시간</p>
                        <div className="content">
                            <p>내용</p>
                            <p className="content_ex">설명</p>
                        </div>
                        <button className="detail_btn" onClick={goEachsummary}>
                            <p>자세히 보기</p>
                            <HiArrowTopRightOnSquare/>
                        </button>
                    </div>
                </div>
                
                <div className="add_text">
                    <p>본 분석은 법률 정보 제공 목적으로만 사용되며, 법적 조언이 아닙니다.</p>
                    <p>정확한 법률 상담은 변호사와 상담하시기 바랍니다.</p>
                </div>
            </main>
        </>
    )
}
export default Summary