import React, { FC, useEffect, useState } from 'react'
import './Modal.scss'

interface ModalProps {
    isModal: boolean;
    setIsModal: (value: boolean) => void;
}


  

const Modal: React.FC<ModalProps> = ({ isModal, setIsModal }) => {
    let localId = localStorage.getItem("id")
    let localName = localStorage.getItem('name')
    let localLastName = localStorage.getItem('last_name')
    let avatar = localStorage.getItem('avatar')
    const [modalInputValue, setModalInputValue] = useState({
        heading: '',
        body: '', 
        image: '',
        userId: localId,
        userName: localName,
        lastName: localLastName,
        avatar: avatar,
    });
   

    const FormModalInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, files } = e.target;
        if (name === 'image' && files) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setModalInputValue({ ...modalInputValue, image: reader.result as string });
            };
            reader.readAsDataURL(files[0]);
        } else {
            setModalInputValue({ ...modalInputValue, [name]: value });
        }
    };

   



    const submitFormModal = async () => {
        const response = await fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/post`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modalInputValue)
        });
    
        if(response.ok) {
            let post = await response.json()
            let user = await fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/user/${localId}`)

            if(user.ok){
                let userRespons = await user.json()
                let newPost = [...userRespons.postsCreate, post] 

                let updatePost = await fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/user/${localId}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({...userRespons, postsCreate: newPost})
                })
            }
          

        }
    
        setIsModal(false);
    };


    const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            setIsModal(false);
        }
    };

    return (
        <div className="modal-overlay show" onClick={handleOverlayClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={() => setIsModal(false)}>&times;</button>
                <div className='main-modal'>
                    <input type="text" className="input-field heading-field" placeholder="Heading" value={modalInputValue.heading} onChange={FormModalInput} name="heading" />
                    <input className="input-field body-field" placeholder="Body" value={modalInputValue.body} onChange={FormModalInput} name="body" />
                    <input type="file" className="file-upload" name="image" onChange={FormModalInput} />
                    <p >Файл загружать до 100 кб</p>
                </div>
                <button className="modal-action" onClick={submitFormModal}>Создать пост</button>
            </div>
        </div>
    );
};

export default Modal;