import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from "../components/Login"
import Register from "../components/Register"

import bgImage from "../assets/images/svg.png"
import userImage from "../assets/images/user.png"


const Home = () => {

  const formSectionStyles = {
    background: "linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,121,109,1) 21%, rgba(0,212,255,1) 100%)",
    minHeight: '100vh',
    height: '100%',
  }

  const formContainerStyles = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '350px',
  }

  const formTopStyles = {
    minHeight: '150px',
    background: `url(${bgImage})`,
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  }

  const formTitleStyles = {
    backgroundColor: 'rgb(0, 244, 225)',
    width: 'fit-content',
    padding: '1.25rem 4.5rem',
    top: '-1rem',
    left: '50%',
    transform: 'translateX(-50%)'
  }

  const formTitleImgStyles = {
    width: '100px',
    bottom: '-1.5rem',
    left: '50%',
    transform: 'translateX(-50%)'
  }

  const navigate = useNavigate()
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user) {
      navigate('users/')
    }
  }, [navigate])

  return (
    <div className="container-fluid position-relative" style={formSectionStyles}>
      <div className="" style={formContainerStyles}>
        <div className="position-relative rounded" style={{ background: 'rgba(30, 44, 79)' }}>
          <div className="position-relative" style={formTopStyles}>
            <p className="position-absolute" style={formTitleStyles}>{isLogin ? 'SIGN IN' : 'REGISTER'}</p>
            <img src={userImage} className="position-absolute" style={formTitleImgStyles} alt="user" />
          </div>
          <div className="px-4 pt-5 mt-2 pb-4 mx-auto">
            {
              isLogin ? <Login setIsLogin={setIsLogin} /> : <Register setIsLogin={setIsLogin} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home