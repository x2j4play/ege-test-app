export type ProblemType = {
    id: number;
    num: string;
    is_detailed_answer: boolean;
    task_content: string;
    solution_content: string;
    correct_answer?: string;
    source?: string;
    criteria?: Criterion[]
}

export type Criterion = {
    text: string,
    score: number
}