import React from 'react';
import { Route } from "react-router-dom";
import TechnicalSkills from './TechnicalSkills';
import Javascript from './skills/technical/Javascript';

import HumanSkills from './HumanSkills';
import Persevere from './skills/human/Persevere';
import Integrity from './skills/human/Integrity';
import Empathy from './skills/human/Empathy';
import Teamwork from './skills/human/Teamwork';
import Failure from './skills/human/Failure';


const SkillsDefault = ({match}) => (
  <div className="skills-container">
    <TechnicalSkills match ={match} />
    <HumanSkills match ={match} />
  </div>
);

const Skills = ({ match }) => (
  <div>
    <Route exact path={match.path} component={SkillsDefault} />
    {/* Technical skills */}
    <Route path={`${match.path}/javascript`} component={Javascript} />

    {/* Human skills */}
    <Route path={`${match.path}/persevere`} component={Persevere} />
    <Route path={`${match.path}/integrity`} component={Integrity} />
    <Route path={`${match.path}/empathy`} component={Empathy} />
    <Route path={`${match.path}/teamwork`} component={Teamwork} />
    <Route path={`${match.path}/failure`} component={Failure} />
  </div>
);

export default Skills;
