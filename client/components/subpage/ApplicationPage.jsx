import React from 'react';

ApplicationPage = React.createClass({
  render() {
    return (
      <Content
        className='application'
        title='공모전 1차 신청'
      >
        <a
          href='http://goo.gl/forms/FQmKAf7xxSZRPuLT2'
          target='_blank'
        >
          <button>
            참가 신청
          </button>
        </a>
        <div
          className='description'
        >
          <div>
            - 신청기간: 2016. 7. 15.(금) ~ 7. 22. (금) 18:00
          </div>
          <div>
            - 참가자격: 초·중·고 학생 2~5인으로 구성된 팀
          </div>
          <div
            className='small'
          >
            <div>
              • 공동체 정신 함양을 위해서 학생 1인으로 참가할 수 없음.
            </div>
            <div>
              • 팀 구성은 출품자와 동일 학교(초등-초등, 중등-중등, 고등-고등) 원칙
            </div>
          </div>
        </div>
      </Content>
    );
  }
});
