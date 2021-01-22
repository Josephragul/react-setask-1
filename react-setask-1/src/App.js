import {useState} from 'react';
import React,{Component} from 'react';
import {render} from "react-dom";
import {Router,Route,browserHistory,IndexRoute, Link} from 'react-router';

import SigninContainer from "./components/signin/Signin"
import ForgotPassword from "./components/signin/ForgotPassword"
import Sidebar from './components/sidebar/Sidebar';
import TabBar from './components/navbar/TabBar';

import Main from './components/main/Main';


const App =() => {
  

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

 
     return (
       <div className="container">
         <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
         <TabBar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
        
        <Sidebar />
        
         
         {/* <ForgotPassword /> */}
         {/* <SigninContainer /> */}
       </div>
     );
  
 
};

export default App;
//
// Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar}
// Main
