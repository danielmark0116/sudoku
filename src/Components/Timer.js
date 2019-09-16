import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

import GameText from './GameText';

import style from '../styles/main.scss';

class Timer extends Component {
  static propTypes = {
    sudokuData: PropTypes.object,
    sudokuPlayedTime: PropTypes.string
  };

  static defaultProps = {
    sudokuPlayedTime: ''
  };

  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      timer: null
    };
  }

  componentDidMount() {
    const { sudokuPlayedTime } = this.props;

    this.setState({
      timer: setInterval(this.calculateTime, 1000)
    });
    if (sudokuPlayedTime !== '') {
      const { minutes, seconds } = JSON.parse(sudokuPlayedTime);

      this.setState({
        minutes: minutes,
        seconds: seconds
      });
    }
  }

  componentDidUpdate() {
    const { sudokuData } = this.props;
    const { minutes, seconds } = this.state;

    sudokuData.updateTime(minutes, seconds);
  }

  calculateTime = () => {
    const { seconds, minutes } = this.state;

    if (seconds < 59) {
      this.setState({
        seconds: seconds + 1
      });
    } else {
      this.setState({
        seconds: 0,
        minutes: minutes + 1
      });
    }
  };

  formatTime = input => {
    let doubleDigit = input.toString();

    if (doubleDigit.length === 1) {
      return (
        <div className={style.timer_block}>
          <span>0</span>
          <span>{doubleDigit}</span>
        </div>
      );
    } else {
      return (
        <div className={style.timer_block}>
          <span>{doubleDigit[0]}</span>
          <span>{doubleDigit[1]}</span>
        </div>
      );
    }
  };

  componentWillUnmount() {
    const { timer } = this.state;
    clearInterval(timer);
  }

  render() {
    const { seconds, minutes } = this.state;

    return (
      <Fragment>
        <div className={style.timer_container}>
          {this.formatTime(minutes)}:{this.formatTime(seconds)}
        </div>
      </Fragment>
    );
  }
}

export default Timer;
