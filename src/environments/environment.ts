// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  speechServerUrl: '',

  gCloudProjectId: 'speechwithcloudstorage',
  gCloudProjectApiKey: '31e0121ccd54339bc906d59ba6a5cc962a984504',

  gCloudNLPApiUrl: 'https://language.googleapis.com/v1/documents:annotateText',
  gCloudVisionApiUrl: 'https://vision.googleapis.com/v1/images:annotate',
};
