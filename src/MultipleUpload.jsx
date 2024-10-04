import axios from 'axios';
import React, { useState } from 'react';

function MultipleUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    selectedFiles.forEach((file) => {
      formData.append('files', file);
    });

    try {
      const response = await axios.post('http://localhost:3001/upload/multiple', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setSuccessMessage('Files uploaded successfully');
      // Store the uploaded files information in localStorage
      const uploadedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || [];
      uploadedFiles.push(...response.data.files);
      localStorage.setItem('uploadedFiles', JSON.stringify(uploadedFiles));
    } catch (error) {
      setError('Error uploading files: ' + error.message);
    }
  }

  function handleFileChange(event) {
    const files = Array.from(event.target.files);
    setSelectedFiles(files);
  }

  return (
    <div>
      <h1>Multiple File Upload</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" multiple onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {successMessage && <div>{successMessage}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}

export default MultipleUpload;
