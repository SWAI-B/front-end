import React from "react"
import { useNavigate, Link} from 'react-router-dom';
import "./signup.css";

const Signup = () => {

    const navigate = useNavigate();
    const signToLogin = () => {
        navigate("/");
    };

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
                    <h1>회원가입</h1>
                    <p>계정을 만들어 서비스를 이용하세요</p>
                </div>

                <div className="main_main">
                    <div className="form_row">
                        <label htmlFor="nation">국적</label>
                        <input id="nation" placeholder="국적을 선택하세요" />

                        <label htmlFor="lang">사용언어</label>
                        <input id="lang" placeholder="사용언어를 선택하세요" />

                        <label htmlFor="username">이름</label>
                        <input id="username" placeholder="이름을 입력하세요"/>

                        <label htmlFor="phoneNum">연락처</label>
                        <input id="phoneNum" placeholder="연락처를 입력하세요"/>

                        <label htmlFor="id">아이디</label>
                        <input id="id" placeholder="아이디를 입력하세요"/>

                        <label htmlFor="pw">비밀번호</label>
                        <input id="pw" placeholder="비밀번호를 입력하세요"/>

                        <label htmlFor="pwCheck">비밀번호 확인</label>
                        <input id="pwCheck" placeholder="비밀번호를 다시 입력하세요"/>
                    </div>
                </div>

                <div className="main_bottom">
                    <button onClick={signToLogin}>가입하기</button>
                    <div className="main_main_signUp">
                        <span>이미 계정이 있으신가요?</span>
                        <Link to="/">로그인</Link>
                    </div>
                </div>
            </main>
        </>
    );
};
export default Signup