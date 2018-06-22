import React from 'react';
import { Row, Icon } from 'antd';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

const Resume = () => (
  <Row className= "content-row" style={{ background: '#f0f2f5' }}>
    <VerticalTimeline animate={false}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Mars 2018 - Aujourd'hui"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon type="heart" className='resume-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Développeur FullStack - Alternance</h3>
        <h4 className="vertical-timeline-element-subtitle">Abbeal - 20 Rue Cadet, 75009 Paris</h4>
        <p>
          Référent technique sur le projet Syllabo
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Septembre 2018 - Février 2018"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon type="rocket" className='resume-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Développeur FullStack - Alternance</h3>
        <h4 className="vertical-timeline-element-subtitle">Pixel Cookers - 3 Rue des Chauffours 95000 Cergy</h4>
        <p>
          Développement de l'application Beneylu
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </Row>
);

export default Resume;
