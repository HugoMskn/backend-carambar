module.exports = (sequelize, DataTypes) => {
	  const Joke = sequelize.define('Joke', {
		      content: {
			            type: DataTypes.STRING,
			            allowNull: false
			          }
		    });
	  return Joke;
};
