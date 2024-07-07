import { useDrag } from 'react-dnd';

const Card = ({ card }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    item: { id: card.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} className="card" style={{ opacity: isDragging ? 0.5 : 1 }}>
      {card.content}
    </div>
  );
};

export default Card;