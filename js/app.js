var ViewModel = function() {
	this.clickCount = ko.observable(0);
	console.log(this.clickCount);
	this.name = ko.observable('Tabby');
	this.infant = ko.observable('Infant');
	this.toddler = ko.observable('Kid');
	this.teen = ko.observable('Adolescent');
	this.adult = ko.observable('Adult');
	this.senior = ko.observable('Senior');
	this.imgSrc = ko.observable('img/434164568_fea0ad4013_z.jpg');
	// this.imgAttribution = ko.observable
	this.incrementCounter = function(){
		this.clickCount(this.clickCount() + 1);
	};
	this.levels = ko.computed(function(){
		if(this.clickCount() < 10){
			return this.infant();
		}
		else if(this.clickCount() >= 10 && this.clickCount() < 20){
			return this.toddler();
		}
		else if(this.clickCount() >= 20 && this.clickCount() < 30){
			return this.teen();
		}
		else if(this.clickCount() >= 30 && this.clickCount() < 40){
			return this.adult();
		}
		else if(this.clickCount() >= 40){
			return this.senior();
		}

	}, this);
}

ko.applyBindings(new ViewModel());