export interface Questionaire {
  title: string;
  list: QuestionAnswerList[];
}

export interface QuestionAnswerList{
    id: string;
    question: string;
    answer: string;
}
