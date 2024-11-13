//1

for (let i=1; i > 0 && i <= 100; i++)
{
    if(i%3==0)
        console.log("Fizz");

    if(i%5==0)
        console.log("Buzz");

    if (!(i%3==0 || i%5==0))
        console.log(i);
}


//2

let input=8;    //arbitrary number

console.log(findNextPrime(input));

function findNextPrime(num)
{
    if(num < 2)
        return 2;
    else if(num==2)
        return 3;

    for (; !isPrime(++num); ) 
    {  }

    return num;    
}

function isPrime(num)
{
    for (let i = 2; i <= num; i++)
    {
        if(number%i == 0)
            return false;
    }
    return true;
}