var a=document.getElementById("bir")
var div=document.getElementById("div")
 var b=document.getElementById("ikki")
function foo(){
    div.classList.add("div")
 if(a.value ==="Advakat" || a.value ==="advakat"){
       
 b.innerHTML=`${a.value} - yuridik va jismoniy shaxslarga profesional huquqiy yordam ko'rsatuvchi fuqaro`
 }else if(a.value ==="Affekt" || a.value ==="affekt"){
          b.innerHTML=`${a.value} - kishinig qisqa muddatli jahldorlik holati, u kuchli va chuqur kechinma hamda o'z harakatlari ustidan nazoratnig pasayishi bilan xarakterlanadi `
 }else if(a.value ==="Amnitsiya" || a.value ==="amnitsiya"){
          b.innerHTML=`${a.value} - jinoyat sodir etganlarni jazodan ozod etish yoki uni yumshatish `
 }else if(a.value ==="Apatridlar" || a.value ==="apatridlar"){
          b.innerHTML=`${a.value} - fuqaroligi bo'lmagan shaxslar`
 }else if(a.value ==="Apellatsiya" || a.value ==="apellatsiya"){
          b.innerHTML=`${a.value} - sud qarori ustidan shikoyat qilish shakillaridan biri, bunda ishni ikkinchi instansiya sudi tomonlarning shikoyatlari bo'yicha ko'rib chiqadi`
 } else if(a.value ==="Aqli rasolik" || a.value ==="aqli rasolik"){
          b.innerHTML=`${a.value} - ruhan sog'lom kishinig normal holati bo'lib, o'z harakatlariga baho bera olish va ularni boshqara olish qobiliyatida o'z ifodasini topadi`
 } 
 else if(a.value ==="Aqli norasolik" || a.value ==="aqli norasolik"){
          b.innerHTML=`${a.value} - ruhiyatning kasallik holati yok aqli zaiflik bilan shartlangan, shaxsning o'z harakatlariga baho bera olmasligi yoki ijtimoiy xavfli qilmioshni sodir etish paytida ularni boshqara olmasligi`
 }
 else if(a.value ==="Ashyo" || a.value ==="ashyo"){
          b.innerHTML=`${a.value} - fuqarolik huquqida - mulk obyekti`
 }
 else if(a.value ==="Ayblanuvchi" || a.value ==="ayblanuvchi"){
          b.innerHTML=`${a.value} - qonunda belgilangan tartibda uni ayblanuvchi sifatida javobgarlikka tortish xususida qaror chiqarilgan shaxs. Sud vaqtida ayblanuvchi sudlanuvchi deb, hukm chiqarilganidan keyin esa - mahkum deb nomlanadi`
 }
 else if(a.value ==="aybsizlik prezumpsiyasi" || a.value ==="Aybsizlik prezumpsiyasi"){
          b.innerHTML=`${a.value} - aybi sud tomonidan isbotlab berilguniga qadar ayblanuvchi yoki sudlanuvchi aybsiz deb hisoblanadigan qoida`
 }
 else if(a.value ==="Boqim" || a.value ==="boqim"){
          b.innerHTML=`${a.value} - boshqa shaxsdan to'liq moddiy ta'minot yoki doimiy moddiy yordam oladigan shaxs`
 }
 else if(a.value ==="Konsesus" || a.value ==="konsesus"){
          b.innerHTML=`${a.value} - ovoz berishni o'tkazmasdan umimiy rozilik asisida qaror yoki shartnoma matnini qabul qilish usuli`
 }
 else if(a.value ==="Konvensiya" || a.value ==="konvensiya"){
          b.innerHTML=`${a.value} - hukumatlar darajasida tuzilgan xalqaro shartnoma nomlaridan biri`
 }
 else if(a.value ==="Korrupsiya" || a.value ==="korrupsiya"){
          b.innerHTML=`${a.value} - siyosat yoki davlat boshqaruvi sohasidagi jinoiy faoliyat: mansabdor shaxslarning ularga ishonib topshirilgan huquqlardan shaxsiy manfaati uchun foydalanishi`
 }
 else if(a.value ==="Mol-mulk" || a.value ==="mol-mulk"){
          b.innerHTML=`${a.value} - biror-bir shaxsning mulki xatlash va uni tassarruf etishni taqiqlab qo'yish`
 }
 else if(a.value ==="Mulkka band solish" || a.value ==="mulkka band solish"){
          b.innerHTML=`${a.value} - mol-mulkni xatlash va uni tassarruf etishni taqiqlab qo;yish`
 }
 else if(a.value ==="Muomala layoqati" || a.value ==="muomala layoqati"){
          b.innerHTML=`${a.value} - xorijiy shaxsni unig arizasiga binoan fuqarolik burchlarini yaratish va ularni bajarish layoqati`
 }
 else if(a.value ==="Naturalizatsiya" || a.value ==="naturalizatsiya"){
          b.innerHTML=`${a.value} - xorijiy shaxsni unig arizasiga binoan fuqarolikka qabul qilish`
 }
 else if(a.value ==="Nojo'ya harakat" || a.value ==="nojo'ya harakat"){
          b.innerHTML=`${a.value} - intizomiy yoki ma'muriy javobgarlikka sabab bo'ladigan huquqqa qarshi harakat`
 }
 else if(a.value ==="Oferta" || a.value ==="oferta"){
          b.innerHTML=`${a.value} - muayyam shaxsga bitim tuzish xususida qilingan rasmiy taklif, bunda uni tuzish uchun zazur bo'lgan barcha zamr shrtlar ko'rsatiladi`
 }
 else if(a.value ==="Qasd" || a.value ==="qasd"){
          b.innerHTML=`${a.value} - harakatlarning ijtimoiy xavliligi va huquqqa qarshi harakat`
 }
 else if(a.value ==="Qochoq" || a.value ==="qochoq"){
          b.innerHTML=`${a.value} - unga nisbatan zo'rlik sodir etilgani yoki zo'rlikka uchrash haqiqiy xavfi tug'ilganligi tufayli o'zining doimiy turar joyini tark etib, boshqa dablat hududida yashashga majbur bo'lgan fuqaroligi yo'q shaxs`
 }
 else if(a.value ==="Qonun kuchiga ega hujjat" || a.value ==="qonun kuchiga ega hujjat"){
          b.innerHTML=`${a.value} - davlat hokimiyati idoralarinig qonunga qaraganda kamroq, lekin qonuniy kuchga ega bo'lgan huquqiy hujjat`
 }
 else if(a.value ==="Sudlov ishlarini yurgizish oshkoraligi" || a.value ==="sudlov ishlarini yurgizish oshkoraligi"){
          b.innerHTML=`${a.value} - sudlov ishlarini yurgizish qoidasi, barcha sudlarda sudlov ishlarini ochiq olib borishni nazarda tutadi`
 }
 else if(a.value ==="Surishtiruv" || a.value ==="surishtiruv"){
          b.innerHTML=`${a.value} - jinoyatlarni dastlabki tergab-tekshirish shakllaridan biri`
 }
 else if(a.value ==="Suverenitet" || a.value ==="suverenitet"){
          b.innerHTML=`${a.value} - davlatning mamlakat ichida ustuvorligi va unig tashqi munosabatlarda mustaqilligi`
 }
 else if(a.value ==="Tahdid" || a.value ==="tahdid"){
          b.innerHTML=`${a.value} - kishilar ustidan ruhiy zo'ravonlik qilish turlaridan biri`
 }
 else if(a.value ==="Taomil, odat" || a.value ==="taomil, odat"){
          b.innerHTML=`${a.value} - uzoq muddatli ijtimoiy  amaliyot mobaynida shakllangan odatlar mustahkamlangan xatti-harakat shakli. Davlat paydo bo'lishi bilan taomil huquq manbayiga aylanadi va unga rioya etish davlatning majburlashi bilan ta'minlanadi`
 }
 else if(a.value ==="Terrorizm" || a.value ==="terrorizm"){
          b.innerHTML=`${a.value} - biror-bir maqsadga erishish maqsadida huquqqa qarshi harakatlar majmuyi`
 }
 else if(a.value ==="tovlamachilik" || a.value ==="Tovlamachilik"){
          b.innerHTML=`${a.value} - zo'rlik ishlatish tahdidi bilan mol-mulkni berishni talab qiladigan reket, jinoyat`
 }
 else if(a.value ==="Tuhmat" || a.value ==="tuhmat"){
          b.innerHTML=`${a.value} - qasddan boshqa shaxsni badonm qiladigan, yolg'on-bo'htonlarni tarqatish`
 }
 else if(a.value ==="Ushlash" || a.value ==="ushlab" || a.value ==="turish" ||   a.value ==="hibs"){
          b.innerHTML=`${a.value} - jinoyatni sodir etishda shubhalanayotgan shaxsga nisbatan qo'llaniladigan, ushlangan shaxnig jinoyatga daxldorligini aniqlash va uni qamoqq olish mumkinligi masalasini hal etish maqsadida, 72 soatdan oshmaydigan qisqa muddatli majburlov chorasi`
 }else if(a.value ==="Vandalizm" || a.value ==="vandalizm" ){
          b.innerHTML=`${a.value} - moddiy va madaniy boyliklarni bema'nilarcha yo'q qilish, jamoat inshootlarini bulg'ash, mol-mulkni ishdan chiqarish va hokozalor`
 }else if(a.value ==="Vasiyat" || a.value ==="vasiyat" ){
          b.innerHTML=`${a.value} - fuqaro o'zinig mol-mulki xususida vafot etishini nazarda tutgan holda farmoyish berishi, qonunda  belgilangan tartibda bajariladi`
 }else if(a.value ==="Voyaga yetmaganlar" || a.value ==="voyaga yetmaganlar" ){
          b.innerHTML=`${a.value} - O'zbekiston Respublikasinig qonu hujjatlariga muvofiq 18 yoshga yetmagan shaxslar`
 }
 else if(a.value ==="Yuridik shaxs" || a.value ==="yuridik shaxs" ){
          b.innerHTML=`${a.value} - o'z mulkida lohida mol-mulki bo'lgan va o'z majburiyatlariga ana shu mol-mulki bilan javob beradigan tashkilot`
 }
 else if(a.value ==="Yurisprudensiya" || a.value ==="Yurisprudensiya" ){
          b.innerHTML=`${a.value} - huquqshunoslik, sud idoralarinig qaror chiqarish huquqi to'g'risidagi fanlar majmuyi, huquqshunoslarnig amaliy faoliyati`
 }
 else{
          b.innerHTML=`Bu "${a.value}" atama mavjud emas`      
 }
}