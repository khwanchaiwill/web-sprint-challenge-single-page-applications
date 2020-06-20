import React, { useState, useEffect } from 'react'
import { Switch, Route, Link , NavLink} from 'react-router-dom'
import Home from './component/Home'
import MenuList from './component/Menu'
import MenuItem from './component/MenuItem'
import data from './data'
import Apps from './component/App'
import './App.css'

function fecthData() {
  return Promise.resolve({success: true, data})
}
const App = () => {
  const [ourMenu, setOurMenu] = useState([])

  useEffect(() => {
    fecthData()
    .then(res =>{
      setOurMenu(res.data)
    })
  }, [])

  return (
    <div className="App">
      <header> 
      <h1>Lambda Pizza</h1>
     
      <div className="home-header">
        <nav className="home-header">
        <NavLink className="home-link" to='/'>Home</NavLink>
        <NavLink className='menu-link' to='/menu-list'>Menu</NavLink>
        <NavLink className="order" to='/order'>Make your old menu</NavLink>
        </nav>
      </div>
    
      </header>
     <Switch>

       <Route path='/menu-list/:menuId'>
         <MenuItem menus={ourMenu} />
       </Route>

       <Route  path='/menu-list'>
         
          <MenuList  menus={ourMenu} />           
       
       </Route>
        <Route  path='/order'>
          <Apps />  
        </Route>
        
        <Route exact path='/'>
          <Home />  
        </Route>
        

      </Switch>
      </div>
  );
};
export default App;
