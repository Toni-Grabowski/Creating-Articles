import React, { useEffect, useState } from 'react'
import './Content.scss'


interface Post {
    id: string,
    heading: string,
    body: string,
    image: string
}

const Content = () => {
    const [post, setPost] = useState<Post[]>([])
    useEffect(() => {
        fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/post`, {
            method:'GET'
        })
        .then((response) => response.json())
        .then((data) => {
            setPost(data)
 
        })
    }, [])

  return (
    <>
    {
        post.length > 0 ? (

         post.map((data) => (

        <div className="cart__border" key={data.id}>
            <div className="user">
                <div className='user__info'>
                    <div className='avatar'></div>

                    <div>
                        имя пользователя
                        <p>дата создания поста</p>   
                    </div>
                </div>
                <div>
                    <img className='draw' src="./draw.png" alt="" />    
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
        ) : <p>Loading</p>

    }
            
      

        

    </>
  )
}

export default Content