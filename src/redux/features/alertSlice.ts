import { createSlice } from "@reduxjs/toolkit";

interface Alert {
  id: number
  alertType: number;
  content: any;
  timeout: number;
  validation:any;
}
const initialState: Alert[] = []

export const alert = createSlice({
  name: "alert",
  initialState,
  reducers: {
    openAlert: (state, actions) => {
      const { alertType, content, timeout, validation } = actions.payload;
      state.push({ id: Date.now(), alertType, content, timeout: timeout ?? 3000, validation })
    },
    closeAlert: (state) => {
      state.shift();
    },
  },
});

export const { openAlert, closeAlert } = alert.actions;
export const selectAlert = (state: { alert: any; }) => state.alert;

export default alert.reducer;