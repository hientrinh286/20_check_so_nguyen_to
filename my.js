let number = +prompt('Nhập vào 1 số tự nhiên:');
cb2 = Math.sqrt(number);
check = true;
for (let i=2; i<=cb2; i++){
    if (number % i ==0){
        document.write('Đây không phải là số nguyên tố.');
        check = false;
        break;
    }
    
}
if (check){
    document.write('Đây là số nguyên tố');
}