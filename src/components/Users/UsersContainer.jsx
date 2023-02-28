import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { followUser, setCurrentPage, setTotalUsersCount, setUsers, setIsFetching, unfollowUser } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.setIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true, headers: {"API-KEY" : "6efd009f-3401-4ef7-9940-7b6f29544df0"}})
      .then(response => {
        this.props.setIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.setIsFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {withCredentials: true, headers: {"API-KEY" : "6efd009f-3401-4ef7-9940-7b6f29544df0"}})
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

const UsersContainer = connect(mapStateToProps, {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  setIsFetching
})(UsersAPIContainer);

export default UsersContainer;