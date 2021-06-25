import { Component, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MyComponentComponent } from './my-component/my-component.component'
// import'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
 
  title = 'my-appangular';
  columnDefs = [
    { field: 'Loại hồ sơ', sortable: true, filter: true },
    { field: 'Đối tượng', sortable: true, filter: true },
    { field: 'Nội dung', sortable: true, filter: true },
    { field: 'Đợt TT', sortable: true, filter: true },
    { field: 'Giá đề nghị TT', sortable: true, filter: true },
    { field: 'Ngày đến hạn', sortable: true, filter: true }
  ];

  rowData = [

    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' }, { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' }, { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' }, { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' }, { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' }, { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' }, { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' }, { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
    { 'Loại hồ sơ': '', 'Đối tượng': '', 'Nội dung': '', 'Đợt TT': '', 'Giá đề nghị TT': '', 'Ngày đến hạn': '' },
  ];
}

// nạp dữ liệu  từ httpclient
// export class AppComponent {
//   private gridApi;
//   private gridColumnApi;

//   private columnDefs;
//   private defaultColDef;
//   private defaultColGroupDef;
//   private columnTypes;
//   private rowData: [];

//   constructor(private http: HttpClient) {
//     this.columnDefs = [
//       {
//         headerName: 'Athlete',
//         field: 'athlete',
//       },
//       {
//         headerName: 'Sport',
//         field: 'sport',
//       },
//       {
//         headerName: 'Age',
//         field: 'age',
//         type: 'numberColumn',
//       },
//       {
//         headerName: 'Year',
//         field: 'year',
//         type: 'numberColumn',
//       },
//       {
//         headerName: 'Date',
//         field: 'date',
//         type: ['dateColumn', 'nonEditableColumn'],
//         width: 220,
//       },
//       {
//         headerName: 'Medals',
//         groupId: 'medalsGroup',
//         children: [
//           {
//             headerName: 'Gold',
//             field: 'gold',
//             type: 'medalColumn',
//           },
//           {
//             headerName: 'Silver',
//             field: 'silver',
//             type: 'medalColumn',
//           },
//           {
//             headerName: 'Bronze',
//             field: 'bronze',
//             type: 'medalColumn',
//           },
//           {
//             headerName: 'Total',
//             field: 'total',
//             type: 'medalColumn',
//             columnGroupShow: 'closed',
//           },
//         ],
//       },
//     ];
//     this.defaultColDef = {
//       width: 150,
//       editable: true,
//       filter: 'agTextColumnFilter',
//       floatingFilter: true,
//       resizable: true,
//     };
//     this.defaultColGroupDef = { marryChildren: true };
//     this.columnTypes = {
//       numberColumn: {
//         width: 130,
//         filter: 'agNumberColumnFilter',
//       },
//       medalColumn: {
//         width: 100,
//         columnGroupShow: 'open',
//         filter: false,
//       },
//       nonEditableColumn: { editable: false },
//       dateColumn: {
//         filter: 'agDateColumnFilter',
//         filterParams: {
//           comparator: function (filterLocalDateAtMidnight, cellValue) {
//             var dateParts = cellValue.split('/');
//             var day = Number(dateParts[0]);
//             var month = Number(dateParts[1]) - 1;
//             var year = Number(dateParts[2]);
//             var cellDate = new Date(year, month, day);
//             if (cellDate < filterLocalDateAtMidnight) {
//               return -1;
//             } else if (cellDate > filterLocalDateAtMidnight) {
//               return 1;
//             } else {
//               return 0;
//             }
//           },
//         },
//       },
//     };
//   }

//   onGridReady(params: { api: any; columnApi: any; }) {
//     this.gridApi = params.api;
//     this.gridColumnApi = params.columnApi;

//     this.http
//       .get('https://www.ag-grid.com/example-assets/olympic-winners.json')
//       .subscribe((data) => {
//         this.rowData = data;
//       });
//   }
// }