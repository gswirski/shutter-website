const sonyList = [
  'a1', 'a9', 'a9 II', 'a7', 'a7 II', 'a7 III', 'a7 IV', 'a7C', 'a7R', 'a7R II', 'a7R III', 'a7R IV',
  'a7S', 'a7S II', 'a7S III', 'a5000', 'a5100', 'a6000', 'a6100', 'a6300', 'a6400', 'a6500', 'a6600',
  'FX3', 'RX1 II', 'RX10 II', 'RX10 III', 'RX10 IV', 'RX100 III', 'RX100 IV', 'RX100 V', 'RX100 VI',
  'RX100 VII', 'HX400V', 'HX60V', 'HX80', 'HX90V', 'WX500', 'NEX-5R', 'NEX-5T', 'NEX-6',
  'ZV-1', 'ZV-E10'
];

const noFocus = ['a7 III', 'a7R III', 'a6100', 'a6400', 'a6600', 'RX10 IV'];
const noWideFocus = ['a9', 'a9 II', 'a7C', 'a7R IV', 'a7S III', 'FX3', 'RX100 VII', 'ZV-1', 'ZV-E10'];
const trackingFocus = ['a1', 'a7 IV'];
const noVideo = ['a7', 'a7R', 'a5000', 'a6000', 'RX1 II'];
const noBurst = ['a7', 'a7R', 'a7S', 'a5000', 'a5100', 'a6000', 'RX100 III', 'HX400V', 'NEX-5R', 'NEX-5T', 'NEX=6'];
const noBulb = ['HX400V', 'HX60V', 'HX80', 'HX90V', 'WX500', 'NEX-5R', 'NEX-5T', 'NEX-6']

const sonyCameras = sonyList
  .sort((a, b) => {
    const al = a.toLowerCase();
    const bl = b.toLowerCase();
    if (al < bl) { return -1; }
    if (bl > al) { return 1; }
    return 0;
  })
  .map((camera) => {
    var focus = 'normal'
    if (noFocus.includes(camera)) {
      focus = 'none'
    } else if (noWideFocus.includes(camera)) {
      focus = 'spot-required'
    } else if (trackingFocus.includes(camera)) {
      focus = 'tracking'
    }
    return {
      name: `Sony ${camera}`,
      support: true,
      video: !noVideo.includes(camera),
      burst: !noBurst.includes(camera),
      bulb: !noBulb.includes(camera),
      focus: focus,
      download: "https://itunes.apple.com/us/app/shutter-camera-remote/id1459044148?ls=1&mt=8"
    }
  });

const canonList = [
  'EOS R', 'EOS Ra', 'EOS RP', 'EOS R3', 'EOS R5', 'EOS R6',
  'EOS M10', 'EOS M100', 'EOS M200', 'EOS M5', 'EOS M50', 'EOS Kiss M', 'EOS M50 II', 'EOS Kiss M2',
  'EOS M6', 'EOS M6 II'
];

const canonCameras = canonList
  .sort((a, b) => {
    const al = a.toLowerCase();
    const bl = b.toLowerCase();
    if (al < bl) { return -1; }
    if (bl > al) { return 1; }
    return 0;
  })
  .map((camera) => {
    var focus = ""
    return {
      name: `Canon ${camera}`,
      support: true,
      video: true,
      burst: true,
      bulb: true,
      focus: 'normal',
      download: "https://itunes.apple.com/us/app/shutter-camera-remote/id1459044148?ls=1&mt=8"
    }
  });

const cameras = sonyCameras.concat(canonCameras);

export { cameras };
