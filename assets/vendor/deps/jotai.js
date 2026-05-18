// node_modules/jotai/esm/vanilla/internals.mjs
function hasInitialValue(atom) {
  return "init" in atom;
}
function isActuallyWritableAtom(atom) {
  return typeof atom.write === "function";
}
function hasOnMount(atom) {
  return !!atom.onMount;
}
function isAtomStateInitialized(atomState) {
  return "v" in atomState || "e" in atomState;
}
function returnAtomValue(atomState) {
  if ("e" in atomState) {
    throw atomState.e;
  }
  if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production" && !("v" in atomState)) {
    throw new Error("[Bug] atom state is not initialized");
  }
  return atomState.v;
}
function isPromiseLike(p) {
  return typeof (p == null ? undefined : p.then) === "function";
}
function addPendingPromiseToDependency(atom, promise, dependencyAtomState) {
  if (!dependencyAtomState.p.has(atom)) {
    dependencyAtomState.p.add(atom);
    const cleanup = () => dependencyAtomState.p.delete(atom);
    promise.then(cleanup, cleanup);
  }
}
function getMountedOrPendingDependents(atom, atomState, mountedMap) {
  const mounted = mountedMap.get(atom);
  const mountedDependents = mounted == null ? undefined : mounted.t;
  const pendingDependents = atomState.p;
  if (!(mountedDependents == null ? undefined : mountedDependents.size)) {
    return pendingDependents;
  }
  if (!pendingDependents.size) {
    return mountedDependents;
  }
  const dependents = new Set(mountedDependents);
  for (const a of pendingDependents) {
    dependents.add(a);
  }
  return dependents;
}
function hasOnInit(atom) {
  return !!atom.INTERNAL_onInit;
}
var BUILDING_BLOCK_atomRead = (_buildingBlocks, _store, atom, ...params) => atom.read(...params);
var BUILDING_BLOCK_atomWrite = (_buildingBlocks, _store, atom, ...params) => atom.write(...params);
var BUILDING_BLOCK_atomOnInit = (_buildingBlocks, store, atom) => atom.INTERNAL_onInit(store);
var BUILDING_BLOCK_atomOnMount = (_buildingBlocks, _store, atom, setAtom) => {
  var _a;
  return (_a = atom.onMount) == null ? undefined : _a.call(atom, setAtom);
};
var BUILDING_BLOCK_ensureAtomState = (buildingBlocks, store, atom) => {
  var _a;
  const atomStateMap = buildingBlocks[0];
  let atomState = atomStateMap.get(atom);
  if (!atomState) {
    const storeHooks = buildingBlocks[6];
    const atomOnInit = buildingBlocks[9];
    atomState = { d: /* @__PURE__ */ new Map, p: /* @__PURE__ */ new Set, n: 0 };
    atomStateMap.set(atom, atomState);
    (_a = storeHooks.i) == null || _a.call(storeHooks, atom);
    if (hasOnInit(atom)) {
      atomOnInit(buildingBlocks, store, atom);
    }
  }
  return atomState;
};
var BUILDING_BLOCK_flushCallbacks = (buildingBlocks, store) => {
  var _a;
  const mountedMap = buildingBlocks[1];
  const changedAtoms = buildingBlocks[3];
  const mountCallbacks = buildingBlocks[4];
  const unmountCallbacks = buildingBlocks[5];
  const storeHooks = buildingBlocks[6];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  if (!storeHooks.f && !changedAtoms.size && !mountCallbacks.size && !unmountCallbacks.size) {
    return;
  }
  const errors = [];
  const call = (fn) => {
    try {
      fn();
    } catch (e) {
      errors.push(e);
    }
  };
  do {
    if (storeHooks.f) {
      call(storeHooks.f);
    }
    const callbacks = /* @__PURE__ */ new Set;
    for (const atom of changedAtoms) {
      const listeners = (_a = mountedMap.get(atom)) == null ? undefined : _a.l;
      if (listeners) {
        for (const listener of listeners) {
          callbacks.add(listener);
        }
      }
    }
    changedAtoms.clear();
    for (const fn of unmountCallbacks) {
      callbacks.add(fn);
    }
    unmountCallbacks.clear();
    for (const fn of mountCallbacks) {
      callbacks.add(fn);
    }
    mountCallbacks.clear();
    for (const fn of callbacks) {
      call(fn);
    }
    if (changedAtoms.size) {
      recomputeInvalidatedAtoms(buildingBlocks, store);
    }
  } while (changedAtoms.size || unmountCallbacks.size || mountCallbacks.size);
  if (errors.length) {
    throw new AggregateError(errors);
  }
};
var BUILDING_BLOCK_recomputeInvalidatedAtoms = (buildingBlocks, store) => {
  const mountedMap = buildingBlocks[1];
  const invalidatedAtoms = buildingBlocks[2];
  const changedAtoms = buildingBlocks[3];
  const ensureAtomState = buildingBlocks[11];
  const readAtomState = buildingBlocks[14];
  const mountDependencies = buildingBlocks[17];
  if (!changedAtoms.size) {
    return;
  }
  const sortedReversedAtoms = [];
  const sortedReversedStates = [];
  const visiting = /* @__PURE__ */ new WeakSet;
  const visited = /* @__PURE__ */ new WeakSet;
  const stackAtoms = [];
  const stackStates = [];
  for (const atom of changedAtoms) {
    stackAtoms.push(atom);
    stackStates.push(ensureAtomState(buildingBlocks, store, atom));
  }
  while (stackAtoms.length) {
    const top = stackAtoms.length - 1;
    const a = stackAtoms[top];
    const aState = stackStates[top];
    if (visited.has(a)) {
      stackAtoms.pop();
      stackStates.pop();
      continue;
    }
    if (visiting.has(a)) {
      if (invalidatedAtoms.get(a) === aState.n) {
        sortedReversedAtoms.push(a);
        sortedReversedStates.push(aState);
      } else if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production" && invalidatedAtoms.has(a)) {
        throw new Error("[Bug] invalidated atom exists");
      }
      visited.add(a);
      stackAtoms.pop();
      stackStates.pop();
      continue;
    }
    visiting.add(a);
    for (const d of getMountedOrPendingDependents(a, aState, mountedMap)) {
      if (!visiting.has(d)) {
        stackAtoms.push(d);
        stackStates.push(ensureAtomState(buildingBlocks, store, d));
      }
    }
  }
  for (let i = sortedReversedAtoms.length - 1;i >= 0; --i) {
    const a = sortedReversedAtoms[i];
    const aState = sortedReversedStates[i];
    let hasChangedDeps = false;
    for (const dep of aState.d.keys()) {
      if (dep !== a && changedAtoms.has(dep)) {
        hasChangedDeps = true;
        break;
      }
    }
    if (hasChangedDeps) {
      invalidatedAtoms.set(a, aState.n);
      readAtomState(buildingBlocks, store, a);
      mountDependencies(buildingBlocks, store, a);
    }
    invalidatedAtoms.delete(a);
  }
};
var storeMutationSet = /* @__PURE__ */ new WeakSet;
var BUILDING_BLOCK_readAtomState = (buildingBlocks, store, atom) => {
  var _a, _b;
  const mountedMap = buildingBlocks[1];
  const invalidatedAtoms = buildingBlocks[2];
  const changedAtoms = buildingBlocks[3];
  const storeHooks = buildingBlocks[6];
  const atomRead = buildingBlocks[7];
  const ensureAtomState = buildingBlocks[11];
  const flushCallbacks = buildingBlocks[12];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const readAtomState = buildingBlocks[14];
  const writeAtomState = buildingBlocks[16];
  const mountDependencies = buildingBlocks[17];
  const setAtomStateValueOrPromise = buildingBlocks[20];
  const registerAbortHandler = buildingBlocks[26];
  const storeEpochHolder = buildingBlocks[28];
  const atomState = ensureAtomState(buildingBlocks, store, atom);
  const storeEpochNumber = storeEpochHolder[0];
  if (isAtomStateInitialized(atomState)) {
    if (mountedMap.has(atom) && invalidatedAtoms.get(atom) !== atomState.n || atomState.m === storeEpochNumber) {
      atomState.m = storeEpochNumber;
      return atomState;
    }
    let hasChangedDeps = false;
    for (const [a, n] of atomState.d) {
      if (readAtomState(buildingBlocks, store, a).n !== n) {
        hasChangedDeps = true;
        break;
      }
    }
    if (!hasChangedDeps) {
      atomState.m = storeEpochNumber;
      return atomState;
    }
  }
  let isSync = true;
  const prevDeps = new Set(atomState.d.keys());
  const pruneDependencies = () => {
    for (const a of prevDeps) {
      atomState.d.delete(a);
    }
  };
  const mountDependenciesIfAsync = () => {
    if (mountedMap.has(atom)) {
      const shouldRecompute = !changedAtoms.size;
      mountDependencies(buildingBlocks, store, atom);
      if (shouldRecompute) {
        recomputeInvalidatedAtoms(buildingBlocks, store);
        flushCallbacks(buildingBlocks, store);
      }
    }
  };
  const getter = (a) => {
    var _a2;
    if (a === atom) {
      const aState2 = ensureAtomState(buildingBlocks, store, a);
      if (!isAtomStateInitialized(aState2)) {
        if (hasInitialValue(a)) {
          setAtomStateValueOrPromise(buildingBlocks, store, a, a.init);
        } else {
          throw new Error("no atom init");
        }
      }
      return returnAtomValue(aState2);
    }
    const aState = readAtomState(buildingBlocks, store, a);
    try {
      return returnAtomValue(aState);
    } finally {
      prevDeps.delete(a);
      atomState.d.set(a, aState.n);
      if (isPromiseLike(atomState.v)) {
        addPendingPromiseToDependency(atom, atomState.v, aState);
      }
      if (mountedMap.has(atom)) {
        (_a2 = mountedMap.get(a)) == null || _a2.t.add(atom);
      }
      if (!isSync) {
        mountDependenciesIfAsync();
      }
    }
  };
  let controller;
  let setSelf;
  const options = {
    get signal() {
      if (!controller) {
        controller = new AbortController;
      }
      return controller.signal;
    },
    get setSelf() {
      if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production") {
        console.warn("[DEPRECATED] setSelf is deprecated and will be removed in v3.");
      }
      if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production" && !isActuallyWritableAtom(atom)) {
        console.warn("setSelf function cannot be used with read-only atom");
      }
      if (!setSelf && isActuallyWritableAtom(atom)) {
        setSelf = (...args) => {
          if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production" && isSync) {
            console.warn("setSelf function cannot be called in sync");
          }
          if (!isSync) {
            try {
              return writeAtomState(buildingBlocks, store, atom, args);
            } finally {
              recomputeInvalidatedAtoms(buildingBlocks, store);
              flushCallbacks(buildingBlocks, store);
            }
          }
        };
      }
      return setSelf;
    }
  };
  const prevEpochNumber = atomState.n;
  const prevInvalidated = invalidatedAtoms.get(atom) === prevEpochNumber;
  try {
    if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production") {
      storeMutationSet.delete(store);
    }
    const valueOrPromise = atomRead(buildingBlocks, store, atom, getter, options);
    if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production" && storeMutationSet.has(store)) {
      console.warn("Detected store mutation during atom read. This is not supported.");
    }
    setAtomStateValueOrPromise(buildingBlocks, store, atom, valueOrPromise);
    if (isPromiseLike(valueOrPromise)) {
      registerAbortHandler(buildingBlocks, store, valueOrPromise, () => controller == null ? undefined : controller.abort());
      const settle = () => {
        pruneDependencies();
        mountDependenciesIfAsync();
      };
      valueOrPromise.then(settle, settle);
    } else {
      pruneDependencies();
    }
    (_a = storeHooks.r) == null || _a.call(storeHooks, atom);
    atomState.m = storeEpochNumber;
    return atomState;
  } catch (error) {
    delete atomState.v;
    atomState.e = error;
    ++atomState.n;
    atomState.m = storeEpochNumber;
    return atomState;
  } finally {
    isSync = false;
    if (atomState.n !== prevEpochNumber && prevInvalidated) {
      invalidatedAtoms.set(atom, atomState.n);
      changedAtoms.add(atom);
      (_b = storeHooks.c) == null || _b.call(storeHooks, atom);
    }
  }
};
var BUILDING_BLOCK_invalidateDependents = (buildingBlocks, store, atom) => {
  const mountedMap = buildingBlocks[1];
  const invalidatedAtoms = buildingBlocks[2];
  const ensureAtomState = buildingBlocks[11];
  const stack = [atom];
  while (stack.length) {
    const a = stack.pop();
    const aState = ensureAtomState(buildingBlocks, store, a);
    for (const d of getMountedOrPendingDependents(a, aState, mountedMap)) {
      const dState = ensureAtomState(buildingBlocks, store, d);
      if (invalidatedAtoms.get(d) !== dState.n) {
        invalidatedAtoms.set(d, dState.n);
        stack.push(d);
      }
    }
  }
};
var BUILDING_BLOCK_writeAtomState = (buildingBlocks, store, atom, args) => {
  const changedAtoms = buildingBlocks[3];
  const storeHooks = buildingBlocks[6];
  const atomWrite = buildingBlocks[8];
  const ensureAtomState = buildingBlocks[11];
  const flushCallbacks = buildingBlocks[12];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const readAtomState = buildingBlocks[14];
  const invalidateDependents = buildingBlocks[15];
  const writeAtomState = buildingBlocks[16];
  const mountDependencies = buildingBlocks[17];
  const setAtomStateValueOrPromise = buildingBlocks[20];
  const storeEpochHolder = buildingBlocks[28];
  let isSync = true;
  const getter = (a) => returnAtomValue(readAtomState(buildingBlocks, store, a));
  const setter = (a, ...args2) => {
    var _a;
    const aState = ensureAtomState(buildingBlocks, store, a);
    try {
      if (a === atom) {
        if (!hasInitialValue(a)) {
          throw new Error("atom not writable");
        }
        if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production") {
          storeMutationSet.add(store);
        }
        const prevEpochNumber = aState.n;
        const v = args2[0];
        setAtomStateValueOrPromise(buildingBlocks, store, a, v);
        mountDependencies(buildingBlocks, store, a);
        if (prevEpochNumber !== aState.n) {
          ++storeEpochHolder[0];
          changedAtoms.add(a);
          invalidateDependents(buildingBlocks, store, a);
          (_a = storeHooks.c) == null || _a.call(storeHooks, a);
        }
        return;
      } else {
        return writeAtomState(buildingBlocks, store, a, args2);
      }
    } finally {
      if (!isSync) {
        recomputeInvalidatedAtoms(buildingBlocks, store);
        flushCallbacks(buildingBlocks, store);
      }
    }
  };
  try {
    return atomWrite(buildingBlocks, store, atom, getter, setter, ...args);
  } finally {
    isSync = false;
  }
};
var BUILDING_BLOCK_mountDependencies = (buildingBlocks, store, atom) => {
  var _a;
  const mountedMap = buildingBlocks[1];
  const changedAtoms = buildingBlocks[3];
  const storeHooks = buildingBlocks[6];
  const ensureAtomState = buildingBlocks[11];
  const invalidateDependents = buildingBlocks[15];
  const mountAtom = buildingBlocks[18];
  const unmountAtom = buildingBlocks[19];
  const atomState = ensureAtomState(buildingBlocks, store, atom);
  const mounted = mountedMap.get(atom);
  if (mounted && atomState.d.size > 0) {
    for (const [a, n] of atomState.d) {
      if (!mounted.d.has(a)) {
        const aState = ensureAtomState(buildingBlocks, store, a);
        const aMounted = mountAtom(buildingBlocks, store, a);
        aMounted.t.add(atom);
        mounted.d.add(a);
        if (n !== aState.n) {
          changedAtoms.add(a);
          invalidateDependents(buildingBlocks, store, a);
          (_a = storeHooks.c) == null || _a.call(storeHooks, a);
        }
      }
    }
    for (const a of mounted.d) {
      if (!atomState.d.has(a)) {
        mounted.d.delete(a);
        const aMounted = unmountAtom(buildingBlocks, store, a);
        aMounted == null || aMounted.t.delete(atom);
      }
    }
  }
};
var BUILDING_BLOCK_mountAtom = (buildingBlocks, store, atom) => {
  var _a;
  const mountedMap = buildingBlocks[1];
  const mountCallbacks = buildingBlocks[4];
  const storeHooks = buildingBlocks[6];
  const atomOnMount = buildingBlocks[10];
  const ensureAtomState = buildingBlocks[11];
  const flushCallbacks = buildingBlocks[12];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const readAtomState = buildingBlocks[14];
  const writeAtomState = buildingBlocks[16];
  const mountAtom = buildingBlocks[18];
  const atomState = ensureAtomState(buildingBlocks, store, atom);
  let mounted = mountedMap.get(atom);
  if (!mounted) {
    readAtomState(buildingBlocks, store, atom);
    for (const a of atomState.d.keys()) {
      const aMounted = mountAtom(buildingBlocks, store, a);
      aMounted.t.add(atom);
    }
    mounted = {
      l: /* @__PURE__ */ new Set,
      d: new Set(atomState.d.keys()),
      t: /* @__PURE__ */ new Set
    };
    mountedMap.set(atom, mounted);
    if (isActuallyWritableAtom(atom) && hasOnMount(atom)) {
      const processOnMount = () => {
        let isSync = true;
        const setAtom = (...args) => {
          try {
            return writeAtomState(buildingBlocks, store, atom, args);
          } finally {
            if (!isSync) {
              recomputeInvalidatedAtoms(buildingBlocks, store);
              flushCallbacks(buildingBlocks, store);
            }
          }
        };
        try {
          const onUnmount = atomOnMount(buildingBlocks, store, atom, setAtom);
          if (onUnmount) {
            mounted.u = () => {
              isSync = true;
              try {
                onUnmount();
              } finally {
                isSync = false;
              }
            };
          }
        } finally {
          isSync = false;
        }
      };
      mountCallbacks.add(processOnMount);
    }
    (_a = storeHooks.m) == null || _a.call(storeHooks, atom);
  }
  return mounted;
};
var BUILDING_BLOCK_unmountAtom = (buildingBlocks, store, atom) => {
  var _a, _b;
  const mountedMap = buildingBlocks[1];
  const unmountCallbacks = buildingBlocks[5];
  const storeHooks = buildingBlocks[6];
  const ensureAtomState = buildingBlocks[11];
  const unmountAtom = buildingBlocks[19];
  const atomState = ensureAtomState(buildingBlocks, store, atom);
  let mounted = mountedMap.get(atom);
  if (!mounted || mounted.l.size) {
    return mounted;
  }
  let isDependent = false;
  for (const a of mounted.t) {
    if ((_a = mountedMap.get(a)) == null ? undefined : _a.d.has(atom)) {
      isDependent = true;
      break;
    }
  }
  if (!isDependent) {
    if (mounted.u) {
      unmountCallbacks.add(mounted.u);
    }
    mounted = undefined;
    mountedMap.delete(atom);
    for (const a of atomState.d.keys()) {
      const aMounted = unmountAtom(buildingBlocks, store, a);
      aMounted == null || aMounted.t.delete(atom);
    }
    (_b = storeHooks.u) == null || _b.call(storeHooks, atom);
    return;
  }
  return mounted;
};
var BUILDING_BLOCK_setAtomStateValueOrPromise = (buildingBlocks, store, atom, valueOrPromise) => {
  const ensureAtomState = buildingBlocks[11];
  const abortPromise = buildingBlocks[27];
  const atomState = ensureAtomState(buildingBlocks, store, atom);
  const hasPrevValue = "v" in atomState;
  const prevValue = atomState.v;
  if (isPromiseLike(valueOrPromise)) {
    for (const a of atomState.d.keys()) {
      addPendingPromiseToDependency(atom, valueOrPromise, ensureAtomState(buildingBlocks, store, a));
    }
  }
  atomState.v = valueOrPromise;
  delete atomState.e;
  if (!hasPrevValue || !Object.is(prevValue, atomState.v)) {
    ++atomState.n;
    if (isPromiseLike(prevValue)) {
      abortPromise(buildingBlocks, store, prevValue);
    }
  }
};
var BUILDING_BLOCK_storeGet = (buildingBlocks, store, atom) => {
  const readAtomState = buildingBlocks[14];
  return returnAtomValue(readAtomState(buildingBlocks, store, atom));
};
var BUILDING_BLOCK_storeSet = (buildingBlocks, store, atom, ...args) => {
  const changedAtoms = buildingBlocks[3];
  const flushCallbacks = buildingBlocks[12];
  const recomputeInvalidatedAtoms = buildingBlocks[13];
  const writeAtomState = buildingBlocks[16];
  const prevChangedAtomsSize = changedAtoms.size;
  try {
    return writeAtomState(buildingBlocks, store, atom, args);
  } finally {
    if (changedAtoms.size !== prevChangedAtomsSize) {
      recomputeInvalidatedAtoms(buildingBlocks, store);
      flushCallbacks(buildingBlocks, store);
    }
  }
};
var BUILDING_BLOCK_storeSub = (buildingBlocks, store, atom, listener) => {
  const flushCallbacks = buildingBlocks[12];
  const mountAtom = buildingBlocks[18];
  const unmountAtom = buildingBlocks[19];
  const mounted = mountAtom(buildingBlocks, store, atom);
  const listeners = mounted.l;
  listeners.add(listener);
  flushCallbacks(buildingBlocks, store);
  return () => {
    listeners.delete(listener);
    unmountAtom(buildingBlocks, store, atom);
    flushCallbacks(buildingBlocks, store);
  };
};
var BUILDING_BLOCK_registerAbortHandler = (buildingBlocks, _store, promise, abortHandler) => {
  const abortHandlersMap = buildingBlocks[25];
  let abortHandlers = abortHandlersMap.get(promise);
  if (!abortHandlers) {
    abortHandlers = /* @__PURE__ */ new Set;
    abortHandlersMap.set(promise, abortHandlers);
    const cleanup = () => abortHandlersMap.delete(promise);
    promise.then(cleanup, cleanup);
  }
  abortHandlers.add(abortHandler);
};
var BUILDING_BLOCK_abortPromise = (buildingBlocks, _store, promise) => {
  const abortHandlersMap = buildingBlocks[25];
  const abortHandlers = abortHandlersMap.get(promise);
  abortHandlers == null || abortHandlers.forEach((fn) => fn());
};
var buildingBlockMap = /* @__PURE__ */ new WeakMap;
function getBuildingBlocks(store) {
  const buildingBlocks = buildingBlockMap.get(store);
  if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production" && !buildingBlocks) {
    throw new Error("Store must be created by buildStore to read its building blocks");
  }
  const enhanceBuildingBlocks = buildingBlocks[24];
  if (enhanceBuildingBlocks) {
    return enhanceBuildingBlocks(buildingBlocks, store);
  }
  return buildingBlocks;
}
function buildStore(...partialBuildingBlocks) {
  const store = {
    get(atom) {
      return storeGet(buildingBlocks, store, atom);
    },
    set(atom, ...args) {
      return storeSet(buildingBlocks, store, atom, ...args);
    },
    sub(atom, listener) {
      return storeSub(buildingBlocks, store, atom, listener);
    }
  };
  const buildingBlocks = [
    /* @__PURE__ */ new WeakMap,
    /* @__PURE__ */ new WeakMap,
    /* @__PURE__ */ new WeakMap,
    /* @__PURE__ */ new Set,
    /* @__PURE__ */ new Set,
    /* @__PURE__ */ new Set,
    {},
    BUILDING_BLOCK_atomRead,
    BUILDING_BLOCK_atomWrite,
    BUILDING_BLOCK_atomOnInit,
    BUILDING_BLOCK_atomOnMount,
    BUILDING_BLOCK_ensureAtomState,
    BUILDING_BLOCK_flushCallbacks,
    BUILDING_BLOCK_recomputeInvalidatedAtoms,
    BUILDING_BLOCK_readAtomState,
    BUILDING_BLOCK_invalidateDependents,
    BUILDING_BLOCK_writeAtomState,
    BUILDING_BLOCK_mountDependencies,
    BUILDING_BLOCK_mountAtom,
    BUILDING_BLOCK_unmountAtom,
    BUILDING_BLOCK_setAtomStateValueOrPromise,
    BUILDING_BLOCK_storeGet,
    BUILDING_BLOCK_storeSet,
    BUILDING_BLOCK_storeSub,
    undefined,
    /* @__PURE__ */ new WeakMap,
    BUILDING_BLOCK_registerAbortHandler,
    BUILDING_BLOCK_abortPromise,
    [0]
  ].map((fn, i) => partialBuildingBlocks[i] || fn);
  buildingBlockMap.set(store, Object.freeze(buildingBlocks));
  const storeGet = buildingBlocks[21];
  const storeSet = buildingBlocks[22];
  const storeSub = buildingBlocks[23];
  return store;
}

// node_modules/jotai/esm/vanilla.mjs
var keyCount = 0;
function atom(read, write) {
  const key = `atom${++keyCount}`;
  const config = {
    toString() {
      return (import.meta.env ? import.meta.env.MODE : undefined) !== "production" && this.debugLabel ? key + ":" + this.debugLabel : key;
    }
  };
  if (typeof read === "function") {
    config.read = read;
  } else {
    config.init = read;
    config.read = defaultRead;
    config.write = defaultWrite;
  }
  if (write) {
    config.write = write;
  }
  return config;
}
function defaultRead(get) {
  return get(this);
}
function defaultWrite(get, set, arg) {
  return set(this, typeof arg === "function" ? arg(get(this)) : arg);
}
var overriddenCreateStore;
function INTERNAL_overrideCreateStore(fn) {
  overriddenCreateStore = fn(overriddenCreateStore);
}
function createStore() {
  if (overriddenCreateStore) {
    return overriddenCreateStore();
  }
  return buildStore();
}
var defaultStore;
function getDefaultStore() {
  if (!defaultStore) {
    defaultStore = createStore();
    if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production") {
      globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = defaultStore);
      if (globalThis.__JOTAI_DEFAULT_STORE__ !== defaultStore) {
        console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044");
      }
    }
  }
  return defaultStore;
}

// node_modules/jotai/esm/react.mjs
import React, { createContext, useContext, useRef, createElement, useReducer, useEffect, useDebugValue, useCallback } from "react";
"use client";
var StoreContext = createContext(undefined);
function useStore(options) {
  const store = useContext(StoreContext);
  return (options == null ? undefined : options.store) || store || getDefaultStore();
}
function Provider({
  children,
  store
}) {
  const storeRef = useRef(null);
  if (store) {
    return createElement(StoreContext.Provider, { value: store }, children);
  }
  if (storeRef.current === null) {
    storeRef.current = createStore();
  }
  return createElement(StoreContext.Provider, {
    value: storeRef.current
  }, children);
}
var isPromiseLike2 = (x) => typeof (x == null ? undefined : x.then) === "function";
var attachPromiseStatus = (promise) => {
  if (!promise.status) {
    promise.status = "pending";
    promise.then((v) => {
      promise.status = "fulfilled";
      promise.value = v;
    }, (e) => {
      promise.status = "rejected";
      promise.reason = e;
    });
  }
};
var use = React.use || ((promise) => {
  if (promise.status === "pending") {
    throw promise;
  } else if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else {
    attachPromiseStatus(promise);
    throw promise;
  }
});
var continuablePromiseMap = /* @__PURE__ */ new WeakMap;
var createContinuablePromise = (store, promise, getValue) => {
  const buildingBlocks = getBuildingBlocks(store);
  const registerAbortHandler = buildingBlocks[26];
  let continuablePromise = continuablePromiseMap.get(promise);
  if (!continuablePromise) {
    continuablePromise = new Promise((resolve, reject) => {
      let curr = promise;
      const onFulfilled = (me) => (v) => {
        if (curr === me) {
          resolve(v);
        }
      };
      const onRejected = (me) => (e) => {
        if (curr === me) {
          reject(e);
        }
      };
      const onAbort = () => {
        try {
          const nextValue = getValue();
          if (isPromiseLike2(nextValue)) {
            continuablePromiseMap.set(nextValue, continuablePromise);
            curr = nextValue;
            nextValue.then(onFulfilled(nextValue), onRejected(nextValue));
            registerAbortHandler(buildingBlocks, store, nextValue, onAbort);
          } else {
            resolve(nextValue);
          }
        } catch (e) {
          reject(e);
        }
      };
      promise.then(onFulfilled(promise), onRejected(promise));
      registerAbortHandler(buildingBlocks, store, promise, onAbort);
    });
    continuablePromiseMap.set(promise, continuablePromise);
  }
  return continuablePromise;
};
function useAtomValue(atom2, options) {
  const { delay, unstable_promiseStatus: promiseStatus = !React.use } = options || {};
  const store = useStore(options);
  const [[valueFromReducer, storeFromReducer, atomFromReducer], rerender] = useReducer((prev) => {
    const nextValue = store.get(atom2);
    if (Object.is(prev[0], nextValue) && prev[1] === store && prev[2] === atom2) {
      return prev;
    }
    return [nextValue, store, atom2];
  }, undefined, () => [store.get(atom2), store, atom2]);
  let value = valueFromReducer;
  if (storeFromReducer !== store || atomFromReducer !== atom2) {
    rerender();
    value = store.get(atom2);
  }
  useEffect(() => {
    const unsub = store.sub(atom2, () => {
      if (promiseStatus) {
        try {
          const value2 = store.get(atom2);
          if (isPromiseLike2(value2)) {
            attachPromiseStatus(createContinuablePromise(store, value2, () => store.get(atom2)));
          }
        } catch (e) {}
      }
      if (typeof delay === "number") {
        console.warn(`[DEPRECATED] delay option is deprecated and will be removed in v3.

Migration guide:

Create a custom hook like the following.

function useAtomValueWithDelay<Value>(
  atom: Atom<Value>,
  options: { delay: number },
): Value {
  const { delay } = options
  const store = useStore(options)
  const [value, setValue] = useState(() => store.get(atom))
  useEffect(() => {
    const unsub = store.sub(atom, () => {
      setTimeout(() => setValue(store.get(atom)), delay)
    })
    return unsub
  }, [store, atom, delay])
  return value
}
`);
        setTimeout(rerender, delay);
        return;
      }
      rerender();
    });
    rerender();
    return unsub;
  }, [store, atom2, delay, promiseStatus]);
  useDebugValue(value);
  if (isPromiseLike2(value)) {
    const promise = createContinuablePromise(store, value, () => store.get(atom2));
    if (promiseStatus) {
      attachPromiseStatus(promise);
    }
    return use(promise);
  }
  return value;
}
function useSetAtom(atom2, options) {
  const store = useStore(options);
  const setAtom = useCallback((...args) => {
    if ((import.meta.env ? import.meta.env.MODE : undefined) !== "production" && !("write" in atom2)) {
      throw new Error("not writable atom");
    }
    return store.set(atom2, ...args);
  }, [store, atom2]);
  return setAtom;
}
function useAtom(atom2, options) {
  return [
    useAtomValue(atom2, options),
    useSetAtom(atom2, options)
  ];
}
export {
  useStore,
  useSetAtom,
  useAtomValue,
  useAtom,
  getDefaultStore,
  createStore,
  atom,
  Provider,
  INTERNAL_overrideCreateStore
};
