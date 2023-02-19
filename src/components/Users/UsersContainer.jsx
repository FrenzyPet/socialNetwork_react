import { connect } from "react-redux";
import { followUserAC, setUsersAC, unfollowUserAC } from "../../redux/users-reducer";
import UsersClass from "./UsersClass";

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userID) => dispatch(followUserAC(userID)),
    unfollowUser: (userID) => dispatch(unfollowUserAC(userID)),
    setUsers: (users) => dispatch(setUsersAC(users))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass);

export default UsersContainer;