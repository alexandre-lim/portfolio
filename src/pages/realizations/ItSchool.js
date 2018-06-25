import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import persevere from '../../persevere.png';
import integrity from '../../integrity.png';
import empathy from '../../empathy.png';
import teamwork from '../../teamwork.png';
import failure from '../../failure.png';

import htmlCSS from '../../html-css.png';
import javascript from '../../javascript.png';
import database from '../../database.png';

const ItSchool = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>L'aventure It'School</h1>
    </Row>
    <Row className="realization-content">
      <Row type="flex" className="">
        <h2>It'School : késako ?</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          L'application It'School est une plateforme à destination des écoles primaires où des enseignants pourront numériser
          leurs exercices au sein de jeux éducatifs et les proposer aux élèves. Ainsi, les enfants apprennent tout en
          s'amusant et s'initient aux nouvelles technologies dans un cadre bienveillant.
        </p>
        <p>
          Le projet It'School a été réalisée dans le cadre de mes études. L'équipe était composée de trois personnes.
          Nous avons développé l'application pendant une année et les six derniers mois ont été réalisés en collaboration
          avec l'école privée SLNDBA.
        </p>
        <p>
          Nous souhaitions confronter notre MVP au monde réel et récupérer le maximum de feedback afin d'améliorer en continu
          notre produit. Mais le but principal de cette démarche était de savoir si un besoin existait et si notre produit
          était capable d'y répondre.
        </p>
      </Row>
      <Row type="flex">
        <h2>Une aventure pas comme les autres</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Le projet était ambitieux techniquement et l'attente de l'école par rapport à notre produit considérable.
          Cela nous a amené à nous surpasser pour créer une cohésion d'équipe forte et durable afin d'encaisser
          toutes les tempêtes. Le chemin a été semé d'embuches où nous avons essuyé échecs et réussites.
        </p>
        <p>
          Nous étions souvent déchirés entre notre conscience de développeur adhérant
          au Craftsmanship (http://manifesto.softwarecraftsmanship.org/) et délivrer un produit répondant aux attentes
          de l'école dans un temps imparti.
        </p>
        <p>
          Nous avons organisé plusieurs visites au sein de l'école pour questionner les enseignants et organiser des séances
          avec les élèves. L'école possédait une valise de tablettes que nous allions utiliser avec notre application.
        </p>
        <p>
          Je n'oublierai jamais le jour où nous avons testé pour la première fois notre produit.
          Les réalités du terrain nous ont mis une claque. Nous sommes arrivés tout fier et les élèves se précipitaient
          sur les vitres en nous voyant. Une fois sur place, les problèmes ne tardent pas à arriver,
          notamment au niveau de la logistique.
        </p>
        <p>
          Dans un premier temps, le réseau internet n'était pas correctement configuré pour pouvoir autoriser
          toutes les tablettes à se connecter. Une fois réglé, c'est la portée de la connexion wifi vers les classes
          qui pose soucis. C'est la première fois qu'une classe de l'école utilisait les tablettes. De ce fait,
          l'organisation était terrible, l'enseignante ne savait pas trop quoi faire et l'excitation des enfants
          mettait un joli désordre. Nous avons pu tester notre application quelques instants mais l'application
          est tombée en panne car les requêtes serveurs étaient limitées.
          Nous avons donc pris un choix difficile : nous avons arrêté l'expérience pour revenir une autre fois.
        </p>
      </Row>
      <Row type="flex">
        <h2>Des échecs à la réussite</h2>
      </Row>
      <Row type="flex">
        <p>
          De retour de cette expérience, nous avons pris le temps de digérer cet échec pour rebondir de plus belles.
          Nous nous sommes procuré un relai wifi et avons discuté avec l'enseignante afin de partager la classe en deux.
          Un groupe utilisera les tablettes puis nous inversons les rôles. Nous avons également pris un abonnement
          temporaire afin d'avoir un nombre de requêtes serveur suffisant. Nous voilà donc de retour
          pour notre dernière séance avec l'école.
        </p>
        <p>
          Les résultats ont été plus que concluant. C'est une belle réussite.
          La grande déception de notre précédente visite n'a pas été en vain et nous avons pu la transformer en force.
          Le seul bémol est que le groupe travaillant sur papier était trop distrait par celui utilisant les tablettes,
          mais peut-on les en vouloir ?
        </p>
        <p>
          Nous sommes sorties plus fort techniquement et humainement de cette aventure.
          Nous avons appris à développer un produit de qualité tout en n'oubliant pas les besoins de nos utilisateurs.
          Nous avons su défendre et pitcher notre application. L'école a été bien satisfaite mais déçue de
          notre départ en alternance. Concernant l'équipe, nous avons tissé des liens forts. Plus que des amis,
          je les considère comme mes frères et espère continuer un jour cette aventure avec eux.
        </p>
        <p>
          Je suis extrêmement fier de ce que nous avons accompli et j'ai pu trouver le pourquoi de mon métier
          et un de mes rêves. Je souhaite mettre de ma personne au service d'autrui
          et réaliser une application immersive pour les enfants souhaitant apprendre différemment
          à l'aide des nouvelles technologies.
        </p>
        <p>
          Je continue donc ma route afin de réaliser ce rêve et pour cela j'ai pris grand plaisir à développer
          pour les projets Beneylu(lien) et Syllabo(lien).
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
        <Link to="/skills/failure" onClick={() => this.handleHrefClick('skills')}>
          <Tooltip title="Echec">
            <img src={failure} alt="Echec" className="skills-button"/>
          </Tooltip>
        </Link>
      </Row>
    </Row>
  </Row>
);

export default ItSchool;
