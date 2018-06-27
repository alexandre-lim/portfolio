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

const Beneylu = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Beneylu</h1>
    </Row>
    <Row className="realization-content">
      <Row type="flex" className="">
        <h2>Un ENT pour les écoles primaires</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Beneylu est une application développée par Pixel Cookers situé à Cergy Pontoise.
          L'entreprise à l'allure de startup compte environ huit collaborateurs.
          L'équipe est soudée et l'ambiance de travail studieuse pour atteindre nos objectifs.
        </p>
        <p>
          Beneylu propose un <span className="span-bold">espace numérique de travail (ENT).</span> Un ENT permet de numériser les outils papiers comme le
          cahier de texte ou encore le carnet de liaison. Le cartable de l'enfant s'en retrouve allégé.
          L'espace donne aussi accès à un blog afin de partager du contenu avec les élèves, parents et même
          d'autres classes ou écoles. L'école, l'enfant mais aussi les parents sont impliqués lors de l'utilisation de Beneylu.
        </p>
        <p>
          L'ENT propose énormément d'outils facilitant la communication entre les différentes parties et propose aussi des
          activités ludiques comme une immersion aux jeux olympiques.
        </p>
      </Row>
      <Row type="flex">
        <h2>Un pas pour réaliser un rêve</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Après l'aventure intense <span className="span-bold">It'School</span>, je me suis donné les moyens afin d'intégrer une entreprise
          qui travaille dans le domaine éducatif de l'enfance. C'est donc une suite
          logique que de me retrouver au sein de Pixel Cookers et participer au développement de l'application Beneylu.
        </p>
        <p>
          L'équipe étant petite, chaque personne avait un rôle important et j'avais donc beaucoup <span className="span-bold">plus de
          responsabilités</span> que mes missions précédentes. J'évoluais vers de nouvelles technologies qui étaient
          <span className="span-bold"> PHP avec Symfony 2 et AngularJS</span>. Je devais donc m'adapter pour monter en compétence afin d'endosser les tâches à venir.
          Mes précédentes expériences m'ont énormément aidé à prendre en main rapidement les technologies
          ainsi que l'architecture du projet. L'application avait environ 10 années d'existence et donc une base de code énorme.
        </p>
        <p>
          Les lundis étaient consacrés à la maintenance de l'application pour corriger des bugs ou améliorer
          des fonctionnalités existantes. Les bugs ou améliorations sont le plus souvent remontés par les utilisateurs.
          Une des surprises que j'ai eu étaient que tous les midis, l'équipe répondait à des questions provenant des
          utilisateurs de l'application. Je trouvais le concept génial car on a un <span className="span-bold">feedback immédiat</span> concernant
          l'utilisation de Beneylu et nous sommes aux plus proches des enseignants et parents. Le revers de la médaille
          est le temps que nous prenions à répondre.
        </p>
      </Row>
      <Row type="flex">
        <h2>Une responsabilité conséquente</h2>
      </Row>
      <Row type="flex">
        <p>
          Très vite, j'ai été sollicité afin de mener à bien une tâche importante. J'avais le soutien de mon équipe, notamment
          du lead développeur mais le but était que je me débrouille au maximum en <span className="span-bold">autonomie</span> afin de produire le livrable
          en temps et en heure.
        </p>
        <p>
          Paris a été désignée pour accueillir les Jeux Olympiques de 2024. En partenariat avec le gouvernement, j'ai été
          en charge <span className="span-bold">de piloter et développer une application</span> pour la semaine olympique et paralympique
          se déroulant du 27 Janvier au 3 février 2018.
        </p>
        <p>
          L'application avait pour but de faire découvrir trois sports Olympiques : L'athlétisme, le basket et la gymnastique.
          Des témoignages et des vidéos mettant en scène les jeunes athlètes (14-16 ans) de l'Insep étaient à disposition
          des enfants à des fins pédagogiques. L'esprit sportif, la persévérance et le travail d'équipe ont été les valeurs
          mises en avant. À chaque fois qu'un enfant finissait la découverte complète d'une activité, il recevait médailles
          et trophées et il avait accès à son palmarès. L'application fut un succès auprès des écoles qui avaient organisé
          cela sous forme d'activité qui incluait aussi de la pratique au sein des gymnases.
        </p>
        <p>
          Ce fut un challenge immense de part la complexité technique de l'application mais
          surtout les délais à tenir. Je suis donc fier du travail réalisé et heureux de l'opportunité donnée par
          l'entreprise de mener à bien ce chantier. Ils m'ont fait <span className="span-bold">confiance et ont cru en mes capacités</span> à réussir ce projet.
          Je n'oublierai pas de si tôt mon expérience au sein de Pixel Cookers.
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

export default Beneylu;
