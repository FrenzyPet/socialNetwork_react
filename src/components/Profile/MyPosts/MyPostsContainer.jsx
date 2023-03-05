import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNewPost: (postText) => dispatch(addPostActionCreator(postText)),
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

