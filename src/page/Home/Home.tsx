import Content from "../../components/Content/Content"
import Header from "../../components/Header/Header"
import './Home.scss'
const Home = () => {
  return (
    <div className="main">

        <Header/>
        <div className="main-content">
          <h1>Добро пожаловать!</h1>

            
            <Content />

         </div>
    </div>
  )
}

export default Home