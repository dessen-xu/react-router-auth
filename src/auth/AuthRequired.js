import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthProvider";

const AuthRequired = ({ children, requiredAuth }) => {

    const auth = useAuth()
    // location用来记录当前访问的页面，即没有权限的页面
    // 登录成功后，直接进到此页面，
    const location = useLocation()

    if (!auth.user) {
        return <Navigate to={'/login'} replace state={{ form: location }}></Navigate>
    }

    // requiredAuth表示访问组件需要的权限
    if (requiredAuth) {
        if (auth.user.role === requiredAuth) {
            return children
        } else {
            return <Navigate to={'/noauth'} replace state={{ form: location }}></Navigate>
        }
    }

    return children
}

export default AuthRequired;