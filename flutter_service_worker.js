'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fd9e3a0ac3f0834f426b6f2d3612d2f0",
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
".git/index": "d92d92bbe42269c60cf35401e917a041",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "17f121537614d642e3aa9611b34ce9ca",
".git/logs/refs/heads/main": "5496ed68b995944d110c6d0baa2b029a",
".git/logs/refs/remotes/origin/main": "86bc30c5a9734a6d1f4d2438c87be54d",
".git/objects/01/6fcb0a14eb60cbc557cd0e40b511fac0ba7e0b": "dac0204de588f0560a32ccca3a65058d",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/02/6ccf3b56ebe54332a271b6f1d1adf0361fd04b": "6863495235488770831084e63d4e5ee7",
".git/objects/03/267d99185baf15de32b93430137eadbad8c7b0": "6d404111cb272683f662b306525275c1",
".git/objects/04/120946715e505b8c7b9503e950ba6a8928865c": "2c76a9ffc4809490706befc1f6f4547d",
".git/objects/04/9ed93935d3bbb658fb9819ca17d65ede4de577": "50e91b18c79299dc5e1505a9f1c07b6a",
".git/objects/04/b402c6eaec70fe3d69fe645dfda527d1779389": "e93102720a6330c08bfc5767cbc604fe",
".git/objects/07/cea66e54218b005b2f07665867d2e98dedc3e8": "6ba207ee553b6c23535b3d437d51934e",
".git/objects/08/f0b1bcb3fd4c1a30b9bd4364a7725dce82475f": "a18294bbbbf0d6dd979c6db37ee3a4bb",
".git/objects/0a/48bf8748c8c13cf5ba18ecc73dc732c121d348": "bffb38bbce6d95007da710475d6843f3",
".git/objects/0a/694cbe00efca368fa766ec1c843d4735d5c373": "5484e8322741ef9b6f7bef7e564e025e",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0d/4cb13a247493b06c2799a446443141caca398c": "c957d2e75d824b3eb2d6354bc00c3b1a",
".git/objects/0e/edc68aac36160bb90d0054da3aeb5618636ed2": "35d25ba6ddf88446d767d659b980eb5f",
".git/objects/0f/c7483b1e1970945675beb2825f85e589eedc7a": "0a88f786dcd8d15cf8e16852497859d0",
".git/objects/10/b085e35ca48b2842a82715e24fe4865d4b0640": "56d63553d2e56378819c6669ecd2e2bb",
".git/objects/10/ca9e4621a82404fd341bcfd962c5245cea2866": "4b6654afeeed4186f5ed63e11bce4a7f",
".git/objects/11/149db9603ff85743af778014e6fe3687ece72a": "f4982b697661627e854119007882903d",
".git/objects/11/d5aef1d2b51d6efb5242f7e0881cebb71fd0f1": "f0cbd5e71db2506f5f20d76a696f64c5",
".git/objects/12/65c86055def1c7813b0a5efc1ea62e851e8149": "fb822002b78bbd2acd0aabb1d03543bf",
".git/objects/14/7b764b6b17b7b85a81d74e2eb1ed56485837ba": "7f607c481fbdf8a2812d97e77b4dafcc",
".git/objects/16/79c9bda795cd5414480b5a215f6ef508cd994b": "7c52240278d332ffc18eab6cafa4772e",
".git/objects/18/745d92e7068d15018cde5a76543bcef83d8ae5": "f1c447cb4032defaa992de4ac5be5335",
".git/objects/1d/2646acc06d6032e6b31bf705f00c6ac0fca40f": "ab8fd9edf85780286c2ade6e1ed543c3",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/26/8562b55ebca06d3baa72feb22d1b5debdd4afe": "d2ec1ccd46f2fdb474f1f2328d8015dd",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2d/6d3fd3bb1693a9e3be7615cc85d2a277b5fb92": "c7ae1df29d2572c1cf633c8bb05b20a2",
".git/objects/2f/36de22d03dbcabf5b24655ebe620048c166d0e": "9875ae1fcf20a381f0793c9984657289",
".git/objects/2f/d91d8553152b971d9f13ee675338afbc8888a0": "43630eafc7c1e0d7d2f77ffa4200f9b0",
".git/objects/36/1e2e300cc388db76abf91973fab4678d2413b6": "3ec962ca812eaf5ae214a014cbb3a958",
".git/objects/3a/7adddc7ae78836f3af193bd55de3adf0caf24f": "7b215c2603976968238c4a33c3dd6e34",
".git/objects/3b/2330a5b2bb62fa20a3dbcd053d6154f977ec20": "76546fc83d1b2a8324c10f6fc8313a22",
".git/objects/3d/f4814e0f954683d890a76c50152a4da07406dd": "e4d7d1e343fb45dd2b77667c62eed796",
".git/objects/3f/87691d7d2c1b94f24fa3f074164b32ea0b1428": "f92c860ed365b9d9ca1a5f422f07c543",
".git/objects/40/8b60fa0f2c185e48e4bea93094f13669c201b2": "3c7325cca0233692ac5a9d0e070216bc",
".git/objects/43/5951bd9ed3099319401ef5e3bf696842a96675": "02ba7e4af5f7901e6ab7c858acbca585",
".git/objects/43/5f0a6b90014180bfb2fe6585f171041ad98c0d": "0dd15b420201386c09b50506d4fb68fd",
".git/objects/43/6a5b59c8208507f63c6427cb47ad8038a5ee89": "a9d64292de78339098df29a87f57e97f",
".git/objects/45/82e0b7c3f5f921aacebb82286d1aea6260dc82": "d94c89f5d5acefd088c79044fd91a240",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/88383a70dbbf6d0ebf4aa722bc74d2f47ba9f3": "701c241135f43ead5151faea3a34432f",
".git/objects/49/12fdff36f9c35b3d94be2a5ace30906c4dcca5": "fd0ee16596df6ea03c4f41c0862d7e28",
".git/objects/4a/65a151ae5056f8a47251a56be3bc937c0c0d06": "8a39e33e461543f5a041f03179e20931",
".git/objects/4b/47b2a65222c19b2611259efb9105093f921bbb": "52d12fc11877aef16c7ea4e43980c2a4",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/4c/5f3b462a6d361781df4ed8c687f82352d8235f": "d2e44708d9679f084674f36b5ba122dc",
".git/objects/4d/8452e61dc07560225c6db1abf8dbecd2a6c93d": "891f7556aaad54b11a460d83f0b44f40",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/52/c4950ddbfa4884cb214963fd782b71d60d0248": "f8fcb10f984d87c284d97210ca2c0fd2",
".git/objects/55/a10a36fb0f0dda6883b9e4ddba5b9877b5b654": "479cfcb891e73ca1537d9713b61f654b",
".git/objects/56/15d51b1ac9104d39a8e5abd05a4c014a822a5b": "52ecfe3fff426db69eb03049551d52fd",
".git/objects/59/6aefa08ad68be9c2c9b3047052c875ef5feb4f": "b748b8a99d241a4aaa62ee1c46ae3a60",
".git/objects/59/75cc79054fcf54bda0f4a23bea0da0dccd6980": "9e6cf1b89df43ade8ac24e4b436ba0cc",
".git/objects/5f/21d2e76823593dea4e201976afd4f391cac6fa": "7a3b1f0a4978da7ba10585bf88d89826",
".git/objects/60/2c0210fb693093c24a646bf09fdec9bddf23f5": "70b940db265c13ea281a61cbee45799b",
".git/objects/61/8ec3e497273e7bd11f4ccee3202adaf624d137": "0e4e663938c3f4e8824c008db8994661",
".git/objects/64/dc083d555a6c163e34e86e6c724f4b833ef1bf": "1ef30b7033532a56eae44a54091a907f",
".git/objects/67/46c64ddb22ea3f9c2f0d7168d9ea15a3ea55ba": "da2e70fc9884e27c236fc716749beff0",
".git/objects/69/506b233f9ece71a3ca15cd83e075e5a51a0635": "3a744b68fbc5bf379f3314e69d93fdff",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/9373522e0ada40ca8fc60550ea49df2a24ebf0": "07ea568b15fb3b20bf83cdad27e0cf0a",
".git/objects/71/156928e05fd24623d2b96268dfe5b496d51db8": "e577cd94299ca8522400c7c316b3322c",
".git/objects/71/32695084e1f9cb8c692de1afc8577d06047a24": "6b769c159b508974e59fed794ad1c45f",
".git/objects/71/abafe0566b36272b78953662b968f91496f448": "5004f4a8e9fafb89ccc6a6c153c4a367",
".git/objects/72/ee9887950c7b585e83d5574a2c997a3da952ac": "70054d751f0dd2fb3d82c0e2a5bfc9f4",
".git/objects/74/2cbda97feeccf7c065f5461b5f78860889ed67": "fdce8f61303b622082044f95e566ce03",
".git/objects/75/3aa0c97e4eff963125fc26e17fed909a947591": "4571ba6aacd6ccf2ada92775e3c9843f",
".git/objects/76/eeae1aab76bb7282841866bf748f86a0bdb150": "5bb7f1679573673fa59efc5a8a1ef660",
".git/objects/77/02f68ff6484f24e66d69cae5ec5a0ca79aaf1b": "ff7883701c41bb12b7cbf3264f524de0",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7b/8f191fb40fd7d9cd4b26ec215059ba40112e00": "b9ac9dfa1eed77ef9ce7e880b6b12034",
".git/objects/7f/a0f0f0141f6c8f8d984e5c2fa8726047391ae6": "ea873fe33bf34c51b19b23cebe50ba7f",
".git/objects/83/2a86fb6ca80be450b4d21d7e607279b32d7e50": "1bc46f594df0a757128672abaa5c6dde",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/87/5de7f739da4042e1f10701d0d2e983c3f440f8": "1320fffe5af1cc3b33067bd1bd124dc0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/c05e285f3d3e0d203b883015acb40914cba85a": "c4bfe74a32f7bf85733ff43433f2bd2e",
".git/objects/94/611f5e3ce4d78d87aadd2158ebd2754b2d6580": "aa436a421efb3ea38edb32c65d227d86",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/4c60cd71d7b99def705571610df63b77b3f010": "219ad4b79192d9bacc03b041cce7c72a",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9b/73425f6164ede4e9006dff4351c8d1fae518ae": "5d55ef0bf84284c7d6386a7814a2b0aa",
".git/objects/9b/c5c7d738f5f1c41c4d12a3d66dda9e613e0ffd": "984ef11ff77ca2ba4451290b8576037b",
".git/objects/9c/0d862c44e0209dca6dec001cb9ec9538589b7d": "3e83948c6784a2758fdf60a2602dc8f1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/9e/4da4b5895174993b6598ce299d79ec78b22826": "8ee3079e5616bd89ec6893c1f01b4478",
".git/objects/9e/87064159c3700777a7a884b3ad7c1e943a559f": "9a859e9d871ef0ebe5d925e4a170c34c",
".git/objects/a1/6c436013c4937cae82629838b55a53c180a3ed": "11be051b2802c9363b56a51e6ffdb299",
".git/objects/a3/69ff8c949bc230333ae7ba141a83c0a7e408a7": "c8a14f5c5d27c315d814e5be27a1e110",
".git/objects/a3/ac06f8cdf7ad71ceb74c300a8429b90532abf3": "b60f7c950c6c3eb9d48f9bf896a56cfa",
".git/objects/a7/c111637f4aec1ae6c4156905df44a21bfff190": "b5f2599c10f1d4efa087454fd90ea7cb",
".git/objects/a7/c6a31bc7848bd710ca0d78e9e9950669deb5b7": "090d47bd24cf64adf84eb822eaac3ac6",
".git/objects/ac/3c406fe9dcf3e5ae0b04d9984f602b9932a731": "c314454171091e991468f71de27297fe",
".git/objects/ae/fa43b2e6e84d4805068453e8bc854b3e429d26": "882b18870a8a171c6b08dfdb7517a8c3",
".git/objects/af/43a4c3fdecfa61e16cf85894c00f760509cc1e": "3e756a32aae835f44995a00b0b87de5e",
".git/objects/b1/9661ae4839b6979a46925cfa549beec5c391ba": "e27d9c67e73a5ffba175396e52c91e3c",
".git/objects/b4/2d1f80813b5493fe2f8422762e0e800c1a0767": "fe91f4ae9d7f9d60da9c2db912d8258b",
".git/objects/b5/e2b55c3b3f62a444ea2ded093206c43a13eb82": "d28b6769fd731bb3ee5f3f4de54299ae",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/21a839762ccb21377e7addda777285f41b399f": "45cbc764d3c68979eeac24491cfc6db6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/60c9191ecfb9747822f629f16c3f1a5461cf6d": "287d7f94bc0f8f4bd9e83dce13210cd2",
".git/objects/b8/f3fbdefe9259f724649ce1f5ad194225e5f7cd": "2009487f1f7fc25e4173603c3d3ab1d9",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/a5916aa3f451450fc37c243fe60e64bb3af758": "39505411a126578325b71f741db5b2e6",
".git/objects/bb/cd480aea9164e612dcbe1f13c141ac6781df28": "93419bb91d6c37ff959394835e14edbf",
".git/objects/bf/01d7544adafb8cdb7d6424cfe586d9ff67a72c": "b7970ffb834a8718d299a168f8e92a0f",
".git/objects/c0/144bd0766c08e05fb99b46101fce52e869971f": "c8a05815f209c38d6eeeaf67eadfc8fb",
".git/objects/c2/9c9d0be6677d15bba1729d2c3a69d06df4d4df": "8d128552d242d81a5680bf8a42facb08",
".git/objects/c2/a92af91bddad1e5c9180512f67afb693c73f17": "81fc8d6757b7a85925eb30efb06c49c4",
".git/objects/c3/93f256988dbbfb8f73c2fc03d96a67c39995d5": "8bb6c0adb98ae250d2f2b320b685e432",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c7/2039acfc739372d4b34db4a90f45356a344a4e": "2eeb36c8a0f4010265cca4a8d7dd4917",
".git/objects/c7/623f38257ecf51ea681984355b8021602f3265": "d7cb5af74e72a8b7c2e58d57694eeca7",
".git/objects/c7/bd27f066eb46df03c776c78c30c5dc0df4ca07": "aa0a16ae5606592837baf59104c34187",
".git/objects/c8/1e1e92e39d65ef6d366fafee1c4b31dce4b5fc": "f27cf26392799de18b606c8a31a43405",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/b6cb6e5040ecf5d3b8367df20587ca426fd2df": "7d1bbb4c7644bd652444a1774379554f",
".git/objects/ce/2ed9078f180480423ce108cda118bd10b859c4": "51fe7708f64385653510077b90dd20e2",
".git/objects/d0/b191b378245712b6d43e20a436fe3666ccc996": "de6df7ff8ff41d6fbafd47b8d2c9e2c8",
".git/objects/d1/4607479bc8fafecc54f6742628f05713befe4d": "38e69d02368f7dd5089da637a0fdd4fc",
".git/objects/d1/b2276890a025dd47dae73d254fe971fd3fc6f1": "ae05709364f2dde6f77e97d63d26e374",
".git/objects/d1/d46bfa9f56fb7d457cf840c54c1b50da041012": "18462cb4d8ffcf9990cd2c7fc530e4dd",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/a50c4e6ddf7976aca671e1b494a3768d646405": "730f661eeb61cc7b24be6cb8bab0c604",
".git/objects/d6/59d9107130fa17c1cb475c128ab2e4e52a76e6": "666597d96b9a3179959f7b3458174d44",
".git/objects/d6/9520742cd04772e530fb333bfe116e500e7cc4": "cb8fe9b86366468524f0f444ee1e52d6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/f24ff3c9b288109f41e739e365a1e79e0930f1": "c9ed8cbd1f9404838c7f8c3bd32a2849",
".git/objects/d9/867e0d7f2028573aec20deba5e0c5455456548": "5c1d2ea89f45625949870ec11764d44a",
".git/objects/da/1ee9bc79ff2144d87163be3da7b681b067bac9": "6e7bc9e02e9713767d688ad46a2b1c14",
".git/objects/da/9b67f73bdaee346fba42ed9bf77ea195a2930e": "59d51abec080089a47b88869eb82cd84",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e1/a0fe96643303db95ee2c99ac4f7766baa2e2c1": "2a3c714fbb4a510e72772a742f227daf",
".git/objects/e1/ef41065a39c72702b786ae4ac9bd8406b7ed4a": "974794b9d265703e1ea4843d798c0859",
".git/objects/e3/b6c8a7c0a5f2896b0d691bc3f88c7f3860191f": "a202e64db2d23ae956bec789ba5225d4",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e6/8dc20e32ae31e94668357e654706602909edd7": "d4aef040039c4f81c3cce5ee3ccbc500",
".git/objects/e6/b01d2e069920f6ab37cbfef4b443ff11d299c0": "a5d53b56edfcf2703a07674e7f29c4da",
".git/objects/e7/2862111d43ffdae0fecb9321264635bcf0cabd": "246b2d696deb8a178471f0cb0c3815cc",
".git/objects/e7/730105f7cb2baa2593a59212f25cd19831923e": "d1f1e75067e0af9114cd40a7d791941a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/6087aa82fb8193993795e02d4252e83afb409d": "190d5606969186f5bdc4403e11690f28",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/4a5801846e3f9b813b25fee073949849b4d22c": "1eb2cd3b7c4ec505f9cecb21cbe0c932",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/d5db364eeb53c12863a20d2efb1931c4fd38ff": "6b5aac8004d158d4aa38c4568b23c279",
".git/objects/f3/0b397d49458c27588aa32c692a87492b14922a": "ae53fc653188bb5b2d17bcff82bb2c89",
".git/objects/f3/322cb3e31fdac1b6c12b528b892fefd74a3f44": "7da967cf6590d4f3a7a9ae41dde0b420",
".git/objects/f4/4798e6b8812e6959b1673631ff5a0286bcf809": "4a21d54938b37276b54ce2bdb419f2ea",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fc/88b8fa8d5e71a20f22344200f5a26274ac940c": "51ad885e898b7b1d8782b4fcd1b7e8ba",
".git/objects/fe/1b7ee721546fe3341280a2949462627624564d": "c1ed8193180bddeeb0b31b59650be719",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fe/d0e7884e784b0eee96d46989a8e83bc56afc62": "7c74d6046f785d9497e237e9776cc703",
".git/objects/ff/20a20a60b43063d8751b5da57670210804453a": "1274c234e0e18c7c0725aeb0fbcd8a8a",
".git/refs/heads/main": "934824c6194fd96e259230ca59bb2d9e",
".git/refs/remotes/origin/main": "934824c6194fd96e259230ca59bb2d9e",
"assets/AssetManifest.bin": "330798dcc94b9f1de79dfe8c1fc59cd0",
"assets/AssetManifest.bin.json": "b9d47010bc36b83aff8bc78b5dab4d05",
"assets/AssetManifest.json": "d2f0490bdbfe923f36450ab9f5caf3b1",
"assets/assets/areas/1.png": "b0da28cf82001b9702b1d9d7143e1d12",
"assets/assets/areas/2.png": "5dddfa4593023d675ddd81d5b35479ea",
"assets/assets/images/google.png": "16557008de1d50aaad00bffc7c14852a",
"assets/assets/images/user.png": "29479ba0435741580ca9f4a467be6207",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "fd132a0992acbe8f8301a65ac9221a7d",
"assets/NOTICES": "5d6af8299759a616e2e8afa9f1074282",
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
"flutter_bootstrap.js": "4c2a66284fe9c2374150389ca2a9b273",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fbedd2991500a13aaeef42d1ed20b56d",
"/": "fbedd2991500a13aaeef42d1ed20b56d",
"main.dart.js": "95795dbe2c21af1acbd785b01f4aa4a7",
"manifest.json": "8045ebc5ee2b8a0aeab643d13a92512b",
"sounds/alert_sound.mp3": "8b31234ecd83f3ef632c4649f417a9a7",
"version.json": "4630fbcf667df387f81443b6a08a6803"};
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
