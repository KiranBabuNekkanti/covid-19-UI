import axios from 'axios'

let nextTodoId = 1


function loadLocStatsSuccess(response){
  return{
      type:"GET_COVID-19_STATS",
      response
  }
}


function getCovidLocStats(){
  return function(dispatch){
      return axios.get('http://localhost:8080/nkb/covid-19-tracker/locationStats')
      .then(response => dispatch(loadLocStatsSuccess(response.data)))
      .catch(error=>{throw(error)});
  }
}

function getTodaysDateTime(){

  var today = new Date();
  var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  var dateTime = date+' '+time;
  return dateTime;
}

export default getCovidLocStats;