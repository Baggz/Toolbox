(function() {

  /**
   * Toolbox
   *
   * @constructor
   */
  var toolbox = {};

  /**
   * Methods
   */
  var methods = {

    /**
     * GetRandomNumber
     *
     * Generates a random number in range of {min} and {max}.
     *
     * @param {number} min
     * @param {number} max
     * @param {number|array} except
     * @param {function} callback
     */
    getRandomNum: function(min, max, except) {

      // Resulting number
      var number = 0;

      /**
       * GetNumber
       *
       * @param {number} min
       * @param {number} max
       */
      var getNum = function(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
      };
  
      // If ‘except’ parameter is specified
      if (except && typeof except === 'number') {
        do {
          number = getNum(min, max);
        } while (number === except);
        return number;
      }

      // If ‘except’ parameter is specified and its type is array
      if (except && Array.isArray(except)) {
        do {
          number = getNum(min, max);
        } while (except.indexOf(number) !== -1);
        return number;
      }
  
      // If ‘except’ parametr is not specified
      if (!except) {
        return getNum(min, max);
      }

    },

    /**
     * GetRandomNumbers
     *
     * Generates random numbers in range of {min} and {max}.
     *
     * @param {number} min
     * @param {number} max
     * @param {number} count
     * @param {number|array} except
     * @param {function} callback
     */
    getRandomNums: function(min, max, count, except) {

      // List of resulting numbers
      var numbers = [];
  
      // List of banned numbers
      var banned = [];
  
      // If ‘except’ parameter is specified and its type is number
      if (except && typeof except === 'number') {
        banned.push(except);
      }

      // If ‘except’ parameter is specified and its type is array
      if (except && Array.isArray(except)) {
        except.forEach(function(number) {
          banned.push(number);
        });
      }
  
      // Generates random numbers
      for (var i = 0; i < count; i++) {
        var number = methods.getRandomNum(min, max, banned);
        [numbers, banned].forEach(function(variable) {
          variable.push(number);
        });
      }

      return numbers;

    },

    /**
     * GetUid
     *
     * Generates UID.
     *
     * @param {number} length
     * @param {object} options
     * @param {function} callback
     */
    getUid: function(length, preferedCollections) {
  
      // Resulting UID
      var output = [];

      // Basic collections
      var collections = {
        numbers: '0123456789',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      };

      // If a length parameter wasn't specified, set to 15
      if (typeof length === 'undefined') {
        length = 15;
      }
  
      // Overwrites default collections
      for (var key in preferedCollections) {
        if (preferedCollections.hasOwnProperty(key)) {
  
          // Deletes a collection
          if (preferedCollections[key] === false && collections[key]) {
            delete collections[key];
          }
  
          // Adds a new collection
          if (typeof preferedCollections[key] === 'string') {
            collections[key] = preferedCollections[key];
          }
  
        }
      }
  
      // List of collections (for instance ‘numbers’, ‘lowercase’, ...)
      var collectionsKeys = Object.keys(collections);    
  
      // Generates UID
      do {
  
        // Select random collection (for example ‘numbers’)
        var collectionIndex = methods.getRandomNum(0 , collectionsKeys.length - 1);
        var collection = collections[collectionsKeys[collectionIndex]];
  
        // From the selected colection choose one random character
        var index = methods.getRandomNum(0, collection.length - 1);      
        output.push(collection[index]);
  
      } while (output.length < length);
  
      return output.join('');

    },

    /**
     * DetectMimeType
     * 
     * Detects mime type based on file extension.
     *
     * @param {string} input
     */
    detectMimeType: function(input) {

      // List of mime types
      var types = {
        '3dm': 'x-world/x-3dmf',
        '3dmf': 'x-world/x-3dmf',
        'a': 'application/octet-stream',
        'aab': 'application/x-authorware-bin',
        'aam': 'application/x-authorware-map',
        'aas': 'application/x-authorware-seg',
        'abc': 'text/vnd.abc',
        'acgi': 'text/html',
        'afl': 'video/animaflex',
        'ai': 'application/postscript',
        'aif': 'audio/x-aiff',
        'aifc': 'audio/x-aiff',
        'aiff': 'audio/x-aiff',
        'aim': 'application/x-aim',
        'aip': 'text/x-audiosoft-intra',
        'ani': 'application/x-navi-animation',
        'aos': 'application/x-nokia-9000-communicator-add-on-software',
        'aps': 'application/mime',
        'arc': 'application/octet-stream',
        'arj': 'application/octet-stream',
        'art': 'image/x-jg',
        'asf': 'video/x-ms-asf',
        'asm': 'text/x-asm',
        'asp': 'text/asp',
        'asx': 'video/x-ms-asf-plugin',
        'au': 'audio/x-au',
        'avi': 'video/x-msvideo',
        'avs': 'video/avs-video',
        'bcpio': 'application/x-bcpio',
        'bin': 'application/x-macbinary',
        'bm': 'image/bmp',
        'bmp': 'image/x-windows-bmp',
        'boo': 'application/book',
        'book': 'application/book',
        'boz': 'application/x-bzip2',
        'bsh': 'application/x-bsh',
        'bz': 'application/x-bzip',
        'bz2': 'application/x-bzip2',
        'c': 'text/x-c',
        'c++': 'text/plain',
        'cat': 'application/vnd.ms-pki.seccat',
        'cc': 'text/x-c',
        'ccad': 'application/clariscad',
        'cco': 'application/x-cocoa',
        'cdf': 'application/x-netcdf',
        'cer': 'application/x-x509-ca-cert',
        'cha': 'application/x-chat',
        'chat': 'application/x-chat',
        'class': 'application/x-java-class',
        'com': 'text/plain',
        'conf': 'text/plain',
        'cpio': 'application/x-cpio',
        'cpp': 'text/x-c',
        'cpt': 'application/x-cpt',
        'crl': 'application/pkix-crl',
        'crt': 'application/x-x509-user-cert',
        'csh': 'text/x-script.csh',
        'css': 'text/css',
        'cxx': 'text/plain',
        'dcr': 'application/x-director',
        'deepv': 'application/x-deepv',
        'def': 'text/plain',
        'der': 'application/x-x509-ca-cert',
        'dif': 'video/x-dv',
        'dir': 'application/x-director',
        'dl': 'video/x-dl',
        'doc': 'application/msword',
        'dot': 'application/msword',
        'dp': 'application/commonground',
        'drw': 'application/drafting',
        'dump': 'application/octet-stream',
        'dv': 'video/x-dv',
        'dvi': 'application/x-dvi',
        'dwf': 'model/vnd.dwf',
        'dwg': 'image/x-dwg',
        'dxf': 'image/x-dwg',
        'dxr': 'application/x-director',
        'el': 'text/x-script.elisp',
        'elc': 'application/x-elc',
        'env': 'application/x-envoy',
        'eps': 'application/postscript',
        'es': 'application/x-esrehber',
        'etx': 'text/x-setext',
        'evy': 'application/x-envoy',
        'exe': 'application/octet-stream',
        'f': 'text/x-fortran',
        'f77': 'text/x-fortran',
        'f90': 'text/x-fortran',
        'fdf': 'application/vnd.fdf',
        'fif': 'image/fif',
        'fli': 'video/x-fli',
        'flo': 'image/florian',
        'flx': 'text/vnd.fmi.flexstor',
        'fmf': 'video/x-atomic3d-feature',
        'for': 'text/x-fortran',
        'fpx': 'image/vnd.net-fpx',
        'frl': 'application/freeloader',
        'funk': 'audio/make',
        'g': 'text/plain',
        'g3': 'image/g3fax',
        'gif': 'image/gif',
        'gl': 'video/x-gl',
        'gsd': 'audio/x-gsm',
        'gsm': 'audio/x-gsm',
        'gsp': 'application/x-gsp',
        'gss': 'application/x-gss',
        'gtar': 'application/x-gtar',
        'gz': 'application/x-gzip',
        'gzip': 'multipart/x-gzip',
        'h': 'text/x-h',
        'hdf': 'application/x-hdf',
        'help': 'application/x-helpfile',
        'hgl': 'application/vnd.hp-hpgl',
        'hh': 'text/x-h',
        'hlb': 'text/x-script',
        'hlp': 'application/x-winhelp',
        'hpg': 'application/vnd.hp-hpgl',
        'hpgl': 'application/vnd.hp-hpgl',
        'hqx': 'application/x-mac-binhex40',
        'hta': 'application/hta',
        'htc': 'text/x-component',
        'htm': 'text/html',
        'html': 'text/html',
        'htmls': 'text/html',
        'htt': 'text/webviewhtml',
        'htx': 'text/html',
        'ice': 'x-conference/x-cooltalk',
        'ico': 'image/x-icon',
        'idc': 'text/plain',
        'ief': 'image/ief',
        'iefs': 'image/ief',
        'iges': 'model/iges',
        'igs': 'model/iges',
        'ima': 'application/x-ima',
        'imap': 'application/x-httpd-imap',
        'inf': 'application/inf',
        'ins': 'application/x-internett-signup',
        'ip': 'application/x-ip2',
        'isu': 'video/x-isvideo',
        'it': 'audio/it',
        'iv': 'application/x-inventor',
        'ivr': 'i-world/i-vrml',
        'ivy': 'application/x-livescreen',
        'jam': 'audio/x-jam',
        'jav': 'text/x-java-source',
        'java': 'text/x-java-source',
        'jcm': 'application/x-java-commerce',
        'jfif': 'image/pjpeg',
        'jfif-tbnl': 'image/jpeg',
        'jpe': 'image/pjpeg',
        'jpeg': 'image/pjpeg',
        'jpg': 'image/pjpeg',
        'jps': 'image/x-jps',
        'js': 'application/javascript',
        'json': 'application/json',
        'jut': 'image/jutvision',
        'kar': 'music/x-karaoke',
        'ksh': 'text/x-script.ksh',
        'la': 'audio/x-nspaudio',
        'lam': 'audio/x-liveaudio',
        'latex': 'application/x-latex',
        'lha': 'application/x-lha',
        'lhx': 'application/octet-stream',
        'list': 'text/plain',
        'lma': 'audio/x-nspaudio',
        'log': 'text/plain',
        'lsp': 'text/x-script.lisp',
        'lst': 'text/plain',
        'lsx': 'text/x-la-asf',
        'ltx': 'application/x-latex',
        'lzh': 'application/x-lzh',
        'lzx': 'application/x-lzx',
        'm': 'text/x-m',
        'm1v': 'video/mpeg',
        'm2a': 'audio/mpeg',
        'm2v': 'video/mpeg',
        'm3u': 'audio/x-mpequrl',
        'man': 'application/x-troff-man',
        'map': 'application/x-navimap',
        'mar': 'text/plain',
        'mbd': 'application/mbedlet',
        'mc$': 'application/x-magic-cap-package-1.0',
        'mcd': 'application/x-mathcad',
        'mcf': 'text/mcf',
        'mcp': 'application/netmc',
        'me': 'application/x-troff-me',
        'mht': 'message/rfc822',
        'mhtml': 'message/rfc822',
        'mid': 'x-music/x-midi',
        'midi': 'x-music/x-midi',
        'mif': 'application/x-mif',
        'mime': 'www/mime',
        'mjf': 'audio/x-vnd.audioexplosion.mjuicemediafile',
        'mjpg': 'video/x-motion-jpeg',
        'mm': 'application/x-meme',
        'mme': 'application/base64',
        'mod': 'audio/x-mod',
        'moov': 'video/quicktime',
        'mov': 'video/quicktime',
        'movie': 'video/x-sgi-movie',
        'mp2': 'video/x-mpeq2a',
        'mp3': 'video/x-mpeg',
        'mpa': 'video/mpeg',
        'mpc': 'application/x-project',
        'mpe': 'video/mpeg',
        'mpeg': 'video/mpeg',
        'mpg': 'video/mpeg',
        'mpga': 'audio/mpeg',
        'mpp': 'application/vnd.ms-project',
        'mpt': 'application/x-project',
        'mpv': 'application/x-project',
        'mpx': 'application/x-project',
        'mrc': 'application/marc',
        'ms': 'application/x-troff-ms',
        'mv': 'video/x-sgi-movie',
        'my': 'audio/make',
        'mzz': 'application/x-vnd.audioexplosion.mzz',
        'nap': 'image/naplps',
        'naplps': 'image/naplps',
        'nc': 'application/x-netcdf',
        'ncm': 'application/vnd.nokia.configuration-message',
        'nif': 'image/x-niff',
        'niff': 'image/x-niff',
        'nix': 'application/x-mix-transfer',
        'nsc': 'application/x-conference',
        'nvd': 'application/x-navidoc',
        'o': 'application/octet-stream',
        'oda': 'application/oda',
        'omc': 'application/x-omc',
        'omcd': 'application/x-omcdatamaker',
        'omcr': 'application/x-omcregerator',
        'p': 'text/x-pascal',
        'p10': 'application/x-pkcs10',
        'p12': 'application/x-pkcs12',
        'p7a': 'application/x-pkcs7-signature',
        'p7c': 'application/x-pkcs7-mime',
        'p7m': 'application/x-pkcs7-mime',
        'p7r': 'application/x-pkcs7-certreqresp',
        'p7s': 'application/pkcs7-signature',
        'part': 'application/pro_eng',
        'pas': 'text/pascal',
        'pbm': 'image/x-portable-bitmap',
        'pcl': 'application/x-pcl',
        'pct': 'image/x-pict',
        'pcx': 'image/x-pcx',
        'pdb': 'chemical/x-pdb',
        'pdf': 'application/pdf',
        'pfunk': 'audio/make.my.funk',
        'pgm': 'image/x-portable-greymap',
        'pic': 'image/pict',
        'pict': 'image/pict',
        'pkg': 'application/x-newton-compatible-pkg',
        'pko': 'application/vnd.ms-pki.pko',
        'pl': 'text/x-script.perl',
        'plx': 'application/x-pixclscript',
        'pm': 'text/x-script.perl-module',
        'pm4': 'application/x-pagemaker',
        'pm5': 'application/x-pagemaker',
        'png': 'image/png',
        'pnm': 'image/x-portable-anymap',
        'pot': 'application/vnd.ms-powerpoint',
        'pov': 'model/x-pov',
        'ppa': 'application/vnd.ms-powerpoint',
        'ppm': 'image/x-portable-pixmap',
        'pps': 'application/vnd.ms-powerpoint',
        'ppt': 'application/x-mspowerpoint',
        'ppz': 'application/mspowerpoint',
        'pre': 'application/x-freelance',
        'prt': 'application/pro_eng',
        'ps': 'application/postscript',
        'psd': 'application/octet-stream',
        'pvu': 'paleovu/x-pv',
        'pwz': 'application/vnd.ms-powerpoint',
        'py': 'text/x-script.phyton',
        'pyc': 'applicaiton/x-bytecode.python',
        'qcp': 'audio/vnd.qcelp',
        'qd3': 'x-world/x-3dmf',
        'qd3d': 'x-world/x-3dmf',
        'qif': 'image/x-quicktime',
        'qt': 'video/quicktime',
        'qtc': 'video/x-qtc',
        'qti': 'image/x-quicktime',
        'qtif': 'image/x-quicktime',
        'ra': 'audio/x-realaudio',
        'ram': 'audio/x-pn-realaudio',
        'ras': 'image/x-cmu-raster',
        'rast': 'image/cmu-raster',
        'rexx': 'text/x-script.rexx',
        'rf': 'image/vnd.rn-realflash',
        'rgb': 'image/x-rgb',
        'rm': 'audio/x-pn-realaudio',
        'rmi': 'audio/mid',
        'rmm': 'audio/x-pn-realaudio',
        'rmp': 'audio/x-pn-realaudio-plugin',
        'rng': 'application/vnd.nokia.ringing-tone',
        'rnx': 'application/vnd.rn-realplayer',
        'roff': 'application/x-troff',
        'rp': 'image/vnd.rn-realpix',
        'rpm': 'audio/x-pn-realaudio-plugin',
        'rt': 'text/vnd.rn-realtext',
        'rtf': 'text/richtext',
        'rtx': 'text/richtext',
        'rv': 'video/vnd.rn-realvideo',
        's': 'text/x-asm',
        's3m': 'audio/s3m',
        'saveme': 'application/octet-stream',
        'sbk': 'application/x-tbook',
        'scm': 'video/x-scm',
        'sdml': 'text/plain',
        'sdp': 'application/x-sdp',
        'sdr': 'application/sounder',
        'sea': 'application/x-sea',
        'set': 'application/set',
        'sgm': 'text/x-sgml',
        'sgml': 'text/x-sgml',
        'sh': 'text/x-script.sh',
        'shar': 'application/x-shar',
        'shtml': 'text/x-server-parsed-html',
        'sid': 'audio/x-psid',
        'sit': 'application/x-stuffit',
        'skd': 'application/x-koan',
        'skm': 'application/x-koan',
        'skp': 'application/x-koan',
        'skt': 'application/x-koan',
        'sl': 'application/x-seelogo',
        'smi': 'application/smil',
        'smil': 'application/smil',
        'snd': 'audio/x-adpcm',
        'sol': 'application/solids',
        'spc': 'text/x-speech',
        'spl': 'application/futuresplash',
        'spr': 'application/x-sprite',
        'sprite': 'application/x-sprite',
        'src': 'application/x-wais-source',
        'ssi': 'text/x-server-parsed-html',
        'ssm': 'application/streamingmedia',
        'sst': 'application/vnd.ms-pki.certstore',
        'step': 'application/step',
        'stl': 'application/x-navistyle',
        'stp': 'application/step',
        'sv4cpio': 'application/x-sv4cpio',
        'sv4crc': 'application/x-sv4crc',
        'svf': 'image/x-dwg',
        'svr': 'x-world/x-svr',
        'swf': 'application/x-shockwave-flash',
        't': 'application/x-troff',
        'talk': 'text/x-speech',
        'tar': 'application/x-tar',
        'tbk': 'application/x-tbook',
        'tcl': 'text/x-script.tcl',
        'tcsh': 'text/x-script.tcsh',
        'tex': 'application/x-tex',
        'texi': 'application/x-texinfo',
        'texinfo': 'application/x-texinfo',
        'text': 'text/plain',
        'tgz': 'application/x-compressed',
        'tif': 'image/x-tiff',
        'tiff': 'image/x-tiff',
        'tr': 'application/x-troff',
        'tsi': 'audio/tsp-audio',
        'tsp': 'audio/tsplayer',
        'tsv': 'text/tab-separated-values',
        'turbot': 'image/florian',
        'txt': 'text/plain',
        'uil': 'text/x-uil',
        'uni': 'text/uri-list',
        'unis': 'text/uri-list',
        'unv': 'application/i-deas',
        'uri': 'text/uri-list',
        'uris': 'text/uri-list',
        'ustar': 'multipart/x-ustar',
        'uu': 'text/x-uuencode',
        'uue': 'text/x-uuencode',
        'vcd': 'application/x-cdlink',
        'vcs': 'text/x-vcalendar',
        'vda': 'application/vda',
        'vdo': 'video/vdo',
        'vew': 'application/groupwise',
        'viv': 'video/vnd.vivo',
        'vivo': 'video/vnd.vivo',
        'vmd': 'application/vocaltec-media-desc',
        'vmf': 'application/vocaltec-media-file',
        'voc': 'audio/x-voc',
        'vos': 'video/vosaic',
        'vox': 'audio/voxware',
        'vqe': 'audio/x-twinvq-plugin',
        'vqf': 'audio/x-twinvq',
        'vql': 'audio/x-twinvq-plugin',
        'vrml': 'x-world/x-vrml',
        'vrt': 'x-world/x-vrt',
        'vsd': 'application/x-visio',
        'vst': 'application/x-visio',
        'vsw': 'application/x-visio',
        'w60': 'application/wordperfect6.0',
        'w61': 'application/wordperfect6.1',
        'w6w': 'application/msword',
        'wav': 'audio/x-wav',
        'wb1': 'application/x-qpro',
        'wbmp': 'image/vnd.wap.wbmp',
        'web': 'application/vnd.xara',
        'wiz': 'application/msword',
        'wk1': 'application/x-123',
        'wmf': 'windows/metafile',
        'wml': 'text/vnd.wap.wml',
        'wmlc': 'application/vnd.wap.wmlc',
        'wmls': 'text/vnd.wap.wmlscript',
        'wmlsc': 'application/vnd.wap.wmlscriptc',
        'word': 'application/msword',
        'wp': 'application/wordperfect',
        'wp5': 'application/wordperfect6.0',
        'wp6': 'application/wordperfect',
        'wpd': 'application/x-wpwin',
        'wq1': 'application/x-lotus',
        'wri': 'application/x-wri',
        'wrl': 'x-world/x-vrml',
        'wrz': 'x-world/x-vrml',
        'wsc': 'text/scriplet',
        'wsrc': 'application/x-wais-source',
        'wtk': 'application/x-wintalk',
        'xbm': 'image/xbm',
        'xdr': 'video/x-amt-demorun',
        'xgz': 'xgl/drawing',
        'xif': 'image/vnd.xiff',
        'xl': 'application/excel',
        'xla': 'application/x-msexcel',
        'xlb': 'application/x-excel',
        'xlc': 'application/x-excel',
        'xld': 'application/x-excel',
        'xlk': 'application/x-excel',
        'xll': 'application/x-excel',
        'xlm': 'application/x-excel',
        'xls': 'application/x-msexcel',
        'xlt': 'application/x-excel',
        'xlv': 'application/x-excel',
        'xlw': 'application/x-msexcel',
        'xm': 'audio/xm',
        'xml': 'text/xml',
        'xmz': 'xgl/movie',
        'xpix': 'application/x-vnd.ls-xpix',
        'xpm': 'image/xpm',
        'x-png': 'image/png',
        'xsr': 'video/x-amt-showrun',
        'xwd': 'image/x-xwindowdump',
        'xyz': 'chemical/x-pdb',
        'z': 'application/x-compressed',
        'zip': 'multipart/x-zip',
        'zoo': 'application/octet-stream',
        'zsh': 'text/x-script.zsh'
      };
  
      // Helpers.prototype.detectMimeType('json')    
      if (types[input]) {
        return types[input];
      }
      
      // Helpers.prototype.detectMimeType('application/json')
      for (var key in types) {
        if (types.hasOwnProperty(key) && types[key] === input) {
          return key;
        }
      }

    },

    /**
     * GetMinNumber
     *
     * @param {array} input
     */  
    getMin: function(input) {
      return Math.min.apply(Math, input);
    },

    /**
     * GetMaxNumber
     *
     * @param {array} input
     */
    getMax: function(input) {
      return Math.max.apply(Math, input);
    },

    /**
     * GetSum
     *
     * @param {array} input
     */
    getSum: function(input) {    
      return input.reduce(function(memo, number) {
        return memo + number;
      });
    },

    /**
     * GetAvarage
     *
     * @param {array} input
     */
    getAvg: function(input) {
      return methods.getSum(input) / input.length;
    },

    /**
     * RemoveDuplicates
     *
     * @param {array} input
     */
    removeDuplicates: function(input) {

      // Výstup
      var output = [];
  
      // Procházíme
      input.forEach(function(item) {
        if (output.indexOf(item) === -1) {
          output.push(item);
        }
      });
  
      // Vrátíme očištěné pole
      return output;

    },
  
    /**
     * Shuffle
     *
     * @param {array} input
     */
    shuffle: function(input) {
      var indexes = this.getRandomNums(0, input.length - 1, input.length);
      return indexes.map(function(index) {
        return input[index];
      });
    },

    /**
     * HexToRgb
     *
     * @param {string} input
     */
    hexToRgb: function(input) {
      var output = [];
      input = input.replace(/^[#]?(?:([0-9a-f]{6})|([0-9a-f]{3}))$/i, function(match, group1, group2) {
        return ( group1 ) ? group1 : group2.replace(/([0-9a-f])/ig, '$1$1');
      });
      for (var i = 0; i < 3; i++) {
        output.push(parseInt(input.slice(i*2, ((i*2)+2)), 16));
      }
      return output;
    },

    /**
     * RgbToHex
     *
     * @param {array} input
     */
    rgbToHex: function(input) {
      var i = '0123456789abcdef';
      return '#' + input.map(function(num) {
        return i[((num-num%16)/16)] + i[(num%16)];
      }).join('');
    }

  };

  /**
   * GetCallback
   *
   * @param {array} args
   */
  var getCallback = function(args) {
    for (var i = args.length; i >= 0; i--) {
      if (typeof args[i] === 'function') {
        return args[i];
      }
    }
    return false;
  };
  
  /**
   * GenerateMethod
   *
   * @param {string} method
   * @param {function} fn
   */
  var generateMethod = function(method, fn) {

    toolbox[method] = function() {

      var callback = getCallback(arguments),
          result = fn.apply(methods, arguments);

      if (callback) {
        var error = (result) ? null : true;
        return callback(error, result);
      }

      return result;

    };

  };

  // Goes through and generates methods
  for (var method in methods) {
    if (methods.hasOwnProperty(method)) {
      generateMethod(method, methods[method]);
    }
  }

  // Export
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = toolbox;
  } else if ( typeof define !== 'undefined' ) {
    define(function() {
      return toolbox;
    });
  } else {
    this.toolbox = toolbox;
  }

}());