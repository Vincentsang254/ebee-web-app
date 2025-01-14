import { DataTypes } from 'sequelize';
import { sequelize } from './index.js';

const CartProducts = sequelize.define('CartProducts', {
  cartId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Carts',
      key: 'id',
    },
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Products',
      key: 'id',
    },
  },
});

export default CartProducts;
