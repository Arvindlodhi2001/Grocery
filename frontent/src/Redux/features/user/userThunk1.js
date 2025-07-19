import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Toastify from "../../../Utils/Toastify/Toastify";
const API_URL = "http://localhost:5000/api/v1/users";

export const signUpUser = createAsyncThunk(
  "auth/signUpUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/signUp`, formData);
      Toastify("success", "User created successfully");
      return response.data;
    } catch (error) {
      Toastify("error", "User Signup is failed");
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong!"
      );
    }
  }
);

export const signInUser = createAsyncThunk(
  "auth/signInUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/signIn`, credentials);
      Toastify("success", "User  Signed In successfully");
      return response.data;
    } catch (error) {
      Toastify("error", "User Signin is failed");
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong!"
      );
    }
  }
);

export const removeUser = createAsyncThunk(
  "auth/removeUser",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${API_URL}/account/remove`, formData);
      Toastify("success", "User removed successfully");
      return response.data;
    } catch (error) {
      Toastify("error", "User removal failed");
      return rejectWithValue(
        error.response?.data?.message || "Something went wrong!"
      );
    }
  }
);
