import classNames from "classnames/bind";
import styles from "./Conversation.module.scss";
const Conversation = (props) => {
  const {message} = props;
  const cx = classNames.bind(styles);
  const isRight = message.sender ? "right" : "left";
  const isSender = message.sender ? "" : "is-not-sender";
  return (
    <div className={styles["conversation-message-container"]}>
        <span className={styles[`message-name-${isRight}`]}>
                Thành Duy
        </span>
      <div
        key={message.message}
        className={styles[`conversation-message-${isRight}`]}
      >
        <span className={cx("message-content", `${isSender}`)}>
          {message.message}
        </span>
      </div>
    </div>
  );
};

export default Conversation;
