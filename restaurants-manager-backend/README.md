# Restaurants Manager Backend

Spring Boot REST API for the Angular application in `../restaurants-manager`.

## Requirements

- JDK 21 or newer
- Maven 3.9 or newer
- MySQL Server running on `localhost:3306`
- A MySQL account with permission to create the `spring_DB` database and its tables

## Run

From this directory:

```powershell
mvn spring-boot:run
```

The API listens on `http://localhost:8090`. It connects to MySQL database `spring_DB` and creates the database if it does not exist, then Hibernate creates or updates the tables. The cuisine list and five sample restaurants are inserted on first startup.

The default MySQL username is `root`. The password defaults to blank; set `MYSQL_PASSWORD` before starting Spring Boot if your MySQL root account has a password. For PowerShell:

```powershell
$env:MYSQL_PASSWORD = "your-mysql-password"
mvn spring-boot:run
```

MySQL must already be running. `createDatabaseIfNotExist=true` asks MySQL to create the schema, so the configured account must have `CREATE` privileges. You can verify the schema and tables with `SHOW DATABASES;` and `USE spring_DB; SHOW TABLES;` in the MySQL client.

## API

- `GET /api/restaurants`
- `GET /api/restaurants/{id}`
- `POST /api/restaurants`
- `PUT /api/restaurants/{id}`
- `DELETE /api/restaurants/{id}`
- `GET /api/restaurants/by-cuisine/{idCuisine}`
- `GET /api/restaurants/search?name=trattoria`
- `GET /api/cuisine-types`
- `POST /api/cuisine-types`
- `PUT /api/cuisine-types/{id}`
- `DELETE /api/cuisine-types/{id}`
- `POST /api/auth/login`

A restaurant JSON object uses the Angular model fields, for example:

```json
{
  "name": "New Restaurant",
  "address": "Tunis",
  "cuisineType": { "idCuisine": 1 },
  "dateOpened": "2024-01-15",
  "capacity": 40,
  "phoneNumber": "+216 00 000 000",
  "rating": 4.2
}
```

For this classroom demo, login accepts `admin` / `123` (ADMIN) and `yasin` / `123` (USER). These credentials are for local development only and must be replaced with proper password hashing and token-based authentication before deployment.
