import ConversationsContainer from "./components/ConversationsContainer/ConversationsContainer.js";
import './App.css'
function App() {
  return (
    <div className="App">
      <ConversationsContainer />
      <div className="wrapper">
        <div className="none">
          <span className="content"></span>
          <button></button>
        </div>
      </div>
    </div >
  );
}

export default App;
