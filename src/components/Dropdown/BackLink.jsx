import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cx from 'classnames';
import s from './dropdown.module.scss';

const BackLink = ({ text, goBack }) => {
  return (
    <li>
      <Link to="/dashboard" onClick={goBack}>
        <span className={cx(s.icon, s.back)}>
          <i className="fas fa-arrow-left" />
        </span>
        <span className={s.text}>{text}</span>
      </Link>
    </li>
  );
};

BackLink.propTypes = {
  text: PropTypes.string.isRequired,
  goBack: PropTypes.func
};

export default BackLink;
