import $ from 'jquery';
import 'geocomplete';

let options = {
  types: ['(cities)'],
  componentRestrictions: {}
};
let InitGeoApi = () => {
  $('#input-google-geo').geocomplete(options);
}


export default InitGeoApi;
