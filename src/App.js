import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from './component/login/login';
import Home from './component/home/home';
import Information from './component/information/information';
import Document from './component/mydocument/document';
import Mypage from './component/mypage/mypage';
import Ocr from './component/ocr/ocr';
import Result from './component/ocr-result/result';
import Summary from './component/ocr-summary/summary';
import Setmyinform from './component/signup/setmyinform';
import Signup from './component/signup/signup';
import Title from './component/title/title';
import Mypagepw from './component/mypage/mypagepw';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/information" element={<Information/>} />
          <Route path="/mydocument" element={<Document/>} />
          <Route path="/mypage" element={<Mypage/>} />
          <Route path="/mypagepw" element={<Mypagepw/>} />
          <Route path="/ocr" element={<Ocr/>} />
          <Route path="/ocr-result" element={<Result/>} />
          <Route path="/ocr-summary" element={<Summary/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/setmyinform" element={<Setmyinform/>} />
          <Route path="/title" element={<Title/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
