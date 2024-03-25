import { createSlice } from "@reduxjs/toolkit";

interface Toast {
  id: number
  toastType: string;
  content: any;
  timeout: number;
}
const initialState: Toast[] = []

export const toast = createSlice({
  name: "toast",
  initialState,
  reducers: {
    openToast: (state, actions) => {
      const { toastType, content, timeout } = actions.payload;
      state.push({ id: Date.now(), toastType, content, timeout: timeout ?? 2500 })
    },
    closeToast: (state) => {
      state.shift();
    },
  },
});

export const { openToast, closeToast } = toast.actions;
export const selectToast = (state: { toast: any; }) => state.toast;

export default toast.reducer;