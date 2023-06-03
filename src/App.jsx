//index.js w folderze Colors
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AddOperation from './components/AddOperation/AddOperation';
import DivideOperation from './components/DivideOperation/DivideOperation';
import MultiplyOperation from './components/MultiplyOperation/MultiplyOperation';
import SubtractOperation from './components/SubtractOperation/SubtractOperation';
export default function App() {
  return (
    <Routes>
      <Route path="/"></Route>
      <Route path="add" element={<AddOperation />} />
      <Route path="sub" element={<SubtractOperation />} />
      <Route path="mul" element={<MultiplyOperation />} />
      <Route path="div" element={<DivideOperation />} />
    </Routes>
  );
}
