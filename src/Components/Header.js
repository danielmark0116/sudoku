import React from 'react';

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
  return (
    <div>
      <img src="../../assets/LOGO.svg" alt="" style={style} />
      <p style={p}>{props.difficulty} </p>
    </div>
  );
}
