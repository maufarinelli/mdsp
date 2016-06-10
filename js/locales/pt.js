'use strict';

(function(angular) {
    angular.module('i18n')
        .factory('ptText', function() {
            return {
                'title.site': 'Morro de São Paulo Vacations - Hotéis, Pousadas, Restaurantes, O que fazer e muito mais',
                'description.site': 'O guia mais completo de Morro de São Paulo, na província da Bahia, Brasil. Tudo o que você precisa saber sobre os hotéis onde se hospedar, restaurantes, coisas para fazer em Morro, etc ... para ter as férias perfeitas neste paraíso',
                'keywords.site': 'Morro de São Paulo, Morro, Bahia, férias Bahia, férias Morro de São Paulo, hoties e pousadas Morro de São Paulo, Como chegar no Morro de São Paulo, O que fazer em Morro de São Paulo',

                'menu.home': 'MorroDeSaoPaulo.vacations',
                'menu.howToGet': 'Como chegar',
                'menu.hotels': 'Hotéis e pousadas',
                'menu.thingsToDo': 'O que fazer',

                'submenu.howToGet': 'Como chegar',
                'submenu.hotels': 'Hotéis',
                'submenu.thingsToDo': 'O que fazer',

                'menu.url.home': '/#/hoteis-pousadas-restaurantes-informacao',
                'menu.url.howToGet': '/#/como-chegar',
                'menu.url.hotels': '/#/hoteis-e-pousadas',
                'menu.url.thingsToDo': '/#/o-que-fazer',

                'home.title': 'Bemvindo à Morro de São Paulo.',
                'home.localTime': ', horário local.',
                'home.phrase1': '<b>Morro de São Paulo</b> é um daqueles lugares de nosso planeta em que <b>as pessoas chegam e não querem mais ir embora</b>. Possui <b>4 praias paradisíacas</b> com águas cristalinas em meio aos arrecifes de corais, que deixam qualquer visitante encantado.',
                'home.phrase2': 'Situada na ilha de Tinharé, ao sul de Salvador, é <b>abençoada pela natureza e um vilarejo simpático</b> e convidativo a uma caminhada diurna ou noturna. ',
                'home.phrase3': 'Na ilha não entram automóveis, mas acredite, não lhe fará nenhuma falta <b>se você gosta de caminhar, respirar um ar puro</b> e sentir aquele aroma gostoso de praia tropical.',
                'home.phrase4': 'Você quer um <b>praia linda e bem tranquila</b>? Tem! Você quer uma <b>praia mais agitada</b>, com mais badalação? Tem também. Prefere <b>caminhar a beira do mar</b>? Ou dar uma <b>bom mergulho e ficar boiando</b> por horas? Morro de São Paulo é um <b>lugar para todos os gostos</b>.',
                'home.phrase5': 'A <b>vida noturna</b> também é <b>variada</b>. Tem agitação com <b>casas noturnas</b> ou <b>restaurantes com clima romântico</b> e música ao vivo. Bares para tomar uma <b>cerveja gelada com a galera</b> ou <b>restaurantes para familias com crianças</b>. Restaurantes de frente para o mar ou no meio da vila. <b>Tem de tudo mesmo</b>. Aliás, <b>gastronomia é um dos pontos fortes</b> de Morro de São Paulo.',
                'home.phrase6': 'Além das 4 praias que você deve conhecer, Morro de São Paulo possui <b>diversos passeios</b> e <b>atividades</b> para se fazer. <b>Subir no morro do Farol</b> para admirar a vista e <b>descer pela tiroleza</b>, pegar um passeio de <b>lancha em volta de toda a Ilha</b>, <b>mergulho</b> ou <b>snorkeling</b>, <b>pôr-do-sol do forte</b>, <b>surf</b> na primeira praia e muita mais.',
                'home.phrase7': 'Morro de São Paulo possui <b>pousadas e hotéis</b> que agradam <b>todos os gostos</b>. Desde <b>pousadas tranquilas a beira mar</b>, passando por <b>simples pousadas</b> e <b>albergues</b> no vilarejo, até mesmo <b>hotéis bem sofisticados</b>. Morro de São Paulo tem o tipo de hospedagem que você está procurando. <a href="#/hoteis-e-pousadas">Saiba mais</a>',

                'howToGet.title': 'Como chegar no paraíso de Morro de São Paulo?',
                'howToGet.option.abroad': '<b>A maioria dos turistas</b> chegam de <b>avião em Salvador</b>, capital da Bahia, no Aeroporto Dep. Luís Eduardo Magalhães.',
                'howToGet.option.brazil': 'Se <b>você pretende vir de carro de alguma região do Brasil</b>, <a ,href="#">clique aqui</a> para obter mais informações.',
                'howToGet.threeOptions.title': 'Após chegar a Salvador, você tem 3 opções:',

                'howToGet.option1': 'Transfer Aéreo',
                'howToGet.option1.details1': '$: até R$ 465,00',
                'howToGet.option1.details2': 'H: 25 minutos',
                
                'howToGet.option2': 'Marítimo',
                'howToGet.option2.details1': '$: + ou - R$ 80,00',
                'howToGet.option2.details2': 'H: 2:00 à 2:30 hrs',

                'howToGet.option3': 'Terrestre e marítimo',
                'howToGet.option3.details1': '$: + ou - R$ 110,00',
                'howToGet.option3.details2': 'H: em torno de 4 hrs',

                'howToGet.option.avion.text1': '<b>No Aeroporto de Salvador</b> (Dep. Luís Eduardo Magalhães), você encontrará lojas da Abaeté e da Lider, que <b>são algumas das empresa responsáveis pelo Transfer Aéreo em pequenos aviões</b> bi-motores com capacidade máxima de 8 pessoas.',
                'howToGet.option.avion.text2': '<b>Existem outras empresas</b> também como a Axé, <b>com os seguintes vôos</b>:',
                'howToGet.head1': 'Horário',
                'howToGet.head2': 'Destino',
                'howToGet.head3': 'Frequência',
                'howToGet.headOrigin': 'Origem',

                'howToGet.land.origin': 'Aeroporto de Salvador',
                'howToGet.land.origin.return': 'Porto de Morro de São Paulo',
                'howToGet.frequency': 'Diariamente',
                'howToGet.option.avion.text3': '<b>E as empresas</b> Addey Taxi Aéreo, Aero Star e Tarp, <b>com os seguintes vôos<b/>:',

                'howToGet.option.boat.text1': 'Se <b>você tem geralmente problemas de enjôo em barcos</b>, aconselhamos <b>desconsiderar essa opção</b>. Nos dias <b>em que o mar está agitado, muitos passam mal</b>. Porém, se você não acha que isso será um problema, com certeza vale a pena, pois é a metade do tempo do percurso terrestre por praticamente o mesmo valor.',
                'howToGet.option.boat.text2': 'Outra dica é tentar <b>conciliar a chegada do seu vôo com os horários das embarcações</b>. Tente chegar em Salvador no máximo 12:30 hs, 13:00 hs, pois <b>após 14:30 dificilmente encontrará alguma embarcação</b> partindo para Morro.',
                'howToGet.option.boat.text3': 'Do Aeroporto de Salvador (Dep. Luís Eduardo Magalhães), você deverá pegar um taxi ou van até o Terminal Marítimo na frente do Mercado Modelo da Cidade baixa de Salvador.',
                'howToGet.option.boat.text4': 'Do Terminal saem lanchas e catamarãs. Veja <b>abaixo os horários das empresas</b> Biotur, Ilha Bela e Farol do Morro.',

                'howToGet.option.land.text1': 'Esta é a <b>opção mais indicada</b> para aqueles que <b>não querer gastar muito e não gostam de ficar horas num barco</b>.',
                'howToGet.option.land.text1.1': 'Porém, é muita mais prático fechar um pacote com alguma empresa, como a Cassi Turismo ou a Portella Turismo, pois eles tem guias em todos os pontos de embarque e desembarque, além de vans, ônibus e barcos reservados no trajeto. Caso prefira esta opção, <a ng-click="scrollTo(\'packages-transfer\')">clique aqui</a> para obter as informações.',
                'howToGet.option.land.text2.title': 'Aeroporto - Terminal Marítimo (Terrestre)',
                'howToGet.option.land.text2': 'Do <b>Aeroporto de Salvador</b>, você terá que <b>pegar um taxi ou uma van para o Terminal Marítimo de Salvador</b> ao lado do Mercado Modelo, um dos pontos turísticos mais famosos de Salvador, <b>ou para o Terminal Hidroviário de São Joaquim</b>. Esse trajeto será feito em <b>45 minutos</b>.',
                'howToGet.option.land.text3.title': 'Travessia da Baia de Todos os Santos (Marítimo)',
                'howToGet.option.land.text3.1': '1ª opção: No <b>Terminal Hidroviário de São Joaquim</b>, você deverá pegar o <b>ferry-boat em direção à Bom Despacho</b>, Vera Cruz, na Ilha de Itaparica. O serviço começa cedo, às 5:00 hs, até as 23:00 hs. As travessias são feitas de hora em hora, porém na alta temporada o intervalo de espera provavelmente diminui, se houver grande demanda. O trajeto leva <b>em torno de 1 hora</b> e custará <b>R$ 4,30 por pessoa nos dias de semana, e R$ 5,60 nos fins de semana e feriados</b>.',
                'howToGet.option.land.text3.2': '2ª opção: No <b>Terminal Marítimo</b>, você poderá pegar <b>barcos ou lanchas em direção ao Terminal Náutico de Mar Grande</b>, em Vera Cruz, Ilha de Itaparica. Lanchas começam a sair por volta de <b>7:00 hs até as 20:00 hs</b>. O trajeto levará em torno de <b>40 minutos e custará entre R$ 4,00 e R$ 6,00</b>.',
                'howToGet.option.land.text4.title': 'Itaparica à Valença (Terrestre)',
                'howToGet.option.land.text4.1': '1ª opção: <b>Chegando em Bom Despacho</b>, você poderá pegar um <b>ônibus ou uma van para Valença</b>. Logo na saída do portão de desembarque do ferry-boat, você encontrará a pequena estação de ônibus. A viagem até Valença dura em torno de <b>1 hora e 40 minutos, e custará em média R$ 12,00<b/>.',
                'howToGet.option.land.text4.2': '2ª opção: <b>Chegando à Mar Grande</b>, haverá alguns <b>taxis, Vans e Kombis</b> próximas à saída do porto que fazem o <b>transporte até Valença</b>. O valor pode variar <b>R$ 12,00 e R$ 25,00 e a viagem dura cerca de 1 hora e 40 minutos</b>.',
                'howToGet.option.land.text5.title': 'Valença à Morro de São Paulo(Marítimo)',
                'howToGet.option.land.text5.1': 'Chegando ao pequeno <b>terminal de embarcações de Valença</b>, existem diversas <b>lanchas e barcos que fazem o trajeto até Morro</b>. O valor também pode varias em torno de <b>R$ 15,00 e o trajeto é feito em apenas 15 minutos</b>.',
                'howToGet.option.land.text6.title': 'Horários do translado da Cassi Turismo e Portella Turismo:',

                'hotels.title': 'Hotéis, hostels e pousadas',
                'hotels.subtitle': 'Encontre o tipo de acomodação que você está procurando em Morro de São Paulo',

                'thingsToDo.title': 'Coisas para fazer em Morro de São Paulo',
                'thingsToDo.sports.subtitle': 'Esportes',
                'thingsToDo.leisure.subtitle': 'Lazer',
                'thingsToDo.tours.subtitle': 'Passeios',

                'thingsToDo.sport1.label': 'Mergulho',
                'thingsToDo.sport1.url': '/#/esportes',
                'thingsToDo.sport2.label': 'Snorkeling',
                'thingsToDo.sport2.url': '/#/esportes',
                'thingsToDo.sport3.label': 'Surf',
                'thingsToDo.sport3.url': '/#/esportes',
                'thingsToDo.sport4.label': 'Caiaque',
                'thingsToDo.sport4.url': '/#/esportes',

                'thingsToDo.leisure1.label': 'Caminhada pelas praias',
                'thingsToDo.leisure1.url': '/#/lazer',
                'thingsToDo.leisure2.label': 'Vilarejo e sua história',
                'thingsToDo.leisure2.url': '/#/lazer',
                'thingsToDo.leisure3.label': 'Pôr do sol do forte',
                'thingsToDo.leisure3.url': '/#/lazer',

                'thingsToDo.tour1.label': 'Volta à ilha de Tinharé',
                'thingsToDo.tour1.url': '/#/passeios',
                'thingsToDo.tour2.label': 'Para Garapuá',
                'thingsToDo.tour2.url': '/#/passeios',
                'thingsToDo.tour3.label': 'Para a Ponta do Curral',
                'thingsToDo.tour3.url': '/#/passeios'
            };
        });
})(window.angular);