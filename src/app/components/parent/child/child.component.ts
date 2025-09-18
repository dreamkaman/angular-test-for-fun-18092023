import { AsyncPipe } from '@angular/common';
import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { concatMap, debounceTime, distinctUntilChanged, exhaustAll, exhaustMap, fromEvent, map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements AfterViewInit {
  @ViewChild('userNameInput') userNameInput!: ElementRef<HTMLInputElement>;

  inputText$!: Observable<string>;

  ngAfterViewInit() {
    this.inputText$ = fromEvent(this.userNameInput.nativeElement, 'input').pipe(
      debounceTime(2000),
      map((event: Event) => (event.target as HTMLInputElement).value),
      distinctUntilChanged(),
    );
  }

}
