// mock/index.ts
export default [
  {
    type: 'get',
    url: '/api/login',
    response: () => {
      return {
        token: '1234567890',
        userInfo: {
          name: 'admin',
          avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif'
        }
      };
    }
  }
];
