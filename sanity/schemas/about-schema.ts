const about = {
  name: "about",
  title: "About",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "mainTech",
      title: "Main Tech",
      type: "string",
    },
    {
      name: "content",
      title: "Content",
      type: "string",
    },
    {
      name: "location",
      title: "Location",
      type: "string",
    },
    {
      name: "food",
      title: "Food",
      type: "string",
    },
    {
      name: "hobbies",
      title: "Hobbies",
      type: "array",
      of: [
        {
          type: "object",
          name: "hobby",
          fields: [
            { type: "string", name: "name" },
            { type: "string", name: "value" },
          ],
        },
      ],
    },
  ],
};

export default about;
