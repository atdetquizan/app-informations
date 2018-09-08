export class DatetimeFormat {
  static getDateTimeCurrent(date?: string) {
    const datetime = date ? new Date(date) : new Date();
    const dd = datetime.getDate();
    const mm = datetime.getMonth() + 1; // hoy es 0!
    const yyyy = datetime.getFullYear();
    const time = this.format_time(datetime);
    return this.format_number(dd) + '/' + this.format_number(mm) + '/' + yyyy + ' ' + time;
  }

  static format_time(datetime: Date) {
    // formats a Date object into a 12h AM/PM time string
    let hour: any = datetime.getHours();
    const minute: any = datetime.getMinutes();
    const second: any = datetime.getSeconds();
    if (hour > 12) {
      hour -= 12;
    } else if (hour === 0) {
      hour = '12';
    }
    return this.format_number(hour) + ':' + this.format_number(minute) + ':' + this.format_number(second) + ' ' + this.format_ampm(hour);
  }

  static format_number(digits: number) {
    return digits < 10 ? '0' + digits : digits;
  }

  static format_ampm(hours: number) {
    return hours > 11 ? 'pm' : 'am';
  }
}
