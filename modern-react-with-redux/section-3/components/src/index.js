import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './Components/CommentDetail/';
import ApprovalCard from './Components/ApprovalCard/'

class App extends React.Component {
  render(){
    return(
      <div className="ui container comments">
        <ApprovalCard>
          <div align='center'>
            <h4>Warning!</h4>
            Are you sure you want to do this?
          </div>
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail
          avatar = {faker.image.avatar()}
          date = {'Today at 9:30 PM'}
          author = {faker.name.firstName()}
          text = {faker.lorem.sentence()} />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
          avatar = {faker.image.avatar()}
          author = {faker.name.firstName()}
          date = {'Today at 6:00 PM'}
          text = {faker.lorem.sentence()} />
        </ApprovalCard>

        <ApprovalCard>
          <CommentDetail
          avatar = {faker.image.avatar()}
          author = {faker.name.firstName()}
          date = {'Yesterday at 2:00 AM'}
          text = {faker.lorem.sentence()} />
        </ApprovalCard>
      </div>
    );
  };
};

ReactDOM.render(<App />, document.querySelector('#root'));