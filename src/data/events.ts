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
    text: "With more than 1000 chapters in 50 countries, we gather to read in quiet camaraderie.",
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
  dateTime: "Thursday 30th April - 6.30pm - 8.30pm",
};

export const hopvault: EventDetails = {
  summary:
    "Come join us for a couple of drinks and an hour or two of reading at The Hop Vault!",
  img: "/hopvault.jpg",
  alt: "Hop Vault entrance",
  dateTime: "Tues 7th April - 6.30pm - 8.30pm ",
};

export const tbc: EventDetails = {
  summary:
    "That's it for our in-person meets this year! We'll be spending December resting, working on our TBRs, and making plans for 2026! Keep your eyes peeled for updates...",
  img: "/xmas.jpg",
  alt: "A book surrounded by Christmas lights",
  dateTime: "",
};

export const special: EventDetails = {
  summary: "Join us for a trial meet at The Waggon and Horses!",
  img: "/Waggon.jpg",
  alt: "The Waggon and Horses exterior",
  dateTime: "Tues 14th April - 6.30pm - 8.30pm",
};

export const nextEvent = drEamers;

export const nextEventRSVPLink =
  "https://www.eventbrite.com/e/april-silent-book-club-dr-eamers-distillery-bar-tickets-1986311000673?aff=oddtdtcreator";

export const upcomingEvents: UpcomingEvent[] = [
  // {
  //   announced: true,
  //   img: drEamers.img,
  //   location: "Dr Eamers' Distillery Bar",
  //   date: "Thurs 30th Apr - 6.30pm-8.30pm",
  //   link: "https://www.eventbrite.com/e/april-silent-book-club-dr-eamers-distillery-bar-tickets-1986311000673?aff=oddtdtcreator",
  //   position: "right",
  //   alt: "Dr Eamers' bar exterior",
  // },
  {
    announced: true,
    img: hopvault.img,
    location: "The Hop Vault",
    date: "Tues 5th May - 6.30pm-8.30pm",
    link: "https://www.eventbrite.com/e/may-silent-book-club-the-hop-vault-tickets-1987130015368?aff=oddtdtcreator",
    position: "left",
    alt: "The Hop Vault exterior",
  },
  // {
  //   announced: false,
  //   img: "/bookshop.jpg",
  //   location: "TBC",
  //   date: "Tues 5th May - Subject to change",
  //   link: "",
  //   position: "left",
  //   alt: "Books arranged on shelves in a bookshop",
  // },
];
