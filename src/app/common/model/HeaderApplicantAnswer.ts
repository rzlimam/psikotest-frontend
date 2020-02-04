import { User } from './User';
import { DetailApplicantAnswer } from './DetailApplicantAnswer copy';

export class HeaderApplicantAnswer {
        applicantAnswerId: any;
        user: User;
        dateOfAnswer: any;
        totalPoint: any;
        status: any;
        detailAnswer: DetailApplicantAnswer;
    constructor(
        applicantAnswerId: any,
        user: User,
        dateOfAnswer: any,
        totalPoint: any,
        status: any,
        detailAnswer: DetailApplicantAnswer
    ){

    }
}