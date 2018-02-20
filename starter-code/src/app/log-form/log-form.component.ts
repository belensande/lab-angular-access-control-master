import { Component, OnInit } from '@angular/core';

import { AccessControlLogService } from '../services/access-control-log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css']
})
export class LogFormComponent implements OnInit {
  person: string;
  message: string;
  success: boolean = false;
  constructor(private logService: AccessControlLogService) { }

  ngOnInit() {
  }

  writeLog(myForm: any) {
    if (myForm.valid) {
      this.logService.addAccessItem(this.person, this.message);
      this.success = true;
      myForm.resetForm();
    } else {
      this.success = false;
    }
  }
}
