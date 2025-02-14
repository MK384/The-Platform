import { Time } from "@angular/common";
import { CourseRatingProps } from "./CourseRatingProps.interface";
import { CourseModule } from "./CourseModule.interface";
import { CourseInstructorCardProps } from "./CourseInstructorCardProps.interface";
import { StudentReview } from "./StudentReview.interface";

export interface CourseData {

courseTitle : string;
courseBrief : string;


creators : Array<CourseInstructorCardProps>;
courseRating : CourseRatingProps;
description : string;
learningItems : Array<string>;
targetAudience : Array<string>;
courseRequirements : Array<string>;
curriculum : {

    modulesCount:number;
    totalLecturesCount:number;
    totalCourseTime: Time;
    modules:Array<CourseModule>;

}

studentsReviews : Array<StudentReview>;



}