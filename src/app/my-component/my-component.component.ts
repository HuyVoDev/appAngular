import { Component, OnInit } from '@angular/core';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';

@Component({
  selector: 'app-my-component',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss'],

})
export class MyComponentComponent implements OnInit {

  
  location: Location;
  constructor(location: Location) {
    this.location = location;
  }
  newEN = ''
  newVN = ''
  name = ''
  fillterStatus = 'Loại hồ sơ'
  newmemorized: boolean = false
  addWord() {
    this.arrWords.unshift(
      {
        id: this.arrWords.length + 1,
        en: this.newEN,
        vn: this.newVN,
        memorized: this.newmemorized
      }
    )
    this.newVN = '',
      this.newEN = ''
  }
  removeWord(id:number)
  {
    const idindex = this.arrWords.findIndex(e=>e.id ===id)
    this.arrWords.splice(idindex,1)
  }
  temp: boolean = true;
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'actor', vn: 'diễn viên', memorized: false },
    { id: 3, en: 'activity', vn: 'hoạt động', memorized: true },

  ]
  optionss = ['Loại hồ sơ', 'Đối tượng', 'Nội dung', 'Đợt TT', 'Giá đề nghị TT', 'Ngày đến hạn']

  ngOnInit(): void {
  }

}
