import axios from "axios";
// const url = "http://localhost:8000/calendar";
const url='https://calendar-backend-00zx.onrender.com/calendar'

// Function to post (add) a new event
export const postData = async (data) => {
  try {
    const response = await axios.post(`${url}/create`, data);
    return response.data;
  } catch (error) {
    console.error("Error while posting the data:", error.message);
  }
};

// Function to fetch events by date
export const fetchData = async (date) => {
  try {
    const response = await axios.get(`${url}/events`);
    return response.data;
  } catch (error) {
    console.error("Error while fetching the data:", error.message);
  }
};

// Function to edit an existing event
export const editEvent = async (id, updatedData) => {
  try {
    const response = await axios.put(`${url}/edit/${id}`, updatedData);
    // console.log("${url}/edit/${id}")
    return response.data;
  } catch (error) {
    console.error("Error while editing the event:", error.message);
  }
};

// Function to delete an event
export const deleteEvent = async (id) => {
    console.log('fun called', id)
  try {
    const response = await axios.delete(`${url}/delete/${id}`);
    return response.data;
  } catch (error) {
    console.error("Error while deleting the event:", error.message);
  }
};
