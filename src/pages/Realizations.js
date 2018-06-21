import React from 'react';
import { Route } from "react-router-dom";
import RealizationList from './RealizationList';
import ItSchool from './realizations/ItSchool';


const RealizationsDefault = ({match}) => (
  <div className="realizations-container">
    <RealizationList match ={match} />
  </div>
);

const Realizations = ({ match }) => (
  <div>
    <Route exact path={match.path} component={RealizationsDefault} />
    <Route path={`${match.path}/itschool`} component={ItSchool} />
  </div>
);

export default Realizations;
