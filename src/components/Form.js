import React, { useState } from 'react';

const Form = ({ onAddTraining }) => {
  const [date, setDate] = useState('');
  const [distance, setDistance] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (typeof onAddTraining === 'function') {
      onAddTraining({ date, distance: parseFloat(distance) });
    } else {
      console.error('onAddTraining is not a function');
    }
    setDate('');
    setDistance('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="date">Дата (ДД.ММ.ГГ)</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="20.07.2019"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="distance">Пройдено км</label>
          <input
            type="number"
            id="distance"
            value={distance}
            onChange={(e) => setDistance(e.target.value)}
            placeholder="5.7"
            step="0.1"
            min="0"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          OK
        </button>
      </div>
    </form>
  );
};

export default Form;
