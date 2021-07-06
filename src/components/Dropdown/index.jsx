import React, { useState } from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import s from './dropdown.module.scss';
import DropdownLink from './DropdownLink';
import BackLink from './BackLink';

const Dropdown = ({ config }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(o => !o);

  const [level1Child, setLevel1Child] = useState({});
  const [showLevel1, setShowLevel1] = useState(false);

  const handleClickForLevel1 = child => {
    setLevel1Child(child);
    setShowLevel1(true);
  };

  const [level2Child, setLevel2Child] = useState({});
  const [showLevel2, setShowLevel2] = useState(false);

  const handleClickForLevel2 = child => {
    setLevel2Child(child);
    setShowLevel2(true);
  };

  return (
    <nav className={s.nav}>
      <div className={s.dropBtn} onClick={toggle}>
        Dropdown
        <i className="fas fa-caret-down" />
      </div>
      <div className={s.wrapper}>
        <div className={cx(s.lists, { [s.show]: open })}>
          <ul
            className={cx({
              [s.show]: open,
              [s.level1]: Object.keys(level1Child).length > 0 && showLevel1,
              [s.level2]: Object.keys(level2Child).length > 0 && showLevel2
            })}
          >
            {config.map(link => (
              <DropdownLink link={link} key={link.id} handleClick={handleClickForLevel1} />
            ))}
          </ul>

          {open && Object.keys(level1Child).length > 0 && (
            <ul className={s.show}>
              <BackLink text={level1Child.text} goBack={() => setShowLevel1(false)} />
              {level1Child.children.map(link => (
                <DropdownLink link={link} key={link.id} handleClick={handleClickForLevel2} />
              ))}
            </ul>
          )}

          {open && Object.keys(level2Child).length > 0 && (
            <ul className={s.show}>
              <BackLink text={level2Child.text} goBack={() => setShowLevel2(false)} />
              {level2Child.children.map(link => (
                <DropdownLink link={link} key={link.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};

Dropdown.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      children: PropTypes.array
    }).isRequired
  )
};

export default Dropdown;
