import React from 'react';
import Content from 'subpage/Content'
import TextGroup from 'subpage/TextGroup'

const WorkshopPage = React.createClass({
  render() {
    return (
      <Content
        className='workshop'
        title='공모전 사전 워크숍'
      >
        <TextGroup
          title='일시'
        >
          2016. 7. 24.(일)
        </TextGroup>
        <TextGroup
          title='장소'
        >
          종합운동장 회의실(나주종합스포츠파크 내)
        </TextGroup>
        <div
          className='table'
        >
          <div
            className='header'
          >
            <div
              className='cell'
            >
              일시
            </div>
            <div
              className='cell'
            >
              행사내용
            </div>
            <div
              className='cell'
            >
              비고
            </div>
          </div>
          <div
            className='row'
          >
            <div
              className='cell center'
            >
              13:00-13:30
            </div>
            <div
              className='cell contents center'
            >
              <div>
                참가자 접수
              </div>
            </div>
            <div
              className='cell contents center'
            >
              <div>
                명찰, 워크북
              </div>
            </div>
          </div>
          <div
            className='row'
          >
            <div
              className='cell center'
            >
              13:30-13:45
            </div>
            <div
              className='cell contents center'
            >
              <div>
                개회식, 워크숍장 이동
              </div>
            </div>
            <div
              className='cell contents'
            />
          </div>
          <div
            className='row'
          >
            <div
              className='cell center'
            >
              13:45-16:30
            </div>
            <div
              className='cell contents center'
            >
              <div>
                지원분야별 워크숍
              </div>
            </div>
            <div
              className='cell contents center'
            >
              <div>
                분야별 전문가 4인
              </div>
              <div>
                학부모 전문가 1
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
});

export default WorkshopPage