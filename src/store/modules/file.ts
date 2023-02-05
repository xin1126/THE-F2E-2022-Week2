import { createSlice } from '@reduxjs/toolkit'

interface File {
  file: string
}

const initialState: File = {
  file: '',
}

const file = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFite: (state, { payload }: { payload: string }) => {
      state.file = payload
    },
  },
})

export const { setFite } = file.actions
export default file.reducer
