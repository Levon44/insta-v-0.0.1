import { useSelector } from "react-redux";
import "./MessengerChat.css";
import { selectUsers } from "../../store/slices/users/userSlice";
import { selectMessages } from "../../store/slices/messages/messagesSlice";
import { useEffect, useRef } from "react";

function MessengerChat() {
  const { currentUser } = useSelector(selectUsers);
  const { currentDialog } = useSelector(selectMessages);
  const divRef = useRef(null);
  useEffect(() => {
    divRef.current.scrollTop = divRef.current.scrollHeight;
  }, [currentDialog]);
  return (
    <div ref={divRef} className="MessengerChat">
      {currentDialog.map((message) => (
        <div className="chatConteiner">
          <h1 className="messageH1" key={message.id}>
            <p
              className={
                message.fromId === currentUser.id ? "myMessage" : "otherMessage"
              }
            >
              {message.text}
            </p>
          </h1>
        </div>
      ))}
    </div>
  );
}

export default MessengerChat;
