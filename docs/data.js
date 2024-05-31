const data = [
  {
    id: "1",
    name: "group 1",
    nested: [
      {
        id: "11",
        name: "subgroup 1 1",
        nested: [
          {
            id: "111",
            duration: 5,
            name: "1.1.1   Activity",
          },
          {
            id: "112",
            name: "1.1.2 Activity",
            duration: 7,
          },
        ],
      },
      {
        id: "12",
        name: "1.2 Activity",
        duration: 4,
      },
      {
        id: "13",
        name: "1.3 Activity",
        duration: 6,
      },
      {
        id: "14",
        type: "milestone",
        name: "1.4 Milestone",
      },
      {
        id: "15",
        name: "1.5 Activity",
        duration: 8,
      },
      {
        id: "16",
        name: "1.6 Activity",
        duration: 5,
      },
      {
        id: "17",
        name: "1.7 Activity",
        progressDays: 3,
        duration: 6,
      },
      {
        id: "18",
        name: "1.8 Activity",
        progressDays: 2,
        // dataDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        duration: 6,
      },
      {
        id: "19",
        name: "1.9 Activity",
        duration: 5,
      },
    ],
  },
  {
    id: "2",
    name: "2 Group",
    nested: [
      {
        id: "21",
        name: "2.1 Activity",
        duration: 10,
      },
      {
        id: "22",
        name: "2.2 Activity",
        duration: 5,
      },
      {
        id: "23",
        name: "2.3 Activity",
        duration: 3,
      },
      {
        id: "24",
        name: "2.4 Activity",
        duration: 9,
      },
    ],
  },
];
window.baselineData = [
  {
    id: "1",
    name: "group 1",
    nested: [
      {
        id: "11",
        name: "subgroup 1 1",
        nested: [
          {
            id: "111",
            duration: 5,
            name: "1.1.1   Activity",
          },
          {
            id: "112",
            name: "1.1.2 Activity",
            duration: 7,
          },
        ],
      },
      {
        id: "12",
        name: "1.2 Activity",
        duration: 4,
      },
      {
        id: "13",
        name: "1.3 Activity",
        duration: 6,
      },
      {
        id: "14",
        type: "milestone",
        name: "1.4 Milestone",
      },
      {
        id: "15",
        name: "1.5 Activity",
        duration: 8,
      },
      {
        id: "16",
        name: "1.6 Activity",
        duration: 5,
      },
      {
        id: "17",
        name: "1.7 Activity",
        progressDays: 3,
        duration: 6,
      },
      {
        id: "18",
        name: "1.8 Activity",
        progressDays: 2,
        // dataDate: new Date(new Date().setDate(new Date().getDate() - 1)),
        duration: 6,
      },
      {
        id: "19",
        name: "1.9 Activity",
        duration: 5,
      },
    ],
  },
  {
    id: "2",
    name: "2 Group",
    nested: [
      {
        id: "21",
        name: "2.1 Activity",
        duration: 10,
      },
      {
        id: "22",
        name: "2.2 Activity",
        duration: 5,
      },
      {
        id: "23",
        name: "2.3 Activity",
        duration: 3,
      },
      {
        id: "24",
        name: "2.4 Activity",
        duration: 9,
      },
    ],
  },
];
window.baselineLinks = [
  {
    predecessor: "111",
    successor: "112",
    type: "FS",
    lag: 0,
  },

  {
    predecessor: "12",
    successor: "13",
    type: "FS",
    lag: 0,
  },
  {
    predecessor: "13",
    successor: "14",
    type: "FS",
    lag: 0,
  },
  {
    predecessor: "13",
    successor: "21",
    type: "FS",
    lag: 0,
  },
  {
    predecessor: "23",
    successor: "24",
    type: "SF",
    lag: 0,
  },
  {
    predecessor: "15",
    successor: "16",
    type: "FS",
    lag: 3,
  },
];

window.data = [...data];
window.links = [
  {
    predecessor: "111",
    successor: "112",
    type: "FS",
    lag: 0,
  },

  {
    predecessor: "12",
    successor: "13",
    type: "FS",
    lag: 0,
  },
  {
    predecessor: "13",
    successor: "14",
    type: "FS",
    lag: 0,
  },
  {
    predecessor: "13",
    successor: "21",
    type: "FS",
    lag: 0,
  },
  {
    predecessor: "23",
    successor: "24",
    type: "SF",
    lag: 0,
  },
  {
    predecessor: "15",
    successor: "16",
    type: "FS",
    lag: 3,
  },
];
