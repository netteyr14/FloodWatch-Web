// Compiles a dart2wasm-generated main module from `source` which can then
// be instantiated via the `instantiate` method.
//
// `source` needs to be a `Response` object (or promise thereof) e.g. created
// via the `fetch()` JS API.
export async function compileStreaming(source) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(
      await WebAssembly.compileStreaming(source, builtins), builtins);
}

// Compiles a dart2wasm-generated wasm module from `bytes` which is then
// instantiable via the `instantiate` method.
export async function compile(bytes) {
  const builtins = {builtins: ['js-string']};
  return new CompiledApp(await WebAssembly.compile(bytes, builtins), builtins);
}

class CompiledApp {
  constructor(module, builtins) {
    this.module = module;
    this.builtins = builtins;
  }

  // The second argument is an options object containing:
  // `loadDeferredModules` is a JS function that takes an array of module names
  //   matching wasm files produced by the dart2wasm compiler. It also takes a
  //   callback that should be invoked for each loaded module with 2 arguments:
  //   (1) the module name, (2) the loaded module in a format supported by
  //   `WebAssembly.compile` or `WebAssembly.compileStreaming`. The callback
  //   returns a Promise that resolves when the module is instantiated.
  //   loadDeferredModules should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  // `loadDeferredId` is a JS function that takes load ID produced by the
  //   compiler when the `use-load-ids` option is passed. Each load ID maps to
  //   one or more wasm files as specified in the emitted JSON file. It also
  //   takes a callback that should be invoked for each loaded module with 2
  //   arguments: (1) the module name, (2) the loaded module in a format
  //   supported by `WebAssembly.compile` or `WebAssembly.compileStreaming`.
  //   The callback returns a Promise that resolves when the module is
  //   instantiated.
  //   loadDeferredId should return a Promise that resolves when all the
  //   modules have been loaded and the callback promises have resolved.
  async instantiate(additionalImports, {loadDeferredModules, loadDeferredId} = {}) {
    let dartInstance;

    // Prints to the console
    function printToConsole(value) {
      if (typeof dartPrint == "function") {
        dartPrint(value);
        return;
      }
      if (typeof console == "object" && typeof console.log != "undefined") {
        console.log(value);
        return;
      }
      if (typeof print == "function") {
        print(value);
        return;
      }

      throw "Unable to print message: " + value;
    }

    // A special symbol attached to functions that wrap Dart functions.
    const jsWrappedDartFunctionSymbol = Symbol("JSWrappedDartFunction");

    function finalizeWrapper(dartFunction, wrapped) {
      wrapped.dartFunction = dartFunction;
      wrapped[jsWrappedDartFunctionSymbol] = true;
      return wrapped;
    }

    // Imports
    const dart2wasm = {
            AB: x0 => new Int16Array(x0),
      AC: (o, start, length) => new Uint8Array(o.buffer, o.byteOffset + start, length),
      AD: (x0,x1,x2) => x0.setAttribute(x1,x2),
      AE: (x0,x1) => x0.matchMedia(x1),
      AF: (x0,x1) => x0[x1],
      AG: x0 => x0.now(),
      AH: (x0,x1) => x0.lock(x1),
      AI: (o, offsetInBytes, lengthInBytes) => {
        var dst = new ArrayBuffer(lengthInBytes);
        new Uint8Array(dst).set(new Uint8Array(o, offsetInBytes, lengthInBytes));
        return new DataView(dst);
      },
      AJ: (x0,x1,x2) => x0.insertBefore(x1,x2),
      AK: x0 => x0.appId,
      AL: x0 => x0.trustedTypes,
      AM: x0 => x0.email,
      AN: x0 => x0.path,
      B: s => printToConsole(s),
      BB: x0 => new Uint16Array(x0),
      BC: (o, start, length) => new Int8Array(o.buffer, o.byteOffset + start, length),
      BD: x0 => x0.getBoundingClientRect(),
      BE: x0 => x0.matches,
      BF: x0 => x0.length,
      BG: x0 => x0.performance,
      BH: x0 => x0.orientation,
      BI: (a, s, e) => a.slice(s, e),
      BJ: x0 => x0.id,
      BK: x0 => x0.messagingSenderId,
      BL: () => globalThis.console,
      BM: (x0,x1) => globalThis.firebase_auth.getMultiFactorResolver(x0,x1),
      BN: x0 => x0.ref,
      C: Function.prototype.call.bind(Number.prototype.toString),
      CB: x0 => new Int32Array(x0),
      CC: (x0,x1) => x0.querySelector(x1),
      CD: (ms, c) =>
      setTimeout(() => dartInstance.exports.$invokeCallback(c),ms),
      CE: o => typeof o === 'function' && o[jsWrappedDartFunctionSymbol] === true,
      CF: (x0,x1) => x0.exec(x1),
      CG: (d, digits) => d.toFixed(digits),
      CH: (x0,x1) => x0.querySelector(x1),
      CI: x0 => x0.pop(),
      CJ: x0 => x0.offsetHeight,
      CK: x0 => x0.authDomain,
      CL: x0 => x0.trustedTypes,
      CM: x0 => x0.customData,
      CN: x0 => globalThis.firebase_firestore.getDoc(x0),
      D: Function.prototype.call.bind(BigInt.prototype.toString),
      DB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      DC: (x0,x1) => x0.item(x1),
      DD: s => new Date(s * 1000).getTimezoneOffset() * 60,
      DE: f => f.dartFunction,
      DF: x0 => x0.unicode,
      DG: x0 => x0.maxHeight,
      DH: (x0,x1) => { x0.title = x1 },
      DI: (x0,x1) => x0.revokeObjectURL(x1),
      DJ: x0 => x0.offsetWidth,
      DK: x0 => x0.projectId,
      DL: (x0,x1) => { x0.crossOrigin = x1 },
      DM: x0 => x0.message,
      DN: x0 => globalThis.firebase_firestore.getDocFromServer(x0),
      E: (exn) => {
        let stackString = exn.toString();
        let frames = stackString.split('\n');
        let drop = 4;
        if (frames[0].startsWith('Error')) {
            drop += 1;
        }
        return frames.slice(drop).join('\n');
      },
      EB: x0 => new Uint32Array(x0),
      EC: x0 => x0.length,
      ED: Date.now,
      EE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      EF: x0 => x0.index,
      EG: x0 => x0.maxWidth,
      EH: (x0,x1) => x0.vibrate(x1),
      EI: (x0,x1) => { x0.src = x1 },
      EJ: x0 => x0.stopPropagation(),
      EK: x0 => x0.name,
      EL: (x0,x1) => { x0.type = x1 },
      EM: x0 => x0.code,
      EN: x0 => globalThis.firebase_firestore.getDocFromCache(x0),
      F: () => new Error().stack,
      FB: x0 => new Float32Array(x0),
      FC: (x0,x1) => x0.querySelectorAll(x1),
      FD: (handle) => clearTimeout(handle),
      FE: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      FF: (x0,x1) => { x0.lastIndex = x1 },
      FG: x0 => x0.minHeight,
      FH: x0 => x0.arrayBuffer(),
      FI: (x0,x1,x2,x3,x4) => globalThis.createImageBitmap(x0,x1,x2,x3,x4),
      FJ: x0 => x0.disabled,
      FK: (x0,x1) => x0.getItem(x1),
      FL: () => globalThis.document,
      FM: (x0,x1,x2) => globalThis.firebase_auth.createUserWithEmailAndPassword(x0,x1,x2),
      FN: x0 => x0.source,
      G: s => JSON.stringify(s),
      GB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF32ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      GC: (x0,x1) => x0.getAttribute(x1),
      GD: (x0,x1) => x0.closest(x1),
      GE: (p, s, f) => p.then(s, (e) => f(e, e === undefined)),
      GF: x0 => x0.dotAll,
      GG: x0 => x0.minWidth,
      GH: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof ArrayBuffer) return 1;
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
          return 2;
        }
        return 3;
      },
      GI: x0 => x0.naturalHeight,
      GJ: (x0,x1) => { x0.min = x1 },
      GK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      GL: (x0,x1) => ({displayName: x0,photoURL: x1}),
      GM: (x0,x1,x2) => globalThis.firebase_auth.sendPasswordResetEmail(x0,x1,x2),
      GN: x0 => ({source: x0}),
      H: Function.prototype.call.bind(Number.prototype.toString),
      HB: x0 => new Float64Array(x0),
      HC: x0 => x0.remove(),
      HD: x0 => x0.bottom,
      HE: (o, i) => o[i],
      HF: x0 => x0.ignoreCase,
      HG: (x0,x1) => x0.removeProperty(x1),
      HH: x0 => x0.status,
      HI: x0 => x0.naturalWidth,
      HJ: (x0,x1) => { x0.max = x1 },
      HK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      HL: x0 => ({displayName: x0}),
      HM: (x0,x1,x2) => globalThis.firebase_auth.signInWithEmailAndPassword(x0,x1,x2),
      HN: (x0,x1) => globalThis.firebase_firestore.doc(x0,x1),
      I: Function.prototype.call.bind(String.prototype.indexOf),
      IB: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmF64ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      IC: (x0,x1) => x0.appendChild(x1),
      ID: x0 => x0.top,
      IE: o => o.length,
      IF: x0 => x0.multiline,
      IG: (x0,x1) => x0.add(x1),
      IH: (x0,x1) => x0.fetch(x1),
      II: x0 => x0.decode(),
      IJ: (x0,x1) => { x0.disabled = x1 },
      IK: (x0,x1,x2) => x0.onAuthStateChanged(x1,x2),
      IL: x0 => ({photoURL: x0}),
      IM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      IN: (x0,x1) => globalThis.firebase_firestore.getFirestore(x0,x1),
      J: (s, p, i) => s.lastIndexOf(p, i),
      JB: x0 => new ArrayBuffer(x0),
      JC: (x0,x1) => x0.append(x1),
      JD: x0 => x0.right,
      JE: o => {
        if (o === undefined) return 1;
        var type = typeof o;
        if (type === 'boolean') return 2;
        if (type === 'number') return 3;
        if (type === 'string') return 4;
        if (o instanceof Array) return 5;
        if (ArrayBuffer.isView(o)) {
          if (o instanceof Int8Array) return 6;
          if (o instanceof Uint8Array) return 7;
          if (o instanceof Uint8ClampedArray) return 8;
          if (o instanceof Int16Array) return 9;
          if (o instanceof Uint16Array) return 10;
          if (o instanceof Int32Array) return 11;
          if (o instanceof Uint32Array) return 12;
          if (o instanceof Float32Array) return 13;
          if (o instanceof Float64Array) return 14;
          if (o instanceof DataView) return 15;
        }
        if (o instanceof ArrayBuffer) return 16;
        // Feature check for `SharedArrayBuffer` before doing a type-check.
        if (globalThis.SharedArrayBuffer !== undefined &&
            o instanceof SharedArrayBuffer) {
            return 17;
        }
        if (o instanceof Promise) return 18;
        return 19;
      },
      JF: x0 => x0.flags,
      JG: x0 => x0.data,
      JH: x0 => x0.content,
      JI: (x0,x1) => { x0.decoding = x1 },
      JJ: (x0,x1) => { x0.scrollLeft = x1 },
      JK: x0 => x0.call(),
      JL: x0 => x0.reload(),
      JM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      JN: x0 => x0.path,
      K: (exn) => {
        if (exn instanceof Error) {
          return exn.stack;
        } else {
          return null;
        }
      },
      KB: (x0,x1,x2) => new Uint8Array(x0,x1,x2),
      KC: (x0,x1,x2,x3) => x0.setProperty(x1,x2,x3),
      KD: x0 => x0.left,
      KE: x0 => x0.language,
      KF: (s, m) => {
        try {
          return new RegExp(s, m);
        } catch (e) {
          return String(e);
        }
      },
      KG: (x0,x1) => { x0.scrollTop = x1 },
      KH: x0 => x0.document,
      KI: (x0,x1) => { x0.crossOrigin = x1 },
      KJ: (x0,x1) => { x0.spellcheck = x1 },
      KK: x0 => x0.toJSON(),
      KL: (x0,x1) => globalThis.firebase_auth.updateProfile(x0,x1),
      KM: (x0,x1,x2) => x0.onIdTokenChanged(x1,x2),
      KN: (x0,x1) => globalThis.firebase_firestore.collection(x0,x1),
      L: o => o === undefined,
      LB: (x0,x1,x2) => new DataView(x0,x1,x2),
      LC: x0 => x0.style,
      LD: x0 => x0.clientY,
      LE: (x0,x1,x2,x3) => x0.register(x1,x2,x3),
      LF: o => o instanceof RegExp,
      LG: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      LH: () => typeof dartUseDateNowForTicks !== "undefined",
      LI: (x0,x1) => x0.createObjectURL(x1),
      LJ: (x0,x1) => { x0.disabled = x1 },
      LK: x0 => x0.uid,
      LL: (x0,x1) => globalThis.firebase_auth.sendEmailVerification(x0,x1),
      LM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      LN: x0 => x0.length,
      M: o => String(o),
      MB: (o, p) => o[p],
      MC: x0 => x0.debugShowSemanticsNodes,
      MD: x0 => x0.clientX,
      ME: () => globalThis.window.FinalizationRegistry,
      MF: (a, s) => a.join(s),
      MG: (x0,x1) => { x0.value = x1 },
      MH: () => Date.now(),
      MI: x0 => x0.URL,
      MJ: (x0,x1) => x0.transferFromImageBitmap(x1),
      MK: (x0,x1) => globalThis.firebase_auth.connectAuthEmulator(x0,x1),
      ML: x0 => x0.delete(),
      MM: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      MN: x0 => x0.getReader(),
      N: (c) =>
      queueMicrotask(() => dartInstance.exports.$invokeCallback(c)),
      NB: (o) => new DataView(o.buffer, o.byteOffset, o.byteLength),
      NC: o => o,
      ND: x0 => x0.changedTouches,
      NE: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      NF: (x0,x1) => x0.error(x1),
      NG: (x0,x1,x2) => x0.setSelectionRange(x1,x2),
      NH: () => 1000 * performance.now(),
      NI: x0 => new Blob(x0),
      NJ: (x0,x1) => x0.getContext(x1),
      NK: x0 => x0.sessionStorage,
      NL: (x0,x1) => globalThis.firebase_auth.reauthenticateWithCredential(x0,x1),
      NM: x0 => x0.signOut(),
      NN: x0 => x0.value,
      O: (x0,x1) => x0.didCreateEngineInitializer(x1),
      OB: Function.prototype.call.bind(Object.getOwnPropertyDescriptor(DataView.prototype, 'byteLength').get),
      OC: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'boolean') return 1;
        return 2;
      },
      OD: x0 => x0.offsetY,
      OE: x0 => new window.FinalizationRegistry(x0),
      OF: () => globalThis.console,
      OG: (x0,x1) => { x0.value = x1 },
      OH: x0 => new Uint8Array(x0),
      OI: (x0,x1,x2,x3,x4) => ({type: x0,data: x1,premultiplyAlpha: x2,colorSpaceConversion: x3,preferAnimation: x4}),
      OJ: (x0,x1) => { x0.height = x1 },
      OK: x0 => x0.hostname,
      OL: (x0,x1) => globalThis.firebase_auth.EmailAuthProvider.credential(x0,x1),
      OM: x0 => x0.tenantId,
      ON: x0 => x0.done,
      P: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      PB: o => o.byteOffset,
      PC: (x0,x1) => x0.warn(x1),
      PD: x0 => x0.offsetX,
      PE: (x0,x1) => x0.unregister(x1),
      PF: s => s.trimRight(),
      PG: s => {
        if (/[[\]{}()*+?.\\^$|]/.test(s)) {
            s = s.replace(/[[\]{}()*+?.\\^$|]/g, '\\$&');
        }
        return s;
      },
      PH: (x0,x1,x2) => x0.slice(x1,x2),
      PI: x0 => new window.ImageDecoder(x0),
      PJ: (x0,x1) => { x0.width = x1 },
      PK: x0 => x0.location,
      PL: (x0,x1) => globalThis.firebase_auth.updatePassword(x0,x1),
      PM: x0 => x0.currentUser,
      PN: x0 => x0.read(),
      Q: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      QB: o => o.buffer,
      QC: x0 => x0.console,
      QD: x0 => x0.type,
      QE: (x0,x1) => x0.contains(x1),
      QF: x0 => x0.blur(),
      QG: x0 => x0.value,
      QH: (x0,x1) => x0.decode(x1),
      QI: x0 => x0.name,
      QJ: x0 => x0.height,
      QK: (x0,x1,x2) => ({errorMap: x0,persistence: x1,popupRedirectResolver: x2}),
      QL: x0 => x0.providerId,
      QM: (x0,x1,x2) => globalThis.firebase_firestore.setDoc(x0,x1,x2),
      QN: x0 => x0.body,
      R: (x0,x1) => ({initializeEngine: x0,autoStart: x1}),
      RB: Function.prototype.call.bind(DataView.prototype.getUint8),
      RC: () => globalThis.window,
      RD: x0 => x0.maxTouchPoints,
      RE: (s) => +s,
      RF: x0 => x0.button,
      RG: x0 => x0.selectionDirection,
      RH: (x0,x1) => x0.adoptText(x1),
      RI: x0 => x0.repetitionCount,
      RJ: x0 => x0.width,
      RK: (x0,x1) => globalThis.firebase_auth.initializeAuth(x0,x1),
      RL: x0 => x0.providerData,
      RM: (x0,x1) => globalThis.firebase_firestore.setDoc(x0,x1),
      RN: (x0,x1) => new OffscreenCanvas(x0,x1),
      S: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      SB: (b, o) => new DataView(b, o),
      SC: (o, c) => o instanceof c,
      SD: x0 => x0.platform,
      SE: s => {
        if (!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(s)) {
          return NaN;
        }
        return parseFloat(s);
      },
      SF: x0 => x0.innerHeight,
      SG: x0 => x0.selectionStart,
      SH: x0 => x0.first(),
      SI: x0 => x0.frameCount,
      SJ: x0 => x0.rasterEndMilliseconds,
      SK: () => globalThis.firebase_auth.browserPopupRedirectResolver,
      SL: x0 => x0.tenantId,
      SM: x0 => globalThis.firebase_firestore.Timestamp.fromMillis(x0),
      SN: x0 => x0.assetBase,
      T: x0 => new Promise(x0),
      TB: (b, o, l) => new DataView(b, o, l),
      TC: (string, token) => string.split(token),
      TD: x0 => x0.body,
      TE: s => s.trim(),
      TF: x0 => x0.innerWidth,
      TG: x0 => x0.selectionEnd,
      TH: x0 => x0.next(),
      TI: x0 => x0.selectedTrack,
      TJ: x0 => x0.rasterStartMilliseconds,
      TK: () => globalThis.firebase_auth.debugErrorMap,
      TL: x0 => x0.refreshToken,
      TM: (wasmFunction,f) => finalizeWrapper(f, function() { return wasmFunction(f,arguments.length) }),
      TN: x0 => x0.loader,
      U: (x0,x1,x2) => x0.call(x1,x2),
      UB: Function.prototype.call.bind(DataView.prototype.getFloat64),
      UC: o => o instanceof Array,
      UD: () => globalThis.document,
      UE: x0 => x0.classList,
      UF: x0 => x0.height,
      UG: x0 => x0.value,
      UH: x0 => x0.current(),
      UI: x0 => x0.completed,
      UJ: x0 => x0.imageBitmaps,
      UK: () => globalThis.firebase_auth.browserSessionPersistence,
      UL: x0 => x0.photoURL,
      UM: () => globalThis.firebase_firestore.serverTimestamp(),
      UN: () => globalThis._flutter,
      V: (constructor, args) => {
        const factoryFunction = constructor.bind.apply(
            constructor, [null, ...args]);
        return new factoryFunction();
      },
      VB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float64Array) return 1;
        return 2;
      },
      VC: (a, i) => a[i],
      VD: (x0,x1,x2) => x0.addEventListener(x1,x2),
      VE: x0 => x0.preventDefault(),
      VF: x0 => x0.width,
      VG: x0 => x0.selectionDirection,
      VH: (x0,x1) => new Intl.v8BreakIterator(x0,x1),
      VI: x0 => x0.ready,
      VJ: x0 => x0.canvasKitMaximumSurfaces,
      VK: () => globalThis.firebase_auth.browserLocalPersistence,
      VL: x0 => x0.phoneNumber,
      VM: x0 => ({merge: x0}),
      W: x0 => new Array(x0),
      WB: Function.prototype.call.bind(DataView.prototype.setFloat64),
      WC: a => a.length,
      WD: x0 => x0.hasFocus(),
      WE: x0 => x0.parent,
      WF: x0 => x0.clientHeight,
      WG: x0 => x0.selectionStart,
      WH: x0 => x0.v8BreakIterator,
      WI: x0 => x0.tracks,
      WJ: x0 => x0.hostElement,
      WK: () => globalThis.firebase_auth.indexedDBLocalPersistence,
      WL: x0 => x0.lastSignInTime,
      WM: x0 => new firebase_firestore.FieldPath(x0),
      X: o => [o],
      XB: (t, s) => t.set(s),
      XC: (x0,x1) => x0.test(x1),
      XD: x0 => x0.relatedTarget,
      XE: x0 => x0.timeStamp,
      XF: x0 => x0.clientWidth,
      XG: x0 => x0.selectionEnd,
      XH: () => globalThis.Intl,
      XI: x0 => x0.close(),
      XJ: x0 => x0.location,
      XK: x0 => x0.message,
      XL: x0 => x0.creationTime,
      XM: (x0,x1) => new firebase_firestore.FieldPath(x0,x1),
      Y: (o0, o1) => [o0, o1],
      YB: Function.prototype.call.bind(DataView.prototype.setFloat32),
      YC: x0 => x0.userAgent,
      YD: x0 => x0.shiftKey,
      YE: (x0,x1) => x0.hasAttribute(x1),
      YF: (x0,x1) => { x0.content = x1 },
      YG: x0 => x0.keyCode,
      YH: (x0,x1) => x0.segment(x1),
      YI: (x0,x1) => ({frameIndex: x0,completeFramesOnly: x1}),
      YJ: (x0,x1) => x0.getModifierState(x1),
      YK: x0 => x0.code,
      YL: x0 => x0.metadata,
      YM: (x0,x1,x2) => new firebase_firestore.FieldPath(x0,x1,x2),
      Z: (o0, o1, o2) => [o0, o1, o2],
      ZB: Function.prototype.call.bind(DataView.prototype.getFloat32),
      ZC: x0 => x0.navigator,
      ZD: (decoder, codeUnits) => decoder.decode(codeUnits),
      ZE: x0 => x0.buttons,
      ZF: (x0,x1) => { x0.name = x1 },
      ZG: (x0,x1) => x0.scrollIntoView(x1),
      ZH: x0 => x0.index,
      ZI: (x0,x1) => x0.decode(x1),
      ZJ: x0 => x0.metaKey,
      ZK: x0 => x0.name,
      ZL: x0 => x0.isAnonymous,
      ZM: (x0,x1,x2,x3) => new firebase_firestore.FieldPath(x0,x1,x2,x3),
      a: (o0, o1, o2, o3) => [o0, o1, o2, o3],
      aB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Float32Array) return 1;
        return 2;
      },
      aC: Function.prototype.call.bind(String.prototype.toLowerCase),
      aD: () => new TextDecoder("utf-8", {fatal: true}),
      aE: x0 => x0.ctrlKey,
      aF: x0 => x0.head,
      aG: x0 => x0.multiViewEnabled,
      aH: x0 => x0.next(),
      aI: x0 => x0.displayHeight,
      aJ: x0 => x0.altKey,
      aK: (x0,x1,x2,x3,x4,x5,x6,x7) => ({apiKey: x0,authDomain: x1,databaseURL: x2,projectId: x3,storageBucket: x4,messagingSenderId: x5,measurementId: x6,appId: x7}),
      aL: x0 => x0.emailVerified,
      aM: (x0,x1,x2,x3,x4) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4),
      b: (x0,x1,x2) => { x0[x1] = x2 },
      bB: Function.prototype.call.bind(DataView.prototype.getUint32),
      bC: Object.is,
      bD: () => new TextDecoder("utf-8", {fatal: false}),
      bE: x0 => x0.y,
      bF: (x0,x1) => x0.removeChild(x1),
      bG: (x0,x1) => x0.replaceWith(x1),
      bH: x0 => x0.value,
      bI: x0 => x0.displayWidth,
      bJ: x0 => x0.ctrlKey,
      bK: (x0,x1) => globalThis.firebase_core.initializeApp(x0,x1),
      bL: x0 => x0.email,
      bM: (x0,x1,x2,x3,x4,x5) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5),
      c: o => o,
      cB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint32Array) return 1;
        return 2;
      },
      cC: x0 => x0.vendor,
      cD: (a, i, v) => a[i] = v,
      cE: x0 => x0.x,
      cF: x0 => x0.firstChild,
      cG: (x0,x1) => { x0.type = x1 },
      cH: x0 => x0.done,
      cI: x0 => x0.duration,
      cJ: x0 => x0.isComposing,
      cK: x0 => x0.storageBucket,
      cL: x0 => x0.displayName,
      cM: (x0,x1,x2,x3,x4,x5,x6) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6),
      d: (o, p) => o[p],
      dB: Function.prototype.call.bind(DataView.prototype.getInt32),
      dC: (x0,x1) => x0.createTextNode(x1),
      dD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI8ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      dE: x0 => x0.scrollTop,
      dF: x0 => x0.viewConstraints,
      dG: (x0,x1) => { x0.className = x1 },
      dH: (o, m, a) => o[m].apply(o, a),
      dI: x0 => x0.image,
      dJ: x0 => x0.code,
      dK: x0 => x0.databaseURL,
      dL: x0 => globalThis.firebase_auth.multiFactor(x0),
      dM: (x0,x1,x2,x3,x4,x5,x6,x7) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7),
      e: () => globalThis,
      eB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int32Array) return 1;
        return 2;
      },
      eC: (x0,x1) => { x0.id = x1 },
      eD: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmI32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      eE: x0 => x0.offsetTop,
      eF: x0 => x0.hostElement,
      eG: (x0,x1) => { x0.tabIndex = x1 },
      eH: x0 => x0.iterator,
      eI: () => globalThis.window.ImageDecoder,
      eJ: x0 => x0.repeat,
      eK: x0 => x0.apiKey,
      eL: x0 => x0.user,
      eM: (x0,x1,x2,x3,x4,x5,x6,x7,x8) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7,x8),
      f: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fB: o => o instanceof Uint16Array,
      fC: (x0,x1) => { x0.nonce = x1 },
      fD: x0 => x0.visibilityState,
      fE: x0 => x0.scrollLeft,
      fF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fG: (x0,x1) => { x0.name = x1 },
      fH: () => globalThis.Symbol,
      fI: () => {
        return typeof process != "undefined" &&
               Object.prototype.toString.call(process) == "[object process]" &&
               process.platform == "win32"
      },
      fJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      fK: x0 => x0.options,
      fL: x0 => x0.idToken,
      fM: (x0,x1,x2,x3,x4,x5,x6,x7,x8,x9) => new firebase_firestore.FieldPath(x0,x1,x2,x3,x4,x5,x6,x7,x8,x9),
      g: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gB: Function.prototype.call.bind(DataView.prototype.getUint16),
      gC: x0 => x0.nonce,
      gD: (x0,x1,x2) => x0.removeEventListener(x1,x2),
      gE: x0 => x0.offsetLeft,
      gF: x0 => ({runApp: x0}),
      gG: (x0,x1) => { x0.placeholder = x1 },
      gH: (x0,x1) => new Intl.Segmenter(x0,x1),
      gI: () => {
        // On browsers return `globalThis.location.href`
        if (globalThis.location != null) {
          return globalThis.location.href;
        }
        return null;
      },
      gJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      gK: x0 => globalThis.firebase_core.getApp(x0),
      gL: x0 => x0.secret,
      gM: () => globalThis.firebase_firestore.documentId(),
      h: (x0,x1) => ({addView: x0,removeView: x1}),
      hB: o => o instanceof Int16Array,
      hC: () => globalThis.window.flutterConfiguration,
      hD: x0 => x0.disconnect(),
      hE: x0 => x0.offsetParent,
      hF: Function.prototype.call.bind(DataView.prototype.getBigInt64),
      hG: (x0,x1) => { x0.autocomplete = x1 },
      hH: x0 => x0.Segmenter,
      hI: x0 => x0.abort(),
      hJ: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      hK: () => globalThis.firebase_core.getApp(),
      hL: x0 => x0.accessToken,
      hM: (x0,x1) => new firebase_firestore.GeoPoint(x0,x1),
      i: (l, r) => l === r,
      iB: Function.prototype.call.bind(DataView.prototype.getInt16),
      iC: (x0,x1) => x0.attachShadow(x1),
      iD: x0 => new Intl.Locale(x0),
      iE: (o, p, r) => o.replaceAll(p, () => r),
      iF: Function.prototype.call.bind(DataView.prototype.setBigInt64),
      iG: (x0,x1) => { x0.name = x1 },
      iH: x0 => x0.buffer,
      iI: () => new AbortController(),
      iJ: (x0,x1,x2) => ({enableHighAccuracy: x0,timeout: x1,maximumAge: x2}),
      iK: () => globalThis.firebase_core.SDK_VERSION,
      iL: x0 => x0.signInMethod,
      iM: x0 => globalThis.firebase_firestore.vector(x0),
      j: x0 => x0.random(),
      jB: o => o instanceof Uint8ClampedArray,
      jC: (x0,x1) => x0.createElement(x1),
      jD: x0 => x0.region,
      jE: x0 => x0.deltaMode,
      jF: (o, start, length) => new BigInt64Array(o.buffer, o.byteOffset + start, length),
      jG: (x0,x1) => { x0.placeholder = x1 },
      jH: x0 => x0.wasmMemory,
      jI: (x0,x1,x2,x3,x4,x5) => ({method: x0,headers: x1,body: x2,credentials: x3,redirect: x4,signal: x5}),
      jJ: (x0,x1,x2,x3) => x0.getCurrentPosition(x1,x2,x3),
      jK: (x0,x1,x2) => x0.setItem(x1,x2),
      jL: x0 => x0.providerId,
      jM: x0 => globalThis.firebase_firestore.Bytes.fromUint8Array(x0),
      k: o => o,
      kB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Uint8Array) return 1;
        return 2;
      },
      kC: x0 => x0.scale,
      kD: x0 => x0.script,
      kE: x0 => x0.deltaY,
      kF: (x0,x1,x2,x3) => x0.pushState(x1,x2,x3),
      kG: (x0,x1) => { x0.action = x1 },
      kH: () => globalThis.window._flutter_skwasmInstance,
      kI: (x0,x1) => globalThis.fetch(x0,x1),
      kJ: x0 => x0.message,
      kK: (x0,x1,x2) => globalThis.firebase_core.registerVersion(x0,x1,x2),
      kL: x0 => globalThis.firebase_auth.OAuthProvider.credentialFromResult(x0),
      kM: x0 => ({serverTimestamps: x0}),
      l: o => {
        if (o === undefined || o === null) return 0;
        if (typeof o === 'number') return 1;
        return 2;
      },
      lB: Function.prototype.call.bind(DataView.prototype.setInt32),
      lC: x0 => x0.visualViewport,
      lD: x0 => x0.language,
      lE: x0 => x0.deltaX,
      lF: x0 => x0.history,
      lG: (x0,x1) => { x0.method = x1 },
      lH: () => new TextDecoder(),
      lI: (x0,x1) => x0.get(x1),
      lJ: x0 => x0.code,
      lK: (x0,x1) => x0.createElement(x1),
      lL: x0 => x0.username,
      lM: x0 => x0.fromCache,
      m: () => globalThis.Math,
      mB: Function.prototype.call.bind(DataView.prototype.setUint32),
      mC: x0 => x0.devicePixelRatio,
      mD: x0 => x0.languages,
      mE: x0 => x0.wheelDeltaY,
      mF: x0 => x0.search,
      mG: (x0,x1) => { x0.noValidate = x1 },
      mH: (a, i) => a.splice(i, 1),
      mI: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1,x2) { return wasmFunction(f,arguments.length,x0,x1,x2) }),
      mJ: x0 => x0.speed,
      mK: (x0,x1) => x0.debug(x1),
      mL: x0 => x0.providerId,
      mM: x0 => x0.hasPendingWrites,
      n: (x0,x1) => x0.prepend(x1),
      nB: Function.prototype.call.bind(DataView.prototype.setInt16),
      nC: x0 => x0.height,
      nD: (x0,x1) => x0.observe(x1),
      nE: x0 => x0.wheelDeltaX,
      nF: x0 => x0.location,
      nG: (x0,x1) => x0.removeAttribute(x1),
      nH: a => a.pop(),
      nI: (x0,x1) => x0.forEach(x1),
      nJ: x0 => x0.heading,
      nK: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      nL: x0 => x0.profile,
      nM: x0 => x0.metadata,
      o: (x0,x1,x2,x3) => x0.addEventListener(x1,x2,x3),
      oB: Function.prototype.call.bind(DataView.prototype.setUint16),
      oC: x0 => x0.width,
      oD: (wasmFunction,f) => finalizeWrapper(f, function(x0,x1) { return wasmFunction(f,arguments.length,x0,x1) }),
      oE: x0 => x0.key,
      oF: x0 => x0.pathname,
      oG: x0 => x0.isConnected,
      oH: (map, o, v) => map.set(o, v),
      oI: x0 => x0.name,
      oJ: x0 => x0.accuracy,
      oK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      oL: x0 => x0.isNewUser,
      oM: x0 => x0.toArray(),
      p: b => !!b,
      pB: Function.prototype.call.bind(DataView.prototype.setUint8),
      pC: x0 => x0.screen,
      pD: x0 => new ResizeObserver(x0),
      pE: x0 => x0.identifier,
      pF: (x0,x1,x2,x3) => x0.replaceState(x1,x2,x3),
      pG: x0 => x0.click(),
      pH: (map, o) => map.get(o),
      pI: x0 => x0.statusText,
      pJ: x0 => x0.altitudeAccuracy,
      pK: (x0,x1) => ({createScript: x0,createScriptURL: x1}),
      pL: x0 => globalThis.firebase_auth.getAdditionalUserInfo(x0),
      pM: x0 => x0.toUint8Array(),
      q: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      qB: Function.prototype.call.bind(DataView.prototype.setInt8),
      qC: (string, times) => string.repeat(times),
      qD: (x0,x1) => x0.getPropertyValue(x1),
      qE: x0 => x0.touches,
      qF: o => {
        const proto = Object.getPrototypeOf(o);
        return proto === Object.prototype || proto === null;
      },
      qG: (x0,x1) => x0.getElementsByClassName(x1),
      qH: () => new WeakMap(),
      qI: x0 => x0.url,
      qJ: x0 => x0.altitude,
      qK: (x0,x1,x2) => x0.createPolicy(x1,x2),
      qL: x0 => globalThis.firebase_auth.OAuthProvider.credentialFromError(x0),
      qM: () => globalThis.firebase_firestore.Bytes,
      r: (x0,x1) => x0.focus(x1),
      rB: Function.prototype.call.bind(DataView.prototype.getInt8),
      rC: o => {
        if (o === null || o === undefined) return 0;
        if (typeof(o) === 'string') return 1;
        return 2;
      },
      rD: x0 => globalThis.parseFloat(x0),
      rE: x0 => x0.pressure,
      rF: o => Object.keys(o),
      rG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF32ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      rH: x0 => x0.debugSkipFontRetryDelay,
      rI: x0 => x0.status,
      rJ: x0 => x0.timestamp,
      rK: (x0,x1) => x0.createScriptURL(x1),
      rL: x0 => x0.session,
      rM: () => globalThis.firebase_firestore.VectorValue,
      s: () => ({}),
      sB: o => {
        if (o === null || o === undefined) return 0;
        if (o instanceof Int8Array) return 1;
        return 2;
      },
      sC: x0 => x0.tabIndex,
      sD: (x0,x1) => x0.getComputedStyle(x1),
      sE: x0 => x0.tiltY,
      sF: x0 => x0.state,
      sG: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const setValue = dartInstance.exports.$wasmF64ArraySet;
        for (let i = 0; i < length; i++) {
          setValue(wasmArray, wasmArrayOffset + i, jsArray[jsArrayOffset + i]);
        }
      },
      sH: (x0,x1,x2) => x0.set(x1,x2),
      sI: x0 => x0.getReader(),
      sJ: x0 => x0.longitude,
      sK: (x0,x1,x2) => x0.createScript(x1,x2),
      sL: x0 => x0.phoneNumber,
      sM: x0 => x0.longitude,
      t: (o, p, v) => o[p] = v,
      tB: (o, start, length) => new Float64Array(o.buffer, o.byteOffset + start, length),
      tC: (x0,x1) => x0.contains(x1),
      tD: x0 => x0.documentElement,
      tE: x0 => x0.tiltX,
      tF: x0 => x0.hash,
      tG: (x0,x1) => x0.dispatchEvent(x1),
      tH: x0 => x0.fontFallbackBaseUrl,
      tI: x0 => x0.read(),
      tJ: x0 => x0.latitude,
      tK: (x0,x1) => x0.appendChild(x1),
      tL: x0 => x0.uid,
      tM: x0 => x0.latitude,
      u: () => [],
      uB: (o, start, length) => new Float32Array(o.buffer, o.byteOffset + start, length),
      uC: x0 => x0.activeElement,
      uD: x0 => x0.computedStyleMap(),
      uE: x0 => x0.pointerType,
      uF: x0 => x0.state,
      uG: (x0,x1) => x0.createEvent(x1),
      uH: (handle) => clearInterval(handle),
      uI: x0 => x0.value,
      uJ: x0 => x0.coords,
      uK: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      uL: x0 => x0.enrollmentTime,
      uM: () => globalThis.firebase_firestore.GeoPoint,
      v: (a, i) => a.push(i),
      vB: (o, start, length) => new Uint32Array(o.buffer, o.byteOffset + start, length),
      vC: x0 => x0.parentNode,
      vD: (x0,x1) => x0.get(x1),
      vE: x0 => x0.pointerId,
      vF: (x0,x1) => x0.go(x1),
      vG: (x0,x1,x2,x3) => x0.initEvent(x1,x2,x3),
      vH: (ms, c) =>
      setInterval(() => dartInstance.exports.$invokeCallback(c), ms),
      vI: x0 => x0.done,
      vJ: x0 => x0.permissions,
      vK: (o, p) => delete o[p],
      vL: x0 => x0.factorId,
      vM: (x0,x1) => x0.data(x1),
      w: x0 => new Int8Array(x0),
      wB: (o, start, length) => new Int32Array(o.buffer, o.byteOffset + start, length),
      wC: x0 => x0.tagName,
      wD: (o, p) => p in o,
      wE: x0 => x0.getCoalescedEvents(),
      wF: x0 => x0.parentElement,
      wG: x0 => x0.readText(),
      wH: () => Date.now(),
      wI: x0 => x0.cancel(),
      wJ: x0 => x0.navigator,
      wK: (o, p, v) => o[p] = v,
      wL: x0 => x0.displayName,
      wM: x0 => x0.nanoseconds,
      x: (jsArray, jsArrayOffset, wasmArray, wasmArrayOffset, length) => {
        const getValue = dartInstance.exports.$wasmI8ArrayGet;
        for (let i = 0; i < length; i++) {
          jsArray[jsArrayOffset + i] = getValue(wasmArray, wasmArrayOffset + i);
        }
      },
      xB: (o, start, length) => new Uint16Array(o.buffer, o.byteOffset + start, length),
      xC: x0 => x0.target,
      xD: (x0,x1) => { x0.textContent = x1 },
      xE: (x0,x1) => x0.getModifierState(x1),
      xF: (x0,x1) => x0.querySelectorAll(x1),
      xG: x0 => x0.clipboard,
      xH: x0 => new WeakRef(x0),
      xI: x0 => x0.body,
      xJ: () => globalThis.window,
      xK: (x0,x1) => { x0.text = x1 },
      xL: x0 => x0.hints,
      xM: x0 => x0.seconds,
      y: x0 => new Uint8Array(x0),
      yB: (o, start, length) => new Int16Array(o.buffer, o.byteOffset + start, length),
      yC: x0 => x0.clientY,
      yD: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      yE: s => s.trimLeft(),
      yF: (x0,x1) => x0.requestAnimationFrame(x1),
      yG: (x0,x1) => x0.writeText(x1),
      yH: x0 => x0.deref(),
      yI: x0 => x0.headers,
      yJ: x0 => x0.geolocation,
      yK: x0 => x0.head,
      yL: x0 => x0.tenantId,
      yM: () => globalThis.firebase_firestore.Timestamp,
      z: x0 => new Uint8ClampedArray(x0),
      zB: (o, start, length) => new Uint8ClampedArray(o.buffer, o.byteOffset + start, length),
      zC: x0 => x0.clientX,
      zD: x0 => x0.matches,
      zE: s => s.toUpperCase(),
      zF: (wasmFunction,f) => finalizeWrapper(f, function(x0) { return wasmFunction(f,arguments.length,x0) }),
      zG: x0 => x0.unlock(),
      zH: () => globalThis.WeakRef,
      zI: x0 => x0.signal,
      zJ: x0 => x0.measurementId,
      zK: (x0,x1) => { x0.text = x1 },
      zL: x0 => x0.phoneNumber,
      zM: () => globalThis.firebase_firestore.DocumentReference,

    };

    const baseImports = {
      _: dart2wasm,
      Math: Math,
      Date: Date,
      Object: Object,
      Array: Array,
      Reflect: Reflect,
      WebAssembly: {
        JSTag: WebAssembly.JSTag,
      },
      "": new Proxy({}, { get(_, prop) { return prop; } }),

    };

    const jsStringPolyfill = {
      "charCodeAt": (s, i) => s.charCodeAt(i),
      "compare": (s1, s2) => {
        if (s1 < s2) return -1;
        if (s1 > s2) return 1;
        return 0;
      },
      "concat": (s1, s2) => s1 + s2,
      "equals": (s1, s2) => s1 === s2,
      "fromCharCode": (i) => String.fromCharCode(i),
      "length": (s) => s.length,
      "substring": (s, a, b) => s.substring(a, b),
      "fromCharCodeArray": (a, start, end) => {
        if (end <= start) return '';

        const read = dartInstance.exports.$wasmI16ArrayGet;
        let result = '';
        let index = start;
        const chunkLength = Math.min(end - index, 500);
        let array = new Array(chunkLength);
        while (index < end) {
          const newChunkLength = Math.min(end - index, 500);
          for (let i = 0; i < newChunkLength; i++) {
            array[i] = read(a, index++);
          }
          if (newChunkLength < chunkLength) {
            array = array.slice(0, newChunkLength);
          }
          result += String.fromCharCode(...array);
        }
        return result;
      },
      "intoCharCodeArray": (s, a, start) => {
        if (s === '') return 0;

        const write = dartInstance.exports.$wasmI16ArraySet;
        for (var i = 0; i < s.length; ++i) {
          write(a, start++, s.charCodeAt(i));
        }
        return s.length;
      },
      "test": (s) => typeof s == "string",
    };


    

    dartInstance = await WebAssembly.instantiate(this.module, {
      ...baseImports,
      ...additionalImports,
      
      "wasm:js-string": jsStringPolyfill,
    });

    return new InstantiatedApp(this, dartInstance);
  }
}

class InstantiatedApp {
  constructor(compiledApp, instantiatedModule) {
    this.compiledApp = compiledApp;
    this.instantiatedModule = instantiatedModule;
  }

  // Call the main function with the given arguments.
  invokeMain(...args) {
    this.instantiatedModule.exports.$invokeMain(args);
  }
}
