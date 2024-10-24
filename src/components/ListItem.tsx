import React from "react"
import { ListItemProps } from './types'


const ListItem: React.FC<ListItemProps> = ({ item, done, index, toggleDone }) =>{

        return(
                <li key={item.id}>                      
                <input type="checkbox" checked={done[index] || false} onChange={() => toggleDone(index)}/> 
                <span className={done[index] ? 'completed' : ''}> {item.text} </span>     
                                 </li>)                                                           //om det ändras kryssas boxen
        
}

export default ListItem