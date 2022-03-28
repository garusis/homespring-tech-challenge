export default class FetchError extends Error {
  constructor(public response: Response) {
    super();
  }
}
