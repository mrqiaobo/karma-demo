describe("A suite of basic functions", function() {
    it("reverse word",function(){
        expect("DCBA").toEqual(reverse("ABCD"));
    });
});

describe("A test of trim function", function() {
    it("trim string", function() {
        expect("ABCD").toEqual(trim("ABCD "));
    })
})