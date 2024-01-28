function hesapla() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const sayi1 = document.getElementById("sayi1");
    const sayi2 = document.getElementById("sayi2");
    const sayi3 = document.getElementById("sayi3");
    const sonuc = document.getElementById("sonuc");

    const yilDate = new Date();

    const dogumDate = new Date(year, month - 1, day);

    const x = yilDate.getTime() - dogumDate.getTime();

    const years = Math.floor((yilDate.getFullYear() - year));
    const months = Math.floor(yilDate.getMonth() - month + 1);
    const days = Math.floor(yilDate.getDate() - day);


    document.getElementById("sayi1").innerText = years;
    document.getElementById("sayi2").innerText = months;
    document.getElementById("sayi3").innerText = days;


    if (years < 18) {
        sonuc.innerText = "GENÇ BİR BİREYSİNİZ";
    } else if (years >= 18 && years <= 30) {
        sonuc.innerText = "YETİŞKİN BİR BİREYSİNİZ";
    } else if (years >= 31 && years <= 50) {
        sonuc.innerText = "OLGUN BİR BİREYSİNİZ";
    } else if (years >= 51 && years <= 90) {
        sonuc.innerText = "YAŞLI BİR BİREYSİNİZ";
    } else {
        sonuc.innerText = "ÖLMÜŞ OLMANIZ GEREKİYOR";
    }    
}
