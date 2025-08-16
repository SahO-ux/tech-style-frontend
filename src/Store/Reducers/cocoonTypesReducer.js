import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  types: [],  // e.g. ['P10', 'E10']
}

const cocoonTypesSlice = createSlice({
  name: 'cocoonTypes',
  initialState,
  reducers: {
    setCocoonTypes: (state, action) => {
      state.types = action.payload
    },
  },
})

export const { setCocoonTypes } = cocoonTypesSlice.actions
export default cocoonTypesSlice.reducer
