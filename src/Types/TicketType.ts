import {ProblemType} from "./ProblemType";

export type TicketType = {
    id: number;
    is_full_exam_version: boolean;
    description_content?: string;
    problems: ProblemType[];
}