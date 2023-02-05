import { createSlice } from '@reduxjs/toolkit'

interface File {
  file: string | ArrayBuffer | null
}

const initialState: File = {
  file: '',
}

const file = createSlice({
  name: 'file',
  initialState,
  reducers: {
    setFite: (state, { payload }: { payload: string | ArrayBuffer | null }) => {
      state.file = payload
    },
  },
})

export const { setFite } = file.actions
export default file.reducer
