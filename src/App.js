import React from "react";
import { Routes, Route } from 'react-router-dom'
import Layout from './coms/Layout'
import Login from './coms/Login'
import Public from './coms/Public'
import Protected from './coms/Protected'
import Admin from './coms/Admin'
import NoAuth from './coms/NoAuth'
import AuthProvider from "./auth/AuthProvider";
import AuthRequired from "./auth/AuthRequired";

function App() {
  return (
    <AuthProvider>
      <div>
        <h1>hello react</h1>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Public />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/admin" element={<AuthRequired requiredAuth={'admin'} ><Admin /></AuthRequired>}></Route>
            <Route path="/noauth" element={<NoAuth />}></Route>
            <Route path="/protected" element={<AuthRequired><Protected /></AuthRequired>}></Route>
          </Route>
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
