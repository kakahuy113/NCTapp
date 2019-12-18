import { Injectable } from '@angular/core';

export interface Sing {
  Id: string;
  Name: string;
  Singer: string;
  content: string;
  image: string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private sings = [
    {
        "Id": "1412134502",
        "Name": "Anh Còn Nợ Em",
        "Singer": "Quang Dũng",
        "content":`Anh còn nợ em, Công viên ghế đá,Công viên ghế đá, Lá đổ chiều mưa`,
        "image": "./assets/images/quangdung.jpeg"
    },
    {
        "Id": "1412134520",
        "Name": "Sóng gió",
        "Singer": "Jack_KTM",
        "content":"Hồng trần trên đôi cánh tay,Họa đời em trong phút giây,Từ ngày thơ ấy còn ngủ mơ đến khi em thờ ơ,Lòng người anh đâu có hay,Một ngày khi vỗ cánh bay,Từ người yêu hóa thành người dưng đến khi ta tự xưng à,Thương em bờ vai nhỏ nhoi,Đôi mắt hóa mây đêm,Thương sao mùi dạ lý hương,Vương vấn mãi bên thềm,Đời phiêu du cố tìm một người thật lòng,Dẫu trời mênh mông anh nhớ em,Chim kia về vẫn có đôi,Sao chẳng số phu thê?,Em ơi đừng xa cách tôi,Trăng cố níu em về,Bình yên trên mái nhà,Nhìn đời ngược dòng,Em còn bên anh có phải không?,Trời ban ánh sáng, năm tháng tư bề",
        "image": "./assets/images/quangdung.jpeg"
    },
    {
        "Id": "1412145502",
        "Name": "Cách Biệt",
        "Singer": "Đặng Thế Luân",
        "content":"Anh còn nợ em, Công viên ghế đá,Công viên ghế đá, Lá đổ chiều mưa",
        "image": "./assets/images/dangtheluan.jpeg"
    },   
    {
        "Id": "1412144501",
        "Name": "Gặp Nhau Trong Rùng Mơ",
        "Singer": "Trọng Tấn, Tân Nhàn",
        "content":"Anh còn nợ em,Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa",
        "image": "./assets/images/trongtan.jpeg"
    },
    {
        "Id": "1412143332",
        "Name": "Đáp Mộ Cuộc Tình",
        "Singer": "Đan Nguyên",
        "content":"Anh còn nợ em, Công viên ghế đá, Công viên ghế đá, Lá đổ chiều mưa",
        "image": "./assets/images/dannguyen.jpeg"
    }
];

  constructor() {
   }
  getSongs() {
    return [...this.sings];
  }

  getSong(id) {
    return {...this.sings.find(Song => {
      return Song.Id === id;
    })};
  }
}
