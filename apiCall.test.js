const { getUsers } = require('./apiCall');

test('returns mocked users and API called once', async () => {
  const mockUsers = [{ id: 1, name: 'Alice' }];
  const api = { fetchUsers: jest.fn().mockResolvedValue(mockUsers) };

  const result = await getUsers(api);

  expect(result).toEqual(mockUsers);
  expect(api.fetchUsers).toHaveBeenCalledTimes(1);
});
