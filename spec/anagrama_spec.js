const anagrama = require("../lib/anagrama")

describe("anagrama", ()=> {

    it("should return [] when input empty", ()=> {
        expect(anagrama()).toEqual([])
    })
})

describe("anagrama", ()=> {

    it("should return a when input a", ()=> {
        expect(anagrama('a')).toEqual(['a'])
    })
})
