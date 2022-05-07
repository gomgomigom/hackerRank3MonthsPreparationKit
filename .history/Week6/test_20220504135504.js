'use strict';

console.clear();

const KEROSINE_PER_LITTER = 1850;
const FUEL_EFFICIENCY = 10;
const TOLL = 2000;
const WORK_DAYS = 16;

const DJ_TO_MJ = 18;
const KJ_TO_MJ = 50;

const kilometerPerWon = KEROSINE_PER_LITTER / FUEL_EFFICIENCY;

const cost = (place, tollgate = 0) => {
  let result = place * 2 * WORK_DAYS * kilometerPerWon + tollgate * 2;
  result = result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return result + '원';
};

console.log(`대저에서 명지 한달 출퇴근 비용: ${cost(DJ_TO_MJ)}`);
console.log(cost(KJ_TO_MJ));
