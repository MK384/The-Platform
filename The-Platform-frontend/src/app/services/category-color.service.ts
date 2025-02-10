import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryColorService {
  private categoryColors: { [key: string]: { text: string; background: string } } = {
    'DEVELOPMENT': { text: '342F98', background: 'EBEBFF' },
    'BUSINESS': { text: '15711F', background: 'E1F7E3' },
    'FINANCE & ACCOUNTING': { text: 'FD8E1F', background: 'FFF2E5' },
    'IT & SOFTWARE': { text: '882929', background: 'FFF0F0' },
    'PERSONAL DEVELOPMENT': { text: 'F1B72F', background: 'F7FBDE' },
    'OFFICE PRODUCTIVITY': { text: '4F4405', background: 'FFE5A7' },
    'MARKETING': { text: 'F00505', background: 'F9EBEB' },
    'PHOTOGRAPHY & VIDEO': { text: 'AA0C9D', background: 'FFD5FB' },
    'LIFESTYLE': { text: '65390C', background: 'FFF2E5' },
    'DESIGN': { text: 'F1B72F', background: 'F7FBDE' },
    'HEALTH & FITNESS': { text: '0FADCD', background: 'E7F9FD' },
    'MUSIC': { text: '65390C', background: 'FFF2E5' }
  };

  getCategoryColors(category: string) {
    const upperCategory = category.toUpperCase();
    const colors = this.categoryColors[upperCategory] || { text: 'AA0C9D', background: 'FFD5FB' };

    return {
      text: colors.text.startsWith('#') ? colors.text : `#${colors.text}`,
      background: colors.background.startsWith('#') ? colors.background : `#${colors.background}`
    };
  }
}
