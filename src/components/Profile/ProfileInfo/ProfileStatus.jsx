import React from 'react';
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
  state = {
    editMode: false
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
  }

  render() {
    return (
      <div className={classes.status__wrapper}>
        { !this.state.editMode && 
          (<div className={classes.statusbar}>
            <span onDoubleClick={ this.activateEditMode }>{this.props.status}</span>
          </div>)
        }
        { this.state.editMode && 
          (<div className={classes.statusbar}>
            <input  autoFocus={true} onBlur={ this.deactivateEditMode } value={this.props.status}></input>
          </div>)
        }
      </div>
    )
  }
}

export default ProfileStatus;