import $ from 'jquery';
import 'geocomplete';

let InitGeoApi = () => {
  $('#select-my-city').geocomplete();
}


export default InitGeoApi;
