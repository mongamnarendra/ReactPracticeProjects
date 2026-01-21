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

```jsx
      <div>
        {isLoggedIn ? (
          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>
        ) : (
          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        )}
      </div>
```






