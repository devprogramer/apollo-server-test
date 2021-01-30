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

	async create(description: string): Promise<number>{
		const [id]  = await db("todo")
		.insert({ "description": description})
		.returning('id')
		.into('todo');
		return id
	}

	async remove(id: number): Promise<number>{
		 await db("todo")
		 .delete()
		 .where({id: id});
		return id;
	}

	async setStatus(id: number, status: number): Promise<Todo>{
		await db("todo")
		.update({ "status": status})
		.where({id: id});

		return await db("todo")
			.where({id:id})
			.first();

	}
}

export default TodoModel;