import { useState } from 'react';
import Card from './Card';
import { useDrop } from 'react-dnd';

const Column = ({ name, cards, columnId, addCard }) => {
    const [newCardContent, setNewCardContent] = useState('');
    const [, drop] = useDrop({
      accept: 'CARD',
      drop: (item) => console.log(`Dropped card ${item.id} on column ${columnId}`),
    });
  
    const handleAddCard = () => {
      if (newCardContent.trim()) {
        addCard(columnId, newCardContent);
        setNewCardContent('');
      }
    };
  
    return (
      <div ref={drop} className="column">
        <h2>{name}</h2>
        {cards.map(card => (
          <Card key={card.id} card={card} />
        ))}
        <div className="add-card-form">
          <input
            type="text"
            value={newCardContent}
            onChange={(e) => setNewCardContent(e.target.value)}
            placeholder="New card content"
          />
          <button onClick={handleAddCard} className='m-1'>Add Card</button>
        </div>
      </div>
    );
  };

export default Column;