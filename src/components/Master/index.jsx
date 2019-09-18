/**
 * Master Field
 *
 * Renders one `Any` field and expects onChange, value and data props to consturct a logical
 * recursion for rendering the rest of the JSON Logic Expression.
 *
 * - onChange: Returns the latest expression.
 * - value:    Initial value of the json logic expresison.
 * - data:     Data available for accessor fields.
 */

// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.min.css';

// Helpers
import isEqual from 'lodash.isequal';

// UI
import Any from '../Any';
import style from './style.scss';

// PropTypes
const {
  func,
  object,
  string,
  oneOfType,
} = PropTypes;

const propTypes = {
  onChange: func.isRequired,
  value: object,
  data: oneOfType([object, string]),
};

const defaultProps = {
  value: {},
  data: {},
};

class JsonLogicBuilder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };

    this.onChange = this.onChange.bind(this);
    this.parseData = this.parseData.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (!isEqual(value, nextProps.value)) {
      this.setState({ value: nextProps.value });
    }
  }

  onChange(value) {
    const { onChange } = this.props;
    this.setState({ value }, () => onChange(value));
  }

  parseData() {
    const { data } = this.props;
    if (typeof data !== 'object') {
      try {
        return JSON.parse(data);
      } catch (e) {
        return {};
      }
    }

    return data;
  }

  render() {
    const { value } = this.state;
    return (
      <div className={style.Wrapper}>
        <Any
          parent="master"
          data={this.parseData()}
          onChange={this.onChange}
          value={value}
        />
      </div>
    );
  }
}

JsonLogicBuilder.propTypes = propTypes;
JsonLogicBuilder.defaultProps = defaultProps;

export default JsonLogicBuilder;
