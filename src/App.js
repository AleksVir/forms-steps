import React, { useState } from 'react';
import Form from './components/Form';
import Table from './components/Table';
import './App.css';

const App = () => {
  const [trainings, setTrainings] = useState([
    { date: '20.07.2019', distance: 5.7 },
    { date: '19.07.2019', distance: 14.2 },
    { date: '18.07.2019', distance: 3.4 },
  ]);

  const addTraining = (newTraining) => {
    const existingTraining = trainings.find(
      (training) => training.date === newTraining.date
    );

    if (existingTraining) {
      const updatedTrainings = trainings.map((training) =>
        training.date === newTraining.date
          ? { ...training, distance: training.distance + newTraining.distance }
          : training
      );
      setTrainings(sortTrainings(updatedTrainings));
    } else {
      setTrainings(sortTrainings([...trainings, newTraining]));
    }
  };

  const deleteTraining = (date) => {
    const filteredTrainings = trainings.filter((training) => training.date !== date);
    setTrainings(filteredTrainings);
  };

  const editTraining = (training) => {
    console.log('Редактируем:', training);
  };

  const sortTrainings = (trainingsList) => {
    return trainingsList.sort((a, b) => {
      // Преобразуем дату из формата ДД.ММ.ГГГГ в ГГГГ-ММ-ДД для корректного сравнения
      const dateA = new Date(a.date.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1'));
      const dateB = new Date(b.date.replace(/(\d{2})\.(\d{2})\.(\d{4})/, '$3-$2-$1'));
      return dateB - dateA; // Сортировка от новых к старым
    });
  };

  return (
    <div className="container">
      <div className="form-container">
        <Form onAddTraining={addTraining} />
      </div>
      <Table
        trainings={trainings}
        onDelete={deleteTraining}
        onEdit={editTraining}
      />
    </div>
  );
};

export default App;
