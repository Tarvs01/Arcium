export interface questionType{
    id: number,
    question: string,
    options: {[index: string] : string},
    answer: string
  }