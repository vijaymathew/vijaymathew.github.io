const EVENTS = [
  {
    id: 'cal-1',
    calendarId: 'today',
    title: 'Q3 Hardware Sync',
    time: '09:00',
    duration: '60min',
    type: 'internal',
    status: 'pending'
  },
  {
    id: 'cal-2',
    calendarId: 'today',
    title: 'Lunch with Sara',
    time: '11:30',
    duration: '60min',
    type: 'external',
    status: 'accepted'
  },
  {
    id: 'cal-3',
    calendarId: 'today',
    title: 'Finance Review',
    time: '14:00',
    duration: '30min',
    type: 'internal',
    status: 'pending'
  }
];

export const MockCalBackend = {
  listEvents(calendarId, params = {}) {
    return EVENTS
      .filter((event) => event.calendarId === calendarId)
      .filter((event) => !params.status || event.status === params.status)
      .map((event) => ({ ...event }));
  },

  updateStatus(eventId, status) {
    const event = EVENTS.find((item) => item.id === eventId);
    if (!event) return null;
    event.status = status;
    return { ...event };
  },

  queryAll() {
    return EVENTS.map((event) => ({ ...event }));
  }
};
