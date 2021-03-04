import logo from './logo1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Coffee Application!</h1>

        <form>
            <label for="roast-selection"></label>
            <select id="roast-selection">
                <option>light</option>
                <option>medium</option>
                <option>dark</option>
            </select>
            <input id="submit" type="submit" />
        </form>

        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ROAST</th>
                </tr>
            </thead>
            <tbody id="coffees"></tbody>
        </table>

        <p>
          Please <code>check out</code> gitHub.
        </p>
        <a
          className="App-link"
          href="https://github.com/Cooks-Johns/coffee-app"
          target="_blank"
          rel="noopener noreferrer">
          click me
        </a> 

        <script src="main.js"></script>
      </header>

      
    </div>

    
  );
}

export default App;
