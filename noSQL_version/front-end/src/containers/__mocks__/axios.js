export default {
  ge: jest.fn().mockResolvedValue({ data: {} }),
  create: () => new Promise(() => {})
};

jest.mock("react-chartjs-2", () => ({
  Bar: () => null
}));
