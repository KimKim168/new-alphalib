
const AdvancedSearch = () => {
  return (
    <form className="max-w-ful">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Advanced Search</h2>
        <button type="button" className="text-gray-500 hover:text-gray-700 text-xl">
          &times;
        </button>
      </div>

      {/* Form Fields */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Left: Search Fields */}
        <div className="space-y-3">
          {/* Row 1 */}
          <div className="flex items-center space-x-2">
            <select
              name="field1"
              className="border rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Keyword</option>
              <option>Title</option>
              <option>Author</option>
            </select>
            <input
              type="text"
              name="query1"
              placeholder="Enter your search term"
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="operator1"
              className="border rounded-md px-2 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>AND</option>
              <option>OR</option>
              <option>NOT</option>
            </select>
          </div>

          {/* Row 2 */}
          <div className="flex items-center space-x-2">
            <select
              name="field2"
              className="border rounded-md px-3 py-2 text-sm text-gray-600"
            >
              <option>Title</option>
              <option>Keyword</option>
              <option>Author</option>
            </select>
            <input
              type="text"
              name="query2"
              placeholder="Enter your search term"
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="operator2"
              className="border rounded-md px-2 py-2 text-sm text-gray-600"
            >
              <option>AND</option>
              <option>OR</option>
              <option>NOT</option>
            </select>
          </div>

          {/* Row 3 */}
          <div className="flex items-center space-x-2">
            <select
              name="field3"
              className="border rounded-md px-3 py-2 text-sm text-gray-600"
            >
              <option>Author</option>
              <option>Keyword</option>
              <option>Title</option>
            </select>
            <input
              type="text"
              name="query3"
              placeholder="Enter your search term"
              className="flex-1 border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select
              name="operator3"
              className="border rounded-md px-2 py-2 text-sm text-gray-600"
            >
              <option>AND</option>
              <option>OR</option>
              <option>NOT</option>
            </select>
          </div>
        </div>

        {/* Right: Filters */}
        <div className="space-y-4">
          {/* Year */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Year</label>
            <div className="flex space-x-2 mt-1">
              <input
                type="text"
                name="year_from"
                placeholder="From"
                className="w-20 border rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="year_to"
                placeholder="To"
                className="w-20 border rounded-md px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Format */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Format</label>
            <select
              name="format"
              className="w-full border rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All formats</option>
              <option>Book</option>
              <option>Article</option>
              <option>Video</option>
            </select>
          </div>

          {/* Language */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Language</label>
            <select
              name="language"
              className="w-full border rounded-md px-3 py-2 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>All languages</option>
              <option>English</option>
              <option>Khmer</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button
          type="reset"
          className="text-blue-600 text-sm hover:underline"
        >
          Reset
        </button>
        <div className="flex space-x-3">
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
          >
            Search
          </button>
          <button
            type="button"
            className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );
};

export default AdvancedSearch;
