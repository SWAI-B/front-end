import React from "react"
import { useNavigate, Link } from 'react-router-dom';
import axios from "axios";
import "./login.css";

const Login = () => {
    
    const navigate = useNavigate();
    const loginToHome = () => {
        navigate('/home');
        }
    const loginToSign = () => {
        navigate('/signup');
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
                    <img className="backBtn"/>
                </div>
            </header>

            <main>
                <div className="main_top">
                    <div className="main_top_logo">
                        <div><img className="logoImg"/></div>
                        <div><img className="logoName"/></div>
                    </div>
                    <h1>로그인</h1>
                    <p>계정에 로그인하여 서비스를 이용하세요</p>
                </div>

                <div className="main_main">
                    <div className="main_main_id_pw">
                        <label htmlFor="id">아이디</label>
                        <input id="id" placeholder="아이디를 입력하세요"/>

                        <div className="main_main_password">
                            <label htmlFor="pw">비밀번호</label>
                            <div>찾기</div>   
                        </div>
                        <input id="pw" placeholder="비밀번호를 입력하세요"/>

                        <button onClick={loginToHome}>로그인</button>
                    </div>
                    <div className="main_main_signUp">
                        <span>계정이 없으신가요?</span>
                        <Link to="/signup">회원가입</Link>
                    </div>
                </div>
            </main>
        </>

    );
}
export default Login