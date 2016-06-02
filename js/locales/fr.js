'use strict';

(function(angular) {
    angular.module('i18n')
        .factory('frText', function() {
            return {
                'title.site': 'Morro de São Paulo Vacations - Des hôtels, restaurants, quoi faire et beaucoup plus',
                'description.site': 'Le guide le plus complet de Morro de São Paulo, dans la province de Bahia, Brésil. Tout ce que vous voulez savoir sur les hôtels où séjourner, restaurants, activités à Morro, etc ... pour avoir de belles vacances dans ce paradis',
                'keywords.site': 'Morro de São Paulo, Morro, Bahia, vacations Brésil, vacations bahia, vacations Morro de São Paulo, hôtels Morro de São Paulo, Comment arriver a Morro de São Paulo, Quoi faire a Morro de São Paulo',

                'menu.home': 'MorroDeSaoPaulo.vacations',
                'menu.howToGet': 'Comment venir',
                'menu.hotels': 'Hôtels et "pousadas"',
                'menu.thingsToDo': 'Quoi faire',

                'submenu.howToGet': 'Comment venir',
                'submenu.hotels': 'Hôtels',
                'submenu.thingsToDo': 'Quoi faire',

                'menu.url.home': '/#/hotels-pousadas-restaurantes-information',
                'menu.url.howToGet': '/#/comment-venir',
                'menu.url.hotels': '/#/hotels-et-pousadas',
                'menu.url.thingsToDo': '/#/quoi-faire',

                'home.title': 'Bienvenue à Morro de São Paulo.',
                'home.localTime': ', l\'heure locale.',
                'home.phrase1': '<b>Morro de São Paulo</b> est un des ces endroits <b>dont les gens arrivent et ne veulent plus partir</b>. Il a <b>4 belles plages</b> aux eaux cristallines et des récifs coralliens qui ravit tout visiteur.',
                'home.phrase2': 'Situé sur l\'île de Tinharé, au sud de Salvador, capitale de la Province de Bahia, c\'est une <b>paradis tropical qui dispose d\'un accueillant village</b> invitant à une promenade pendant la journée ou la soirée.',
                'home.phrase3': 'Il n\'y a pas d\'auto dans l\'île, mais croyez-moi, vous n\'allez adorer cela <b>si vous êtes une personne qui aime marche et sentir l\'air pure d\'une plage tropicale</b>.',
                'home.phrase4': 'Cherchez-vous une <b>belle plage très tranquile</b>? Morro de São Paulo contient cela! Voulez vous une <b>plage pour faire la fête</b>? Morro a cela aussi. Préférez-vous <b>faire une promenade en face de la mer</b>? Ou <b>plonger, nager et rester dans l\'eau chaude et tranquile à flot</b> pendant des heures? Morro de São Paulo est une place <b>pour tout le monde</b>.',
                'home.phrase5': '<b>La vie nocturne</b> a également <b>beaucoup d\'options</b>. Il y a de la fête certainement dans ces <b>nightclubs</b> ou <b>des moments romântiques dans quelques restaurants</b> avec des musiciens très talenteux. Il y a des bars pour prendre quelques <b>bières avec vos amis</b> ou <b>des restaurants pour les familles avec des enfants</b>. Restaurants en face de la mer ou au milieu de la ville. <b>Il y a tout sort d\'opitions</b>. En fait, <b>la gastronomie est l\'un des points forts</b> de Morro de São Paulo.',
                'home.phrase6': 'En plus des 4 plages que vous devez connaître, vous allez trouvé <b>beaucoup d\'activités</b> à Morro de São Paulo. <b>Montez sur la colline du phare</b> pour admirer la vue et <b>descendre la tyrolienne</b>, faire une <b>balade en bateau autour de l\'île</b>, <b>plongée sous-marine ou en apnée</b>, voir le <b>coucher de soleil dans la forteresse</b>, <b>surf</b> dans la première plage et beaucoup plus.',
                'home.phrase7': 'Morro de São Paulo possède <b>des hôtels et des auberges</b> qui plaisent à tous. <b>Hôtels tranquilles près de la mer</b>, <b>chambres d\'hôtes</b> et <b>auberges</b> dans le village, ainsi que <b>des hôtels très sophistiqués</b>. Morro de São Paulo a le type de logement que vous recherchez. <a href="#/hotels-et-pousadas">Savoir plus</a>',

                'howToGet.title': 'Comment venir à Morro de São Paulo?',
                'howToGet.option.abroad': '<b>La plupart des touristes arrivent par avion à Salvador</b>, capitale de Bahia, dans le Dep. Aéroport Luis Eduardo Magalhaes.',
                'howToGet.option.brazil': 'Si vous avez <b>l\'intention de venir en voiture de quelque région du Brésil</b>, <a href="#">cliquez ici</a> pour plus d\'informations.',
                'howToGet.threeOptions.title': 'Après l\'arrivée à Salvador, vous avez 3 options:',

                'howToGet.option1': 'Par avion',
                'howToGet.option1.details1': '$: jusqu\'à R$ 465,00',
                'howToGet.option1.details2': 'H: 25 minutes',

                'howToGet.option2': 'En bateau',
                'howToGet.option2.details1': '$: environ R$ 80,00',
                'howToGet.option2.details2': 'H: 2:00h à 2:30h',

                'howToGet.option3': 'Terre et mer',
                'howToGet.option3.details1': '$: environ R$ 110,00',
                'howToGet.option3.details2': 'H: autour de 4:00h',

                'howToGet.option.avion.text1': '<b>Dans l\'aéroport de Salvador</b> (Dep. Luís Eduardo Magalhães), vous allez trouver les magasins Abaete et Lider, qui sont <b>quelques unes des compagnies qui font le transport avec des petits avions</b> pour 06-08 passagers.',
                'howToGet.option.avion.text2': '<b>Il y a d\'autres entreprises</b> comme l\'Axé, <b>avec les vols suivants</b>:',
                'howToGet.head1': 'Horaires',
                'howToGet.head2': 'Destination',
                'howToGet.head3': 'Fréquence',
                'howToGet.headOrigin': 'Point de départ',

                'howToGet.land.origin': 'Aéroport de Salvador',
                'howToGet.land.origin.return': 'Port de Morro de São Paulo',
                'howToGet.frequency': 'Tous les jours',
                'howToGet.option.avion.text3': 'De plus, il y a <b>aussi les compagnies</b> Addey Taxi Aéreo, Aero Star e Tarp, <b>avec les vols suivants</b>:',

                'howToGet.option.boat.text1': 'Si <b>vous avez généralement du mal de mer</b> sur des bateaux, nous vous conseillons de <b>ne pas tenir compte de cette option</b>. Les jours <b>qui la mer est agitée</b>, beaucoup de <b>gens ont des nausées</b>. Mais si vous pensez que <b>cela ne sera pas un problème, certainement ça vaut la peine</b>, car il est la moitié du temps de l\'option par terre pour pratiquement le même montant à dépenser.',
                'howToGet.option.boat.text2': 'Une autre astuce est d\'essayer de <b>concilier l\'arrivée de votre vol avec les horaires des bateaux</b>. Essayez d\'arriver à Salvador au plus tard à 12h30, 13h00, car <b>après 14h30, il sera très difficile de trouver un bateau</b> qui part vers Morro.',
                'howToGet.option.boat.text3': 'De l\'aéroport de Salvador (Dep. Luis Eduardo Magalhaes), vous devez prendre un taxi ou minibus pour le terminal de ferry en face du Mercado Modelo.',
                'howToGet.option.boat.text4': 'Dans le terminal, vous pouvez prendre des bateaux ou des catamarans. Veuillez trouver ci-dessous <b>le calendrier de certaines entreprises</b> comme Biotur, Ilha Bela e Farol do Morro.',

                'howToGet.option.land.text1': 'Ceci est la <b>meilleure option pour ceux qui ne veulent pas dépenser trop et ne veut pas passer des heures sur un bateau</b>.',
                'howToGet.option.land.text1.1': 'Cependant, il est beaucoup plus pratique de faire des affaires avec une société comme Cassi Tourisme ou Portela Tourisme, car ils ont des guides dans tous les points de départ et d\'arrivée des bateaux, ainsi que des fourgonnettes et des es bateaux réservés en cours de route. Si vous préférez cette option, <a ng-click="scrollTo(\'packages-transfer\')">cliquez ici</a> pour les détails.',
                'howToGet.option.land.text2.title': 'Aéroport - Terminal du Ferry (Terre)',
                'howToGet.option.land.text2': 'De <b>l\'aéroport de Salvador</b>, vous devrez prendre un <b>taxi ou une fourgonnette au Terminal Maritimo</b>, près du Mercado Modelo, l\'un des sites les plus célèbres de Salvador, <b>ou le terminal portuaire de São Joaquim</b>. Ce chemin se fera <b>en 45 minutes</b>.',
                'howToGet.option.land.text3.title': 'Traversée de la Baia de Todos os Santos (Maritime)',
                'howToGet.option.land.text3.1': '1ère option: Dans le <b>Terminal portuaire de São Joaquim</b>, vous devez prendre le <b>ferry en direction de Bom Despacho</b>, Vera Cruz, dans l\'île d\'Itaparica. Le service commence tôt, à 5h00 du matin jusqu\'à 23h00. Les bateaux franchissent la Baia de Todos os Santos chaque heure, mais en haute saison l\'intervalle diminue si la demande est forte. La traversée dure <b>environ 1 heure et coûtera R$ 4,30 par personne en semaine et R$ 5,60 le week-end et les jours fériés</b>.',
                'howToGet.option.land.text3.2': '2ème option: Au <b>Terminal Marítimo</b>, vous pouvez prendre des <b>bateaux vers le Terminal maritime de Grande Mar</b>, Vera Cruz, l\'île d\'Itaparica. Bateaux commencent à partir vers 7h00 jusqu\'à 20h00. Le trajet dure <b>environ 40 minutes et coûte entre R$ 4.00 et R$ 6.00</b>.',
                'howToGet.option.land.text4.title': 'Itaparica à Valença (Terre)',
                'howToGet.option.land.text4.1': '1ère option: <b>Arrivée en Bom Despacho</b>, vous pouvez prendre un <b>autobus ou une fourgonnette vers Valença</b>. Juste à la porte d\'arrivée, vous trouverez la petite station d\'autobus. Le voyage à Valença prend <b>environ 1 heure et 40 minutes et coûte environ R$ 12.00</b>.',
                'howToGet.option.land.text4.2': '2ème option: <b>Arriver à Mar Grande</b>, il y aura des <b>taxis et des camionnettes à l\'extérieur du port</b> qui font le transport à Valence. Il peut en coûter <b>entre R$ 12.00 et R$ 25.00 et le trajet dure environ 1 heure et 40 minutes</b>.',
                'howToGet.option.land.text5.title': 'Valença à Morro de São Paulo (Maritime)',
                'howToGet.option.land.text5.1': 'En arrivant à la petite <b>gare maritime de Valença</b>, il y a plusieurs <b>bateaux que font le voyage à Morro de São Paulo</b>. Il peut coûter autour de <b>R$ 15,00 et le voyage se fait en 15 minutes</b>.',
                'howToGet.option.land.text6.title': 'Les horaires de navettes de la Cassi Tourisme et Tourisme Portella:',

                'hotels.title': 'Hotels, chambre d\'hôtes et "pousadas"',
                'hotels.subtitle': 'Trouvez le type de logement que vous recherchez à Morro de São Paulo',

                'thingsToDo.title': 'Quoi faire à Morro de São Paulo',
                'thingsToDo.temporary.text': 'Le contenu de cette page est en phase de production. Retournez bientôt.',
            };
        });
})(window.angular);