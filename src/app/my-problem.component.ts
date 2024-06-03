import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

@Component({
  selector: 'app-my-problem',
  standalone: true,
  imports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './my-problem.component.html',
  styleUrl: './my-problem.component.css'
})
export class MyProblemComponent {

}
