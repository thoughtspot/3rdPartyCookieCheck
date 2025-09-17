import { sendMessage } from "promise-postmessage";

export const isThirdPartyCookiesEnabled = (): Promise<boolean> => {
    const { resolve, promise } = Promise.withResolvers<boolean>();
    const iframe = document.createElement("iframe");
    iframe.src = "https://cookie-check.thoughtspot.app";
    iframe.width = "1";
    iframe.height = "1";
    iframe.style.border = "none";
    iframe.onload = async () => {
        const enabled = await sendMessage(iframe, { type: "is-third-party-cookies-enabled" });
        document.body.removeChild(iframe);
        resolve(enabled);
    };
    document.body.appendChild(iframe);
    return promise;
};