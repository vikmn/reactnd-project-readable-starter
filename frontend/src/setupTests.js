import raf from './tempPolyfills'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn()
};
global.localStorage = localStorageMock;
global.fetchMock = require('fetch-mock');
configure({ adapter: new Adapter() });