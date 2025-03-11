export default function Pagination({
  page,
  setPrevPage,
  setNextPage,
  total,
  count,
}) {
  const startEntry = (page - 1) * 10 + 1;
  const lastEntry = total === 10 ? page * 10 : startEntry + total - 1;

  return (
    <div className="flex flex-col items-center">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {startEntry}
        </span>{' '}
        to{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {lastEntry}
        </span>{' '}
        of{' '}
        <span className="font-semibold text-gray-900 dark:text-white">
          {count}
        </span>{' '}
        Entries
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={setPrevPage}
        >
          Prev
        </button>
        <button
          className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          onClick={setNextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
