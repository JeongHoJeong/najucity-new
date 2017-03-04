import React from 'react';
import Section from 'main-page/Section'

const Subsection = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <Section
        id={this.props.id}
        className={'subsection ' + this.props.className}
      >
        {this.props.children}
      </Section>
    );
  }
});

export default Subsection