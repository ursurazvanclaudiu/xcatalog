'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "bbf46edede98b7b6ec5899a809135aa9",
"index.html": "6008a3eaf90b0b23183c759f4237f053",
"/": "6008a3eaf90b0b23183c759f4237f053",
"main.dart.js": "07a35a1a30a4708ffbffcfd6db565801",
"favicon.png": "a8d8a3c287ad7d7e30dad16221460c71",
"icons/favicon-16x16.png": "f3e8c29d2913c73fb57d1bf19c9d122d",
"icons/favicon-96x96.png": "77e432091db0177dafc8f9666c61e57a",
"icons/favicon-32x32.png": "694bbc17aa7be9c2a20d6f332a0f7c41",
"manifest.json": "ec2baabace191135baddea7e601a1c23",
".git/ORIG_HEAD": "7432bab6186dad0604c746b961f01e45",
".git/config": "44e967689540a008449f7db0d3ea838c",
".git/objects/95/0de0e4268e4afb9452dd1a0181f9b7c8d31247": "103b2bdceab43697183c730254e8ddf5",
".git/objects/3e/3f51a1bfcb81da1dd1e8d1c8eba400eca5c49a": "badde865f2784a8b15e149b55bbc8a4d",
".git/objects/57/2d79f785dbef28a01f03eee5b14d2927ce08c6": "51d102436a97f9c18de261aeed75b050",
".git/objects/6a/e369d2059152c4e788933689fce20ecfbcd9a3": "5274da1a8c92671d56ff57cf75ccc9b0",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/cae264eafad3dc93850795fce10ef3a2bc90b2": "e0b7042f7269072994a764a9010128a3",
".git/objects/56/6acc74c1e08bb72d6a018a0341af9e2728da56": "fd88c4714d334b7f54bd6b2612fe898c",
".git/objects/3d/e0cccf505c722f24fa868f03e9d47c03c50d6e": "80fdc5132f55847356249252fe790d21",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/60/2c2b0cc81a4e60825acde36a210db9facaa814": "a29a1224d77eddc1d84278154e29cd63",
".git/objects/34/12d27a30b7279ebe92b4b9df62476f557ccd77": "df56fe826911ba5ce278f90ea4924870",
".git/objects/9c/cc2c5808e390abcb81f4ee6b1910920e8e3a43": "eb2b0afd35d6348f28642c2e6e61263d",
".git/objects/02/d96059f9e8ffe99d598f4804a66e103a707c9f": "1f900b9f658d1183aa8adaaa4fd44706",
".git/objects/a4/5e4962eb49347ade29d79172542babe9b99ffc": "2c717aae23894e069758fc566fdca2a4",
".git/objects/a4/7f2dc6b73ac12729605670cb1711f5ae81561f": "a32e489bfed8a332d9d5d4ea4bbdf464",
".git/objects/b5/e092331e77b51fd2b11d86566453eb24e5a830": "5b5e7b63638d8cdbe385a391b8afa224",
".git/objects/b5/b0528e796715e78653eefa6a7d1d6b067ccdc5": "51a214c4449af687f0a5b1d334eee5da",
".git/objects/b2/251d8d67361f6b011e9919d80fe1a99abd261b": "61c84c336373c3aab48a2ea8a419c6cf",
".git/objects/d9/85a425f8c374dbf00216f7c0e0a234782c8fd6": "859da4c30399f6411c1e970ce4514335",
".git/objects/bb/47088772ba413c4f4547079df172f324f87692": "e3968a07a83890edcf90b12d8ad45501",
".git/objects/d7/0551e08c508b4a05b04509feb25267d02afc08": "602b36a49784d772a64238dfb75fc7b4",
".git/objects/a2/96e64f7e8532a18aa44f7c8026fd87f71ad1d3": "44e6f515257c3ea340ed1c05d8e1c33c",
".git/objects/a5/ddff6cf68fdb5cd776b980580fd373f30ce2f7": "df291e730defb094d8b81d3846211ac1",
".git/objects/bc/6f65bf0019415904e03c673655ef4ba92d2aa4": "c8025710a30d9979ea623636a85f118b",
".git/objects/bc/75ffb6c61596fc4ce917657cbc3e99ed57ba57": "08b461e5c2d6bcc1b2380de1cdc624b4",
".git/objects/bc/2ebeed245c2c765dceb39891a586b7c9327a19": "3c95e9bc87d008adaa03b322e2859ccc",
".git/objects/ae/7cad4bac1a37f4d4590b1a5007fb9434557491": "79c3a1595ed149c6a7d8b02498d1050e",
".git/objects/d8/25c35166ad9e408ab3831aa0f49e427ce24f80": "c927fc285f605dfff016ccf4fd662b4e",
".git/objects/d8/983b4538a9e9612bd9d956088a25a9254ffdc9": "ab8a92dca5445c1f1867b4057ab6792e",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/5c55d7754780f7e8ca3559223693d520d7159a": "0c35b865053b529f9dd50681aa8b2fa9",
".git/objects/e5/0170ec2d4b45cf422f96b0bc1471f69bc0c116": "50e808b8c40643a539f9ba37c3207a00",
".git/objects/f4/2855e68178e72126f2c4114c198f8500476589": "0872fcb0a79d8c270ea5ebd92b3ec37b",
".git/objects/f4/5c664a822c668db3e9fb186d08422d8db0074d": "41bf15b1567fa164e82cb8ffd8b662ff",
".git/objects/c7/82186058d258e1cd95c4be56c295cfad6c4b43": "f3d4b8c211134cea8c36c7f13fe3cc29",
".git/objects/fc/3aa75ed8d9bc512eb22165abb95a9892ba8b7c": "3ce08ea259f93c8535839c9f9400978c",
".git/objects/f2/318924f423e840dd2542af9de3ade9e22ea913": "256af21a6ab2e064456bdd60bdee3e45",
".git/objects/f2/76a9c99a815515c0314146e208ca841907c57e": "dcb8866c84a5c9dd59f161ee20dfd9c1",
".git/objects/fe/b8e9f24c2b19f91f404a3cd5ea7a7788e56909": "0c3cf8bc33c14c050099bee6c4ad0fa9",
".git/objects/fb/dcd57f92678fb8166884d39803f5b0debecbca": "eb6e65fa07b24307f789f56d8afc457e",
".git/objects/c1/ef1b18e29844a0cd93ca779266ac81d5a572c7": "56a42853cae7c4fd48859ea8e71b4b14",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/5e1b2786d0dcc938293d5a753ac6b057eb398c": "3a004c85140dfa2604bd366ed5af9763",
".git/objects/11/870cf6491169a449baeabe36c14d8448aa0f56": "694439b2c54241f3c894f149bb54d91c",
".git/objects/7d/29be5c2fb56ae7985491751e91a10184d0bd49": "2501ef27d0fce9979f19105a5886e208",
".git/objects/7c/7b20aa54d500ba60345eb7f0676213e902d3db": "ec0deb574302fe428d10c3fac7b3ceb1",
".git/objects/89/302f261f26fee32a759a2bf3851399cedfdbe8": "db89b3c0bf62e6b86eb2655f47470117",
".git/objects/1a/c506a74fa7e342067d47f7b37900cfd95c7116": "4161b9c4f7967e5ab76274a45a47e4b3",
".git/objects/17/ecd462ddac742f3fc1f550359b1eaf65ab7247": "d1c78c18392ddf2acfae533ef8b6d9c2",
".git/objects/8a/84452fe4971ed6e30020ebba27b4b84c2474af": "e2a7d1e51b9d558ef516a7ba5a123ca5",
".git/objects/19/1b985c437d00e566b77f384b6cf0da72f88a48": "831bfbbaa5a80c4778772e5d55bc9a3f",
".git/objects/19/47c3ba23142a2ed5b4a6d806bd5c5467235c3e": "eb7c456495af0a083bb173023a93e4bc",
".git/objects/4c/9c85f5525042a70ad0eb2e27d6529d7630731b": "63552bdb645471fde6ce4fb4cfd0958d",
".git/objects/4c/0ce9d55ca1a7d6d7fc42cb61071edab438eccf": "7604ac3159413986ea043dd3e45bfb39",
".git/objects/75/13e92c2136970156c9954360591dba68a63b69": "0b05536207ceb9294b6a8dfa15478182",
".git/objects/86/8c5cfd468f6c211a6913bf534dd8d89cbf2fed": "16a799e03d00823e544eca19e14e9c18",
".git/objects/72/67078fc68380a4af2739ea570556618dd7dafd": "2ac891f3fd552f55c038433f76e451b9",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/00/24c80af1b611a66d8d0a9aa3103ec463bf1471": "d61f03706848b43264e8dbe197755266",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/36/00466b39291dfa72165ac5338402899a92a565": "aa5997b6799fc4214b13748ba1ffb630",
".git/objects/09/30e703acaad0916a1069367cf12f8c34f258bd": "9268c841225c3859ca5f490db2431652",
".git/objects/5d/b932f0d4489c8f17ca83cec11ce0ae618667a0": "ffa181e0bb05343a8d55f6be98b2013f",
".git/objects/62/e42a4a8a82689683944f899ce5c850c6713447": "2363d2739e2250c6af40aa1fb6beb7d9",
".git/objects/62/979731805228acd439df1b0b78dd746f4f9faa": "b37585277620702832ccf57b3aa9ed8c",
".git/objects/3a/e2c03e9b041f8a2013a06ce6cdf97383de058b": "bf669981dbadf4996c74fe5cffda590d",
".git/objects/3a/96e53b08412532ad8f9f9e4b7cd41a1852905b": "a63222c7c5e597870bfbef78f476cb52",
".git/objects/3f/d4fb22460762fef038988227e7bfd60a4556e8": "0dc68466502270371815f2fd9908d95c",
".git/objects/5b/c1eb893d2217513856ddb6cc1b282d537fd593": "5951ed7b77d7378782e96e4e2fbb6e9f",
".git/objects/01/933ba63d472087421f810d1d3f48c98991d64f": "3565084ba7fe5483801c6693e43175f4",
".git/objects/39/133725f48f050a6aa80cc776d6667704e2af06": "a12521bf1d1e1060fc3333c363c23de2",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/55/2a9d44fc3bc1bbdbaa04bf3d2a48a8c9c9a371": "f940aed9c21073855de57e31dd177ece",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/64/9d524d4dcce417c29784a209c42a11ef116c7c": "0764edcf72b0f29f56faaacb22076c3a",
".git/objects/d4/05d3d24e878d1109f46c93f4f8732217136d43": "98b89f425a370622acb99b87dee4bbb4",
".git/objects/a0/91ff8680d99637aebe22c9a920e1e218fbd10a": "f676b4d36a92c81d08d30b199aca14d9",
".git/objects/a7/079fca77839bdd5005edc51d04c776af557b83": "153d712dcf8b8c3bdad6cec671a9ce53",
".git/objects/b8/98c6c77ea3140121cb0b51b46db28537ba0d10": "aa8d21ee04377117b093041428dbf1f3",
".git/objects/b1/38d68bf7ecc9f0914e504c0769cd402f53e945": "bdb26f7535da1eaae7d1cb792af13960",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/af/904d9eb8d824312fa0c0b9ab5a9e90f442545a": "378ab323fc499149809f78876a1e85dc",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/a4276deac2a5b58f8b48e4ed63e317bf554db7": "159aa2be2e8c1190ee391fcd8f1cb1f8",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/ea/520a15a9b9b04029662156d15f2934f04bd4eb": "82a2ff909fa4908b6c0902e4d0d6fc3d",
".git/objects/cd/040a02205d685e3925e0aaead8266a0af9f9d6": "c1d0ba4483a17f719bb2aefba7091b0a",
".git/objects/f0/5a54dbe368f933de92dd0fba361cdeca409fa1": "5c9f3df60e299ca8aea8dd939591a058",
".git/objects/f0/d48704775b82ea5bc3a78457a460ec30ab8939": "0cc0a1b85ea8a0dde3c2f2c19469c247",
".git/objects/e9/207ad84cb9f8ca50937648826171d575cdfd1e": "4f7afbb7a1573a05f5df5bfb1f6f4cb9",
".git/objects/e7/329309547347911f3e069653657e84ff4b6175": "7bb6af02b6e5c0829d5b8977b8255127",
".git/objects/e7/ffc02bb77c846d8605ec9854d7cd342a3444bd": "2fdfa90c80984767e2224edf91532b6a",
".git/objects/2c/1e6cf82f7a4212f3298f366f00897186a9e697": "7b5cc4f9f9860d02de82103391c08c24",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/88593964e1016414cce15d4dc0d82321c9ca42": "a6651cd83c2f50c9414d3476d6f92098",
".git/objects/70/8d020d21132bf2ecb22df7d470c84432be4f7b": "5823f5b36e5d99fafba102d483bbb6e6",
".git/objects/1e/0624abe17fb67fe15c8146a49b7b9bc88ca3f0": "f39578a1795f1dba68dd15de7c526980",
".git/objects/24/b6c47d5932a9672eac443759b72e6adbcc31b5": "16ccab2e7a6496714b61e8f4b7e567ea",
".git/objects/15/fe33845d8b10efffe5dc5753fe1bc39eca30a5": "ddd5dd007ce1dcc5fccce5255f094c4e",
".git/objects/76/7b9c2bb919f6b4e048e0d69af1d2bb3e445fcd": "7c6164bc6d264397d406f1d157934d23",
".git/objects/49/c08ab09ff11a93e68949e26f4f613cae1c8c15": "a89b0457dc19e1f1945dcb20b260bb73",
".git/objects/2b/b1d4e3460ae7e4e6cb9c3313bb10dfe41e4875": "845467dfd34414bdb8f5dad0d53ebba2",
".git/objects/78/5db1ba03f7ce806e93f04b78e9e2da587c3e4c": "1f2bc07b7b346fa01f2f3c25110c5409",
".git/objects/13/ff62157458f362044dbd7c9621ced171431ddf": "6f7560af1ebc9b7c46f5596b4f7568c6",
".git/objects/7a/950936886792809ee4f6f3325023b7f38d8704": "e5de0c6b3136fa20f1e95cd1b87bd6df",
".git/objects/8e/b1b7e60780baae9749a5b077859e6ad41097f9": "57885d43300d583e35e5913e54904118",
".git/objects/22/0afa104f50ce6d2b4b1b0eac0de3c38354ca07": "05ed15e8ac13685070c0ec8834592e76",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f399220cf9b05c50ff04daecfc45080e",
".git/logs/refs/heads/master": "f399220cf9b05c50ff04daecfc45080e",
".git/logs/refs/remotes/origin/master": "29276195ac25bf6748859bed5a5992e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "b707dbec11779745394b68f7d008af48",
".git/refs/remotes/origin/master": "b707dbec11779745394b68f7d008af48",
".git/index": "675513bf61ff4772d4c84ed24e9c5783",
".git/COMMIT_EDITMSG": "708837c1d238f0955c23a38051f5ebb7",
".git/FETCH_HEAD": "6c226b47f166c5130d3c5239255d227c",
"assets/AssetManifest.json": "fcf3a411b816a1105778a985c3367aef",
"assets/NOTICES": "b79b4cb512c447a4f624a79a68906e83",
"assets/FontManifest.json": "df2745384cd4749911c8e202d8994f31",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/xC.png": "28ed4883959e3aac7c6e80970a67641e",
"assets/assets/images/math_class.png": "38f26086b136efeb2895184af0d3fcd5",
"assets/assets/fonts/Nunito-Bold.ttf": "c0844c990ecaaeb9f124758d38df4f3f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
