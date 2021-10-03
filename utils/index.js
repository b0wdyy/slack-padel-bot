function getDateFromDay(day) {
  switch (day) {
    case 'maandag':
      return 'Monday';
    case 'dinsdag':
      return 'Tuesday';
    case 'woensdag':
      return 'Wednesday';
    case 'donderdag':
      return 'Thursday';
    case 'vrijdag':
      return 'Friday';
    case 'zaterdag':
      return 'Zaterdag';
    case 'zondag':
      return 'Sunday';

    default:
      break;
  }
}

module.exports = getDateFromDay;
