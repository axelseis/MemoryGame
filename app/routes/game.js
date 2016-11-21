import Ember from 'ember';

export default Ember.Route.extend({
	numberOfCards: 4,
	model(){
		var cards = this.get('store').query('card', {'number': this.numberOfCards});

		return cards;
	},
	actions: {
		setNumberOfCards: function(num){
			$('.number-buttons').children('.selected').removeClass('selected');
			$('.number-buttons').children('.btn-' + num).addClass('selected');
			
			this.numberOfCards = num;
			this.refresh();
		}
	}
});
