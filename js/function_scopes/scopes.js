const a = 1;
const b = 2;
const c = 3;

function firstFunction() {
  const b = 5;
  const c = 6;

  function secondFunction() {
    const b = 8;

    function thirdFunction() {
      const a = 7;
      const c = 9;
      console.log(`a: ${a}, b: ${b}, c: ${c}`);

      function fourthFunction() {
        const a = 1;
        const c = 8;
      }

      fourthFunction();
    }

    thirdFunction();
  }

  secondFunction();
}

firstFunction();

// a:1, b:8, c:6 -- second function after const b
// a:3, b:8, c:8 -- a never defined as 3 -- only place would be fourth function a = 3; then place in fourth function after const c
// a:1, b:5, c:6 -- first function after const c
// a:7, b:8, c:9 -- third function after const c
