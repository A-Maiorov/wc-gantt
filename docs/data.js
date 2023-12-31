const data = [
  {
    id: 1,
    start: new Date("2023-11-01T11:52:57.975Z"),
    percent: 0.54,
    text: "1 Waterfall model",
    end: new Date("2024-02-28T11:52:57.975Z"),
    type: "group",
    nested: [
      {
        id: 11,
        start: new Date("2023-12-04T11:52:57.975Z"),
        percent: 0.65,
        links: [
          {
            source: 11,
            target: 12,
            type: "FS",
          },
        ],
        text: "1.1 Requirements",
        end: new Date("2024-02-28T11:52:57.975Z"),
      },
      {
        id: 12,
        start: new Date("2023-11-01T11:52:57.975Z"),
        percent: 0.46,
        links: [
          {
            source: 12,
            target: 13,
            type: "FS",
          },
        ],
        text: "1.2 Design",
        end: new Date("2024-01-01T11:52:57.975Z"),
      },
      {
        id: 13,
        type: "milestone",
        start: new Date("2023-11-16T11:52:57.975Z"),
        links: [
          {
            source: 13,
            target: 14,
            type: "FS",
          },
          {
            source: 13,
            target: 21,
            type: "FS",
          },
        ],
        text: "1.3 Implement",
        end: new Date("2023-11-16T11:52:57.975Z"),
      },
      {
        id: 14,
        start: new Date("2023-11-21T11:52:57.975Z"),
        percent: 0.71,
        links: [],
        text: "1.4 Verification",
        end: new Date("2023-11-27T11:52:57.975Z"),
      },
    ],
  },
  {
    id: 2,
    start: new Date("2023-10-31T11:52:57.975Z"),
    percent: 0.45,
    text: "2 Development",
    end: new Date("2024-02-09T11:52:57.975Z"),
    type: "group",
    nested: [
      {
        id: 21,
        start: new Date("2023-12-12T11:52:57.975Z"),
        percent: 0.64,
        links: [],
        text: "2.1 Preliminary",
        end: new Date("2024-01-07T11:52:57.975Z"),
      },
      {
        id: 22,
        start: new Date("2023-10-31T11:52:57.975Z"),
        percent: 0.13,
        links: [],
        text: "2.2 Systems design",
        end: new Date("2023-12-23T11:52:57.975Z"),
      },
      {
        id: 23,
        start: new Date("2023-11-04T11:52:57.975Z"),
        percent: 0.24,
        links: [
          {
            source: 23,
            target: 24,
            type: "SF",
          },
        ],
        text: "2.3 Development",
        end: new Date("2023-12-05T11:52:57.975Z"),
      },
      {
        id: 24,
        start: new Date("2023-12-10T11:52:57.975Z"),
        percent: 0.78,
        links: [],
        text: "2.4 Integration",
        end: new Date("2024-02-09T11:52:57.975Z"),
      },
    ],
  },
];

window.data = data;
