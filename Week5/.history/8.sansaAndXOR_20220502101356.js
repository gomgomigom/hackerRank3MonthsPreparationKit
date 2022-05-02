'use strict';

console.clear();

function sansaXor(arr) {
  const newArr = [...arr];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      newArr.push(arr.slice(i, j + 1));
      // console.log(newArr);
    }
  }
  const result = newArr.reduce((pre, cur) => {
    typeof cur === 'object'
      ? (cur = cur.reduce((pre, cur) => pre ^ cur))
      : null;
    return pre ^ cur;
  });
  return result;
}

console.log(sansaXor([1, 2]));
console.log(sansaXor([4, 5, 7, 5]));

let a =
  '66883216 60590064 72549281 67797140 9155639 89942780 38252256 9142188 8169392 30012558 56751465 52723784 32885542 7877091 37012676 14836134 89510558 34068531 78674359 88591194 45726063 74378463 72549037 93212653 35384179 81781558 28932538 71459029 97951670 37638565 3984080 17351239 98228629 76533361 37664731 7384268 18992494 75916987 69042808 79678238 58445898 25794273 32402022 91331440 86187717 69414698 58683926 28214627 55999582 37358285 69322174 54241997 64253101 41871211 47454650 99637280 23652770 28903540 71096309 74120792 66542105 27596742 43988383 17287086 4130103 81653114 77187706 75638949 57570102 98746866 55317187 16016000 77057492 87719209 59863792 63245209 9650260 18547718 43976188 18166194 8422356 13298362 72408191 72675457 55169574 72379194 72312737 31338696 53799086 95925398 57975840 72857544 23522140 1964224 90144630 80168596 83617338 19848689 8323897 93703792 18595555 63641085 62236144 95653047 3876646 22099936 11414608 13526906 93164007 55390797 31693100 1586363 68689159 56617644 74261820 76375085 28996838 99090909 60230133 82795924 47532659 18205974 55653468 23571152 72686550 98314451 56256100 8820240 18163140 64579997 55040385 36758695 80737434 17276529 32411743 84614081 91892818 96342703 50657339 85056825 51733500 34866792 39159540 20422660 91484436 65937712 49314097 20481274 17544973 9544231 55793550 65077632 80266557 11447019 41165136 5469459 62277822 97421236 14289699 80440962 14517586 21846436 69716009 95255020 39122966 54644104 79869101 31015784 50986808 83042793 68588961 2720308 17909585 7748501 75659320 9394021 73686213 24973418 82391647 91231186 87034001 38185197 8825170 67300558 2148568 49990307 72770017 16942742 99927895 39576068 97383704 66961833 61422505 19616066 62216854 53061823 74260170 94602307 84077607 25246978 77645100 5182920 80483639 95554685 12931421 8659311 57465058 39133986 33632729 39856705 82881524 73183082 30558255 91706694 40483640 32706823 94213353 65770009 2165918 46657601 57862430 99549622 13619434 71801287 19165688 75836288 24863110 45942211 22954948 61457069 23705541 600048 19156341 4189180 48671086 32087762 12848492 6136144 23738100 98997573 98509202 6619624 72180656 29067457 98326318 65180648 14290632 45056024 83467010 16456550 91713625 41329440 16006173 57849411 65647079 87688213 86202052 43026541 33630424 9157000 56999962 57335966 62273400 76156303 14041498 10944486 8244065 79406342 69596983 31982165 78403916 68106185 91118141 3100924 97173642 41960811 20797924 63980626 87016835 4264934 80437177 31246812 98110726 48959702 89096224 63757805 89164267 75298276 59300698 22794692 36971628 16300660 32647010 99245028 92456963 99204860 62705867 53217380 78611203 32302850 37715897 9531471 52925387 28834038 65148747 2615381 70794850 85946671 66596007 57811685 42727958 47033184 41574850 40838684 95992886 30671074 57112842 85157154 58485702 16413540 60468198 95457330 32714201 45631560 47218710 77687516 44836420 9924577 30904897 75963975 94743779 68620794 38011798 47669166 49971185 3160545 50284547 20766035 89107217 16880555 31094072 84351527 16430091 72668922 25190211 12422978 55856348 34819405 50096484 14342050 3749298 63081034 62315732 88979851 8712594 9534443 66667367 6065366 19459020 50088616 34545694 66719152 18709411 72557492 14388318 21196948 75718038 17189218 41962983 17341607 86586125 25573407 1693134 3016216 50758682 79399697 67955546 6615030 14219103 70568382 73473433 17968401 33649416 35789165 59464604 94878362 97839960 26131971 943729 17298981 76220588 88005775 84018133 47446351 60563267 50922803 68643299 88797657 20628373 63122634 58655616 7214498 41212393 60348750 62747067 91971075 92264800 30702613 51102458 59000255 1270996 77092243 29485008 34920412 65397760 88949612 82315127 63237721 15081583 83258856 33053054 43818523 23780983 69587539 43781226 84344250 20510342 12424525 25658260 93655068 28063511 84313876 869566 21792257 97178979 63616633 13763332 89443779 46835599 17382142 960386 48106595 46990737 30445394 35543359 12388498 19395006 17858486 28142571 86992941 53633694 61195625 83327817 77414677 30783164 27109043 14275280 3809858 92049921 39933540 97464926 20113432 76763768 98334493 41905689 73942747 14467478 8185374 15902878 61303077 78083868 16863264 61926024 77590958 47308658 97469384 89979456 19220016 67844222 18122027 58729310 21477917 79317652 42057127 51408946 62617168 21682522 18200578 66427026 13732443 58134118 63891953 86362228 87414239 14742798 80784269 61356986 29210276 88969643 77259865 90513354 19569864 46639481 4955730 97160822 93948140 2425114 39656630 65684508 22785689 10295009 24413818 96779958 42129013 18987297 48188904 4746181 40669820 66389483 71173207 54402263 77039953 35065160 40764491 64454192 49807958 21548761 78327531 31534587 63034756 8103748 74564293 35120972 54743229 79520023 84798146 1207721 34461490 24454776 66892230 57247179 34749785 43822400 54027137 29395150 62809698 54732393 34141331 3479518 21121876 5314539 10398133 50678182 92896051 3678977 67648726 95220362 77744090 45976257 26754949 93295198 6596357 53835594 28416171 61339587 33355617 13214317 62547308 67817107 90185446 29439538 77580638 77451583 25778291 31607775 6846734 88587989 86340169 93504417 44583859 59978397 51335308 7498344 10656579 44231360 11177321 30821658 91968074 41437763 29314267 71239375 34732962 35910625 25074969 15665485 97250212 10946938 81396154 12313872 78764046 24097952 94269763 56344684 1549536 20048054 40468812 60912622 61152395 26808981 54417039 5736254 39303730 5752348 65750950 2476662 2500060 29444624 33298320 46984486 70882387 15128939 70740213 58131701 51039564 95815182 73797186 806128 59278472 7709693 13120001 38042518 31807645 59906116 46903555 85873533 32470522 39888719 46786155 93622917 19214052 53719547 51875523 58517782 11988247 17626473 60994444 14488307 47071097 46809116 13989145 70469837 61938056 84729358 28601538 12977620 33060892 54915077 66300101 92339364 62624770 31936454 82898235 46948767 91842570 82318142 32822301 24313092 22206861 79608456 70452361 41420913 85844355 22327884 99938695 97832602 92470709 13449492 12320909 39541807 60258608 78826406 62527996 74713016 16072116 43645886 40206989 49133008 51077315 6507090 93988725 66218437 90959896 76886960 13167205 82802466 11721454 45989506 59631910 33928315 78114314 30084271 27865580 63958670 4928507 80320627 61791272 97399216 93770119 26628534 89457375 6545080 57971292 51985371 33774448 74043409 48147610 73981437 23176417 99224925 33004879 17165142 17959715 23964775 46568454 31126920 59283593 58289908 29632778 18915503 44734575 60263444 1516126 25116507 76738466 6444633 5437135 38529739 3843850 51723606 17674625 93301225 10785038 28162269 97802949 44559487 2205678 45950559 71057276 77898448 97691836 4062156 47579942 15651551 28026931 94148397 46778471 39826877 4954657 28927601 58742380 2205585 89191046 60258507 27322092 65929512 19219492 85275579 56975603 23063342 36999186 27166580 16364568 47784224 55328850 14167517 44860063 57534528 12634428 15917340 35432976 10326264 72495848 35529271 25977816 53039131 29677668 25272639 92866008 87148677 54200241 4124741 41870614 95907639 16899600 21709059 61837151 36119092 6984638 71329107 59182435 43983824 51012039 28063355 44284401 6340889 94747224 41660816 16391770 59898004 10094508 4341098 70224268 82590356 39870369 96202084 88145840 22064389 73991076 81011848 61729419 28191317 85136589 3600033 24098956 2036189 25309092 38452459 38155282 84810083 62297918 49854069 28793907 13309958 30433776 25594660 72167199 77697352 67255477 88558969 37595356 29866337 45416420 7819624 12456694 37803141 56538061 602534 59867531 30529137 34130734 74113302 11236806 19267324 77713335 87852114 73819865 55538780 78820925 11975147 40348863 41118844 14345568 21659122 6945154 44779344 99770135 31628705 22476696 19541964 20187675 60072052 49408301 18120447 20408029 14381347 55923588 76946090 67500233 15791119 59991579 1630968 42420773 23744737 73414644 20134109 11596851 47234509 28189241 90417776 11726009 21054456 84052972 26071577 95229930 43514478 23367274 95000065 75143184 98360322';

a = a.split(' ');
// console.log(sansaXor(a));

console.log('---');
let b = [1, 2, [1, 2]];

let test = b.reduce((pre, cur) => {
  console.log(`pre: ${pre} //  cur: ${cur} // pre ^ cur: ${pre ^ cur}`);
  console.log(typeof cur);
  typeof cur === 'object' ? (cur = cur.reduce((pre, cur) => pre ^ cur)) : null;
  return pre ^ cur;
});
console.log(test);
console.log(1 ^ 2 ^ 1 ^ 2);
