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
        <h4 className="vertical-timeline-element-subtitle">
          <a target="_blank" rel="noopener noreferrer" href="http://www.abbeal.com/">Abbeal</a> - 20 Rue Cadet, 75009 Paris
        </h4>
        <p>
          Référent technique sur le projet Syllabo (Node.js & Express.js, SSR, React & Redux, TDD, Kanban)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Septembre 2017 - Février 2018"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon type="rocket" className='resume-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Développeur FullStack - Alternance</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a target="_blank" rel="noopener noreferrer" href="https://beneylu.com/school/fr/">Pixel Cookers</a> - Immeuble Ordinal, 4 Rue des Chauffours 95000 Cergy
        </h4>
        <p>
          Développement de l'application Beneylu (PHP Symfony 2, AngularJS, Angular 5, MariaDB)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Septembre 2016 - Août 2017"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon type="tool" className='resume-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Développeur FullStack - Alternance</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a target="_blank" rel="noopener noreferrer" href="http://www.kleegroup.com/site/j_6/fr/accueil">Klee Group</a> - La Boursidière, 92357 Le Plessis-Robinson
        </h4>
        <p>
          TMA sur différents projets pour le compte du Ministère de l'Environnement, de l'Énergie et de la Mer :
        </p><br/>
        <div>
          <ul>
            <li>ISIDOR (Java EE, Struts 2, Spring, JavaScript)</li>
            <li>ISIS (Java EE, Struts 2)</li>
            <li>Natura 2000 (Java EE, Struts 1, Hibernate)</li>
        </ul>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Février 2016 - Juillet 2016"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon type="safety" className='resume-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Développeur BackEnd - Stage</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a target="_blank" rel="noopener noreferrer" href="http://www.kleegroup.com/site/j_6/fr/accueil">Klee Group</a> - La Boursidière, 92357 Le Plessis-Robinson
          </h4>
        <p>
          Intervention sur le projet Alpha en collaboration avec les sociétés Oalia et IBM
          pour le compte du Ministère de la Défense (Java EE, Web Services)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--school"
        date="2014 - 2018"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(255, 255, 255)' }}
        icon={<Icon type="trophy" className='resume-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">
          <a target="_blank" rel="noopener noreferrer" href="https://www.intechinfo.fr/">IN'TECH</a>
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Expert en Ingénierie Logicielle - Titre certifié Niveau I au RNCP</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Octobre 2013 - Avril 2014"
        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        icon={<Icon type="tool" className='resume-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">Développeur PHP/Java EE - Stage</h3>
        <h4 className="vertical-timeline-element-subtitle">
          <a target="_blank" rel="noopener noreferrer" href="https://atos.net/fr/">AtoS</a> - 80 Quai Voltaire, 95870 Bezons
        </h4>
        <p>
          Amélioration du site intranet S.A.D. (Symfony 1)
        </p>
        <p>
          TMA sur le projet I.T.R.F. pour le compte du Ministère de l'Éducation Nationale (Java EE, Struts 1)
        </p>
        <p>
          Élaboration d'un réseau social professionnel avec les chefs de l'entité Application Management
          dans le cadre du programme "Zéro Email" (blueKiwi)
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--school"
        date="2011 - 2014"
        iconStyle={{ background: 'rgb(233, 30, 99)', color: 'rgb(255, 255, 255)' }}
        icon={<Icon type="trophy" className='resume-icon'/>}
      >
        <h3 className="vertical-timeline-element-title">
          <a target="_blank" rel="noopener noreferrer" href="https://www.univ-paris5.fr/">Université René Descartes (Paris V)</a>
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Diplôme Universitaire de Technologie</h4>
      </VerticalTimelineElement>
    </VerticalTimeline>
  </Row>
);

export default Resume;
