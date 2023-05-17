import { useEffect, useRef } from "react";
import styles from "./Conversation.module.scss";

const Conversations = () => {

    const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const containerWidth = containerRef.current.offsetWidth;
    contentRef.current.style.width = `${containerWidth}px`;
  }, []);

    const messages = [
        "hello",
        "how are you",
        "im fine",
        "im fine1",
        "im fine2",
        "im fine3",
        "im fine4",
        "im fine5",
      ];

    return (
        <div ref={containerRef} className={styles["conversation-container"]}>
          {/* <span className="content">
            Hãy chọn một đoạn chat hoặc bắt đầu cuộc trò chuyện mới
          </span> */}
          {messages.map((message) => {
            return (    
                <div ref={contentRef} key={message} 
                className={styles["conversation-message-left"]}>
                        <p>{message}</p>                    
                </div>
            )
          })}
        </div>
    )
};

export default Conversations;
