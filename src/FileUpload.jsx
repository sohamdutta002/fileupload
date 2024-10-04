import axios from 'axios';
import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  function handleFile(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      try {
        const response = await axios.post('http://localhost:3001/upload/single', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setSuccessMessage('File uploaded successfully');
        // Store the uploaded file information in localStorage
        const uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
        uploadedFiles.push(response.data.file);
        localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
      } catch (error) {
        setError('Error uploading file: ' + error.message);
      }
    }
  }

  return (
    <div>
      <h1>Single File Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFile} />
        <button type="submit">Upload</button>
      </form>
      {successMessage && <div>{successMessage}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default FileUpload;
