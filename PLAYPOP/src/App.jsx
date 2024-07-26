import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Test from './pages/Test/TestPage'
import Main from './pages/Test/MainPage'
import PopUpPage from './pages/PopUpPage/PopUpPage'
import Customer from './pages/Customer/Customer'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test/>}/>
        <Route path="/main" element={<Main/>}/>
        <Route path="/popuppage" element={<PopUpPage/>}/>
        <Route path="/customer" element={<Customer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;










/*1. 페이지 생성하기
import React from 'react';


function 임의로 지정한 이름(){
    return(
        <div>
            hello
        </div>
    );
}
export default 임의로 지정한 이름;

2. App.jsx에 와서 import문 추가
import 임의로 지정한 이름 from '생성한 페이지의 상대경로'

3. App.jsx Route태그 추가
<Route path="/로컬호스트 뒤에 올 사이트 주소" element={<임의로 지정한 이름/>}/>
*/