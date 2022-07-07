describe("YouTube Api", function () {
    it("API result length is as expected", function () {
      return getResponse("Epam").then(function (result) {
        expect(result.length).toEqual(15);
      });
    });
  
    it("noOfPage is working as expected", () => {
      const res = noOfPage(50);
      expect(res).toEqual(10);
    });
  
    it("nextPage is Working as expected", () => {
      const res = nextPage(5);
      expect(res).toBe(6);
    });
  
    it("previousPage is working as expected", () => {
      const res = previousPage(5);
      expect(res).toBe(4);
    });
  });
  