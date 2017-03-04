import React from 'react';
import Subsection from 'main-page/Subsection'

const ScheduleSection = React.createClass({
  table: [
    ['1차 신청', '7.15(금)~7.22(금) 18:00'],
    ['사전 워크숍', '7.24(일) 13:00~17:00'],
    ['본선 대회', '7.26~8.15'],
    ['심사', '8.16~8.20'],
    ['결과 발표', '8.20'],
    ['우수작 발표회/심사', '8.23']
  ],

  renderTable() {
    return this.table.map((row, idx) => {
      return (
        <ScheduleSection.Row
          key={idx}
          leftColumn={row[0]}
          rightColumn={row[1]}
        />
      );
    });
  },

  render() {
    return (
      <Subsection
        id='schedule'
        className='schedule'
      >
        <div
          className='box'
        >
          <div
            className='title'
          >
            대회일정
          </div>
          <div
            className='table'
          >
            {this.renderTable()}
          </div>
        </div>
      </Subsection>
    );
  }
});

ScheduleSection.Row = React.createClass({
  propTypes: {
    leftColumn: React.PropTypes.string.isRequired,
    rightColumn: React.PropTypes.string.isRequired
  },

  render() {
    return (
      <div
        className='row'
      >
        <div
          className='left-column'
        >
          {this.props.leftColumn}
        </div>
        <div
          className='right-column'
        >
          {this.props.rightColumn}
        </div>
      </div>
    );
  }
});

export default ScheduleSection