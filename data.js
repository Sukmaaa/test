let result = "";
const input = 50;

for (let i = 1; i <= input; i++) {
  if (i == input) {
    result += `Backend`; //i = 50 result backend
  } else if (i % 15 == 0) {
    result += `Frontend Backend,`; //i sisa hasil bagi 15 30 45
  } else if (i % 3 == 0) {
    result += `Frontend,`; //i sisa hasil bagi 3 6 9 12 dst -> 48
  } else if (i % 5 == 0) {
    result += `Backend,`;//i sisa hasil bagi 5 10 20 25 dst -> 40
  } else {
    result += `${i},`;  //return hasil 1/2 apakah termasuk hasil bagi 15, 3, dan 5? 
    //tidak, tampilkan 1 dan 2. 3 apakah termasuk? 
    //ya, tampilkan result sisa hasil bagi 3 yaitu frontend
    //4 termasuk? tidak tampilkan 4. 5 termasuk? 
    //tampilkan hasil sisa bagi 5 yaitu backend 
    //dst

  }
}

//hasil
//1,2,Frontend,4,Backend,Frontend,7,8,Frontend,Backend,11,Frontend,13,14,Frontend 
//Backend,16,17,Frontend,19,Backend,Frontend,22,23,Frontend,Backend,26,Frontend,28,29,Frontend 
//Backend,31,32,Frontend,34,Backend,Frontend,37,38,Frontend,Backend,41,
//Frontend,43,44,Frontend Backend,46,47,Frontend,49,Backend

console.log(result);