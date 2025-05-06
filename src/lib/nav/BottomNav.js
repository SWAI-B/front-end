import React from "react";
import { useNavigate } from "react-router-dom";
import { IoHomeOutline, IoDocumentTextOutline, IoCameraOutline, IoBookOutline, IoPersonOutline } from "react-icons/io5";
import "./BottomNav.css";

export default function BottomNav() {
    const navigate = useNavigate();
    return (
        <nav className="bottom-nav">
            <button onClick={() => navigate("/home")} className="bottom-nav-btn">
                <IoHomeOutline />
                <span>홈</span>
            </button>
            <button onClick={() => navigate("/mydocument")} className="bottom-nav-btn">
                <IoDocumentTextOutline />
                <span>내 문서</span>
            </button>
            <button onClick={() => navigate("/ocr")} className="bottom-nav-btn">
                <IoCameraOutline />
                <span>스캔</span>
            </button>
            <button onClick={() => navigate("/information")} className="bottom-nav-btn">
                <IoBookOutline />
                <span>법률 정보</span>
            </button>
            <button onClick={() => navigate("/mypage")} className="bottom-nav-btn">
                <IoPersonOutline />
                <span>내 정보</span>
            </button>
        </nav>
    );
}
