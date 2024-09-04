import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export interface Contact {
    id: number;
    firstname: string;
    civilite: string;
    birthDate: NgbDateStruct;
}