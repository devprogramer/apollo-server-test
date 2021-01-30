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
	  addTodo(description: String, status: Int): Int
	}
`;