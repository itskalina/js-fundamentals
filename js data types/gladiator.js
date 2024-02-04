function gladiator(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice){

    let helmetRepairs = (lostFights - (lostFights % 2)) / 2;

    let swordRepairs = (lostFights - (lostFights % 3)) / 3;

    let shieldRepairs = (lostFights - (lostFights % 6)) / 6;

    let armorRepairs = (shieldRepairs - (shieldRepairs % 2)) / 2;

    let expenses = helmetPrice * helmetRepairs + swordPrice * swordRepairs + shieldPrice * shieldRepairs + armorPrice * armorRepairs;

    console.log(`Gladiator expenses: ${expenses.toFixed(2)} aureus`);
}
gladiator(23, 12.50, 21.50, 40, 200);
