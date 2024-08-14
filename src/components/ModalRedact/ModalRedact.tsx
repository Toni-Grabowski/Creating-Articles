import React, { useEffect, useState } from 'react'

interface Post {
    id: string,
    userId: string,
    heading: string,
    body: string,
    image: string,
    lastName: string,
    userName: string,
    avatar: string
}

interface ModalProps {
    isModalRedact: boolean;
    setIsModalRedact: (value: boolean) => void;
    post: Post | null; 
}

interface  ModalRedact {
    heading: string,
    body: string,
}

const ModalRedact:React.FC<ModalProps> = ({isModalRedact, setIsModalRedact, post}) => {
    const [heading, setHeading] = useState(post?.heading || '');
    const [body, setBody] = useState(post?.body || '');
    // const [image, setImage] = useState(post?.image || '');

    useEffect(() => {
        if (post) {
            setHeading(post.heading);
            setBody(post.body);
            // setImage(post.image);
        }
    }, [post]);


    

  return (
    <div className={`modal-overlay ${isModalRedact ? 'show' : ''}`}>
    <div className="modal-content">
        <button className="modal-close" onClick={() => setIsModalRedact(false)}>&times;</button>
        <div className='main-modal'>
            <input
                type="text"
                className="input-field heading-field"
                placeholder="Heading"
                name="heading"
                value={heading}
                onChange={(e) => setHeading(e.target.value)}
            />
            <textarea
                className="input-field body-field"
                placeholder="Body"
                name="body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
            />
        </div>
        <button className="modal-action">Редактировать пост</button>
    </div>
</div>
  )
}

export default ModalRedact