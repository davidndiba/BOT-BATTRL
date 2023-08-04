import React from "react";
import BotCollectionCard from "./BotCollectionCard";

function BotCollection({ bots, enlistBot }) {
  return (
    <div className="bot-container">
      <div className="bot-list">
        {bots.map((bot) => (
          <BotCollectionCard
            key={bot.id}
            id={bot.id}
            avatar_url={bot.avatar_url}
            name={bot.name}
            catchphrase={bot.catchphrase}
            health={bot.health}
            damage={bot.damage}
            armor={bot.armor}
            enlistBot={enlistBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
