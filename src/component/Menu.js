import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom'
import Contain1 from '../Style/menustyle'
import Contain from '../Style/home';
export default function MenuList (props){

    const {menus} = props
    const {url, path} = useRouteMatch()

    const makeImg = (w, h) =>{
        return{
            img: {
                width: w,
                height: h,
            }
        }
    }

    return(
        <div className="menu-list-pizza">
            {
                menus.map(menu =>(
                    <Contain>
                    <div key={menu.id}>
                        <Link to={`${url}/${menu.id}`}>
                            <img style={makeImg('80%','auto').img} className="menu-img"
                                src={menu.image}
                                alt={menu.name}
                                />
                           <div>
                            <h3> {menu.name} </h3>
                       
                        </div>
  
                        </Link> 
                        </div>
                       
                  </Contain>
                ))
            }
        </div>
    )
}
