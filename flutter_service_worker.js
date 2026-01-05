'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6d03382fe6cac7fca71075ac6b34d183",
".git/config": "52cfd7e707fbbe29628c0381617062f3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "73fd7d49df4208322ba34c54a8b914ea",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8bed2026156213426997261e2a48b524",
".git/logs/refs/heads/main": "8bed2026156213426997261e2a48b524",
".git/logs/refs/remotes/origin/main": "c2063cadef2779f6f0e8a343d492c64f",
".git/objects/00/8f2da563e33fbe8214e4fccb2e60d9fa7dd041": "fb51ffb76cdb6bd77b3b4ca444070f48",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/04/03339a7bb2fda2197f5b28e8bff28372c69ca6": "0ee035d67bd270603f03b8ef4b794298",
".git/objects/04/e2d6150b12022965d08e4b611d5c56228de90e": "6eeee5cf7e3fb899a9303b54e1a16819",
".git/objects/05/1d7d19abb6acc308a2595b98d1134a4d693769": "234131493990d8785477c04cdaf10e1d",
".git/objects/05/6a1a0050665c733469e10f2eeddc02481dc037": "58ed842148f15add960048f70912776e",
".git/objects/07/cea66e54218b005b2f07665867d2e98dedc3e8": "6ba207ee553b6c23535b3d437d51934e",
".git/objects/08/5dd9676a6668a3f96ba6f562cf5a6d46f9c7dd": "a73cb7d017ef99495e452a5e6022fcfb",
".git/objects/09/b8cce2eb1892780cf8c1ee67435251a9b54012": "5bc21cd1e969734f5e25d6624d50528c",
".git/objects/09/e1bfecf68b877d8a8962eaeed50ea5c0994d7e": "3371dced0e624b09a5286e32ccb2cbe7",
".git/objects/09/eba07ed60f734f70414f1ba52b4b4d52657ba3": "c6f5f7a917f0db31dbd3329bac466f92",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/10/c88eda7993b6869910a015ba6f3d0f37f811e3": "ec388c8483d11777b65feb6ae49142c8",
".git/objects/11/149db9603ff85743af778014e6fe3687ece72a": "f4982b697661627e854119007882903d",
".git/objects/13/4f5ef1d5d315b53efdf2f87639d3584c50344d": "1d74b48fd6ac13bd29ddbbe8894012f5",
".git/objects/13/7a26a724badafeb9d7b71cf9fd37449e1e64ad": "4158c3b9bf349725f0b8c82113c98486",
".git/objects/16/3dc09324366e957b532099562db7f6aa993763": "d3bd0c8eefa3973d9357d45f64e3a270",
".git/objects/17/7697f55ff7bda5774c8daa38a6a8d34ddaf9a7": "9dea334b8a205ef6c8fade35d4955115",
".git/objects/19/e3ff36db842edd09165690f6dac3c15ee6b534": "56e25f98c81ed689353b25cbe6f9c6a7",
".git/objects/1a/dc4d06cf74aced01908be4821a2c245e8be56b": "4c81b2d22c223247562580e80bcca0bd",
".git/objects/1a/e0596cdb77ab7af752029053458c11692f1829": "0c2cd774cd01449ce8ebe819ce7cb122",
".git/objects/1e/18cc97183ce677916d2d1720a9f2f542e176ce": "25916c532ca46531b6694927d481fba0",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/23/43e542bd8555c8866466d0759b0f26ac5d3e6f": "aded3eaa4fd600ebcc34cebea5954689",
".git/objects/25/76a48a90d11b31922008d00d0e3adf0e394669": "ecc23b8b377bbe3993209592399c4a19",
".git/objects/27/6a0e0006f7f594339c21919dbd28efbee0bfb1": "dee436b3c2b2a2a2c23e109b0273beb6",
".git/objects/29/0516ec3df971253f5553c0050dc3ad2627fd3b": "d2b622e620c08fa2f77e31fb14124748",
".git/objects/29/73a1db67e35eb217ca4c13fd401de4d6ebfb8b": "658b55c9efaf783735efc01ca77ee004",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2e/d6e3ac750f9aff336f0068f5ec09548add6cca": "1036cac2503534010e14850813a7afe2",
".git/objects/32/5ebcd0a9b0077c1a38b31f998c045927e9b95f": "4ef5271df8c57a9ebb58c1c7cf94f4b1",
".git/objects/34/1a53ad012969f3fe4b2757e73820cb7a30ae16": "06bdd04411a6ae3b8b6291bc79e635f6",
".git/objects/34/57b71560278ffee3baaaca56aaeef99f43c889": "4b8bd06245d7c9afc2b3d7494ad36876",
".git/objects/34/995c0128e54229e5e200d7b74bb41e38b50464": "13dbca5a4075f698a5c5ae3d1f01ba13",
".git/objects/35/a5a23dc5d2faffcec53b3eff8a4761d68ac33b": "36a8e71df3b006eb467b43c50a5ab348",
".git/objects/36/cd841dbe55eae9c92994c701ecc49ffcb61500": "b1c58faa4dc518d7f09c16a681b65260",
".git/objects/38/9413452b9e9d559ec7f39861e1bbd74b401832": "4df08f3def82bdd73c4dad9e5e027668",
".git/objects/3a/1337ef55fa7804b678d92b4a36a1f0573b81f0": "3f342612b7f034e19fa53765c96783d3",
".git/objects/3a/7adddc7ae78836f3af193bd55de3adf0caf24f": "7b215c2603976968238c4a33c3dd6e34",
".git/objects/3b/2475b90a1a807c395ae184869d5a14be4d7bba": "75e9542261051492b6289a65fe12220d",
".git/objects/3d/f4814e0f954683d890a76c50152a4da07406dd": "e4d7d1e343fb45dd2b77667c62eed796",
".git/objects/40/5c76c9c13b4711f7aa72d886cf2dbdfd28fcf4": "bf90f19c06b36f99471cb95552bfb3b5",
".git/objects/40/aed09b7224d605c62712875ab97d778e25bc5c": "0fd3612c120b57188a2eee296e957d3c",
".git/objects/43/5b5a4a2b3e49fe653cae8f89b94a38d2169724": "cd61580a90dd8ebf59b1ea6ffb574f62",
".git/objects/44/f3a0ac6b6d45f799dd9ce96594343fce976cec": "63e3f1d5eea26fe59a5c2397b2c39285",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/58071cfff37d567a837cd69a6d487f3d4aad77": "78cc49a1c4fb669bd81a8e82e87735e6",
".git/objects/49/b1cf6ba520c7915466840098cc5841d2582b17": "00684ac0b3ca663448d9db7616e5eff9",
".git/objects/4b/fd5d44824e193310bab8663f3faaaa36dcb15b": "6807d33940ee3720034413ea4bad0d1c",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4e/b27b804910b173545d772ca806ed14a30a252a": "b02c68fbd2f6c9f4c874166b1bcb66a6",
".git/objects/4e/c0faff1571d86caf098f9067560c07e08ab052": "81eedef7c20f0a19ac66479f8a0c2e71",
".git/objects/4f/aabdbdcb3164b92911430c776ba16fd3026575": "008ae11bab28dffab28a9a718f08f003",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/53/f88cb768f960c27e79eea3070361d5b6b9a931": "2226be9fcd4442c17b6e3cad13f14dd7",
".git/objects/59/6aefa08ad68be9c2c9b3047052c875ef5feb4f": "b748b8a99d241a4aaa62ee1c46ae3a60",
".git/objects/5d/3581c131ee367677bd8c754381e16d00cc3d6f": "ed1ff70cd6452199b68b0f606abed8b7",
".git/objects/5d/5a4447904568ac9e5ffb147066095ba2b4e769": "e025238562e24e67c842486e4212728e",
".git/objects/63/b33b4580d8aa472acf867ff94555e8ebc6694f": "79f254fb0bfe2793ac5151bbe3c7d234",
".git/objects/67/46c64ddb22ea3f9c2f0d7168d9ea15a3ea55ba": "da2e70fc9884e27c236fc716749beff0",
".git/objects/6a/472fdcf3a9f53ddd5363758e5284fa12e70755": "a2af52ba6b05e88b69a170f986641c15",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6c/614600138f9cce60746fb5505083a6cf9e9d0b": "96f256f7055e32df860cf86a0747e15d",
".git/objects/6d/8928f98cf4b1a75190f64a055e1d61cba1d351": "42673ba770b9b1c68d6d848561b8e2db",
".git/objects/6f/49899fdc3b713f26fa4ef63c44dc168df1964a": "ed8f213a3b8b6b8c6f92f8a31cea55cf",
".git/objects/73/2e570b78d31a9ab3663e4ca3de9db65be8e7ef": "97d4e7580705c0d9ca68f88185af5b99",
".git/objects/73/efdf5f5a9a34f229e9d39730b22de849587355": "26fc2fa929458c3b0c6ba26c39833e77",
".git/objects/74/a563d1d3c8f0c92c31d3d4f088c9aa92376674": "90036d0ddde30a11d3e315e2f1c38a3f",
".git/objects/74/c7af74721384d082f9493ff3688c32ddb0d21c": "ba3ce7963060af3c2854f0266250da05",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7a/6ffa36ffbc259994bdf094f6fcf67d06abcb4c": "71d91d1bff25ecaeeb686d8819dc1e4f",
".git/objects/7a/d929a3047f1cb821a37a6a879d47ccff07dd08": "a19229a69c9380621467725b976006d2",
".git/objects/7b/89bacaed4ab5b40d1cd62aa925d6dc2f53f49b": "5bd463355b2a917d66a451079070795d",
".git/objects/7c/adfa2b8fbe51af7f7b669b896777dbb2844044": "b7132affbb3dfef2535984399e5e8ca9",
".git/objects/7f/56a9e5c20b45eb231679be0dcff9e07c2584dd": "ed30ce3d5df49e9db2d9c1a41adda812",
".git/objects/7f/eaf9ea7a6bec3945d55a92bf10a0e868b72413": "d7c33b48561b0bc22d260fa01e4b0b29",
".git/objects/84/c49b189d052adcd5a5d6ee064594569a06490f": "f5dec7b0ee02602ab3649e5aa2beeb72",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/87/74990d4b0ab7ec372e2bf1fafb6838a9561d0f": "2ed3bf3b11df87140ad36209bfa93ecd",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/c05e285f3d3e0d203b883015acb40914cba85a": "c4bfe74a32f7bf85733ff43433f2bd2e",
".git/objects/90/0416afbe28a4a6396e4fb4adcb25a813725f21": "e52cbb171ce8770fdbb2dad30facb348",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/96/d8184b5ac42767d48db47eb4d00d9196dba44e": "2506271983f26e54b626b3370218be27",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/98/85c2192db5b811ab583f4fa5068693b8de8f7d": "4254e94d8fb8f041416085eb7616ffaa",
".git/objects/9a/d8880fd993b15134123838bebd00d520d79dec": "bc12822c889955f9fa5f63a39280267b",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9d/4388740ef2501dfcee7fdc95bd224340739f93": "70644972abed4c34babc775300a4aa5b",
".git/objects/9e/0c93a1950f8c0d73d21a8462f9eb2a372a75ed": "1dabfbf5c79f0225e3174bcf04605083",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/e96dd3440763800c89328cbd4d7b4f5960f073": "34d115af63993494345573da5ab0437d",
".git/objects/a0/c2419e691cd9b44cf5cc90aec69608a30af70d": "e7b0e4e394d5fcba4c59e09d09b6b67d",
".git/objects/a1/efdef726fe458f5c7ea751e26f0785f0f11a0e": "dc6044030c8ef8ea2e3f58686cc18fa9",
".git/objects/a2/f1bcaaf71b049d69ae861d9ef1938e7b770f76": "773f698c64918c5b4550ceb3955c7c15",
".git/objects/a3/7cf1f509cf30f6b7b23671aa9121c0f93e3c83": "6445ccc40aaeacf55815cc26701fb53d",
".git/objects/a5/0d1c27b5713c2b3bc2f5432c863e51ba641b69": "b2f3eee252cb0b69bba8c8deb4658900",
".git/objects/a8/1eebfa448be5348d8475a5850c392a3bd8f97e": "8034e2d7c25b7b09d4614d6ef472c5ec",
".git/objects/ab/01705e39dd84d4cb9bc8ef928287af3d6c792f": "7c9a43d984d2f2382390a4672d9c1b62",
".git/objects/ac/579f7efb0f3e587049524eed4a7a2c31a71f4d": "22d22f4634754e5dfaaea6b24e5d1019",
".git/objects/b1/9661ae4839b6979a46925cfa549beec5c391ba": "e27d9c67e73a5ffba175396e52c91e3c",
".git/objects/b3/dcb1b1bf222c204b77398171ed26a8207723c8": "4fbe39b2d007f55824947957566b7554",
".git/objects/b5/04da9b78c4ba85e567124b99c3b27854b55fef": "aea3d6580fabb55b70d5ee6d5492f844",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/c5f38950116822431a744feec3781d4cf9cba4": "d019b418baec64b088d1deb9e491e030",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/ba/7c0912f232ffaff277655502cabecf37a7fc68": "fb219bf9aeb65ecdf5a22447f43f3ed8",
".git/objects/bd/0e05577729ae2a1e028576af8c218f0e9d703e": "4b6e15b545a88a2f8f64c91ae15d1dd7",
".git/objects/c2/a92af91bddad1e5c9180512f67afb693c73f17": "81fc8d6757b7a85925eb30efb06c49c4",
".git/objects/c3/3ddce9a1747985db19e016e743b136a3a652bd": "dbcaeb280eee4999f5d54da93b9d478f",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c4/89a6ca670eecf2156a68882861be6df7ab6bb4": "087c7ad6dbbf45bfbfa7d0a543a685da",
".git/objects/c6/4fc66e39905561f4fae6a9304ea47f75203336": "d8e6813741ff84a2774d803520a7afae",
".git/objects/c7/c2ebfdb2a21bfe84f602c2352163a134fe03cc": "b6eeb9874184ab3ff2ee944c99bbca84",
".git/objects/c8/9cc4f891ab159889038a0b4fa2764e6e285770": "aab10870b3faf47030f2ac2cd2f07a0e",
".git/objects/c8/b77c980a408f81d6cbfa775968edf054a68132": "a38a84c9f12c3caff2c8b1a87be9bf5c",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cf/acafc335fd7fc5cf2f250b10f341d6cd85a5b5": "c7b4cec6fddac3b4815cb7d95dde6add",
".git/objects/d0/00b5229a7a120827f5a90623af6177aabf69a3": "c96d59b33b2ea0a13858671063e98a72",
".git/objects/d1/0058aa055e0df2f098535a805e963db28c719d": "a3715537ddc7f6a493c817dced892d91",
".git/objects/d1/8d664960b0938ea8e0a5e3bb3204b82e06c0e1": "efab0194dc1c599abe13d9053a1f9a37",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/59d9107130fa17c1cb475c128ab2e4e52a76e6": "666597d96b9a3179959f7b3458174d44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/81daa351c0a1ce6414d79669e5682c4e041352": "6eaa97936d5553ba9cfba6069c3b880d",
".git/objects/d8/b240a961e2192f70aba4d75bb4139a59495afa": "1e7d6b38d8a76c416131361c7d4528e7",
".git/objects/d9/b84c153177f6bb521cdf1e48c0d74c8eb1b90f": "fbb1f8ca6e4db117954400ca7dc023ae",
".git/objects/df/2b625f30b81d1bdea87f461c676af9d7ebc39f": "bb1531cc11231ac786eecf2e895e7527",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/7b80d356dee6fb204991abaf117782cfdd57ad": "08c5f4c816079df7f5f6c7d760596e95",
".git/objects/e6/8dc20e32ae31e94668357e654706602909edd7": "d4aef040039c4f81c3cce5ee3ccbc500",
".git/objects/e7/730105f7cb2baa2593a59212f25cd19831923e": "d1f1e75067e0af9114cd40a7d791941a",
".git/objects/e9/67649603a2f618884dd41fabe834f25dd628d2": "a83e7c1f3701cbcdac6ca23201a4f07a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a11407ac13c7049790803695c442a06b1076c8": "db768d2672c50dd94ae53b563b1746f2",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f2/d5db364eeb53c12863a20d2efb1931c4fd38ff": "6b5aac8004d158d4aa38c4568b23c279",
".git/objects/f2/ebf2d114128a851a02e5a6759dc0a4ea6b01c9": "868293c5a071a5fa83a95c50495700c3",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f7/15f35bf964133d35c6dd655a16ad744b286212": "5ee21444032d3c93a5682598afd92b1a",
".git/objects/fa/7a54aad9e886d754da7d9e41cb836a180984af": "c127187d2548b8d147bc882cea7d4404",
".git/objects/fa/d1be749422c03394bb73c5367d0d274272b545": "44a00f98cd30e16efc6786752b5bb5b7",
".git/objects/fc/09657983dd862517a6ed50685d044a7735fe50": "20ccc0032fdc93cbe53ca8f14d4500fd",
".git/objects/fc/5cc3f5046a2eaca1a56ed813e8e908de11060b": "6d5eee2c3007666468490cc76d580ffb",
".git/objects/fc/a5b2ab38381404d8677e6ccb0641d8d0464a9d": "083ade092106f998424c246276d77361",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/9771c5570c251c3d3df1bc8b30a1bf5cc4bd75": "dae8fd2add0d1a1294bdf232ebc921c5",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/refs/heads/main": "6d26f637b794992df8b8b3384f2d98ab",
".git/refs/remotes/origin/main": "6d26f637b794992df8b8b3384f2d98ab",
"assets/AssetManifest.bin": "330798dcc94b9f1de79dfe8c1fc59cd0",
"assets/AssetManifest.bin.json": "b9d47010bc36b83aff8bc78b5dab4d05",
"assets/AssetManifest.json": "d2f0490bdbfe923f36450ab9f5caf3b1",
"assets/assets/areas/1.png": "b0da28cf82001b9702b1d9d7143e1d12",
"assets/assets/areas/2.png": "5dddfa4593023d675ddd81d5b35479ea",
"assets/assets/images/google.png": "16557008de1d50aaad00bffc7c14852a",
"assets/assets/images/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "f271b713160744d9809806ea26562c8c",
"assets/NOTICES": "a3e8f810b061ff855de096f5671ca4be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "a70217f9ceba606e287441a0df5be64d",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "ee5d486f6d1b1b5bdc06c2846895af35",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "df6471c7d5ecff5c01f3d40be04dc50a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbedd2991500a13aaeef42d1ed20b56d",
"/": "fbedd2991500a13aaeef42d1ed20b56d",
"main.dart.js": "5367547f404d91256c8daa5661de3008",
"manifest.json": "8045ebc5ee2b8a0aeab643d13a92512b",
"version.json": "f0be9e0ae60b13db8fe973642d3b7241"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
