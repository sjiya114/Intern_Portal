import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
export const AppContext=createContext();
axios.defaults.baseURL=import.meta.env.VITE_URL;
export const AppContextProvider=({children})=>
{  
    const [token,setToken]=useState(localStorage.getItem("token"));
    const [userData,setUserData]=useState({});
    const [totalFund,setTotalFund]=useState(localStorage.getItem("fund"));
    const navigate=useNavigate();

     const login=async(formData)=>
     {
      try {
        const res=await axios.post("/user/login",formData)
        if(res.data.success)
        {
            // getUserData();
            console.log(res.data);
            getUserData();
            toast.success(res.data.message);
            setToken(res.data.token);
            setUserData(res.data.user);
           navigate("/");
        }
      } catch (error) {
          toast.error("error while logging user");

      }
     }
     const signup=async(formData)=>
     {
        try {
         const res=await axios.post("/user/register",formData)
        if(res.data.success)
        {
            // getUserData();
             localStorage.setItem("token",res.data.token);
            toast.success(res.data.message);
           setToken(res.data.token);
             navigate("/");
        }
      } catch (error) {
          toast.error("error while registering user");
      }
     }
     const getUserData=async()=>
     {
        try {
             const res=await axios.get("/user/getuserdata");
             if(res.data.success)
             {
                console.log(res.data);
                setUserData(res.data.userData);
                setTotalFund((Number)(res.data.totalFund));
                localStorage.setItem("fund",String(res.data.totalFund));
               
             }
        } catch (error) {
            toast.error("error while fetching user data");
        }
     }
     const authUser=async()=>{
        try {
             const res=await axios.get("/user/auth");
             if(res.data.success)
             {
                setUserData(res.data.user);
              
             }
        } catch (error) {
           toast.error("error while authenticating user data"); 
        }
     }
     useEffect(()=>{
       if(token)
        axios.defaults.headers.token=token;
     },[])
    const values={token,setToken,userData,setUserData,totalFund,setTotalFund,login,signup,authUser,getUserData}
    return(
     <AppContext.Provider value={values}  >
        {children}
     </AppContext.Provider>
    );
}