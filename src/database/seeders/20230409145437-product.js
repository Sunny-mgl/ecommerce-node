'use strict';

const getTime = (timestamp) => {
  const millis = timestamp * 1000
  const date = new Date(millis)
  return date.toLocaleString()
}

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:  */
      await queryInterface.bulkInsert('products', [
        {
          name: "laptop HP",
          description: "newer model, this laptop was developed to be faster and user-friendly",
          price: 1000,
          availableQty: 20,
          userId: 1,
          status: true,
          productImage: "hdialib/prodimg/lowres/c06571301.png",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now())
        },
        {
          name: "Desktop LG ",
          description: "Desktop Computer, Hard Drive Capacity: 1 TB",
          price: 1200,
          availableQty: 10,
          userId: 1,
          status: true,
          productImage: "https://5.imimg.com/data5/SELLER/Default/2022/12/FN/ZL/OJ/3866941/desktop-computer-500x500.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now())
        },
        {
          name: " iPhone 14 Pro Max",
          description: " Experience iPhone in a whole new way with Dynamic Island and Always-On display. Crash Detection, a new safety feature, calls for help when you can’t",
          price: 800,
          availableQty: 25,
          userId: 2,
          status: true,
          productImage: "https://www.alephksa.com/wp-content/uploads/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1a_EN-1-scaled.jpg",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now())
        },
        {
          name: "Galaxy Z Flip4",
          description: "It's a compact smartphone and just the right size to slip into your pocket when it's time to rock",
          price: 700,
          availableQty: 55,
          userId: 5,
          status: true,
          productImage: "https://images.samsung.com/is/image/samsung/assets/latin/2208/pfs/02-01-B4-kv-FlexCam-mo-720x540.jpg?$FB_TYPE_J_F_MO_JPG$",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now())
        },
        {
          name: "Lavadora automática LG",
          description: "Lavadora automática LG WM22 inverter acero 22kg 120 V",
          price: 750,
          availableQty: 35,
          userId: 4,
          status: true,
          productImage: "https://http2.mlstatic.com/D_NQ_NP_970366-MLA48088330911_112021-O.webp",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now())
        },
        {
          name: "Secadora de Ropa a Gas",
          description: "Secadora de Ropa a Gas LG 21 Kgs - 46 Lbs Conexión 110v DT21VS",
          price: 850,
          availableQty: 25,
          userId: 4,
          status: true,
          productImage: "https://electromegaecuador.com/wp-content/uploads/2022/05/SECADORA-DE-GAS-LG-DT21VS.png",
          createdAt: getTime(Date.now()),
          updatedAt: getTime(Date.now())
        },
        
      ], {});
  
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:   */
     await queryInterface.bulkDelete('products', null, {});
  
  }
};
