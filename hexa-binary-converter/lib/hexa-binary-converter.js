
export function hexadecimalToBinary(hexa) {
  // convert hexadecimal number to decimal
  let decimal = hexa.split('').map((unit) => {
    switch (unit) {
      case 'A':
        unit = '10';
        break;
      case 'B':
        unit = '11';
        break;
      case 'C':
        unit = '12';
        break;
      case 'D':
        unit = '13';
        break;
      case 'E':
        unit = '14';
        break;
      case 'F':
        unit = '15';
        break;
      default:
        break;
    }
    return unit;
  })
  .reverse()
  .reduce((summary, unit, index) => Number(summary) + (Number(unit) * Math.pow(16, index)));

  // And now to binary string
  let binary = '';
  while (decimal > 1) {
    binary = String(decimal % 2) + binary;
    decimal = Math.floor(decimal / 2);
  }
  binary = String(decimal) + binary;

  return binary;
}

export function binaryToHexadecimal(binary) {
  // Convert the binary number to decimal
  let decimal = binary.split('')
  .reverse()
  .reduce((summary, unit, index) => Number(summary) + (Number(unit) * Math.pow(2, index)));

  let hexa = '';
  let char = '';
  while (decimal > 15) {
    char = String(decimal % 16);
    switch (char) {
      case '10':
        char = 'A';
        break;
      case '11':
        char = 'B';
        break;
      case '12':
        char = 'C';
        break;
      case '13':
        char = 'D';
        break;
      case '14':
        char = 'E';
        break;
      case '15':
        char = 'F';
        break;
      default:
        break;
    }
    hexa = char + hexa;
    decimal = Math.floor(decimal / 16);
  }
  hexa = String(decimal) + hexa;

  return hexa;
}
