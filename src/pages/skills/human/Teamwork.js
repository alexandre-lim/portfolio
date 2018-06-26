import React from 'react';
import { Link } from "react-router-dom";
import { Row, Tooltip } from 'antd';
import itschool from '../../../itschool.png';
import beneylu from '../../../beneylu.png';
import abbeal from '../../../abbeal.png';
import improvit from '../../../improvit.png';
import alpha from '../../../alpha.png';
import maintenance from '../../../maintenance.png';

const Teamwork = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Travail d'équipe pour atteindre des sommets</h1>
    </Row>
    <Row className="skill-content">
      <Row type="flex" className="skill-definition">
        <p>
          <span className="span-bold">Ma définition</span> : Collaboration entre plusieurs personnes partageant des valeurs
          communes pour atteindre un ou plusieurs objectifs.
        </p>
      </Row>
      <Row type="flex" className="skill-introduction">
        <p>
          La vie est une suite d'aventures jonchée d'obstacles pour atteindre des sommets.
          Chaque personne écrit sa propre histoire et vit ses aventures.
          Mais aucune règle ne dit qu'il faut voyager seul.
        </p>
        <p>
          Une histoire, une aventure, un repas, tout à une fin tout comme la vie.
          Le temps passe, tout est éphémère et le travail d'équipe permet de <span className="span-bold">soulever des montagnes et de réaliser notre épopée. </span>
          Il y a donc peu de raisons pour refuser d'être dans une équipe.
        </p>
        <p>
          Pourtant, choisir son équipe à son importance. La capacité de travailler en équipe ne signifie pas que l'on peut
          intégrer n'importe quel groupe et travailler ensemble.
        </p>
        <p>
          Selon moi, une équipe doit <span className="span-bold">partager des valeurs et un ou plusieurs objectifs assez forts pour mettre en place une cohésion,
          une synergie. Ceci, qu'importe les différences entres les individus du groupe.</span>
        </p>
      </Row>
      <Row type="flex">
        <h2>Un but et des valeurs pour une équipe d'enfer</h2>
      </Row>
      <Row type="flex" className="">
        <p>
        <span className="span-bold">It'School</span> a été le projet le plus marquant que j'ai pu réaliser.
          Travaillant avec deux amis que je considère maintenant comme des frères,
          nous nous sommes engagés corps et âmes au développement de l'application.
          C'était une expérience inoubliable et marquante, une vraie aventure dans tout les sens du terme.
          Mais comment expliquer cela ?
        </p>
        <p>
          Tout d'abord nous partageons de fortes valeurs en commun comme la bienveillance, le partage ou encore l'honnêteté.
          De plus le but du projet était de délivrer une application à des enseignants qui sera utilisée par des enfants.
          Il y avait du <span className="span-bold">sens dans notre métier de développeur.</span> Nous avons en commun notre pourquoi qui est
          de mettre <span className="span-bold">nos compétences aux services d'autrui.</span>
        </p>
        <p>
          Tout cela a amené à une synergie forte de l'équipe et a permis de tester le produit au sein d'une école privée.
          Les retours ont été positifs et nous a conforté dans ce que nous voulions vraiment faire avec nos capacités.
        </p>
      </Row>
      <Row type="flex">
        <h2>Mon engagement au sein d'une équipe</h2>
      </Row>
      <Row type="flex">
        <p>
          Au sein de l'équipe que j'intègre au sein de mon entreprise, je peux ainsi déployer mon plein
          potentiel pour réaliser nos objectifs. Techniquement et humainement, je suis <span className="span-bold">engagé pour permettre
          la cohésion et la synergie de l'équipe.</span>
        </p>
        <p>
          Nous réussissons et essuyons les échecs ensemble en ne pointant pas du doigt afin de trouver un responsable à
          qui nous desservirons tout le malheur du monde.
        </p>
      </Row>
      <Row type="flex">
        <h2>Et aujourd'hui ?</h2>
      </Row>
      <Row type="flex">
        <p>
          Plus les valeurs partagées et le but commun sont forts, plus il y a de chance d'avoir une équipe avec un vrai
          travail de groupe permettant d'aller jusqu'au bout des choses.
        </p>
        <p>
        <span className="span-bold">Une entreprise est une grande équipe</span>, je souhaite donc intégrer un groupe dont je partage les valeurs
          et une vision commune. Si ce n'est pas le cas, je pense que n'importe qui peut
          se poser les questions suivantes : Quelle est mon histoire ? Mon aventure a-t-elle du sens ?
        </p>
      </Row>
      <br/>
      <Row type="flex" justify="center">
        <h2>Réalisations</h2>
      </Row>
      <br/>
      <Row type="flex" justify="center" gutter={16}>
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
        <Link to="/realizations/improvit" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="Improvit">
            <img src={improvit} alt="Improvit" className="realizations-button"/>
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
  </Row>
);

export default Teamwork;
