import React from 'react'
import { useRouteMatch, useParams } from 'react-router-dom'
import Contain from '../Style/home'
import Contain1 from '../Style/menustyle'


export default function MenuItem (props){

    const {menus} = props
    console.log (menus)

    const {url, path, } = useRouteMatch()
    const {menuId} = useParams

    console.log('url from hook', url)
    console.log('path from the hook', path)
    console.log('path from thge hook', menuId)

    const menu = menus.find(i =>{
        return i.id == menuId
    })
    if(!menu) return 'waiting for menu....'

    const makeImg = (w, h) =>{
        return{
            img: {
                width: w,
                height: h,
            }
        }
    }
    return(
       <Contain>
            <Contain1>
                <img style={makeImg('100%','80vh').img} src={menu.image} />
            </Contain1>
           <Contain1>
                <h2> {menu.name} </h2>
                <p> {menu.detail} </p>
                <h3>Price: {menu.price} </h3>
          
           </Contain1>
                
    </Contain>
    )
}