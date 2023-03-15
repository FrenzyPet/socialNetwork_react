import profileReducer, { addPost } from "./profile-reducer";

const initialState = {
  postsData: [
    { message: 'Please, kill me!', id: 1, likeCount: 10},
    { message: 'Everything fucked me.', id: 2, likeCount: 20},
    { message: 'I dont want to live =(', id: 3, likeCount: 30}
  ]
}

it('new post shoould be created', () => {
  let action = addPost('123')
  let newState = profileReducer(initialState, action)

  expect(newState.postsData.length).toBe(4)
})