import React from 'react';
import Content from 'subpage/Content'
import TextGroup from 'subpage/TextGroup'

const EvaluationPage = React.createClass({
  tableContents: [
    ['창의성', '(30)', ['작품의 우수성과 함께 출품자 학력 수준에서의 창의성 반영', '아이디어의 독창성', '문제해결을 위한 접근방법 및 접근과정에서의 창의성']],
    ['이론적 타당성', '(30)', ['작품의 목적, 과정, 결론의 명확성 여부', '작품의 뒷받침하는 자료와 결론의 확실한 제시']],
    ['성실성', '(20)', ['작품에 대한 구체적 서술과 표현', '제출된 응모 신청서의 완성도 여부']],
    ['노력도', '(20)', ['작품 제작과 출품과정에 학생의 노력 및 직접 참여 정도', '출품자 전원의 참여도와 팀 협력 정도 반영']]
  ],

  renderRows() {
    return this.tableContents.map((row, idx) => {
      return (
        <TableRow
          key={idx}
          row={row}
        />
      );
    });
  },

  render() {
    return (
      <Content
        className='evaluation'
        title='공모전 심사'
      >
        <TextGroup
          title='심사일정'
        >
          2016. 8. 16. ~ 8. 20.
        </TextGroup>
        <TextGroup
          title='심사기준'
        >
          창의성(30), 이론적 타당성(30), 성실성(20), 노력도(20) 등 총 100점 만점으로 서면 심사 후 선정
        </TextGroup>
        <div
          className='table'
        >
          {this.renderRows()}
        </div>
      </Content>
    );
  }
});

const TableRow = React.createClass({
  propTypes: {
    row: React.PropTypes.array.isRequired
  },

  renderContents() {
    return this.props.row[2].map((text, idx) => {
      return (
        <div
          key={idx}
        >
          {text}
        </div>
      );
    });
  },

  render() {
    return (
      <div
        className='row'
      >
        <div
          className='cell center'
        >
          <div
            className='criterion'
          >
            {this.props.row[0]}
          </div>
          <div
            className='ratio'
          >
            {this.props.row[1]}
          </div>
        </div>
        <div
          className='cell contents center'
        >
          {this.renderContents()}
        </div>
      </div>
    );
  }
});

export default EvaluationPage