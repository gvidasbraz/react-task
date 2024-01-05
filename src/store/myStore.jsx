import { create } from 'zustand';

export const useStore = create((set) => ({
  users: [
    {
      username: 'test',
      password: 'test123',
    },
  ],

  currentUser: '',

  setCurrentUser: (username) => set({ currentUser: username }),

  addUser: (newUser) =>
    set((state) => ({
      users: [...state.users, newUser],
    })),

  updateUser: (newUsername) =>
    set((state) => {
      const updatedUsers = state.users.map((user) =>
        user.username === state.currentUser
          ? { ...user, username: newUsername }
          : user
      );

      return {
        users: updatedUsers,
        currentUser: newUsername,
      };
    }),

  posts: [
    {
      username: 'test1',
      title: 'React Logo',
      image:
        'https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png',
      time: '2024-01-02T14:02:38.458Z',
      id: 'id1',
    },
    {
      username: 'test1',
      title: 'JS logo',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png',
      time: '2024-01-02T13:02:38.458Z',
      id: 'id2',
    },
    {
      username: 'test3',
      title: 'HTML5 Logo',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png',
      time: '2024-01-02T12:02:38.458Z',
      id: 'id3',
    },
    {
      username: 'test6',
      title: 'CSS Logo',
      image: 'https://1000logos.net/wp-content/uploads/2020/09/CSS-Logo.jpg',
      time: '2024-01-02T11:02:38.458Z',
      id: 'id4',
    },
  ],

  addPost: (newPost) =>
    set((state) => ({
      posts: [...state.posts, newPost],
      sortedPosts: [...state.posts, newPost].sort((a, b) => {
        const dateA = new Date(a.time);
        const dateB = new Date(b.time);
        return dateB - dateA;
      }),
    })),

  sortOptions: {
    title: '',
    date: '',
  },

  setSortOptions: (options) => set({ sortOptions: options }),

  sortPosts: (order, type) =>
    set((state) => ({
      posts: [...state.posts].sort((a, b) => {
        if (type === 'date') {
          return order === 'asc'
            ? new Date(a.time) - new Date(b.time)
            : new Date(b.time) - new Date(a.time);
        } else if (type === 'title') {
          return order === 'az'
            ? a.title.localeCompare(b.title)
            : b.title.localeCompare(a.title);
        }
        return 0;
      }),
    })),
}));
