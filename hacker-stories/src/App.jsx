import './App.css'

const welcome = {
  greeting: 'Hey',
  title : "React (Using Vite)",
}

function App() {
  const makeGreeting = () => {return `${welcome.greeting}, ${welcome.title}`;}

  console.log(makeGreeting());

  return (
    <div>
      <h1>{makeGreeting()}</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
    </div>
  )
}

export default App
