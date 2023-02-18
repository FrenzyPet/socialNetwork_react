import { connect } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPost: state.profilePage.newPost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: () => dispatch(addPostActionCreator()),
    updatePostText: (text) => dispatch(updatePostTextActionCreator(text))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

