import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  prepareTitle(text: string): string {
    return `prepared: ${text}`;
  }
}
