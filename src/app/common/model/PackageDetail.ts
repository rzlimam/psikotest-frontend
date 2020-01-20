import { Questions } from './Question';
import { Package } from './Package';

export class PackagDetail {
    packageQuestionId: string;
    packages: Package;
    question: Questions;
}