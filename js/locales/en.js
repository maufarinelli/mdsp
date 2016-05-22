'use strict';

(function(angular) {
    angular.module('i18n')
        .factory('enText', function() {
            return {
                'title.site': 'Morro de São Paulo Vacations - Hotels, Restaurants, What to do and much more',

                'menu.home': 'MorroDeSaoPaulo.vacations',
                'menu.howToGet': 'How to get here',
                'menu.hotels': 'Hotels and Inns',
                'menu.thingsToDo': 'Things to do',

                'menu.url.home': '/#/hotels-pousadas-restaurants-info',
                'menu.url.howToGet': '/#/how-to-get-here',
                'menu.url.hotels': '/#/hotels-and-pousadas',
                'menu.url.thingsToDo': '/#/things-to-do',

                'home.title': 'Welcome to Morro de São Paulo.',
                'home.localTime': ', local time.',
                'home.phrase1': '<b>Morro de São Paulo</b> is one of those places <b>people just want to stay forever</b>. It has <b>4 beautiful beaches</b> with <b>crystal clear water</b> amidst the <b>coral reefs</b> which delights any visitor.',
                'home.phrase2': 'Located in Tinharé island, south of Salvador, capital of Bahia\'s Province, it is <b>blessed by Nature and has a welcoming village</b> inviting you to go for a walk any time of the day.',
                'home.phrase3': 'There is no cars in the island, but believe me, you won\'t miss your vehicle <b>if you like to walk, breathe fresh air and feel that pleasant smell of a tropical beach.',
                'home.phrase4': 'Are you looking for a <b>beatiful and very quiet beach</b>? Morro de São Paulo has it! Do you want a <b>busier beach and party</b>? Morro de São Paulo has too. Do you prefer to <b>walk by the sea</b>? Or to <b>swim a bit and stay afloat</b> for hours? Morro de São Paulo is a <b>place for everyone</b>. <a href="#">Read more</a>',
                'home.phrase5': '<b>Nightlife</b> has also <b>a lot of options</b>. You can find party on the <b>nightclubs</b> or <b>romantic moments in some restaurants</b> with some live music. You can find bars to have some <b>cold beers with your friends</b> or <b>restaurants for families with kids</b>. Restaurants facing the sea or in the middle of the village. <b>Morro de São Paulo has absolutely everything</b>. In fact, <b>food is one of the strengths</b> of Morro de São Paulo. <a href="#">Read more</a>',
                'home.phrase6': 'In addition to the beaches you must go, Morro de São Paulo has <b>several tours and activities</b> to do. <b>Go up on the lighthouse hill</b> to admire the view and <b>go down the tyrolean traverse</b>, take a <b>boat ride around the entire island</b>, <b>diving or snorkeling</b>, see the <b>sunset in the fortress</b>, <b>surf</b> in the first beach and much more. <a href="#">Read more</a>',
                'home.phrase7': 'Morro de São Paulo has <b>hotels and inns</b> that please <b>every kind of tourist</b>. <b>Quiet hotels by the sea</b>, <b>bed and breakfast</b> and <b>hostels</b> in the village, or <b>very sophisticated hotels</b>. Morro de São Paulo has the kind of accommodation you are looking for. <a href="#">Read more</a>', 

                'howToGet.title': 'How to get here, at Morro de São Paulo?',
                'howToGet.option.abroad': '<b>Most tourists arrive by plane in Salvador</b>, capital of Bahia, in the Dep. Luis Eduardo Magalhaes Airport.',
                'howToGet.option.brazil': 'If you intend to come <b>by car from some region of Brazil</b>, <a href="#">click here</a> for more information.',
                'howToGet.threeOptions.title': 'After arriving at Salvador, you have 3 options:',

                'howToGet.option1': 'By airplane',
                'howToGet.option1.details1': 'Price: up to R$ 465,00',
                'howToGet.option1.details2': 'Duration: 25 minutes',

                'howToGet.option2': 'By boat',
                'howToGet.option2.details1': 'Price: around R$ 80,00',
                'howToGet.option2.details2': 'Duration: 2:00h to 2:30h',

                'howToGet.option3': 'Land and sea',
                'howToGet.option3.details1': 'Price: around R$ 110,00',
                'howToGet.option3.details2': 'Duration: up to 4 hours',

                'howToGet.option.avion.text1': '<b>At the Salvador Airport</b> (Dep. Luís Eduardo Magalhães), you will find the Abaeté and Lider stores, which are <b>some of the company<b/> responsible for the <b>flight in small aircrafts</b> for 06-08 passengers.',
                'howToGet.option.avion.text2': 'There are <b>other companies</b> as well as the Axé, with the <b>following flights schedule</b>:',
                'howToGet.head1': 'Timetable',
                'howToGet.head2': 'Destination',
                'howToGet.head3': 'Frequency',
                'howToGet.headOrigin': 'Origin',

                'howToGet.land.origin': 'Salvador Airport',                
                'howToGet.land.origin.return': 'Seaport of Morro de São Paulo',
                'howToGet.frequency': 'Daily',
                'howToGet.option.avion.text3': 'And <b>also the compagnies</b> Addey Taxi Aéreo, Aero Star e Tarp, with the <b>following flights schedule</b>:',

                'howToGet.option.boat.text1': 'If <b>you usually have seasickness</b> on boats, we advise you to <b>disregard this option</b>. On days <b>when the sea is rough</b>, a lot of <b>people have nausea</b>. But if you <b>don\'t think it will be a problem, certainly worth it</b>, because it is half the time of the land route by virtually the same amount.',
                'howToGet.option.boat.text2': 'Another tip is to <b>try to reconcile the arrival of your flight with the schedules of vessels</b>. Try to get in Salvador maximum 12:30 pm, 13:00, because <b>after 14:30 you will hardly find any boat</b> leaving for Morro.',
                'howToGet.option.boat.text3': 'From Salvador Airport (Dep. Luis Eduardo Magalhaes), you should take a taxi or van to the ferry terminal in front of the Mercado Modelo of Salvador.',
                'howToGet.option.boat.text4': 'In the Terminal, you can take boats and catamarans. Following below <b>the schedule of some companies</b> like Biotur, Ilha Bela e Farol do Morro.',

                'howToGet.option.land.text1': 'This is the <b>best option</b> for those who <b>do not want to spend too much and do not like to spend hours on a boat</b>.',
                'howToGet.option.land.text1.1': 'However, it is much more convenient to make deals with any company like Cassi Tourism or Portella Tourism, as they have guides in all the points of boat\'s departure and arrival, as well as vans, buses and reserved boats en route. If you prefer this option, <a ng-click="scrollTo(\'packages-transfer\')">click here</a> for details.',
                'howToGet.option.land.text2.title': 'Salvador Airport - Maritime terminal (Land)',
                'howToGet.option.land.text2': 'From <b>Salvador Airport</b>, you will have to take a <b>taxi or van to Maritime terminal</b>, close to the Mercado Modelo, one of the most famous sights of Salvador, <b>or the São Joaquim Waterway Terminal</b>. This path will be <b>done in 45 minutes</b>.',
                'howToGet.option.land.text3.title': 'Crossing the Baía de Todos os Santos (Maritime)',
                'howToGet.option.land.text3.1': '1st option: In the <b>São Joaquim Waterway Terminal</b>, you must take the <b>ferry towards Bom Despach</b>o, Vera Cruz, in Itaparica Island. The service starts early, at 5:00 am until 11:00 pm. The boats cross Baia de Todos os Santos each hour, but in high season the interval probably decreases if there is great demand. The transit <b>takes around 1 hour and will cost R$ 4.30 per person on weekdays and R$ 5.60 on weekends and holidays</b>.',
                'howToGet.option.land.text3.2': '2nd option: At the <b>Maritime Terminal</b>, you can take <b>boats or speedboats towards the maritime terminal of Mar Grande</b>, Vera Cruz, Itaparica Island. Boats start to leave around 7:00 am until 08:00 pm. The journey will take <b>around 40 minutes and cost between R$ 4.00 and R$ 6.00</b>.',
                'howToGet.option.land.text4.title': 'Itaparica to Valença (Land)',
                'howToGet.option.land.text4.1': '1st option: <b>Arriving in Bom Despacho</b>, you can take a <b>bus or a van to Valencia</b>. Right at the arrival gate, you\'ll find the small bus station. The trip to Valencia <b>takes around 1 hour and 40 minutes and will cost around R$ 12.00</b>.',
                'howToGet.option.land.text4.2': '2nd option: <b>Getting to Mar Grande</b>, there will be some <b>taxis and vans</b> outside the port that <b>can transport you to Valencia</b>. It can <b>cost between R$ 12.00 and R$ 25.00 and the trip takes about 1 hour and 40 minutes</b>.',
                'howToGet.option.land.text5.title': 'Valença to Morro de São Paulo(Maritime)',
                'howToGet.option.land.text5.1': 'Arriving at the small <b>Valencia maritime terminal</b>, there are several <b>boats and speedboats that make the trip to Morro de São Paulo</b>. It can cost around <b>R$ 15.00 and the trip is done in 15 minutes</b>.',
                'howToGet.option.land.text6.title': 'Cassi Tourism and Portella Tourism shuttle schedule:',

            };
        });
})(window.angular);