import MyFriends from './MyFriends';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    friendsData: state.friendsPage.friendsData
  }
}

const MyFriendsContainer = connect(mapStateToProps, {})(MyFriends);

export default MyFriendsContainer;