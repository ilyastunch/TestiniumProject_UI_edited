$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/task.feature");
formatter.feature({
  "name": "Trendyol Task Calışması",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Task Steps",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "www.gittigidiyor.com sitesi açılır.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.www_gittigidiyor_com_sitesi_açılır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ana sayfanın açıldığı kontrol edilir. Siteye login olunur",
  "keyword": "When "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.ana_sayfanın_açıldığı_kontrol_edilir_Siteye_login_olunur()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login işlemi kontrol edilir.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.login_işlemi_kontrol_edilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Arama kutucuğuna \u0027bilgisayar\u0027 kelimesi girilir.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.arama_kutucuğuna_kelimesi_girilir(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Arama sonuçları sayfasından 2.sayfa açılır.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.arama_sonuçları_sayfasından_sayfa_açılır(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "2.sayfanın açıldığı kontrol edilir.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.sayfanın_açıldığı_kontrol_edilir(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Sonuca göre sergilenen ürünlerden rastgele bir ürün seçilir.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.sonuca_göre_sergilenen_ürünlerden_rastgele_bir_ürün_seçilir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seçilen ürünün ürün bilgisi ve tutar bilgisi txt dosyasına yazılır.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.seçilen_ürünün_ürün_bilgisi_ve_tutar_bilgisi_txt_dosyasına_yazılır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Seçilen ürün sepete eklenir.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.seçilen_ürün_sepete_eklenir()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ürün sayfasındaki fiyat ile sepette yer alan ürün fiyatının doğruluğu karşılaştırılır.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.ürün_sayfasındaki_fiyat_ile_sepette_yer_alan_ürün_fiyatının_doğruluğu_karşılaştırılır()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Adet arttırılarak ürün adedinin 2 olduğu doğrulanır.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.adet_arttırılarak_ürün_adedinin_olduğu_doğrulanır(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Ürün sepetten silinerek sepetin boş olduğu kontrol edilir.",
  "keyword": "And "
});
formatter.match({
  "location": "com.gittigidiyor.step_definitions.TaskDefs.ürün_sepetten_silinerek_sepetin_boş_olduğu_kontrol_edilir()"
});
formatter.result({
  "status": "passed"
});
});