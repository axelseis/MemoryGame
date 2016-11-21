


export default function() {
  this.namespace = '/api';
  let cards = [
    {
      type: 'card',
      id: 'card1',
      attributes: {
        name: 'kangaroo',
        image: 'kangaroo-256.png'
      }
    },
    {
      type: 'card',
      id: 'card2',
      attributes: {
        name: 'scorpion',
        image: 'scorpion-256.png'
      }
    },
    {
      type: 'card',
      id: 'card3',
      attributes: {
        name: 'horse',
        image: 'horse-2-256.png'
      }
    },
    {
      type: 'card',
      id: 'card4',
      attributes: {
        name: 'elephant',
        image: 'elephant-4-256.png'
      }
    },
    {
      type: 'card',
      id: 'card5',
      attributes: {
        name: 'wolf',
        image: 'wolf-256.png'
      }
    },
    {
      type: 'card',
      id: 'card6',
      attributes: {
        name: 'pig',
        image: 'pig-2-256.png'
      }
    },
    {
      type: 'card',
      id: 'card7',
      attributes: {
        name: 'deer',
        image: 'deer-256.png'
      }
    },
    {
      type: 'card',
      id: 'card8',
      attributes: {
        name: 'bear',
        image: 'bear-4-256.png'
      }
    },
    {
      type: 'card',
      id: 'card9',
      attributes: {
        name: 'snake',
        image: 'snake-5-256.png'
      }
    },
    {
      type: 'card',
      id: 'card10',
      attributes: {
        name: 'donkey',
        image: 'donkey-256.png'
      }
    },
    {
      type: 'card',
      id: 'card11',
      attributes: {
        name: 'snail',
        image: 'snail-256.png'
      }
    },
    {
      type: 'card',
      id: 'card12',
      attributes: {
        name: 'rabbit',
        image: 'rabbit-256.png'
      }
    },
    {
      type: 'card',
      id: 'card13',
      attributes: {
        name: 'prawn',
        image: 'prawn-256.png'
      }
    },
    {
      type: 'card',
      id: 'card14',
      attributes: {
        name: 'bird',
        image: 'bird-256.png'
      }
    },
    {
      type: 'card',
      id: 'card15',
      attributes: {
        name: 'cow',
        image: 'cow-256.png'
      }
    },
    {
      type: 'card',
      id: 'card16',
      attributes: {
        name: 'giraffe',
        image: 'giraffe-256.png'
      }
    }
  ];

  this.get('/cards', function(db, request){
    let response = [];
    let cardsClon = cards.slice();
    let j, temp;

    for(let nR=0; nR<Number(request.queryParams.number); nR++){
      let random = Math.floor(Math.random()*cardsClon.length);
      response.push(cardsClon.splice(random,1)[0]);
    }

    response = response.concat(response.slice());

    for (let i = response.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1))
      temp = response[i]
      response[i] = response[j]
      response[j] = temp
    }

    return{
      data: response
    };
  });
}
