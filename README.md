This Repository is to pratice react daily


## 🚀 Day-1 (20-01-2026) - React Basics

### Topics Covered:

1. How to create a project
2. How to create functional components
3. How to use props
4. useState 


### Project Setup:
Used Vite for faster development experience compared to Create React App.

**Two ways to create a React app:**
- a. Create React App
- b. `npm create vite@latest projectName`

**To run the app:**
```bash
npm run dev
```



### Creating Functional Components:

**Steps:**
1. Create a new `.jsx` file (e.g., `Card.jsx`)
2. Write your component code
3. Export the component
4. Import and use it in `App.jsx`

### Using Props:

**What are Props?**
Props allow you to pass data from a parent component to a child component.

**How to Pass Props:**
```jsx
<Card title="Biryani" imageUrl="" price={355} />
```

**How to Access Props:**

**Option 1: Using object destructuring (Recommended)**
```jsx
const Card = ({ title, imageUrl, price }) => {
  return (
    <div>
      <p>{title}</p>
      <p>${price}</p>
    </div>
  )
}
```

**Option 2: Using props object**
```jsx
const Card = (props) => {
  return (
    <div>
      <p>{props.title}</p>
      <p>${props.price}</p>
    </div>
  )
}
```

### Map vs forEach:

**Why use `.map()` instead of `.forEach()`?**

- **`.forEach()`** - Executes a function for each element but returns `undefined` (doesn't return JSX)
- **`.map()`** - Returns a new array, perfect for rendering lists in React

**Key Point:** Always add a `key` prop when rendering lists to help React identify which items have changed.

### useState Hook:

**What is useState?**
useState is a React Hook that allows you to add state (dynamic data) to functional components. When state changes, the component re-renders.

**Syntax:**
```jsx
const [state, setState] = useState(initialValue);
```

- `state` - Current value
- `setState` - Function to update the state
- `initialValue` - Starting value

**Updating state**
```jsx
<button onClick={()=>setState(count+1)}>
```

**Key Points:**
- Import useState: `import { useState } from "react"`
- Call setState to update the state: `setCount(count + 1)`
- Component re-renders when state changes
- Never modify state directly (e.g., don't do `count = 5`), always use setState



## 🚀 Day-2 (21-01-2026) - Controlled & Uncontrolled Form

### Topics Covered:-
1. Controlled Form
2. Uncontrolled Form
3. Conditional Rendering

### Controlled Form :-
Controlled form are the form where react state controls the input values

```js
const [user,setUser] = useState({
  name:"",
})

const handleChange = (e)=>{
  setUser({
    ...user,
    [e.target.name] :e.target.value
  })
}
```

```html
<input type="text",name="username",value="{user.username}",onChange={handleChange}>
<br>
```

### Uncontrolled Form :-
Where DOM controls the input values , not react
- uses `useRef()`
- used for quick prototype

```js
const nameRef= useRef();
const handleSubmit = (e)=>{
  e.preventDefault();
  console.log(nameRef.current.value)
}
```
```html
<input type = "name" ref={nameRef}>
<button onClick={handleSubmit}>Submit</button>
```


### Conditional Rendering

-it means generating ui based on the condition
Use Cases:-
1. Login / Logout Button 
2. Show dashboard only if logged in

```html
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
```

## 🚀 Day-3 (22-01-2026) - To Do Application (using Nodejs & Expressjs)

Today i encountered a naming convention error while creating the react vite app

if we use .map() in rendering the array for a async data then errors will araise. so 
use `{Arrays.isArray(taskList) && taskList.map()}`



### API Documentation

#### Base URL
```
http://localhost:3000/api/v1
```

#### Data Models

**Task Object**
```json
{
  "_id": "ObjectId",
  "title": "string",
  "status": "boolean (default: false)",
  "__v": "number"
}
```

**Fields:**
- `_id`: Unique identifier for the task (MongoDB ObjectId)
- `title`: Task title/description (required)
- `status`: Completion status of the task (true = completed, false = pending)
- `__v`: Version field (managed by MongoDB)

---

#### Endpoints

##### 1. Create a New Task
**Endpoint:** `POST /add-task`

**Description:** Creates a new task in the database.

**Request Body:**
```json
{
  "title": "string (required)",
  "status": "boolean (optional, default: false)"
}
```

---

##### 2. Get All Tasks
**Endpoint:** `GET /tasks`

**Description:** Retrieves all tasks from the database.



##### 3. Get Task by ID
**Endpoint:** `GET /task/:id`

**Description:** Retrieves a specific task by its ID.

**Request Parameters:**
- `id` (URL parameter): MongoDB ObjectId of the task

---

##### 4. Update Task
**Endpoint:** `PUT /update/:id`

**Description:** Updates an existing task by its ID.

**Request Parameters:**
- `id` (URL parameter): MongoDB ObjectId of the task


---

##### 5. Delete Task
**Endpoint:** `DELETE /delete-task/:id`

**Description:** Deletes a task from the database.

**Request Parameters:**
- `id` (URL parameter): MongoDB ObjectId of the task


---

#### HTTP Status Codes

| Status Code | Description |
|-------------|-------------|
| 200 | OK - Request successful (GET, PUT, DELETE) |
| 201 | Created - Resource successfully created (POST) |
| 500 | Internal Server Error - Server-side error |

---

#### Usage Examples

**Add a task (JavaScript/Fetch):**
```javascript
fetch('http://localhost:3000/api/v1/add-task', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'Learn React',
    status: false
  })
})
.then(res => res.json())
.then(data => console.log(data));
```

**Get all tasks:**
```javascript
fetch('http://localhost:3000/api/v1/tasks')
  .then(res => res.json())
  .then(data => console.log(data.tasks));
```

**Update a task:**
```javascript
fetch('http://localhost:3000/api/v1/update/507f1f77bcf86cd799439011', {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ status: true })
})
.then(res => res.json())
.then(data => console.log(data));
```

**Delete a task:**
```javascript
fetch('http://localhost:3000/api/v1/delete-task/507f1f77bcf86cd799439011', {
  method: 'DELETE'
})
.then(res => res.json())
.then(data => console.log(data));
```

### Client Side
Features Implemented:
1. Add Task
2. View All Tasks
3. Update Task Status & Task Title
4. Delete Task



## 🚀 Day-4 (23-01-2026) - 
### Topics Covered:
1. React Router Dom
2. Nested Routing
3. URL Parameters

### React Router Dom
React Router Dom is a library used to handle routing in React applications. It allows you to create single-page applications with navigation without refreshing the page.
### Installation
To use React Router Dom, you need to install it via npm or yarn:
```bash
npm install react-router-dom
```
### Basic Setup
To set up routing in your React application, you need to wrap your app with the `BrowserRouter` component and define routes using the `Routes` and `Route` components.
```jsx  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Home from './Home';
import About from './About';
import Contact from './Contact';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
```

### Nested Routing
Nested routing allows you to have routes within routes. This is useful for creating complex navigation structures.

**Example:**
```jsx
<Routes>
  <Route path="/dashboard" element={<Dashboard />}>
    <Route path="profile" element={<Profile />} />
    <Route path="settings" element={<Settings />} />
  </Route>
</Routes>
```

To display nested routes, use the `<Outlet />` component in the parent component:
```jsx
import { Outlet } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Outlet />
    </div>
  );
}
```

### URL Parameters
URL parameters allow you to pass dynamic values in the URL and access them in your components.

**Defining URL Parameters:**
```jsx
<Route path="/user/:id" element={<UserProfile />} />
```

**Accessing URL Parameters:**
```jsx
import { useParams } from 'react-router-dom';

function UserProfile() {
  const { id } = useParams();
  
  return (
    <div>
      <h1>User ID: {id}</h1>
    </div>
  );
}
```

### Navigation
Use the `<Link>` component or `useNavigate` hook for navigation:

**Using Link:**
```jsx
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
```

**Using useNavigate Hook:**
```jsx
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/about')}>
      Go to About
    </button>
  );
}
```

---

## 📚 Key Learning Concepts

### React Hooks Used:
- **useState** - Manage component state
- **useRef** - Access DOM elements directly
- **useParams** - Extract URL parameters
- **useNavigate** - Programmatic navigation

### Best Practices:
1. Always use functional components with hooks
2. Use destructuring for props
3. Add key prop when rendering lists
4. Never modify state directly
5. Use .map() for rendering arrays, not .forEach()
6. Keep components reusable and single-responsibility

### Project Structure:
```
React/
├── Day-1/          (React Basics - Components, Props, useState)
├── Day-2/          (Forms - Controlled & Uncontrolled)
├── Day-3/          (Full-stack Todo App with Node.js & MongoDB)
│   ├── Client/     (React Frontend)
│   └── Server/     (Node.js Express Backend)
├── Day-4/          (React Router - Routing & Navigation)
└── README.md       (This file)
```

---

## 🎯 What You'll Learn

- ✅ React fundamentals and component architecture
- ✅ State management with hooks
- ✅ Form handling (controlled & uncontrolled)
- ✅ API integration with Node.js/Express backend
- ✅ Client-server communication with Fetch API
- ✅ Routing and navigation in single-page applications
- ✅ Building real-world applications

---

## 🛠️ Technologies Used

- **Frontend:** React, Vite, React Router DOM
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Tools:** Fetch API, npm/yarn

---

## 📝 Notes

- This is a daily practice repository for learning React
- Each day covers specific concepts and builds on previous knowledge
- Practical projects included to reinforce learning
- Code examples are provided for reference and practice

---

## 🚀 Day-5 (24-01-2026) - Search Filter
### Topics Covered:
1. Search Filter Implementation


### Search Filter Implementation:-

- i used filter method to filter the names based on the input value
```js
  const filteredData = names.filter((name)=>{
      return name.toLowerCase().includes(inputValue.toLowerCase())
  })
```
