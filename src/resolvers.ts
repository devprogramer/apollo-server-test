import TodoModel from  "./TodoModel";
const serverless = require("serverless");

const todoModel = new TodoModel();

interface TodoInput {
	description: string;
	status: number;
}





export const resolvers = {
  Query: {
    getTodo: async (id: number) => {
    	return await todoModel.get();	
    },
  },

  Mutation: {
  	addTodo: async (_:any,  {description}: TodoInput ) => {
  		return  await todoModel.create(description);
  	},
  	removeTodo: async(_:any, {id}: any ) => {
  		return  await todoModel.remove(id);
  	},
  	setStatus: async (_:any, {id, status}: any ) => {
  		return await todoModel.setStatus(id, status);
  	}
  }
};