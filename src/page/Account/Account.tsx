import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import './Account.scss'
import Modal from '../../components/ModalIcon/Modal';

interface User {
  id: string;
  avatar: string;
  name: string;
  last_name: string;
}

const Account = () => {
  let id = localStorage.getItem('id')
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isModal, setIsModal] = useState(false)
  useEffect(() => {
    fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/user/${id}`, {
      method:'GET'
    })
    .then((response) => response.json())
    .then((data: User) => {
      setUser(data)
      setIsLoading(false);
    })
  },[])



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
                <button className='button__settings'>Редактировать профиль</button>
              </div>
            </div>
          </div>
          <div className='main__account'>
           
          </div>
            <button onClick={()=> setIsModal(prevModal => !prevModal)} className='addArticles'>+</button>
            {isModal ? <Modal  isModal={isModal} setIsModal={setIsModal} /> : null}
          </div>


        
        
        
      )}


        

    </div>
  );
}

export default Account







