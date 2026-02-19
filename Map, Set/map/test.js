import { ErrorRepository } from './index.js';

describe('ErrorRepository', () => {
  let repo;

  beforeEach(() => {
    repo = new ErrorRepository();
  });

  test('MapError', () => {
    expect(repo.errors).toBeInstanceOf(Map);
    expect(repo.errors.size).toBeGreaterThan(0);
    expect(repo.errors.get(404)).toBe('Страница не найдена');
  });

  test('translate_1', () => {
    expect(repo.translate(404)).toBe('Страница не найдена');
    expect(repo.translate(500)).toBe('Внутренняя ошибка сервера');
    expect(repo.translate(401)).toBe('Не авторизован');
  });

  test('Unknown error', () => {
    expect(repo.translate(999)).toBe('Unknown error');
    expect(repo.translate(0)).toBe('Unknown error');
    expect(repo.translate(null)).toBe('Unknown error');
    expect(repo.translate(undefined)).toBe('Unknown error');
  });

  test('translate_2', () => {
    // Но по ТЗ код — число, так что это "на всякий случай"
    expect(repo.translate('404')).toBe('Unknown error'); // потому что '404' !== 404
  });

  test('newError', () => {
    repo.errors.set(418, 'Я чайник');
    expect(repo.translate(418)).toBe('Я чайник');
  });
});