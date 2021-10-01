export const formatCardNumberInput = (value) => {
  const defaultCard = 'XXXXXXXXXXXXXXXX';
  const text = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
  const card = text.length > 0 ? text + defaultCard.substring(0, 16 - text.length) : defaultCard;
  const test = card.match(/.{1,4}/g);
  return test.join('  ');
};

export const formatCardNumber = (value) => {
  return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ')
};

export const getCardPrefix = (listPrefix, card) => {
  for (const preNW in listPrefix) {
    if (card.indexOf(listPrefix[preNW]) === 0) {
      return true;
      break;
    }
  }
  return false;
};
