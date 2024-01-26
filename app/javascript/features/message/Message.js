import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMessage } from "./messageSlice";

export function Message() {
  const dispatch = useDispatch();
  const message = useSelector((state) => state.message.message);
  const messageStatus = useSelector((state) => state.message.status);

  useEffect(() => {
    if (messageStatus === "idle" && message === "") {
      dispatch(fetchMessage());
    }
  }, [messageStatus, dispatch]);

  return (
    <div>
      <h2>Random Message:</h2>
      {messageStatus === "loading" ? <p>Loading...</p> : <p>{message}</p>}
    </div>
  );
}
