import React from 'react';
import PropTypes from 'prop-types';
import styles from '../style/Components.module.css';

export default function Display(props) {
  const { status } = props;
  return (
    <div className={styles.display}>
      {status === null ? '0' : status}
    </div>
  );
}

Display.propTypes = {
  status: PropTypes.string,
};

Display.defaultProps = {
  status: '0',
};
