import axios from 'axios'
import React, { useState } from 'react'

function FileUpload() {
    const [file,setFile]=useState()
    function handleFile(event){
        setFile(event.target.files[0])
    }
    function handleSubmit(event){
        event.preventDefault()
        // console.log('File :', file)
        if(file){
            const formData=new FormData()
            formData.append('file',file)
            axios.post(
                'url',
                {
                    method:"POST",
                    body:formData
                }
            )
            .then(response=>console.log(response.data))
            .catch(error=>console.error("Error:",error))

        }
    }
  return (
    <div>
        <h1>Form file upload</h1>
        <form onSubmit={handleSubmit}>
            <input type="file" name='file' onChange={handleFile} />
            <button>Upload</button>
        </form>
    </div>
  )
}

export default FileUpload