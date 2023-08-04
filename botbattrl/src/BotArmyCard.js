import React from 'react';

function BotArmyCard({
    id,
    avatar_url,
    name,
    catchphrase,
    health,
    damage,
    armor,
    releaseBot,
    dischargeBot,
  }) {
    // function to handle releasing bot from army
    const handleReleaseBot = () => {
      releaseBot(id);
    };
    const handleDischargeBot  = () => {
        dischargeBot(id);
    };
     // rendering bot card with appropriate information and buttons
  return (
    <div className="bot-card" onClick={handleReleaseBot}>
      <button onClick={handleDischargeBot}>X</button>
      {/* button to discharge bot from army */}
      <img src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <p>{catchphrase}</p>
      <span>health {health}</span>
      <span>damage {damage}</span>
      <span>armor {armor}</span>
    </div>
  );
}
export default BotArmyCard;