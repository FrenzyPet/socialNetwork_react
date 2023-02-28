import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { profileAPI } from "../../api/api";
import { setUserProfile } from "../../redux/profile-reducer";
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
    profileAPI.getUserProfile(userID)
      .then(data => this.props.setUserProfile(data))
  }

  render() {
    return <Profile {...this.props} profile={this.props.profile}/>
  }
}

const mapStateToProps = (props) => {
  return {
    profile: props.profilePage.profile
  }
}

const withURLContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(withURLContainer);
