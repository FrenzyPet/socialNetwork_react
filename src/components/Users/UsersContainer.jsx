import React from "react";
import { connect } from "react-redux";
import { getUsers, changePage, unfollowThunk, followThunk } from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  onPageChanged = (pageNumber) => {
    this.props.changePage(pageNumber, this.props.pageSize)
  }

  render() {
    return (<>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalCount={this.props.totalCount}
             pageSize={this.props.pageSize}
             currentPage={this.props.currentPage}
             onPageChanged={this.onPageChanged}
             usersData={this.props.usersData}
             followingInProgress={this.props.followingInProgress}
             unfollowThunk={this.props.unfollowThunk}
             followThunk={this.props.followThunk}/>
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
  getUsers,
  changePage,
  unfollowThunk,
  followThunk
})(UsersAPIContainer);

export default UsersContainer;