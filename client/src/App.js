import {useEffect, useState} from "react";

import Login from "./components/account/Login"
import DataProvider from "./context/DataProvider";
import Home from "./components/home/Home";
import {BrowserRouter, Routes, Route, Navigate, Outlet} from 'react-router-dom';
import Header from "./components/header/header";
import CreatePost from "./components/create/CreatePost";
import DetailView from "./components/details/DetailView";
import UpdatePost from "./components/create/Update";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";

const PrivateRoute =({isAuthenticated,...props})=>{
  console.log(isAuthenticated);
  return isAuthenticated ?
  <>
    <Header/>
    <Outlet/>
  </>
  : <Navigate replace to="/login"/>
  
}

function App() {
  let [isAuthenticated,setIsAuthenticated]=useState(false);

  useEffect(()=>{
    let accesstoken=sessionStorage.getItem("accesstoken");
    console.log(accesstoken)
    if(accesstoken!==null) {
      setIsAuthenticated(true);
    }
    console.log(isAuthenticated);
  },[])


  const handleLogin=()=>{
    setIsAuthenticated(true);
  }

  const handleLogout=()=>{
    setIsAuthenticated(false);
    // clear the session  storage access token
    sessionStorage.removeItem("accesstoken");
  }

  return (
    
      <DataProvider>
        <BrowserRouter>
   
          <div style={{marginTop:"75px"}}>
            <Routes>
              <Route path="/login" element={<Login onClick={handleLogin} setIsAuthenticated={setIsAuthenticated}/>}/>

              <Route path="/" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/" element={<Home/>}/>
              </Route>

              <Route path="/create" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/create" element={<CreatePost/>}/>
              </Route>

              <Route path="/details/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/details/:id" element={<DetailView/>}/>
              </Route>

              <Route path="/update/:id" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/update/:id" element={<UpdatePost/>}/>
              </Route>

              <Route path="/about" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/about" element={<About/>}/>
              </Route>

              <Route path="/contact" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
                <Route path="/contact" element={<Contact/>}/>
              </Route>
{/* 
              <Route path="/login" element={<PrivateRoute isAuthenticated={isAuthenticated}/>}>
          <Route path="/login" element={<Login/>}/> 
              </Route> */}

            </Routes>
          </div>
        </BrowserRouter>
      </DataProvider>

  );
}

export default App;
