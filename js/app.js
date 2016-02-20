
var cats = [
    {
        "name" : "Julie",
        "pic" : "http://tranquilmonkey.com/wp-content/uploads/2014/06/venus-two-faced-chimera-cat-1.jpg",
        "clicker" : 0 ,
        "nicknames" : [
			{ nickname : 'Two Face'},
			{ nickname : 'Venus'},
			{ nickname : 'Dr. Strange'},
			{ nickname : 'Tabs'}
		]
    },
    {
        "name" : "Jimmy",
        "pic" : "https://imgflip.com/s/meme/Cute-Cat.jpg",
        "clicker" : 0,
        "nicknames" : [
			{ nickname : 'Mr. Tall'},
			{ nickname : 'Mr. Biggs'},
			{ nickname : 'Pedal'},
			{ nickname : 'Two-Feet'}
		]
    },
    {
        "name": "Jinx",
        "pic" : "http://www.maine-coon-cat-nation.com/image-files/maine-coon-classic-silver.jpg",
        "clicker" : 0,
        "nicknames" : [
			{ nickname : 'Disasteroid'},
			{ nickname : 'Distructor'},
			{ nickname : 'Dr. Destroy'},
			{ nickname : 'Fluff Muff'}
		]
    },
    {
        "name": "Orange",
        "pic" : "https://s-media-cache-ak0.pinimg.com/736x/60/e1/e3/60e1e3467a52292d1a08a87649cc9aca.jpg",
        "clicker": 0,
        "nicknames" : [
			{ nickname : 'Big Orange'},
			{ nickname : 'Baby Blue'},
			{ nickname : 'Dr. Strange'},
			{ nickname : 'Tab'}
		]

    },
    {
        "name": "Magic",
        "pic" : "https://s-media-cache-ak0.pinimg.com/236x/c9/77/c1/c977c1ccfc34259fa3811c8839e0f6e3.jpg",
        "clicker": 0,
        "nicknames" : [
			{ nickname : 'Magie'},
			{ nickname : 'Mag'},
			{ nickname : 'Strange'},
			{ nickname : 'Mage'}
		]
    }
];   


var Cat = function(data) {
	this.clickCount = ko.observable(data.clicker);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.pic);

	this.levels = ko.computed(function(){
		var level = 'Infant';
		if(this.clickCount() >= 10 && this.clickCount() < 20){
			level = 'Kid';
		}
		else if(this.clickCount() >= 20 && this.clickCount() < 30){
			level = 'Adolescent';
		}
		else if(this.clickCount() >= 30 && this.clickCount() < 40){
			level = 'Adult';
		}
		else if(this.clickCount() >= 40){
			level = 'Senior';
		}
		return level;
	}, this);

	this.nicknames = ko.observableArray(data.nicknames);

};

var ViewModel = function() {
	var view = this;
	this.catArry = ko.observableArray([]);
	cats.forEach(function(cat){
		view.catArry.push(new Cat(cat));
	});
	this.currentCat = ko.observable(this.catArry()[0]);
	this.setCurrentCat = function(cat){
		return function () {
			view.currentCat(cat);
			console.log(view.currentCat().name());
			console.log(view.currentCat().clickCount());

		};

	};
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
};

ko.applyBindings(new ViewModel());
