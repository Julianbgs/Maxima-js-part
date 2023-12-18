let userService = {
    currentStatus: 'active',
    users: [
        {name: 'John', status: 'active'},
        {name: 'Alex', status: 'disable'}
    ],
    getUserActive: function () {
        return this.users.filter(function (user) {
            return user.status === this.currentStatus;
        }.bind(this))
    }
}

console.log(userService.getUserActive())