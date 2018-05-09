const isLeapYear = require("../main.js")

describe("isLeapYear", ()=> {

    it("should return true when input 2000", ()=> {
        expect(isLeapYear(2000)).toBe(true)
    })
})

describe("isLeapYear", ()=> {

    it("should return false when input 1999", ()=> {
        expect(isLeapYear(1999)).toBe(false)
    })
})
