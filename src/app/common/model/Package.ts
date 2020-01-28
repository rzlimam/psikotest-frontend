import { Time } from '@angular/common';
import { PackagDetail } from './PackageDetail';
import { QuestionType } from './QuestionType';

export class Package {
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