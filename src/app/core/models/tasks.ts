export interface Task {
    id: number
    text: string
    status: string
}

export interface CreateTaskDTO extends Omit<Task, 'id'> { }

export interface UpdateTaskDTO extends CreateTaskDTO { }