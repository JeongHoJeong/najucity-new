import React from 'react';

CategoriesPage = React.createClass({
  render() {
    return (
      <Content
        className='categories'
        title='공모분야'
      >
        <div
          className='table'
        >
          <div
            className='header'
          >
            <div
              className='cell'
            >
              분야
            </div>
            <div
              className='cell'
            >
              세부내용
            </div>
          </div>
          <div
            className='row'
          >
            <div
              className='cell center'
            >
              역사·문화·예술
            </div>
            <div
              className='cell contents'
            >
              <div>
                창조적 도시재생을 위한 문화예술매개 만들기
              </div>
              <div>
                역사, 관광 등 도시특화 및 관광인프라 구축
              </div>
              <div>
                전통있는 지역자산을 활용한 역사·문화 재생
              </div>
            </div>
          </div>
          <div
            className='row'
          >
            <div
              className='cell center'
            >
              건축·지역마을
            </div>
            <div
              className='cell contents'
            >
              <div>
                주거지역 및 기존 건축물의 기능을 개선하는 아이디어
              </div>
              <div>
                도시공간 활용 또는 복합공간으로 재생하는 아이디어
              </div>
              <div>
                폐자원 활용하여 주거 및 생활환경 개선사업
              </div>
            </div>
          </div>
          <div
            className='row'
          >
            <div
              className='cell center'
            >
              친환경·에너지
            </div>
            <div
              className='cell contents'
            >
              <div>
                에너지 절약형 친환경 도시 및 건축 재생 아이디어
              </div>
              <div>
                에코시티 및 자원 재이용 생태도시 아이디어
              </div>
              <div>
                미래도시 및 스마트시티 재생 아이디어
              </div>
            </div>
          </div>
          <div
            className='row'
          >
            <div
              className='cell center'
            >
              커뮤니티·융합
            </div>
            <div
              className='cell contents'
            >
              <div>
                지역 커뮤니티 소통 아이디어
              </div>
              <div>
                ICT+지역산업 융합 아이디어
              </div>
              <div>
                기타 지역발전 도시재생 아이디어
              </div>
            </div>
          </div>
        </div>
      </Content>
    );
  }
});
