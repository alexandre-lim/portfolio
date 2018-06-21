import React from 'react';
import { Route } from "react-router-dom";
import TechnicalSkills from './TechnicalSkills';
import HumanSkills from './HumanSkills';
import Persevere from './skills/Persevere';


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
  </div>
);

export default Skills;
