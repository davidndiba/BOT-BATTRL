import React from 'react';
import YourBotArmyCard from './BotArmyCard';

function BotArmy({ enlistedBots, releaseBot,dischargeBot }) {
    // Renders the list of enlisted bots as BotArmyCards
    return (
    <div>
      <div className="bot-list" style={{ background: "#66FF00" }}>
        {enlistedBots.map((bot) => {
          return (
            <YourBotArmyCard
              key={bot.id}
              id={bot.id}
              avatar_url={bot.avatar_url}
              name={bot.name}
              catchphrase={bot.catchphrase}
              health={bot.health}
              damage={bot.damage}
              armor={bot.armor}
              releaseBot={releaseBot}
              dischargeBot={dischargeBot}
            />
          );
        })}
      </div>
    </div>
  );
}

export default BotArmy;