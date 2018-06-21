import React from 'react';
import { Route } from "react-router-dom";
import RealizationList from './RealizationList';
import ItSchool from './realizations/ItSchool';
import Syllabo from './realizations/Syllabo';
import Beneylu from './realizations/Beneylu';
import Improvit from './realizations/Improvit';
import Alpha from './realizations/Alpha';


const RealizationsDefault = ({match}) => (
  <div className="realizations-container">
    <RealizationList match ={match} />
  </div>
);

const Realizations = ({ match }) => (
  <div>
    <Route exact path={match.path} component={RealizationsDefault} />
    <Route path={`${match.path}/itschool`} component={ItSchool} />
    <Route path={`${match.path}/beneylu`} component={Beneylu} />
    <Route path={`${match.path}/syllabo`} component={Syllabo} />
    <Route path={`${match.path}/improvit`} component={Improvit} />
    <Route path={`${match.path}/alpha`} component={Alpha} />
  </div>
);

export default Realizations;
