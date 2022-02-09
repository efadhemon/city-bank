// declaration the function name is cardDistribution
const cardDistribution = (persons) => {
    const cards = [];
    for (let i = 0; i < persons.length; i++) {
        const element = persons[i];
        const items = {
            cardNumber:
                element.district.toString().substr(0, 2).toUpperCase() +
                element.currentYear.toString().substr(-2) +
                element.postNo.toString().substr(0, 2) +
                element.birthYear.toString() +
                (i + 1).toString().padStart(6, "0"),
            gift: (i + 1) % 2 === 0 ? "R" : "W",
            priority: element.priority,
        };
        cards.push(items);
    }
    const sortedCard = cards.sort((a, b) => {
        return a.priority - b.priority;
    });
    return sortedCard;
};

// the person array
const persons = [
    {
        name: "Mr Rased",
        birthYear: 1999,
        currentYear: 2022,
        district: "Dhaka",
        postNo: 1200,
        priority: 2,
    },
    {
        name: "Mr Raju",
        birthYear: 1995,
        currentYear: 2022,
        district: "Rajshahi",
        postNo: 1211,
        priority: 1,
    },
    {
        name: "Mr Jahid",
        birthYear: 2015,
        currentYear: 2022,
        district: "Cumilla",
        postNo: 1615,
        priority: 4,
    },
    {
        name: "Mr Emon",
        birthYear: 2001,
        currentYear: 2022,
        district: "Manikganj",
        postNo: 1822,
        priority: 3,
    },
];

// call the function and log the returned values
console.log(cardDistribution(persons));
