export class Utils {
  static db_url = process.env.REACT_APP_ENV === 'prod' ? 'data' : 'data';
}
