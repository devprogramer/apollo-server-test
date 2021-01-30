import db from "./db";


interface Todo {
  id: number;
  description: string;
  created_at: string;
  status: number;
}


class TodoModel{

	async get(): Promise<Todo[]>{
		return await db("todo")		
	}

	async create(description: string, status: number): Promise<Number>{
		const [id]  = await db("todo")
		.insert({ "description": description, "status": status})
		.returning('id')
		.into('todo');
		return id
	}

	// async update(input: Todo): Promise<Number>{
	// 	return 0;	
	// }

	// async setStatus(id: number, status: number): Promise<void>{

	// }
}

export default TodoModel;