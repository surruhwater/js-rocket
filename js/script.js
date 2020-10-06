
// function doCoolStuff changes elements with ID 'cool' to have class name 'cool red'
var doCoolStuff = function () {
	// This saves the current class name of the element where we are changing the class to 'cool red'
	var currentClassName = document.getElementById('cool').className;
	if (currentClassName == 'cool') {
		document.getElementById('cool').className = 'cool red';
	} else {
		document.getElementById('cool').className = 'cool';
	}

}

var sayMyName = function (name) {
	console.log("My name is " + name);
}


var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false,
			numberOfWheels: 4,
			seats: ['seat 1', 
				'seat 2', 
				'seat 3', 
				'seat 4'],
			turnOn: function() {
				this.isTurnedOn = true;
			},
			fly: function () {
				alert('fly');
			},
			switchCar: function (isOn) {
				console.log('turn car '+isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}

		};

	console.log('Hello there friends!');
