import mocks from '../src/mocks';

describe("Snapshots", () => {
  test("Rick has right surname", () => {
    expect(mocks.CHARACTERS.rick).toMatchSnapshot()
  })
})