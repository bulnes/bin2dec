let $bin;
let $dec;

const bin2dec = () => {
  const bin = parseInt($bin.value, 10);
  const sBin = `${bin}`.split('').reverse().join('');
  let hasOthersDigits = false;
  let dec = 0;

  if (Number.isNaN(bin)) {
    $dec.value = '';
    return;
  }

  for (let i = 0; i < sBin.length; i += 1) {
    const digit = parseInt(sBin[i], 10);
    dec += (digit * (2 ** i));

    hasOthersDigits = hasOthersDigits || (digit !== 1 && digit !== 0);
  }

  if (hasOthersDigits) {
    $dec.value = '';
    return;
  }

  $dec.value = dec;
};

const dec2bin = () => {
  const dec = parseInt($dec.value, 10);
  const digits = [];

  let value = 0;
  let pointer = dec;

  if (Number.isNaN(dec)) {
    $bin.value = '';
    return;
  }

  do {
    const digit = parseInt(pointer % 2, 10);
    digits.push(digit);

    pointer /= 2;
  } while (pointer > 1);

  pointer = parseInt(pointer, 10);
  digits.push(pointer);

  value = digits.reverse().join('') * 1;

  $bin.value = value;
};

const start = () => {
  $bin = document.querySelector('#bin');
  $dec = document.querySelector('#dec');

  $bin.addEventListener('keyup', bin2dec);
  $dec.addEventListener('keyup', dec2bin);
};

window.addEventListener('load', start);
