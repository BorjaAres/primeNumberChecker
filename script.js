let num = prompt('Enter a number');
let isPrime = true;

for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
        isPrime = false;
        break;
    }
}

if (isPrime) {
    document.getElementById('myDiv1').innerHTML = 'The number is prime.';
} else {
    document.getElementById('myDiv2').innerHTML = 'The number is not prime.';
}
