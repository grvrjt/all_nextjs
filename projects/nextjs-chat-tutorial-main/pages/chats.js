import React, { useState, useEffect, useContext } from "react";
import { Context } from "../context";
import router, { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
)
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
)


export default function Chats() {
  const { userName, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false)

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  useEffect(() => {
    if (userName.length === 0 || secret.length === 0) router.push("/");
  })

  if (!showChat) return <div />


  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
          height="calc(100ch-200px)"
          projectID="6b80c1d8-4490-4f58-9b51-e2b616ef9793"
          userName={userName}
          userSecret={secret}
          renderNewMessageForm={() => <MessageFormSocial />}
        />


      </div>
    </div>
  );
}
