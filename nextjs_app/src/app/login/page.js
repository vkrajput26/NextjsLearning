'use client'
import { useRouter } from "next/navigation"

 const Login =()=>{
  
    const router=useRouter()
    const rountingfun=(name)=>{
        router.push(name)
    }
    return(
        <div>
            <h1> Login  page</h1>
            <button onClick={()=>rountingfun('/')} >Home</button>
        </div>
    )
}

export default Login