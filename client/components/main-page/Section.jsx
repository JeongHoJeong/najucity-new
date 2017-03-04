import React from 'react';

Section = React.createClass({
  propTypes: {
    className: React.PropTypes.string,
    id: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      className: ''
    };
  },

  render() {
    return (
      <div
        className={`section ${this.props.className}`}
        id={this.props.id}
      >
        {this.props.children}
      </div>
    );
  }
});
