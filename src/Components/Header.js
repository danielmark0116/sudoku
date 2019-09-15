import React from 'react';
import PropTypes from 'prop-types';

// import Logo from '../../assets/LOGO.png';

const style = {
  margin: '40px auto 0',
  display: 'block'
};

const p = {
  textAlign: 'center',
  fontSize: '12px',
  color: 'white',
  marginBottom: '40px'
};

export default function Header(props) {
  const { difficulty, showDifficulty } = props;

  return (
    <div>
      <img src="../../assets/LOGO.svg" alt="" style={style} />
      {showDifficulty && (
        <p style={p}>Difficulty level: {difficulty.toUpperCase()} </p>
      )}
    </div>
  );
}

Header.defaultProps = {
  difficulty: '',
  showDifficulty: true
};
