export class HelpersService {
  getDateString(date: Date) {
    let addPadding0 = (s:string | number) => {
      if (typeof(s) === 'number') {
        return (s < 10) ? `0${s}` : `${s}`;
      }

      return (s.length === 1) ? `0${s}` : s;
    };

    let day = addPadding0(date.getDay());
    let month = addPadding0(date.getMonth());
    let year = addPadding0(date.getFullYear());
    let hours = addPadding0(date.getHours());
    let minutes = addPadding0(date.getMinutes());

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  }
}