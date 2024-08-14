import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import './Account.scss'
import Modal from '../../components/ModalIcon/Modal';
import { useNavigate } from 'react-router-dom';
import ModalRedact from '../../components/ModalRedact/ModalRedact';


interface User {
  id: string,
  userId: string,
  last_name: string,
  name: string,
  avatar: string,
  postsCreate: Post[]
}

interface Post {
  id: string,
  heading: string,
  body: string,
  image: string,
  userId: string,
  userName: string,
  lastName: string,
  avatar: string
}

const Account = () => {

  const navigate = useNavigate();
  let id = localStorage.getItem('id')
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModal, setIsModal] = useState(false)
  
  const [post, setPost] = useState<Post[]>([]);
  const [isModalRedact, setIsModalRedact] = useState(false)
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);

  useEffect(() => {
    fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/user/${id}`, {
      method:'GET'
    })
    .then((response) => response.json())
    .then((data) => {
      setUser(data)
      setPost(data)
      setIsLoading(false);
    })
  },[])

  const exit = () => {
    localStorage.removeItem('id')
    localStorage.removeItem('flag')
    localStorage.removeItem("name")
    localStorage.removeItem("last_name")
    localStorage.removeItem("avatar")
    navigate('/register')
  }

  const openEditModal = (postId: string) => {
    setSelectedPostId(postId);
    const postToEdit = user?.postsCreate.find(p => p.id === postId) || null;
    setSelectedPost(postToEdit);
    setIsModalRedact(true);
};

  return (
    <div className='account__user'>
      <Header />
      {isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <div className='main__content-account'>
          <div className='profile__user'>
            <img className='profile__user-logo' src={user?.avatar} alt="" />
            <div className='profile__user-content'>
              <div className='name'>
                <p>{user?.name}</p>
                <p>{user?.last_name}</p>
              </div>
              <div>
                <button onClick={exit} className='button__settings'>Выйти из аккаунта</button>
              </div>
            </div>
          </div>
          <div className='main__account'>
           
          </div>
            <button onClick={()=> setIsModal(prevModal => !prevModal)} className='addArticles'>+</button>
            {isModal ? <Modal  isModal={isModal} setIsModal={setIsModal} /> : null}
            {user?.postsCreate && user.postsCreate.length > 0 ? (
              user.postsCreate.map((post) => (
                <div className="cart__border" key={post.id}>
                <div className="user">
                    <div className='user__info'>
                      <img className='avatar' src={post.avatar} alt="" />
                        <div>
                            <div className="user__nameLast">
                                <p className='user-name'>{post.userName}</p>
                                <p>{post.lastName}</p>
                            </div>
                            <p>дата создания поста</p>   
                        </div>
                    </div>
    
                    <div>
                      {post.userId === id  ?  <img  onClick={() => openEditModal(post.id)}   className='draw' src="./draw.png" alt=""   /> : null}
  
                      {
                        isModalRedact ? <ModalRedact  isModalRedact={isModalRedact} setIsModalRedact={setIsModalRedact}  post={selectedPost} /> : null
                      }
                    </div>
                    
                </div>
    
                <div  >
                    <h1 className='heading'>{post.heading}</h1>
                    <p className='body'>{post.body}</p>
                    <img className="image" src={post.image} alt="" />    
                </div>
    
                <div>
                    <img className='icon__img' src="./heart.png" alt="" />
                    <img className='icon__img' src="./comment.png" alt="" />
                    <img className='icon__img' src="./share.png" alt="" />
                </div>
            </div> 
              ))
            ) : (
              <p>Нет созданных статей</p>
            )}

          </div>
      )}
    </div>
  );
}

export default Account







