import Conversation from "./Conversation";
import styles from "./Conversation.module.scss";

const Conversations = () => {

  const messages = [
    {message: "hello", sender: true},
    {message: "how are you", sender: false},
    {message: "im fine 1", sender: true},
    {message: "im fine 2", sender: true},
    {message: "im fine 3", sender: false},
    {message: "im fine 4", sender: true},
  ];

  return (
    <div className={styles["conversation-container"]}>
      {/* <span className="content">
            Hãy chọn một đoạn chat hoặc bắt đầu cuộc trò chuyện mới
          </span> */}
      {messages.map((message) => {
        
        return <Conversation message={message}/>;
      })}
    </div>
  );
};

export default Conversations;
