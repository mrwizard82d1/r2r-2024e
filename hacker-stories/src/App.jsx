import './App.css'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

function App() {
  return (
    <>
      <h1>My Hacker Stories</h1>
      <Search/>

      <hr />

      <List />
    </>
  )
}

const List = () => (
  <ul>
    {list.map((item) =>
      <li key={item.objectId}>
            <span>
            <a href={item.url}>{item.title}</a>
            </span>
        <span>Author: {item.author}</span>
        <span>Comments: {item.num_comments}</span>
        <span>Points: {item.points}</span>
      </li>)
    }
  </ul>
)

const Search = () => {
  const handleChange = (event) => {
    // Handling a synthetic event
    console.log(event);

    // Value of target (here: the input HTML element)
    console.log(event.target.value);
  }

  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

export default App
