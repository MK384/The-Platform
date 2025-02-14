export interface FilterProps {

    selectedBoxes : number;

    Development:         Array<{ name: string, count: number, selected: boolean}>;
    Business:            Array<{ name: string, count: number, selected: boolean}>;
    Finance:             Array<{ name: string, count: number, selected: boolean}>;
    It:                  Array<{ name: string, count: number, selected: boolean}>;
    Productivity:        Array<{ name: string, count: number, selected: boolean}>;
    PersonalDevelopment: Array<{ name: string, count: number, selected: boolean}>;
    Design:              Array<{ name: string, count: number, selected: boolean}>;
    Marketing:           Array<{ name: string, count: number, selected: boolean}>;
    Lifestyle:           Array<{ name: string, count: number, selected: boolean}>;
    Photography:         Array<{ name: string, count: number, selected: boolean}>;
    Music:               Array<{ name: string, count: number, selected: boolean}>;
    Health:              Array<{ name: string, count: number, selected: boolean}>;

    tools:               Array<{ name: string, count: number, selected: boolean}>;
    ratings:             Array<{ name: string, count: number, selected: boolean}>;
    levels:              Array<{ name: string, count: number, selected: boolean}>;
    durations:           Array<{ name: string, count: number, selected: boolean}>;

}