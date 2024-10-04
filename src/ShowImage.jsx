import React, { useState } from 'react';

export default function ShowImage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fileData = JSON.parse(localStorage.getItem('uploadedFiles')) || [];

  return (
    <>
      <h1>Uploaded Files</h1>
      {fileData.length === 0 ? (
        <div>No files uploaded yet.</div>
      ) : (
        <ul>
          {fileData.map((element, index) => (
            <li key={index}>
              <strong>File Name:</strong> {element.filename} <br />
              <strong>Size:</strong> {element.size} bytes <br />
              <strong>Uploaded At:</strong> {new Date(element.uploadedAt).toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
