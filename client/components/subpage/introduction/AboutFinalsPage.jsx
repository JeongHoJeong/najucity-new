import React from 'react';
import Content from 'subpage/Content'
import TextGroup from 'subpage/TextGroup'

const AboutFinalsPage = React.createClass({
  render() {
    return (
      <Content
        className='about-finals'
        title='공모전 본선 대회'
      >
        <TextGroup
          title='공모작 응모기간'
        >
          2016. 7. 26. ~ 8. 15.
        </TextGroup>
        <TextGroup
          title='응모방법'
        >
          <div
            className='has-some-bottom-margin'
          >
            아래 첨부파일(제출 서류 및 양식)들을 팀명.zip으로 묶어서 아래 메일로 제출해 주시기 바랍니다.
          </div>
          <div
            className='has-some-bottom-margin'
          >
            제출 확인이 되면 회신메일로 안내드리겠습니다.
          </div>
          <div
            className='delivery-list'
          >
            <Attachment
              link='/docs/application.xlsx'
              name='공모전 참가 신청서.xlsx'
            />
            <Attachment
              link='/docs/idea_summary.hwp'
              name='아이디어 요약서.hwp'
            />
            <Attachment
              link='/docs/idea_proposal.hwp'
              name='아이디어 제안서.hwp'
              description='15쪽 내외 PPT 파일 또는 10쪽 내외 한글 파일'
            />
            <Attachment
              link='/docs/copyright.hwp'
              name='저작권 동의서.hwp'
            />
          </div>
        </TextGroup>
        <TextGroup
          contentClassName='has-some-padding-top-bottom'
          title='제출 이메일 주소'
        >
          worldclassedu@naver.com
        </TextGroup>
      </Content>
    );
  }
});

const Attachment = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      description: null
    };
  },

  render() {
    return (
      <a
        className='attachment'
        href={this.props.link}
        download={this.props.name}
      >
        <i
          className='material-icons'
        >
          attach_file
        </i>
        <div
          className='name'
        >
          {this.props.name}
        </div>
        <div
          className='description'
        >
          {this.props.description ? `(${this.props.description})` : ''}
        </div>
      </a>
    );
  }
});

export default AboutFinalsPage