export class LoggingService {
  logItems: {
    message: string, 
    date: Date
  }[] = [];

  addToLog(message: string) {
    this.logItems.push({ message, date: new Date() });
  }
}