import React from 'react';
import { connect } from 'react-redux';
import { getUserLogin } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getUserLogin()
  }

  render () {
    return (
      <Header {...this.props}/>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login
  }
}

export default connect(mapStateToProps, {getUserLogin})(HeaderContainer);

