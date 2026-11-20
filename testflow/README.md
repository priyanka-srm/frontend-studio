# TestFlow

A React-based task management application built to demonstrate practical React development, component architecture, API integration, automated testing, and modern frontend engineering practices.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Vitest](https://img.shields.io/badge/Vitest-4-6E9F18?logo=vitest&logoColor=white)](https://vitest.dev/)
[![Tests](https://img.shields.io/badge/Tests-63%20passing-success)](#testing)
[![TypeScript](https://img.shields.io/badge/TypeScript-Examples-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

## Overview

TestFlow is a task management application developed as a React Testing Lab and Capstone project.

It provides a responsive task workboard where users can create, search, filter, complete, and delete tasks. The application handles asynchronous API operations, form validation, loading and error states, and optimistic UI updates with rollback behavior.

Beyond the core application, TestFlow includes practical implementations of reusable React patterns, routing, TypeScript concepts, error boundaries, and automated testing.

The project focuses on writing maintainable, reusable, and testable frontend code.

## Features

### Task Management

- Responsive task workboard.
- Create tasks using an accessible modal form.
- Required-field validation.
- Task descriptions and priority selection.
- Search tasks by title and description.
- Filter tasks by All, Active, and Completed.
- Mark tasks as completed or active.
- Delete tasks.
- Loading, error, and empty states.
- Optimistic updates with rollback on API failures.

### Application Architecture

- React Router-based navigation.
- Shared application layout.
- Dedicated task detail page.
- Not-found page for unmatched routes.
- Reusable components and custom hooks.
- Centralized API service.
- Error boundary for rendering errors.

### React Concepts

- Custom Hooks.
- Higher-Order Components (HOCs).
- Render Props and Function Children.
- Compound Components using Context.
- Controlled and Uncontrolled Components.
- TypeScript props, state, events, and generics.
- Lazy Loading with `React.lazy` and `Suspense`.

### Testing and Code Quality

- Component and interaction testing.
- API and asynchronous UI testing.
- Custom hook testing.
- Snapshot testing.
- ESLint and React Hooks rules.
- Prettier formatting.
- TypeScript type checking.
- Production build verification.

## Tech Stack

| Category       | Technologies                              |
| -------------- | ----------------------------------------- |
| Frontend       | React 19, JavaScript, CSS                 |
| Build Tool     | Vite                                      |
| Routing        | React Router                              |
| API            | JSON Server, Fetch API                    |
| Testing        | Vitest, React Testing Library, User Event |
| Error Handling | React Error Boundary                      |
| TypeScript     | TypeScript                                |
| Code Quality   | ESLint, Prettier                          |

## Project Structure

```text
testflow/
├── db.json
├── package.json
├── package-lock.json
├── eslint.config.js
├── tsconfig.json
├── vitest.config.js
├── .prettierrc
├── README.md
└── src/
    ├── components/
    │   ├── ErrorBoundary.jsx
    │   ├── TaskCard/
    │   ├── TaskList/
    │   ├── accordion/
    │   ├── lazyLoading/
    │   ├── renderProps/
    │   ├── select/
    │   ├── typescript/
    │   └── withLoading/
    ├── data/
    │   └── tasks.js
    ├── hooks/
    │   └── useTaskFilters.js
    ├── layouts/
    │   └── AppLayout.jsx
    ├── pages/
    │   ├── TaskDetailPage.jsx
    │   ├── TaskDetailPage.test.jsx
    │   └── NotFoundPage.jsx
    ├── test/
    │   └── setup.js
    ├── App.jsx
    ├── App.test.jsx
    ├── AppRoutes.jsx
    ├── App.css
    ├── index.css
    └── main.jsx
```

## Getting Started

### Prerequisites

- Node.js
- npm
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/priyanka-srm/frontend-studio.git
```

### 2. Navigate to TestFlow

```bash
cd frontend-studio/testflow
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env.local` file inside the `testflow` directory.

Add the following configuration:

```env
VITE_API_URL=http://localhost:3000
```

**Important:** The application automatically appends `/tasks` to the configured base URL. Do not include `/tasks` in the environment variable.

Keep local environment files and private credentials out of version control.

### 5. Start the Application

```bash
npm run dev
```

This command starts Vite and JSON Server together.

| Service  | Local URL                   |
| -------- | --------------------------- |
| Frontend | http://localhost:5173/      |
| Task API | http://localhost:3000/tasks |

The local task data is stored in `db.json`.

## Available Scripts

| Command                | Description                  |
| ---------------------- | ---------------------------- |
| `npm run dev`          | Start Vite and JSON Server   |
| `npm run build`        | Create a production build    |
| `npm run preview`      | Preview the production build |
| `npm run lint`         | Run ESLint                   |
| `npm run typecheck`    | Run TypeScript checks        |
| `npm test -- --run`    | Run all tests once           |
| `npm run format`       | Format project files         |
| `npm run format:check` | Check code formatting        |

## API Documentation

TestFlow uses JSON Server as its local REST API.

API operations are maintained in:

`src/data/tasks.js`

The local database is maintained in:

`db.json`

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| GET    | `/tasks`     | Fetch all tasks    |
| GET    | `/tasks/:id` | Fetch a task by ID |
| POST   | `/tasks`     | Create a task      |
| PATCH  | `/tasks/:id` | Update a task      |
| DELETE | `/tasks/:id` | Delete a task      |

The API base URL is configured using the `VITE_API_URL` environment variable.

## Testing

TestFlow uses Vitest and React Testing Library to verify application behavior from a user's perspective.

The test suite covers:

- Dashboard rendering and task loading.
- Task creation and form validation.
- Task updates and deletion.
- API success and failure scenarios.
- Search and status filtering.
- Loading, error, and empty states.
- Optimistic update rollback behavior.
- Task detail page behavior.
- Error boundary behavior.
- Higher-Order Component loading behavior.
- Render props and function children.
- Compound component interactions.
- Controlled and uncontrolled Select behavior.
- Lazy-loading behavior.

### Test Results

Latest local verification:

- **Test Files:** 8 passed.
- **Tests:** 63 passed.
- **Failed Tests:** 0.

Run the test suite:

```bash
npm test -- --run
```

## Code Quality

### ESLint

```bash
npm run lint
```

### TypeScript

```bash
npm run typecheck
```

### Prettier

```bash
npm run format:check
```

### Production Build

```bash
npm run build
```

The project has successfully passed local linting, TypeScript checks, automated tests, and production build verification.

## Learning Outcomes

Through TestFlow, the project demonstrates practical experience with:

- Building reusable React components.
- Managing state and controlled forms.
- Creating and testing custom hooks.
- Integrating REST APIs.
- Handling asynchronous operations.
- Implementing optimistic UI updates.
- Writing component and interaction tests.
- Organizing applications with React Router.
- Handling rendering errors with error boundaries.
- Applying HOCs, render props, and compound components.
- Understanding TypeScript with React.
- Implementing lazy loading and Suspense.
- Maintaining code quality with ESLint and Prettier.
- Verifying production builds.
- Managing development workflows with Git.

## Project Links

- **GitHub Repository:** [Frontend Studio](https://github.com/priyanka-srm/frontend-studio)
- **TestFlow Source Code:** [View TestFlow](https://github.com/priyanka-srm/frontend-studio/tree/main/testflow)

## Project Status

TestFlow combines a functional React task management application with practical demonstrations of React patterns, automated testing, routing, API integration, and frontend code quality practices.
