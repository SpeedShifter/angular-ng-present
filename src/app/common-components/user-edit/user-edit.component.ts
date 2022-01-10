import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges
} from '@angular/core';
import {User, UserType} from "../../users-service/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserEditComponent implements OnInit, OnChanges {

  @Input()
  user: User | null = null;

  @Output()
  update = new EventEmitter<User>();

  form: FormGroup = this.formBuilder.group({});

  typeValues = UserType;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [this.user?.name, Validators.required],
      type: [this.user?.type, Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.['user']) {
      this.form.patchValue({
        name: this.user?.name,
        type: this.user?.type
      });
    }
  }

  submit() {
    if (this.form.valid) {
      this.update.emit({
        ...(this.user ?? {}),
        ...this.form.value
      } as User);
    }
  }

  reset() {
    this.form.reset({
      name: this.user?.name,
      type: this.user?.type
    });
  }
}
