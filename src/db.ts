const knex  = require("knex");

import { attachOnDuplicateUpdate } from "knex-on-duplicate-update";

attachOnDuplicateUpdate();


// knex.QueryBuilder.extend("toArray", function (res: String): any{

//   console.log(res)
//   return JSON.parse(JSON.stringify(res));
// });
const db = knex({
  client: 'pg',
  connection: {
    host: "127.0.0.1",
    user: "todo",
    password: "1",
    database: "todo"
  }
});

// const db = function(){return 1};

export default db;