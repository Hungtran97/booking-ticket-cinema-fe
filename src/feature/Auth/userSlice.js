import userApi from 'api/userApi';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk('/login', async (payload) => {
  const data = await userApi.login(payload);
  localStorage.setItem('accessToken', data.accessToken);
  localStorage.setItem('user', data.username);
  return data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    current: {},
    setting: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true; // Set loading to true while waiting for the request
        state.error = null; // Clear any previous error
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false; // Reset loading state
        state.current = action.payload; // Set the user data in the store
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false; // Reset loading state
        state.error = action.payload; // Save the error message
      });
  },
});
const { reducer } = userSlice;
export default reducer;
