import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Type } from '../../interfaces/type.interface';

@Component({
  selector: 'app-type-item',
  templateUrl: './type-item.component.html',
  styleUrls: ['./type-item.component.css']
})
export class TypeItemComponent implements OnInit {
  @Input() type!: Type;
  @Output() onDelete = new EventEmitter<number>();
  @Output() onSave = new EventEmitter<Type>();
  editMode = false;
  constructor(private fb: FormBuilder) { }

  typeForm!: FormGroup;

  ngOnInit(): void {
    const controls = {
      name: [null, [Validators.required, Validators.maxLength(100)]],
    }

    this.typeForm = this.fb.group(controls);

    if(this.type) {
      this.typeForm.patchValue(this.type);
    }
  }

  delete() {
    this.onDelete.emit(this.type.id);
  }

  save() {
    const type = this.typeForm.value;
    this.onSave.emit(type);
    this.editMode = false;
  }
}
