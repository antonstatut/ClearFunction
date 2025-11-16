export default function healthBar(character) {
  if (character.health > 50) {
    return 'healthy';
  }
  if (character.health <= 50 && character.health >= 15) {
    return 'wounded';
  }
  return 'critical';
}
const hero = { name: 'Маг', health: 90 };
healthBar(hero);
