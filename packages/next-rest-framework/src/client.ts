import { defineCatchAllHandler } from './define-catch-all-handler';
import { defineEndpoints } from './define-endpoints';
import { NextRestFrameworkConfig } from './types';
import merge from 'lodash.merge';
import {
  getDefaultConfig,
  getOpenApiSpecWithPaths,
  logInitInfo
} from './utils';

export const NextRestFramework = <GlobalMiddlewareResponse>(
  _config?: NextRestFrameworkConfig<GlobalMiddlewareResponse>
) => {
  const config = merge(getDefaultConfig({ config: _config }), _config);

  if (!config.suppressInfo) {
    logInitInfo({ config });
  }

  return {
    config,
    getOpenApiSpec: async () => await getOpenApiSpecWithPaths({ config }),
    defineCatchAllHandler: defineCatchAllHandler({ config }),
    defineEndpoints: defineEndpoints({ config })
  };
};
