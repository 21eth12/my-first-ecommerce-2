import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validEmail',
  standalone: true
})
export class ValidEmailPipe implements PipeTransform {
  private emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  transform(value: string | null | undefined): boolean {
    if (!value) return false;
    return this.emailRegex.test(value.trim());
  }
}