import React from "react"
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import "./login.css";
import { GoArrowLeft } from "react-icons/go";
import logoImg from "../../img/logoimg.jpg";
import logoText from "../../img/logotext.png";


const Login = () => {
    
    const navigate = useNavigate();
    const loginToHome = () => {
        navigate('/home');
        }
    const goToTitle = () => {
        navigate('/');
        }
        

/*  Api 연습
    const api = "https://api.upbit.com/v1/ticker?markets=KRW-BTC";
    async function Date() {
        try {
            const instance = await axios.get(api, );
            console.log('데이터 조회 결과:', response.data);
        } catch (error) {
            console.error('API 요청 중 오류 발생:', error);
        }
    }
    Date();
*/
    return (
        <>
            <header>
                <div>
                    <GoArrowLeft className="backBtn" onClick={goToTitle}/>
                </div>
            </header>

            <main className="loginPage">
                <div className="main_top">
                    <div className="logo">
                        <img src={logoImg} className="logoImg"/>
                        <img src={logoText} className="logoText"/>
                    </div>
                    <h1>로그인</h1>
                    <p>계정에 로그인하여 서비스를 이용하세요</p>
                </div>

                <div className="main_main">
                    <label htmlFor="id">아이디</label>
                    <input className="inputBox" id="id" placeholder="아이디를 입력하세요"/>

                    <div className="main_main_pw">
                        <label htmlFor="pw">비밀번호</label>
                        <Link to="/findpw">비밀번호 찾기</Link>
                    </div>
                    <input className="inputBox" id="pw" placeholder="비밀번호를 입력하세요"/>

                    <div className="main_main_signUp">
                        <span>계정이 없으신가요?</span>
                        <Link to="/setmyinform">회원가입</Link>
                    </div>
                    
                    <button onClick={loginToHome} className="BlueBtn">로그인</button>
                </div>
            </main>
        </>

    );
}
export default Login