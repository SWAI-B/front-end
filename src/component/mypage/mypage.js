import React, { useState } from "react";     
import { useNavigate, Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import { FaRegSave } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import SelectLanguage from "../../lib/selectbox/SelectLanguage";
import SelectNation from "../../lib/selectbox/SelectNation";
import BottomNav from "../../lib/nav/BottomNav";
import "./mypage.css";

const Mypage = () => {
    const [lang, setLang] = useState("");
    const [nat, setNat] = useState("");
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
    const goLogin = () => {
            navigate("/login");
            };
    return (
        <>
            <header>
                <GoArrowLeft className="backBtn" onClick={goHome}/>
                <p>내 정보 관리</p>
            </header>

            <main className="myPage">
                <h1>개인 정보</h1>
                <div className="main_main">

                    <label htmlFor="nation">국적</label>
                    <SelectNation
                        value={nat}
                        onChange={e => setNat(e.target.value)}
                    />

                    <label htmlFor="lang">사용언어</label>
                    <SelectLanguage
                        value={lang}
                        onChange={e => setLang(e.target.value)}
                    />

                    <label htmlFor="username">이름</label>
                    <input id="username" placeholder="홍길동" className="inputBox"/>

                    <label htmlFor="phoneNum">연락처</label>
                    <input id="phoneNum" placeholder="010-1234-5678" className="inputBox"/>

                    <label htmlFor="id">아이디</label>
                    <input id="id" placeholder="honggildong" className="inputBox"/>
                </div>

                <Link to="/mypagepw" className="pw_link">비밀번호 재설정</Link>

                <div className="main_bottom">
                    <button className="save_btn"><FaRegSave className="icon"/>저장하기</button>
                    <button onClick={goLogin} className="logout_btn"><IoIosLogOut className="icon"/>로그아웃</button>
                </div>
            </main>
            <BottomNav />
        </>
    )
}
export default Mypage