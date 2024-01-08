import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  standalone:true,
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css'],
  imports:[DatePipe],
})
export class PipeComponent {
// pipe.component.ts
birthday = new Date(2001, 9, 8);

  toggle = true;

  get format()
  {
    return this.toggle ? 'mediumDate' : 'fullDate';
  }
    toggleFormat()
    {
      this.toggle != this.toggle;
    }
  }

