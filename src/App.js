import ConversationsContainer from "./components/ConversationsContainer/ConversationsContainer.js";
import "./App.css";
import Conversations from "./components/Conversation/Conversations.jsx";

function App() {
  return (
    <div className="App">
      <ConversationsContainer />
      <div className="wrapper">
        {/* <Conversations /> */}
      </div>
    </div>
  );
}

export default App;
