import { Component } from '@angular/core';
import { ParentComponent } from "../../components/parent/parent.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
