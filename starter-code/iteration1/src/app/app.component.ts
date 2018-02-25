import { Component } from '@angular/core';


function clean(target) {
  target.prototype.cleaned = true;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


@clean
export class AppComponent {
  title = 'Iteration 1';
  animals: Array<Object> = [
    {
      id: 1,
      category: 'mammal',
      name: 'Dog'
    }, {
      id: 2,
      category: 'oviparous',
      name: 'Duck'
    }, {
      id: 3,
      category: 'mammal',
      name: 'Elephant'
    }, {
      id: 4,
      category: 'reptile',
      name: 'Snake'
    }
  ];
  // img : string = "https://significadodelossuenoss.com/wp-content/uploads/2015/12/significado-de-sonar-con-gatitos.jpg";
}
