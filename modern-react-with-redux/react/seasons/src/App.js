import React from 'react';
import SeasonDisplay from './Components/SeasonDisplay'
import Spinner from './Components/Spinner'

class App extends React.Component {
  state = {
    latitude: null,
    errorMessage: ''
  }

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude
        });
      },
      err => {
        this.setState({
          errorMessage: err.message
        });
      }
    );
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.latitude)
      return(
        <div>
          Error: {this.state.errorMessage}
        </div>
      );

    if (!this.state.errorMessage && this.state.latitude)
        return(
          <SeasonDisplay
            latitude = {this.state.latitude}
          />
        );

      return(
        <Spinner
          message = 'Please accept location request'
        />
      );
  }

  render(){
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default App

