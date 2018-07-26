const menu = {
    _courses: {
      _appetizers: [], 
      _mains: [],
      _desserts: [], 
      get appetizers() {
        return this._appetizers;
      }, 
      set appetizers(newAppetizer) {
        this._appetizer = newAppetizer;
      }, 
      get mains() {
        return this._mains;
      }, 
      set mains(newMain) {
        this._mains = newMain;
      }, 
      get desserts() {
        return this._desserts;
      }, 
      set desserts(newDessert) {
        this._desserts = newDessert;
      }
    }, 
    get courses() {
      return {
        appetizers: this._courses.appetizers, 
        mains: this._courses.mains,
        desserts: this._courses.desserts
      }
    }, 
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName, 
        price: dishPrice
      };

      this._courses[courseName].push(dish);

    }, 

    getRandomDishFromCourse(courseName) {
      let dishes = this._courses[courseName];
      let randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    }, 

    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;

      return `Your meal today is ${appetizer.name}, ${main.name} and for dessert ${dessert.name}, all this deliciousness for only $${totalPrice.toFixed(2)}.`
    }
  };

 

  
  menu.addDishToCourse('appetizers', 'Tapas', 5.60);
  menu.addDishToCourse('appetizers', 'Chilli cheese fries', 6.40);
  menu.addDishToCourse('appetizers', 'Mozzarella sticks', 4.30);
  menu.addDishToCourse('appetizers', 'Nachos con quesito', 4.50);
  menu.addDishToCourse('mains', 'Classic burger', 3.04);
  menu.addDishToCourse('mains', 'Cheeseburger', 3.50);
  menu.addDishToCourse('mains', 'Lamb burger', 8.30);
  menu.addDishToCourse('mains', 'Veggie burger', 5.87);
  menu.addDishToCourse('desserts', 'Apple pie', 5.97);
  menu.addDishToCourse('desserts', 'Ice-cream', 2.97);
  menu.addDishToCourse('desserts', 'Blueberry cheesecake', 7.00);
  menu.addDishToCourse('desserts', 'Chocolate mousse', 5.45);
  menu.getRandomDishFromCourse('mains');
  console.log(menu.courses);
  console.log('----------------------------------------------');
  let meal = menu.generateRandomMeal();
  console.log(meal);