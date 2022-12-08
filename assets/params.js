export const params = {
  file:{
    display: 'File',
    type: 'file',
    target: 'filebody',
    default: [],
    size: 4
  },
  fileextension: {
    display: 'file extension',
    type: 'select',
    items: [
      { name: 'lp', display: 'lp' },
      { name: 'dk', display: 'dk' }
    ],
    default: { name: 'lp', display: 'lp' },
    size: 4
  },
  //command
  command: {
    display: 'Command',
    type: 'select',
    items: [
      { name: '',          display: '(None)' },
      { name: 'check',     display: 'check',     flag: 'check' },
      { name: 'decision-tree',      display: 'decision-tree',  flag: 'tree' },
      { name: 'export',    display: 'export',       flag: 'export' },
      { name: 'help',      display: 'help' },
      { name: 'version',   display: 'version' }
    ],
    default: { name: 'check', display: 'check' },
    size: 4
  },
  //common option
  help:        { display: '--help',         type: 'check',  default: false,  size: 'half' },
  version:     { display: '--version',      type: 'check',  default: false,  size: 'half' },
  recordtime:  { display: '--record-time',  type: 'check',  default: false,  size: 'half' },
  nowarnings:  { display: '--no-warnings',  type: 'check',  default: false,  size: 'half' },
  //decision-tree option
  ghost:  { display: '--ghost', type: 'check',  default: false,  size: 'whole', if: 'tree' },
  
  filebody: {
    display: 'file body',
    type: 'textarea',
    rows: 20,
    default: '',
    size: 'whole'
  }
}
