import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './dropdown.module.scss';

const DropdownLink = ({ link, handleClick }) => {
  const openChild = () => {
    if (link.children && link.children.length > 0) {
      handleClick(link);
    }
  };
  return (
    <li key={link.id}>
      <Link to="/dashboard" onClick={openChild}>
        <span className={s.icon}>
          <i className={link.icon} />
        </span>
        <span className={s.text}>
          {link.text} {link.children && <i className="fas fa-angle-right" />}
        </span>
      </Link>
    </li>
  );
};

DropdownLink.propTypes = {
  link: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    children: PropTypes.array
  }),
  handleClick: PropTypes.func
};

export default DropdownLink;
