import React from 'react';
import YourBotArmyCard from './BotArmyCard';

function BotArmy({ enlistedBots, releaseBot,dischargeBot }) {
    return (
    <div>
      <div className="bot-list" style={{ background: "#a9a9a9" }}>
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