const students = [
    {
        id: 19001,
        name: 'mahfuz rp',
        dept: 'computer'
    },
    {
        address: {
            street: {
                first: '21/A Chaultali',
                second: 'Miarhat Bazer',
                third: '3rd Floor'
            },
            city: 'Barishal',
            country: 'Bangladesh'
        },
        parents: {
            father: 'Abul Kalam',
            mother: 'Rokeya Begum'
        }
    }
]
const homeFloor = students[1].address.street.third;
console.log(homeFloor);