import React from 'react';
import { connect } from 'react-redux';
import LocationStat from '../components/LocationStat';
import {bindActionCreators} from 'redux'
import * as Appactions from '../actions'

class LocationStatsList extends React.Component {
constructor(props){
  super(props);
}

  render(){
    return(<div>
      <LocationStat locStatsList={this.props.locStatsList}/>
    </div>);

  }
}
const mapStateToProps = state => ({
  locStatsList: state.locationStatsReducer.locStatsList
})
const mapDispatchToProps= dispatch =>{
  return{
    actions: bindActionCreators(Appactions,dispatch)
  }
 };
export default connect(
  mapStateToProps,mapDispatchToProps
)(LocationStatsList)