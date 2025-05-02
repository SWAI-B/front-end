import React from "react"
import { useNavigate } from 'react-router-dom';
import "./summary.css";

const Summary = () => {

    const navigate = useNavigate();
    const goResult = () => {
        navigate("/ocr-result");
    };
    // 자세히보기를 법률 정보 페이지랑 연결함
    const goinform = () => {
        navigate("/information");
    };

    return (
        <>
            <header>
                <img className="backBtn"/>
                <p>법률 분석 결과</p>
            </header>

            <main>
                <p>계약서 내용 중 한국 노동법 기준으로 주의가 필요한 부분을 안내 해 드립니다.</p>
                <div className="warning_box">
                    <img className="warning_img"/>
                    <div className="warning_text">
                        <p className="warning_text_title">주의가 필요한 내용</p>
                        <p className="warning_text_content">계약서에 퇴직금 지급 조건이 명시되어 있으나, 한국 노동법에 따르면 1년 이상 근무한 모든 근로자에게 퇴직금을 지급해야 합니다.</p>
                    </div>
                </div>

                <div className="main_box">
                    <div className="main_box_title">
                        <img className="content_img"/>
                        <p>관련법률 정보</p>
                    </div>
                    <p>근로기준법 제 34조</p>
                    <p>내용</p>
                    <p>설명</p>
                    <button className="detail_btn" onClick={goinform}>
                        <p>자세히 보기</p>
                        <img className="Shortcut"/>
                    </button>
                </div>
                <div className="main_box">
                    <div className="main_box_title">
                        <img className="content_img"/>
                        <p>추가 확인 사항</p>
                    </div>
                    <p>근로시간 및 휴게시간</p>
                    <p>내용</p>
                    <p>설명</p>
                    <button className="detail_btn" onClick={goinform}>
                        <p>자세히 보기</p>
                        <img className="Shortcut"/>
                    </button>
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