package com.gittigidiyor.step_definitions;

import com.gittigidiyor.pages.ButikPage;
import com.gittigidiyor.pages.DashboardPage;
import com.gittigidiyor.pages.LoginPage;
import com.gittigidiyor.pages.ProductPage;
import com.gittigidiyor.utilities.BrowserUtils;
import com.gittigidiyor.utilities.ConfigurationReader;
import com.gittigidiyor.utilities.Driver;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;

public class TaskDefs {
    DashboardPage dashboardPage = new DashboardPage();
    LoginPage loginPage = new LoginPage();

    @Given("www.gittigidiyor.com sitesi açılır.")
    public void www_gittigidiyor_com_sitesi_açılır() {
        Driver.get().get(ConfigurationReader.get("url"));

    }

    @When("Ana sayfanın açıldığı kontrol edilir. Siteye login olunur")
    public void ana_sayfanın_açıldığı_kontrol_edilir_Siteye_login_olunur() {
        Assert.assertTrue(Driver.get().getTitle().equals("GittiGidiyor - Türkiye'nin Öncü Alışveriş Sitesi"));
        dashboardPage.girişYap.click();
        Driver.get().get(ConfigurationReader.get("login_url"));
        loginPage.login(ConfigurationReader.get("username"),ConfigurationReader.get("password"));

    }

    @Then("Login işlemi kontrol edilir.")
    public void login_işlemi_kontrol_edilir() {

    }

    @Then("Arama kutucuğuna {string} kelimesi girilir.")
    public void arama_kutucuğuna_kelimesi_girilir(String string) {

    }

    @Then("Arama sonuçları sayfasından {int}.sayfa açılır.")
    public void arama_sonuçları_sayfasından_sayfa_açılır(Integer int1) {

    }

    @Then("{int}.sayfanın açıldığı kontrol edilir.")
    public void sayfanın_açıldığı_kontrol_edilir(Integer int1) {

    }

    @Then("Sonuca göre sergilenen ürünlerden rastgele bir ürün seçilir.")
    public void sonuca_göre_sergilenen_ürünlerden_rastgele_bir_ürün_seçilir() {

    }

    @Then("Seçilen ürünün ürün bilgisi ve tutar bilgisi txt dosyasına yazılır.")
    public void seçilen_ürünün_ürün_bilgisi_ve_tutar_bilgisi_txt_dosyasına_yazılır() {

    }

    @Then("Seçilen ürün sepete eklenir.")
    public void seçilen_ürün_sepete_eklenir() {

    }

    @Then("Ürün sayfasındaki fiyat ile sepette yer alan ürün fiyatının doğruluğu karşılaştırılır.")
    public void ürün_sayfasındaki_fiyat_ile_sepette_yer_alan_ürün_fiyatının_doğruluğu_karşılaştırılır() {

    }

    @Then("Adet arttırılarak ürün adedinin {int} olduğu doğrulanır.")
    public void adet_arttırılarak_ürün_adedinin_olduğu_doğrulanır(Integer int1) {

    }

    @Then("Ürün sepetten silinerek sepetin boş olduğu kontrol edilir.")
    public void ürün_sepetten_silinerek_sepetin_boş_olduğu_kontrol_edilir() {

    }

}
