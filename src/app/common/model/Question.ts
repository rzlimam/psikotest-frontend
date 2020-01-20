import { QuestionType } from './QuestionType';
import { QuestionData } from './QuestionData';
import { validAnswer } from './ValidAnswer';
import { User } from './User';

export class Questions {
    questionId: string;
    questionType: QuestionType;
    questionTitle: string;
    data: QuestionData;
    answer: validAnswer;
    isActive: Boolean;
    dateOfQuestion: Date;
    user: User;
}