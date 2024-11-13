import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { postData, fetchData, editEvent, deleteEvent } from '../service/api';
import EventModal from './EventModal';
import { toast } from 'react-toastify';

const CalendarUI = () => {
  const [date, setDate] = useState(new Date());
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', eventDate: '' });

  useEffect(() => {
    loadEvents();
  }, [date]);

  const loadEvents = async () => {
    const events = await fetchData(date.toISOString());
    setEvents(events);
  };

  // Open modal for editing
  const openModalForEditing = (event) => {
    setSelectedEvent(event);
    setFormData({
      ...event,
      eventDate: new Date(event.eventDate).toISOString().slice(0, 16),
    });
    setShowModal(true);
  };

  // Open modal for adding new event
  const openModalForNewEvent = (selectedDate) => {
    setSelectedEvent(null);
    setFormData({ title: '', description: '', eventDate: selectedDate.toISOString().slice(0, 16) });
    setShowModal(true);
  };

  const toggleModal = () => setShowModal(!showModal);

  const addEvent = async () => {
    try {
      const newEvent = await postData(formData);
      setEvents([...events, newEvent]);
      toast.success('Event added successfully');
      toggleModal();
    } catch (error) {
      toast.error('Failed to add event');
    }
  };

  const handleEditEvent = async () => {
    try {
      const updatedEvent = await editEvent(selectedEvent._id, formData);
      setEvents(events.map(event => (event._id === selectedEvent._id ? updatedEvent : event)));
      toast.success('Event updated successfully');
      toggleModal();
    } catch (error) {
      toast.error('Failed to update event');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    selectedEvent ? handleEditEvent() : addEvent();
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      await deleteEvent(eventId);
      setEvents(events.filter(event => event._id !== eventId));
      toast.success('Event deleted successfully');
    } catch (error) {
      toast.error('Failed to delete event');
    }
  };

  const tileContent = ({ date }) => {
    const eventForThisDate = events.find(event => new Date(event.eventDate).toDateString() === date.toDateString());
    return eventForThisDate ? <div className="bg-blue-600 rounded-full w-2.5 h-2.5 mx-auto"></div> : null;
  };

  return (
    <div className="container mx-auto my-8 p-6 bg-white rounded-lg shadow-xl mt-20">
      <div className="text-center mb-6">
        <div className="font-extrabold text-3xl text-blue-600">Calendar UI</div>
        <div className="text-lg text-gray-500">Pick a date to schedule events!</div>
      </div>

      <div className="flex justify-center">
        <Calendar
          onChange={setDate}
          onClickDay={(selectedDate) => openModalForNewEvent(selectedDate)} // Open add event modal on date click
          value={date}
          className="rounded-lg border border-gray-200 shadow-lg"
          tileContent={tileContent}
        />
      </div>

      <div className="mt-6">
        {events && events.length > 0 ? (
          <ul className="mt-2">
            {events.map((event) => (
              <li key={event._id} className="mb-2">
                <div className="bg-blue-100 p-3 rounded-md flex justify-between items-center">
                  <div>
                    <div className="font-bold text-blue-700">{event.title}</div>
                    <div className="text-gray-700">{event.description}</div>
                    <div className="text-gray-500">{new Date(event.eventDate).toLocaleString()}</div>
                  </div>
                  <div>
                    <button onClick={() => openModalForEditing(event)} className="text-blue-500 mr-2">Edit</button>
                    <button onClick={() => handleDeleteEvent(event._id)} className="text-red-500">Delete</button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div>No events for this date.</div>
        )}
      </div>

      <EventModal
        showModal={showModal}
        toggleModal={toggleModal}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        selectedEvent={selectedEvent}
      />
    </div>
  );
};

export default CalendarUI;
