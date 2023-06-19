const experience = {
  name: "experience",
  title: "Experiences",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "jobs",
      title: "Jobs",
      type: "array",
      of: [
        {
          type: "object",
          name: "job",
          fields: [
            { type: "string", name: "role" },
            { type: "string", name: "company" },
            {
              type: "date",
              name: "startDate",
              options: { dateFormat: "MM-YYYY" },
            },
            {
              type: "date",
              name: "endDate",
              options: { dateFormat: "MM-YYYY" },
            },
            {
              type: "string",
              name: "description",
            },
            {
              type: "boolean",
              name: "currentJob",
            },
            {
              name: "logo",
              title: "Logo",
              type: "image",
              options: { hotspot: true },
              fields: [
                {
                  name: "alt",
                  title: "Alt",
                  type: "string",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default experience;
