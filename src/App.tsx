import React, { useState } from 'react';
import Input from './components/Input'
import Todos from './components/Todos'
import { Todo } from "./components/types"
import './components/style.css'

             

const App: React.FC = () => {             
      const [items, setItems] = useState<Todo[]>([]);

        const addItem = (newItemText: string) => {
        const newItem: Todo ={
          id: Date.now().toString(),
          text: newItemText,
          completed: false,
        };
        setItems([...items, newItem]);
      }
      const removeItem = (id: string) => {
        setItems(items.filter(item => item.id !== id));
      }

  return (
    <main>
    <h1>MADDE'S TODOS:</h1>       
    <Todos items={items} removeItem={removeItem}/>
    <Input addItem={addItem}/>
    </main>
  )
}

export default App
