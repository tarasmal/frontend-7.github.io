import React, { useState } from 'react';
import styles from './Images.module.css';
const ImageComponent = () => {
    const initialImage = {
        url: 'https://www.depo.ua/uploads/81147/conversions/fcd4ecb8adf1e32d5a2e67a85ed86396-wide-big.jpg',
        size: 30
    };
    const [images, setImages] = useState([initialImage]);

    const addImage = () => {
        setImages([...images, initialImage]);
    };

    const removeImage = (index) => {
        const newImages = images.filter((_, i) => i !== index);
        setImages(newImages);
    };

    const resizeImage = (index, sizeChange) => {
        const newImages = images.map((img, i) => {
            if (i === index) {
                return { ...img, size: img.size + sizeChange };
            }
            return img;
        });
        setImages(newImages);
    };

    return (
        <div>
            <button onClick={addImage}>Додати</button>
            <div className={styles['imagesContainer']}>
                {images.map((img, index) => (
                    <div key={index}>
                        <img src={img.url} style={{ width: `${img.size}%` }} alt="Dynamic" />
                        <button onClick={() => resizeImage(index, 10)}>Збільшити</button>
                        <button onClick={() => resizeImage(index, -10)}>Зменшити</button>
                        <button onClick={() => removeImage(index)}>Видалити</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageComponent;
