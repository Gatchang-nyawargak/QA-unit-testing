const { sendWelcomeEmail } = require('./notificationService');

test('send() is called once with correct email', () => {
  const emailService = { send: jest.fn() };
  const user = { email: 'john@example.com' };

  sendWelcomeEmail(emailService, user);

  expect(emailService.send).toHaveBeenCalled();
  expect(emailService.send).toHaveBeenCalledTimes(1);
  expect(emailService.send).toHaveBeenCalledWith('john@example.com', 'Welcome!');
});
