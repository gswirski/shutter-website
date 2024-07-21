const sonyList = [
  'a1', 'a9', 'a9 II', 'a9 III', 'a7', 'a7 II', 'a7 III', 'a7 IV', 'a7C', 'a7C II', 'a7CR', 'a7R', 'a7R II', 'a7R III', 'a7R IV', 'a7R V',
  'a7S', 'a7S II', 'a7S III', 'a5000', 'a5100', 'a6000', 'a6100', 'a6300', 'a6400', 'a6500', 'a6600', 'a6700',
  'FX3', 'FX30', 'RX1 II', 'RX10 II', 'RX10 III', 'RX10 IV', 'RX100 III', 'RX100 IV', 'RX100 V', 'RX100 VI',
  'RX100 VII', 'HX400V', 'HX60V', 'HX80', 'HX90V', 'HX99', 'WX500', 'NEX-5R', 'NEX-5T', 'NEX-6',
  'ZV-1', 'ZV-1 II', 'ZV-1F', 'ZV-E1', 'ZV-E10', 'ZV-E10 II'
];

const noFocus = ['a7 III', 'a7R III', 'a6100', 'a6400', 'a6600', 'RX10 IV', 'HX99'];
const noWideFocus = [];
const trackingFocus = ['a1', 'a7 IV'];
const focusBracketing = ['a6700', 'a1', 'a9', 'a9 II', 'a7 IV', 'a7C', 'a7C II', 'a7CR', 'a7R IV', 'a7R V', 'a7S III', 'FX3', 'FX30', 'RX100 VII', 'ZV-1', 'ZV-1 II', 'ZV-1F', 'ZV-E1', 'ZV-E10', 'ZV-E10 II'];
const noVideo = ['a7', 'a7R', 'a5000', 'a6000', 'RX1 II'];
const noBurst = ['a7', 'a7R', 'a7S', 'a5000', 'a5100', 'a6000', 'RX100 III', 'HX400V', 'NEX-5R', 'NEX-5T', 'NEX-6'];
const noBulb = ['HX400V', 'HX60V', 'HX80', 'HX90V', 'WX500', 'NEX-5R', 'NEX-5T', 'NEX-6', 'FX-3', 'FX-30', 'ZV-1', 'ZV-1F', 'ZV-1 II', 'ZV-E1', 'ZV-E10', 'ZV-E10 II'];

const sonyCameras = sonyList
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
      focusBracketing: focusBracketing.includes(camera),
      download: "https://itunes.apple.com/us/app/shutter-camera-remote/id1459044148?ls=1&mt=8",
      zoom: true,
    }
  });

const canonEosList = [
  "R", "Ra", "RP", "R3", "R5", "R5 C", "R6", "R6 II", "R7", "R8", "R10", "R50", "R100",
  "M10", "M100", "M200", "M5", "M50", "M50 II", "M6", "M6 II",
  "5D IV", "6D", "6D II",
  "70D", "77D", "80D", "90D",
  "200D", "200D II", "250D", "750D", "760D", "800D", "850D",
  "1300D", "1500D", "2000D", "3000D", "4000D", "8000D", "9000D"
]
const canonEosKissList = [
  "M", "M2", "X10", "X10i", "X80", "X8i", "X9", "X90", "X9i"
]
const canonEosRebelList = [
  "SL2", "SL3", "T100", "T6", "T6i", "T6s", "T7", "T7i", "T8i"
]
const canonPowerShotList = [
  "G1 X Mark III", "G5 X Mark II", "G7 X Mark II", "G7 X Mark III",
  "G9 X Mark II",
  "SX420 HS", "SX430 IS", "SX432 IS", "SX540 HS", "SX620 HS",
  "SX70 HS", "SX720 HS", "SX730 HS", "SX740 HS"
]
const canonList = canonEosList.map(x => `EOS ${x}`)
  .concat(canonEosKissList.map(x => `EOS Kiss ${x}`))
  .concat(canonEosRebelList.map(x => `EOS Rebel ${x}`))
  .concat(canonPowerShotList.map(x => `PowerShot ${x}`))

const noUsb = [
  'EOS M5', 'EOS M6', 'EOS M100',
  'PowerShot G5 X Mark II', 'PowerShot G7 X Mark III',
  'PowerShot SX70 HS', 'PowerShot SX740 HS', 'PowerShot G1 X Mark III',
  'PowerShot SX730 HS', 'PowerShot G9 X Mark II'
]

const canonCameras = canonList
  .map((camera) => {
    return {
      name: `Canon ${camera}`,
      support: true,
      video: true,
      burst: true,
      bulb: true,
      focus: 'normal',
      import: true,
      importAdvanced: true,
      download: "https://itunes.apple.com/us/app/shutter-camera-remote/id1459044148?ls=1&mt=8",
      usb: !noUsb.includes(camera)
    }
  });

const fujifilmList = [
  "X-E3", "X-E4", "X-H1", "X-H2", "X-H2S",
  "X-Pro2", "X-Pro3", "X-S10", "X-S20",
  "X-T2", "X-T20",
  "X-T3", "X-T30", "X-T30 II", "X-T4", "X-T5", "X100V", "X100VI"
]

const fujifilmCameras = fujifilmList
  .map((camera) => {
    return {
      name: `Fujifilm ${camera}`,
      support: true,
      video: true,
      burst: false,
      bulb: false,
      focus: 'normal',
      import: true,
      download: "https://itunes.apple.com/us/app/shutter-fujifilm-camera-remote/id6478856044?ls=1&mt=8"
    }
  });

const cameras = sonyCameras
  .concat(canonCameras)
  .concat(fujifilmCameras)
  .sort((a, b) => {
    const al = a.name.toLowerCase();
    const bl = b.name.toLowerCase();
    if (al < bl) { return -1; }
    if (bl > al) { return 1; }
    return 0;
  });

export { cameras };
