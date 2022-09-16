import logo from './logo.svg';
import './App.css';

let name = "Maulik Patel"; 
function App() {
  return (
    <>
    <nav>
      <li>Home</li>
      <li>Plans</li>
      <li>Contact Us</li>
    </nav>
    <div className="container">
      <h1>Hello {name}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates, alias similique! Earum ex animi autem atque, praesentium repellat nobis sunt?</p>
    </div>
    </>
  );
}

export default App;
