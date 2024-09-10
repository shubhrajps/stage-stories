export type Story = {
    url: string;
    type?: string;
    preloadResource?: boolean;
};

export type UserStory = {
  userId: string,
  stories: Story[]
};

export const allStories : UserStory[] = [
  {
    userId: "George Jun",
    stories: [
      {
        url: "https://images.unsplash.com/photo-1676321626679-2513969695d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      },
      {
        url: "https://images.unsplash.com/photo-1676359912443-1bf438548584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      }]
  },
  {
    userId: "John Doe",
    stories: [
      {
        url: "https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
        preloadResource: false,
      }]
  },
  {
    userId: "Sunny Vile",
    stories: [{
      url: "https://plus.unsplash.com/premium_photo-1676231417481-5eae894e7f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
      preloadResource: false,
    },
    {
      url: "https://images.unsplash.com/photo-1676316698468-a907099ad5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
      preloadResource: false,
    },
    {
      url: "https://images.unsplash.com/photo-1676310483825-daa08914445e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
      preloadResource: false,
    }]
  },
  {
    userId: "Shubhraj Singh",
    stories: [{
      url: "https://plus.unsplash.com/premium_photo-1671554187530-8f9bd9449193?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    },
    {
      url: "https://images.unsplash.com/photo-1541356665065-22676f35dd40?q=80&w=1941&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    },
    {
      url: "https://images.unsplash.com/photo-1555448248-2571daf6344b?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    }]
  },
  {
    userId: "James Andrews",
    stories: [{
      url: "https://plus.unsplash.com/premium_photo-1677993185892-f7823f314c4c?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1664304582040-4f6c69c8380c?q=80&w=2536&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    },
    {
      url: "https://images.unsplash.com/photo-1508272615994-5f84dcd052d6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    }]
  },
  {
    userId: "Toronto Pil",
    stories: [{
      url: "https://images.unsplash.com/photo-1500835556837-99ac94a94552?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    },
    {
      url: "https://images.unsplash.com/photo-1504598318550-17eba1008a68?q=80&w=2572&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1664361480872-6416aab14696?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      preloadResource: true,
    }]
  },
];