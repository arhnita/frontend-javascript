/// <reference path="crud.d.ts" />
import { RowID, RowElement } from "../interface";
import * as CRUD from './crud.js'

const row: RowElement = {
    firstName: 'Anita',
    lastName: 'Samuel'
}

const newRowID: RowID = CRUD.insertRow(row);
const updatedRow: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID)

