export type Todo = {
    id: string;
    text: string;
    completed: boolean;
    
}

export type InputProps = {
    addItem: (text: string) => void;
}


export type TodosProps = {
    items:Todo[]
}
          

export type ListItemProps = {
    item: Todo;
    done: boolean[];
    index: number;
    toggleDone: (index: number) => void;           
}


