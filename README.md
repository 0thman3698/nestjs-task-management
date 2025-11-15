# 📋 NestJS Task Management Application

A robust and secure task management REST API built with NestJS, featuring JWT authentication, PostgreSQL database, and comprehensive task CRUD operations.

## ✨ Features

- 🔐 **JWT Authentication** - Secure user authentication and authorization
- 📝 **Task Management** - Full CRUD operations for tasks
- 🔍 **Task Filtering** - Filter tasks by status
- 👤 **User-specific Tasks** - Each user can only access their own tasks
- ✅ **Task Status Management** - Update task status (OPEN, IN_PROGRESS, DONE)
- 🗄️ **PostgreSQL Database** - TypeORM integration for data persistence
- 🔒 **Input Validation** - Request validation using class-validator
- 🌍 **Environment Configuration** - Multi-stage environment support (dev/prod)
- 🎯 **Transform Interceptors** - Consistent API response formatting

## 🛠️ Tech Stack

- **Framework**: NestJS 11.x
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: TypeORM
- **Authentication**: JWT (Passport)
- **Validation**: class-validator, class-transformer
- **Configuration**: @nestjs/config with Joi validation

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/0thman3698/nestjs-task-management.git
cd nestjs-task-management
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create `.env.stage.dev` file in the root directory:
```env
STAGE=dev
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=your_username
DB_PASSWORD=your_password
DB_DATABASE=task_management
JWT_SECRET=your_jwt_secret_key
PORT=3000
```

Create `.env.stage.prod` file for production:
```env
STAGE=prod
DB_HOST=your_production_host
DB_PORT=5432
DB_USERNAME=your_production_username
DB_PASSWORD=your_production_password
DB_DATABASE=task_management_prod
JWT_SECRET=your_production_jwt_secret_key
PORT=3000
```

4. Make sure PostgreSQL is running and the database is created.

## 🚀 Running the Application

### Development Mode
```bash
npm run start:dev
```

### Production Mode
```bash
npm run build
npm run start:prod
```

### Debug Mode
```bash
npm run start:debug
```

The application will be running on `http://localhost:3000`

## 📚 API Endpoints

### Authentication

#### Sign Up
```http
POST /auth/signup
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123"
}
```

#### Sign In
```http
POST /auth/login
Content-Type: application/json

{
  "username": "john_doe",
  "password": "securePassword123"
}
```

**Response:**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Tasks (Protected Routes - Requires JWT Token)

All task endpoints require authentication. Include the JWT token in the Authorization header:
```http
Authorization: Bearer <your_jwt_token>
```

#### Get All Tasks
```http
GET /tasks
GET /tasks?status=OPEN
GET /tasks?status=IN_PROGRESS
GET /tasks?status=DONE
GET /tasks?search=keyword
```

#### Get Task by ID
```http
GET /tasks/:id
```

#### Create Task
```http
POST /tasks
Content-Type: application/json

{
  "title": "Complete project documentation",
  "description": "Write comprehensive README and API documentation"
}
```

#### Update Task Status
```http
PATCH /tasks/:id/status
Content-Type: application/json

{
  "status": "IN_PROGRESS"
}
```

**Available statuses:** `OPEN`, `IN_PROGRESS`, `DONE`

#### Delete Task
```http
DELETE /tasks/:id
```

## 📁 Project Structure

```
src/
├── auth/                    # Authentication module
│   ├── dto/                # Data Transfer Objects
│   ├── auth.controller.ts  # Auth endpoints
│   ├── auth.service.ts     # Auth business logic
│   ├── auth.module.ts      # Auth module definition
│   ├── jwt.strategy.ts     # JWT passport strategy
│   └── user.entity.ts      # User entity
├── tasks/                   # Tasks module
│   ├── dto/                # Task DTOs
│   ├── tasks.controller.ts # Task endpoints
│   ├── tasks.service.ts    # Task business logic
│   ├── tasks.module.ts     # Tasks module definition
│   ├── task.entity.ts      # Task entity
│   └── task-status.enum.ts # Task status enum
├── app.module.ts           # Root module
├── main.ts                 # Application entry point
├── config.schema.ts        # Environment validation schema
└── transform.interceptor.ts # Response transformation
```

## 🧪 Testing

Run unit tests:
```bash
npm run test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Run tests with coverage:
```bash
npm run test:cov
```

Run end-to-end tests:
```bash
npm run test:e2e
```

## 🔧 Scripts

- `npm run build` - Build the application
- `npm run start` - Start the application
- `npm run start:dev` - Start in development mode with watch
- `npm run start:prod` - Start in production mode
- `npm run start:debug` - Start in debug mode
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run unit tests
- `npm run test:e2e` - Run end-to-end tests

## 🔐 Security Features

- Password hashing using bcrypt
- JWT token-based authentication
- User-specific task access (users can only access their own tasks)
- Input validation and sanitization
- Environment variable protection

## 📝 Database Schema

### User Entity
- `id` (UUID, Primary Key)
- `username` (String, Unique)
- `password` (String, Hashed)
- `tasks` (One-to-Many relationship with Task)

### Task Entity
- `id` (UUID, Primary Key)
- `title` (String)
- `description` (String)
- `status` (Enum: OPEN, IN_PROGRESS, DONE)
- `user` (Many-to-One relationship with User)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is private and unlicensed.

## 👤 Author

Created by [0thman3698](https://github.com/0thman3698)

---

**Note**: Make sure to keep your `.env` files secure and never commit them to version control. The `.gitignore` file is already configured to exclude them.

