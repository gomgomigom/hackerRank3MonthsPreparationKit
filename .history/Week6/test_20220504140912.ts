{
  console.clear();

  const KEROSINE_PER_LITTER: number = 1850;
  const FUEL_EFFICIENCY: number = 10;
  const TOLL: number = 2000;
  const WORK_DAYS: number = 16;

  const DJ_TO_MJ: number = 18;
  const KJ_TO_MJ: number = 50;

  const kilometerPerWon: number = KEROSINE_PER_LITTER / FUEL_EFFICIENCY;

  const cost = (place: number, tollgate: number = 0): number => {
    let result =
      place * 2 * WORK_DAYS * kilometerPerWon + tollgate * 2 * WORK_DAYS;

    return result;
  };

  const numToWon = (number: number): string => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  };

  console.log(`대저에서 명지 한달 출퇴근 비용: ${numToWon(cost(DJ_TO_MJ))}`);
  console.log(
    `기장에서 명지 한달 출퇴근 비용: ${numToWon(cost(KJ_TO_MJ, TOLL))}`
  );

  console.log(
    `대저, 기장 출퇴근 비용 차이: ${numToWon(
      Math.abs(cost(DJ_TO_MJ) - cost(KJ_TO_MJ, TOLL))
    )}`
  );
}
