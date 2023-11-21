import React, { useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import { Preview } from '../../assets/images';

const fileTypes = ["JPEG", "PNG", "GIF"];

const Form = () => {
    const [file, setFile] = useState(null);
    const [prev, setPrev] = useState(Preview);
    const [form, setForm] = useState({
        name: 'Watashi',
        prompt: '',
        photo: '',
    })

    const handleChange = (file) => {
        setFile(file);
        const fileObj = URL.createObjectURL(file);
        setForm({ ...form, photo: file.name })
        setPrev(fileObj);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.photo && !form.prompt) return
        try {
            const base64File = await convertToBase64(file);
            const formData = { ...form, photo: base64File };
            const request = await fetch('http://localhost:8080/api/v1/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const response = await request.json()
            console.log(response)
        } catch (error) {
            alert(error.message)
        }
    };

    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    return (
        <div className="App">
            <h1>Hello To Drag & Drop Files</h1>
            <FileUploader
                multiple={false}
                handleChange={handleChange}
                name="file"
                types={fileTypes}
            />
            <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
            <img src={prev} alt="preview" />
            <form onSubmit={handleSubmit}>
                <input type='text' name='prompt' placeholder='Prompt' onChange={(e) => setForm({ ...form, prompt: e.target.value })} />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form