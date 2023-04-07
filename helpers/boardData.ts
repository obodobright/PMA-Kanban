import { boardProps } from "./types";

export const boardData: boardProps[] = [
  {
    id: 1,
    tag: "todo",
    tagColor: "#518c9d",

    items: [
      {
        id: 1,
        title: "Build UI for onboarding flow",
        subtask: [
          {
            description: "Ensure the Dashboard is properly done",
            id: 1,
          },
          {
            description: "Ensure the Platform launch is good of design implementation",
            id: 2,
          },
        ],
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, eveniet recusandae illo quo totam aperiam ipsum quas. Placeat eius quaerat accusantium iusto voluptatum praesentium, architecto velit pariatur? Libero perspiciatis placeat enim molestiae officia quaerat sequi nulla, alias asperiores voluptas tenetur totam mollitia obcaecati ut quasi est natus facere accusamus nihil quibusdam eaque quidem facilis harum? Dicta quaerat quis quidem, provident ad, deserunt iusto magnam, atque impedit perferendis beatae. Sapiente, nam aut eaque esse libero reprehenderit aperiam eius minima. Ipsum est corporis, tenetur possimus magnam labore magni nesciunt laboriosam dolorum, fuga commodi, eos autem alias maxime reprehenderit eaque atque voluptate maiores",
      },
      {
        id: 2,
        title: "Construct UI for onboarding flow",
        subtask: [
          {
            description: "Ensure the Dashboard is properly done",
            id: 1,
          },
          {
            description: "Ensure the Platform launch is good of design implementation",
            id: 2,
          },
        ],
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, eveniet recusandae",
      },
      {
        id: 3,
        subtask: [
          {
            description: "Ensure the Dashboard is properly done",
            id: 1,
          },
          {
            description: "Ensure the Platform launch is good of design implementation",
            id: 2,
          },
        ],
        title: "Save UI for onboarding flow",
        description:
          "recusandae illo quo totam aperiam ipsum quas. Placeat eius quaerat accusantium iusto voluptatum praesentium, architecto velit pariatur? Libero perspiciatis placeat enim molestiae officia quaerat sequi nulla, alias asperiores voluptas tenetur totam mollitia obcaecati ut quasi est natus facere accusamus nihil quibusdam eaque quidem facilis harum? Dicta quaerat quis quidem, provident ad, deserunt iusto magnam, atque impedit perferendis beatae. Sapiente, nam aut eaque esse libero reprehenderit aperiam eius minima. Ipsum est corporis, tenetur possimus magnam labore magni nesciunt laboriosam dolorum, fuga commodi, eos autem alias maxime reprehenderit eaque atque voluptate maiores",
      },
    ],
  },
  {
    id: 2,
    tag: "doing",
    tagColor: "#3e396b",

    items: [
      {
        id: 1,
        subtask: [
          {
            description: "Ensure the Dashboard is properly done",
            id: 1,
          },
          {
            description: "Ensure the Platform launch is good of design implementation",
            id: 2,
          },
          {
            description: "Ensure the Platform launch is good of design implementation",
            id: 2,
          },
        ],
        title: "Plan and prepare task for UI for onboarding flow",
        description:
          "Lorem ipsum dolor sit, amet consectetur. Ipsum est corporis, tenetur possimus magnam labore magni nesciunt laboriosam dolorum, fuga commodi, eos autem alias maxime reprehenderit eaque atque voluptate maiores",
      },
      {
        id: 2,
        subtask: [
          {
            description: "Ensure the Dashboard is properly done",
            id: 1,
          },
          {
            description: "Ensure the Platform launch is good of design implementation",
            id: 2,
          },
        ],
        title: "Meet up with Investor Uche, on the $100m project funding",
        description:
          "Lorem recusandae illo quo totam aperiam ipsum quas. Placeat eius quaerat accusantium iusto voluptatum praesentium, architecto velit pariatur? Libero perspiciatis placeat enim molestiae officia quaerat sequi nulla, alias asperiores voluptas tenetur totam mollitia obcaecati ut quasi est natus facere accusamus nihil quibusdam eaque quidem facilis harum? Dicta quaerat quis quidem, provident ad, deserunt iusto magnam, atque impedit perferendis beatae. Sapiente, nam aut eaque esse libero reprehenderit aperiam eius minima. Ipsum est corporis, tenetur possimus magnam labore magni nesciunt laboriosam dolorum, fuga commodi, eos autem alias maxime reprehenderit eaque atque voluptate maiores",
      },
    ],
  },
  {
    id: 3,
    tag: "done",
    tagColor: "#74c8ad",

    items: [
      {
        id: 3,
        subtask: [
          {
            description: "Ensure the Dashboard is properly done",
            id: 1,
          },
          {
            description: "Ensure facility manager to buy extra inverters for new investor meeting",
            id: 2,
          },
          {
            description: "Book appointments with vendors for the next meetings",
            id: 2,
          },
          {
            description: "Schedule board of directors meeting to 23 April 2023",
            id: 4,
          },
        ],
        title: "Push Investors meeting by three working days",
        description:
          "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, eveniet recusandae illo quo totam aperiam ipsum quas. Placeat eius quaerat accusantium iusto voluptatum praesentium, architecto velit pariatur? Libero perspiciatis placeat enim molestiae officia quaerat sequi nulla, alias asperiores voluptas tenetur totam mollitia obcaecati ut quasi est natus facere accusamus nihil quibusdam eaque quidem facilis harum? Dicta quaerat quis quidem, provident ad, deserunt iusto magnam, atque impedit perferendis beatae. Sapiente, nam aut eaque esse libero reprehenderit aperiam eius minima. Ipsum est corporis, tenetur possimus magnam labore magni nesciunt laboriosam dolorum, fuga commodi, eos autem alias maxime reprehenderit eaque atque voluptate maiores",
      },
    ],
  },
];
