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
  	addTodo: async (_:any,  {description, status}: TodoInput ) => {
  		return  await todoModel.create(description, status);
  	},
  }
};