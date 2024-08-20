import { FormControl } from "@angular/forms";

export interface Question {
    id: number;
    title: string;
    type: number;
    answers: string[];
}


/**
 * Type dont le nom des propriétés est dynamique.
 * @example qc[`question${question.id}`] = new FormControl('',Validators.required);
 * qc['abc'] = new FormControl(false, {nonNullable: true});
 * qc['def'] = new FormControl('',[Validators.required, Validators.maxLength(10), Validators.pattern(regexPattern)]);
 */
export type QuestionControl = { 
    [key: string] : FormControl<any>
};