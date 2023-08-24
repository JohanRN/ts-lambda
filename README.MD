1. Ejecuta npm install.

2. Para instalar Redis, debes tener previamente instalado Docker. Ejecuta el siguiente comando para iniciar un contenedor de Redis:
   docker run -d --name redis-stack -p 6379:6379 -p 8001:8001 redis/redis-stack:latest

3. Para ejecutar el proyecto, simplemente escribe npm run dev.

4. Si deseas ejecutar las pruebas con Jest, utiliza el comando npm test.