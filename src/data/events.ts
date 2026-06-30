export interface SummaryItem {
  title: string;
  text: string;
}

export interface EventDetails {
  summary: string;
  img: string;
  alt: string;
  dateTime: string;
}

export interface UpcomingEvent {
  announced: boolean;
  img: string;
  location: string;
  date: string;
  link: string;
  position: "left" | "right";
  alt: string;
}

export const summaries: SummaryItem[] = [
  {
    title: "BYOB(ook)",
    text: "No assigned literature, bring whatever you are currently reading - in whatever format you choose.",
  },
  {
    title: "Socialising Optional",
    text: "Simply an hour of silent uninterrupted reading with optional socialising before and after.",
  },
  {
    title: "Part of A Global Community",
    text: "With more than 2000 chapters in 60+ countries, we gather to read in quiet camaraderie.",
  },
];

export const sugarLoaf: EventDetails = {
  summary:
    "Why not spend an hour or two with a good book surrounded by nature over at Roots Allotments Sugar Loaf Fields!",
  img: "/sugarloaf.jpg",
  alt: "Allotment field with teepee",
  dateTime: "Tuesday 16th September 6.30pm - 8.30pm",
};

export const drEamers: EventDetails = {

    summary:
    "Come join us for cocktails and an hour or two reading at Dr Eamers' Distillery Bar!",
  img: "/dreamers.jpg",
  alt: "Dr Eamers entrance",
  dateTime: "Thursday 25th June - 6.30pm - 8.30pm",
};

export const hopvault: EventDetails = {
  summary:
    "Come join us for a couple of drinks and an hour or two of reading at The Hop Vault!",
  img: "/hopvault.jpg",
  alt: "Hop Vault entrance",
  dateTime: "Tues 7th July - 6.30pm - 8.30pm ",
};

export const tbc: EventDetails = {
  summary:
    "That's it for our in-person meets this year! We'll be spending December resting, working on our TBRs, and making plans for 2026! Keep your eyes peeled for updates...",
  img: "/xmas.jpg",
  alt: "A book surrounded by Christmas lights",
  dateTime: "",
};

export const waggon: EventDetails = {
  summary: "Bring a book, grab a drink, and enjoy an hour of peaceful reading with fellow book lovers at The Waggon and Horses.",
  img: "/Waggon.jpg",
  alt: "The Waggon and Horses exterior",
  dateTime: "Tues 9th June - 6.30pm - 8.30pm",
};

export const nextEvent = hopvault;

export const nextEventRSVPLink =
  "https://www.eventbrite.com/e/july-silent-book-club-the-hop-vault-tickets-1991201802192?aff=oddtdtcreator";

export const upcomingEvents: UpcomingEvent[] = [
  
    {
    announced: true,
    img: drEamers.img,
    location: "Dr Eamers' Distillery Bar",
    date: "Thurs 30th June - 6.30pm-8.30pm",
    link: "https://www.eventbrite.com/e/july-silent-book-club-dr-eamers-distillery-bar-tickets-1992827167704?aff=oddtdtcreator",
    position: "left",
    alt: "Dr Eamers' bar exterior",
  },
  // {
  //   announced: true,
  //   img: hopvault.img,
  //   location: "The Hop Vault",
  //   date: "Tues 7th July - 6.30pm-8.30pm",
  //   link: "https://www.eventbrite.com/e/july-silent-book-club-the-hop-vault-tickets-1991201802192?aff=oddtdtcreator",
  //   position: "left",
  //   alt: "The Hop Vault exterior",
  // },
  {
    announced: true,
    img: waggon.img,
    location: "The Waggon and Horses, Worcester St",
    date: "Tues 14th July - 6.30pm-8.30pm",
    link: "https://www.eventbrite.com/e/july-silent-book-club-the-waggon-and-horses-worcester-st-tickets-1991701412540?aff=oddtdtcreator",
    position: "left",
    alt: "The Waggons and Horses exterior",
  },
  // {
  //   announced: false,
  //   img: "/bookshop.jpg",
  //   location: "TBC",
  //   date: "Thurs 30th July - Subject to change",
  //   link: "",
  //   position: "right",
  //   alt: "Books arranged on shelves in a bookshop",
  // },
];
