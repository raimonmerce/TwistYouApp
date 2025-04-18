import { useGameState } from "./hooks/useGameState";
import { useExitHandler } from "./hooks/useExitHandler";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import ButtonHeader from "./components/commons/ButtonHeader";
import ButtonFooter from "./components/commons/ButtonFooter";
import Landing from "./components/pages/Landing";
import Game from "./components/pages/Game";
import Main from "./components/pages/Main";
import Players from "./components/pages/Players";
import Settings from "./components/pages/Settings";
import ExitPopup from "./components/popups/ExitPopup";
import FinishScreenPopup  from "./components/popups/FinishScreenPopup";
import { useTranslation } from "react-i18next";
import { assets } from "./assets/assets";
import styles from "./App.module.css";

function App() {
  const { t } = useTranslation();

  const {
    contentPage,
    setContentPage,
    players,
    setPlayers,
    numberPlayers,
    setNumberPlayers,
    settings,
    setSettings,
    currentPlayerIndex,
    currentTurn,
    round,
    handlePlay,
    handleStartGame,
    handleSpin,
    handleImpossible,
    handleGoToPage
  } = useGameState();

  const { showExitPopup, handleExitClick, handleCancelExitGame, handleExitGame, showFinishScreen } = useExitHandler(setContentPage);

  const renderContent = () => {
    switch (contentPage) {
      case "main":
        return <Main setNumberPlayers={setNumberPlayers} numberPlayers={numberPlayers} settings={settings} setSettings={setSettings} />;
      case "players":
        return <Players players={players} setPlayers={setPlayers} />;
      case "game":
        return <Game currentPlayer={players[currentPlayerIndex]} currentTurn={currentTurn} round={round} />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  return (
    <>
      {contentPage == "landing" ? (
        <>
          <Landing setContentPage={setContentPage}/>
        </>
      ):(
          <>
            <Header>
              {(contentPage === "players" || contentPage === "settings") && (
                <div className={styles.left}>
                  <ButtonHeader onClick={() => handleGoToPage("main")}>
                    <img src={assets.svg.back} alt="back" className="icon" />
                  </ButtonHeader>
                </div>
              )}
              {contentPage === "main" && (
                <div className={styles.left}>
                  <ButtonHeader onClick={() => handleGoToPage("landing")}>
                    <img src={assets.svg.back} alt="back" className="icon" />
                  </ButtonHeader>
                </div>
              )}

              <h2 className={styles.title}>TwistYou</h2>

              {contentPage === "main" && (
                <div className={styles.right}>
                  <ButtonHeader onClick={() => handleGoToPage("settings")}>
                    <img src={assets.svg.settings} alt="settings" className="icon" />
                  </ButtonHeader>
                </div>
              )}
              {contentPage === "game" && (
                <div className={styles.right}>
                  <ButtonHeader onClick={handleExitClick}>
                    <img src={assets.svg.close} alt="close" className="icon" />
                  </ButtonHeader>
                </div>
              )}
            </Header>
            <Content>{renderContent()}</Content>
            <Footer>
            {contentPage == "main" &&
                <ButtonFooter text={t('footer.players','Jugar')} onClick={handlePlay} type={"primary"}/>
              }
              {contentPage == "players" &&
                <>
                  <ButtonFooter text={t('footer.start','Empezar')}  onClick={handleStartGame} type={"primary"}/>
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

      {showExitPopup && <ExitPopup onConfirm={handleExitGame} onCancel={handleCancelExitGame} />}
      {showFinishScreen && <FinishScreenPopup round={round} />}
    </>
  );
}

export default App;
