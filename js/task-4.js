console.log("----------------- TASK 4 -------------------")
const clients = [
	{
        name: "Moore Hensley",
        gender: "male",
        balance: 2811
    },
    {
        name: "Sharlene Bush",
        gender: "female",
        balance: 3821
    },
    {
        name: "Ross Vazquez",
        gender: "male",
        balance: 3793
    },
    {
        name: "Elma Head",
        gender: "female",
        balance: 2278
    },
    {
        name: "Carey Barr",
        gender: "male",
        balance: 3951
    },
    {
        name: "Blackburn Dotson",
        gender: "male",
        balance: 1498
    },
    {
        name: "Sheree Anthony",
        gender: "female",
        balance: 2764
    }
];

const getTotalBalanceByGender = (array, element) => {
    const result= array.filter(number => number.gender === element).reduce((summ, el) => { return summ + el.balance; }, 0);
    return result;    
};

console.log(getTotalBalanceByGender(clients,"male"));
console.log(getTotalBalanceByGender(clients, "female"));
