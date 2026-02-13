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
".git/index": "a9e71b8612c256d0375f91191ab948ff",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1411d91a28d00e97c7fd30fe67b0e36",
".git/logs/refs/heads/main": "280b8da89d27ebaf13153c398e97061b",
".git/logs/refs/remotes/origin/main": "8f88ba4dd2de6d15f456075d408a3293",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/e9777e5abda0425e7326c108cf82d6f168cc08": "7d8375c1f1f6c68dae889473ba50dab9",
".git/objects/03/c8e50d63fdaa00d39f77d421ae8dd1bfd8e065": "0559d20dc5e8de63e598e88d67445e34",
".git/objects/06/79c8388c341bd7e94effedb0a197d432cab245": "178f49c4208493bffe61a788e98c7086",
".git/objects/07/af0a115129eef8b95bd92fe1c22f977d0d52cb": "edbc042564f1e43b0cf3d9b7e25c2188",
".git/objects/07/cea66e54218b005b2f07665867d2e98dedc3e8": "6ba207ee553b6c23535b3d437d51934e",
".git/objects/08/0c706f7abcddd37ac56fc50191809ac82baa18": "92735d8900473a48099e56d058cdcc47",
".git/objects/08/32ae1c269a8d3a3a153dbe1d03d5111338f088": "7a16481379aace7139be0d82d8e11da8",
".git/objects/08/f8dd7e3ebf0ff335a820996766ae077d96f101": "516c281326e307be1b0c125b3d72fdc6",
".git/objects/08/fad3141ac64ea0cd11545c98d0837d6a3ce927": "ca956c04cb367231ea94fb079a1f4bc9",
".git/objects/09/b8cce2eb1892780cf8c1ee67435251a9b54012": "5bc21cd1e969734f5e25d6624d50528c",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/75be985ca389d83b5465fc5992b468246b7842": "f17084e92605bef2c955f314171511d6",
".git/objects/0d/9e8ff21f6d5704bfad5218a88a0a97d2d29172": "521b967d1d06654a146381950eddd018",
".git/objects/11/149db9603ff85743af778014e6fe3687ece72a": "f4982b697661627e854119007882903d",
".git/objects/12/95c2aa0aeee24bc152d2e64462d51874444912": "982cf98227f3e5d7f85fad58023c028a",
".git/objects/14/26fc190dc577c77dcf7d89c91718456bddcbe8": "34379380938c344b6cba47d1f498e37c",
".git/objects/18/6a1131b6ec1215a5d8214bc78da7a5639c64d9": "d500bdcb8012e0fcd4041cf3ac2e3a34",
".git/objects/1a/6adf5390fd2d19fb4fe4058dcaed6b7348d228": "112ae0be4d0a9d2e4b31d32572d2ed7c",
".git/objects/1b/530dac3c0e98edb1eb95b4079f326a1a3b943d": "d15bfe005fcc729dad8b3d4690596375",
".git/objects/1c/8afd64848b1601ddca0d34f9296b77ef7af469": "f4079198bfc36a0bbe75bccb399a4e0c",
".git/objects/1c/b02b3366610188f1cd1f94333754debce2dbf6": "c6f3936fe0ddcca24f730277445dec76",
".git/objects/1d/c4795ba371e85786136e399a6fa5cdb5ea46ea": "d5893bf0db411bbb5ba82805f93e67db",
".git/objects/1e/353bc1a08e744b9b99b45aa650864a038d781a": "eda87741823b1e81b1c44c013fa63e77",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/22/c9d3c3d1c734e2a96a4b8081f8fa72b81bb597": "93a9c15b478eecce70d9b12620f45314",
".git/objects/24/4720f17a1c7680a67ae9fe570976557893d025": "1f0cc05b82b0bfcf80f222979aa8d301",
".git/objects/24/6f5a656eb0860e29aef4009575ab6ea2a06d68": "ebd1fd5be5c58eb2d3961cc0a9800f26",
".git/objects/27/8400062c59367a1e668ea7543e0d5adb6cd9a1": "ff67cc963ce6409a66b3b1a462de712b",
".git/objects/27/8e185d82971bd7fbfb43f054d5d7ff22928f8b": "37ce0004adf195c34729e729f769c1a5",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/2972ebae703ac28c0ab6d813aaaaf0640e1597": "64c16d5634fa7e28dc63a22cb0d15412",
".git/objects/2d/35527739c6308b45ad52cdadee12d281d35424": "aeb934b556f7d828e5d20afaa408ac84",
".git/objects/2e/8e30386c33ec7219a52cc5155666f401e4a833": "f4ab5cdac3442b5adadcb1a07ffdef49",
".git/objects/32/7b4f9e553fbd0461a4c360c70648faa7a9558f": "1185d2e122cb0ae93e93e86f0a566f3a",
".git/objects/34/07a9cafa5a287ed31315a63efb7f2f2a0d88bf": "19fcb7d4587c1a7fa602c7c02a157f19",
".git/objects/34/c368554ed61b957c22681c803325fbb72b5b0d": "0fa404e03f4cfaccfe78efc276e7d645",
".git/objects/35/970fc8206b533fd6d01e64e14f06e931cb9a06": "ef8b529f51c37c8ab43a20016cba7dd4",
".git/objects/36/47e696661ea2af9da4e83416a6643f33633108": "4148dd487498823be0711f3ba7e94887",
".git/objects/36/db39e3314ec3538bef8043ae366a14a9082b80": "b5b274cbbb6a6d908744734dfb9bdab3",
".git/objects/37/6c4fd74c4bbb07aabd68d679393e1483257270": "809a48f0f6555adda2d09982bfb38b7c",
".git/objects/37/75d1e57d6432e7e9f9d44d6d215d6666adb684": "2611412c4a4e5decf5f94fb4b456cf72",
".git/objects/38/de1ddbd24f79629d710afbeab72630a10f5049": "fbe00488d6f5edc3962be8387a125158",
".git/objects/3a/7adddc7ae78836f3af193bd55de3adf0caf24f": "7b215c2603976968238c4a33c3dd6e34",
".git/objects/3d/37c252da684bbb05c00d380dec6f402b7d1084": "2f8bb0f43589c25ac2ad3d3c5f5d71d6",
".git/objects/3d/f4814e0f954683d890a76c50152a4da07406dd": "e4d7d1e343fb45dd2b77667c62eed796",
".git/objects/3e/4d8da0862f3353eeb6f6d22eb52cad1d2e10a0": "f1b0d06d80a2f93df38a0e23493d9e17",
".git/objects/40/316c2ba93a611b8fa916e05b28ebcd1195c0e3": "2c5146edf3067b77f04b7ba0d1bca6c4",
".git/objects/40/4d411c7b5d3fb4b7f71f89847d36afbea9e6e8": "e03c6eaef53eb0d9daba7d800a0d9f87",
".git/objects/41/3463f8e8910fb18031a6f343f43ef145c3658f": "780f44077b59871f7dc31e739924a71c",
".git/objects/42/3b1e364077ab14cae03d25b0a26879a0925e7f": "35f1b382dcd898a2ec20d4a0f8b87527",
".git/objects/43/a17d5d6709596e900a9f5f79906e47ab3aa348": "08c08a74a792b76da8990cab12b93107",
".git/objects/44/fd51e614b0158bdad128e78d53450139ad58d7": "ee4f182112b1cd078406436007e5e0f9",
".git/objects/45/618bb698f9fc94c07142b7969b2355f7238023": "add3c933cd9acf03ac092be17faacdd3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/8d86820645cb2e1e97dbf3321f44f53419975c": "a81a550f688bf26c95ed8de708921f2d",
".git/objects/47/8879cbce38eed9bf1fe04ddf5c7e35027af971": "634ac344b6ba7dd69269af8b51658978",
".git/objects/47/c2e015b7764740d554950c90c434d9f584a29e": "1647867f08e129f9cf20ad308cb16f3e",
".git/objects/48/9ab936cc0b1ca1e80ba557697bf9cbe672b1a1": "dc23d6ab8a4ed1bf01b2944dc6a191df",
".git/objects/49/bf6a85a6d424bb1f1e7f96310081bd0abbd2ab": "42a28d02de14409225c764aab6ef577c",
".git/objects/4a/89fdb09b3c37468bda0fc2534d81271ec48e2f": "678def62d558d178e6ad1bffdfc7f37e",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/dc6c1cb315656511c818870483287c577de80a": "7bbd06a715ce5d003c239da8e795a347",
".git/objects/4f/f132775b3fec09ae95ef16792a261322549e25": "a5974a6161f66bd96aee6ded9314fa11",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/50/24c69dd343c15b739220c46bfaf97f7df49ca5": "71da4a5f897d0ba3b8d5fae4803e87ff",
".git/objects/50/26e62ea8e0691c7b23f17b0f28b1a8e670ca9f": "1a789029a088a12beac0fe27ef4de32e",
".git/objects/50/acfe4b7dd88fefb114076b210c7ac1f887cd10": "8c59be16f044721af9dbe1e6644b5d1c",
".git/objects/52/234ab4edaf0fdf19f05cd542759e55668973c8": "f809328d769e2d784d4408e0293dc591",
".git/objects/53/3c054dd5803503ad92a81d200c7ba3e3ea27d8": "3d2123db7f432549a76112dec3aac845",
".git/objects/53/c39112ee3baa7718fe442dd1cb960bf8bd313f": "d2fdeba3a40498fd14ad98db517c6459",
".git/objects/59/425e65033551bad4c832f1d9c1d6cb1a6a6d24": "e6eaf964b36425d95bd7bf3c27edb039",
".git/objects/59/6aefa08ad68be9c2c9b3047052c875ef5feb4f": "b748b8a99d241a4aaa62ee1c46ae3a60",
".git/objects/5a/2fd65d060fa8990cf4dcc46165d894b4c8212c": "8064d26a9fe88760f81a24d0ba25fa22",
".git/objects/5a/583042864ade1471bf3ebf937b1d105f31056e": "0fe1f95e4ac99f01afc532a043449f06",
".git/objects/5a/d2f44d5896d6a9d75f044b314bf9aa689b565a": "6af91404f77de67267fecbb0e67c6b33",
".git/objects/5b/4cd08b69dbeef42af2e76619ab3b4ba897e797": "06758d0d0e3c567a7ebb0fe554860b11",
".git/objects/5b/c8267f2ed4848c1114b871ab453576e2c96a15": "c586fb20c3e330ee269b85ee7d25d619",
".git/objects/5c/d5914406dd0454c672b281631dda90cf1c5e5e": "a1a3eba5925f04f6de8855e8f8ebc2e7",
".git/objects/5d/0fdd16a67712333829d449fec992bb595a8112": "8890578ce5a9990cf41eb40561a3adf0",
".git/objects/5d/8e4d8d12913ad6ef984fd7867d28fae2b14155": "6f389f00085e70adc976ac8d836594b1",
".git/objects/5d/d75c0eb2af0ab934f4f6cbab8af290128c1ea6": "43f5c862f4b69a4e91d7d018233b395d",
".git/objects/62/80d9e06b9f4cc5101a6a8e9b069efd17710f62": "c5a315b03f9fa00a2311bf5a554e378d",
".git/objects/64/0f17ef9c62d3e42f4e25105ad31de1aca3425e": "ac3a18ec44bf8868ac6e8aa7e501b52e",
".git/objects/66/5203091cfd3c813a879f925b482c7bc0442a72": "06c03990b426810e7db599548369ce7e",
".git/objects/67/46c64ddb22ea3f9c2f0d7168d9ea15a3ea55ba": "da2e70fc9884e27c236fc716749beff0",
".git/objects/67/6bf016152d5a5047aaf4462ef9afb06830fda8": "73d626db1a8a15da2849a5e4175c3d0b",
".git/objects/69/c2ced91f55999c3a3c284b9807698325f91717": "51df4e518c7850cc33378fb39fde1f7a",
".git/objects/6a/68303240f4f55071f2d01f146e6536b7184316": "64838ec93fd6c32402c0754273a6ef02",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/1778b780260032136d51da1da36492c1b0e0cb": "fafdc1d5cafdccb1bcc0dcb9496a9401",
".git/objects/6f/7cadce5c9c4757321f55aec44a061326fb1d3f": "1645c66fd5bd0c0d6b65e5c025cd73e7",
".git/objects/75/104be9755491196081363f9a1ef19229352847": "c296027a2907bb015b10701013695e26",
".git/objects/77/999026dd72e598e404262621f5627e4b250091": "c3185852801fb9afeb2c6c5627f802a7",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/80/45ba34d6f00ab4c64c0a7d0b5ed4477796e889": "6bc69d8f467919631eb8e63432335edb",
".git/objects/82/af023640cd1563df12a8a59ccbeccb534fc0a2": "96dc9aae49f248c4ee5a935b78e92105",
".git/objects/83/7cc483b2a190f5be539c0bd6bbb37f16d4f1a9": "c913977bfe00e8f46ca038a11641f4df",
".git/objects/84/4126da574cbb905ad3ff2b1039506c82e63800": "0db7304075ac39e9015a9123081eec38",
".git/objects/84/bb52c44d477b3f3c68948b207692613cd37cc3": "ad9b5a2f3cd3d1bf60f5cf05b0b40ad2",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/87/7917ec272c4f7205660c5a384dbd0c3cc14a66": "82a29568b3b85dad43fc0e2cb6ede678",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/4b2d9b3813b6be334b760cc4b71b732888abc3": "fb7416c3d6966e4a49e2b38bf3efbadb",
".git/objects/8e/81f7d46dea9f673b3b97eb16b62cdf0ed780b5": "ef84b80a0af1128e64c5d8c7c93b8aa1",
".git/objects/8f/c05e285f3d3e0d203b883015acb40914cba85a": "c4bfe74a32f7bf85733ff43433f2bd2e",
".git/objects/91/687e71a3af6fd6898e7cbf0bdb325756f1e845": "2d758146e16a42c0af3b8abf834e8ada",
".git/objects/92/d092faabeb277efc929087ac643aabd9084584": "de7b2dd554c607509d1e5e0fd0fb4346",
".git/objects/94/975c90718dab81a9536ce6c2e3d445e4739493": "15feabae10a497322d832ba9761d436d",
".git/objects/94/b1e9af3c14160d47db347452829697aa0c0f2d": "655f0ca0f89b5e57b966ac8bed528217",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/f54fdbc3b24975abbba1343660d51d4cbb8520": "fa11a2143360396aef5a61b39a4b811f",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/f21bf76d165b0e2ce212f7d26d474917d43009": "4ec29c4872bb94cf67489747b0e67ecc",
".git/objects/9d/333e5fd7dd507c48a2238c04ad9485e88d1e9c": "f76cab893245d5d87c0dedadaa287536",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/7a6bd6ec2ca218bbb34cbc376b336ad7be1d38": "3ae64e437d725d9922485a764b52b8a5",
".git/objects/9f/6362bc5cf91054eb68035aa5ab51f27199bfdf": "a57fe3c535ee29a578e51f7804fb3fa5",
".git/objects/9f/9d8d8579a75671505a225a9776a64195adabe3": "b2538defc7bedad5f74779b2ff594bcd",
".git/objects/a1/35e143caee684059ec0ee780553d82dcd05716": "049ed5b3e634256b828cd8c4c76460f1",
".git/objects/a2/1722e37b04c70d789a792a15d95f1e64f4030c": "09c96fc23f2e79302b4214200d70830d",
".git/objects/a2/f548cc1f0243965a963afe6ebe0f88bae549f7": "ec4a55d4fe4f2bdd38b9429550d1ef48",
".git/objects/a3/dc7660fd2b638a8a9da58f34ed94af2bfcd18f": "d1139b7d3eec05e8f651c4d80e16b08b",
".git/objects/a4/09a7447c43d4ef5a81cae65d826177013a163a": "07b9579f45783959c4f1efc02da84e91",
".git/objects/a4/826a56113066713f2ee664ef3bbb10298a75da": "ac8369f52c6ec3436173170164119c55",
".git/objects/a4/bec278f8d4409c6ae09394acb66db97a788786": "84fb7ccc62f5d334211e74dbe3ae1acf",
".git/objects/a8/defbe0b0d0d0008c35f9789bc7b4e125b579a4": "f23f4b9704463665ee28e18a463af826",
".git/objects/ab/77a1512ea0496de000f8c21f64cddaed42154f": "744a48053ab898fbff6ef21034a32a2f",
".git/objects/ad/b0c52848aee05db5f6c01ffbc184e2a7304721": "8d2d937679a9d35ab868e1c15f7c36e0",
".git/objects/b1/38e5118d45640619c1b3bcacdcc66a879e5069": "c39758b93406f574fd2aa0639d3db801",
".git/objects/b1/9661ae4839b6979a46925cfa549beec5c391ba": "e27d9c67e73a5ffba175396e52c91e3c",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b6/cf9967cf028fca73a5117587fc3a66b6f9f265": "b660d19b6414f1550078da19a45171ac",
".git/objects/b6/e8d608fd0afe491107820c553eee45c979d583": "2b9a1fb52d77e6e0be1b9b2c1b898bc0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/64c16fe31535db986b2af92f7dfdd884260a1f": "00b1b6269b4b35c7ce1b3e86f45ffa10",
".git/objects/b7/7ffc15ac5d69fb0f803b2fad54a100f56b4414": "32c4b5c9cced9b4ba0cf1db38695380e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c2776e515da4d9e7475ac765e239c88ea222f6": "87e04dfbf62153fdf2718419ad0aa1d7",
".git/objects/bb/bdc2149189e9ae6adba68ffe78e12746152c5f": "f88b68c3047f3e62ef7c3688fa5ebb81",
".git/objects/bc/21022bf8f06bb096bb9d8cfe91a18cf30b9d03": "c2b93ce6cb82a8adac2ac794a635a7c7",
".git/objects/be/f3dfdc91004769051c6a3ceee1890dcce7f5d3": "e020f9b92fe29baa2afde850a6baa337",
".git/objects/c0/6b3cd61bf43405842d5d5530fb599e96c5ac98": "c9655bb6e3f302132e6bb31d685dcc5e",
".git/objects/c2/a92af91bddad1e5c9180512f67afb693c73f17": "81fc8d6757b7a85925eb30efb06c49c4",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/4580965b27d0c56a4b245d229d88292ca0987e": "dc4f1d03debec591182c8aae08bfc417",
".git/objects/c7/cd19b88ffa7d1ec7de40d4cba92e5d8df15e0f": "8829cfbe26122f297ce0e9a0f9dc26a1",
".git/objects/c8/19152c0e3c9dc74402133ca32ed259106bc1c0": "e9e9b9610de900dba32d790e43e91db7",
".git/objects/c8/9cc4f891ab159889038a0b4fa2764e6e285770": "aab10870b3faf47030f2ac2cd2f07a0e",
".git/objects/c9/1b72f6936a1783876596cb17119601b5ba2536": "5e00ecefde8003243f20ff9197992c90",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cd/3dfcd467e27e2e66007145a07cb05023e85447": "dad5351bfaa2c04bd87d09d53043e1d0",
".git/objects/cf/377483254bc3ff68fdad58c53791a8d09add46": "46a545d02e3b2b9e878772f83c411077",
".git/objects/cf/e5c8d3921d0955307d4436204c4ff17cc79b63": "33930727a2cd5b7f4f0345caa9980066",
".git/objects/d0/47d423adde4d33cbf27bfed8aaab0d4845d7cc": "d8b7475c08566130871b1b3c4bee441a",
".git/objects/d0/be4daf85d53ac21992bff75ab44bc03230c9b7": "f2270683f8903e045135d6e1019f170a",
".git/objects/d2/24bf5643dd68c36d5f364688e57ad0b1565af5": "eae5c7eb1d70f46fe114dd9c6b9bd965",
".git/objects/d2/3ffae64d8fa856c7676d5876115bbd34d899a2": "415455033616222e4bd06775a1dc109d",
".git/objects/d2/ce4463f5b2620fd7f56340df8a777b8f59e242": "6d90ff9680895bab3a638eab5f43a2f7",
".git/objects/d3/dfb59ea474ccc3aa1ee76e854235323b1d51cd": "ada33abe5b97d551e90da073f1bca3d2",
".git/objects/d3/e90342cbf33ecf06ab006fd4c8e50a9f7a6098": "ff899337399b774daa9fc9ff2483ecc7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/756e18462a57974b71da6a42d1d549d9d1c10f": "a3619a00655a18f0507c1e62b3d6dcb7",
".git/objects/d5/606e17666623c12592239d9ba3750e256b3c1f": "bc417a69c15f6f3b381c54a053bd6e7f",
".git/objects/d5/f4bc3d6e365af0f5db992b47559310bb289ba0": "cd3c88547c0961942b68b8d49024fcb0",
".git/objects/d6/59d9107130fa17c1cb475c128ab2e4e52a76e6": "666597d96b9a3179959f7b3458174d44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/86fa2d6473df2fd0a052321b2c34839b02ddc2": "f00facd7d5a031adb4ec7295d4f01e7b",
".git/objects/d9/0abbcde72b4bd70145653143a4c2edc2d5857e": "0c03d9dff42cbf58ee1f29b23ecaa4fa",
".git/objects/de/88cfc72fe4818c9374e0b54cf84d1caab810b3": "f78405a981500121d5305cfdbe339ee7",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/d3513a010c5a72bae25c240487b5c6b3ec5bab": "400d6c3c47c184a8e173adcddd374aae",
".git/objects/e1/2569382f7dc8d1cb540bfe378b8a0d1ff614ee": "3cbdb419aa03b6761ef1c1c40be44bc4",
".git/objects/e1/826c74b5fe4c5018b4dbabc0bd0ea4bdd25678": "edca0f4d87174945f7428645626ff9a7",
".git/objects/e2/589f12cb674fc99d90ee24c4ae5965f50f3926": "ed882fb4e7ebf7144e6ba8451c4ae544",
".git/objects/e2/733ef0d31790be53e24460e4a046e9642b36df": "30347a768245665a452ed4719b06e16f",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e5/190039522de47fe9b6e1aa8da692ca6ca0689b": "147e90b6fdbd2601f59ce129b0433d66",
".git/objects/e5/485c1f7170a0ef9668f34283051a4c4bc079b4": "63e3ea74909d417fb7576e1ca9144908",
".git/objects/e5/4a99ec367e67d61e6e62ea8edceb913a142a85": "6e5f38253bd3e47738e28d228ff1346d",
".git/objects/e5/a942568cba84dd392e8a4cfd849a152aff3383": "50bfa8c428ff0f02deb896efe188d6a9",
".git/objects/e6/53c64c3f4ff367d0a42dc36ecb13c6e7530152": "cff85bfdd833fe8e3878e57e79137626",
".git/objects/e6/8dc20e32ae31e94668357e654706602909edd7": "d4aef040039c4f81c3cce5ee3ccbc500",
".git/objects/e7/730105f7cb2baa2593a59212f25cd19831923e": "d1f1e75067e0af9114cd40a7d791941a",
".git/objects/e9/87505999a9b554cd2f2045d25c3691a0f55156": "3a29a21bd423d5b44ca99d2e3d461829",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/26e93372b28b1aff88d5542a21e82421a17fcc": "51f48a2231f04e1f9e65e1bd8478a157",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/f0/963b86943d4aaeb14bf24c8f5ded91c97ef9f1": "032dbb01d09db1be8ccddeb79aa193d8",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d5db364eeb53c12863a20d2efb1931c4fd38ff": "6b5aac8004d158d4aa38c4568b23c279",
".git/objects/f5/55736981f56fd3b509e50afc33456b6eee0186": "1fb89dc41901e9c6a113f60300ad4c9a",
".git/objects/f5/5b9014ba5f40b9b87f46b69f3ec19006bcf423": "ebd4c5cde5691fced9128582b14393ef",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f8/0d105f59491e36c2a7cc588d6ecf1bfebef013": "9181256a265d32f194ffae8163b6ccda",
".git/objects/fa/b999d6b249813d425a3fefc71f6bb2c3b72c46": "d55fb8040309e5483a03c30f6c664094",
".git/objects/fc/c48f7a10b3db68fcef3b894fb8d47794558c52": "4e40fbaff2c884bb12902708621c55c7",
".git/objects/fd/957d270d2c2db729b05f9c73a7a5497f05c601": "a6612c01622fd88f5fa46e4b40daf99c",
".git/objects/fd/9c4eeace285c28541c7b0ce10b103c77138422": "33821d48b05bdb9653715850cf3f6e4f",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/refs/heads/main": "ebd6537c215ef953fa3be07604d02129",
".git/refs/remotes/origin/main": "ebd6537c215ef953fa3be07604d02129",
"assets/AssetManifest.bin": "330798dcc94b9f1de79dfe8c1fc59cd0",
"assets/AssetManifest.bin.json": "b9d47010bc36b83aff8bc78b5dab4d05",
"assets/AssetManifest.json": "d2f0490bdbfe923f36450ab9f5caf3b1",
"assets/assets/areas/1.png": "b0da28cf82001b9702b1d9d7143e1d12",
"assets/assets/areas/2.png": "5dddfa4593023d675ddd81d5b35479ea",
"assets/assets/images/google.png": "16557008de1d50aaad00bffc7c14852a",
"assets/assets/images/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7f43f171d9cf7f54d952c93cec0c0db1",
"assets/NOTICES": "a3e8f810b061ff855de096f5671ca4be",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
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
"flutter_bootstrap.js": "e05aa6ed865f303d6f3e0ea88e54eba9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbedd2991500a13aaeef42d1ed20b56d",
"/": "fbedd2991500a13aaeef42d1ed20b56d",
"main.dart.js": "f475bec097cf26fbb7217beb207c6432",
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
