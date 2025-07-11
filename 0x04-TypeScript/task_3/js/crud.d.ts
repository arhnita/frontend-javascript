import { RowID, RowElement } from "../interface";

declare function insertRow(row:RowElement): RowID;
declare function deleteRow(rowId: RowID): void;
declare function updateRow(rowId: RowID, row: RowElement): RowID
//input after : is the output of what is expected