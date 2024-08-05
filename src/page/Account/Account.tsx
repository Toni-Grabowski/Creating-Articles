import React from 'react'
import Header from '../../components/Header/Header'
import './Account.scss'
const Account = () => {
  return (
    <div className='account__user'>
        <Header />

            <div className='main__content-account'>
                <div className='profile__user'>
                    <img className='profile__user-logo'  src="./test.jpg" alt="" />

                    <div className='profile__user-content'>

                        <div className='name'>
                          <p>Имя</p>
                          <p>Фамилия</p>
                        </div>
                        
                        <div>
                          <button className='button__settings'>Редактировать профиль</button>
                        </div>

                    </div>
                </div>


              <div className='main__account'>

                  <div className="cart__border">
                    <div className="user">
                        <div>
                          
                            <p>дата создания поста</p>    
                        </div>

                        <div>
                            <img className='draw' src="./draw.png" alt="" />    
                        </div>
                    </div>

                    <div >
                        <img className="image" src="./test2.jpg" alt="" />    
                    </div>

                    <div>
                        <img className='icon__img' src="./heart.png" alt="" />
                        <img className='icon__img' src="./comment.png" alt="" />
                        <img className='icon__img' src="./share.png" alt="" />
                    </div>
                </div>

              </div>


            </div>
            
    </div>
  )
}

export default Account







