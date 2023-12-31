const introduction = {
  name: "introduction",
  title: "Introduction",
  type: "document",
  fields: [
    {
      name: "startTitle",
      title: "Start Title",
      type: "string",
    },
    {
      name: "endTitle",
      title: "End Title",
      type: "string",
    },
    {
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    },
    {
      name: "quote",
      title: "Quote",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "typewriter",
      title: "Typewriter",
      type: "array",
      of: [{ type: "string", name: "write" }],
    },
    {
      name: "image",
      title: "Image",
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
    {
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "object",
          name: "social",
          fields: [
            { type: "url", name: "url", title: "URL" },
            { type: "string", name: "name" },
          ],
        },
      ],
    },
    {
      name: "skills",
      title: "Skills",
      type: "array",
      of: [
        {
          type: "object",
          name: "skill",
          fields: [
            { type: "url", name: "url", title: "URL" },
            { type: "string", name: "name" },
            { type: "string", name: "value" },
          ],
        },
      ],
    },
  ],
};

export default introduction;
