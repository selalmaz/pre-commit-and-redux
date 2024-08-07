// global verimizi statemize dair bir takım
// yapılandırmalar yaptgımız obje

import {createSlice} from '@reduxjs/toolkit';

const Slice = createSlice({
  name: 'person',
  initialState: {
    name: '',
    surname: '',
    age: '',
  },
  reducers: {
    setName(state, action) {
      state.name = action.payload;
    },
    setSurname(state, action) {
      state.name = action.payload;
    },
    setAge(state, action) {
      state.age = action.payload;
    },
  },
});

export default Slice;
export const {setName, setSurname, setAge} = Slice.actions;
