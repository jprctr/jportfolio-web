// per-project layout and styling overrides

// default is by date, moving top 3 up to be 'above the fold'
export const manualSort: string[] = [
  'camp',
  'decoding-hate',
  'financial-analytics-dashboard',
  'portfolio-analytics-tool'
];

// default is 0
export const thumbnails: { [key: string]: number } = {
  'decoding-hate': 1,
  'financial-analytics-dashboard': 1,
  'brand-patterns': 2,
  'portfolio-analytics-tool': 3,
  'the-artists-way': 1,
  '2022-midterm-elections-big-board': 2,
  'you-watch-party': 2,
  'move-to-zero': 1,
  'phinch-app': 1
};

// default is auto
export const thumbnailAspect: { [key: string]: string } = {
  'you-watch-party': '3/2',
  'kleptocrat': '3/2',
}

// default is @3xl:basis-sm
export const galleryLayout: { [key: string]: string[] } = {
  'camp': [
    '@3xl:basis-full',
  ],
  'cute-pet': [
    '@3xl:basis-full',
    'flex-1 basis-3xs @3xl:basis-sm',
    'flex-1 basis-3xs @3xl:basis-sm',
  ],
  '2022-midterm-elections-big-board': [
    '@3xl:basis-full',
  ],
  'you-watch-party': [
    '@3xl:basis-full',
    'flex-1 basis-1/2 @md:basis-1/4',
    'flex-1 basis-1/2 @md:basis-1/4',
    'flex-1 basis-1/2 @md:basis-1/4',
    'flex-1 basis-1/2 @md:basis-1/4',
    'flex-1 basis-1/2 @md:basis-1/4',
  ],
  'move-to-zero': [
    '@3xl:basis-full',
  ],
  'kleptocrat': [
    'flex-1 basis-1/2 @md:basis-1/4',
    'flex-1 basis-1/2 @md:basis-1/4',
    'flex-1 basis-1/2 @md:basis-1/4',
  ],
}
