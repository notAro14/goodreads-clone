import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AppState, Dependencies, AppDispatch } from ".";

export const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: AppState;
  dispatch: AppDispatch;
  extra: {
    dependencies: Dependencies;
  };
}>();
