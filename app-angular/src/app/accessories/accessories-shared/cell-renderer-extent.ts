import { DatetimeFormat } from './datetime-format';

export class CellRendererExtent {
  static itemCellRendered(params: any) {
    return (params.api.paginationProxy.currentPage) * params.api.paginationProxy.pageSize + params.rowIndex + 1;
  }

  static itemCellRenderedFile(params: any) {
    return params.value ? 'Si' : 'No';
  }

  static itemCelllRenderedDate(params: any) {
    return params.value ? DatetimeFormat.getDateTimeCurrent(params.value) : '';
  }
}
