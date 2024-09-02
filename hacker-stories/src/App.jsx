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
  console.log(list);

  return (
    <>
      <h1>My Hacker Stories</h1>
      <div>
        <label htmlFor="search">Search: </label>
        <input id="search" type="text"/>
      </div>
      <ul>
        {list.map((item) =>
          <li key={item.objectId}>
            <a href={item.url}>{item.title}</a>
            <div>{item.author}</div>
            <div>{item.num_comments}</div>
            <div>{item.points}</div>
          </li>)
        }
      </ul>
    </>
  )
}

export default App
