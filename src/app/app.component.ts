// angular imports
import { Component, OnInit } from '@angular/core';
import { HelpersService } from './services/helpers.service';

// services
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  logItems: { message: string, date: Date }[] = [];
  
  // LIFECYCLE HOOKS
  ngOnInit(): void {
    this.logItems = this.loggingService.logItems;

    this.loggingService.addToLog('Application has started');
  }

  // CONSTRUCTOR + INJECTED PROPERTIEs
  constructor(
    private loggingService: LoggingService,
    private helpers: HelpersService
  ) {
    
  }
}
