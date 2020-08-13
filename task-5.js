class Car {
  constructor(obj) {
    this.maxSpeed = obj.maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.price = obj.price;
  }

  static getSpecs(car) {
		console.log(
			`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, prise: ${car.prise}`
		)
	}

  get price() {
    return this._price;
  }

  set price(car) {
      this._price = car;
  }

  turnOn() {
    this._isOn = true;
  }

  turnOff() {
    this._isOn = false
    this._speed = 0;
  }

  accelerate(value) {
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      this.speed = this.speed - value;
    }
  }

  drive(hours) {
    if (this._isOn) {
        this._distance += hours * this._speed;
    }
}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000