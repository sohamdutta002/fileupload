import React, { useState } from 'react'

function FileUpload() {
    const [file,setFile]=useState()
    function handleFile(event){
        console.log('File :', event.target.files[0])
        setFile(event.target.files[0])
    }
    function handleSubmit(event){
        event.preventDefault()
        if(file){
            const formData=new FormData()
            formData.append('file',file)
            const dataObject={
                name:file.name,
                size:file.size,
                type:file.type,
                lastModified:file.lastModified,
            }
            formData.forEach((value,key)=>{
                dataObject[key]=value
            })
            console.log('JSON to be sent: ',JSON.stringify(dataObject))
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