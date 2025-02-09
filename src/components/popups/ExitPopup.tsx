const ExitPopup = ({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) => (
    <div className="popup-overlay">
        <div className="popup">
        <p>Are you sure you want to abandon the game?</p>
        <div className="popup-buttons">
            <button className="exit" onClick={onConfirm}>Exit</button>
            <button className="cancel" onClick={onCancel}>Cancel</button>
        </div>
        </div>
    </div>
);

export default ExitPopup;