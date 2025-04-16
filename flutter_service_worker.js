'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "7de3f7243c3cc1276584a76ad048915c",
"version.json": "d04d1a9c83e1d85c40359053e2e7cd8f",
"index.html": "2ba4f0671fb96ed87fc3848c4d1ac245",
"/": "2ba4f0671fb96ed87fc3848c4d1ac245",
"main.dart.js": "7a04684b961e6fb6fba2f92f87f98455",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"favicon.png": "f64a8aa5f21304f86aa81b2ba51e19dc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9458659101e4cc161850abb73864a2c0",
".git/config": "feff9b4ca73df8f4b9866c426fecddd7",
".git/objects/95/72d8372f20ca99df2f6267f4aee27726c8df36": "973c5bcc17b137af2bca1a4b9b4997b5",
".git/objects/3e/d53f5cf4c4d02714e44ce2804f86eaf8f2d976": "369f2835d06d1ca8854fde896ac5077e",
".git/objects/50/0d2e23d1e7991306a6a456b03ff920998a23d2": "3db9db4a05bacdc91721a7ef6f2d40a6",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/9e/fc5d09c27bfc854a31e31f3873f06d7941f19c": "723ee23b60014b583477322eddf9b7a7",
".git/objects/3d/21a608ac9b7c2ebd029577be3778054d22a3b2": "ea7286738bafa3077c6ad32d1d391667",
".git/objects/58/ebd962b4ea3274fed4e10868f441cd67c76789": "6f53dc5da856c90e411f145041f55ac0",
".git/objects/0b/963da0f3b79ded97520ff402d93de0b8d333df": "40ad8f9ad9a95be96ee3369b6ae8a584",
".git/objects/0b/a9b1556c519dcfd483f404e463fa0d01b6b1b9": "8e8a0755d8d6956831af46bf28cd36fa",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/0e/70cf2c7f68d27736c42a0d80b6dc186c9b0182": "0ce6ff85b5126af010bea88b28239012",
".git/objects/05/a8bc40af5df3c277fb613c80960ec64621cc83": "4874181cdf08bb85c2d864b1eb3ce84d",
".git/objects/a4/ccb6665b311ea87a0f360195a3486f6d4e6192": "9bcab4be38acc5009a334b6d6d005491",
".git/objects/ac/113cdac3812bd29ca2d50bc8d09146e21466ef": "fc11ddae4c3a38584b54bde7cc694654",
".git/objects/bd/e3f59d3ecce30c5a27da3561aec26fcc671ba6": "5eef05ad3ddcb209353bd569e83db826",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/5c43ef192711c8473d05f9d1b163300cdc1f2b": "40eba47b7769b8a4fc1e4f28376c4878",
".git/objects/bc/bcc2082c9092a3e517d3098315f3391eb94574": "6b8dc41c74d45639a3eec71cfa9d175b",
".git/objects/e5/d2948732be79ce015549301eedec482419149d": "787de894191fc542ef3e1de9d23c7f51",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c9/3e8766d5b6898e4093863a5d493b0098fc22db": "66c6e7fb5ad84ca860e0d5654546757e",
".git/objects/fd/b9b24d49814494e2115862bc72aa191dd0897f": "c1ae50d481b4d07b9a07cd277c76d406",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/010cda95492006dae3638dfb01a8d0822a1e6a": "04eb9fcdf209b67f396e5ab84cb956e2",
".git/objects/c6/4c00d9a56a99fe8735755b5409a6eed52872fd": "ca76483868d2773ce094ccea22dd4d61",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/27/38afa3ea494f62f39337c34561146637c49bc1": "db792365fb5a21def37e8e28a798e4b3",
".git/objects/11/54cce83839f91e4a63804274503b961d9c0780": "8691dad21f2f8e9167a112c6ded93875",
".git/objects/7c/7ac465906634182edff03533905be32d9553c6": "c670a8f36c2c0b420fac0b8d2a302f60",
".git/objects/42/c416f02952bacf23cce387bfbbc73fd4deb5ea": "1799759f472e3c5fe9b551388ca4eee0",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/87/ca1dd382bd70fba9aa9333c7b97562ce2cd97f": "81f1623787da18ff052198c8cc2afad7",
".git/objects/17/d762a9fd4bf470f29be2aa3fdadab9693e160d": "2fe36bf807534003f6163c3a1b3af95e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/26/31e1819c1b190325d0cb7e9706a0917895bda3": "92b14a91bd6c8bae8597b58bf2db089c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/6c428b1c3f444ad9d243426f559c38360b5d43": "9e1317bc7ff88fd33f009f7234bd88e3",
".git/objects/5d/15fadf1864d70c7184fca7d3efde79cdf68af5": "79a44d8578cc18e3add64aa6a97f0da0",
".git/objects/3a/493f1972a3cb89e1978d0589ec7e6023b34821": "7cd7f3f097e44f5dcb2f07e4f8d55077",
".git/objects/08/098241e922810af1b00a72a530745cf3a8af7d": "27ae8a03f6f53452a438821d4490153b",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/55/1d91184c01277c00373f6437037fdb4e25cf3d": "dd6e277fa6a64b69e18af1fadc70d5c9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/28a74405fe97df69b085ca0fc9bde48c3428ae": "2e278d6e27bd2ae4e0e81d9848d8e8ba",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/d5/76694fb3c493bc47ab2e42ba1db3a5e22e28d8": "77130b09b0f832a080d9ea69a57fe07e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/e16071c06b80217725da8a300b01a28e3f9c51": "2eec7f946131f85b27468ec2ac406f75",
".git/objects/ea/0a6cabbd528ec8f4b1de72e032e5980475cc46": "74c542e131d646b6d78e019021ec1a11",
".git/objects/cd/11e87ce3e89571e3f59025340af4e4fff993d9": "1560a25a02986e65db73f747bc11324e",
".git/objects/f7/248f839f0b393f38b59c915a696618868534a8": "a650b4d1344708271962d8f072d51f6c",
".git/objects/c2/67ecd4855980e309520cb912b876f385de20e7": "48acd0fbfe6c5940ec46dec85092343d",
".git/objects/e9/2b46bec421e3db2f1d4999886e08fc1af23130": "776869b0977f039b20713bc120fdbb2b",
".git/objects/f1/137d7a0247d19340e113dcff13c1a6f8ea954e": "10420ac471fe4c67c993b30a078b6b26",
".git/objects/e0/3f2ff8f95f0459063696c62ec9fe0d7fdd852a": "c96e07d2fcd1785b3f5472955f9a0fc3",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/c2127ce8ab5403234873b3ed99938c5f92549d": "30bdb75ee62e6ad81344fd1d5a374e64",
".git/objects/2c/57bdfa489c035918707d578d9273fadef6dec2": "6e9846d9edbc904578339a089464044a",
".git/objects/2d/4623da23bfef3f19095f601e597ec5c9015157": "cbf22db650eb9d80f8bf38446a090ec7",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/41/0383f258ff21ef212fb57b18b4c1d19674eb19": "64776b3e33e0d7b52655ac197e917894",
".git/objects/77/ca8617db4042d2c99e5a2cef6a88c9149b1a4c": "d99e45508e6f2f5329c15b66e739a8ab",
".git/objects/48/05586c8f04565c205c2a79df9596ee3b1f249e": "d59e7cd64c5df8b3b4fa2d50652d5c50",
".git/objects/48/efdb82c69b3cff13f3798c846b1fc9406caf82": "90238c8993a8849a2d8ba323f4c1f2c6",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/82/055b849c023871d3ad55d7334a22852e7ed0fc": "c733476a7107b66031f19f13e2fe71c6",
".git/objects/8e/0c3e4b9992c6ba5352118c73a15f39cfa2b4e3": "8f6123b11e6eb1fcdb8d23ed945c2824",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6ba5076ac731c84fdb7409ae726056b9",
".git/logs/refs/heads/master": "6ba5076ac731c84fdb7409ae726056b9",
".git/logs/refs/remotes/origin/master": "283291554e0b8c266946584124e9c35e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "28474beec242ebc8f2936989ccd15682",
".git/refs/remotes/origin/master": "28474beec242ebc8f2936989ccd15682",
".git/index": "46cf0cdae0e08cc0e1733862e8cfb731",
".git/COMMIT_EDITMSG": "7e1447d098f8c72339e97a8c6bc6a88e",
"assets/AssetManifest.json": "04591e19b76569dab5995e700e131642",
"assets/NOTICES": "804c0b4bd0760ee1d094fd6afa9171b1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "d53a94eddc7b908bf423ba1ff896b85b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "d554241eb802da25d24877cdb3c80cfb",
"assets/fonts/MaterialIcons-Regular.otf": "1040a041cd7faa59332858b740921bf6",
"assets/assets/images/logo3.gif": "4c6615ecb3ed7cf1f7bd79cd89515cff",
"assets/assets/images/logo2.gif": "019da8a5cb70f867b77f24ae0635c6d3",
"assets/assets/images/logo6.gif": "f891157fcd785cfad9428181497dff49",
"assets/assets/images/cardbg1.png": "a4ddac1e0797ae1f3fe626a52ce09c78",
"assets/assets/images/logo7.gif": "56533c0efd9e013eef854fd8f0fe1140",
"assets/assets/images/logo5.gif": "a1046ab73d5548c7832f39685a4ef3ae",
"assets/assets/images/cardbg2.png": "e7965391410709f7f60994bafb99afad",
"assets/assets/images/Comp.gif": "14d25220467f3d1b5fe8e305caf82a98",
"assets/assets/images/logo4.gif": "517cf5bde06050ef4e20d22d9f3e48c3",
"assets/assets/images/sub33.gif": "0d8c40b50af46fbadd480c2842af3eb2",
"assets/assets/images/card3.png": "6197286d1c82bdc0f0767b32e741028b",
"assets/assets/images/card2.png": "ee88eb024e2d8778668a7fecae440c36",
"assets/assets/images/logo1.png": "f64a8aa5f21304f86aa81b2ba51e19dc",
"assets/assets/images/card1.png": "2997febb2bba69a6d5cf8a66130d4c72",
"assets/assets/images/logo8.gif": "993056b2131fd20e5b751c32d584a73a",
"assets/assets/images/sub1.gif": "fa99eab9cf794ba949555ac02fc3e504",
"assets/assets/images/Comp22.gif": "d10f6972f899b6377ef3828855a9bbe9",
"assets/assets/images/whats.webp": "8f567958f6bea291de8bccb918ea6422",
"canvaskit/skwasm.js": "f17a293d422e2c0b3a04962e68236cc2",
"canvaskit/skwasm.js.symbols": "ab140650f4d351b74f4e6bca3e8dd0e0",
"canvaskit/canvaskit.js.symbols": "07c19b69fa5f53224712e8471c00344d",
"canvaskit/skwasm.wasm": "7fe5c39ff8466de52fbb0c66473abbe3",
"canvaskit/chromium/canvaskit.js.symbols": "100d192729121969872b80009e47a5b7",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.wasm": "f9074e52c7e9c770f1130c6ed9e2677f",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.wasm": "f312edac4fb4c74852dc1a4f069ab100",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
