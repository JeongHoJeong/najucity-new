import React from 'react';

AwardsPage = React.createClass({
  render() {
    return (
      <Content
        className='awards'
        title='시상 내역'
      >
        <TextGroup
          title='결과발표'
        >
          2016. 8. 20. (나주시청 및 공모전 홈페이지 공지)
        </TextGroup>
        <TextGroup
          title='우수작 발표회 및 시상'
        >
          2016. 8. 23. (화) - 예정(별도공지)
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
              구분
            </div>
            <div
              className='cell'
            >
              선정
            </div>
            <div
              className='cell'
            >
              시상내역
            </div>
          </div>
          <div
            className='row'
          >
            <div
              className='cell center half'
            >
              <div
                className='subcell'
              >
                <div
                  className='type-of-school'
                >
                  초·중학생부
                </div>
                <div
                  className='type-of-award'
                >
                  <div>
                    최우수상
                  </div>
                  <div>
                    우수상
                  </div>
                  <div>
                    장려상
                  </div>
                </div>
              </div>
            </div>
            <div
              className='cell contents center'
            >
              <div>
                1개팀
              </div>
              <div>
                2개팀
              </div>
              <div>
                3개팀
              </div>
            </div>
            <div
              className='cell contents center'
            >
              <div>
                나주시장상
              </div>
              <div>
                나주시교육장상
              </div>
              <div>
                후원기관장상
              </div>
            </div>
          </div>
          <div
            className='row'
          >
            <div
              className='cell center half'
            >
              <div
                className='subcell'
              >
                <div
                  className='type-of-school'
                >
                  고등부
                </div>
                <div
                  className='type-of-award'
                >
                  <div>
                    최우수상
                  </div>
                  <div>
                    우수상
                  </div>
                  <div>
                    장려상
                  </div>
                </div>
              </div>
            </div>
            <div
              className='cell contents center'
            >
              <div>
                1개팀
              </div>
              <div>
                2개팀
              </div>
              <div>
                3개팀
              </div>
            </div>
            <div
              className='cell contents center'
            >
              <div>
                나주시장상
              </div>
              <div>
                나주시교육장상
              </div>
              <div>
                후원기관장상
              </div>
            </div>
          </div>
        </div>
        <div
          className='caption'
        >
          <div>
            • 수상자 전원 도시디자인 연구회 주최 도시재생 세미나 참여 기회 제공
          </div>
          <div>
            • 공모 자료는 일체 반환하지 않으며, 자료 권한은 나주시에 귀속됨
          </div>
          <div>
            • 아이디어 제안서 심사 후 제출 작품의 수준에 따라 시상하지 않을 수도 있음
          </div>
        </div>
      </Content>
    );
  }
});
