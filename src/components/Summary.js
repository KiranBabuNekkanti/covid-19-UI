import React from 'react';

const Summary = (props)=>{
return(<div>
    <div class="card" >
  <div class="card-body" padding='3.25rem;'>
    <h5 class="card-title">Summary of Report</h5>
    <div class="alert alert-primary" role="alert">
        <b color="black"> Total confirmed cases:{props.confirmCases}</b>
    </div>
    <div class="alert alert-success" role="alert">
    <b color="black"> Total recovered cases:{props.recoveredCases}</b>
</div>
<div class="alert alert-danger" role="alert">
<b color="black">  Total Deaths:{props.deaths}</b>
</div>
  </div>
</div>
</div>);
}

export default Summary;