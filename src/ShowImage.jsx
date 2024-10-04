import axios from "axios"
import { useState,useEffect } from "react"

export default function ShowImage(){
    const [loading,setLoading]=useState()
    const [data,setData]=useState()
    const [error,setError]=useState()
    
    const fileData = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
    // useEffect(()=>{
    //     const fetchData=async()=>{
    //         try{
    //             const response=await axios.get('url')
    //             setData(response.data)
    //         }catch(error){
    //             setError(error)
    //         }finally{
    //             setLoading(false)
    //         }
    //     }
    //     fetchData()
    // },[])

    if (loading)    return <div>Loading...</div>
    if(error)   return <div>Error:{error.message}</div>
    return(
        <>
            <h1> The data that are present: </h1>
            <div>
                {fileData.map(element=>{
                    return(
                        <ul>
                            <li key='name'> <strong>FileName:</strong> {element.name}</li>
                            <li key='size'> <strong>Size:</strong> {element.size}</li>
                            <li key='uploaded'> <strong>Uploaded At:</strong> {element.uploadedAt}</li>
                        </ul>
                    )
                })}
            </div>
            
        </>
    )
}

// const fileData = [
//     {
//         name: "a074a8a62cf3c17b39c70aa1270ef4eb.jpg",
//         size: 52492,
//         uploadedAt: "Invalid Date"
//     },
//     {
//         name: "1920x1080-hd-coding-uxxijj0oa4s9xh25.jpg",
//         size: 133292,
//         uploadedAt: "Invalid Date"
//     },
//     {
//         name: "adguardInstaller.exe",
//         size: 145952,
//         uploadedAt: "Invalid Date"
//     }
// ];
