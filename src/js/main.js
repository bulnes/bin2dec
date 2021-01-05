let $bin;
let $dec;

const bin2dec = e => {
  window.console.log('bin2dec', e);
};

const dec2bin = e => {
  const dec = parseInt($dec.value, 10);
  const digits = [];
  
  let value = 0;
  let pointer = dec;

  if (isNaN(dec)) {
    return;
  }

  do {
    const digit = parseInt(pointer % 2, 10);
    digits.push(digit);

    pointer = pointer / 2;
  } while (pointer > 1);

  pointer = parseInt(pointer, 10);
  digits.push(pointer);

  value = digits.reverse().join('') * 1;

  $bin.value = value;
};

const start = () => {
  $bin = document.querySelector('#bin');
  $dec = document.querySelector('#dec');

  $dec.addEventListener('keyup', dec2bin);
};

window.addEventListener('load', start);