import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';
const InputField = ({ label, ...rest }) => {
  return (
    <div className="flex gap-3 text-xl mt-9">
      <label className="w-20">{label}:</label>
      <input className="border border-slate-400 rounded-md p-2." {...rest} />
    </div>
  );
};

const SignUp = () => {
    const navigate = useNavigate();
    const [name,setName]=useState('')
    const [nameError,setNameError]=useState('')
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const[password,setPassword]=useState('')
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordErrorc, setPasswordErrorc] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
//         const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

//         if(name.length<6){
//             setNameError("Please enter a name with at least six characters")
//         }
//         if(!passwordRegex.test(password)){
       
//             setPasswordError("Invalid Password! Please check your password.")
//         }
//         if(password!=confirmPassword){
//             setPasswordErrorc("the passord does not match")
//         }
// if(!emailRegex.test(email)){
//     setEmailError("Invalid Email Address!");
//     return 
// }
navigate('/Home');
    }
        
  return (
    <div className="flex justify-center mt-9 font-sans">
      <form onSubmit={(e)=>handleSubmit(e)} className="p-10 text-gray-500 bg-slate-50 shadow-md pl-20 pr-20">
        <h3 className="text-2xl  text-teal-600 border-l-0">Welcome to our marketplace</h3>
        <h3 className="text-2xl mt-3 text-center">Create Account</h3>
        <InputField label="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <span className=" text-red-600">{nameError}</span>
        <InputField label="Email" value={email}  onChange={(e)=>setEmail(e.target.value)}  />
        <span className=" text-red-600">{emailError}</span>
        <InputField label="Password"  type="password"  value={password}  onChange={(e)=>setPassword(e.target.value)} />
        <span className=" text-red-600">{passwordError}</span>
        <InputField label="Confirm Password" value={confirmPassword}  onChange={(e)=>setConfirmPassword(e.target.value)}  type="password" />
        <span className=" text-red-600">{passwordErrorc}</span>
        <div className="flex justify-center">
          <button type="sumbit" className=" w-full font-medium text-xl bg-teal-600  py-1 mt-9 text-white rounded-md">Create</button>
        </div>
        
      </form>
    </div>
  );
};

export default SignUp;