import  { useEffect, useState } from 'react'
import './Content.scss'
import ModalRedact from '../ModalRedact/ModalRedact';



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

const Content = () => {
    const [post, setPost] = useState<Post[]>([]);
    const [isModalRedact, setIsModalRedact] = useState(false)
    const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
    const [selectedPost, setSelectedPost] = useState<Post | null>(null);

    let localId = localStorage.getItem("id")
    useEffect(() => {
        fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/post`, {
            method:'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            setPost(data)
 
        })
    }, [])

    const openEditModal = (postId: string) => {
        setSelectedPostId(postId);
        const postToEdit = post.find(p => p.id === postId) || null;
        setSelectedPost(postToEdit);
        setIsModalRedact(true);
    };

  return (
    <>
    {
        post.length > 0 ? (

         post.map((data) => (

        <div className="cart__border" key={data.id}>
            <div className="user">
                <div className='user__info'>
                  <img className='avatar' src={data.avatar} alt="" />
                    <div>
                        <div className="user__nameLast">
                            <p className='user-name'>{data.userName}</p>
                            <p>{data.lastName}</p>
                        </div>
                        <p>дата создания поста</p>   
                    </div>
                </div>

                <div>
                 {data.userId === localId  ?  <img  onClick={() => openEditModal(data.id)}   className='draw' src="./draw.png" alt=""   /> : null}
 
                 {
                    isModalRedact ? <ModalRedact  isModalRedact={isModalRedact} setIsModalRedact={setIsModalRedact}  post={selectedPost} /> : null
                 }
                </div>

            </div>

            <div  >
                <h1 className='heading'>{data.heading}</h1>
                <p className='body'>{data.body}</p>
                <img className="image" src={data.image} alt="" />    
            </div>

            <div>
                <img className='icon__img' src="./heart.png" alt="" />
                <img className='icon__img' src="./comment.png" alt="" />
                <img className='icon__img' src="./share.png" alt="" />
            </div>
        </div> 
         ))
        ) : <p className='loading'>Loading...</p>
    }
    </>
  )
}

export default Content