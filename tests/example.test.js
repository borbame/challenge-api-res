const { describe, it, before } = require("mocha");
const { expect } = require("chai");

describe("should make test", () => {
  it("return ok", () => {
    expect(true).to.be.ok;
  });
});
