import React from 'react';
import TableRow from './TableRow';

const Table = ({ trainings, onDelete, onEdit }) => {
  return (
    <div className="data-table">
      <div className="table-header">
        <div className="col-date">Дата (ДД.ММ.ГГ)</div>
        <div className="col-distance">Пройдено км</div>
        <div className="col-actions">Действия</div>
      </div>
      <div className="table-body" id="tableBody">
        {trainings.length === 0 ? (
          <div className="empty-state">Нет данных о тренировках</div>
        ) : (
          trainings.map((training) => (
            <TableRow
              key={training.date}
              training={training}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Table;
