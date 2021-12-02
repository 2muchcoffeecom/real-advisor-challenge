## Getting Started
1. Create a .env file at the root of the project like .env.example
2. [Install Docker Compose](https://docs.docker.com/compose/install/)

## Launch of the project
To start the project, you need to run the command
```bash
docker-compose up
```

After executing the command, the following steps will be performed:
1. 3 containers will be created
   1. Postgres
   2. Hasura
   3. Next
2. Metadata will be uploaded to Hasura
3. In Hasura, will be run migrations to create a table and fill it with data

After executing the script, there will be 2 url access
1. Frontend - [http://localhost:3000/best-hello-world-ever](http://localhost:3000/best-hello-world-ever)
2. Hasura console - [http://localhost:8080/](http://localhost:8080/)
