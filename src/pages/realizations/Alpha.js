import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import integrity from '../../integrity.png';
import empathy from '../../empathy.png';
import teamwork from '../../teamwork.png';

import database from '../../database.png';

const Alpha = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>ALPHA</h1>
    </Row>
    <Row className="realization-content">
      <Row type="flex" className="">
        <h2>Contexte</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Le projet ministériel Alpha doit mettre en place un système d'information(SI) achats uniques pour l'ensemble
          des entités achats du Ministère de la Défense. Sa mise en œuvre se présente en trois objectifs : l'harmonisation
          des SI achats existants sous la forme d'un SI unique, la simplification et l'unification des processus achats,
          l'interopérabilité et partages des bonnes pratiques.
        </p>
        <p>
          En mars 2015, le SI Alpha est confié à Oalia. L'éditeur français Oalia, accompagné des sociétés de conseils
          IBM et Klee Group ont gagné le projet Alpha.
        </p>
        <p>
          Ce projet se traduit par la conception ainsi que la réalisation de l'application Alpha qui permet la gestion
          des achats au sein du ministère. Cette application est développée en collaboration avec le cotraitant IBM
          et le sous-traitant Oalia.
        </p>
        <p>
          Alpha est suivi de près par les dirigeants de Klee Group car les enjeux pour Klee ainsi que le
          Ministère de la Défense sont très importants.
        </p>
      </Row>
      <Row type="flex">
        <h2>Missions</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Au sein de l'équipe, je développais les fonctionnalités demandées en customisant le progiciel de la société Oalia.
          Je devais respecter les documents de spécifications et le plan de charge prévu.
          Le projet était développé avec du <span className="span-bold">Java EE.</span>
        </p>
      </Row>
      <Row type="flex">
        <h2>Méthodologie de travail</h2>
      </Row>
      <Row type="flex">
        <p>
          Nous n'avions pas vraiment de méthodologie de travail à respecter à la lettre. Notre projet n'était pas non plus
          en méthode agile.
        </p>
        <p>
          J'ai surtout travaillé en binôme avec une personne fraichement diplômée.
          Mon maître de stage ainsi qu'un lead développeur nous encadraient et nous ont conseillé tout au long du projet.
        </p>
        <p>
          Les spécifications étaient rédigées l'équipe fonctionnelle. Les documents étaient bien fournis et indiquaient
          bien nos tâches à réaliser. Le projet évoluant constamment, j'ai beaucoup côtoyé l'équipe fonctionnelle.
        </p>
        <p>
          Il y avait donc <span className="span-bold">beaucoup d'autonomie</span> et nous transmettions un rapport chaque semaine de l'avancée de notre travail
          au chef de projet. Lors des phases importantes du projet, une réunion d'équipe était organisée pour faire une
          synthèse et discuter de la suite des actions à entreprendre.
        </p>
        <p>
          Les différentes phases de livraisons de l'application auprès du ministère étaient attribuées aux personnes
          ayant une autorisation spéciale du ministère afin de pouvoir se déplacer et procéder à la livraison.
        </p>
      </Row>
      <Row type="flex">
        <h2>Une expérience enrichissante</h2>
      </Row>
      <Row type="flex">
      <p>
        La principale difficulté était la maîtrise du Framework d'Oalia. Il fallait bien saisir l'idée d'architecture
        qu'Oalia a mise en place et suivre leurs « Best practices ». Le Framework était complet et proposait un nombre
        important de fonctionnalités.
      </p>
      <p>
        Il était quelques fois difficile de le customiser à nos besoins et de créer nos propres fonctionnalités qui
        devaient s'intégrer correctement à l'application. Avec <span className="span-bold">l'aide de mon équipe</span>, j'ai pu m'en sortir et devenir
        autonome lors des développements.
      </p>
      <p>
        Il pouvait arriver qu'il y ait plusieurs manières de développer une fonctionnalité. Il était impératif de
        devoir se conformer aux demandes spécifiées par Oalia. Cependant, nous avons rencontré des cas où le fait
        de suivre les « Best practices » s'était retourné contre nous en augmentant la difficulté algorithmique
        du code ou encore en compliquant le procédé de développement d'une fonctionnalité qui était censée être
        simple si on suivait un cas standard.
      </p>
      <p>
        Une autre difficulté a été <span className="span-bold">l'estimation des tâches</span> par manque d'expérience et de maîtrise de l'outil.
        Le projet Alpha a été une bonne expérience pour aborder les projets suivant au sein de Klee Group.
      </p>
      </Row>
      <br/>
      <Row type="flex" justify="center">
        <h2>Compétences</h2>
      </Row>
      <br/>
      <Row type="flex" justify="center" gutter={16}>
        <Link to="/skills/database" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Base de données">
            <img src={database} alt="Base de données" className="skills-button"/>
          </Tooltip>
        </Link>
      </Row>
      <br/>
      <Row type="flex" justify="center" gutter={16}>
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

export default Alpha;
