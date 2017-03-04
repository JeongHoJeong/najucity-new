import React from 'react';

const TextCircle = React.createClass({
  propTypes: {
    text: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    orange: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      orange: false
    };
  },

  renderTexts() {
    return this.props.text.map((text, idx) => {
      return (
        <div
          key={idx}
          className='text'
        >
          {text}
        </div>
      );
    });
  },

  render() {
    return (
      <div
        className={`text-circle ${this.props.orange ? 'orange' : ''}`}
      >
        <div
          className='texts'
        >
          {this.renderTexts()}
        </div>
      </div>
    );
  }
});

export default TextCircle;
