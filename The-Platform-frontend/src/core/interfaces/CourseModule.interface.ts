import { Time } from "@angular/common";

export interface CourseModule{

    moduleTitle : string;
    lecturesCount: number;
    moduleTime: Time;
    lectures:Array<{lectureTitle:string; lectureTime:Time; lectureType:'watchable'|'readable'}>;

}