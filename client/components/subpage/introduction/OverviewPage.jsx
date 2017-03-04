import React from 'react';
import Content from 'subpage/Content'
import TextGroup from 'subpage/TextGroup'

const OverviewPage = React.createClass({
  render() {
    return (
      <Content
        className='overview'
        title='요약 소개'
      >
        <TextGroup
          title='응모자격'
          oneLine={true}
        >
          초, 중, 고등학생 (2~5명 1팀 구성)
        </TextGroup>
        <TextGroup
          title='참가신청'
          oneLine={true}
        >
          2016. 7. 15.(금) ~ 7. 22.(금) 18:00
        </TextGroup>
        <TextGroup
          title='공모전 사전 워크숍'
          oneLine={true}
        >
          2016. 7. 24.(일) 13:00~17:00
        </TextGroup>
        <TextGroup
          title='공모작 제출'
          oneLine={true}
        >
          2016. 7. 25.(월) ~ 8.16.(화)
        </TextGroup>
        <TextGroup
          title='공모심사발표'
          oneLine={true}
        >
          2016. 8. 19.(금) - 공모전 홈페이지 공지
        </TextGroup>
        <TextGroup
          title='우수작 발표회 및 시상'
          oneLine={true}
        >
          2016. 8. 23.(화) - 예정(별도공지)
        </TextGroup>
        <TextGroup
          title='주최/주관'
          oneLine={true}
        >
          나주시/나주교육진흥재단
        </TextGroup>
        <TextGroup
          title='후원'
          oneLine={true}
        >
          KAIST융합교육연구센터, (주)월드클래스에듀
        </TextGroup>
      </Content>
    );
  }
});

export default OverviewPage