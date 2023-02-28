import React from 'react';
import { connect } from 'react-redux';
import { authAPI } from '../../api/api';
import { setUserLogin } from '../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
  componentDidMount() {
    authAPI.startAuthentify()
     .then(data => {
       if (data.resultCode === 0) {
          const {email, id, login} = data.data;
          this.props.setUserLogin(id, login, email)
        }
     })
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

export default connect(mapStateToProps, {setUserLogin})(HeaderContainer);

