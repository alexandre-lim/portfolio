import React from 'react';
import { Row, Tooltip } from 'antd';
import { Link } from "react-router-dom";

const Practice = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>BBD et TTD pour un produit durable et de qualité</h1>
    </Row>
    <Row type="flex" className="">
      <p>
        Suites à mes différentes expériences en TMA, je me suis aperçu de l'importance des tests lorsque l'on
        développe une application, notamment dans la durée. Cette pratique est devenue indispensable lorsque je rejoins un projet.
      </p>
      <p>
        C'est notamment sur le projet Syllabo ou je réalise enfin ce rêve de créer une application où les tests
        sont obligatoires. Et au fur et à mesure que la base de code grandie, les intérêts de cette pratique prend tout son
        sens en gardant l'application cohérente où l'on peut ajouter de la forte valeur ajoutée sans s'inquiéter des conséquences.
      </p>
      <p>
        Nous adoptons la méthodologie Kanban pour avancer dans nos objectifs. Nous pratiquons le
        Behavior Driven Development (BDD) ainsi que Test Driven Development (TDD).
      </p>
      <p>
        Le BDD permet de détailler le comportement d'une fonctionnalité telle une histoire afin d'identifier
        précisément où l'on veut aller lorsque l'on code. Cette définition de la fonctionnalité se fait en équipe.
      </p>
      <p>
        Nous couplons cela avec le TDD, qui permet de tester les comportements identifiés lors de la phase BDD. La particularité
        de la démarche TDD est qu'elle repose sur 3 principes fondamentaux. Le test doit en premier lieu échouer, ne doit
        pas être plus compliqué que nécessaire et coder juste assez pour que le test n'échoue plus.
        Ces 3 règles font partie du cycle
        <a target="_blank" rel="noopener noreferrer"
        href="https://msdn.microsoft.com/en-us/library/aa730844(v=vs.80).aspx"> red-green-refactor.</a>
      </p>
      <p>
        Une fois le test fini, la fonctionnalité sous test est insérée dans la base de code de l'application.
        L'avantage est que lorsque son comportement changera, le test échouera.
      </p>
      <p>
        Sur Syllabo, nous utilisons
        <a target="_blank" rel="noopener noreferrer" href="https://facebook.github.io/jest/"> Jest </a>
        pour nos tests,
        <a target="_blank" rel="noopener noreferrer" href="https://airbnb.io/enzyme/"> Enzyme </a>
        pour l'accompagner sur les tests de composants React.
        Enfin, nous utilisons
        <a target="_blank" rel="noopener noreferrer" href="https://cucumber.io/"> Cucumber </a>
        pour les tests fonctionnels.
      </p>
    </Row>
    <Row type="flex">
      <h2>Perspectives</h2>
    </Row>
    <Row type="flex" className="">
      <p>
        Ayant enfin trouvé un projet qui mettait en avant une philosophie de test, je ne peux plus m'imaginer
        développer une application sans. Les tests ne sont pas si simples à mettre en place et demande de la pratique
        pour être vraiment efficace. Il me reste encore donc du travail afin de devenir un codeur de tests aguerri.
      </p>
    </Row>
    <Row type="flex">
      <h2>Réalisations</h2>
    </Row>
    <Row type="flex" gutter={16}>
      <Link to="/realizations/syllabo" onClick={() => this.handleHrefClick('realizations')}>
        <Tooltip title="Syllabo">
          <img src={""} alt="Syllabo" className="realizations-button"/>
        </Tooltip>
      </Link>
    </Row>
  </Row>
);

export default Practice;
