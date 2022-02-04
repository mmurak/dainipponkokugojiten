baseResource = "";
volDir = [];

maxPage = 556;
indexData = [
[
["扉", 4],
],
[
["つ",5],
["つ-る-す",6],
["つうかい",7],
["つうしふ",8],
["つうしんくくわく",9],
["つうてん",10],
["つかあな",11],
["つかひあふ",12],
["つかふくろ",13],
["つかもみ",14],
["つきあかり",16],
["つきえり",17],
["つきこもり",18],
["つきてつはう",19],
["つきはなた",20],
["つきもち",21],
["つくいも",22],
["つくしなきなた",23],
["つくままつり",24],
["つくりさいし",25],
["つくろひくち",26],
["つけくすり",27],
["つけやたい",28],
["つしはしや",29],
["つたかたくわうりんのいつつつる",30],
["つちいろ",31],
["つちへん",32],
["つつくち",33],
["つつまもり",34],
["つつらいし",35],
["つとむし",36],
["つなむ",37],
["つのふくりん",38],
["つはめ",39],
["つふう",40],
["つへるくりん",41],
["つほねたな",42],
["つまくわんおん",43],
["つまま",44],
["つみし",45],
["つめあと",46],
["つめれんけ",47],
["つゆくさいろ",48],
["つらかまち",49],
["つりあんとう",50],
["つりはりし",51],
["つるかこさう",52],
["つるつきみつわりあふひ",53],
["つるまを",54],
["つれやひ",55],
["つゐそう",56],
["つゑつき",57],
["て-ふる",59],
["てあてまい",60],
["ていかうかいほけん",61],
["ていきねんきん",62],
["ていこ",63],
["ていしそうくわい",64],
["ていしゆつ",65],
["ていそくすう",66],
["ていてつこうせき",67],
["ていめいこく",68],
["てうあい",69],
["てうくわ",70],
["てうしう",71],
["てうしんかく",72],
["てうせんこえふまつ",73],
["てうちてうち",74],
["てうはいくわ",75],
["てうら",76],
["てかかる",77],
["てかみ",78],
["てきしう",79],
["てきもの",80],
["てくるわ",81],
["てしなかま",82],
["てたかしやう",83],
["てつかふ",84],
["てつさく",85],
["てつたうけう",86],
["てつはうあしかる",87],
["てつへんふくろ",88],
["てなかさる",89],
["てのすち",90],
["てふあし",91],
["てふのき",92],
["てまへ",93],
["てもなく",94],
["てらてら",95],
["てれかくし",96],
["てんあ",97],
["てんかい",98],
["てんかんき",99],
["てんきしんとう",100],
["てんくてふ",101],
["てんけんさう",102],
["てんしき",103],
["てんしやういち",104],
["てんしゆう",105],
["てんしんけんちくくわん",106],
["てんせきしや",107],
["てんたいうやく",108],
["てんちく",109],
["てんていしゆう",110],
["てんとしゆつ",111],
["てんはういちふはん",112],
["てんひんあきなひ",113],
["てんほふくわんちやう",114],
["てんもんはかせ",115],
["てんれいさう",116],
["てんゐん",117],
["と-ますのようし",118],
["とうい",119],
["とうかうきよくせん",120],
["とうきあつせん",121],
["とうきやうたいかくよひもん",122],
["とうくうふくわんちやうう",123],
["とうけつかいめん",124],
["とうさうるゐ",125],
["とうしかうし",126],
["とうしよ",127],
["とうせき",128],
["とうたうつた",129],
["とうともとゆひ",130],
["とうふくかくせん",131],
["とうへんたかくけい",132],
["とうもんしゆう",133],
["とうろくいしやう",134],
["とかとか",135],
["ときあかし",136],
["ときかみ",137],
["ときへ",138],
["とくあい",139],
["とくきやう",140],
["とくさ",141],
["とくしよしつ",142],
["とくちやう",143],
["とくふん",144],
["とくへつほう",145],
["とくりつかをく",146],
["とけとけし",147],
["とこなつかし",148],
["ところあて",149],
["とさうやき",150],
["としいくさ",151],
["としかひ",152],
["としはい",153],
["としよりほね",154],
["とそつたてん",155],
["とちきしやう",156],
["とちやうなへ",157],
["とつさかは",158],
["とてう",159],
["ととのへ",160],
["となりあはせ",161],
["とのこもやう",162],
["とのゐひと",163],
["とひあかり",164],
["とひたけ",165],
["とひら",166],
["とふり",167],
["とほくしゆんし",168],
["とほせめ",169],
["とほみはんしよ",170],
["とほん",171],
["とみくさ",172],
["とめゆく",173],
["ともしあふら",174],
["ともへや",175],
["とようほし",176],
["とらかくし",177],
["とりあかる",178],
["とりうちはうし",179],
["とりかへ",180],
["とりさかす",181],
["とりたはけ",182],
["とりのあしくさ",183],
["とりふしん",184],
["とりよ",185],
["とれいせいと",186],
["とろろあふひ",187],
["とんくりとち",188],
["とんちんかん",189],
["とんま",190],
["なあ",191],
["ないおう",192],
["ないくわ",193],
["ないこくはふりつ",194],
["ないしやくり",195],
["ないせんのしやう",196],
["ないはいえふ",197],
["ないようやく",198],
["なうなへ",199],
["なかあき",200],
["なかえふね",201],
["なかくつ",202],
["なかしあふ",203],
["なかすはう",204],
["なかちかひ",205],
["なかとりのつくゑ",206],
["なかは",207],
["なかふくりん",208],
["なかめあかす",209],
["なかゆはへ",210],
["なかれあし",211],
["なかゐかしら",212],
["なきさくり",213],
["なきへんけい",214],
["なくさ",215],
["なけあく",216],
["なけこす",217],
["なこしのみそき",218],
["なさけかほ",219],
["なさしかう",220],
["なしのはな",221],
["なすらへ",222],
["なたいした",223],
["なつあさ",224],
["なつかしくさ",225],
["なつさく",226],
["なつはおり",227],
["なてしこ",228],
["ななあゆみ",229],
["ななそ",230],
["ななふ",231],
["なにか",232],
["なにさま",233],
["なにはつけ",234],
["なのりそも",235],
["なはのれん",236],
["なふえ",237],
["なふほん",238],
["なへてつくわ",239],
["なほしかみ",240],
["なまいとほし",241],
["なまくらもの",242],
["なますくらへ",243],
["なまのり",244],
["なまよひ",245],
["なみあし",246],
["なみかた",247],
["なみたあめ",248],
["なみまかしは",249],
["なめけさ",250],
["なゆた",251],
["ならしいし",252],
["ならひ",253],
["なりあかり",254],
["なりすます",255],
["なるい",256],
["なるみしほり",257],
["なんい",258],
["なんきんにんきやう",259],
["なんしや",260],
["なんて",261],
["なんとすみ",262],
["なんはんけくわ",263],
["なんほく",264],
["にあかり",265],
["にうりふね",266],
["にかうはうていしき",267],
["にかへし",268],
["にきふはふ",269],
["にくうす",270],
["にくち",271],
["にけあし",272],
["にこくさの",273],
["にこん",274],
["にしきけいとう",275],
["にしふこさ",276],
["にしるしかんき",277],
["にたりかき",278],
["にちろく",279],
["につしつ",280],
["にと",281],
["にのきれ",282],
["にはけた",283],
["にはふきやう",284],
["にひやくはつか",285],
["にふしやてん",286],
["にへうみ",287],
["にほひのたま",288],
["にもつせん",289],
["にようくわん",290],
["によらいしん",291],
["にんい",292],
["にんけんなみ",293],
["にんてん",294],
["ぬえふす",295],
["ぬきいと",296],
["ぬくさ",297],
["ぬさふり",298],
["ぬすみよみ",299],
["ぬはかま",300],
["ぬへ",301],
["ぬりかふ",302],
["ぬるけ",303],
["ねあかす",304],
["ねうたうこう",305],
["ねきは",306],
["ねここんしやう",307],
["ねさとし",308],
["ねすみこつこ",309],
["ねたましかほ",310],
["ねちまんし",311],
["ねつふ",312],
["ねのひつき",313],
["ねふとたひ",314],
["ねむりつく",315],
["ねりたつ",316],
["ねんかうふん",317],
["ねんけい",318],
["ねんちゆうきやうし",319],
["ねんまつしやうよ",320],
["のういう",321],
["のうさい",322],
["のうのう",323],
["のかれる",324],
["のけし",325],
["のさと",326],
["のすゑ",327],
["のたら",328],
["のちん",329],
["のとほとけ",330],
["のひたつ",331],
["のへたら",332],
["のほろきく",333],
["のみのふすま",334],
["のらねすみ",335],
["のりあかし",336],
["のりかふ",337],
["のりそむ",338],
["のりゆみあるし",339],
["のんこあたま",340],
["は-",341],
["はいかい",342],
["はいきんしち",343],
["はいこくと",344],
["はいしり",345],
["はいたう",346],
["はいてつ",347],
["はいふう",348],
["はいりう",349],
["はうあい",350],
["はうかい",351],
["はうきたけ",352],
["はうくわんけきたく",353],
["はうここく",354],
["はうしあみ",355],
["はうしやう",356],
["はうしよく",357],
["はうせいさうこ",358],
["はうたふ",359],
["はうていしきかいはふ",360],
["はうはんしる",361],
["はうへう",362],
["はうようし",363],
["はうろくし",364],
["はおりころ",365],
["はかせくわい",366],
["はかへし",367],
["はかりさ",368],
["はきさかり",369],
["はくあ",370],
["はくかふ",371],
["はくさ",372],
["はくしよくしんしゆ",373],
["はくちいくさ",374],
["はくとけつかふさい",375],
["はくへい",376],
["はくりうせき",377],
["はけかき",378],
["はこさいくし",379],
["はこへら",380],
["はさみはこかせ",381],
["はしあかり",382],
["はしくひ",383],
["はしたなさ",384],
["はしはみ",385],
["はしやうえん",386],
["はしりあそひ",387],
["はしるしけんち",388],
["はすのはかつら",389],
["はせくさ",390],
["はたあきなひ",391],
["はたかや",392],
["はたしあひ",393],
["はたはしよ",394],
["はたれ",395],
["はちえふれんけ",396],
["はちしふはつかしよ",397],
["はちちん",398],
["はちまき",399],
["はつ",400],
["はつかい",401],
["はつかんさい",402],
["はつけんけん",403],
["はつしほころも",404],
["はつせいかく",405],
["はつたんかけ",406],
["はつとうきせん",407],
["はつはうめん",408],
["はつめいか",409],
["はてい",410],
["はとのかひ",411],
["はなあかし",413],
["はないろうら",414],
["はなから",415],
["はなしあひ",416],
["はなすはう",417],
["はなちやうし",418],
["はなのつゆ",419],
["はなまうせん",420],
["はなやきは",421],
["はにし",422],
["はねこき",423],
["ははあ",424],
["ははきき",425],
["ははひと",426],
["はひかしら",427],
["はひはらひ",428],
["はふあん",429],
["はふしき",430],
["はふてう",431],
["はふりつもの",432],
["はへとりのき",433],
["はまえん",434],
["はますけ",435],
["はまひさかき",436],
["はみかき",437],
["はもにか",438],
["はやくち",439],
["はやとのつかさ",440],
["はやりめ",441],
["はらあか",442],
["はらすみ",443],
["はらひろかまきり",444],
["はらもんさう",445],
["はり-せんけん",446],
["はりさうは",447],
["はりひらく",448],
["はるあき",449],
["はるかせ",450],
["はるひかくれ",451],
["はれん",452],
["はんいこ",453],
["はんかち",454],
["はんきんはらひ",455],
["はんけんしや",456],
["はんこんかう",457],
["はんし-",458],
["はんしやうはんけ",459],
["はんしるゐ",460],
["はんせんかふたん",461],
["はんち",462],
["はんとうかたき",463],
["はんね",464],
["はんひたひ",465],
["はんままはし",466],
["はんりよういう",467],
["ひ-あ",469],
["ひあふきあやめ",470],
["ひうちいしうり",471],
["ひかいちやう",472],
["ひかけかつら",473],
["ひかね",474],
["ひかりあふ",475],
["ひきあける",476],
["ひきおとす",477],
["ひきこみしゆき",478],
["ひきたて",479],
["ひきとあしろ",480],
["ひきふね",481],
["ひきやくや",482],
["ひきんそく",483],
["ひくらうとふきやう",484],
["ひけきは",485],
["ひこうけんにん",486],
["ひさい",487],
["ひさかた",488],
["ひさしかみ",489],
["ひしあふき",490],
["ひしきおほの",491],
["ひしは",492],
["ひしやうせうしふ",493],
["ひしゆつしんさゐゐんくわいしゆし",494],
["ひしりあんとう",495],
["ひすとるかうたう",496],
["ひせんうはに",497],
["ひそめ",498],
["ひたしのうま",499],
["ひたひかくし",500],
["ひたりのうまつかさ",501],
["ひちかむなき",502],
["ひつい",503],
["ひつけ",504],
["ひつしゆく",505],
["ひつて",506],
["ひてき",507],
["ひとあいさつ",508],
["ひとあて",509],
["ひとき",510],
["ひとことわり",511],
["ひとたまひ",512],
["ひとつひし",513],
["ひとのし",514],
["ひとへこころ",515],
["ひとめくり",516],
["ひとりうと",517],
["ひとわらへ",518],
["ひなはつつ",519],
["ひねひねし",520],
["ひのしすり",521],
["ひはあはせ",522],
["ひはむし",523],
["ひひなあそひ",524],
["ひふひやう",525],
["ひましん",526],
["ひめいひ",527],
["ひめしやら",528],
["ひめみや",529],
["ひもの",530],
["ひやうこのすけ",531],
["ひやうちやうくわん",532],
["ひやうふしやう",533],
["ひやうゐんせん",534],
["ひやくこき",535],
["ひやくたん",536],
["ひやくまん",537],
["ひやむき",538],
["ひよくり",539],
["ひらうち",540],
["ひらくちおとし",541],
["ひらちやわん",542],
["ひらむしや",543],
["ひりふしひやう",544],
["ひるとひ",545],
["ひれき",546],
["ひろしき",547],
["ひろほこ",548],
["ひんおや",549],
["ひんしよう",550],
["ひんはり",551],
],
[
["奥付", 552],
],
];