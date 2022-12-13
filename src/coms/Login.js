
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

const Login = () => {

    const auth = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    // 把AuthRequired页面存的路径取出来，登录成功后直接跳转到此页面
    const form = location.state?.form?.pathname || '/'

    const handleSubmit = (event) => {
        event.preventDefault()
        let formData = new FormData(event.currentTarget)
        let username = formData.get('username')
        auth.singIn({username, role: 'public'}, () => {
            navigate(form, { replace: true })
        })
    }

    const handleSubmitAdmin = (event) => {
        event.preventDefault()
        let formData = new FormData(event.currentTarget)
        let username = formData.get('username')
        auth.singIn({username, role: 'admin'}, () => {
            navigate(form, { replace: true })
        })
    }

    return (
        <div>
            <h3>登录页</h3>
            <form onSubmit={handleSubmit}>
                <input name="username"></input>
                <button type={'submit'}>登录</button>
            </form>
            <br></br>
            <form onSubmit={handleSubmitAdmin}>
                <input name="username"></input>
                <button type={'submit'}>管理员登录</button>
            </form>
        </div>
    )
}

export default Login