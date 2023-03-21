import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
import withRouter from "../HOC/withRouter";
import Profile from "./Profile";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = this.props.userID
    }
    this.props.getUserProfile(userID)
    this.props.getStatus(userID)
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userID: state.auth.userID,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
)(ProfileContainer)