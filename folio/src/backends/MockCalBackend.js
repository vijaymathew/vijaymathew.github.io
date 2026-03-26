const INITIAL_EVENTS = [
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

let events = cloneEvents(INITIAL_EVENTS);

export const MockCalBackend = {
  listEvents(calendarId, params = {}) {
    return events
      .filter((event) => event.calendarId === calendarId)
      .filter((event) => !params.status || event.status === params.status)
      .map((event) => ({ ...event }));
  },

  updateStatus(eventId, status) {
    const event = events.find((item) => item.id === eventId);
    if (!event) return null;
    event.status = status;
    return { ...event };
  },

  queryAll() {
    return events.map((event) => ({ ...event }));
  },

  exportState() {
    return cloneEvents(events);
  },

  importState(nextEvents = []) {
    events = cloneEvents(nextEvents);
    return this.exportState();
  },

  reset(nextEvents = null) {
    events = cloneEvents(nextEvents || INITIAL_EVENTS);
    return this.exportState();
  },

  seed(nextEvents = []) {
    events = events.concat(cloneEvents(nextEvents));
    return this.exportState();
  },

  upsertEvents(nextEvents = []) {
    const byId = new Map(events.map((event) => [event.id, { ...event }]));
    for (const event of nextEvents) {
      if (!event?.id) continue;
      byId.set(event.id, { ...event });
    }
    events = Array.from(byId.values());
    return this.exportState();
  }
};

function cloneEvents(items = []) {
  return items.map((event) => ({ ...event }));
}
