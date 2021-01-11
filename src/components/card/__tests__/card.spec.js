import React from "react";
import ReactDOM from "react-dom";
import Card from "../card";
import { render, cleanup } from "@testing-library/react";

describe("Card Component", () => {
  let list = null;
  beforeEach(() => {
    list = {
      list: {
        id: "5ffa88cb8c4e9e07ec1ed74d",
        name: "To Do",
        closed: false,
        pos: 16384,
        softLimit: null,
        idBoard: "5ffa88cb8c4e9e07ec1ed74c",
        subscribed: false,
      },
      cards: [
        {
          id: "5ffb10d68a5268435ca4b9a4",
          checkItemStates: null,
          closed: false,
          dateLastActivity: "2021-01-11T06:18:26.954Z",
          desc: "",
          descData: null,
          dueReminder: null,
          idBoard: "5ffa88cb8c4e9e07ec1ed74c",
          idList: "5ffa88cb8c4e9e07ec1ed74d",
          idMembersVoted: [],
          idShort: 23,
          idAttachmentCover: null,
          idLabels: [],
          manualCoverAttachment: false,
          name: "With a backend of your choice",
          pos: 32768,
          shortLink: "zhSpIs48",
          isTemplate: false,
          cardRole: null,
          badges: {
            attachmentsByType: { trello: { board: 0, card: 0 } },
            location: false,
            votes: 0,
            viewingMemberVoted: false,
            subscribed: false,
            fogbugz: "",
            checkItems: 0,
            checkItemsChecked: 0,
            checkItemsEarliestDue: null,
            comments: 0,
            attachments: 0,
            description: false,
            due: null,
            dueComplete: false,
            start: null,
          },
          dueComplete: false,
          due: null,
          idChecklists: [],
          idMembers: [],
          labels: [],
          shortUrl: "https://trello.com/c/zhSpIs48",
          start: null,
          subscribed: false,
          url: "https://trello.com/c/zhSpIs48/23-with-a-backend-of-your-choice",
          cover: {
            idAttachment: null,
            color: null,
            idUploadedBackground: null,
            size: "normal",
            brightness: "light",
          },
        },
        {
          id: "5ffa88db78b8b0328c60475a",
          checkItemStates: null,
          closed: false,
          dateLastActivity: "2021-01-10T17:53:47.603Z",
          desc: "",
          descData: null,
          dueReminder: null,
          idBoard: "5ffa88cb8c4e9e07ec1ed74c",
          idList: "5ffa88cb8c4e9e07ec1ed74d",
          idMembersVoted: [],
          idShort: 1,
          idAttachmentCover: null,
          idLabels: [],
          manualCoverAttachment: false,
          name: "Create a backend api",
          pos: 196607,
          shortLink: "3aouVtCd",
          isTemplate: false,
          cardRole: null,
          badges: {
            attachmentsByType: { trello: { board: 0, card: 0 } },
            location: false,
            votes: 0,
            viewingMemberVoted: false,
            subscribed: false,
            fogbugz: "",
            checkItems: 0,
            checkItemsChecked: 0,
            checkItemsEarliestDue: null,
            comments: 0,
            attachments: 0,
            description: false,
            due: null,
            dueComplete: false,
            start: null,
          },
          dueComplete: false,
          due: null,
          idChecklists: [],
          idMembers: [],
          labels: [],
          shortUrl: "https://trello.com/c/3aouVtCd",
          start: null,
          subscribed: false,
          url: "https://trello.com/c/3aouVtCd/1-create-a-backend-api",
          cover: {
            idAttachment: null,
            color: null,
            idUploadedBackground: null,
            size: "normal",
            brightness: "light",
          },
        },
        {
          id: "5ffb404d2415b07da5e73039",
          checkItemStates: null,
          closed: false,
          dateLastActivity: "2021-01-10T17:58:37.984Z",
          desc: "",
          descData: null,
          dueReminder: null,
          idBoard: "5ffa88cb8c4e9e07ec1ed74c",
          idList: "5ffa88cb8c4e9e07ec1ed74d",
          idMembersVoted: [],
          idShort: 27,
          idAttachmentCover: null,
          idLabels: [],
          manualCoverAttachment: false,
          name: "Late night work",
          pos: 212991,
          shortLink: "lOZjhgoG",
          isTemplate: false,
          cardRole: null,
          badges: {
            attachmentsByType: { trello: { board: 0, card: 0 } },
            location: false,
            votes: 0,
            viewingMemberVoted: false,
            subscribed: false,
            fogbugz: "",
            checkItems: 0,
            checkItemsChecked: 0,
            checkItemsEarliestDue: null,
            comments: 0,
            attachments: 0,
            description: false,
            due: null,
            dueComplete: false,
            start: null,
          },
          dueComplete: false,
          due: null,
          idChecklists: [],
          idMembers: [],
          labels: [],
          shortUrl: "https://trello.com/c/lOZjhgoG",
          start: null,
          subscribed: false,
          url: "https://trello.com/c/lOZjhgoG/27-late-night-work",
          cover: {
            idAttachment: null,
            color: null,
            idUploadedBackground: null,
            size: "normal",
            brightness: "light",
          },
        },
      ],
    };
  });
  afterEach(cleanup);

  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Card card={list.cards[0]} />, div);
  });

  it("should render the header with correct text", () => {
    const updateLists = jest.fn();
    const cardChange = jest.fn();
    const changeId = jest.fn();
    list.cards.forEach((card, idx) => {
      const { container } = render(
        <Card
          key={idx}
          tabIndex={idx + 1}
          card={card}
          type={list.list.name}
          idList={changeId}
          updateLists={updateLists}
          cardChange={cardChange}
        />
      );
      expect(container.querySelector("label")).toHaveTextContent(card.name);
    });
  });
});
