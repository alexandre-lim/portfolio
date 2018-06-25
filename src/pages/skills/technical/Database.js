import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import itschool from '../../../itschool.png';
import beneylu from '../../../beneylu.png';
import abbeal from '../../../abbeal.png';
import alpha from '../../../alpha.png';
import maintenance from '../../../maintenance.png';

const Database = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Les bases de données</h1>
    </Row>
    <Row type="flex" className="">
      <p>
        Une base de données permet de stocker des informations de façon organisées que l'on peut consulter, gérer et mettre à jour.
      </p>
      <p>
        Nous utilisons un Système de Gestion de Base de Données (SGBD) qui est un logiciel qui permet d'interagir avec une
        base donnée afin d'y faire nos opérations.
      </p>
      <p>
        Il existe plusieurs types de base de données et aujourd'hui les plus utilisées sont le SQL, NoSQL et cloud.
        Mes différentes expériences m'ont amené à utiliser les BDD SQL et NoSQL.
      </p>
    </Row>
    <Row type="flex">
      <h2>Base de données SQL dit relationnelle</h2>
    </Row>
    <Row type="flex" className="">
      <p>
        Ce type de base de données a été inventé en 1970 par Edgar Frank Codd de IBM.
      </p>
      <p>
        J'ai utilisé dans le cadre de mes études le SGBDR
        <a target="_blank" rel="noopener noreferrer" href="https://www.mysql.com/fr/"> MySQL </a>
        , surement le plus connu.
        Puis lors de mes projets chez Klee Group j'ai utilisé
        <a target="_blank" rel="noopener noreferrer" href="https://www.postgresql.org/"> PostgreSQL </a>
        puis<a target="_blank" rel="noopener noreferrer" href="https://mariadb.org/"> MariaDB </a> en développant
        l'application Beneylu.
      </p>
      <p>
        Ces SGBDR sont des systèmes libres, c'est-à-dire libre et gratuit d'utilisation qu'on oppose aux systèmes
        propriétaires comme
        <a target="_blank" rel="noopener noreferrer" href="https://www.oracle.com/fr/database/index.html"> Oracle Database.</a>.
      </p>
      <p>
        L'API standard pour les bases de données relationnelles est le Structured Query Language (SQL).
        Ce langage est un standard et permet de donner des instructions au SGBDR afin de faire des opérations sur la base de données.
        Il est donc possible d'écrire un script SQL pouvant être réutilisé par les différents SGBDR même si chaque logiciel
        possède quelques variantes.
      </p>
    </Row>
    <Row type="flex">
      <h2>Base de données NoSQL</h2>
    </Row>
    <Row type="flex">
      <p>
        L'utilisation des ces deux types de base a enrichi mon expérience et ma vision du stockage de données.
        Cela me permet mieux comprendre les enjeux et de donner mon opinion lorsqu'il se pose la question du choix entre une
        base SQL ou NoSQL.
      </p>
      <p>
        Si une entreprise doit analyser d'importantes quantités de données non structurées, ou des données stockées sur
        plusieurs serveurs cloud virtuels, le NoSQL est idéale. Avec l'essor du Big Data, les bases de données NoSQL sont de plus
        en plus privilégiées.
      </p>
      <p>
        J'ai découvert
        <a target="_blank" rel="noopener noreferrer" href="https://redis.io/"> Redis </a>lorsque j'ai travaillé sur Beneylu et
        <a target="_blank" rel="noopener noreferrer" href="https://www.mongodb.com/"> MongoDB </a>avec le projet Syllabo.
      </p>
    </Row>
    <Row type="flex">
      <h2>Retour d'expériences</h2>
    </Row>
    <Row type="flex">
      <p>
        L'utilisation des ces deux types de base a enrichi mon expérience et ma vision du stockage de données.
        Cela me permet mieux comprendre les enjeux et de donner mon opinion lorsqu'il se pose la question du choix
        entre une base SQL ou NoSQL.
      </p>
      <p>
        Je ne pense pas qu'il ait une meilleure BDD qu'une autre. Chaque type de BDD présente ces avantages et
        contraintes pour répondre à un besoin spécifique. Il est de notre devoir de s'informer afin d'aider ou de
        prendre la décision finale parmi toutes les propositions.
      </p>
      <p>
        Mes diverses expériences m'ont donné la capacité à prendre en main et agir efficacement sur les BDD SQL et NoSQL.
        J'ai encore beaucoup à apprendre concernant les BDD et cela me motive à creuser petit à petit dans ce vaste domaine.
      </p>
    </Row>
    <Row type="flex">
      <h2>Réalisations</h2>
    </Row>
    <Row type="flex" gutter={16}>
      <Link to="/realizations/itschool" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="It'School">
          <img src={itschool} alt="It'School" className="realizations-button"/>
        </Tooltip>
      </Link>
      <Link to="/realizations/beneylu" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="Beneylu">
          <img src={beneylu} alt="Beneylu" className="realizations-button"/>
        </Tooltip>
      </Link>
      <Link to="/realizations/syllabo" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="Syllabo">
          <img src={abbeal} alt="Syllabo" className="realizations-button"/>
        </Tooltip>
      </Link>
      <Link to="/realizations/alpha" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="Alpha">
          <img src={alpha} alt="Alpha" className="realizations-button"/>
        </Tooltip>
      </Link>
      <Link to="/realizations/maintenance" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="TMA">
          <img src={maintenance} alt="Tierce Maintenance Applicative" className="realizations-button"/>
        </Tooltip>
      </Link>
    </Row>
  </Row>
);

export default Database;
