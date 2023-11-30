import React, { useMemo, useState } from 'react'
import { FileUploader } from "react-drag-drop-files";
import { Preview } from '../../assets/images';
import Button from '../Button/Button';

const fileTypes = ["JPEG", "JPG", "PNG", "GIF"];

const CreateForm = () => {
    const [file, setFile] = useState(null);
    const [prev, setPrev] = useState(Preview);
    const [form, setForm] = useState({
        user: 'Watashi',
        title: '',
        caption: '',
        photo: '',
    });
    const [disabled, setDisabled] = useState(false); // State variable to disable the upload button
    const [uploadedCount, setUploadedCount] = useState(0); // State variable to keep track of uploaded file count
    const [controller, setController] = useState(null); // State variable to store the AbortController

    const handleChange = async (file) => {
        setFile(file);
        const fileObj = URL.createObjectURL(file);
        setForm({ ...form, photo: file.name });
        setPrev(fileObj);
        // await uploadFile(file); // Upload the file
    };

    const uploadFile = async (file) => {
        const abortController = new AbortController(); // Create an AbortController
        setController(abortController); // Store the AbortController in state

        try {
            const base64File = await convertToBase64(file);
            const formData = { ...form, photo: base64File };
            const request = await fetch('http://localhost:8080/api/v1/post', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData),
                signal: abortController.signal // Pass the signal to the request
            });
            const response = await request.json();
            console.log(response);
            setUploadedCount(prevCount => prevCount + 1); // Increment the uploaded file count
        } catch (error) {
            alert(error.message);
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

    const handleCancel = () => {
        if (controller) {
            controller.abort(); // Abort the request
            setController(null); // Clear the AbortController from state
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setDisabled(prev => !prev)
        if (!form.photo && !form.caption) return;
        try {
            const base64File = await convertToBase64(file);
            const formData = { ...form, photo: base64File };
            const request = await fetch('http://localhost:8080/api/v1/gallery', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const response = await request.json();
            console.log(response);
        } catch (error) {
            alert(error.message);
        } finally {
            setDisabled(prev => !prev)
        }
    };

    return (
        <div className="dark:bg-slate-800 flex items-center justify-center  h-screen">
            <div className="flex items-center flex-col bg-white h-auto p-20">
                <h1 className='text-lg font-bold'>Create a new post</h1>
                <FileUploader
                    multiple={false}
                    handleChange={handleChange}
                    name="file"
                    types={fileTypes}
                />
                <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
                <img src={prev} alt="preview" className='h-20 w-20' />
                <form onSubmit={handleSubmit}>
                    <div className='flex flex-col items-center justify-center'>
                        <input className=' w-[300px] h-15 p-2' type='text' name='title' placeholder='Title' onChange={(e) => setForm({ ...form, title: e.target.value })} />
                        <input className=' w-[300px] h-15 p-2' type='text' name='caption' placeholder='Caption' onChange={(e) => setForm({ ...form, caption: e.target.value })} />
                        <Button type='submit' text='Post' variant='primary w-full mt-10' disabled={disabled} />
                    </div>
                </form>

                {/* {controller && (
                    <>
                        <p>Upload Progress: {controller?.signal?.aborted ? "Aborted" : "In Progress"}</p>
                        <br />
                        Uploaded files count: {uploadedCount}
                        <Button onClick={handleCancel} text="Cancel Upload" variant="secondary mt-4" />
                    </>
                )} */}
            </div>
        </div>
    );
}

export default CreateForm;

//     const convertToBase64 = (file) => {
//         return new Promise((resolve, reject) => {
//             const reader = new FileReader();
//             reader.readAsDataURL(file);
//             reader.onload = () => resolve(reader.result);
//             reader.onerror = (error) => reject(error);
//         });
//     };

//     return (
//         <div className="dark:bg-slate-500 flex items-center justify-center  h-screen">
//             <div className="flex items-center flex-col bg-white h-auto p-20">
//                 <h1>Create a new post</h1>
//                 <FileUploader
//                     multiple={false}
//                     handleChange={handleChange}
//                     name="file"
//                     types={fileTypes}
//                 />
//                 <p>{file ? `File name: ${file.name}` : "No files uploaded yet"}</p>
//                 <img src={prev} alt="preview" className='h-20 w-20' />

//                 <form onSubmit={handleSubmit}>
//                     <div className='flex flex-col items-center justify-center'>
//                         <input className=' w-[300px] h-15 p-2' type='text' name='prompt' placeholder='Prompt' onChange={(e) => setForm({ ...form, prompt: e.target.value })} />
//                         <Button type='submit' text='Post' variant='primary w-full mt-10'/>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default Form