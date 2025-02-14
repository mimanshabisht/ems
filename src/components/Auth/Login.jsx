import { useState } from "react";

const Login = ({handleLogin}) => {
    const[email, setEmail] = useState('')
    const[password, setPassword] = useState('')
    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email, password)

        setEmail('')
        setPassword('')
    }
    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="border-2 border-emerald-600 p-20 rounded-xl">
            <h1 className="text-3xl text-center font-extrabold text-emerald-600 mb-7">EMS</h1>
                <form id="loginForm" onSubmit={submitHandler} className="flex flex-col">
                
                    <input required 
                    value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }}  
                    className="border-2 border-emerald-600 px-5 py-3 text-xl rounded-full outline-none placeholder:text-gray-500 bg-transparent" 
                    type="email" 
                    placeholder="Enter your E-mail"
                     />
                    <input 
                    value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                    required 
                    className="border-2 border-emerald-600 px-5 py-3 text-xl rounded-full outline-none placeholder:text-gray-500 bg-transparent mt-3" 
                    type="password" 
                    placeholder="Enter your password" 
                    />
                    <button className=" bg-emerald-600 px-3 py-3 text-xl rounded-full outline-none placeholder:text-white mt-6 font-bold">Log In</button>
                </form>
            </div>
        </div>
    );
};

export default Login;