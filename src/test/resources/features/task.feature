Feature: Trendyol Task Calışması
  @wip
  Scenario: Task Steps
    Given www.gittigidiyor.com sitesi açılır.
    When Ana sayfanın açıldığı kontrol edilir. Siteye login olunur
    Then Login işlemi kontrol edilir.
    And Arama kutucuğuna 'bilgisayar' kelimesi girilir.
    And Arama sonuçları sayfasından 2.sayfa açılır.
    And 2.sayfanın açıldığı kontrol edilir.
    And Sonuca göre sergilenen ürünlerden rastgele bir ürün seçilir.
    And Seçilen ürünün ürün bilgisi ve tutar bilgisi txt dosyasına yazılır.
    And Seçilen ürün sepete eklenir.
    And Ürün sayfasındaki fiyat ile sepette yer alan ürün fiyatının doğruluğu karşılaştırılır.
    And Adet arttırılarak ürün adedinin 2 olduğu doğrulanır.
    And Ürün sepetten silinerek sepetin boş olduğu kontrol edilir.

