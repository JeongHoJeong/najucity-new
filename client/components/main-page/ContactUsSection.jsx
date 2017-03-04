import React from 'react';
import Subsection from 'main-page/Subsection'
import Map from 'main-page/Map'

const ContactUsSection = React.createClass({
  render() {
    return (
      <Subsection
        id='contact-us'
        className='contact-us'
      >
        <div
          className='title'
        >
          <div
            className='contact-us'
          >
            CONTACT US
          </div>
          <div
            className='subtitle'
          >
            도시재생 아이디어 공모전 사무국
          </div>
        </div>
        <div
          className='map'
        >
          <Map />
        </div>
        <div
          className='info'
        >
          <div>
            나주시 도시재생아이디어공모전 사무국
          </div>
          <div>
            전화: 042-825-8203  팩스: 042-367-0378
          </div>
          <div>
            이메일: worldclassedu@naver.com  KaKao: @worldclassedu
          </div>
        </div>
      </Subsection>
    );
  }
});

export default ContactUsSection