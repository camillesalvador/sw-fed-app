## Getting Started

First, run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Notes

- Went back and forth on how I can utilize searching with filtration with the least amount API calls as possible and decided with the following:
- Initial page SSR (server side rendering) loaded with filters to show Next.js capabilities
- CSR (client side rendering) for character search with a debounce to prevent excessive API calls
- Didn't have enough time to implement filtering but skeleton is added.
  - The intention is to have a multi-level dropdown to filter for films, species and planets.
  - Grab characters within selected filter
  - Search would have been CSR with no additional API call to /people
- add loading in between calls

### If I had more time,

- add dark mode
- improve ui
- add playwright tests
- complete filter and search combined
- deploy to GH pages

## Things noticed

- Some characters (eg. Luke Skywalker) not returning species (high chance that those with missing are all human. need to check)
