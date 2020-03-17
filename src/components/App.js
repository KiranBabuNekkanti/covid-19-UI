import React from 'react'
import LocationStatsList from '../containers/LocationStatsList'
import {connect} from 'react-redux'
import Header from './Header'
import  Summary from './Summary'


class App extends React.Component{
  constructor(props) {
    super(props);
}

  render(){
    return(
      <div>
      <Header/>
      <div class="card-body">
      <Summary confirmCases={this.props.locStatRed.confirmCases} recoveredCases={this.props.locStatRed.recoveredCases} deaths={this.props.locStatRed.deaths}/>
      <LocationStatsList history= {this.props.history}/>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  locStatRed: state.locationStatsReducer
})
export default connect(
  mapStateToProps
)(App)

