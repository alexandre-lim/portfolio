import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";
import itschool from '../../../itschool.png';
import beneylu from '../../../beneylu.png';
import abbeal from '../../../abbeal.png';
import maintenance from '../../../maintenance.png';

const Javascript = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>JavaScript</h1>
    </Row>
    <Row className="skill-content">
      <Row type="flex" className="">
        <p>
          JavaScript est un <span className="span-bold">langage de script léger</span>,
          <span className="span-bold">orienté objet</span>, référent au niveau des pages web pour dynamiser
          le contenu en agissant sur le
          <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model"> Document Object Model. </a>
          Le langage prend vie dans les <span className="span-bold">années 90 </span>
          et sa popularité l'amène à être utilisé au sein d'autres environnements comme
          les serveurs avec <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/about/">Node.js.</a>
        </p>
        <p>
          C'est un langage utilisant le concept de
          <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/H%C3%A9ritage_et_cha%C3%AEne_de_prototypes"> prototype</a>
          , disposant d'un typage faible et
          dynamique qui permet de programmer suivant plusieurs paradigmes de programmation : fonctionnelle, impérative et orientée objet.
        </p>
        <p>
          Le standard du langage est
          <a target="_blank" rel="noopener noreferrer" href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Language_Resources"> ECMAScript </a>
          dont la sixième version majeure <span className="span-bold">(ES6/ECMAScript 2016)</span> a été finalisée et publiée le 17 juin 2015.
        </p>
      </Row>
      <Row type="flex">
        <h2>Du JavaScript Vanilla à l'ES6</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          Lors de mon expérience sur le projet <span className="span-bold">ISIDOR</span>, j'ai eu la chance de pouvoir coder intensivement en
          <span className="span-bold">JavaScript Vanilla</span>,
          c'est-à-dire du JavaScript pur, sans une librairie comme
          <a target="_blank" rel="noopener noreferrer" href="https://jquery.com/"> JQuery </a> et n'étant pas en ES6.
        </p>
        <p>
          Cela m'a permis de comprendre des concepts clés et bas de niveau du langage. JQuery et ES6 ont tendance à cacher ces
          concepts pour gagner en productivité. Mais combien de développeur cherche un minimum à comprendre la magie qui se cache
          derrière toute cette abstraction ?
        </p>
        <p>
          Mon opinion est qu'il est de notre devoir de prendre du temps afin de faire des recherches qui représentent
          un investissement sur le long terme. Les langages et librairies peuvent changer ou évoluer mais les concepts rarement.
          En connaissant un ancien concept remplacé par un nouveau, on comprend mieux la transition et on prend en main plus vite
          le changement.
        </p>
        <p>
          Avant de commencer à coder en ES6, j'ai utilisé le Framework
          <a target="_blank" rel="noopener noreferrer" href="https://angularjs.org/"> AngularJS </a>
          et
          <a target="_blank" rel="noopener noreferrer" href="https://angular.io/"> Angular 5 </a>
          lors du projet <span className="span-bold">Beneylu.</span> Le gain en productivité était indéniable avec une certaine
          facilité d'utilisation des Framework. Il était intéressant de voir les différences énormes entre AngularJS et Angular 5.
        </p>
        <p>
          J'ai ensuite pris en main l'ES6 à travers l'application web <span className="span-bold">Syllabo</span> où nous utilisons
          <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org/"> React </a>,
          <a target="_blank" rel="noopener noreferrer" href="https://redux.js.org/"> Redux </a>,
          <a target="_blank" rel="noopener noreferrer" href="https://redux-saga.js.org/"> Saga </a>et
          <a target="_blank" rel="noopener noreferrer" href="https://nodejs.org/en/about/"> Node.js </a>avec
          <a target="_blank" rel="noopener noreferrer" href="http://expressjs.com/"> Express.js. </a>
          L'ES6 apporte son lot de nouveautés
          ainsi que du sucre de syntaxe comme le string
          <a target="_blank" rel="noopener noreferrer"
          href="https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Litt%C3%A9raux_gabarits"> interpolation.</a>
        </p>
      </Row>
      <Row type="flex">
        <h2>Un langage passionnant</h2>
      </Row>
      <Row type="flex">
        <p>
          Le JavaScript me passionne et j'ai adoré mes différentes interactions avec celui-ci.
          Mon expérience m'a donné des bases solides pour évoluer sereinement sur ce langage.
          Je continue ma veille technologique et espère pourvoir <span className="span-bold">transmettre mon savoir à d'autres personnes afin de
          renforcer mes acquis et tout simplement partager.</span>
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
        <Link to="/realizations/maintenance" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="TMA">
            <img src={maintenance} alt="Tierce Maintenance Applicative" className="realizations-button"/>
          </Tooltip>
        </Link>
      </Row>
    </Row>
  </Row>
);

export default Javascript;
