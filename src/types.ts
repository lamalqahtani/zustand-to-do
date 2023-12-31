export interface ITask{
    title: string;
    status: boolean;
}
export interface IStore{
    tasks: ITask[];
    addTask: (task: ITask)=> void;   
}