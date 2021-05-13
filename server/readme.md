## User management API

#### How to start the server

    npm i
    npm start

#### How to start in dev mode

    npm run dev

#### API End Points

| S.No | Api url                                        | Type   | Description                |
| ---- | ---------------------------------------------- | ------ | -------------------------- |
| 1.   | http://localhost:7000/                         | GET    | Get all user list          |
| 2.   | http://localhost:7000/addUser                  | POST   | Add new user               |
| 3.   | http://localhost:7000/editUser                 | PUT    | Edit user details          |
| 4.   | http://localhost:7000/deActivateUser/<USER_ID> | PUT    | De activate any user by id |
| 5.   | http://localhost:7000/activateUser/<USER_ID>   | PUT    | Activate any user by id    |
| 6.   | http://localhost:7000/deleteUser/<USER_ID>     | DELETE | Delete any user by id      |
