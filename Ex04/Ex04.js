let temp = Number(prompt("Nhập nhiệt độ hiện tại:"));

if (temp > 100) {
  alert("Nhiệt độ quá cao! Hãy giảm nhiệt độ.");
} 
else if (temp < 20) {
  alert("Nhiệt độ quá thấp! Hãy tăng nhiệt độ.");
} 
else {
  alert("Nhiệt độ bình thường.");
}