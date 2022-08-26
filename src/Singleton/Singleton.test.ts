import Singleton from "./Singleton";

describe("Singleton tests", () => {
  it("should return the same object", () => {
    const object1 = Singleton.getInstance();
    const object2 = Singleton.getInstance();

    expect(object1).toBe(object2);
    expect(object2).toBeInstanceOf(Singleton);
  });
});
