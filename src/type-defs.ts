import { gql } from 'apollo-server-lambda';

export const typeDefs = gql`

	type Todo {
		id: ID
    	description: String
    	created_at: String
    	status: Int 
	
	}
	
	type Query {
	    getTodo: [Todo]
	}

	type Mutation {
	  addTodo(description: String): Int
	  removeTodo(id: ID!): Int
	  setStatus(id: ID!, status: Int): Todo
	}
`;