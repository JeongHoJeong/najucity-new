import React from 'react';
import Header from 'subpage/Header'
import Sidebar from 'subpage/Sidebar'
import Footer from 'Footer'

const Subpage = React.createClass({
  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  },

  render() {
    return (
      <div
        className='subpage'
      >
        <Header />
        <div
          className='main-section'
        >
          <Sidebar
            pathname={this.props.location.pathname}
          />
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
});

export default Subpage