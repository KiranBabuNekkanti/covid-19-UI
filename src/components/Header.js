

import React from 'react';

const Header = () =>{
    var date = new Date();
    date.setDate(date.getDate()-1);
return (<div class="card">
  <div class="card-header">
     <h1><b> COVID-19 Tracker </b></h1><h>(Daily Reports as of 
      {" "+date.getDate()+"-"+(date.getMonth()+1)+"-"+date.getFullYear()})</h>
      </div>
      </div>);
}

export default Header;