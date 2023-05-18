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

  const urlImage = "https://media.istockphoto.com/id/1181366400/vi/anh/trong-tay-c%C3%A2y-tr%E1%BB%93ng-c%C3%A2y-con-bokeh-m%C3%A0u-xanh-l%C3%A1-c%C3%A2y-n%E1%BB%81n-n%E1%BB%AF-tay-c%E1%BA%A7m-c%C3%A2y-tr%C3%AAn-c%C3%A1nh-%C4%91%E1%BB%93ng-t%E1%BB%B1-nhi%C3%AAn-c%E1%BB%8F.jpg?s=2048x2048&w=is&k=20&c=zF5j_tsmqJ6PJsW_LiwbMc29mSRZiq6dqGrP-XyDc7Q=";

  return (
    <div className={styles["conversation-container"]}>
      <div className={styles["header-conversation-container"]}>
        <div className={styles["header-conversation-left"]}>
            <img src={urlImage} alt="" className={styles["avatar-header-conversation"]} />
            <div className={styles["header-container-info"]}>
              <p className="name-info">
                Nguyễn Thành Duy
              </p>
              <p className="status-info">
                Đang hoạt động
              </p>
            </div>
        </div>

        <div className="header-conversation-right">
          
        </div>
      </div>
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
