This Repository is to pratice react daily


## 🚀 Day-1 (20-01-2026) - React Basics

### Topics Covered:

1.How to create a project
2.How to create functional components
3.How to use props 


1. 
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



