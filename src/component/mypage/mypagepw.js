import React from "react"
import { useNavigate } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";
import BottomNav from "../../lib/nav/BottomNav";
import "./mypagepw.css";

const Mypagepw = () => {
    const navigate = useNavigate();
    const goMypage = () => {
        navigate("/mypage");
        };

    return (
        <>
            <header>
                <GoArrowLeft className="backBtn" onClick={goMypage}/>
                <p>내 정보 관리</p>
            </header>

            <main className="mypwPage">
                <h1>비밀번호 재설정</h1>
                <div className="main_main">
                    <label htmlFor="pw">현재 비밀번호</label>
                    <input id="pw" placeholder="현재 비밀번호를 입력하세요" className="inputBox" />

                    <label htmlFor="newpw">새 비밀번호</label>
                    <input id="newpw" placeholder="현재 비밀번호를 입력하세요" className="inputBox"/>

                    <label htmlFor="newpwCheck">새 비밀번호 확인</label>
                    <input id="newpwCheck" placeholder="비밀번호를 다시 입력하세요" className="inputBox"/>
                </div>

                <div className="main_bottom">
                    <button className="save_btn" onClick={goMypage}><FaRegSave className="icon"/>저장하기</button>
                </div>
            </main>
            <BottomNav />
        </>
    )
}
export default Mypagepw