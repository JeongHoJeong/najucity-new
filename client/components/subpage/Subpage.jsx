import React from 'react';

Subpage = React.createClass({
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
