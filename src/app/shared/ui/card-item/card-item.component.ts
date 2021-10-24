import { EventEmitter } from '@angular/core';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Card } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnInit {
  @Input() card!: Card;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onSave = new EventEmitter<Card>();
  editMode = false;
  constructor(private fb: FormBuilder) { }

  cardForm!: FormGroup;

  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
      content: [null, [Validators.required, Validators.maxLength(500)]],
      type: [null]
    }

    this.cardForm = this.fb.group(controls);

    if(this.card) {
      this.cardForm.patchValue(this.card);
    }
  }

  delete() {
    this.onDelete.emit(this.card.id);
  }

  save() {
    let card = this.cardForm.value;
    card.editdate = new Date();
    this.onSave.emit(card);
    this.editMode = false;
  }
}
