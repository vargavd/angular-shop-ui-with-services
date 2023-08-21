import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable() // Injectable here because we want to inject a service into this one
export class AccountManagementService {
  user: { userName: string } = { userName: ''}

  constructor(private loggingService: LoggingService) {}

  login() {
    this.user.userName = 'Joe';

    this.loggingService.addToLog('Signing In');
  }

  logout() {
    this.user.userName = '';

    this.loggingService.addToLog('Signing Out');
  }
}