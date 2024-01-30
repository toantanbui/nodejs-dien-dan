module.exports = {
    up: function (queryInterface, Sequelize) {
        return Promise.all([queryInterface.addColumn(
            'Users',
            'background',
            Sequelize.BLOB('long'),
        ),
        ])
    },

    down: function (queryInterface, Sequelize) {
        // logic for reverting the changes
    }
};