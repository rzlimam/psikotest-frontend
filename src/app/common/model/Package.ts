import { Time } from '@angular/common';
import { PackagDetail } from './PackageDetail';
import { QuestionType } from './QuestionType';

export class Package {
      isActive : any;
      questionType:QuestionType;
      packageName : any;
      amountOfTime: any;
      description : any;
      packageId : any;
      packageDetail: PackagDetail;
   constructor(
      isActive : any,
      questionType:QuestionType,
      packageName : any,
      amountOfTime: any,
      description : any,
      packageId : any,
      packageDetail: PackagDetail
   ){}
}