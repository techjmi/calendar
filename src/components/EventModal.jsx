import React, { useState, useEffect } from 'react';

const EventModal = ({ showModal, toggleModal, formData, setFormData, handleSubmit, handleDeleteEvent, selectedEvent }) => {
  
  useEffect(() => {
    if (selectedEvent) {
      // Keep the data of the selected event when editing
      setFormData({
        title: selectedEvent.title,
        description: selectedEvent.description,
        eventDate: selectedEvent.eventDate
      });
    }
  }, [selectedEvent, setFormData]);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    showModal && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-xl w-96">
          <div className="flex justify-between mb-4">
            <div className="text-xl font-semibold">{selectedEvent ? 'Edit Event' : 'Add New Event'}</div>
            <button onClick={toggleModal} className="text-gray-500">X</button>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={formData.title}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <textarea
              name="description"
              placeholder="Event Description"
              value={formData.description}
              onChange={handleChange}
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              // type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              required
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
            >
              {selectedEvent ? 'Save Changes' : 'Add Event'}
            </button>
          </form>

          {selectedEvent && (
            <button
              onClick={handleDeleteEvent}
              className="w-full mt-4 bg-red-600 text-white p-2 rounded-md hover:bg-red-700"
            >
              Delete Event
            </button>
          )}
        </div>
      </div>
    )
  );
};

export default EventModal;
