import { useId, useState } from "react";
import type { FaveBook } from "../data/favebooks";

function bookId(book: FaveBook, index: number): string {
  return `${index}-${book.title}`;
}

export interface FaveBooksTableProps {
  books: FaveBook[];
  describedBy?: string;
}

interface BookCardProps {
  book: FaveBook;
  checkboxId: string;
  isRead: boolean;
  onToggle: () => void;
}

const progressStyles =
  "bg-primary-slate rounded-[12px] px-4 py-4 sm:px-6 sm:py-5 font-nunito font-bold text-base sm:text-lg lg:text-[22px] text-white leading-[1.5] text-center lg:text-left";

const ReadProgress = ({
  readCount,
  total,
  id,
  announceUpdates = false,
  className = "",
}: {
  readCount: number;
  total: number;
  id: string;
  announceUpdates?: boolean;
  className?: string;
}) => (
  <p
    id={id}
    role="status"
    aria-live={announceUpdates ? "polite" : undefined}
    aria-atomic="true"
    className={`${progressStyles} ${className}`.trim()}
  >
    You&apos;ve read {readCount} of {total} books
  </p>
);

const BookCheckbox = ({
  book,
  checkboxId,
  isRead,
  onToggle,
}: {
  book: FaveBook;
  checkboxId: string;
  isRead: boolean;
  onToggle: () => void;
}) => (
  <>
    <input
      id={checkboxId}
      type="checkbox"
      checked={isRead}
      onChange={onToggle}
      className="w-5 h-5 min-w-[20px] accent-primary-slate cursor-pointer shrink-0 mt-0.5 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-slate focus-visible:ring-offset-2"
    />
    <label htmlFor={checkboxId} className="sr-only">
      Mark &quot;{book.title}&quot; as read
    </label>
  </>
);

const BookDetails = ({ book }: { book: FaveBook }) => (
  <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm font-mulish mt-3">
    <dt className="text-text-gray font-semibold">Author</dt>
    <dd className="text-primary-slate">{book.author}</dd>
    <dt className="text-text-gray font-semibold">First Published</dt>
    <dd className="text-primary-slate">{book.firstPublished}</dd>
    <dt className="text-text-gray font-semibold">Genre</dt>
    <dd className="text-text-gray">{book.genres}</dd>
    <dt className="text-text-gray font-semibold">Place on List</dt>
    <dd className="text-primary-slate">{book.placeOnList ?? "—"}</dd>
    <dt className="text-text-gray font-semibold">Guardian Top 100</dt>
    <dd className="text-primary-slate">
      {book.guardianTop100 ? (
        <>
          <span aria-hidden="true">Yes</span>
          <span className="sr-only">Yes, appears on Guardian top 100</span>
        </>
      ) : (
        <>
          <span aria-hidden="true">—</span>
          <span className="sr-only">No</span>
        </>
      )}
    </dd>
  </dl>
);

const BookCard = ({ book, checkboxId, isRead, onToggle }: BookCardProps) => (
  <li
    className={`bg-white rounded-[12px] p-4 shadow-sm border border-primary-slate/10 ${isRead ? "border-primary-slate/30" : ""}`}
  >
    <div className="flex gap-3 items-start">
      <BookCheckbox book={book} checkboxId={checkboxId} isRead={isRead} onToggle={onToggle} />
      <div className="min-w-0 flex-1">
        <p
          className={`font-nunito font-bold text-base text-primary-slate leading-[1.5] ${isRead ? "line-through" : ""}`}
        >
          {book.title}
          {isRead ? <span className="sr-only"> (marked as read)</span> : null}
        </p>
        <BookDetails book={book} />
      </div>
    </div>
  </li>
);

const FaveBooksTable = ({ books, describedBy }: FaveBooksTableProps) => {
  const [readState, setReadState] = useState<Record<string, boolean>>({});
  const tableId = useId();

  const readCount = books.filter((book, index) => readState[bookId(book, index)]).length;
  const total = books.length;

  const toggleRead = (id: string) => {
    setReadState((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      if (!next[id]) delete next[id];
      return next;
    });
  };

  const progressTopId = `${tableId}-progress-top`;
  const progressBottomId = `${tableId}-progress-bottom`;
  const trackerHeadingId = `${tableId}-tracker-heading`;

  return (
    <div
      className="flex flex-col gap-4"
      role="group"
      aria-labelledby={trackerHeadingId}
      aria-describedby={describedBy}
    >
      <h3 id={trackerHeadingId} className="sr-only">
        Track books you have read
      </h3>

      <ReadProgress
        readCount={readCount}
        total={total}
        id={progressTopId}
        announceUpdates
      />

      {/* Mobile: card list */}
      <ul className="flex flex-col gap-3 lg:hidden" aria-label="Community favourite books">
        {books.map((book, index) => {
          const id = bookId(book, index);
          const checkboxId = `${tableId}-mobile-${id}`;
          return (
            <BookCard
              key={id}
              book={book}
              checkboxId={checkboxId}
              isRead={!!readState[id]}
              onToggle={() => toggleRead(id)}
            />
          );
        })}
      </ul>

      {/* Desktop: table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-left border-collapse bg-white rounded-[12px] overflow-hidden border border-primary-slate/10">
          <caption className="sr-only">
            Full list of {total} community favourite books. Use the checkboxes in the Read column to mark books you have read.
          </caption>
          <thead>
            <tr className="bg-primary-clay/40">
              <th scope="col" className="py-4 px-3 font-nunito font-bold text-base text-black w-12 text-center">
                <span className="sr-only">Read</span>
              </th>
              <th scope="col" className="py-4 px-4 font-nunito font-bold text-base text-black">
                Book
              </th>
              <th scope="col" className="py-4 px-4 font-nunito font-bold text-base text-black">
                Author
              </th>
              <th scope="col" className="py-4 px-4 font-nunito font-bold text-base text-black whitespace-nowrap">
                First Published
              </th>
              <th scope="col" className="py-4 px-4 font-nunito font-bold text-base text-black">
                Genre
              </th>
              <th scope="col" className="py-4 px-4 font-nunito font-bold text-base text-black whitespace-nowrap">
                Place on List
              </th>
              <th scope="col" className="py-4 px-4 font-nunito font-bold text-base text-black whitespace-nowrap">
                Also Guardian Top 100
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => {
              const id = bookId(book, index);
              const checkboxId = `${tableId}-desktop-${id}`;
              const isRead = !!readState[id];

              return (
                <tr
                  key={id}
                  className={index % 2 === 0 ? "bg-white" : "bg-primary-clay/20"}
                >
                  <td className="py-3 px-3 text-center align-top">
                    <BookCheckbox
                      book={book}
                      checkboxId={checkboxId}
                      isRead={isRead}
                      onToggle={() => toggleRead(id)}
                    />
                  </td>
                  <td
                    className={`py-3 px-4 font-mulish text-base text-primary-slate align-top leading-[1.5] ${isRead ? "line-through" : ""}`}
                  >
                    {book.title}
                    {isRead ? <span className="sr-only"> (marked as read)</span> : null}
                  </td>
                  <td className="py-3 px-4 font-mulish text-base text-primary-slate align-top leading-[1.5]">
                    {book.author}
                  </td>
                  <td className="py-3 px-4 font-mulish text-base text-primary-slate align-top whitespace-nowrap leading-[1.5]">
                    {book.firstPublished}
                  </td>
                  <td className="py-3 px-4 font-mulish text-base text-text-gray align-top leading-[1.5]">
                    {book.genres}
                  </td>
                  <td className="py-3 px-4 font-mulish text-base text-primary-slate align-top whitespace-nowrap leading-[1.5]">
                    {book.placeOnList ?? "—"}
                  </td>
                  <td className="py-3 px-4 font-mulish text-base text-primary-slate align-top text-center leading-[1.5]">
                    {book.guardianTop100 ? (
                      <span>
                        <span aria-hidden="true">Yes</span>
                        <span className="sr-only">Yes, appears on Guardian top 100</span>
                      </span>
                    ) : (
                      <span>
                        <span aria-hidden="true">—</span>
                        <span className="sr-only">No</span>
                      </span>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <ReadProgress
        readCount={readCount}
        total={total}
        id={progressBottomId}
        className="mt-[50px]"
      />
    </div>
  );
};

export default FaveBooksTable;
