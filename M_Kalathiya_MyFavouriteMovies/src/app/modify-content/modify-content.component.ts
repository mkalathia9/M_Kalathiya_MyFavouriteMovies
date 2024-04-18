
import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-modify-content',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modify-content.component.html',
  styleUrl: './modify-content.component.scss'
})
export class ModifyContentComponent {
  [x: string]: any;
  contentForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl(''),
    creator: new FormControl(''),
    imgURL: new FormControl('',),
    type: new FormControl(''),
    tags: new FormControl(''),
    // Add other form controls for your content properties here
  });

  @Output() contentAdded = new EventEmitter<Content>();

  onSubmit(): void {
    if (this.contentForm.valid) {
      // Construct a Content object from form values, ensuring no property is undefined
      const formValue: any = this.contentForm.value;

      // Since tags are expected to be an array of strings, ensure they are correctly formatted
      // If your form input for tags does not already produce an array, you might need to adjust this
      const tags = formValue.tags ? formValue.tags.split(',').map((tag: string) => tag.trim()) : [];

      const newContentItem: Content = {
        title: formValue.title || '', // Fallback to empty string if undefined, adjust accordingly
        description: formValue.description || '',
        creator: formValue.creator || '',
        imgURL: formValue.imgURL || '',
        type: formValue.type || '',
        tags: tags,
        id: 0
      };

      this['Movieservice'].addContent(newContentItem).subscribe({
        next: (content: Content | undefined) => {
          this.contentAdded.emit(content);
          this.contentForm.reset();
          // Optionally, display a success message
        },
        error: (error: any) => {
          console.error('There was an error!', error);
          // Optionally, display an error message
        }
      });
    }
  }

}
