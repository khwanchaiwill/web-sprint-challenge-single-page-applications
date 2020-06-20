import React from 'react';
import {useHistory} from 'react-router-dom'
import Contain from '../Style/home'

const Home = ()=>{

    const history = useHistory()
    const jumpToMenu = ()=>{
        if(true){
            history.push('/menu-list')
        }
    }
    const makeStyle = (w, h) =>{
        return{
            img: {
                width: w,
                height: h,
            }
        }
    }
    return (
        <Contain>
            <div>
            <abbr title="Click to see menu">
            <img style={makeStyle('100%', '80vh').img} className="home-image"
            onClick={jumpToMenu}
            src="https://images.unsplash.com/photo-1490717064594-3bd2c4081693?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&dl=brenan-greene-HPZs4EXRFSU-unsplash.jpg "
            alt="pizza"/>
            </abbr>
            </div>
        </Contain>
    )
}
export default Home;