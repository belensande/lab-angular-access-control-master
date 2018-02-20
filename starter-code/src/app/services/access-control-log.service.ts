import { Injectable } from '@angular/core';

@Injectable()
export class AccessControlLogService {
  logMessages: Array<any> = [];
  constructor() { }

  addAccessItem(person: string, message: string): void {
    this.logMessages.push({
      person,
      message,
      createdAt : new Date()
    });
    console.log("LOG ITEMS");
    this.logMessages.forEach(logItem => {
      console.log(JSON.stringify(logItem));
    });
  }

  getAccessLog(): Array<any> {
    return this.logMessages;
  }
}
