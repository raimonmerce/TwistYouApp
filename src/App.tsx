import './App.css'
import Header from "./components/Header"
import Content from "./components/Content"
import Footer from "./components/Footer"
import ButtonHeader from "./components/commons/ButtonHeader"
import ButtonFooter from "./components/commons/ButtonFooter"
import Game from "./components/pages/Game"
import Turn from "./components/pages/Turn"
import Main from "./components/pages/Main"
import Players from "./components/pages/Players"
import Settings from "./components/pages/Settings"
import { useState } from 'react'
import { useTranslation } from "react-i18next";

type Page = "main" | "game" | "players" | "settings";

function App() {
  const maxPlayers = 12;
  const [contentPage, setContentPage] = useState<Page>("main");
  const [players, setPlayers] = useState<string[]>([]);
  const [numberPlayers, setNumberPlayers] = useState(4);
  const [alcoholMode, setAlcoholMode] = useState(false);
  const [extremoMode, setExtremoMode] = useState(false);
  const [minigamesMode, setMinigamesMode] = useState(false);
  const [currentPlayer, setCurrentPlayer] = useState("");
  const [currentPlayerIndex, setCurrentPlayerIndex] = useState(0);
  const [currentTurn, setCurrentTurn] = useState("");
  const [turn, setTurn] = useState<Turn | null>(null);
  const { t } = useTranslation();

  const handleGoSettings = () => {
    setContentPage("settings")
  };

  const handleFinishGame = () => {
    setContentPage("main")
  };

  const handlePlay = () => {  
    let updatedPlayers;
    if (players.length == 0) {
      updatedPlayers = Array(numberPlayers).fill("");
    } else if (players.length > numberPlayers) {
      updatedPlayers = players.slice(0, numberPlayers);
    } else if (players.length < numberPlayers) {
      const additionalPlayers = Array(numberPlayers - players.length).fill("");
      updatedPlayers = players.concat(additionalPlayers);
    } else {
      updatedPlayers = players;
    }
    setPlayers(updatedPlayers);
    setContentPage("players");
  };

  const getTurn = (player: string) => {
    if (!turn) return "";
    const ta = turn.generateText(player);
    return ta;
  }

  const handleStartGame = () => {
    const newPlayers = players.map((player, index) =>
      player.trim() === "" ? `player ${index + 1}` : player
    );
    const translations = {
      generalTasks : t('game.generalTasks', { returnObjects: true }) as string[],
      alcoholTasks : t('game.alcoholTasks', { returnObjects: true }) as string[],
      extremeTasks : t('game.extremeTasks', { returnObjects: true }) as string[],
      generalParts : t('game.generalParts', { returnObjects: true }) as string[],
      extremeParts : t('game.extremeParts', { returnObjects: true }) as string[],
      basicTask: t('game.basicTask', "$part a $part"),
      of: t('game.of', " de $otherPlayer")
    }
    const turnTmp = new Turn({ checkAlcohol: false, checkExtreme: false }, newPlayers, translations);  
    setTurn(turnTmp)
    setPlayers(newPlayers);
    setCurrentPlayerIndex(0);
    setCurrentPlayer(newPlayers[currentPlayerIndex]);
    setCurrentTurn(getTurn(currentPlayer));
    setContentPage("game");
  };

  const handleBackMain = () => {
    setContentPage("main");
  };

  const handleSpin = () => {
    const nextIndex = (currentPlayerIndex + 1)% players.length;
    setCurrentPlayerIndex(nextIndex);
    setCurrentPlayer(players[nextIndex]);
    setCurrentTurn(getTurn(players[nextIndex]));
  };

  const handleImpossible = () => {
    setCurrentTurn(getTurn(currentPlayer));
  };

  const handleSaveSettings = () => {
    setContentPage("main")
  };

  return (
    <>
      <Header>
        TwistYou
        {contentPage == "main" &&
          <ButtonHeader onClick={handleGoSettings}>
            S
          </ButtonHeader>
        }
        {contentPage == "game" &&
          <ButtonHeader onClick={handleFinishGame}>
            X
          </ButtonHeader>
        }
        {contentPage == "settings" &&
          <ButtonHeader onClick={handleSaveSettings}>
            X
          </ButtonHeader>
        }
      </Header>
      <Content>
        {contentPage == "main" &&
          <Main
            setNumberPlayers={setNumberPlayers}
            numberPlayers={numberPlayers}
            setAlcoholMode={setAlcoholMode}
            alcoholMode={alcoholMode}
            setExtremoMode={setExtremoMode}
            extremoMode={extremoMode}
            setMinigamesMode={setMinigamesMode}
            minigamesMode={minigamesMode}
            maxPlayers={maxPlayers}
          />
        }
        {contentPage == "players" &&
          <Players
            players={players}
            setPlayers={setPlayers}
          />
        }
        {contentPage == "game" &&
          <Game 
            currentPlayer={currentPlayer}
            currentTurn={currentTurn}
          />
        }
        {contentPage == "settings" &&
          <Settings/>
        }
      </Content>
      <Footer>
        {contentPage == "main" &&
          <ButtonFooter text={t('footer.play','Jugar')} onClick={handlePlay} type={"primary"}/>
        }
        {contentPage == "players" &&
          <>
            <ButtonFooter text={t('footer.start','Empezar')}  onClick={handleStartGame} type={"primary"}/>
            <ButtonFooter text={t('footer.back','Atras')} onClick={handleBackMain} type={"primary"}/>
          </>
        }
        {contentPage == "game" &&
          <>
            <ButtonFooter text={t('footer.spin','Girar')} onClick={handleSpin} type={"primary"}/>
            <ButtonFooter text={t('footer.impossible','Imposible')} onClick={handleImpossible} type={"secondary"}/>
          </>
        }
      </Footer>

    </>
  )
}

export default App
