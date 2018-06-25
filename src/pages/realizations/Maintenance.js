import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import persevere from '../../persevere.png';
import integrity from '../../integrity.png';
import empathy from '../../empathy.png';
import teamwork from '../../teamwork.png';

import htmlCSS from '../../html-css.png';
import javascript from '../../javascript.png';
import database from '../../database.png';

const Maintenance = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Tierce Maintenance Applicative</h1>
    </Row>
    <Row className="realization-content">
      <Row type="flex" className="">
        <h2>Une précieuse expérience</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Je pense avoir été chanceux d'être passé par de la TMA lors de mes débuts dans le monde professionnel.
          La maintenance est une phase du cycle de vie d'une application souvent peu appréciée par les développeurs.
          Mais pourquoi ?
        </p>
        <p>
          La TMA arrive quand le produit final a été livré et donc considéré comme terminé.
          Il y a donc moins de défi à relever. Or, on aime souvent commencer de nouveaux projets car cela apporte
          son lot de challenge et pouvoir mener un projet à son terme procure énormément de satisfaction.
        </p>
        <p>
          Mais il faut bien des développeurs pour maintenir les applications en corrigeant des bugs ou en introduisant
          de nouvelles fonctionnalités. Certains développeurs apprécient la maintenance mais de mon expérience,
          une fois qu'on à fait le tour, on commence à s'ennuyer et l'évolution stagne.
        </p>
        <p>
          On apprend beaucoup en faisant des maintenances. On sait gérer des bases de code énorme
          datant de cinq ou dix ans. Le code présent et l'architecture choisi par les personnes ayant
          travaillé sur les différentes applications nous enseigne ce qui a fonctionné ou non lorsqu'un projet grandi et se développe sur plusieurs années.
        </p>
        <p>
          Il faut de la flexibilité et et de l'adaptabilité pour mener des maintenances correctement.
          On acquiert une capacité à prendre en main rapidement des projets d'envergure et n'avons pas peur de code
          monstrueux ou surprenant comme un fichier de code faisant plus de milles lignes de code de conditions imbriqués.
        </p>
        <p>
          Une chose primordiale que j'ai appris en faisant de la maintenance sur des projets de longue date
          est l'importance des tests. Sur le moment, on a l'impression de perdre du temps et de ne pas pouvoir
          se concentrer sur la valeur qu'on doit apporter à un produit. Mais les tests sont un investissement
          qui feront gagner un temps considérable, facilitera la maintenance du produit et son évolution.
          Une somme d'argent non négligeable sera économisée. En bref, cela réduit ce qu'on appelle la dette technique.
        </p>
        <p>
          Pour ne pas finir comme le Titanic, faites des tests.
        </p>
      </Row>
      <Row type="flex">
        <h2>ATOS</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Lors de ma dernière année de DUT, j'ai effectué un stage de 6 mois chez Atos lors.
          En plus du projet S.A.D je suis aussi intervenu sur le projet I.T.R.F.
        </p>
      </Row>
      <Row type="flex">
        <h3>Suivi des Activités des Développeurs</h3>
      </Row>
      <Row type="flex" className="">
        <p>
          S.A.D. est une application web développée en PHP (Symfony 1) qui permet de suivre au sein d'un projet,
          l'activité des développeurs en jour/homme. Ainsi, le chef de projet pourra mieux contrôler et planifier
          l'état d'avancement de son projet à travers les réalisations de l'équipe. Les collaborateurs pourront
          avoir une vue d'ensemble du projet et réserver les tâches qu'ils comptent réaliser et indiquer le temps nécessaire.
        </p>
      </Row>
      <Row type="flex">
        <h3>I.T.R.F. (Ingénieurs et personnels Technique de Recherche et de Formation)</h3>
      </Row>
      <Row type="flex" className="">
        <p>
          ITRF est un projet pour le compte du Ministère de l'Éducation. Le projet sa traduit par le développement
          d'une application web réalisée en Java EE qui permet l'inscription et le suivi d'un candidat lors de l'examen.
        </p>
        <p>
          Lors du développement de l'application, j'ai pu travailler avec trois développeurs venant d'Inde avec
          qui j'ai beaucoup appris. Nous discutions en anglais et cet échange de culture était intéressant.
        </p>
      </Row>
      <Row type="flex">
        <h2>KLEE GROUP</h2>
      </Row>
      <Row type="flex">
        <p>
          Pendant une année d'alternance, j'ai développé sur les projets ISIDOR et Natura 2000,
          deux applications web ayant plus de cinq ans d'existences et assez complexe à prendre en main.
        </p>
      </Row>
      <Row type="flex">
        <h3>ISIDOR</h3>
      </Row>
      <Row type="flex">
        <h3>Natura 2000</h3>
      </Row>
      <br/>
      <Row type="flex" justify="center">
        <h2>Compétences</h2>
      </Row>
      <br/>
      <Row type="flex" justify="center" gutter={16}>
        <Link to="/skills/htmlCSS" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Html5 & CSS3">
            <img src={htmlCSS} alt="Html5 et CSS3" className="skills-button"/>
          </Tooltip>
        </Link>
        <Link to="/skills/javascript" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Javascript">
            <img src={javascript} alt="Javascript" className="skills-button"/>
          </Tooltip>
        </Link>
        <Link to="/skills/database" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Base de données">
            <img src={database} alt="Base de données" className="skills-button"/>
          </Tooltip>
        </Link>
      </Row>
      <br/>
      <Row type="flex" justify="center" gutter={16}>
        <Link to="/skills/persevere" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Persévérer">
            <img src={persevere} alt="Persévérer" className="skills-button"/>
          </Tooltip>
        </Link>
        <Link to="/skills/integrity" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Intégrité">
            <img src={integrity} alt="Intégrité" className="skills-button"/>
          </Tooltip>
        </Link>
        <Link to="/skills/empathy" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Empathie">
            <img src={empathy} alt="Empathie" className="skills-button"/>
          </Tooltip>
        </Link>
        <Link to="/skills/teamwork" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Travail d'équipe">
            <img src={teamwork} alt="Travail d'équipe" className="skills-button"/>
          </Tooltip>
        </Link>
      </Row>
    </Row>
  </Row>
);

export default Maintenance;
