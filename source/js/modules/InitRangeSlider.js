// import WOW from 'wow';

let InitRangeSlider = () => {
  document.querySelector('input[type=range]').addEventListener('input', function() {
    this.setAttribute('value', this.value);
  });
}

export default InitRangeSlider;
