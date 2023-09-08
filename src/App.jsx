import { useRef } from "react";

export function App() {
  const cardCodeRef = useRef();
  const cardExpirationRef = useRef();

  const handleCardNoChange = (e) => {
    if (e.target.value.length >= 16) {
      cardCodeRef.current.focus();
    }
  };

  const handleCardCodeChange = (e) => {
    if (e.target.value.length >= 3) {
      cardExpirationRef.current.focus();
    }
  };

  const handleCardExpirationChange = (e) => {
    if (e.target.value.length >= 4) {
      cardExpirationRef.current.blur();
    }
  };

  return (
    <>
      <div>
        <label>Credit card number</label>
        <input
          onChange={handleCardNoChange}
          type="number"
          name="creditCardNumber"
        />
      </div>
      <div>
        <label>Secret code</label>
        <input
          ref={cardCodeRef}
          onChange={handleCardCodeChange}
          type="number"
          name="creditCardCode"
        />
      </div>
      <div>
        <label>Expiration date</label>
        <input
          ref={cardExpirationRef}
          onChange={handleCardExpirationChange}
          type="text"
          name="creditCardExpiration"
        />
      </div>
    </>
  );
}
