// Dom7
var $$ = Dom7;

// Framework7 App main instance
var app  = new Framework7({
  root: '#app', // App root element
  id: 'io.framework7.testapp', // App bundle ID
  name: 'Framework7', // App name
  theme: 'md', // Automatic theme detection
  debugger: true,
  // App root data
  data: function () {
    return {    
      // All users
      users: [
        {
          id: '1',
          name: 'শেখ হাসিনা',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/pm_hasina_180614.jpg',
          title: 'প্রধানমন্ত্রী',
          division: [
            { div : "মন্ত্রিপরিষদ বিভাগ" },
            { div : "জনপ্রশাসন মন্ত্রণালয়" },
            { div : "প্রতিরক্ষা মন্ত্রণালয়" },
            { div : "সশস্ত্র বাহিনী বিভাগ" },
            { div : "বিদ্যুৎ, জ্বালানি ও খনিজ সম্পদ মন্ত্রণালয়" },
            { div : "মহিলা ও শিশু বিষয়ক মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '2',
          name: 'জনাব আ, ক, ম, মোজাম্মেল হক',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/MR.%20A.%20K.%20M%20MOZAMMEL%20HUQ%20Minister.png',
          title: 'মন্ত্রী',
          division: [
            { div : "মুক্তিযুদ্ধ বিষয়ক মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '3',
          name: 'জনাব ওবায়দুল কাদের',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Mr.%20Obaidul%20Quader%20Minister.png',
          title: 'মন্ত্রী',
          division: [
            { div : "সড়ক পরিবহন ও সেতু মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '4',
          name: 'জনাব মোঃ আব্দুর রাজ্জাক',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Dr.%20Muhammad%20Abdur%20Razzaque%20MP%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "কৃষি মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '5',
          name: 'জনাব আসাদুজ্জামান খান',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Asaduzzaman%20Khan%20MInister.JPG',
          title: 'মন্ত্রী',
          division: [
            { div : "স্বরাষ্ট্র মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '6',
          name: 'জনাব মোহাম্মদ হাছান মাহ্‌মুদ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Dr.%20Hasan%20Mahmud%2C%20MP%20Minister.png',
          title: 'মন্ত্রী',
          division: [
            { div : "তথ্য মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '7',
          name: 'জনাব আনিসুল হক',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Anisul%20Huq%20Minister.JPG',
          title: 'মন্ত্রী',
          division: [
            { div : "আইন, বিচার ও সংসদ বিষয়ক মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '8',
          name: 'জনাব আহম মুস্তফা কামাল ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/A%20H%20M%20Mustafa%20Kamal%2C%20FCA%2C%20MP%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "অর্থ মন্ত্রণালয়  " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '9',
          name: 'জনাব মোঃ তাজুল ইসলাম ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Md.%20Tazul%20Islam%2C%20MP.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "স্থানীয় সরকার বিভাগস্থানীয় সরকার" },
            { div : "পল্লী উন্নয়ন ও সমবায় মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '10',
          name: 'ডা: দীপু মনি ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Dr.%20Dipu%20Moni%2C%20M.P%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "শিক্ষা মন্ত্রণালয়" },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '11',
          name: 'জনাব এ. কে আব্দুল মোমেন  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/H.E.%20Dr.%20A.%20K.%20Abdul%20Momen%2C%20M.P.%E2%80%8B%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "পররাষ্ট্র মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '12',
          name: 'জনাব এম এ মান্নান',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/MA%20Mannan%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "পরিকল্পনা মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '13',
          name: 'জনাব নূরুল মজিদ মাহমুদ হুমায়ূন ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/Mr.%20Nurul%20Majid%20Mahmud%20Humayun%20MPHon%27ble%20Minister%20Ministry%20of%20Industries.png',
          title: 'মন্ত্রী',
          division: [
            { div : "শিল্প মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '14',
          name: 'জনাব গোলাম দস্তগীর গাজী  ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/MR.%20GOLAM%20DASTAGIR%20GAZI%20Minister.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "বস্ত্র ও পাট মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
        {
          id: '15',
          name: 'জনাব জাহিদ মালেক ',
          url: 'https://cabinet.portal.gov.bd/sites/default/files/files/cabinet.portal.gov.bd/page/60b1fce3_e203_4126_8f18_d69554fc46cb/%E0%A6%AE%E0%A6%BE%E0%A6%B2%E0%A7%87%E0%A6%95%2C%20%E0%A6%8F%E0%A6%AE%E0%A6%AA%E0%A6%BF.jpg',
          title: 'মন্ত্রী',
          division: [
            { div : "স্বাস্থ্য ও পরিবার কল্যাণ মন্ত্রণালয় " },
          ],
          joindate: '০৭-০১-২০১৯',
          distdate: '০৭-০১-২০১৯',
        },
      ]
    };
  },

  // App routes
  routes: routes,
});

// Init/Create views

var catalogView = app.views.create('#view-users', {
  url: '/users/'
});

var searchView = app.views.create('#search-user', {
  url: '/search/'
});
var settingsView = app.views.create('#view-settings', {
  url: '/settings/'
});
