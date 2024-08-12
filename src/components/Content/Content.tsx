import React, { useEffect, useState } from 'react'
import './Content.scss'


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
                 {data.userId === localId  ?  <img className='draw' src="./draw.png" alt="" /> : null}
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