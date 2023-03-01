import React from "react";
import { connect } from "react-redux";
import { usersAPI } from "../../api/api";
import { followUser, setCurrentPage, setTotalUsersCount, setUsers, setIsFetching, unfollowUser, toggleFollowingProgress } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.setIsFetching(false);
        this.props.setUsers(data.items)
      })
  }

  render() {
    return (<>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalCount={this.props.totalCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             usersData={this.props.usersData}
             unfollowUser={this.props.unfollowUser}
             followUser={this.props.followUser}
             followingInProgress={this.props.followingInProgress}
             toggleFollowingProgress={this.props.toggleFollowingProgress}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress
  }
}

const UsersContainer = connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching,
  toggleFollowingProgress
})(UsersAPIContainer);

export default UsersContainer;