const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'web-mf-insurance',

  exposes: {
    //'./Component': './src/app/app.component.ts',
    './InsuranceModule': './src/app/insurance-details/insurance-details.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
