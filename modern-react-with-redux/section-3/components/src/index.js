import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';

class App extends React.Component {
  render(){
    return(
      <div className="ui container comments">
        <CommentDetail
          avatar = {faker.image.avatar()}
          name = {faker.name.firstName()}
          text = {faker.lorem.sentence()} />
          <CommentDetail
          avatar = {faker.image.avatar()}
          name = {faker.name.firstName()}
          text = {faker.lorem.sentence()} />
          <CommentDetail
          avatar = {faker.image.avatar()}
          name = {faker.name.firstName()}
          text = {faker.lorem.sentence()} />
          <CommentDetail
          avatar = {faker.image.avatar()}
          name = {faker.name.firstName()}
          text = {faker.lorem.sentence()} />
          <CommentDetail
          avatar = {faker.image.avatar()}
          name = {faker.name.firstName()}
          text = {faker.lorem.sentence()} />
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));