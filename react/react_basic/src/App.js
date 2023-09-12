import './App.css';

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
  
}
function Doubl() {
  const numbers = [1, 2, 3, 4, 5];
  const doubled = numbers.map((number) => number * 2);

  return (
    <div>
      <h1>Doubled Numbers:</h1>
      <ul>
        {doubled.map((value) => (
          <li>{value}</li>
        ))}
      </ul>
    </div>
  );
}
function Test()
{
  const numbers = [1, 2, 3, 4, 5];
  const listItems = [];

  numbers.forEach((number, index) => {
    listItems.push(<li key={index}>{number}</li>);
  });

  return (
    <div>
      <h1>Foreach Loop</h1>
      <ul>
        {listItems}
      </ul>
    </div>
  );
}
function App() {
  return (
    <div>
      
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <br />
      <Doubl/>
      <br/>
      <Test/>
      <br/>
      <Garage/>
    </div>
  );
}
function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Garage() {
  const carName = "Ford";
  return (
    <>
        <h1>Who lives in my garage?</h1>
        <Car brand={ carName } />
    </>
  );
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
