import * as React from 'react';
import './style.css';

export default function App() {
  const employees = [
    { id: 4, name: 'Dean', country: 'Denmark' },
    { id: 3, name: 'Carl', country: 'Canada' },
    { id: 2, name: 'Bob', country: 'Belgium' },
    { id: 1, name: 'Alice', country: 'Austria' },
    { id: 5, name: 'Ethan', country: 'Egypt' },
  ];
  // const [count, setCount] = React.useState(0);

  // const handleSave = () => {
  //   // e.preventDefalut();

  //   localStorage.setItem('count', count);
  // };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      {employees.sort().map((x) => {
        return (
          <div>
            <ul key={x.id}>
              <li>{x.id}</li>
              <li>{x.name}</li>
              <li>{x.country}</li>
            </ul>
          </div>
        );
      })}

      {/* <button onClick={() => setCount(count + 1)}>Increment</button>
      Count: {count}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={handleSave}>Save</button> */}
    </div>
  );
}
