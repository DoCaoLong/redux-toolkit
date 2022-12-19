import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "api/api-route";
import { AxiosError } from "axios";

export interface IOrgsStore {
    orgs: any[];
    page: number;
    totalItem: number;
    status: string;
    error: number;
}

const initialState: IOrgsStore = {
    orgs: [],
    page: 1,
    totalItem: 1,
    status: "",
    error: 0,
};
export const getAsyncOrg: any = createAsyncThunk(
    "ORGS/getAsyncOrg",
    async (values, { rejectWithValue }) => {
        try {
            const res: any = await api.getOragnizations(values);
            const payload = {
                orgs: res.data.context.data,
                totalItem: res.data.context.total,
                page: res.data.context.current_page,
            };
            return payload;
        } catch (error: any) {
            if (!error.response) {
                throw error;
            }
            const err = error as AxiosError;
            return rejectWithValue(err.response?.status);
        }
    }
);

const orgSlice = createSlice({
    name: "ORGS",
    initialState,
    reducers: {
        toggleFavorite: (state, actions) => {},
    },
    // extraReducers: {
    //     [getAsyncOrg.pending]: (state) => {
    //         return state.status === "PENDING";
    //     },
    //     [getAsyncOrg.fulfilled]: (state, { payload }) => {
    //         return {
    //             ...state,
    //             ...payload,
    //             // orgs: payload.orgs,
    //             status: "SUCCESS",
    //             error: 200,
    //         };
    //     },
    //     [getAsyncOrg.rejected]: (state, { payload }) => {
    //         return { ...state, status: "FAIL", error: payload };
    //     },
    // },
    extraReducers: (builder) => {
        builder.addCase(getAsyncOrg.pending, (state) => {
            return {
                ...state,
                status: "PENDING",
            };
        });
        builder.addCase(getAsyncOrg.fulfilled, (state, { payload }) => {
            return {
                ...state,
                ...payload,
                orgs: [...state.orgs, ...payload.orgs],
                status: "SUCCESS",
                error: 200,
            };
        });
        builder.addCase(getAsyncOrg.rejected, (state, { payload }) => {
            return {
                ...state,
                status: "FAIL",
                error: payload,
            };
        });
    },
});
const { actions, reducer } = orgSlice;
export const { toggleFavorite } = actions;
export default reducer;
