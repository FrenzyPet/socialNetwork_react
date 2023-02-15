import { createSlice } from '@reduxjs/toolkit'

export const friendsSlice = createSlice({
  name: 'friends',
  initialState: {
    friendsData: [
      { id: '001', name: 'Маша', avatar: 'http://android-obzor.com/wp-content/uploads/2022/03/1-43-1.jpg' },
      { id: '002', name: 'Катя', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-VfKoaIJI1jRcyFKFNa3cnR3AE0Eelh0Anw&usqp=CAU' },
      { id: '003', name: 'Паша', avatar: 'https://fanibani.ru/wp-content/uploads/2021/11/400-anime-avatarok-dlya-vk-ks-go-ili-stim-1.png' }
    ]
  },
  reducers: {}
})
