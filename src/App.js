import logo from './logo1.jpg';
import './App.css';
import 'bootstrap/js/dist/button';
import 'bootstrap/js/dist/util';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Coffee Application!</h1>

        <ul>
            <label for="roast-selection"></label>
            <select id="roast-selection">
                <option>light</option>
                <option>medium</option>
                <option>dark</option>
            </select>
            <input id="submit" type="submit" />
        </ul>

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


        
        <div class="container">
          <h2>Hoverable Dark Table</h2>
          <p>The .table-hover class adds a hover effect (grey background color) on table rows:</p>            
          <table class="table table-dark table-hover">
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>ROAST</th>
              </tr>
            </thead>
            <tbody id="coffees"></tbody>
          </table>
        </div>


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
