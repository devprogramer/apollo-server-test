# Apollo-server-test. Quick start


> npm install
> 
> npm migrate
## Offline start

> serverless offline start
* or
> npx serverless offline start

## Deploy 
> serverless deploy --stage prod

## Query examples

```code
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
  addTodo(description: "Test")
}

```
