import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { followUserAC, setCurrentPageAC, setTotalUsersCountAC, setUsersAC, setIsFetchingAC, unfollowUserAC } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items)
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
             followUser={this.props.followUser}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    usersData: state.usersPage.usersData,
    pageSize: state.usersPage.pageSize,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    followUser: (userID) => dispatch(followUserAC(userID)),
    unfollowUser: (userID) => dispatch(unfollowUserAC(userID)),
    setUsers: (users) => dispatch(setUsersAC(users)),
    setCurrentPage: (page) => dispatch(setCurrentPageAC(page)),
    setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCountAC(totalCount)),
    setIsFetching: (value) => dispatch(setIsFetchingAC(value))
  }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIContainer);

export default UsersContainer;