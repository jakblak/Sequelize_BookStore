'use strict';

module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    title: DataTypes.STRING
  });

  return Favorite;
};
