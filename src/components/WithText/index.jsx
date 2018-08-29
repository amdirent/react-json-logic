// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helpers
import isEqual from 'lodash.isequal';

// UI
import Any from '../Any';
import style from './style.scss';

// PropTypes
const { any, func, object, string } = PropTypes;
const propTypes = {
  data: object,
  parent: string.isRequired,
  value: any,
  onChange: func.isRequired,
  text: string.isRequired,
};

const defaultProps = {
  data: {},
  value: '',
};

class WithText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!isEqual(this.props.value, nextProps.value)) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onChange = (value) => {
    this.setState({ value }, () => this.props.onChange(value));
  };

  render() {
    const { text, parent, data } = this.props;
    const { value } = this.state;

    return (
      <div className={style.Wrapper}>
        <div className={style.FatArrow}>
          {text}
        </div>

        <div>
          <Any
            onChange={this.onChange}
            parent={parent}
            data={data}
            value={value}
          />
        </div>
      </div>
    );
  }
}

WithText.propTypes = propTypes;
WithText.defaultProps = defaultProps;

export default text => ({
  default: props => <WithText {...props} text={text} />,
});
