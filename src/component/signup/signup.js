import React, { useState } from "react";     
import { useNavigate, Link} from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import SelectLanguage from "../../lib/selectbox/SelectLanguage";
import SelectNation from "../../lib/selectbox/SelectNation";
import logoImg from "../../img/logoimg.jpg";
import logoText from "../../img/logotext.png";
import "./signup.css";



const Signup = () => {
    const [lang, setLang] = useState("");
    const [nat, setNat] = useState("");
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    };
    const goTosetmyinform = () => {
        navigate("/setmyinform");
    };


    return (       
        <>
            <header>
                <div>
                    <GoArrowLeft className="backBtn" onClick={goTosetmyinform}/>
                </div>
            </header>

            <main className="signPage">
                <div className="main_top">
                    <div className="logo">
                        <img src={logoImg} className="logoImg"/>
                        <img src={logoText} className="logoText"/>
                    </div>
                    <h1>회원가입</h1>
                    <p>계정을 만들어 서비스를 이용하세요</p>
                </div>

                <div className="main_main">
                    <div className="form_row">
                        <label htmlFor="id">아이디</label>
                        <input className="inputBox" id="id" placeholder="아이디를 입력하세요"/>

                        <label htmlFor="pw">비밀번호</label>
                        <input className="inputBox" id="pw" placeholder="비밀번호를 입력하세요"/>

                        <label htmlFor="pwCheck">비밀번호 확인</label>
                        <input className="inputBox" id="pwCheck" placeholder="비밀번호를 다시 입력하세요"/>
                    </div>
                </div>

                <div className="main_bottom">
                    <button onClick={goToLogin} className="BlueBtn">가입하기</button>
                    <div className="main_main_signUp">
                        <span>이미 계정이 있으신가요?</span>
                        <Link to="/login">로그인</Link>
                    </div>
                </div>
            </main>
        </>
    );
};
export default Signup