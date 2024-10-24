import React, { useState, useEffect } from "react"
import ListItem from "./ListItem";
import { TodosProps } from "./types"



const Todos: React.FC<TodosProps> = ({ items, removeItem }) => {
    const [done, setDone] = useState<boolean[]> (items.map(() => false)); 
                                                     
    useEffect(() => {
        if (done.length !== items.length) {
            setDone(items.map(() => false));
        } 
    }, [items]);

    const toggleDone = (index: number) => {
        setDone((prevDone) => { 
        const newDone = [...prevDone];
        newDone[index] = !newDone[index];
        return newDone
    }) 
}
    
    return(
                                                           
        <>                        
    <ul className="list">{items.map((item, index) => (
        <ListItem 
        key={item.id}
        item={item} 
        done={done[index]} 
        index={index} 
        toggleDone={toggleDone}
        removeItem={removeItem}
        />))}</ul>
        </>
    )
}                          

export default Todos