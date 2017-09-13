import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'bso-user',
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f)" novalidate>
      <div class="row">
        <label for="name">名前</label>
        <input type="text" id="name" name="name"
          [(ngModel)]="name" required>
      </div>
      <div class="row">
        <label for="address">住所</label>
        <input type="text" id="address" name="address"
        [(ngModel)]="address" required>
      </div>
      <div class="row">
        <label for="tel">電話</label>
        <input type="text" id="tel" name="tel"
          [(ngModel)]="tel" pattern="[0-9]{2,4}-[0-9]{2,4}-[0-9]{4}" required>
      </div>
      <div class="row">
        <label for="mail">メール</label>
        <input type="text" id="mail" name="mail"
          [(ngModel)]="mail" pattern="[A-Za-z0-9]{2,}@[A-Za-z0-9]{2,}.[A-Za-z0-9]{2,}" required>
      </div>
      <div class="row">
        <button (click)="delete()">削除</button>
        <input type="submit" value="登録">
      </div>
    </form>
  `,
  styles: [`
    form {
      margin: 0 50px;
    }
    label {
      flex: 0 0 16.66666667%;
      max-width: 16.66666667%;
    }
    input[type=text] {
      position: relative;
      min-height: 1px;
      flex: 0 0 83.33333333%;
      max-width: 83.33333333%;
    }
  `]
})
export class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: NgForm) {

  }

  delete() {
    console.log('delete');
  }

}
