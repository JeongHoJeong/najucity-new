import React from 'react'
import Subsection from 'main-page/Subsection'

const AwardSection = React.createClass({
  render() {
    return (
      <Subsection
        id='award'
        className='award'
      >
        <div
          className='title'
        >
          시상 내역
        </div>
        <div
          className='image'
        />
      </Subsection>
    );
  }
});

export default AwardSection