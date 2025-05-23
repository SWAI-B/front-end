import React, { useState } from "react";     
import { useNavigate, Link} from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
import SelectLanguage from "../../lib/selectbox/SelectLanguage";
import SelectNation from "../../lib/selectbox/SelectNation";
import logoImg from "../../img/logoimg.jpg";
import logoText from "../../img/logotext.png";
import "./signup.css";



const Setmyinform = () => {
    const [lang, setLang] = useState("");
    const [nat, setNat] = useState("");
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate("/login");
    };
    const goTotitle = () => {
        navigate("/");
    };
        const goToSignup = () => {
        navigate("/signup");
    };


    return (       
        <>
            <header>
                <div>
                    <GoArrowLeft className="backBtn" onClick={goTotitle}/>
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
                        <input className="inputBox" id="username" placeholder="이름을 입력하세요"/>

                        <label htmlFor="phoneNum">연락처</label>
                        <input className="inputBox" id="phoneNum" placeholder="연락처를 입력하세요"/>
                    </div>
                </div>

                <div className="main_bottom">
                    <button onClick={goToSignup} className="BlueBtn" >다음</button>
                    <div className="main_main_signUp">
                        <span>이미 계정이 있으신가요?</span>
                        <Link to="/login">로그인</Link>
                    </div>
                </div>
            </main>
        </>
    );
};
export default Setmyinform