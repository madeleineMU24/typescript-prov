import React, { ChangeEvent, useState } from "react"
import { InputProps } from "./types";



const Input: React.FC<InputProps> = ({ addItem }) => {  
    const [task, setTask] = useState('');                       
              
    return (                                
        <section>


                <input type="text" 
                id="textRuta" 
                placeholder="Lägg till ny todo.." 
                value={task} 
                    onChange={(e:ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}/>
                <button className="knapp" onClick={() => {
                    if (task.trim()){
                        addItem(task);
                        setTask('')}
                        }}>+</button>

        </section>
    )
}

export default Input