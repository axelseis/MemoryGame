import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function () {
		this.$('.card').flip({trigger: 'manual'});
	},

	didRender: function () {
		if(!this.$(".card").data("flip-model").isFlipped){
			this.$('.card').flip(true);
		}
	},

	willDestroyElement: function(){
		this.$('.card').off('.flip');
	},

	onFlipEnds: function(){
		let flip = this.$(".card").data("flip-model");
		let flipBack;
		
		this.$(".card").off('flip:done');

		if(!flip.isFlipped){
			flipBack = this.get('onClick')(this);
		}
		if(flipBack){
			this.$('.card').flip(!flip.isFlipped);
		}			
	},

	actions:{
		onClickCard: function(){
			let flip = this.$(".card").data("flip-model");
			let flipBack;

			if(flip.isFlipped){			
				this.$(".card").on('flip:done', this.onFlipEnds.bind(this));
				this.$('.card').flip(!flip.isFlipped);
			}
		}
	}
});
