import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Loginpage from './components/Loginpage'
import Admin from './components/Admin';
import Mangment from './components/Mangment';
import Managmentnavbar from "./components/Managmentnavbar";
import Adminnavbar from "./components/Adminnavbar";
import Managmodul from "./components/AdminModul/Managmodul";
import Managmenform from "./components/AdminModul/Managmenform";
import CallAjax from "./Hook/CallAjax";
import Editmangementform from "./components/AdminModul/Editmangementform";
import Coursesmodul from "./components/AdminModul/Coursesmodul";
import Addcourses from "./components/AdminModul/Addcourses";
import EditcourseForm from "./components/AdminModul/EditcourseForm";
import RegistrationForm from "./components/ManagmentModule/RegistrationForm";
import Allstudentrecord from "./components/ManagmentModule/Allstudentrecord";
import Batchesmodul from "./components/AdminModul/Batchesmodul";
import Addbatches from "./components/AdminModul/Addbatches";
import BatchesEditform from "./components/ManagmentModule/BatchesEditform";
import Editbatchform from "./components/ManagmentModule/Editbatchform";
import Testing from "./components/Testing";
import Viewdetail_stude from "./components/ManagmentModule/Viewdetail_stude";
import EditStudentForm from "./components/ManagmentModule/EditStudentForm";
import AdminHomePage from "./components/AdminHomePage";

function App() {
 
  return (
    <>
     <div>

      

     <BrowserRouter>
      <Routes>
        
          <Route index element={<Loginpage />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Management" element={<Mangment />} />
          <Route path="adminnav" element={<div><Adminnavbar /> <AdminHomePage /></div>} />
          <Route path="managmentnav" element={<div><Managmentnavbar /> <AdminHomePage /></div>} />
      {/* Admin Routing */}
      
          <Route path="managmentmodul" element={<Managmodul />} />
          <Route path="managmentform" element={<Managmenform />} />
          <Route path="editform/:id" element={<Editmangementform />} />
        {/* Courses Module */}
        <Route path="coursesmodule" element={<Coursesmodul />} />
        <Route path="addcourse" element={<Addcourses />} />
        <Route path="editcourse/:id" element={<EditcourseForm />} />
        {/* Student Registration Modul */}
        <Route path="studentregister" element={<RegistrationForm />} />
        <Route path="allstudentrecord" element={<Allstudentrecord />} />
        <Route path="viewdetail/:id" element={<Viewdetail_stude />}/>
        <Route path="editstudentform/:id" element={<EditStudentForm />}/>
        {/* Batches Module */}
        <Route path="batches" element={<Batchesmodul />} />
        <Route path="batchform" element={<Addbatches />} />
        <Route path="editbatches/:id" element={<Editbatchform />} />
        <Route path="test" element={<Testing />} />
        {/* <Route path="editbatches/:id" element = {<BatchesEditform/>} /> */}
        
      </Routes>
    </BrowserRouter>
      


      
     </div>
    </>
  )
}

export default App
