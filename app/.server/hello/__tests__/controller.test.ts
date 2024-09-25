import { HelloController } from '../controller';

test('Controllerが正しいレスポンスを返す', async () => {
  const result = await HelloController();
  expect(result).toEqual({ message: 'Hello Component' });
});
