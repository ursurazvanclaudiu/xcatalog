'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7afcea069ada3dec4a3f3efe78ae3478",
"index.html": "49ed6e8c0b015e78ac5abfa94490bd8f",
"/": "49ed6e8c0b015e78ac5abfa94490bd8f",
"main.dart.js": "391bab98702fcebcdcce19fefca9d5fb",
"favicon.png": "a8d8a3c287ad7d7e30dad16221460c71",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ec2baabace191135baddea7e601a1c23",
".git/config": "6a6c90ff2a87296b4a290494ffdcd029",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/32/cae264eafad3dc93850795fce10ef3a2bc90b2": "e0b7042f7269072994a764a9010128a3",
".git/objects/93/42fc5eb834c719366e9acf778f6b75f673b737": "d07b72bfceea0fdcbe87a7e4939c9f8b",
".git/objects/34/12d27a30b7279ebe92b4b9df62476f557ccd77": "df56fe826911ba5ce278f90ea4924870",
".git/objects/a4/5e4962eb49347ade29d79172542babe9b99ffc": "2c717aae23894e069758fc566fdca2a4",
".git/objects/b5/e092331e77b51fd2b11d86566453eb24e5a830": "5b5e7b63638d8cdbe385a391b8afa224",
".git/objects/bc/6f65bf0019415904e03c673655ef4ba92d2aa4": "c8025710a30d9979ea623636a85f118b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/fc/3aa75ed8d9bc512eb22165abb95a9892ba8b7c": "3ce08ea259f93c8535839c9f9400978c",
".git/objects/f2/318924f423e840dd2542af9de3ade9e22ea913": "256af21a6ab2e064456bdd60bdee3e45",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/4b/5e1b2786d0dcc938293d5a753ac6b057eb398c": "3a004c85140dfa2604bd366ed5af9763",
".git/objects/7c/7b20aa54d500ba60345eb7f0676213e902d3db": "ec0deb574302fe428d10c3fac7b3ceb1",
".git/objects/17/ecd462ddac742f3fc1f550359b1eaf65ab7247": "d1c78c18392ddf2acfae533ef8b6d9c2",
".git/objects/8a/84452fe4971ed6e30020ebba27b4b84c2474af": "e2a7d1e51b9d558ef516a7ba5a123ca5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/36/8468ce4b77fd44a05f3d43ab873215cb6ed9b1": "7ffde59841988d05b268c89ad032e584",
".git/objects/5d/b932f0d4489c8f17ca83cec11ce0ae618667a0": "ffa181e0bb05343a8d55f6be98b2013f",
".git/objects/62/e42a4a8a82689683944f899ce5c850c6713447": "2363d2739e2250c6af40aa1fb6beb7d9",
".git/objects/55/456295b3f19915380fa8d5c4c99db2b034bbc9": "08214898a93bbc3eefc8f47fb838b857",
".git/objects/63/ae91781b27ac492da799ae4010e2a6bd0c1183": "5fb3a33e244995a80bc868ba08d2ca4b",
".git/objects/b8/98c6c77ea3140121cb0b51b46db28537ba0d10": "aa8d21ee04377117b093041428dbf1f3",
".git/objects/dd/69fd19a7d31d6e18754cfc687183c48d7fa673": "5a354eea3fb606baf71309e3bd04b6b2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/c4/2ab57d682f245ec3b7f6a3286a68961b87cc02": "b8ff1057e73543dc172d01218567e5a0",
".git/objects/ea/520a15a9b9b04029662156d15f2934f04bd4eb": "82a2ff909fa4908b6c0902e4d0d6fc3d",
".git/objects/f0/d48704775b82ea5bc3a78457a460ec30ab8939": "0cc0a1b85ea8a0dde3c2f2c19469c247",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/88593964e1016414cce15d4dc0d82321c9ca42": "a6651cd83c2f50c9414d3476d6f92098",
".git/objects/8e/b1b7e60780baae9749a5b077859e6ad41097f9": "57885d43300d583e35e5913e54904118",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ad17d6bac3750065a9f2ff084d064c63",
".git/logs/refs/heads/master": "ad17d6bac3750065a9f2ff084d064c63",
".git/logs/refs/remotes/origin/master": "c8f238b807bfd42f6c6b8c112b513668",
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
".git/refs/heads/master": "acd14e25c4d9e1fa8a06e3df5e6eaec1",
".git/refs/remotes/origin/master": "acd14e25c4d9e1fa8a06e3df5e6eaec1",
".git/index": "9c63b9b69e48da6b2b19a97e68b40a2f",
".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/FETCH_HEAD": "567bef02ac7e4ac2ba1218e0a1740da8",
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
