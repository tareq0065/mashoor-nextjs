module.exports = {
  useParams: () => ({}),
  useRouter: () => ({ push: jest.fn(), replace: jest.fn() }),
};
