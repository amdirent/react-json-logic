// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Helpers
import isEqual from 'lodash.isequal';

// UI
import Any from '../Any';
import style from './style.scss';

// PropTypes
const {
  any, func, object, string,
} = PropTypes;

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
    this.onChange = this.onChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;

    if (!isEqual(value, nextProps.value)) {
      this.setState({
        value: nextProps.value,
      });
    }
  }

  onChange(value) {
    const { onChange } = this.props;
    this.setState({ value }, () => onChange(value));
  }

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

export default (text) => ({
  default: ({
    data,
    parent,
    value,
    onChange,
  }: {
  data: PropTypes.object,
  parent: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  }) => (<WithText data={data} parent={parent} value={value} onChange={onChange} text={text} />),
});
