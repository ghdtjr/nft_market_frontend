import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Main from "./pages/main"
import Create from './pages/create'
import MyPage from './pages/mypage'


function App() {
  return (
    <div>
    <Routes>
      <Route path="/" exact={true} element={<Main />} />
      <Route path="/create" element={<Create/>} />
      <Route path="/mypage" element={<MyPage/>} />
    </Routes>
    </div>
  )
}

export default App;
