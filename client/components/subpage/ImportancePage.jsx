import React from 'react';

ImportancePage = React.createClass({
  render() {
    return (
      <Content
        className='importance'
        title='개최 의의'
      >
        <div
          className='circles'
        >
          <TextCircle
            text={['공모전 참가를 통해', '다양한 전공분야의', '간접적 체험활동을 제공']}
          />
          <TextCircle
            orange={true}
            text={['지역사회 문화와 역사를', '이해하고 계승 발전을 위한', '사회적 인식 제고']}
          />
          <TextCircle
            text={['미래 지역사회 주인공인', '학생들의 눈높이에서', '도시재생 아이디어 발굴']}
          />
        </div>
      </Content>
    );
  }
});
