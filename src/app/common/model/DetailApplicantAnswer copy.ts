import { User } from './User';
import { HeaderApplicantAnswer } from './HeaderApplicantAnswer';
import { ApplicantAnswer } from './ApplicantAnswer';
import { PackagDetail } from './PackageDetail';

export class DetailApplicantAnswer {
    detailAnswerId: string;
    headerApplicantAnswer: HeaderApplicantAnswer;
    applicantAnswer: ApplicantAnswer;
    packageQuestion: PackagDetail;
    point: number;
    // constructor(
    //     detailAnswerId: any,
    //     headerApplicantAnswer: HeaderApplicantAnswer,
    //     applicantAnswer: ApplicantAnswer,
    //     packageQuestion: PackagDetail,
    //     point: any
    // ){
    // }
}