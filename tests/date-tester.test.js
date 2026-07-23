import {describe, it, expect} from 'vitest'
const {getMonthYearFromDate} = require("../controllers/memory-controller")

describe("getMonthYearFromDate", () => {
    it("returns correct month and year for a given date", () => {
        const result = getMonthYearFromDate("2026-3-15")
        expect(result.month).toBe(3)
        expect(result.year).toBe(2026)
    })
})