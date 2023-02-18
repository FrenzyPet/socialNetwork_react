import MyFriends from './MyFriends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const MyFriendsContainer = connect(mapStateToProps, mapDispatchToProps)(MyFriends);

export default MyFriendsContainer;