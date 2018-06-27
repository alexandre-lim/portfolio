import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import persevere from '../../persevere.png';
import integrity from '../../integrity.png';
import empathy from '../../empathy.png';
import teamwork from '../../teamwork.png';

const Improvit = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Improv'IT : Faites de vos différences une force</h1>
    </Row>
    <Row className="realization-content">
      <Row type="flex" className="">
        <h2>Une première dans notre école</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Dans le cadre de nos études, au sein d'une équipe de 5 personnes, nous avons organisé la
          <span className="span-bold"> première conférence-atelier autour du développement personnel </span>au sein du groupe ESIEA sur
          le thème "Faites de vos différences une force".
        </p>
      </Row>
      <Row type="flex">
        <h2>Au-delà de la technique</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Plus que des geeks enfermés dans leur chambre à produire du code, nous sommes aussi capables d'organiser des évènements,
          de <span className="span-bold">prendre la parole et de communiquer de façon efficace autour de nous.</span>
        </p>
        <p>
          Plus que des sujets techniques et le côté obscur du web, nous aimons l'être humain ainsi que son parcours
          pour atteindre son plein potentiel. Le projet Improv'it en est la preuve. Une conférence centrée autour de
          l'humain avec zéro technique, zéro code et de la mixité.
        </p>
        <p>
          Nous avons voulu aborder le thème de la différence. Nous avons constaté un paradoxe où la société souhaite
          mettre en avant le fait que chaque personne soit unique, différente et pourtant la pression sociale nous
          empêche souvent de l'exprimer correctement. Comment dépasser cela et
          transformer en force nos différences ? Voilà une question abordée lors de cet évènement.
        </p>
        <p>
          Cet évènement a été animé par <span className="span-bold">deux intervenants professionnels. </span>
          Improv'IT comptait <span className="span-bold">50 participants</span> ainsi que
          <span className="span-bold"> deux photographes passionnés </span>
          afin d'immortaliser cette conférence.
        </p>
      </Row>
      <Row type="flex">
        <h2>Un travail d'équipe</h2>
      </Row>
      <Row type="flex">
        <p>
          Malgré les différentes personnalités de l'équipe, nous avons su <span className="span-bold">travailler ensemble</span> pour
          produire un livrable professionnel de qualité. Nous avons géré un planning, une trésorerie, et
          communiqué au sein de l'école mais aussi en dehors à travers les réseaux sociaux et à l'aide de
          flyers personnalisés. Nous avons su <span className="span-bold">défendre et mettre en avant l'intérêt de notre projet</span> au sein
          d'une école d'ingénieur afin de collaborer gratuitement avec deux intervenants expérimentés.
        </p>
        <p>
          Improv'IT fut un succès et met en avant notre capacité à nous <span className="span-bold">adapter</span> pour produire un travail
          non technique pouvant rentrer dans le cadre d'une entreprise. De plus, l'engagement de l'équipe et
          l'intérêt du sujet a permis de rendre l'évènement payant dont les revenus ont aidé l'organisation et
          des associations caritatives. Le <span className="span-bold">buffet</span> a marqué plus d'une personne par sa gourmandise et sa préparation
          maison digne d'un traiteur.
        </p>
      </Row>
      <br/>
      <Row type="flex" justify="center">
        <h2>Compétences</h2>
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

export default Improvit;
