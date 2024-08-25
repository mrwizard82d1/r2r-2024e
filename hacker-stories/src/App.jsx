import './App.css'

const title = "React (Using Vite)";

function App() {
  console.log(`title: ${title}`);

  return (
    <div>
      <h1>Hello, {title}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
