import React from 'react';


function BotCollectionCard({
    id,
    avatar_url,
    name,
    catchphrase,
    health,
    damage,
    armor,
    enlistBot,
  }) {
    // Define a function to handle the enlist button click
    const handleEnlist = () => {
      enlistBot(id);
    };
  
    // Render the card with bot information and buttons to view bot stats and enlist the bot
    return (
      <div className="bot-card" onClick={handleEnlist}>
        <img src={avatar_url} alt={name} />
        <h2>{name}</h2>
        <p>{catchphrase}</p>
        <span>health {health}</span>
        <span>damage {damage}</span>
        <span>armor {armor}</span>
      </div>
    );
  }
  
  export default BotCollectionCard;