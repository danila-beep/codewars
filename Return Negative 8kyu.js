//solution
function makeNegative(num) {
    if (num > 0){
      return num * -1;
    } else{
      return num
    }
  }

//sample test
const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(makeNegative(42), -42);
  });
});