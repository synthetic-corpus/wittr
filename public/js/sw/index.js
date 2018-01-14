
self.addEventListener('fetch', function(event) {
  // TODO: only respond to requests with a
  // url ending in ".jpg"
  let suffix = event.request.url.slice(-4);
  if (suffix === '.jpg'){
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
    );
  }
  
});