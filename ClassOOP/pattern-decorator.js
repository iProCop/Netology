function slow(x) {
   alert(`Called with ${x}`);
   return x;
;}

function withCache(func) {
   let cache = new Map;
   return function(x) {
      if(!cache.has(x)) {
         let result = func(x);
         cache.set(x, result);
      }

      return cache.get(x);
   };
}