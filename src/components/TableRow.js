import React from 'react';

const TableRow = ({ training, onDelete, onEdit }) => {
  return (
    <div className="table-row" data-date={training.date}>
      <div className="col-date">{training.date}</div>
      <div className="col-distance">{training.distance}</div>
      <div className="col-actions">
        <button
          className="action-btn edit-btn"
          title="Редактировать"
          onClick={() => onEdit(training)}
        >
          ✎
        </button>
        <button
          className="action-btn delete-btn"
          title="Удалить"
          onClick={() => onDelete(training.date)}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default TableRow;
