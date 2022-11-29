import Mock from './containers/mock';
import io  from "socket.io-client";
const SERVER = "http://127.0.0.1:2022";


function App() {
  var socket = io.connect(SERVER);
  socket.on('connection', () => {
    console.log(`I'm connected with the back-end`);
  });
  return (
    <div className="App">
      <h1>Hello</h1>
      <Mock />
    </div>
  );
}

export default App;
