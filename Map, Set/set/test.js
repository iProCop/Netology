import { Team } from './index.js';

// Создаём "персонажей" — обычные объекты
const hero1 = { name: 'Артур', type: 'warrior' };
const hero2 = { name: 'Мерлин', type: 'mage' };
const hero3 = { name: 'Ланселот', type: 'knight' };

describe('classTeam', () => {
  let team;

  beforeEach(() => {
    team = new Team();
  });

  test('Set', () => {
    expect(team.members).toBeInstanceOf(Set);
    expect(team.members.size).toBe(0);
  });

  test('add', () => {
    team.add(hero1);
    expect(team.members.size).toBe(1);
    expect(team.members.has(hero1)).toBe(true);
  });

  test('addDublicate', () => {
    team.add(hero1);
    expect(() => team.add(hero1)).toThrow('Персонаж уже добавлен в команду');
  });

  test('addAll', () => {
    team.addAll(hero1, hero2, hero3);
    expect(team.members.size).toBe(3);
    expect(team.members.has(hero1)).toBe(true);
    expect(team.members.has(hero2)).toBe(true);
    expect(team.members.has(hero3)).toBe(true);
  });

  test('addAllIgnore', () => {
    team.addAll(hero1, hero2, hero1, hero3, hero2);
    expect(team.members.size).toBe(3);
  });

  test('addAllNull', () => {
    team.addAll();
    expect(team.members.size).toBe(0);
  });

  test('toArrayLook', () => {
    team.addAll(hero1, hero2);
    const array = team.toArray();
    expect(Array.isArray(array)).toBe(true);
    expect(array).toHaveLength(2);
    expect(array).toContain(hero1);
    expect(array).toContain(hero2);
  });

  test('toArrayNull', () => {
    const array = team.toArray();
    expect(array).toEqual([]);
  });

  test('Error_1', () => {
    team.addAll(hero1);
    expect(() => team.add(hero1)).toThrow('Персонаж уже добавлен в команду');
  });

  test('Error_2', () => {
    team.add(hero1);
    team.addAll(hero2, hero3);
    expect(team.members.size).toBe(3);
    expect(team.toArray()).toEqual([hero1, hero2, hero3]);
  });

  test('toArrayNumbers', () => {
    team.add(hero1);
    team.add(hero2);
    const array = team.toArray();
    expect(array[0]).toBe(hero1);
    expect(array[1]).toBe(hero2);
  });
});