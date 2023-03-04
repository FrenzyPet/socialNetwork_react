import React from 'react';
import classes from './ProfileInfo.module.css'

class ProfileStatus extends React.Component {
  
  state = {
    editMode: false,
    status: this.props.status
  }

  activateEditMode = () => {
    this.setState({ editMode: true })
  }

  deactivateEditMode = () => {
    this.setState({ editMode: false })
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (evt) => {
    this.setState({ status: evt.currentTarget.value})
  }

  render() {
    // debugger
    return (
      <div className={classes.status__wrapper}>
        { !this.state.editMode && 
          (<div className={classes.statusbar}>
            <span onDoubleClick={ this.activateEditMode }>{this.props.status || "введите статус"}</span>
          </div>)
        }
        { this.state.editMode && 
          (<div className={classes.statusbar}>
            <input autoFocus={true}
                   onBlur={ this.deactivateEditMode }
                   onChange={ this.onStatusChange }
                   value={this.state.status}></input>
          </div>)
        }
      </div>
    )
  }
}

export default ProfileStatus;