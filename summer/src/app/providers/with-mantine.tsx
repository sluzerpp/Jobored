import { MantineProvider } from '@mantine/core';

export const withMantine = (component: () => React.ReactNode) => () => (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      {component()}
    </MantineProvider>
);