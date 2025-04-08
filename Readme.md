## Project Structure

Dockerfile               # Docker build configuration  
docker-compose.yml       # Compose service definition  
index.js                 # Express app  
package.json             # Dependencies

## Docker Instructions

1. Clone the project

git clone https://github.com/hepeilin0710/sit323-2025-prac5p.git  
cd 5.1P

2. Build the Docker image

docker build -t my-web-app .

3. Run with Docker Compose

docker-compose up

The service will run at http://localhost:3000

4. Test the API using Postman

Example (POST /add):

curl -X POST http://localhost:3000/add -H "Content-Type: application/json" -d '{"num1": 10, "num2": 5}'

5. Push image to Docker Hub 

docker login  
docker tag my-web-app ygyunge/my-web-app  
docker push ygyunge/my-web-app