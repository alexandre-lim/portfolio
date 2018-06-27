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
          une fois qu'on à fait le tour, on commence <span className="span-bold">à s'ennuyer et l'évolution stagne.</span>
        </p>
        <p>
          On apprend beaucoup en faisant des maintenances. On sait <span className="span-bold">gérer des bases de code énorme </span>
          datant de cinq ou dix ans. Le code présent et l'architecture choisi par les personnes ayant
          travaillé sur les différentes applications nous enseigne ce qui a <span className="span-bold">fonctionné ou non lorsqu'un projet grandi et se développe sur plusieurs années.</span>
        </p>
        <p>
          Il faut de la <span className="span-bold">flexibilité et de l'adaptabilité</span> pour mener des maintenances correctement.
          On acquiert une capacité à prendre en main rapidement des projets d'envergure et n'avons pas peur de code
          monstrueux ou surprenant comme un fichier faisant plus de mille lignes de code de conditions imbriquées.
        </p>
        <p>
          Une chose primordiale que j'ai apprise en faisant de la maintenance sur des projets de longue date
          est <span className="span-bold">l'importance des tests.</span> Sur le moment, on a l'impression de perdre du temps et de ne pas pouvoir
          se concentrer sur la valeur qu'on doit apporter à un produit. Mais les tests sont un investissement
          qui feront gagner un temps considérable, facilitera la maintenance du produit et son évolution.
          Une somme d'argent non négligeable sera économisée. En bref, cela réduit ce qu'on appelle <span className="span-bold">la dette technique.</span>
        </p>
        <p>
        <span className="span-bold">Pour ne pas finir comme le Titanic, faites des tests.</span>
        </p>
      </Row>
      <Row type="flex">
        <h2>ATOS</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Lors de ma dernière année de DUT, j'ai effectué un stage de 6 mois chez Atos.
          En plus du projet <span className="span-bold">S.A.D</span> je suis aussi intervenu sur le projet <span className="span-bold">I.T.R.F.</span>
        </p>
      </Row>
      <Row type="flex">
        <h3>Suivi des Activités des Développeurs</h3>
      </Row>
      <Row type="flex" className="">
        <p>
          S.A.D. est une application web développée en <span className="span-bold">PHP (Symfony 1)</span> qui permet de suivre au sein d'un projet,
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
          ITRF est un projet pour le compte du <span className="span-bold">Ministère de l'Éducation.</span> Le projet sa traduit par le développement
          d'une application web réalisée en <span className="span-bold">Java EE</span> qui permet l'inscription et le suivi d'un candidat lors de l'examen.
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
          Pendant une année d'alternance, j'ai développé sur les projets <span className="span-bold">ISIDOR et Natura 2000, </span>
          deux applications web ayant plus de cinq ans d'existences et assez complexes à prendre en main.
        </p>
      </Row>
      <Row type="flex">
        <h3>ISIDOR & Natura 2000</h3>
      </Row>
      <Row type="flex">
        <p>
          ISIDOR et Nature 2000 sont des applications web pour le compte du <span className="span-bold">Ministère de l'Environnement, de l'Energie et de la Mer. </span>
          Les technologies étaient identiques, avec du <span className="span-bold">Java EE, du Struts et du Hibernate pour ISIDOR.</span>
        </p>
        <p>
          ISIDOR est une application de cartographie où l'utilisateur peut gérer les projets sur les routes de France.
          Il était par exemple possible de planifier des travaux sur une portion de route ou d'estimer le temps du projet.
          Nous utilisions le <span className="span-bold">SGBDR PostgreSQL</span> et la maintenance a demandé beaucoup de travail au niveau de la carte.
          Il fallait jouer sur les évènements et l'interaction de l'utilisateur au niveau de l'interface de cartographie.
          C'est à ce moment où j'ai beaucoup appris sur le langage <span className="span-bold">JavaScript</span> car il n'y avait aucune librairie pour m'aider.
        </p>
        <p>
          Natura 2000 permet de protéger un certain nombre d'habitats et d'espèces représentatifs de la biodiversité européenne.
          Le projet fait partie du réseau Natura 2000. Là aussi, le SGBDR PostgreSQL était présent mais il n'y avait pas d'ORM (Object Relational Mapping),
          tout était fait à la main. J'ai donc énormément appris et pu voir les avantages et inconvénients concernant
          l'utilisation d'un ORM.
        </p>
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
