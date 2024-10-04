import axios from 'axios'
import {React,useState} from 'react'


function MultipleUpload() {
    const [selectedFiles,setSelectedFiles]=useState([])
    function handleSubmit(event){
        event.preventDefault()
        console.log(selectedFiles)
        const formData=new FormData()
        selectedFiles.forEach((file)=>{
            formData.append(`files`,file)
        })

        axios.post(
            'url',
            {
                method: "POST",
                body: formData,
            }
        )
        .then(response=>console.log(response.data))
        .catch(error=>console.error('Error:',error))
    }
    function handleFileChange(event){
        const files=Array.from(event.target.files)
        setSelectedFiles(files)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1>MultipleUpload</h1>
            <input type='file' multiple onChange={handleFileChange} />
            <button type="submit">Multiple Submit</button>
        </form>
    </div>
  )
}

export default MultipleUpload