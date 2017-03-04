import React from 'react';
import { browserHistory } from 'react-router';

const Sidebar = React.createClass({
  propTypes: {
    pathname: React.PropTypes.string
  },

  render() {
    return (
      <div
        className='sidebar'
      >
        <div
          className='title'
        >
          <i
            className='material-icons'
          >
            view_comfy
          </i>
        </div>
        <Sidebar.Menu
          pathname={this.props.pathname}
        />
      </div>
    );
  }
});

Sidebar.Menu = React.createClass({
  propTypes: {
    pathname: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      pathname: ''
    };
  },

  goToPage(url) {
    if (!this.props.pathname.includes(url)) {
      browserHistory.push(url);
    }
  },

  render() {
    const baseUrl = '/subpage/introduction/';
    let subitems = [
      {
        title: '요약 소개',
        link: baseUrl + 'overview'
      },
      {
        title: '공모분야',
        link: baseUrl + 'categories'
      },
      {
        title: '공모전 사전 워크숍',
        link: baseUrl + 'workshop'
      },
      {
        title: '공모전 본선 대회',
        link: baseUrl + 'finals'
      },
      {
        title: '공모전 심사',
        link: baseUrl + 'evaluation'
      },
      {
        title: '시상 내역',
        link: baseUrl + 'awards'
      }
    ];

    return (
      <div
        className='menu'
      >
        <Sidebar.Menu.Item
          text='공모전 소개'
          selected={this.props.pathname.includes('introduction')}
          onClick={this.goToPage.bind(null, '/subpage/introduction')}
          subitems={subitems}
          pathname={this.props.pathname}
        />
        <Sidebar.Menu.Item
          text='개최 의의'
          selected={this.props.pathname.includes('importance')}
          onClick={this.goToPage.bind(null, '/subpage/importance')}
        />
        <Sidebar.Menu.Item
          text='신청하기'
          selected={this.props.pathname.includes('application')}
          onClick={this.goToPage.bind(null, '/subpage/application')}
        />
      </div>
    );
  }
});

Sidebar.Menu.Item = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired,
    onClick: React.PropTypes.func.isRequired,
    selected: React.PropTypes.bool,
    subitems: React.PropTypes.arrayOf(React.PropTypes.object),
    pathname: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      selected: false,
      subitems: null,
      pathname: ''
    };
  },

  renderSubitems() {
    return (this.props.subitems) ?
      (
        <div
          className={`subitems ${this.props.selected ? 'expanded' : ''}`}
        >
          {
            this.props.subitems.map((item, idx) => {
              return (
                <Sidebar.Menu.Item.Subitem
                  key={idx}
                  title={item.title}
                  link={item.link}
                  selected={this.props.pathname.includes(item.link)}
                />
              );
            })
          }
        </div>
      ) : null;
  },

  render() {
    return (
      <div
        className={`item ${this.props.selected ? 'selected' : ''}`}
        onClick={this.props.onClick}
      >
        <div
          className='title'
        >
          <i
            className='material-icons'
          >
            menu
          </i>
          <div
            className='text'
          >
            {this.props.text}
          </div>
        </div>
        {this.renderSubitems()}
      </div>
    );
  }
});

Sidebar.Menu.Item.Subitem = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
    selected: React.PropTypes.bool,
    link: React.PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      selected: false
    };
  },

  handleClick(e) {
    e.stopPropagation();
    browserHistory.push(this.props.link);
  },

  render() {
    return (
      <div
        className={`subitem ${this.props.selected ? 'selected' : ''}`}
        onClick={this.handleClick}
      >
        {'- ' + this.props.title}
      </div>
    );
  }
});

export default Sidebar