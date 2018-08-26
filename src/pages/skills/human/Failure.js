import React from 'react';
import { Link } from "react-router-dom";
import { Row, Tooltip } from 'antd';
import itschool from '../../../itschool.png';
import beneylu from '../../../beneylu.png';

const Failure = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Échouer pour rebondir</h1>
    </Row>
    <Row className="skill-content">
      <Row type="flex" className="skill-definition">
        <p>
          <span className="span-bold">Ma définition</span> : Oser une action qui n'aboutit pas aux résultats souhaités.
        </p>
      </Row>
      <Row type="flex" className="skill-introduction">
        <p>
          L'échec est souvent mal perçu même aujourd'hui alors que les personnes les plus influentes en parlent de
          façon positive et définissent le succès par <span className="span-bold">une succession d'échecs. </span> Je partage cet avis que l'échec est
          positif car pour échouer il faut déjà commencer et prendre le risque d'une action.
        </p>
        <p>
          Tout le monde possède cette compétence mais combien s'en rende compte et tente d'en extraire les bienfaits ?
          L'échec est toujours douloureux, source de moqueries et nous n'avons pas pour habitude de prendre plaisir à ne pas réussir.
          Je pense que ce sont quelques raisons qui font qu'on n'ose pas utiliser cette compétence et même s'engager par <span className="span-bold">peur de vivre
          ces émotions négatives.</span>
        </p>
        <p>
          La vie d'un développeur est semée d'échecs. Il est très rare de coder un algorithme du premier coup et même de
          faire des mises en production parfaite. Il existe même une méthode de test unitaires qui est le <span className="span-bold">TDD</span> qui encourage de
          s'assurer de l'échec avant de pouvoir commencer à coder notre fonctionnalité.
        </p>
      </Row>
      <Row type="flex">
        <h2>Échec et opportunité</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Il y a des échecs de passages et d'autres marquants dont on se souvient même plusieurs années plus tard. Ces évènements
          nous rappellent le gout de la défaite et de la déception. Mais c'est aussi ce qui nous pousse à nous <span className="span-bold">surpasser et à
          réaliser nos objectifs</span> car on ne souhaite plus revivre ce genre de situation.
        </p>
        <p>
          Cela m'est arrivé plusieurs fois dans les compétitions sportives mais aussi pour le projet <span className="span-bold">It'School. </span>Ce projet est
          en adéquation avec mon but, on peut même parler de rêve. Après s'être donné corps et âme pendant un an à la réussite du projet,
          nous avons manqué de peu le podium à deux reprises lors du forum des projets organisé par notre école.
        </p>
        <p>
          Cependant, ces expériences douloureuses m'ont permis d'intégrer l'entreprise Pixel Cookers et de développer sur
          l'application <span className="span-bold">Beneylu.</span> Cela m'a aussi permis de rencontrer mon entreprise actuelle <span className="span-bold">Abbeal</span> et de travailler sur
          l'extraordinaire projet <span className="span-bold">Syllabo.</span>
        </p>
        <p>
          Une aventure It'School s'est clôturée lors de mes études. Mais j'ai bon espoir que l'histoire continue vers de
          nouveaux horizons.
        </p>
      </Row>
      <Row type="flex">
        <h2>Progresser dans mon métier</h2>
      </Row>
      <Row type="flex">
        <p>
          Etre conscient de ses échecs m'aide à progresser en tant que développeur. L'échec fait partie du processus
          pour réussir, pour s'améliorer car on a du feedback. J'ai une certaine peur de l'échec, mais si cela m'arrive,
          mon mindset me permettra de <span className="span-bold">rebondir et d'aller de l'avant.</span> Le monde professionnel est vaste et compétitif.
          Pour survivre et atteindre des sommets, il faut se lancer et persévérer malgré les obstacles que l'on peut rencontrer.
          Il m'est déjà arrivé en entreprise de ne pas réussir une mise en production à temps ou de constater le mécontentement
          d'un client pour une fonctionnalité que j'ai développée. Si je m'étais laissé abattre, je n'aurais pas pu créer un
          <span className="span-bold"> processus de mise en production plus fiable ou mieux cerner les besoins de mon client.</span>
        </p>
      </Row>
      <Row type="flex">
        <h2>Et aujourd'hui ?</h2>
      </Row>
      <Row type="flex">
        <p>
          Tout en faisant attention à garder un mode de vie équilibré, je prends le temps de sortir de ma zone de confort
          afin d'entamer des actions qui seraient susceptibles de me faire avancer dans mes objectifs ou tout
          simplement par curiosité. Je ne souhaite pas tomber dans le piège de ne pas me donner les moyens de réussir
          car on pourrait se dire que ce n'est pas grave d'échouer, on apprend de nos erreurs. C'est certes vrai,
          mais cela n'empêche pas d'avoir l'envie, d'avoir faim de victoire et de réussite dans tout ce qu'on entame.
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
      </Row>
    </Row>
  </Row>
);

export default Failure;
