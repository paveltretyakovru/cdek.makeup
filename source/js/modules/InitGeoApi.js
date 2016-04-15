import $ from 'jquery';
import 'geocomplete';

let InitGeoApi = () => {
  $('#input-google-geo').geocomplete();
}


export default InitGeoApi;
