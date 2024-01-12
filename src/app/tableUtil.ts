import * as XLSX from "xlsx";

const getFileName = (name: string) => {
  let timeSpan = new Date().toISOString();
  let sheetName = name || "ExportResult";
  let fileName = `${sheetName}-${timeSpan}`;
  return {
    sheetName,
    fileName
  };
};
export class TableUtil {
  static exportTableToExcel(tableId: string, name?: string) {
    let { sheetName, fileName } = getFileName(name!);
    let targetTableElm = document.getElementById(tableId);
    let wb = XLSX.utils.table_to_book(targetTableElm, <XLSX.Table2SheetOpts>{
      sheet: sheetName
    });
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  static exportArrayToExcel(arr: any, name?: string) {
    let { sheetName, fileName } = getFileName(name!);

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(arr._data.value);
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }

  static exportArrayToExcelWithCustomHeaders(arr: any, name?: string, heading?: any[]) {
    let { sheetName, fileName } = getFileName(name!);
    let headerNames = heading != undefined ? [heading] :[[]];
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.json_to_sheet(arr._data.value,{skipHeader:true});
    XLSX.utils.sheet_add_json(ws,arr._data.value,{skipHeader:true , origin: 'A2'});
    XLSX.utils.sheet_add_aoa(ws, headerNames)
    XLSX.utils.book_append_sheet(wb, ws, sheetName);
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
