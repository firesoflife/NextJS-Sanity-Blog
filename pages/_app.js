import ThemeProvider from '../providers/ThemeProvider';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
  faSun,
  faMoon,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faBorderAll,
  faList,
  faSortNumericDown,
  faSortNumericUp,
  faSun,
  faMoon
);

import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'highlight.js/styles/base16/darcula.css';
import 'react-toggle/style.css';
import '../styles/index.scss';

export default ({ Component, pageProps }) => (
  <ThemeProvider>
    <Component {...pageProps} />;
  </ThemeProvider>
);
