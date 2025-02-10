import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HoveringCardService {
  isHovering = false;
  position = { x: 0, y: 0 };

  show(x: number, y: number) {
    this.isHovering = true;
    this.position = { x, y };
    
  }

  hide() {
    this.isHovering = false;
  }
}
