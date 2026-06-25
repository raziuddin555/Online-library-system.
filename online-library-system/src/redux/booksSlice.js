import { createSlice } from "@reduxjs/toolkit";
import booksData from "../data/books";

// Initial state for Redux store
const initialState = {
    books: booksData,
};

const booksSlice = createSlice({
    name: "books",
    initialState,

    reducers: {
        // Add new book
        addBook: (state, action) => {
            state.books.push(action.payload);
        },
    },
});

export const { addBook } = booksSlice.actions;

export default booksSlice.reducer;