import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';

interface IProps extends RouteComponentProps {
  history: any,
}
interface IState {}

const Home = (props: IProps, state: IState) => {
  return (
    <div>
      <p>Home Page</p>
      <Link to="/setting">Setting</Link>
    </div>
  );
};

export default Home;
