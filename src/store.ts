import {create} from 'zustand';
import { IStore } from './types';


const useStore = create<IStore>((set)=>({
    tasks: [{
        title: "do my homework",
        status: true
    },
    {
        title: "read a book",
        status: false
    },
    {
        title: "program a web app",
        status: true
    }],
    addTask:(task)=> set((state)=> ({tasks: [...state.tasks, {title: task.title, status:task.status}]})),
}));

export default useStore;
