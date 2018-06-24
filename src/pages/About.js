import React from 'react';
import { Row, Avatar } from 'antd';
import profilPicture from '../alexandre.png';

const About = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <Avatar className="profil-picture" src={profilPicture} />
    </Row>
    <Row type="flex" justify="center">
      <h1>Développeur FullStack (Node.js & React)</h1>
    </Row>
    <Row type="flex" justify="center">
      <h2>Passion et ferveur du développement web au service d'un monde meilleur</h2>
    </Row>
    <Row type="flex" className="profil-description">
      <p>
        L'informatique, maintenant omniprésente, évolue à une vitesse extraordinaire.
        Les nouvelles technologies offrent des possibilités infinies.
        Elles peuvent notamment se <span className="span-bold">mettre au service des personnes pour améliorer leur quotidien.</span>
      </p>
      <p>
        C'est la voie que je désire emprunter.
        C'est ainsi que j'exerce mon métier de développeur avec ferveur et passion.
        Je crois au potentiel de l'être humain et l'impact positif que peuvent avoir les technologies dans son développement personnel et professionnel.
      </p>
      <p>
        Je souhaite apprendre et mettre à profit mon savoir et mes compétences dans un environnement qui <span className="span-bold">partage des valeurs </span>
        qui me font écho et qui place ses collaborateurs au centre de sa stratégie.
        Ceci afin d'atteindre ensemble des objectifs ambitieux et participer au succès de l'entreprise.
      </p>
      <p>
        Ayant pratiqué en compétition le Volley-Ball pendant 3 ans et actuellement le Badminton depuis 5 ans,
        j'ai pu acquérir et développer des qualités telles que <span className="span-bold">l'esprit d'équipe, le respect de soi et des autres,
        la persévérance et la gestion des émotions.</span>
      </p>
      <p>
        En plus des bienfaits du sport, je suis épaulé de ma formation et de mes expériences professionnelles pour faire face aux divers obstacles qui se dressent devant moi.
        Dans un monde bouleversé par l'évolution technologique, je suis capable de <span className="span-bold">m'adapter au changement</span> pour relever les challenges de demain.
      </p>
    </Row>
  </Row>
);

export default About;
