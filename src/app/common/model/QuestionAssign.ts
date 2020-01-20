import { QuestionType } from './QuestionType';
import { QuestionData } from './QuestionData';
import { validAnswer } from './ValidAnswer';
import { User } from './User';
import { Package } from './Package';

export class Questions {
    AssignQuestionId: string;
    user: User;
    packagee: Package;
    data: QuestionData;
    answer: validAnswer;
}