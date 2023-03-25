import {addPage, addPaths} from 'setjs/kernel/page-manager.js';

import './api.js';
import './template-functions.js';
import home from './pages/home.js';
import mission from './pages/mission.js'

export default function() {
  addPage('', home);
  addPage('mission',mission)
  addPaths('site', []);
}
