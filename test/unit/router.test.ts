import * as Chance from 'chance';

import { Router, Response, Request } from '../../src';

const chance = new Chance();
let router: any;

describe('Express Router', () => {
  beforeEach(() => {
    router = new Router();
  });

  afterEach(() => {
    router.resetMocked();
  });

  test('all', () => {
    router.all('title');
    expect(router.all).toHaveBeenCalled();
    expect(router.all).toHaveBeenCalledWith('title');
  });

  test('get', () => {
    router.get('/', (request: any, response: any) => {
      expect(router.get).toHaveBeenCalled();
      expect(router.get).toHaveBeenCalledWith('/', expect.anything());
      expect(request).toBeInstanceOf(Request);
      expect(response).toBeInstanceOf(Response);
    });
  });

  test('param', () => {
    router.param('title');
    expect(router.param).toHaveBeenCalled();
    expect(router.param).toHaveBeenCalledWith('title');
  });

  test('Route', () => {
    router.route('/events')
      .get((request: any, response: any) => {
        expect(router.route).toHaveBeenCalled();
        expect(router.route).toHaveBeenCalledWith('/events');
        expect(router.get).toHaveBeenCalled();
        expect(router.get).toHaveBeenCalledWith(expect.anything());
        expect(request).toBeInstanceOf(Request);
        expect(response).toBeInstanceOf(Response);
      });
  });

  test('use', () => {
    router.use('/events');
    expect(router.use).toHaveBeenCalled();
    expect(router.use).toHaveBeenCalledWith('/events');
  });
});