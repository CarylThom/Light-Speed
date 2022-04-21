/**
 * @jest-environment jsdom
 */

 const { button } = require("../button");


 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game contains correct button", () => {
    test("button works", () => {
        expect("activateButton" in button).toBe(true);
    });
    
});