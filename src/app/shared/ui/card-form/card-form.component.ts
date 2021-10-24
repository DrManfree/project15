import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  @Output() onSave = new EventEmitter<Card>();
  cardForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const controls = {
      name : [null, [Validators.required, Validators.maxLength(100)]],
      content : [null, [Validators.required, Validators.maxLength(500)]],
      type : [null]
    }
    this.cardForm = this.fb.group(controls);
  }

  save() {
    let card = this.cardForm.value;
    card.createdate = new Date();
    this.onSave.emit(card);
    this.cardForm.reset();
  }
}
