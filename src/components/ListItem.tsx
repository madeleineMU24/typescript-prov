import React from "react"
import { ListItemProps } from './types'


const ListItem: React.FC<ListItemProps> = ({ item, done, index, toggleDone, removeItem }) =>{

        return(
                <li key={item.id}>                      
                <input className="checkruta" type="checkbox" checked={done || false}onChange={() => toggleDone(index)}/> 
                <span className={done ? 'completed' : ''}> {item.text} </span>     
                                 
                <button className="erase" onClick={() => removeItem(item.id)}>x</button>            
                                 </li>)         
        
}

export default ListItem