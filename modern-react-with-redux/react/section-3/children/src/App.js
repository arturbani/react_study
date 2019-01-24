import React from 'react';
import Segment from './Components/Segment/';

class App extends React.Component{
  render(){
    return(
      <div>
        <Segment>
            <div className="ui icon header">
                <i className="pdf file outline icon"></i>
                No documents are listed for this customer.
            </div>
            <div className="ui primary button">Add Document</div>
        </Segment>
        <Segment>
            <h4 class="ui header">For Your Information</h4>
            <p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.
            </p>
        </Segment>
    </div>
    );
  }
}

export default App