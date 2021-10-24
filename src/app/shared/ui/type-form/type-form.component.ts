import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Type } from '../../interfaces/type.interface';

@Component({
  selector: 'app-type-form',
  templateUrl: './type-form.component.html',
  styleUrls: ['./type-form.component.css']
})
export class TypeFormComponent implements OnInit {
  @Output() onSaveT = new EventEmitter<Type>();
  typeForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    const controls = {
      name : [null, [Validators.required, Validators.maxLength(100)]],
    }
    this.typeForm = this.fb.group(controls);
  }

  save() {
    const type = this.typeForm.value;
    this.onSaveT.emit(type);
    this.typeForm.reset();
  }
}
