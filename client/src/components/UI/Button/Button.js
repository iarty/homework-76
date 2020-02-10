import React, { Fragment } from 'react';
import classes from './Button.module.css'

export default function Button() {
  return (
    <Fragment>
      <button type="submit" className={classes.Button}>
        <i className='fas fa-paper-plane' />
      </button>
    </Fragment>
  )
}
