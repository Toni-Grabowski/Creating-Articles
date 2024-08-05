import React from 'react'
import './Content.scss'
const Content = () => {
  return (
    <>
        <div className="cart__border">
            <div className="user">
                <div>
                   имя пользователя
                    <p>дата создания поста</p>    
                </div>
                <div>
                    <img className='draw' src="./draw.png" alt="" />    
                </div>
                
            </div>

            <div >
                <img className="image" src="./test.jpg" alt="" />    
            </div>

            <div>
                <img className='icon__img' src="./heart.png" alt="" />
                <img className='icon__img' src="./comment.png" alt="" />
                <img className='icon__img' src="./share.png" alt="" />
            </div>
        </div>


            
        <div className="cart__border">
            <div className="user">
                <div>
                   имя пользователя
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


        <div className="cart__border">
            <div className="user">
                <div>
                   имя пользователя
                    <p>дата создания поста</p>    
                </div>

                <div>
                    <img className='draw' src="./draw.png" alt="" />    
                </div>
            </div>

            <div >
                <img className="image" src="./test3.jpg" alt="" />    
            </div>

            <div>
                <img className='icon__img' src="./heart.png" alt="" />
                <img className='icon__img' src="./comment.png" alt="" />
                <img className='icon__img' src="./share.png" alt="" />
            </div>
        </div>


        

    </>
  )
}

export default Content