export class Utils {
  static DB_URL = process.env.REACT_APP_ENV === 'prod' ? 'data' : 'data';
  static GITHUB_URL = 'https://api.github.com/graphql';
}
