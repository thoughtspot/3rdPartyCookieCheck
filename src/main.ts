import { onMessage } from "promise-postmessage";

onMessage((message) => {
  if (message.type !== "is-third-party-cookies-enabled") {
    return;
  }

  // Try setting a cookie
  document.cookie = "test3pc=1; SameSite=None; Secure";
  const enabled = document.cookie.indexOf("test3pc=") !== -1;

  return enabled;
}, window.parent);