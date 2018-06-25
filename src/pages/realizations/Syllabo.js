import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import persevere from '../../persevere.png';
import integrity from '../../integrity.png';
import empathy from '../../empathy.png';
import teamwork from '../../teamwork.png';

import htmlCSS from '../../html-css.png';
import javascript from '../../javascript.png';
import webpack from '../../webpack.png';
import practice from '../../practice.png';
import database from '../../database.png';

const Syllabo = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Syllabo</h1>
    </Row>
    <Row className="realization-content">
      <Row type="flex" className="">
        <h2>Abbeal Valley</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Abbeal Valley, c'est l'opportunité qu'offre Abbeal de mener à bien des produits en interne.
          Les produits sont proposés par les collaborateurs.  Une première présélection est réalisée afin de
          déterminer les propositions de produits les plus aboutis. Une fois cette première étape passée, la personne
          portant le produit devient Product Owner. Abbeal se charge des différents aspects extérieurs comme les
          partenariats avec différentes écoles qui participeront au développement du projet.
        </p>
        <p>
          Syllabo est un des projets retenus. Dans un premier temps, le produit a été développé par un groupe d'étudiants.
          J'intègre Abbeal Valley afin de pousser le produit jusqu'au étoiles.
        </p>
      </Row>
      <Row type="flex">
        <h2>Syllabo : Késako ?</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Syllabo est une application ludo-éducative qui propose de se placer en complément du système scolaire pour
          des enfants du primaire. L'enfant vivra une immersion culturelle et sera plongé dans un environnement
          historique en commençant par la Grèce antique. Syllabo proposera ensuite des éléments ludiques,
          mathématiques, scientifiques, géographiques et littéraires.
        </p>
      </Row>
      <Row type="flex">
        <h2>Après Beneylu, voici Syllabo</h2>
      </Row>
      <Row type="flex">
        <p>
          Mon aventure avec Beneylu(lien) s'est terminée et me voici à développer pour ce magnifique produit qu'est Syllabo.
          Cette fois, je pars presque de zéro et quel bonheur ! Je vis en ce moment mon rêve car je ressens les mêmes émotions
          que lorsque j'étais sur It'School(lien). Mon équipe n'est certes pas là, mais ce que je veux apporter à l'aide mon métier,
          mon but et mon rêve se retrouvent au travers de Syllabo.
        </p>
        <p>
          Comme pour Beneylu(lien), un nouveau challenge se présente car je dois monter en compétence
          sur du Node.js avec Express ainsi que sur du MongoDB. Mais je dois aussi m'approprier React avec Redux et Saga(liens).
          Fort de mes expériences précédentes, je me dis que je peux le faire.
        </p>
        <p>
          Nous appliquons la méthode Kanban. C'est encore nouveau et
          j'apprécie les bienfaits de ses méthodes qui poussent à travailler dans un environnement calme,
          serein ou l'on peut atteindre son plein potentiel. Nous utilisons Git avec Github pour le versioning.
        </p>
        <p>
          J'ai eu l'occasion de présenter quelques démonstrations de l'application auprès des collègues
          et ayant reçu de bon feedback, je pense être sur la bonne voie techniquement et humainement.
        </p>
        <p>
          Au moment où j'écris ces lignes, je développe encore sur Syllabo.
          J'espère bien prolonger ce rêve jusqu'au moment où nous présenterons le produit aux enfants.
          Et pourquoi pas continuer le produit plus loin et pouvoir le faire vivre financièrement.
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
        <Link to="/skills/webpack" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Webpack">
            <img src={webpack} alt="Webpack" className="skills-button"/>
          </Tooltip>
        </Link>
        <Link to="/skills/practice" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="BDD et TDD">
            <img src={practice} alt="BDD et TDD" className="skills-button"/>
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
            <img src={persevere} alt="Persévérer" className="skills-button"
            />
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

export default Syllabo;
