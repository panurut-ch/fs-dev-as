let count_consecutive = 0; // นับตัวเรียง
let prime_start = 2;

while (true) {
  let int_number = prime_start;
  let factor_array: number[] = []; // เก็บ prime
  let divide = 2;

  // หาร trial division
  // ตัวหารต้องไม่เกิน root 2 ของ int_number
  while (int_number > 1 && divide * divide <= int_number) {
    if (int_number % divide === 0) {
      if (!factor_array.includes(divide)) {
        factor_array.push(divide);
      }
      while (int_number % divide === 0) {
        int_number = int_number / divide;
      }
    }
    divide++;
  }

  // check dup
  if (int_number > 1) {
    if (!factor_array.includes(int_number)) {
    //   console.log("int_number", int_number);
      factor_array.push(int_number);
    }
  }

  if (factor_array.length === 4) {
    count_consecutive++;
    // console.log("count_consecutive", count_consecutive);
    if (count_consecutive === 4) {
      console.log(
        `${prime_start - 3} ${prime_start - 2} ${
          prime_start - 1
        } ${prime_start}`
      );
      break;
    }
  } else {
    count_consecutive = 0;
  }

  prime_start++;
}
