import { ref } from 'vue';

// Singleton instance of times
const times = ref([]);
let idCounter = 1;

export const useTimes = () => {
  const addTime = (title, time, date) => {
    times.value.push({ id: idCounter++, title, time, date });
    console.log('Time added:', times.value);
  };

  const updateTime = (id, title, time, date) => {
    const timeEntry = times.value.find((t) => t.id === id);
    if (timeEntry) {
      timeEntry.title = title;
      timeEntry.time = time;
      timeEntry.date = date;
    }
  };

  const deleteTime = (id) => {
    times.value = times.value.filter((t) => t.id !== id);
  };

  return { times, addTime, updateTime, deleteTime };
};