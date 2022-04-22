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

describe("activateButton key exists", () => {
    test("button works", () => {
        expect("activateButton" in button).toBe(true);
    });

    test("startGame key exists", () => {
       expect("startGame" in button).toBe(true);
        
    });
    test("button choices contain correct name", () => {
        expect(button.choices).toEqual(["button-purple", "button-green", "button-blue", "button-orange"]);
});
});

