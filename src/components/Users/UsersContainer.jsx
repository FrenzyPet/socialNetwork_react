import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { requestUsers, changePage, unfollowThunk, followThunk } from "../../redux/users-reducer";
import { getUsersDataSELECT, getPageSize, getTotalCount, getCurrentPage, getIsFetching, getFollowingInProgress } from "../../redux/users-selectors";
import Preloader from "../common/Preloader/Preloader";
import withAuthRedirect from "../HOC/withAuthRedirect";
import Users from "./Users";

class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
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
    usersData: getUsersDataSELECT(state),
    pageSize: getPageSize(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

const UsersContainer = compose(
  connect(mapStateToProps, {
    requestUsers,
    changePage,
    unfollowThunk,
    followThunk
  }),
  withAuthRedirect
)(UsersAPIContainer)

export default UsersContainer;