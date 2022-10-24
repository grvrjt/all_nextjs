import React, { useContext } from "react";
import { Context } from '../context';
import { useRouter } from "next/router";
import axios from "axios";

export default function Auth() {


  const { userName, setUserName, secret, setSecret } = useContext(Context);
  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    if (userName.length === 0 || secret.length === 0) return;
    axios.put("https://api.chatengine.io/users/",
      { username:userName, secret:secret},
      { headers: { "Private-key": "83de0276-666b-46fd-880f-f56f9306c6a3" } }
      )
      .then(r=> router.push("/chats"))

  }

  return (<div className="background">
    <div className="auth-container">
      <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
        <div className="auth-title">Nextjs Chat</div>
        <div className="input-container">
          <input
            placeholder="Email"
            className="text-input"
            onChange={e => setUserName(e.target.value)}
          />
          <input
            type='password'
            placeholder="Password"
            className="text-input"
            onChange={e => setSecret(e.target.value)}
          />
        </div>
        <button type="submit" className="submit-button">Login / Sign Up</button>
      </form>
    </div>
  </div>);
}
