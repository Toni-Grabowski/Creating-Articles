import React, { useState } from 'react'
import "./Register.scss"
import { useNavigate } from 'react-router-dom';

const Register = () => {
    let navigate = useNavigate()
    const [inputValueReg, setInputValueReg] = useState({
        name: '',
        last_name: '',
        email: '',
        password: '',
        postsCreate: []
    });
    const [regAndAuto, setRegAndAuto] = useState(true)
    const [inputValueAuto, setInputValueAuto] = useState({
        email: '',
        password: '',
    })

    const formInputReg = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setInputValueReg({...inputValueReg, [name]: value})
    }

    const submitFormReg = async(e?:React.FormEvent) => {
        e?.preventDefault()
        await fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/user`,{
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputValueReg)
        })
        .then((response) => response.json())
        .then((data) => {
            localStorage.setItem('id', data.id)
            localStorage.setItem('flag', 'true')
            localStorage.setItem("name", data.name)
            localStorage.setItem("last_name", data.last_name)
            localStorage.setItem("avatar", data.avatar)
            navigate('/')
        })
    }



    const formInputAuto = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setInputValueAuto({...inputValueAuto, [name]: value})
    }

    const findFormAuto = async(e?:React.FormEvent) => {
        e?.preventDefault()

        await fetch(`https://66b0d84f6a693a95b53a6d04.mockapi.io/Articles/user`,{
            method:'GET',
        })
        .then((response) => response.json())
        .then((data) => {
            const result = data.find((user:{email: string, password: string}) => 
                user.email === inputValueAuto.email && user.password === inputValueAuto.password
            );

            if(result) {
                localStorage.setItem('id', result.id)
                localStorage.setItem('flag', 'true')
                localStorage.setItem("name", result.name)
                localStorage.setItem("last_name", result.last_name)
                localStorage.setItem("avatar", result.avatar)
                navigate('/')
            }else {
                return;
            }
            
        })

    }




  return (
<>
{ regAndAuto ?(
    <div className="form-container">
        <input type="text" className="input-field name-field" placeholder="Имя пользователя" name="name" value={inputValueReg.name} onChange={formInputReg} />
        <input type="text" className="input-field last-name-field" placeholder="Фамилия пользователя" name="last_name" value={inputValueReg.last_name} onChange={formInputReg} />
        <input type="email" className="input-field email-field" placeholder="Емаил" name="email" value={inputValueReg.email} onChange={formInputReg} />
        <input type="password" className="input-field password-field" placeholder="Пароль" name="password" value={inputValueReg.password} onChange={formInputReg} />
        <button className="submit-button" onClick={submitFormReg}>Отправить</button>

        <p>Если у вас есть аккаунт, то перейдите к  <span style={{cursor: 'pointer'}} onClick={()=> setRegAndAuto(prevRegAndAuto => !prevRegAndAuto)}>Авторизации </span>   </p>
    </div>
    ) :
    <div>
        <div className="form-container">
        <input type="email" className="input-field email-field" placeholder="Емаил" name="email" value={inputValueAuto.email} onChange={formInputAuto } />
        <input type="password" className="input-field password-field" placeholder="Пароль" name="password" value={inputValueAuto.password} onChange={formInputAuto } />
        <button className="submit-button" onClick={findFormAuto}>Отправить</button>

        <p>Если у вас нет аккаунта, то перейдите к  <span style={{cursor: 'pointer'}} onClick={()=> setRegAndAuto(prevRegAndAuto => !prevRegAndAuto)}>Регистрации</span>   </p>
    </div>
    </div>
   }
</>
  )
}

export default Register