import compose from 'compose-function';
import { withRouter } from './with-router';
import { withMantine } from './with-mantine';
import AppProvider from '../store';

export const withProviders = compose(withRouter, withMantine, AppProvider);