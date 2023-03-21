import React, { useEffect, useState } from 'react';
import classes from './ProfileInfo.module.css'

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false)
  const [status, setStatus] = useState(props.status)

  useEffect( () => setStatus(props.status), [props.status] )
  
  const activateEditMode = () => {
    setEditMode(true)
  }

  const deactivateEditMode = () => {
    setEditMode(false)
    props.updateStatus(status)
  }

  const onStatusChange = (evt) => {
    setStatus(evt.currentTarget.value)
  }

  return (
    <div className={classes.status__wrapper}>
      { !editMode && 
        (<div className={classes.statusbar}>
          <span onDoubleClick={ activateEditMode }>{props.status || "введите статус"}</span>
        </div>)
      }
      { editMode && 
        (<div className={classes.statusbar}>
          <input autoFocus={true}
                 onBlur={ deactivateEditMode }
                 onChange={ onStatusChange }
                 value={status}></input>
        </div>)
      }
    </div>
  )
}

export default ProfileStatus;