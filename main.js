const tnx = [
    "Спасибо за самые лучшие игрушки на Новый Год и День Рождения",
    "Спасибо за кукольный домик из тетрадки",
    "Спасибо за то, что у меня есть собака 🦮",
    "Спасибо за сестрёнок",
    "Спасибо за поездку в Украину, Болгарию, Грецию и Турцию",
    "Спасибо, что проводила со мной время в Москве",
    "Спасибо, что вместе со мной искала черепашек ниндзя",
    "Спасибо, что разрешила Юле прилететь на одну ночь в Кишинёв",
    "Спасибо, что готова говорить со мной на любые темы",
    "Спасибо за то, что читала мне Гарри Поттера на ночь",
    "Спасибо за то, что научила меня пользоваться торрентами",
    "Спасибо за то, что умеешь извиняться",
    "Спасибо за то, что умеешь прощать",
    "Спасибо, что отпустила меня на Новый Год в Москву",
    "Спасибо за твою любовь",
    "Спасибо за твою поддержку",
    "Спасибо за смешные посты в Facebook",
    "Спасибо за то, что прикрываешь мой зад ;)",
    "Спасибо за то, что уговариваешь меня купить вещи, которые потом становятся моими любимыми вещами",
    "Спасибо за то, что укрывала одеялом, если я замерзал",
    "Спасибо за то, что приносила еду к компьютеру",
    "Спасибо за то, что закрываешь глаза на мои шалости",
    "Спасибо за то, что я могу считать тебя другом",
    "Спасибо за то, что я тебя никогда не стеснялся, а только гордился тобой и хвастался, что у меня лучшая мама",
    "Спасибо, что разрешала не ходить в школу",
    "Спасибо за то, что я до сих пор помню Корнея Чуковского",
    "Спасибо, что я учился в лучшем лицее города",
    "Спасибо за то, что мне не нужно заполнять миграционку при въезде в Россию",
    "Спасибо за тхэквондо, танцы, театр, рисование и фехтование",
    "Спасибо за то, что всегда ждешь меня домой",
    "Спасибо за возможность учиться в другой стране",
    "Спасибо за то, что нашла мою волшебную палочку в сугробе",
    "Спасибо за первый в классе телефон с Bluetooth",
    "Спасибо за то, что ты лучший парикмахер",
    "Спасибо за то, что разрешила мне красить волосы",
    "Спасибо за то, что давала поиграть на айфоне",
    "Спасибо за то, что раздавала интернет",
    "Спасибо за то, что никогда не скупилась на похвалу",
    "Спасибо за то, что всегда прислушиваешься к моим желаниям",
    "Спасибо за то, что разрешала гулять до  глубокой ночи",
    "Спасибо за то, что у меня есть велосипед",
    "Спасибо за то, что поехала с нами на турнир в Афины",
    "Спасибо за то, что встречала меня на остановке и отводила домой",
    "Спасибо, что забирала меня из школы",
    "Спасибо, что заполняла мой дневник и собирала рюкзак, а иногда и делала домашку ;)",
    "Спасибо за то, что не злишься долго",
    "Спасибо за самые вкусные пончики, вафельные трубочки и сырники",
    "Спасибо за то, что создавала атмосферу праздника на мои Дни Рождения ",
    "Спасибо за то, что бросила курить",
    "Спасибо за то, что привила мне чувство вкуса",
    "Спасибо за то, что разрешила мне носить очки ",
    "Спасибо за то, что у меня была возможность выучить английский",
    "Спасибо за то, что разрешала мне есть суп половником",
    "Спасибо за суп с сердечками",
    "Спасибо за то, что ты такая красивая",
    "Спасибо за то, что отпустила меня в Польшу ",
    "Спасибо за то, что не осуждаешь",
    "Спасибо за выезды на природу и прогулки на велосипедах",
    "Спасибо за домашние хот-доги, пиццу и лазанью",
    "Спасибо, что заставляешь фотографироваться",
    "Спасибо за то, что переписывала со мной TED",
    "Спасибо за хорошее чувство юмора",
    "Спасибо, что не могла уснуть, пока я не вернусь домой ночью",
    "Спасибо за то, что приняла мою девушку",
    "Спасибо за то, что давала советы по готовке",
    "Спасибо за то, что ходила на Фантастических Тварей с волшебной палочкой",
    "Спасибо за то, что ты такая умная",
    "Спасибо за то, что ты такая инициативная",
    "Спасибо за то, что смотрела со мной Вторжение Титанов и Игру Престолов",
    "Спасибо за то, что прислушиваешься к мои рекомендациям по сериалам",
    "Спасибо, что рисовала за меня работы по изо, контурные карты и стенгазеты. А еще печатала рефераты",
    "Спасибо за то, что считала сколько остановок мне нужно проехать",
    "Спасибо, что вызывала мне такси",
    "Спасибо, что делала мне чай в бутылке",
    "Спасибо, что не ругалась, когда я разбил/потерял телефон",
    "Спасибо, что нашла мне такого папу",
    "Спасибо за танец на выпускном",
    "Спасибо за видео от родителей с выпускного",
    "Спасибо за ночные посиделки на кухне",
    "Спасибо за то, что у нас всегда чисто, когда приходят гости",
    "Спасибо за блокноты, брелки, чехлы, визиточницу, кроссовки, сумки для ноутбука с алиэкспресса",
    "Спасибо за то, что научила меня играть в бадминтон ",
    "Спасибо за то, что записывали Power Rangers, чтобы я мог посмотреть их вечером",
    "Спасибо за игры на компьютере. Особенно запомнился Узник Азкабана и Риттер Спорт (та самая шоколадка из рекламы)",
    "Спасибо, что смогли найти игру по описанию «гонка, в которой можно выходить из машины»",
    "Спасибо за ролики с силиконовыми колесами и комплект защиты",
    "Спасибо за самокат и скейтборд ",
    "Спасибо что научила меня висеть на турниках и раскачиваться на качелях",
    "Спасибо, что брала меня плавать на глубину",
    "Спасибо за водонепроницаемые часы и шпионский набор",
    "Спасибо за фишки из чипсов и игрушки из киндеров",
    "Спасибо, что не разозлилась, когда я сказал, что больше хочу в Окницу, чем в Бендеры",
    "Спасибо, что не разрешила взять никнейм Sasuke",
    "Спасибо за бутылки с теплой водой зимой",
    "Спасибо за картошку в простыне, привязанную ко мне красным шарфом, спасибо за ингаляции и парку ног",
    "Спасибо за варенье разбавленное водой",
    "Спасибо, что начала класть меньше сахара мне в чай",
    "Спасибо, что готовишь что-то вкусное на мой День Рождения ",
    "Спасибо за прогулку на теплоходе",
    "Спасибо, что оставила меня с Егором на даче",
    "Спасибо за метательные ножи",
    "Спасибо за то, что с тобой всегда можно посоветоваться",
    "Спасибо за то, что ты лучший штурман",
    "Спасибо за то, что подарила мне жизнь",
    "Спасибо за то, что не жалела сил и ресурсов на мое развитие ",
    "Спасибо за то, что отправила меня на курсы английского",
    "Спасибо за то, что люди называют меня воспитанным",
    "Спасибо, что переводишь мне кэшбек на Билайн",
    "Спасибо за макбук, эирподс и айфон",
    "Спасибо за то, что защищала меня от Зои Каплан и разрешила давать сдачу Оле Ясабаш",
    "Спасибо за то, что была главой родительского комитета",
    "Спасибо, что после школы дома меня всегда ждал обед",
    "Спасибо, что выгуливала собак, когда мне было лень",
    "Спасибо, что давала выспаться на каникулах и выходных",
    "Спасибо, что отвечала на все мои любопытные детские вопросы",
    "Спасибо за костюм Гарри Поттера, Человека Паука, Снеговика, Арлекина, Аладдина, Львенка, Принца и Снеговика",
    "Спасибо за работу над танцевальными костюмами",
    "Спасибо, что ушивала мне брюки",
    "Спасибо за гербарий",
    "Спасибо за блины на Масленицу",
    "Спасибо за фингерборды",
    "Спасибо за необычные десерты",
    "Спасибо за красивые шАрфы",
    "Спасибо за первые ручки для пенспининга",
    "Спасибо, что учила со мной тхэгуки",
    "Спасибо, что держала бутылку как грушу, когда я отрабатывал удары ногами",
    "Спасибо, что серьезно относилась к моим чувствам",
    "Спасибо, что поддерживала меня, когда я из Польши уехал в Калининград",
    "Спасибо за белую фляжку с чаем в начальной школе",
    "Спасибо за сэндвичи на конкурсах по танцам",
    "Спасибо за пирог в лагере с тхэквондо ",
    "Спасибо за бутеры с докторской колбасой и томатным соком",
    "Спасибо за ласты и маску",
    "Спасибо за аквапарк в Одессе",
    "Спасибо, что давала мне носить свои кроссовки",
    "Спасибо за очистки от яблок",
    "Спасибо за съемки в Metering и Orange",
    "Спасибо за то, что мы не ходили в McDonald’s",
    "Спасибо, что поддерживала меня, когда я решил стать программистом",
    "Спасибо за дополнительную оперативную память в компьютер. 512мб - мало",
    "Спасибо за новый кулер, после того, как я взорвал старый",
    "Спасибо, что я так долго верил в Деда Мороза",
    "Спасибо за ёлку на Новый Год",
    "Спасибо за аккаунт в одноклассниках и mail.ru",
    "Спасибо за двухъярусную кровать с бортиком",
    "Спасибо за xbox360 и игры на него",
    "Спасибо за яркие куртки",
    "Спасибо за то, что не заводишь аккаунт в инстаграме и оставляешь место для личной жизни",
    "Спасибо, что выключала ночью кондиционер ",
    "Спасибо, что ела мою сопливую яичницу",
    "Спасибо, что махала мне рукой в окно палаты в больнице",
    "Спасибо, что научила играть в дурака, пьяницу, зеваку и ту игру с «буржуй мадам»",
    "Спасибо, что защищала меня от дворовых хулиганов",
    "Спасибо, что не запрещала мне заниматься паркуром ",
    "Спасибо за то, что я знаю, что такое полноценная семья",
    "Спасибо, что учила меня рисовать",
    "Спасибо, что научила меня рассказывать стихи с выражением",
    "Спасибо, что ничего мне не навязывала",
    "Спасибо за постельное белье с совами",
    "Спасибо, что не злилась на странные и ненужные подарки",
    "Спасибо за вечера проведенные за настолками",
    "Спасибо за то, что учила со мной название стран и их столиц",
    "Спасибо, что научила выговаривать Vlaicu Pîrcalab",
    "Спасибо за то, что я появился, когда вы были еще совсем молодыми. У меня больше времени, которое я провел с вами, чем у остальных",
    "Спасибо за посиделки с гостями до 5 утра",
    "Спасибо за то, что отдавала мне свои наушники и power bank",
    "Спасибо, что зашивала мне носки",
    "Спасибо, что выкладывала мои мокрые перчатки на батарею",
    "Спасибо, что катала меня на санках",
    "Спасибо, что научила кататься на роликах и коньках",
    "Спасибо, что не заставляла меня завязывать шнурки до 5 лет",
    "Спасибо, что помогала с подарками для моих друзей"
];

const imgLen = 66;

$(document).ready(function() {
//
const button = $("#btn");
const text = $("#tnx > h1:first");
const image = $("img:first");
const slider = $("input:first");
var textIndex = 0;
var imgIndex = 0;


text.text(tnx[Math.floor(Math.random() * tnx.length)]);
image.attr("src", "pics/" + Math.floor(Math.random() * imgLen) + ".jpg");
slider.attr("checked", true);

button.click(function() {
    if (slider.is(":checked")) {
        textIndex = 0;
        imgIndex = 0;
        text.text(tnx[Math.floor(Math.random() * tnx.length)]);
        image.attr("src", "pics/" + Math.floor(Math.random() * imgLen) + ".jpg");
    }
    else {
        console.log(imgIndex, textIndex)
        // console.log(imgIndex, imgIndex == imgLen)
        text.text(tnx[textIndex]);
        image.attr("src", "pics/" + imgIndex + ".jpg");
        textIndex = (textIndex + 1 == tnx.length) ? 0 : textIndex + 1;
        imgIndex = (imgIndex + 1 == imgLen) ? 0 : imgIndex + 1;
    }
});
//
});
