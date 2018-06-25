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
        </p>
        <p>

        </p>
        <p>

        </p>
        <p>

        </p>
        <p>

        </p>
      </Row>
      <Row type="flex">
        <h2>Title</h2>
      </Row>
      <Row type="flex">
        <p>

        </p>
        <p>

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
