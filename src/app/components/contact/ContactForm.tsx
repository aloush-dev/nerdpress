"use client";

import { type FormEvent, type FunctionComponent, useState } from "react";
import { TbSend } from "react-icons/tb";

export const ContactForm: FunctionComponent = () => {
  const inputStyle =
    "p-4 my-4 text-black focus:outline-none focus:border-accent focus:ring-4 focus:ring-accent text-base border-accent border-2";
  const labelStyle =
    "text-primary-text flex flex-col justify-center m-4 text-xl";

  const buttonStyle = {
    default: `bg-accent text-accent-text font-bold flex justify-center items-center p-4 m-4 transition-color duration-300 ease-in-out`,
    success: `bg-on-success text-accent-text font-bold flex justify-center items-center p-4 m-4 transition-color duration-300 ease-in-out`,
    error: `bg-on-error text-accent-text font-bold flex justify-center items-center p-4 m-4 transition-color duration-300 ease-in-out`,
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [buttonState, setButtonState] = useState("default");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [buttonMsg, setButtonMsg] = useState("SEND");

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const onSuccess = () => {
    setLoading(false);
    setButtonState("success");
    setButtonMsg("THANK YOU!");
    setName("");
    setEmail("");
    setMessage("");

    setTimeout(() => {
      setButtonState("default");
      setButtonMsg("SEND");
    }, 3000);
  };

  const onError = () => {
    setLoading(false);
    setButtonState("error");
    setErrorMsg("Could not send please try again later");

    setTimeout(() => {
      setButtonState("default");
      setErrorMsg("");
    }, 3000);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    if (!emailRegex.test(email)) {
      setButtonState("error");
      setErrorMsg("Please enter a valid email address");

      setTimeout(() => {
        setButtonState("default");
        setErrorMsg("");
      }, 3000);
    } else {
      try {
        const response = await fetch("/api/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
          onSuccess();
        } else {
          console.error("Email sending failed");
          onError();
        }
      } catch (error) {
        console.error("An error occurred", error);
        onError();
      }
    }
  };

  return (
    <>
      <form
        onSubmit={(e) => {
          void handleSubmit(e);
        }}
        className="flex flex-col"
      >
        <label className={labelStyle}>
          Name
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className={inputStyle}
            required
          />
        </label>
        <label className={labelStyle}>
          Email
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className={inputStyle}
            required
          />
        </label>
        <label className={labelStyle}>
          Message
          <textarea
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            className={`${inputStyle} h-60`}
            required
          />
        </label>

        <button
          className={buttonStyle[buttonState as keyof typeof buttonStyle]}
        >
          {errorMsg ? (
            <p className="duration-300 ease-in-out">{`${errorMsg}`}</p>
          ) : loading ? (
            "sending..."
          ) : (
            <div className="text-transition flex items-center justify-center">
              {buttonMsg} <TbSend className="pl-2 text-2xl" />
            </div>
          )}
        </button>
      </form>
    </>
  );
};
