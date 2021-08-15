import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { routes } from '../../configs/routes.config';
import './LayoutModule.scss'
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducer';

const LayoutModule = () => {
  const { isLogged } = useSelector((state: RootState) => state.auth);
  const renderComponent = (module: any, isPrivate: boolean, isLogged: boolean) => () => {
    if (isPrivate) {
      return isLogged ? module : <Redirect to='/sign-in' />;
    }
    return module;
  }
  return (
    <Switch>
      {
        routes.map((val, index) => {
          const { path, isExact, isPrivate, module } = val;
          return (
            <Route key={index} path={path} exact={isExact}>
              {renderComponent(module, isPrivate, isLogged)}
            </Route>
          )
        })
      }
    </Switch>
  );
};

export default LayoutModule;