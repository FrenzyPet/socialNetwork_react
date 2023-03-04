import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import { getUserProfile, getStatus, updateStatus } from "../../redux/profile-reducer";
// import withAuthRedirect from "../HOC/withAuthRedirect";
import Profile from "./Profile";

const withRouter = (Component) => {
  return (props) => {
    const match = { params: useParams()}
    return <Component {...props} match={match}/>
  }
}

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.match.params.userID;
    if (!userID) {
      userID = 28019
    }
    this.props.getUserProfile(userID)
    this.props.getStatus(userID)
  }

  render() {
    return <Profile {...this.props} />
  }
}

const mapStateToProps = (props) => {
  return {
    profile: props.profilePage.profile,
    status: props.profilePage.status
  }
}

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  // withAuthRedirect
)(ProfileContainer)