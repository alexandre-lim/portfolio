import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";

const HtmlCSS = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Les incontournables de la programmation web</h1>
    </Row>
    <Row type="flex">
      <h2>Des langages complémentaires</h2>
    </Row>
    <Row type="flex" className="">
      <p>
        HTML (HyperText Markup Language) et CSS (Cascading Style Sheets) sont deux langages de programmation indispensables
        lorsque l'on créer des sites web. Un site web est ce que toute personne voit lorsqu'elle utilise ce qu'on appelle un
        navigateur web dont les plus connus sont : Chrome, Safari, Firefox et Internet Explorer. Le code HTML et CSS
        sont « traduits » par le navigateur qui permet ainsi le rendu d'un site web.
      </p>
      <p>
        Le langage HTML a été inventé par Tim Berners-Lee en 1991. Il permet de gérer et organiser le contenu d'un site web.
        Nous écrivons ce que nous souhaitons voir dans notre page comme la mise en place d'un titre, l'affichage d'une image etc.
        Nous construisons donc le squelette du site web.
      </p>
      <p>
        Le CSS va habiller notre squelette et lui donner forme. Il permet de gérer l'apparence de la page web et
        même permettre quelques petites animations. Le CSS est complémentaire au HTML et prend vie en 1996.
      </p>
      <p>
        Il existe différentes versions des langages et actuellement nous sommes à la version 5 pour le HTML et 3 pour le CSS.
      </p>
    </Row>
    <Row type="flex">
      <h2>Mes expériences</h2>
    </Row>
    <Row type="flex" className="">
      <p>
        En tant que développeur web, j'ai utilisé ces deux langages dans toutes mes réalisations. Le HTML et CSS sont puissants
        et simples à prendre en main.
      </p>
      <p>
        Lorsque la base de code grandie, l'écriture du code CSS peut-être difficile à maintenir et manque de flexibilité.
        Pour pallier ce problème, nous avons un préprocesseur CSS, un programme qui permet de générer dynamiquement des
        fichier CSS. J'ai utilisé différents préprocesseurs comme
        <a target="_blank" rel="noopener noreferrer" href="http://lesscss.org//"> LESS </a>et
        <a target="_blank" rel="noopener noreferrer" href="https://sass-lang.com/"> Sass </a>
        pour les projets Beneylu et Syllabo.
      </p>
    </Row>
    <Row type="flex">
      <h2>Des langages simples mais complexes</h2>
    </Row>
    <Row type="flex">
      <p>
        Bien que les langages soient simples à prendre en main, il ne faut pas les sous-estimer.
        Cette facilité cache en réalité énormément de complexités et de concepts qu'il faut prendre le temps de d'analyser.
        Cette compréhension est nécessaire pour par exemple optimiser ou rendre accessible un site pour des personnes sous handicap.
      </p>
      <p>
        Malgré mon utilisation intensive de ces deux langages, je suis loin d'avoir appris et rencontré tous leurs aspects.
        Le web évolue rapidement et l'accessibilité du web dans le monde demande d'avoir un site original pour capter l'attention
        des utilisateurs. Nous repoussons donc à chaque fois les limites de ce que peut nous offrir ces deux langages.
      </p>
    </Row>
    <Row type="flex">
      <h2>Réalisations</h2>
    </Row>
    <Row type="flex" gutter={16}>
      <Link to="/realizations/itschool" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="It'School">
          <img src={""} alt="It'School" className="realizations-button"/>
        </Tooltip>
      </Link>
      <Link to="/realizations/beneylu" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="Beneylu">
          <img src={""} alt="Beneylu" className="realizations-button"/>
        </Tooltip>
      </Link>
      <Link to="/realizations/syllabo" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="Syllabo">
          <img src={""} alt="Syllabo" className="realizations-button"/>
        </Tooltip>
      </Link>
      <Link to="/realizations/maintenance" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="TMA">
          <img src={""} alt="Tierce Maintenance Applicative" className="realizations-button"/>
        </Tooltip>
      </Link>
    </Row>
  </Row>
);

export default HtmlCSS;