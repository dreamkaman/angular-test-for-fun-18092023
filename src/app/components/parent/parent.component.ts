import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, of } from 'rxjs';
import { ChildComponent } from "./child/child.component";


@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [AsyncPipe, ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss'
})
export class ParentComponent {

  protected users = [
    {
      userName: 'Vlad',
      email: 'vlad@TestBed.ua'
    },
    {
      userName: 'Boris',
      email: 'boris@TestBed.ua'
    },
    {
      userName: 'Max',
      email: 'max@TestBed.ua'
    }
  ];

  protected users$ = of(this.users);
  protected userNames$ = this.users$.pipe(map(users => users.map(user => user.userName)));
}
