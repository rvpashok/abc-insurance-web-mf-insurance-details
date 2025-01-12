const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'web-mf-insurance',
  filename: 'remoteEntry.js',
  exposes: {
    './InsuranceModule': './src/app/insurance-details/insurance-details.module.ts'
  },

  //shareScope: 'insurance',  // Share scope name
  //remoteType: 'window', // The type of the remote container  
  remotes: {
            web_mf_host: 'web_mf_host@http://localhost:4200/remoteEntry.js', // MFA remote entry
          },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  // sharedMappings: ['shared'],

  // shared: {
  //   '@angular/core': { singleton: true },
  //   '@angular/common': { singleton: true },
  //   'shared': { singleton: true }, // Share services, models
  // },

});
