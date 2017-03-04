import React from 'react';

ContactUsSection = React.createClass({
  render() {
    return (
      <Subsection
        id='contact-us'
        className='contact-us'
      >
        <div
          className='title'
        >
          FAQ
        </div>
        <QA
          q='1차 온라인 신청 때 구성한 팀원을 변경할 수 있나요?'
          a={['네. 최종참가명단은 최종적으로 제출한 최종 공모작을 기준으로 합니다.', '변경된 팀원이 있다면 최종공모작 제출 시 제출서류에 변경해 기재해주시면 됩니다.']}
        />
        <QA
          q='1차 온라인 신청을 했는데, 제출기간 안에 서류를 제출하지 못하면 어떻게 되나요?'
          a={['참가신청을 했더라도 최종 서류제출이 안될 시 신청이 자동으로 취소됩니다.', '공모작 제출기간 : 2016. 7. 25.(월) ~ 8.16.(화)']}
        />
        <QA
          q='1차 온라인 신청을 하지 못해 현장에서 신청했는데, 잘 접수되었는지 궁금해요.'
          a={['온라인 신청과 현장 신청 인원은 현재 정상적으로 신청이 완료되었습니다.', '또한 참가명단은 최종적으로 제출한 최종 공모작을 기준으로 하기 때문에', '혹시 신청이 누락되었더라도 최종 서류제출만 공모기한안에 이루어지면 불이익이 없습니다.']}
        />
      </Subsection>
    );
  }
});

const QA = React.createClass({
  propTypes: {
    q: React.PropTypes.string.isRequired,
    a: React.PropTypes.arrayOf(React.PropTypes.string).isRequired
  },

  renderContents() {
    return this.props.a.map((line, idx) => {
      return (
        <div
          key={idx}
        >
          {line}
        </div>
      );
    });
  },

  render() {
    return (
      <div
        className='qa'
      >
        <div
          className='line question'
        >
          <div
            className='prefix q'
          >
            Q
          </div>
          <div
            className='content q'
          >
            {this.props.q}
          </div>
        </div>
        <div
          className='line answer'
        >
          <div
            className='prefix a'
          >
            A
          </div>
          <div
            className='content'
          >
            {this.renderContents()}
          </div>
        </div>
      </div>
    );
  }
});
