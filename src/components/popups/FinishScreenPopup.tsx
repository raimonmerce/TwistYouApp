const FinishScreenPopup = ({ round }: { round: number }) => (
    <div className="popup-overlay">
        <div className="popup">
            <p>You reached {round} rounds</p>
        </div>
    </div>
);

export default FinishScreenPopup;