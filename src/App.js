import ConversationsContainer from "./components/ConversationsContainer/ConversationsContainer.js";
import './App.css'
function App() {
  return (
    <div className="App">
      <ConversationsContainer />
      <div className="wrapper">
        <div className="none"><span className="content">Hãy chọn một đoạn chat hoặc bắt đầu cuộc trò chuyện mới</span></div>
      </div>
    </div >
  );
}

export default App;
