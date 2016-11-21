import Ember from 'ember';

export default Ember.Controller.extend({
	fistCard: false,

	modelChanged: function () {
		this.firstCard = false;
		Ember.run.scheduleOnce('afterRender', this, this.setCardsSize);
	}.observes('model'),

	setCardsSize: function(){		
		const container = $('#cardsGrid');
		const cards = container.children();

		let cols = 3;
		let rows = Math.ceil(cards.length/cols);
		let maxW = Math.floor(container.width()/cols)-10;
		let minH = maxW*10/7;

		while(rows*minH > container.height() || cards.length%rows !== 0 || minH > (container.height()/rows)*0.9 ){
			cols +=1;
			maxW = Math.floor(container.width()/cols)-10;
			minH = maxW*10/7;
			rows = Math.ceil(cards.length/cols);
		}

		cards.each((index,viewRef) => {
			const view = $(viewRef);
			const card = view.children('.card');
	
			view.width(maxW);
			view.height(container.height()/rows);
			card.height(minH);
			card.children().css({'line-height': minH + 'px'})
		});
	},

	actions: {
		onFlipCard: function(card){
			var flip = false;

			if(!this.firstCard || this.firstCard.elementId === card.elementId){
				this.firstCard = card;
			}
			else if(this.firstCard.get('cardId') !== card.get('cardId')){
				flip = true;
				this.firstCard.$('.card').flip(true);
				this.firstCard = false;
			}
			else if(this.firstCard){
				this.firstCard = null;
			}
			return flip;
		}
	}
});
