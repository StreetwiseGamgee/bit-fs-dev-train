'use client';
import { useRef, useState } from 'react';
import Image from 'next/image';
import classes from './image-picker.module.css';

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState(); {/* Client Component */}
    const imageInput = useRef();

    function handlePickClicked() {
        imageInput.current.click();
    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        if (!file) {
            setPickedImage(null);
            return;
        }

        // Conversion of file uploaded into a 'data url' to preview the image before submission
        const fileReader = new FileReader();
        fileReader.onload = () => { // Stores a funct. as a value within the onload property
            setPickedImage(fileReader.result);            
        }; 

        fileReader.readAsDataURL(file);
    }

    return ( 
        <div className={classes.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!pickedImage && <p>No Image Selected Yet...</p>}
                    {pickedImage && (
                        <Image 
                            src={pickedImage} 
                            alt="The image selected by the user uploading" 
                            fill
                        />
                    )}
                </div>
                <input
                    className={classes.input}
                    type="file" 
                    id={name}
                    accept="image/png, image/jpeg"
                    name={name}
                    ref={imageInput}
                    // multiple // In the instance where multiple files are required
                    onChange={handleImageChange}
                    required // Ensures that the form cannot be submitted without an image being selected
                />
            <button className={classes.button} 
            type="button" 
            onClick={handlePickClicked}> {/* Requires use client statement to be used... */}
                Pick an Image
            </button>
        </div>
    </div>
    );
}