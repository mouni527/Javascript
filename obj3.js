const person = {
    firstName: 'hr',
    lastName: 'mr',
    greet: function () {
    console.log('Hello, World!');
    },
    getFullName: function () {
    return this.firstName + ' ' + this.lastName;
    }
    };
    console.log(person);