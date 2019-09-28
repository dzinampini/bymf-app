import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ItemSliding } from 'ionic-angular';
import { Http } from '@angular/http';
import { GlobalProvider } from "../../providers/global/global";


//pages 
// import { WelcomePage } from '../welcome/welcome';
import { BymfManualPage } from '../bymf-manual/bymf-manual';
import { BymfManualChapterPage } from '../bymf-manual-chapter/bymf-manual-chapter';
import { BymfLocatorPage } from '../bymf-locator/bymf-locator';
import { BymfEventsPage } from '../bymf-events/bymf-events';
import { BymfContactPage } from '../bymf-contact/bymf-contact';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  verses = [];

  all_verses = [];

  pick = Math.floor(Math.random() * 5); //between 0 and 5

  // verse1: string;
  // english1: string;
  // shona1: string;
  // ndebele1: string; 

  constructor(
    public global:GlobalProvider, 
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public http: Http) {
  }
  
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.all_verses=[
      {
        "verse":"1 Timothy 4:12",
        "english":"Don’t let anyone look down on you because you are young, but set an example for the believers in speech, in conduct, in love, in faith and in purity.",
        "ndebele":"Ungavumeli muntu ukuba akweyise ngenxa yokuthi usakhula, kodwa abakholwayo benzele isibonelo ngokukhuluma, langokuphila, langothando langokukholwa kanye langokuhlambuluka.",
        "shona":"Ngakurege kuva nomunhu anokuzvidza nokuda kwouduku hwako, asi uve muenzaniso kuvatendi mukutaura, muupenyu, murudo, mukutenda uye napakuchena kwomwoyo. ",
      },
      {
        "verse":"Romans 3:23",
        "english":"for all have sinned and fall short of the glory of God",
        "ndebele":"ngoba bonke bonile njalo bayasilela enkazimulweni kaNkulunkulu",
        "shona":"nokuti vose vakatadza uye vakasasvika pakubwinya kwaMwari",
      },
      {
        "verse":"Romans 6:23",
        "english":"For the wages of sin is death, but the gift of God is eternal life in[b] Christ Jesus our Lord.",
        "ndebele":"Ngoba umvuzo wesono yikufa, kodwa isipho sikaNkulunkulu siyikuphila okungapheliyo kuKhristu uJesu iNkosi yethu.",
        "shona":"Nokuti mubayiro wechivi ndirwo rufu, asi chipo chaMwari chokungopiwa ndihwo upenyu husingaperi muna Kristu Jesu Ishe wedu.",
      },
      {
        "verse":"John 3:16",
        "english":"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
        "ndebele":"“UNkulunkulu walithanda ilizwe waze wanikela iNdodana yakhe iyiyo yodwa ukuze kuthi loba ngubani okholwa kuyo angabhubhi kodwa abe lokuphila okungapheliyo. ",
        "shona":"“Nokuti Mwari akada nyika nokudaro, kuti akapa Mwanakomana wake mumwe oga, kuti ani naani anotenda kwaari arege kufa asi ave noupenyu husingaperi.",
      },
      {
        "verse":"Ecclesiastes 12:1",
        "english":"Remember your Creator in the days of your youth, before the days of trouble come and the years approach when you will say, 'I find no pleasure in them'",
        "ndebele":"Khumbula uMdali wakho ngezinsuku zobutsha bakho, kungakafiki izinsuku zokuhlupheka njalo kusondele leminyaka lapho ozakuthi, 'Angizuzi kuthokoza kuzo'",
        "shona":"Rangarira Musiki wako pamazuva ouduku hwako, mazuva okutambudzika asati auya, namakore asati aswedera pauchati, 'Handioni zvinofadza maari,'",
      },
      {
        "verse":"Matthew 28:18-20",
        "english":"Then Jesus came to them and said, 'All authority in heaven and on earth has been given to me. Therefore go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit,  and teaching them to obey everything I have commanded you. And surely I am with you always, to the very end of the age.'",
        "ndebele":"UJesu weza kubo wathi, 'Wonke amandla ezulwini lasemhlabeni aphiwe mina. Ngakho hambani lenze abafundi ezizweni zonke, libabhaphathize ebizweni likaBaba, leleNdodana lelikaMoya oNgcwele, njalo libafundise ukulalela konke engililaye ngakho. Ngempela ngilani kokuphela, kuze kube sekucineni kwesikhathi.'",
        "shona":"Ipapo Jesu akasvika pavari akati, 'Simba rose kudenga napanyika rakapiwa kwandiri. Naizvozvo endai mudzidzise ndudzi dzose, muchivabhabhatidza muzita raBaba, neroMwanakomana neroMweya Mutsvene, uye muchivadzidzisa kuti vachengete zvose zvandakakurayirai. Uye zvechokwadi ndinemi kusvikira pakuguma kwenyika.'",
      },
    ];
    
    this.verses.push(this.all_verses[this.pick]);
  }

  

  // donorsLogin() {
  //   this.navCtrl.push(DonorsLoginPage);
  // }

}
