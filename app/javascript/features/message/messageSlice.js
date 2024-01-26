import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMessage = createAsyncThunk(
  "message/fetchMessage",
  async () => {
    const response = await axios.get("http://127.0.0.1:3000/api/v1/greeting_random");
    return response.data;
  }
);

export const messageSlice = createSlice({
  name: "message",
  initialState: { message: "", status: "idle" },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.status = "idle";
        state.message = action.payload.content;
      });
  },
});

export default messageSlice.reducer;
