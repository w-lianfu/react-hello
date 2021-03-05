import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const Setting = (props: IProps, state: IState) => {
  return (
    <div>
      <h2>Setting Page</h2>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Setting;
