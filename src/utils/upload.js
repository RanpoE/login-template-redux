import React, { useState } from 'react';

const UploadComponent = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploading, setUploading] = useState(false);
    const [abortController, setAbortController] = useState(null);

    const handleFileSelect = (event) => {
        setSelectedFiles([...selectedFiles, ...event.target.files]);
    };

    const handleUpload = () => {
        setUploading(true);
        setUploadProgress(0);

        const totalFiles = selectedFiles.length;
        let uploadedFiles = 0;

        const uploadNextFile = () => {
            if (uploadedFiles === totalFiles) {
                // All files uploaded successfully
                setUploading(false);
                return;
            }

            const file = selectedFiles[uploadedFiles];
            const formData = new FormData();
            formData.append('file', file);
            formData.append('name', file.name);
            formData.append('prompt', 'prompt')
            console.log(formData, " formData")
            return formData

            const xhr = new XMLHttpRequest();
            const controller = new AbortController();
            setAbortController(controller);

            xhr.upload.addEventListener('progress', (event) => {
                if (event.lengthComputable) {
                    const progress = Math.round((event.loaded / event.total) * 100);
                    setUploadProgress(progress);
                }
            });

            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    if (xhr.status === 200) {
                        // File uploaded successfully
                        uploadedFiles++;
                        setUploadProgress(0);
                        uploadNextFile();
                    } else {
                        // Error occurred while uploading file
                        console.error('Error uploading file:', file.name);
                    }
                }
            };

            xhr.open('POST', 'https://api.example.com/upload');
            xhr.send(formData);

            // Cancel upload if requested
            if (abortController.signal.aborted) {
                xhr.abort();
                setUploading(false);
                setUploadProgress(0);
                return;
            }
        };

        uploadNextFile();
    };

    const handleCancel = () => {
        // Reset state and cancel the upload process
        if (abortController) {
            abortController.abort();
        }
        setSelectedFiles([]);
        setUploadProgress(0);
        setUploading(false);
    };

    return (
        <div>
            <input type="file" multiple onChange={handleFileSelect} />
            <button onClick={handleUpload} disabled={uploading || selectedFiles.length === 0}>
                Upload
            </button>
            <button onClick={handleCancel} disabled={!uploading}>
                Cancel
            </button>
            {uploading && <progress value={uploadProgress} max={100} />}
        </div>
    );
};

export default UploadComponent;
