import React from 'react';
import { Link } from "react-router-dom";
import { Row, Tooltip } from 'antd';
import itschool from '../../../itschool.png';
import beneylu from '../../../beneylu.png';
import abbeal from '../../../abbeal.png';
import improvit from '../../../improvit.png';
import alpha from '../../../alpha.png';
import maintenance from '../../../maintenance.png';

const Integrity = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Intégrité pour la longévité</h1>
    </Row>
    <Row className="skill-content">
      <Row type="flex" className="skill-definition">
        <p>
          <span className="span-bold">Ma définition</span> : Se respecter, être honnête, vivre selon ses principes sans nuire à autrui
          tout en restant flexible.
        </p>
      </Row>
      <Row type="flex" className="skill-introduction">
        <p>
          La montée en puissance des réseaux sociaux, l'omniprésence de la publicité et des médias au travers des outils
          numériques ont créé une pression sociale énorme. Les générations à venir sont les plus touchées.
        </p>
        <p>
          Dans tout ce chaos, il devient difficile de savoir qui l'on est vraiment et vivre en accord avec soi sans
          essuyer de virulentes critiques. Face à la consommation instantanée et l'évolution rapide de la société,
          il devient nécessaire de <span className="span-bold">ralentir la cadence, de se recentrer pour se construire.</span>
        </p>
        <p>
          En tant que développeur, nous avons entre nos mains d'énormes pouvoirs.
          Comme disait Benjamin Parker : « Un grand pouvoir implique de grandes responsabilités ».
          Nous manipulons des données sensibles et la sécurité des informations est aujourd'hui au cœur des débats.
          Nous sommes responsables de construire des applications sécurisées et sans intégrité, comment
          peut-on nous faire confiance ? Le métier de développeur n'est pas à prendre à la légère.
        </p>
      </Row>
      <Row type="flex">
        <h2>Une graine que tu sèmes</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          De nature timide et introverti, l'environnement social en période d'adolescence a été la plus difficile.
          Je n'aimais pas l'alcool, ne fumais pas et n'appréciais pas les soirées en boites.
          J'aimais avoir des moments de solitudes pour me ressourcer, des conversations ayant du sens et
          avoir peu de relations mais privilégier la qualité. Cela m'a souvent valu d'être mis de côté
          mais je décidais quand même de ne pas porter un masque et <span className="span-bold">rester simplement moi-même.</span>
        </p>
        <p>
          C'est lors de mon arrivée à <span className="span-bold">In'tech</span> que tout changea et qu'on m'a accepté comme j'étais.
          J'ai rencontré des gens formidables avec qui j'ai noué de fortes relations.
          Plus que des amis, c'est la famille. L'intégrité m'a permis de ne <span className="span-bold">pas me perdre, de libérer mon potentiel
          pour accomplir des projets comme It'School et Improv'it.</span> On me fait confiance car mon entourage connait
          mes valeurs et ma loyauté.
        </p>
      </Row>
      <Row type="flex">
        <h2>Une force pour les entreprises</h2>
      </Row>
      <Row type="flex">
        <p>
          On constate que les entreprises peinent à recruter des développeurs et le turn-over devient de plus en plus important.
          L'intégrité représente une force dans le monde professionnel car <span className="span-bold">la loyauté et l'honnêteté </span>
          sont des valeurs appréciées de toute personne. Mes collaborateurs n'hésitent pas à me confier
          des tâches importantes et me font confiance.  J'ai une grande autonomie sur le projet <span className="span-bold">Syllabo</span> et
          l'équipe écoute mes suggestions car je ne tourne pas autour du pot tout en restant diplomate.
        </p>
      </Row>
      <Row type="flex">
        <h2>Et aujourd'hui ?</h2>
      </Row>
      <Row type="flex">
        <p>
          Garder son intégrité en toute situation est difficile mais je pense que l'effort fourni face à
          l'adversité en vaut la chandelle car cela évite des regrets et notre santé ne s'en portera que mieux
          car on évite des relations toxiques. Professionnellement, <span className="span-bold">nous sommes respectés car on se respecte. </span>
          Nous pouvons dire non car nous connaissons nos valeurs profondes.
          L'affirmation de soi pousse les gens à vous prendre au sérieux.
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

export default Integrity;
