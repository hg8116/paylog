# Paylog

Paylog is a full-stack expense tracking application. It provides features like user authentication, group-based expense tracking, and individual balances.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **Docker** (for running the PostgreSQL database)
- **Git** (to clone the repository)

---

## Steps to Set Up the Project

### Clone the Repository
```bash
git clone git@github.com:hg8116/paylog.git
```

---

### Run the Server

1. Navigate to the server directory:
   ```bash
   cd paylog/server
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Create a `.env` file and add the following environment variable:
   ```env
   DATABASE_URL=<Your_PostgreSQL_Connection_URL>
   ```
   Example:
   ```env
   DATABASE_URL=postgresql://postgres:postgres@localhost:5432/postgres
   ```

4. Start a PostgreSQL database using Docker:
   ```bash
   docker run -e POSTGRES_PASSWORD=postgres -d -p 5432:5432 postgres
   ```

5. Run the Prisma migrations to set up the database schema:
   ```bash
   npx prisma migrate dev --name init
   ```

6. Seed the database (if applicable):
   ```bash
   npx prisma db seed
   ```

7. Start the server:
   ```bash
   npm start
   ```

The server will be running on `http://localhost:5000` by default.

---

### Run the Client

1. Navigate to the client directory:
   ```bash
   cd paylog/client
   ```

2. Install dependencies:
   ```bash
   npm i
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The client will be running on `http://localhost:5173` by default.

---

## Usage

1. Open the client in your browser (`http://localhost:5173`).
2. Sign up or log in to your account.
3. Create groups, add expenses, and view individual balances.

---

## Troubleshooting

- **Database connection issues**: Ensure Docker is running and the PostgreSQL container is started correctly.
- **Prisma errors**: Check that the `DATABASE_URL` in your `.env` file matches the Docker container credentials.
- **Port conflicts**: Ensure no other services are running on ports `5000` (server) and `5432` (PostgreSQL).

---

## Future Enhancements

- Needs a frontend.
- Needs a backend for the frontend

---

For further questions or contributions, feel free to open an issue or a pull request on the [repository](https://github.com/hg8116/paylog).


