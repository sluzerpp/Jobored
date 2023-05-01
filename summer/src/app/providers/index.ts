import compose from 'compose-function';
import { withRouter } from './with-router';
import { withMantine } from './with-mantine';

export const withProviders = compose(withRouter, withMantine);