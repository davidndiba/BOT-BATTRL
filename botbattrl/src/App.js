import React,{useState,useEffect} from 'react';
import BotCollection from './BotCollection';
import BotArmy from './BotArmy';


function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/bots")
    .then((res) => res.json())
    .then((data) => {
      console.log("Success:", data);
      setBots(data);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  },[]);
  // Delete a bot from the server and remove it from the bots state and the army
  function hanldeDischargeBot(id) {
    fetch(`http://localhost:8001/bots/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          console.log("DELETE: Success");
          setBots(bots.filter((bot) => bot.id !== id));
          handleReleaseBot(id);
        } else {
          console.log("DELETE: Error");
          throw new Error(`Failed to delete bot with ID ${id}`);
        }
      })
      .catch((error) => console.log("Error:", error));
  }
  function handleReleaseBot(id){
    const bot = enlistedBots.find(bot => bot.id === id);
    if (bot) {
      setEnlistedBots(enlistedBots.filter(bot => bot.id !== id));

    }
  }
  function handleEnlistBot(id) {
    const botToEnlist = bots.find((bot) => bot.id === id);
    if (botToEnlist && !enlistedBots.some((bot) => bot.id === id)) {
      setEnlistedBots([...enlistedBots, botToEnlist]);
    }
    console.log(enlistedBots)
  }

  return (
    <div className="App">
      
      <BotArmy dischargeBot={hanldeDischargeBot} releaseBot={ handleReleaseBot } enlistedBots={enlistedBots}/>
    <BotCollection bots={bots} enlistBot={handleEnlistBot} />
   
    </div>
  );
}

export default App;