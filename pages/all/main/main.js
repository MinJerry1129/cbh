import PropTypes from 'prop-types'
import React, { Children } from 'react'
import styles from '../../../styles/Home.module.css'

const Mainbody = ({ bodyText, ...props }) => {
  return (
    <div>
        <p className={styles.main_body}>{bodyText}</p>
    </div>
  )
}

Mainbody.propTypes = {
    bodyText: PropTypes.string.isRequired,
}

export default Mainbody