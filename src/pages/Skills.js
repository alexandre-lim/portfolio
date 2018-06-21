import React from 'react';
import { Route } from "react-router-dom";
import TechnicalSkills from './TechnicalSkills';
import HumanSkills from './HumanSkills';
import Persevere from './skills/human/Persevere';
import Integrity from './skills/human/Integrity';
import Empathy from './skills/human/Empathy';
import Teamwork from './skills/human/Teamwork';


const SkillsDefault = ({match}) => (
  <div className="skills-container">
    <TechnicalSkills match ={match} />
    <HumanSkills match ={match} />
  </div>
);

const Skills = ({ match }) => (
  <div>
    <Route exact path={match.path} component={SkillsDefault} />
    <Route path={`${match.path}/persevere`} component={Persevere} />
    <Route path={`${match.path}/integrity`} component={Integrity} />
    <Route path={`${match.path}/empathy`} component={Empathy} />
    <Route path={`${match.path}/teamwork`} component={Teamwork} />
  </div>
);

export default Skills;
