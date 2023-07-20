import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const API_ID = 'r4HydvPOoNi99w7INjTA';
const BaseUrl = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${API_ID}/books`;

const AddBook = 'bookstore/src/redux/books/ADD_BOOK';
const RemoveBook = 'bookstore/src/redux/books/REMOVE_BOOK';
const GetBook = 'bookstore/src/redux/books/GET_BOOK';

export const addBook = createAsyncThunk(AddBook, async (elements) => {
  const {
    id, title, author, category,
  } = elements;
  await axios.post(BaseUrl, {
    item_id: id,
    title,
    author,
    category,
  });
  return elements;
});

export const removeMyBook = createAsyncThunk(RemoveBook, async (id) => {
  await axios.delete(`${BaseUrl}/${id}`);
  return id;
});

const renderMyBooks = (res) => Object.entries(res.data).map((arr) => {
  const [id, [{ title, author, category }]] = arr;
  return {
    id,
    title,
    author,
    category,
  };
});

export const fetchMyBooks = createAsyncThunk(GetBook, async () => {
  const getBookItems = await axios.get(BaseUrl);
  return renderMyBooks(getBookItems);
});

const deleteBook = (state, action) => state.filter((book) => book.id !== action.payload);

const bookReducerSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
    status: 'idle',
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMyBooks.fulfilled, (state, action) => ({
      ...state,
      status: 'success',
      books: action.payload,
    }));
    builder.addCase(removeMyBook.fulfilled, (state, action) => ({
      ...state,
      status: 'successful',
      books: deleteBook(state.books, action),
    }));
    builder.addCase(addBook.fulfilled, (state, action) => ({
      ...state,
      status: 'successful',
      books: [...state.books, action.payload],
    }));
  },
});

export default bookReducerSlice.reducer;
