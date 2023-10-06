'use client'

import { useRouter } from "next/navigation"

const NestedHome=()=>{
    const router=useRouter()
    return (<>
    <h1>NestedHome page</h1>
    <button onClick={()=>router.push("/")} >Home</button>
    </>)
}
export default NestedHome