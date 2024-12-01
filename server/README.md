docker run  -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
npx prisma migrate dev --name init
npx prisma db seed
npm start

docker exec -it sharp_curie /bin/bash

