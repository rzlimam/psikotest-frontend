import { Questions } from './Question';
import { Package } from './Package';

export class PackagDetail {
    packageQuestionId: string;
    packages: Package;
    question: Questions;
    constructor(
        packageQuestionId: any,
        packages: any,
        question: any,
    ){
        this.packageQuestionId = packageQuestionId;
        this.packages = packages;
        this.question = question;
    }
}