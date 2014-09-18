var guid = (function() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
				.toString(16)
				.substring(1);
	}
	return function() {
		return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
				s4() + '-' + s4() + s4() + s4();
	};
})();

var onepagrModule = {
	editMode: false,
	fileReader: null,
	contents: new Array(),
	appMenu: null,
	sectionViews: new Array(),
	imageViews: new Array(),
	colorThief: null,
	saveContents: function() {
		var arrayLength = this.contents.length;
		for (var i = 0; i < arrayLength; i++) {
			var view = this.contents[i];
			if (typeof view.collection !== 'undefined') {
				console.log("collection found");
				view.collection.each(function(model) {
					console.log(model.get('content'));
				});
			} else {
				console.log(view.model.get('content'));
			}
		}
	},
	initialize: function() {
		var _this = this;
		$("section").each(function() {
			_this.sectionViews.push(new SectionView({el: $(this)}));
		});

		this.colorThief = new ColorThief();

		$("img").each(function() {
			_this.imageViews.push(new ImageView({el: $(this)}));
		});

		this.appMenu = new AppMenuView({el: $("#app-nav")});


		/**
		 $('body').sortable({
		 items: 'section'
		 });**/

		this.fileReader = new FileReader();


		$('.fa').click(function() {
			console.log('fa click');
		});

		$('a').click(function(e) {

			if (_this.editMode === true) {
				e.preventDefault();
				return false;
			}
		});

		$('form').click(function(e) {

			if (_this.editMode === true) {
				e.preventDefault();
				return false;
			}
		});

		console.log(this.sectionViews.length);

	}
};

var Section = Backbone.Model.extend({});
var OpContent = Backbone.Model.extend({
	defaults: {'content' : 'Edit me '}
});

var OpContentList = Backbone.Collection.extend({
	model: OpContent
});

var Sections = Backbone.Collection.extend({
	model: Section
});

var ImageView = Backbone.View.extend({
	events: {
	},
	initialize: function() {
		_.bindAll(this, "getColor", "getPalette", "loadPalette");
		return;
		var _this = this;
		this.$el.dropzone({url: 'http://localhost/cors/',
			sending: function(file, xhr, formData) {
				onepagrModule.fileReader.onload = function(e) {
					_this.$el.attr('src', e.target.result);
				}
				console.log(onepagrModule.fileReader.readAsDataURL(file));
				// console.log(file); // Will send the filesize along with the file as POST data.
			}});

		this.$el.on('change', function() {
			console.log(_this.getColor());

		});
		this.$el.on('load', function() {
			_this.loadPalette();
		});
		try {
			console.log(this.getColor());
		} catch (err) {

		}
		// $(this).find('.op-editable')
		// this.listenTo(this.model, "change", this.render);
	},
	loadPalette: function() {
		var data = {
			color: this.getColor(),
			palette: this.getPalette()
		};

		console.log(data);
		var template = _.template($('#color-thief-output-template').html(), data);
		$("#color-palette").html(template);


	},
	getColor: function() {
		return onepagrModule.colorThief.getColor(this.$el[0]);
	},
	getPalette: function() {
		return onepagrModule.colorThief.getPalette(this.$el[0]);
	},
	render: function() {

	}
});

var ContentView = Backbone.View.extend({
	events: {
	},
	initialize: function() {

		this.$el.hallo({
			plugins: {
				'halloformat': {},
				'halloblock': {},
				'hallojustify': {},
				'hallolists': {},
				'halloreundo': {},
				'hallocustomimage': {},
				'halloimage': {}
			}

		});

		this.$el.on('change', function() {
			console.log('changed');
		});
		// $(this).find('.op-editable')
		// this.listenTo(this.model, "change", this.render);
	},
	render: function() {

	}
});

var OpContentView = Backbone.View.extend({
	events: {
	},
	initialize: function() {

		this.$el.hallo({
			plugins: {
				'halloformat': {},
				'halloblock': {},
				'hallojustify': {},
				'hallolists': {},
				'halloreundo': {},
				'halloheadings': {},
				'hallohtml': {},
				'halloimage': {}
			}

		});

		var _this = this;
		// hallomodified hallodeactivated
		this.$el.on('hallomodified', function() {
			_this.model.set('content', _this.$el.html());
			console.log(_this.model.get('content'));
		});
	},
	render: function() {
		this.$el.html(this.model.get('content'));
		this.$el.attr('content-id', this.model.get('id'));
		return this;
	}
});

var OpContentListView = Backbone.View.extend({
	events: {
		"click .op-btn-add-list": "addModel"
	},
	contentGroup: null,
	listId: null,
	collection: null,
	initialize: function(options) {
		_.bindAll(this, "addContent", "addModel");
		this.collection.bind('add', this.addContent, this);
		this.$el.append('<div class="op-btn-add-list btn">Add Item</div>');
		if (typeof options.listId !== "undefined") {
			this.listId = options.listId;
		} else {
			this.listId = guid();
		}

		if (typeof options.contentGroup !== "undefined") {
			this.contentGroup = options.contentGroup;
		}


		// this.$el.draggable();
	},
	render: function() {
		return this;
	},
	addModel: function(e) {
		var model = new OpContent();
		model.set('contentGroup', this.contentGroup);
		model.set('id', guid());
		model.set('listId', this.listId);
		
		if(this.collection.length > 0) {
			var lastModel = this.collection.last();
			model.set('content', lastModel.get('content'));
		}
		
		this.collection.add(model);
	},
	addContent: function(model) {
		var opContent = new OpContentView({model: model});
		this.$el.append(opContent.render().el);
	}
});

var AppMenuView = Backbone.View.extend({
	events: {
		"click a": "action",
		"click a.add-content": "addContent",
		"click a.add-content-list": "addContentList",
		"click a.save": "save"
	},
	contentGroup: null,
	target: '.op-content-editable',
	initialize: function() {
		_.bindAll(this, "addContent", "action", "addContentList", 'save');
		this.$el.draggable();
	},
	getContentGroup: function() {
		if (this.contentGroup === null) {
			return $(this.target).attr('content-group');
		} else {
			return this.contentGroup;
		}
	},
	save: function(e) {
		onepagrModule.saveContents();
	},
	render: function() {

	},
	action: function(e) {
		this.$el.find('.open').removeClass('open');
		e.preventDefault();
		$(e.target).addClass('open');
		return false;
	},
	addContent: function(e) {
		var model = new OpContent();
		model.set('contentGroup', this.getContentGroup());
		model.set('id', guid());
		var opContent = new OpContentView({model: model});
		onepagrModule.contents.push(opContent);
		$(this.target).append(opContent.render().el);
	},
	addContentList: function(e) {
		var collection = new OpContentList();
		var opContentListView = new OpContentListView({collection: collection, contentGroup: this.getContentGroup()});
		onepagrModule.contents.push(opContentListView);
		$(this.target).append(opContentListView.render().el);
	}
});

var SectionView = Backbone.View.extend({
	contents: new Array(),
	events: {
	},
	initialize: function() {
		var _this = this;
		this.$el.find('.op-editable').each(function() {
			var model = new OpContent();
			_this.contents.push(new OpContentView({el: $(this), model: model}));
		});

		this.$el.on('mouseover', function() {
			// console.log('hover');
			// $(this).css({'border': '1px solid #ccc'});
		});

		/**this.$el.find('.op-row').sortable({
		 items: '.op-col'
		 });**/

		// $(this).find('.op-editable')
		// this.listenTo(this.model, "change", this.render);
	},
	render: function() {

	}
});

$(function() {

	onepagrModule.initialize();
});