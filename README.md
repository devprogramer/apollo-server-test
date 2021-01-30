# apollo-server-test




npm install
npm migrate
npx serverless offline start


Deploy
serverless deploy --stage prod



Examples


query{
  getTodo{
    description
    id
  }
 
}

mutation {
  setStatus(id: 2, status:1){
    status
    description
  }
}


mutation {
  removeTodo(id: 1)
}

mutation {
  addTodo(description: "Test", status:0)
}

