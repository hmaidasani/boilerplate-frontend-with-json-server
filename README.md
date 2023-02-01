Boilerplate Frontend With JSON Server
--------------------
Simple Boilerplate Project structure for a react frontend and json-server backend with db.json and dockerized

What's included
--------------------
- Fully dockerized application (docker-compose starts app services)
- React front-end
- JSON-Server (express with lowdb) <https://github.com/typicode/json-server>
- db.json (lowdb)

Getting Started
--------------------
#### Dependencies
- Docker
- Docker Compose

#### Installation instructions
Step to run application:
`docker-compose up`
This will build and start the following services as docker containers:
- client
- server

The server can be accessed at `localhost:8000` and the client at `localhost:3000`

Modify `db.json` for data model change. Refer to `json-server` docs for adjustments to backend. Modify `App.js` or add new components.