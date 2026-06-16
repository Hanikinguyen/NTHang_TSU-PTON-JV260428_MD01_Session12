let name = "";
let age = "";

while (true) {
  let choice = Number(prompt(
    "MENU:\n" +
    "1. Nhập tên\n" +
    "2. Nhập tuổi\n" +
    "3. Hiển thị tên và tuổi\n" +
    "4. Bảng cửu chương\n" +
    "5. Kiểm tra chẵn lẻ\n" +
    "6. Tính tổng 1 đến N\n" +
    "7. In dãy số\n" +
    "8. Kiểm tra số nguyên tố\n" +
    "9. Đảo ngược chuỗi\n" +
    "10. Thoát\n\n" +
    "Nhập lựa chọn:"
  ));

  if (choice === 1) {
    name = prompt("Nhập tên:");
  }

  else if (choice === 2) {
    age = Number(prompt("Nhập tuổi:"));
  }

  else if (choice === 3) {
    alert(`Tên: ${name} - Tuổi: ${age}`);
    console.log(`Tên: ${name} - Tuổi: ${age}`);
  }

  else if (choice === 4) {
    let n = Number(prompt("Nhập số để in bảng cửu chương:"));
    let result = "";

    for (let i = 1; i <= 10; i++) {
      result += `${n} x ${i} = ${n * i}\n`;
    }

    alert(result);
  }

  else if (choice === 5) {
    let n = Number(prompt("Nhập số cần kiểm tra:"));

    if (n % 2 === 0) {
      alert("Số chẵn");
    } else {
      alert("Số lẻ");
    }
  }

  else if (choice === 6) {
    let n = Number(prompt("Nhập N:"));
    let sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }

    alert(`Tổng từ 1 đến ${n} = ${sum}`);
  }

  else if (choice === 7) {
    let arr = prompt("Nhập dãy số (cách nhau bởi dấu phẩy):");
    console.log(arr.split(","));
  }

  else if (choice === 8) {
    let n = Number(prompt("Nhập số:"));
    let isPrime = true;

    if (n < 2) isPrime = false;

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    alert(isPrime ? "Là số nguyên tố" : "Không phải số nguyên tố");
  }

  else if (choice === 9) {
    let str = prompt("Nhập chuỗi:");
    let reversed = str.split("").reverse().join("");

    alert(`Chuỗi đảo ngược: ${reversed}`);
  }

  else if (choice === 10) {
    alert("Thoát chương trình!");
    break;
  }

  else {
    alert("Lựa chọn không hợp lệ!");
  }
}