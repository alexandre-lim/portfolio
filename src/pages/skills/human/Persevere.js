import React from 'react';
import { Link } from "react-router-dom";
import { Row, Tooltip } from 'antd';
import itschool from '../../../itschool.png';
import beneylu from '../../../beneylu.png';
import abbeal from '../../../abbeal.png';
import improvit from '../../../improvit.png';
import maintenance from '../../../maintenance.png';


const Persevere = () => (
  <Row className= "content-row">
    <Row type="flex" justify="center">
      <h1>Persévérer pour réussir</h1>
    </Row>
    <Row className="skill-content">
      <Row type="flex" className="skill-definition">
        <p>
          <span className="span-bold">Ma définition</span> : Faire face à l'adversité
          tout en préservant son intégrité pour atteindre un objectif.
        </p>
      </Row>
      <Row type="flex" className="skill-introduction">
        <p>
          Pourquoi persévérer ? Ma réponse est que persévérer est un des facteurs qui permet <span className="span-bold">la réussite personnelle
          et professionnelle.</span> Cette qualité peut se travailler à chaque instant et j'ai fait le choix de l'intégrer
          dans ma routine quotidienne.
        </p>
        <p>
          Elle m'appuie dans mon métier de développeur web.
          Le monde numérique évolue constamment et de nouveaux challenges apparaissent.
          Face à ce monde changeant et à la compétition grandissante, il est devenu indispensable de pratiquer
          <span className="span-bold"> la veille technologique et de se former en continue.</span>
        </p>
        <p>
          Persévérer dans le domaine du web entraîne une rigueur dans l'écriture du code et le respect des bonnes pratiques
          qui faciliteront la maintenance applicative. Les solutions recherchées sont approfondies et ne tombent
          pas dans la facilité d'une réponse trouvée sur le web.
        </p>
      </Row>
      <Row type="flex">
        <h2>Persévérer dans le domaine sportif</h2>
      </Row>
      <Row type="flex" className="">
        <p>
          J'ai pu mettre en pratique cette aptitude et en voir ses résultats plus que probant.
        </p>
        <p>
          Lors de mes 15 ans, j'ai rejoint le club de Volley-Ball en section compétition.
          À mes débuts, cela a été extrêmement difficile. Le coach me réprimandait et je sentais que je ralentissais
          le flow d'entraînement de l'équipe déjà de haut niveau. J'étais le seul nouveau, le reste de l'équipe
          avait au minimum 2-3 années d'entraînement derrière eux. Je me rappelle encore du moment où je n'arrivais
          pas à servir et que le coach a attendu jusqu'à que je passe cinq services d'affilés qu'il jugeait correct.
          Sous pression, j'ai pensé à lâcher la balle et m'en aller, mais j'ai <span className="span-bold">serré les dents et relevé ce challenge.</span>
        </p>
        <p>
          Malgré ma forte timidité et ma petite stature, j'ai su insister et contre toute attente, atteindre le niveau régional
          au bout de 3 années d'entraînements. Au cours de ces 3 années, nous avons remporté à plusieurs reprises le championnat
          départemental et régional. Nous avons aussi atteint le quart de finale en Coupe de France.
        </p>
        <p>
          Cette riche expérience et ces résultats positifs m'ont fait grandir. Ils m'ont ensuite poussé vers un autre sport,
          le Badminton. Pratiquant cette activité en compétition depuis 6 ans, j'ai pu une nouvelle fois accéder au niveau régional
          et avoir une expérience en tant qu'entraineur.
        </p>
        <p>
          Mes objectifs ont été accomplis et j'en tire une grande satisfaction.
          Je peux maintenant envisager de plus grands objectifs encore impensables lors de mes débuts tels que les nationales.
        </p>
        <p>
          Dans l'atteinte de mes objectifs, la notion de persévérance s'est traduite par <span className="span-bold">une régularité des entraînements,
          un dépassement constant de soi et l'écoute des conseils du coach et de mes coéquipiers. </span>
          Des études théoriques et stratégiques en dehors du terrain ont été nécessaires et il a fallu supporter la forte exigence
          du coach et de l'équipe.
        </p>
      </Row>
      <Row type="flex">
        <h2>Un pas dans le domaine professionnel</h2>
      </Row>
      <Row type="flex">
        <p>
          Le monde professionnel ne diffère pas tant que ça du domaine sportif. Cette qualité peut s'avérer d'une grande aide
          notamment dans les situations les plus difficiles.
        </p>
        <p>
          Ma persévérance au sein de mes expériences en entreprise m'a permis un rendu de travail de qualité et peu de retour
          de bugs du client au cours de mon passage sur les <span className="span-bold">projets ISIDOR et Natura 2000. </span>
          Des solutions efficaces et durables ont été mises en place pour répondre aux problèmes rencontrés.
        </p>
        <p>
          ISIDOR et Natura 2000 sont des projets en TMA conséquents et existent depuis plus de 5 ans.
          La base de code est énorme, les fonctionnalités nombreuses et le système complexe. Face à de tel projet,
          il faut de la patience et ne pas abandonner face aux bugs qui peuvent paraître impossible à trouver ou à résoudre.
        </p>
        <p>
          Face aux obstacles et à l'adversité, je choisi de persévérer car <span className="span-bold">je suis persuadé que
          ce sont les petits efforts de tous les jours qui font la différence.</span>
        </p>
      </Row>
      <Row type="flex">
        <h2>Et aujourd'hui ?</h2>
      </Row>
      <Row type="flex">
        <p>
          Cette capacité à persévérer est essentielle dans toutes sortes de situation que je vis au quotidien.
          Le revers de la médaille est de ne pas savoir quand s'arrêter. A trop vouloir aller jusqu'au bout,
          sans écouter son entourage, son corps et son esprit peuvent amener à des dommages irréversibles comme un burnout.
          Le mélange passion et persévérance peut provoquer un cocktail explosif.
          Il me faut sans cesse me rappeler de trouver un juste milieu et quelquesfois dire stop ou pivoter afin
          d'avancer dans mes objectifs et même dans la vie.
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
        <Link to="/realizations/maintenance" onClick={() => this.handleHrefClick('realizations')}>
          <Tooltip title="TMA">
            <img src={maintenance} alt="Tierce Maintenance Applicative" className="realizations-button"/>
          </Tooltip>
        </Link>
      </Row>
    </Row>
  </Row>
);

export default Persevere;
