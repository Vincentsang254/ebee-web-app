
import pkg from 'sequelize';
import { sequelize } from './index.js';

const { DataTypes } = pkg;

  const Notifications = sequelize.define("Notifications", {

		userId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: "Users",
				key: "id",
			},
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		content: {
			type: DataTypes.TEXT,
			allowNull: false,
		},
		is_read: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
	});

	Notifications.associate = (models) => {
		Notifications.belongsTo(models.Users, {
			foreignKey: "userId",
			onDelete: "cascade",
		});
	};

	export default Notifications
