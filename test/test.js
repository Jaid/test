import {expect, it} from "@jest/globals"

import path from "node:path"
import {fileURLToPath} from "node:url"

const dirName = path.dirname(fileURLToPath(import.meta.url))
const indexPath = process.env.MAIN ? path.resolve(dirName, "..", process.env.MAIN) : path.join(dirName, "..", "src")

/**
 * @type { import("../src") }
 */
const {default: test} = await import(indexPath)

it("should run", () => {
  expect(test(5)).toBe(6)
})