//switch case ile örnekler yapıcam
/*atm uygulamasını ypıcaz 
bakiye görüntüleme
para çekme 
para yatırma 
çıkış şeklinde olucak
 */

let yeniSatır = "\r\n";
let bakiye = 1000;


let metin = "1-Bakiye Görüntüleme" + yeniSatır + "2-Para Çekme" + yeniSatır + "3-Para Yatırma" + yeniSatır + "4-Çıkış" + yeniSatır + "Lütfen bir değer seçiniz";

// alert(metin);
let secim = prompt(metin);
switch (secim) {
    case "1":
        alert("bakiyeniz :" + bakiye);
        break;
    case "2":
        let cekilecekTutar = Number(prompt("Çekmek İstediiiniz tutarı giriniz:"));
        if (cekilecekTutar < bakiye) {
            //bu başarılı bir işlem olur
            bakiye = bakiye - cekilecekTutar;
            alert("kalan bakiyeniz:" + bakiye);

        } else {
            alert("bakiyenizden fazla para çekemezsiniz." + yeniSatır + "bakiyeniz:" + bakiye + " " + "Çekilecek tutar :" + cekilecekTutar);

        }
        break;

    case "3":
        let yatirilacaktutar = Number(prompt("yatırılacak tutar giriniz:"));
        bakiye = bakiye + yatirilacaktutar;
        alert("güncwl bakiyeniz  : " + bakiye);
        break;


    case "4":
        console.log("sistemden çıkış yapıldı");

        break;

    default:
        console.log("Lütfen 1-4 arasında değer girinz.");
        break;


}

//kusursuz çalışıyor ekrana bildirim düşüyor ve değerleri istiyor sende o değeri yazıyorsun para ekliyor ve çıkartması gerekirse çıkartıyor.







