'use strict';

console.clear();

function balancedSums(arr) {
  let result;
  arr.forEach((value, midIndex) => {
    const left = arr.reduce((pre, cur, index) => {
      if (index < midIndex) {
        return pre + cur;
      } else {
        return pre;
      }
    });
    const right = arr.reduce((pre, cur, index) => {
      if (index > midIndex) {
        return pre + cur;
      } else {
        return pre;
      }
    }, 0);
    if (left === right) {
      return (result = 'YES');
    }
  });
  if (!result) {
    result = 'NO';
  }
  return result;
}

function balancedSums2(arr) {
  let left = 0;
  let right = 0;
  right = arr.reduce((a, b) => a + b);
  console.log(arr);
  arr.reduce((pre, cur, index, arr) => {
    console.log(`pre: ${pre}, cur: ${cur}, index: ${index}`);
    left += pre;
    right -= pre;
    console.log(left, right);
    return cur;
  }, 0);

  return;
}

let quiz =
  '1507 1780 958 818 1692 890 1535 2027 1009 1327 1480 1470 1869 1735 1311 1757 1413 2014 1778 651 1292 1251 1598 1681 1340 1768 1432 1228 1332 884 1656 1709 1813 1569 873 680 1764 1998 1595 1477 1180 1181 1073 1075 905 1750 1572 1296 1245 1603 1357 1458 1582 978 1487 1185 934 1302 1899 1386 1858 1510 809 1182 996 941 1878 816 1506 872 2000 1691 1700 907 1372 1594 665 1260 1873 654 1795 1687 1771 1964 1814 2039 1879 1787 1532 1667 1453 1034 1492 1087 786 1385 1968 2007 71 514 398 442 344 241 250 364 342 438 415 269 360 386 342 360 216 375 332 225 436 441 317 383 515 449 213 296 432 457 263 312 217 465 346 498 453 484 290 223 367 504 401 228 313 374 291 416 326 315 412 200 352 490 494 389 387 267 253 217 360 529 317 219 331 445 484 455 309 525 221 319 286 290 470 280 349 523 279 349 511 231 408 267 492 211 223 528 246 494 400 488 220 387 495 483 436 294 430 433 201 523 360 420 241 262 399 510 388 369 458 308 312 274 236 464 347 282 227 216 329 230 270 220 267 186 496 480 328 401 187 284 392 203 514 223 451 306 285 368 498 460 336 387 467 388 429 237 253 333 338 220 245 311 450 313 284 313 292 450 327 272 270 348 525 486 194 217 196 340 404 400 256 477 182 528 366 233 343 200 202 478 293 410 502 202 363 276 441 235 247 414 422 377 393 502 266 260 198 191 433 324 439 373 509 415 307 378 349 354 260 281 391 409 263 282 439 458 511 291 238 494 194 483 504 256 200 245 338 336 318 485 401 265 464 411 273 339 296 358 234 266 349 203 519 305 248 423 494 184 478 313 374 410 424 205 381 428 198 350 206 280 349 481 524 451 249 455 369 327 471 183 231 470 264 322 395 294 352 185 373 202 473 355 321 487 301 388 186 261 471 419 397 318 439 229 446 434 189 416 440 269 318 345 516 380 259 190 229 264 284 517 223 342 190 219 404 478 334 205 430 235 312 522 415 352 308 471 448 491 216 330 474 333 308 197 359 242 485 484 263 475 319 385 292 387 503 511 301 410 418 407 245 210 483 354 517 377 213 211 481 340 363 346 251 213 202 233 454 263 386 295 216 516 281 495 189 350 339 406 346 475 193 419 347 203 210 368 246 438 237 399 253 247 196 187 440 383 506 407 448 288';

const arr = quiz.split(' ');

console.log('-----');
// console.log(balancedSums(arr));
console.log('yes');
console.log('-----');
console.log(balancedSums2([1, 2, 3]));
console.log('no');
console.log('-----');
console.log(balancedSums2([1, 2, 3, 3]));
console.log('yes');
console.log('-----');
console.log(balancedSums2([1, 2, 3, 3]));
console.log('yes');
console.log('-----');
console.log(balancedSums2([1, 1, 4, 1, 1]));
console.log('yes');
console.log('-----');
console.log(balancedSums2([2, 0, 0, 0]));
console.log('yes');
console.log('-----');
console.log(balancedSums2([0, 0, 2, 0]));
console.log('yes');
