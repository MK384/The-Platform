import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FilterProps } from '../../../core/interfaces/FilterProps.interface';

@Component({
  selector: 'app-filter-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter-bar.component.html',
  styleUrl: './filter-bar.component.css'
})
export class FilterBarComponent implements OnInit {

  isCategoryDroppedDown = true;
  isToolsDroppedDown = true;
  isRatingDroppedDown = true;
  isLevelDroppedDown = true;
  isPriceDroppedDown = true;
  isDurationDroppedDown = true;

  selectedBoxes! : number;

  @Input() filters!: FilterProps;  // Receive value from parent
  @Output() filtersChange = new EventEmitter<FilterProps>(); // Define Output Event

  categories = [

    {
      category: "Development",
      dropped: true,
      icon: '../../../assets/filter-bar/development.png',
      iconActive: '../../../assets/filter-bar/development-active.png',
      sub: [ { name: '', count: 0, selected: false }]
    },
    {
      category: "Business",
      dropped: false,
      icon: '../../../assets/filter-bar/business.png',
      iconActive: '../../../assets/filter-bar/business-active.png',
      sub: []
    },
    {
      category: "Finance & Accounting",
      dropped: false,
      icon: '../../../assets/filter-bar/finance.png',
      iconActive: '../../../assets/filter-bar/finance-active.png',
      sub: []
    },
    {
      category: "IT & Software",
      dropped: false,
      icon: '../../../assets/filter-bar/it.png',
      iconActive: '../../../assets/filter-bar/it-active.png',
      sub: []
    },
    {
      category: "Office Productivity",
      dropped: false,
      icon: '../../../assets/filter-bar/productivity.png',
      iconActive: '../../../assets/filter-bar/productivity-active.png',
      sub: []
    },
    {
      category: "Personal Development",
      dropped: false,
      icon: '../../../assets/filter-bar/personal-development.png',
      iconActive: '../../../assets/filter-bar/personal-development-active.png',
      sub: []
    },
    {
      category: "Design",
      dropped: false,
      icon: '../../../assets/filter-bar/design.png',
      iconActive: '../../../assets/filter-bar/design-active.png',
      sub: []
    },
    {
      category: "Marketing",
      dropped: false,
      icon: '../../../assets/filter-bar/marketing.png',
      iconActive: '../../../assets/filter-bar/marketing-active.png',
      sub: []
    },
    {
      category: "Lifestyle",
      dropped: false,
      icon: '../../../assets/filter-bar/lifestyle.png',
      iconActive: '../../../assets/filter-bar/lifestyle-active.png',
      sub: []
    },
    {
      category: "Photography & Video",
      dropped: false,
      icon: '../../../assets/filter-bar/photography.png',
      iconActive: '../../../assets/filter-bar/photography-active.png',
      sub: []
    },
    {
      category: "Music",
      dropped: false,
      icon: '../../../assets/filter-bar/music.png',
      iconActive: '../../../assets/filter-bar/music-active.png',
      sub: []
    },
    {
      category: "Health & Fitness",
      dropped: false,
      icon: '../../../assets/filter-bar/health.png',
      iconActive: '../../../assets/filter-bar/health-active.png',
      sub: []
    }
  ];


  ngOnInit(){
    this.importFilters();
  }

  tools:Array<{ name: string; count: number; selected: boolean; }> = [];
  ratings:Array<{ name: string; count: number; selected: boolean; }> = [];
  levels:Array<{ name: string; count: number; selected: boolean; }> = [];
  durations:Array<{ name: string; count: number; selected: boolean; }> = [];


  toggleSelection(option: any) {
    option.selected = !option.selected;
    if (option.selected) {
      this.selectedBoxes++;
    }
    else{
      this.selectedBoxes--;
    }

    this.exportFilters();
    this.filtersChange.emit(this.filters);
  }

  exportFilters() {

    this.filters.selectedBoxes = this.selectedBoxes;

    this.filters.Development = this.categories[0].sub;
    this.filters.Business = this.categories[1].sub;
    this.filters.Finance = this.categories[2].sub;
    this.filters.It = this.categories[3].sub;
    this.filters.Productivity = this.categories[4].sub;
    this.filters.PersonalDevelopment = this.categories[5].sub;
    this.filters.Design = this.categories[6].sub;
    this.filters.Marketing = this.categories[7].sub;
    this.filters.Lifestyle = this.categories[8].sub;
    this.filters.Photography = this.categories[9].sub;
    this.filters.Music = this.categories[10].sub;
    this.filters.Health = this.categories[11].sub;

    this.filters.tools = this.tools;
    this.filters.ratings = this.ratings;
    this.filters.levels = this.levels;
    this.filters.durations = this.durations;

  }


  importFilters() {

    this.selectedBoxes = this.filters.selectedBoxes;

    this.categories[0].sub = this.filters.Development;
    this.categories[1].sub = this.filters.Business;
    this.categories[2].sub = this.filters.Finance;
    this.categories[3].sub = this.filters.It;
    this.categories[4].sub = this.filters.Productivity;
    this.categories[5].sub = this.filters.PersonalDevelopment;
    this.categories[6].sub = this.filters.Design;
    this.categories[7].sub = this.filters.Marketing;
    this.categories[8].sub = this.filters.Lifestyle;
    this.categories[9].sub = this.filters.Photography;
    this.categories[10].sub = this.filters.Music;
    this.categories[11].sub = this.filters.Health;

    this.tools = this.filters.tools;
    this.ratings = this.filters.ratings;
    this.levels = this.filters.levels;
    this.durations = this.filters.durations;
  }
}
