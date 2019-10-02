/* 
  do not change this file name

  jest will look for this file when testing while using enzyme

  if using older version of react; use adequate adapter.
*/

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
