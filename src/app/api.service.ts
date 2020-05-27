import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DataService {
  getListData(): Observable<any> {
    return new Observable(sub => {
      const res = {
        hoTen: 'Việt',
        listDichVu: [
          {
            tenDichVu: 'Dịch vụ 1 ',
            soLuong: 10,
            donGia: 20000
          },
          {
            tenDichVu: 'Dịch vụ 2 ',
            soLuong: 22,
            donGia: 33330000
          }
        ]
      };
      sub.next(res);
    });
  }
}
