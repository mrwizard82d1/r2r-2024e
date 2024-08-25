import './App.css'

const welcome = {
  greeting: 'Hey',
  title : "React (Using Vite)",
}

function App() {
  console.log(`${welcome.greeting}, ${welcome.title}`);

  return (
    <div>
      <h1>{`${welcome.greeting}, ${welcome.title}`}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
