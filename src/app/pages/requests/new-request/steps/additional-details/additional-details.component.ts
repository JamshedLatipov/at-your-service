import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../../../../core/i18n/translation.service';
import { Translations } from '../../../../../core/i18n/translation.types';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-additional-details',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './additional-details.component.html',
})
export class AdditionalDetailsComponent {
  additionalDetails = '';
  translations?: Translations;
  photos: { file: File, preview: SafeUrl }[] = [];
  dragOver = false;

  constructor(
    private translationService: TranslationService,
    private sanitizer: DomSanitizer
  ) {
    this.translationService.getTranslations().subscribe(translations => {
      this.translations = translations;
    });
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files?.length) {
      this.handleFiles(Array.from(input.files));
    }
  }

  onDrop(event: DragEvent) {
    event.preventDefault();
    this.dragOver = false;
    if (event.dataTransfer?.files.length) {
      this.handleFiles(Array.from(event.dataTransfer.files));
    }
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    this.dragOver = true;
  }

  onDragLeave() {
    this.dragOver = false;
  }

  private handleFiles(files: File[]) {
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    imageFiles.forEach(file => {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          const preview = this.sanitizer.bypassSecurityTrustUrl(e.target.result as string);
          this.photos.push({ file, preview });
        }
      };
      reader.readAsDataURL(file);
    });
  }

  removePhoto(index: number) {
    this.photos.splice(index, 1);
  }
}