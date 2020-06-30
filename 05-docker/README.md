# 05 -Docker+Deno: Containerize a Deno Hello World server

deno run --allow-net main.ts


### Building 

docker build -t deno-app .

### Running

docker-compose up -d --build

curl localhost:6667

