var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);

// node_modules/use-sync-external-store/cjs/use-sync-external-store-with-selector.development.js
import * as React2 from "react";
var require_use_sync_external_store_with_selector_development = __commonJS((exports) => {
  (function() {
    function is(x3, y4) {
      return x3 === y4 && (x3 !== 0 || 1 / x3 === 1 / y4) || x3 !== x3 && y4 !== y4;
    }
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var objectIs = typeof Object.is === "function" ? Object.is : is, useSyncExternalStore2 = React2.useSyncExternalStore, useRef2 = React2.useRef, useEffect3 = React2.useEffect, useMemo2 = React2.useMemo, useDebugValue2 = React2.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
      var instRef = useRef2(null);
      if (instRef.current === null) {
        var inst = { hasValue: false, value: null };
        instRef.current = inst;
      } else
        inst = instRef.current;
      instRef = useMemo2(function() {
        function memoizedSelector(nextSnapshot) {
          if (!hasMemo) {
            hasMemo = true;
            memoizedSnapshot = nextSnapshot;
            nextSnapshot = selector(nextSnapshot);
            if (isEqual !== undefined && inst.hasValue) {
              var currentSelection = inst.value;
              if (isEqual(currentSelection, nextSnapshot))
                return memoizedSelection = currentSelection;
            }
            return memoizedSelection = nextSnapshot;
          }
          currentSelection = memoizedSelection;
          if (objectIs(memoizedSnapshot, nextSnapshot))
            return currentSelection;
          var nextSelection = selector(nextSnapshot);
          if (isEqual !== undefined && isEqual(currentSelection, nextSelection))
            return memoizedSnapshot = nextSnapshot, currentSelection;
          memoizedSnapshot = nextSnapshot;
          return memoizedSelection = nextSelection;
        }
        var hasMemo = false, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = getServerSnapshot === undefined ? null : getServerSnapshot;
        return [
          function() {
            return memoizedSelector(getSnapshot());
          },
          maybeGetServerSnapshot === null ? undefined : function() {
            return memoizedSelector(maybeGetServerSnapshot());
          }
        ];
      }, [getSnapshot, getServerSnapshot, selector, isEqual]);
      var value = useSyncExternalStore2(subscribe, instRef[0], instRef[1]);
      useEffect3(function() {
        inst.hasValue = true;
        inst.value = value;
      }, [value]);
      useDebugValue2(value);
      return value;
    };
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
  })();
});

// node_modules/use-sync-external-store/with-selector.js
var require_with_selector = __commonJS((exports, module) => {
  if (false) {} else {
    module.exports = require_use_sync_external_store_with_selector_development();
  }
});

// node_modules/react-aria/dist/private/utils/domHelpers.mjs
var $d447af545b77c9f1$export$b204af158042fbac = (el) => {
  return el?.ownerDocument ?? document;
};
var $d447af545b77c9f1$export$f21a1ffae260145a = (el) => {
  if (el && "window" in el && el.window === el)
    return el;
  const doc = $d447af545b77c9f1$export$b204af158042fbac(el);
  return doc.defaultView || window;
};
function $d447af545b77c9f1$var$isNode(value) {
  return value !== null && typeof value === "object" && "nodeType" in value && typeof value.nodeType === "number";
}
function $d447af545b77c9f1$export$af51f0f06c0f328a(node) {
  return $d447af545b77c9f1$var$isNode(node) && node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in node;
}

// node_modules/react-stately/dist/private/flags/flags.mjs
var $6a20a7989e6c817a$var$_shadowDOM = false;
function $6a20a7989e6c817a$export$98658e8c59125e6a() {
  return $6a20a7989e6c817a$var$_shadowDOM;
}

// node_modules/react-aria/dist/private/utils/shadowdom/DOMFunctions.mjs
function $23f2114a1b82827e$export$4282f70798064fe0(node, otherNode) {
  if (!(0, $6a20a7989e6c817a$export$98658e8c59125e6a)())
    return otherNode && node ? node.contains(otherNode) : false;
  if (!node || !otherNode)
    return false;
  let currentNode = otherNode;
  while (currentNode !== null) {
    if (currentNode === node)
      return true;
    if (currentNode.tagName === "SLOT" && currentNode.assignedSlot)
      currentNode = currentNode.assignedSlot.parentNode;
    else if ((0, $d447af545b77c9f1$export$af51f0f06c0f328a)(currentNode))
      currentNode = currentNode.host;
    else
      currentNode = currentNode.parentNode;
  }
  return false;
}
var $23f2114a1b82827e$export$cd4e5573fbe2b576 = (doc = document) => {
  if (!(0, $6a20a7989e6c817a$export$98658e8c59125e6a)())
    return doc.activeElement;
  let activeElement = doc.activeElement;
  while (activeElement && "shadowRoot" in activeElement && activeElement.shadowRoot?.activeElement)
    activeElement = activeElement.shadowRoot.activeElement;
  return activeElement;
};
function $23f2114a1b82827e$export$e58f029f0fbfdb29(event) {
  if ((0, $6a20a7989e6c817a$export$98658e8c59125e6a)() && event.target instanceof Element && event.target.shadowRoot) {
    if ("composedPath" in event)
      return event.composedPath()[0] ?? null;
    else if ("composedPath" in event.nativeEvent)
      return event.nativeEvent.composedPath()[0] ?? null;
  }
  return event.target;
}

// node_modules/react-aria/dist/private/utils/focusWithoutScrolling.mjs
function $1969ac565cfec8d0$export$de79e2c695e052f3(element) {
  if ($1969ac565cfec8d0$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $1969ac565cfec8d0$var$getScrollableElements(element);
    element.focus();
    $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements);
  }
}
var $1969ac565cfec8d0$var$supportsPreventScrollCached = null;
function $1969ac565cfec8d0$var$supportsPreventScroll() {
  if ($1969ac565cfec8d0$var$supportsPreventScrollCached == null) {
    $1969ac565cfec8d0$var$supportsPreventScrollCached = false;
    try {
      let focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $1969ac565cfec8d0$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch {}
  }
  return $1969ac565cfec8d0$var$supportsPreventScrollCached;
}
function $1969ac565cfec8d0$var$getScrollableElements(element) {
  let parent = element.parentNode;
  let scrollableElements = [];
  let rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth)
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement)
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  return scrollableElements;
}
function $1969ac565cfec8d0$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}

// node_modules/react-aria/dist/private/utils/useLayoutEffect.mjs
import $3ARPR$react from "react";
var $c4867b2f328c2698$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, $3ARPR$react).useLayoutEffect : () => {};

// node_modules/react-aria/dist/private/interactions/utils.mjs
import { useRef as $lIB5W$useRef, useCallback as $lIB5W$useCallback } from "react";
function $a92dc41f639950be$export$525bc4921d56d4a(nativeEvent) {
  let event = nativeEvent;
  event.nativeEvent = nativeEvent;
  event.isDefaultPrevented = () => event.defaultPrevented;
  event.isPropagationStopped = () => event.cancelBubble;
  event.persist = () => {};
  return event;
}
function $a92dc41f639950be$export$c2b7abe5d61ec696(event, target) {
  Object.defineProperty(event, "target", {
    value: target
  });
  Object.defineProperty(event, "currentTarget", {
    value: target
  });
}
function $a92dc41f639950be$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, $lIB5W$useRef)({
    isFocused: false,
    observer: null
  });
  (0, $c4867b2f328c2698$export$e5c5a5f917a5871c)(() => {
    const state = stateRef.current;
    return () => {
      if (state.observer) {
        state.observer.disconnect();
        state.observer = null;
      }
    };
  }, []);
  return (0, $lIB5W$useCallback)((e) => {
    let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
    if (eventTarget instanceof HTMLButtonElement || eventTarget instanceof HTMLInputElement || eventTarget instanceof HTMLTextAreaElement || eventTarget instanceof HTMLSelectElement) {
      stateRef.current.isFocused = true;
      let target = eventTarget;
      let onBlurHandler = (e2) => {
        stateRef.current.isFocused = false;
        if (target.disabled) {
          let event = $a92dc41f639950be$export$525bc4921d56d4a(e2);
          onBlur?.(event);
        }
        if (stateRef.current.observer) {
          stateRef.current.observer.disconnect();
          stateRef.current.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      stateRef.current.observer = new MutationObserver(() => {
        if (stateRef.current.isFocused && target.disabled) {
          stateRef.current.observer?.disconnect();
          let relatedTargetEl = target === (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)() ? null : (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)();
          target.dispatchEvent(new FocusEvent("blur", {
            relatedTarget: relatedTargetEl
          }));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true,
            relatedTarget: relatedTargetEl
          }));
        }
      });
      stateRef.current.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  }, [
    onBlur
  ]);
}
var $a92dc41f639950be$export$fda7da73ab5d4c48 = false;

// node_modules/react-aria/dist/private/utils/platform.mjs
function $2add3ce32c6007eb$var$testUserAgent(re) {
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  let brands = window.navigator["userAgentData"]?.brands;
  return Array.isArray(brands) && brands.some((brand) => re.test(brand.brand)) || re.test(window.navigator.userAgent);
}
function $2add3ce32c6007eb$var$testPlatform(re) {
  return typeof window !== "undefined" && window.navigator != null ? re.test(window.navigator["userAgentData"]?.platform || window.navigator.platform) : false;
}
function $2add3ce32c6007eb$var$cached(fn) {
  if (false)
    ;
  let res = null;
  return () => {
    if (res == null)
      res = fn();
    return res;
  };
}
var $2add3ce32c6007eb$export$9ac100e40613ea10 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testPlatform(/^Mac/i);
});
var $2add3ce32c6007eb$export$186c6964ca17d99 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testPlatform(/^iPhone/i);
});
var $2add3ce32c6007eb$export$7bef049ce92e4224 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testPlatform(/^iPad/i) || $2add3ce32c6007eb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
});
var $2add3ce32c6007eb$export$fedb369cb70207f1 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$export$186c6964ca17d99() || $2add3ce32c6007eb$export$7bef049ce92e4224();
});
var $2add3ce32c6007eb$export$e1865c3bedcd822b = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$export$9ac100e40613ea10() || $2add3ce32c6007eb$export$fedb369cb70207f1();
});
var $2add3ce32c6007eb$export$78551043582a6a98 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/AppleWebKit/i) && !$2add3ce32c6007eb$export$6446a186d09e379e();
});
var $2add3ce32c6007eb$export$6446a186d09e379e = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/Chrome/i);
});
var $2add3ce32c6007eb$export$a11b0059900ceec8 = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/Android/i);
});
var $2add3ce32c6007eb$export$b7d78993b74f766d = $2add3ce32c6007eb$var$cached(function() {
  return $2add3ce32c6007eb$var$testUserAgent(/Firefox/i);
});

// node_modules/react-aria/dist/private/utils/isVirtualEvent.mjs
function $b5c62b033c25b96d$export$60278871457622de(event) {
  if (event.pointerType === "" && event.isTrusted)
    return true;
  if ((0, $2add3ce32c6007eb$export$a11b0059900ceec8)() && event.pointerType)
    return event.type === "click" && event.buttons === 1;
  return event.detail === 0 && !event.pointerType;
}

// node_modules/react-aria/dist/private/utils/openLink.mjs
import $epzQQ$react, { createContext as $epzQQ$createContext, useMemo as $epzQQ$useMemo, useContext as $epzQQ$useContext } from "react";
function $caaf0dd3060ed57c$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
  let { metaKey, ctrlKey, altKey, shiftKey } = modifiers;
  if ((0, $2add3ce32c6007eb$export$b7d78993b74f766d)() && window.event?.type?.startsWith("key") && target.target === "_blank") {
    if ((0, $2add3ce32c6007eb$export$9ac100e40613ea10)())
      metaKey = true;
    else
      ctrlKey = true;
  }
  let event = (0, $2add3ce32c6007eb$export$78551043582a6a98)() && (0, $2add3ce32c6007eb$export$9ac100e40613ea10)() && !(0, $2add3ce32c6007eb$export$7bef049ce92e4224)() ? new KeyboardEvent("keydown", {
    keyIdentifier: "Enter",
    metaKey,
    ctrlKey,
    altKey,
    shiftKey
  }) : new MouseEvent("click", {
    metaKey,
    ctrlKey,
    altKey,
    shiftKey,
    detail: 1,
    bubbles: true,
    cancelable: true
  });
  $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = setOpening;
  (0, $1969ac565cfec8d0$export$de79e2c695e052f3)(target);
  target.dispatchEvent(event);
  $caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;
}
$caaf0dd3060ed57c$export$95185d699e05d4d7.isOpening = false;

// node_modules/react-aria/dist/private/interactions/useFocusVisible.mjs
import { useState as $7U4qw$useState, useEffect as $7U4qw$useEffect } from "react";
var $8f5a2122b0992be3$var$currentModality = null;
var $8f5a2122b0992be3$var$currentPointerType = "keyboard";
var $8f5a2122b0992be3$export$901e90a13c50a14e = new Set;
var $8f5a2122b0992be3$export$d90243b58daecda7 = new Map;
var $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
var $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
var $8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $8f5a2122b0992be3$var$triggerChangeHandlers(modality, e) {
  for (let handler of $8f5a2122b0992be3$export$901e90a13c50a14e)
    handler(modality, e);
}
function $8f5a2122b0992be3$var$isValidKey(e) {
  return !(e.metaKey || !(0, $2add3ce32c6007eb$export$9ac100e40613ea10)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $8f5a2122b0992be3$var$handleKeyboardEvent(e) {
  $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
  if (!(0, $caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening && $8f5a2122b0992be3$var$isValidKey(e)) {
    $8f5a2122b0992be3$var$currentModality = "keyboard";
    $8f5a2122b0992be3$var$currentPointerType = "keyboard";
    $8f5a2122b0992be3$var$triggerChangeHandlers("keyboard", e);
  }
}
function $8f5a2122b0992be3$var$handlePointerEvent(e) {
  $8f5a2122b0992be3$var$currentModality = "pointer";
  $8f5a2122b0992be3$var$currentPointerType = "pointerType" in e ? e.pointerType : "mouse";
  if (e.type === "mousedown" || e.type === "pointerdown") {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$triggerChangeHandlers("pointer", e);
  }
}
function $8f5a2122b0992be3$var$handleClickEvent(e) {
  if (!(0, $caaf0dd3060ed57c$export$95185d699e05d4d7).isOpening && (0, $b5c62b033c25b96d$export$60278871457622de)(e)) {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    $8f5a2122b0992be3$var$currentModality = "virtual";
    $8f5a2122b0992be3$var$currentPointerType = "virtual";
  }
}
function $8f5a2122b0992be3$var$handleFocusEvent(e) {
  let ownerWindow = (0, $d447af545b77c9f1$export$f21a1ffae260145a)((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e));
  let ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e));
  if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === ownerWindow || (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === ownerDocument || (0, $a92dc41f639950be$export$fda7da73ab5d4c48) || !e.isTrusted)
    return;
  if (!$8f5a2122b0992be3$var$hasEventBeforeFocus && !$8f5a2122b0992be3$var$hasBlurredWindowRecently) {
    $8f5a2122b0992be3$var$currentModality = "virtual";
    $8f5a2122b0992be3$var$currentPointerType = "virtual";
    $8f5a2122b0992be3$var$triggerChangeHandlers("virtual", e);
  }
  $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  $8f5a2122b0992be3$var$hasBlurredWindowRecently = false;
}
function $8f5a2122b0992be3$var$handleWindowBlur() {
  if (0, $a92dc41f639950be$export$fda7da73ab5d4c48)
    return;
  $8f5a2122b0992be3$var$hasEventBeforeFocus = false;
  $8f5a2122b0992be3$var$hasBlurredWindowRecently = true;
}
function $8f5a2122b0992be3$var$setupGlobalFocusEvents(element) {
  if (typeof window === "undefined" || typeof document === "undefined")
    return;
  const windowObject = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element);
  const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
  if ($8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject))
    return;
  let focus = windowObject.HTMLElement.prototype.focus;
  windowObject.HTMLElement.prototype.focus = function() {
    $8f5a2122b0992be3$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  documentObject.addEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.addEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.addEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
  windowObject.addEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
  windowObject.addEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.addEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.addEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  } else if (false) {}
  windowObject.addEventListener("beforeunload", () => {
    $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element);
  }, {
    once: true
  });
  $8f5a2122b0992be3$export$d90243b58daecda7.set(windowObject, {
    focus
  });
}
var $8f5a2122b0992be3$var$tearDownWindowFocusTracking = (element, loadListener) => {
  const windowObject = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(element);
  const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
  if (loadListener)
    documentObject.removeEventListener("DOMContentLoaded", loadListener);
  if (!$8f5a2122b0992be3$export$d90243b58daecda7.has(windowObject))
    return;
  windowObject.HTMLElement.prototype.focus = $8f5a2122b0992be3$export$d90243b58daecda7.get(windowObject).focus;
  documentObject.removeEventListener("keydown", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("keyup", $8f5a2122b0992be3$var$handleKeyboardEvent, true);
  documentObject.removeEventListener("click", $8f5a2122b0992be3$var$handleClickEvent, true);
  windowObject.removeEventListener("focus", $8f5a2122b0992be3$var$handleFocusEvent, true);
  windowObject.removeEventListener("blur", $8f5a2122b0992be3$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    documentObject.removeEventListener("pointerdown", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointermove", $8f5a2122b0992be3$var$handlePointerEvent, true);
    documentObject.removeEventListener("pointerup", $8f5a2122b0992be3$var$handlePointerEvent, true);
  } else if (false) {}
  $8f5a2122b0992be3$export$d90243b58daecda7.delete(windowObject);
};
function $8f5a2122b0992be3$export$2f1888112f558a7d(element) {
  const documentObject = (0, $d447af545b77c9f1$export$b204af158042fbac)(element);
  let loadListener;
  if (documentObject.readyState !== "loading")
    $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
  else {
    loadListener = () => {
      $8f5a2122b0992be3$var$setupGlobalFocusEvents(element);
    };
    documentObject.addEventListener("DOMContentLoaded", loadListener);
  }
  return () => $8f5a2122b0992be3$var$tearDownWindowFocusTracking(element, loadListener);
}
if (typeof document !== "undefined")
  $8f5a2122b0992be3$export$2f1888112f558a7d();
function $8f5a2122b0992be3$export$b9b3dfddab17db27() {
  return $8f5a2122b0992be3$var$currentModality !== "pointer";
}
var $8f5a2122b0992be3$var$nonTextInputTypes = new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function $8f5a2122b0992be3$var$isKeyboardFocusEvent(isTextInput, modality, e) {
  let eventTarget = e ? (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) : undefined;
  let document1 = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
  let ownerWindow = (0, $d447af545b77c9f1$export$f21a1ffae260145a)(eventTarget);
  const IHTMLInputElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLInputElement : HTMLInputElement;
  const IHTMLTextAreaElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLTextAreaElement : HTMLTextAreaElement;
  const IHTMLElement = typeof ownerWindow !== "undefined" ? ownerWindow.HTMLElement : HTMLElement;
  const IKeyboardEvent = typeof ownerWindow !== "undefined" ? ownerWindow.KeyboardEvent : KeyboardEvent;
  let activeElement = (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(document1);
  isTextInput = isTextInput || activeElement instanceof IHTMLInputElement && !$8f5a2122b0992be3$var$nonTextInputTypes.has(activeElement.type) || activeElement instanceof IHTMLTextAreaElement || activeElement instanceof IHTMLElement && activeElement.isContentEditable;
  return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$8f5a2122b0992be3$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $8f5a2122b0992be3$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $8f5a2122b0992be3$var$setupGlobalFocusEvents();
  (0, $7U4qw$useEffect)(() => {
    if (opts?.enabled === false)
      return;
    let handler = (modality, e) => {
      if (!$8f5a2122b0992be3$var$isKeyboardFocusEvent(!!opts?.isTextInput, modality, e))
        return;
      fn($8f5a2122b0992be3$export$b9b3dfddab17db27());
    };
    $8f5a2122b0992be3$export$901e90a13c50a14e.add(handler);
    return () => {
      $8f5a2122b0992be3$export$901e90a13c50a14e.delete(handler);
    };
  }, deps);
}

// node_modules/react-aria/dist/private/interactions/useFocus.mjs
import { useCallback as $3siB1$useCallback } from "react";
function $1e74c67db218ce67$export$f8168d8dd8fd66e6(props) {
  let { isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange } = props;
  const onBlur = (0, $3siB1$useCallback)((e) => {
    if ((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e) === e.currentTarget) {
      if (onBlurProp)
        onBlurProp(e);
      if (onFocusChange)
        onFocusChange(false);
      return true;
    }
  }, [
    onBlurProp,
    onFocusChange
  ]);
  const onSyntheticFocus = (0, $a92dc41f639950be$export$715c682d09d639cc)(onBlur);
  const onFocus = (0, $3siB1$useCallback)((e) => {
    let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
    const ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
    const activeElement = ownerDocument ? (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument) : (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)();
    if (eventTarget === e.currentTarget && eventTarget === activeElement) {
      if (onFocusProp)
        onFocusProp(e);
      if (onFocusChange)
        onFocusChange(true);
      onSyntheticFocus(e);
    }
  }, [
    onFocusChange,
    onFocusProp,
    onSyntheticFocus
  ]);
  return {
    focusProps: {
      onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
      onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
    }
  };
}

// node_modules/react-aria/dist/private/utils/useGlobalListeners.mjs
import { useRef as $awe0O$useRef, useCallback as $awe0O$useCallback, useEffect as $awe0O$useEffect } from "react";
function $48a7d519b337145d$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, $awe0O$useRef)(new Map);
  let addGlobalListener = (0, $awe0O$useCallback)((eventTarget, type, listener, options) => {
    let fn = options?.once ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, fn, options);
  }, []);
  let removeGlobalListener = (0, $awe0O$useCallback)((eventTarget, type, listener, options) => {
    let fn = globalListeners.current.get(listener)?.fn || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, $awe0O$useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, $awe0O$useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}

// node_modules/react-aria/dist/private/interactions/useFocusWithin.mjs
import { useRef as $5319z$useRef, useCallback as $5319z$useCallback } from "react";
function $2c9edc598a03d523$export$420e68273165f4ec(props) {
  let { isDisabled, onBlurWithin, onFocusWithin, onFocusWithinChange } = props;
  let state = (0, $5319z$useRef)({
    isFocusWithin: false
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0, $48a7d519b337145d$export$4eaf04e54aa8eed6)();
  let onBlur = (0, $5319z$useCallback)((e) => {
    if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e)))
      return;
    if (state.current.isFocusWithin && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, e.relatedTarget)) {
      state.current.isFocusWithin = false;
      removeAllGlobalListeners();
      if (onBlurWithin)
        onBlurWithin(e);
      if (onFocusWithinChange)
        onFocusWithinChange(false);
    }
  }, [
    onBlurWithin,
    onFocusWithinChange,
    state,
    removeAllGlobalListeners
  ]);
  let onSyntheticFocus = (0, $a92dc41f639950be$export$715c682d09d639cc)(onBlur);
  let onFocus = (0, $5319z$useCallback)((e) => {
    if (!(0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e)))
      return;
    let eventTarget = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e);
    const ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(eventTarget);
    const activeElement = (0, $23f2114a1b82827e$export$cd4e5573fbe2b576)(ownerDocument);
    if (!state.current.isFocusWithin && activeElement === eventTarget) {
      if (onFocusWithin)
        onFocusWithin(e);
      if (onFocusWithinChange)
        onFocusWithinChange(true);
      state.current.isFocusWithin = true;
      onSyntheticFocus(e);
      let currentTarget = e.currentTarget;
      addGlobalListener(ownerDocument, "focus", (e2) => {
        let eventTarget2 = (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e2);
        if (state.current.isFocusWithin && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(currentTarget, eventTarget2)) {
          let nativeEvent = new ownerDocument.defaultView.FocusEvent("blur", {
            relatedTarget: eventTarget2
          });
          (0, $a92dc41f639950be$export$c2b7abe5d61ec696)(nativeEvent, currentTarget);
          let event = (0, $a92dc41f639950be$export$525bc4921d56d4a)(nativeEvent);
          onBlur(event);
        }
      }, {
        capture: true
      });
    }
  }, [
    onFocusWithin,
    onFocusWithinChange,
    onSyntheticFocus,
    addGlobalListener,
    onBlur
  ]);
  if (isDisabled)
    return {
      focusWithinProps: {
        onFocus: undefined,
        onBlur: undefined
      }
    };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}

// node_modules/react-aria/dist/private/focus/useFocusRing.mjs
import { useRef as $3s2y0$useRef, useState as $3s2y0$useState, useCallback as $3s2y0$useCallback } from "react";
function $0c4a58759813079a$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, $3s2y0$useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || (0, $8f5a2122b0992be3$export$b9b3dfddab17db27)()
  });
  let [isFocused, setFocused] = (0, $3s2y0$useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, $3s2y0$useState)(() => state.current.isFocused && state.current.isFocusVisible);
  let updateState = (0, $3s2y0$useCallback)(() => setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
  let onFocusChange = (0, $3s2y0$useCallback)((isFocused2) => {
    state.current.isFocused = isFocused2;
    state.current.isFocusVisible = (0, $8f5a2122b0992be3$export$b9b3dfddab17db27)();
    setFocused(isFocused2);
    updateState();
  }, [
    updateState
  ]);
  (0, $8f5a2122b0992be3$export$ec71b4b83ac08ec3)((isFocusVisible) => {
    state.current.isFocusVisible = isFocusVisible;
    updateState();
  }, [
    isTextInput,
    isFocused
  ], {
    enabled: isFocused,
    isTextInput
  });
  let { focusProps } = (0, $1e74c67db218ce67$export$f8168d8dd8fd66e6)({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = (0, $2c9edc598a03d523$export$420e68273165f4ec)({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused,
    isFocusVisible: isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}

// node_modules/react-aria/dist/private/interactions/useHover.mjs
import { useState as $hZqKM$useState, useRef as $hZqKM$useRef, useEffect as $hZqKM$useEffect, useMemo as $hZqKM$useMemo } from "react";
var $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
var $e969f22b6713ca4a$var$hoverCount = 0;
function $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents() {
  $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents = false;
  }, 500);
}
function $e969f22b6713ca4a$var$handleGlobalPointerEvent(e) {
  if (e.pointerType === "touch")
    $e969f22b6713ca4a$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $e969f22b6713ca4a$var$setupGlobalTouchEvents() {
  let ownerDocument = (0, $d447af545b77c9f1$export$b204af158042fbac)(null);
  if (typeof ownerDocument === "undefined")
    return;
  if ($e969f22b6713ca4a$var$hoverCount === 0) {
    if (typeof PointerEvent !== "undefined")
      ownerDocument.addEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
    else if (false)
      ;
  }
  $e969f22b6713ca4a$var$hoverCount++;
  return () => {
    $e969f22b6713ca4a$var$hoverCount--;
    if ($e969f22b6713ca4a$var$hoverCount > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      ownerDocument.removeEventListener("pointerup", $e969f22b6713ca4a$var$handleGlobalPointerEvent);
    else if (false)
      ;
  };
}
function $e969f22b6713ca4a$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, $hZqKM$useState)(false);
  let state = (0, $hZqKM$useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, $hZqKM$useEffect)($e969f22b6713ca4a$var$setupGlobalTouchEvents, []);
  let { addGlobalListener, removeAllGlobalListeners } = (0, $48a7d519b337145d$export$4eaf04e54aa8eed6)();
  let { hoverProps, triggerHoverEnd } = (0, $hZqKM$useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !(0, $23f2114a1b82827e$export$4282f70798064fe0)(event.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(event)))
        return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      addGlobalListener((0, $d447af545b77c9f1$export$b204af158042fbac)((0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(event)), "pointerover", (e) => {
        if (state.isHovered && state.target && !(0, $23f2114a1b82827e$export$4282f70798064fe0)(state.target, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e)))
          triggerHoverEnd2(e, e.pointerType);
      }, {
        capture: true
      });
      if (onHoverStart)
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd2 = (event, pointerType) => {
      let target = state.target;
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered || !target)
        return;
      state.isHovered = false;
      removeAllGlobalListeners();
      if (onHoverEnd)
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(false);
      setHovered(false);
    };
    let hoverProps2 = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps2.onPointerEnter = (e) => {
        if ($e969f22b6713ca4a$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse")
          return;
        triggerHoverStart(e, e.pointerType);
      };
      hoverProps2.onPointerLeave = (e) => {
        if (!isDisabled && (0, $23f2114a1b82827e$export$4282f70798064fe0)(e.currentTarget, (0, $23f2114a1b82827e$export$e58f029f0fbfdb29)(e)))
          triggerHoverEnd2(e, e.pointerType);
      };
    } else if (false) {}
    return {
      hoverProps: hoverProps2,
      triggerHoverEnd: triggerHoverEnd2
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state,
    addGlobalListener,
    removeAllGlobalListeners
  ]);
  (0, $hZqKM$useEffect)(() => {
    if (isDisabled)
      triggerHoverEnd({
        currentTarget: state.target
      }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps,
    isHovered
  };
}

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
import { useRef as a2, useState as m } from "react";

// node_modules/@headlessui/react/dist/utils/env.js
var i = Object.defineProperty;
var d = (t, e, n) => (e in t) ? i(t, e, { enumerable: true, configurable: true, writable: true, value: n }) : t[e] = n;
var r = (t, e, n) => (d(t, typeof e != "symbol" ? e + "" : e, n), n);

class o {
  constructor() {
    r(this, "current", this.detect());
    r(this, "handoffState", "pending");
    r(this, "currentId", 0);
  }
  set(e) {
    this.current !== e && (this.handoffState = "pending", this.currentId = 0, this.current = e);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window == "undefined" || typeof document == "undefined" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}
var s = new o;

// node_modules/@headlessui/react/dist/utils/owner.js
function l(n) {
  var u;
  return s.isServer ? null : n == null ? document : (u = n == null ? undefined : n.ownerDocument) != null ? u : document;
}
function r2(n) {
  var u, o2;
  return s.isServer ? null : n == null ? document : (o2 = (u = n == null ? undefined : n.getRootNode) == null ? undefined : u.call(n)) != null ? o2 : document;
}
function e(n) {
  var u, o2;
  return (o2 = (u = r2(n)) == null ? undefined : u.activeElement) != null ? o2 : null;
}
function d2(n) {
  return e(n) === n;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
import { useEffect as s2, useState as o3 } from "react";

// node_modules/@headlessui/react/dist/utils/micro-task.js
function t(e2) {
  typeof queueMicrotask == "function" ? queueMicrotask(e2) : Promise.resolve().then(e2).catch((o2) => setTimeout(() => {
    throw o2;
  }));
}

// node_modules/@headlessui/react/dist/utils/disposables.js
function o2() {
  let s2 = [], r3 = { addEventListener(e2, t2, n, i2) {
    return e2.addEventListener(t2, n, i2), r3.add(() => e2.removeEventListener(t2, n, i2));
  }, requestAnimationFrame(...e2) {
    let t2 = requestAnimationFrame(...e2);
    return r3.add(() => cancelAnimationFrame(t2));
  }, nextFrame(...e2) {
    return r3.requestAnimationFrame(() => r3.requestAnimationFrame(...e2));
  }, setTimeout(...e2) {
    let t2 = setTimeout(...e2);
    return r3.add(() => clearTimeout(t2));
  }, microTask(...e2) {
    let t2 = { current: true };
    return t(() => {
      t2.current && e2[0]();
    }), r3.add(() => {
      t2.current = false;
    });
  }, style(e2, t2, n) {
    let i2 = e2.style.getPropertyValue(t2);
    return Object.assign(e2.style, { [t2]: n }), this.add(() => {
      Object.assign(e2.style, { [t2]: i2 });
    });
  }, group(e2) {
    let t2 = o2();
    return e2(t2), this.add(() => t2.dispose());
  }, add(e2) {
    return s2.includes(e2) || s2.push(e2), () => {
      let t2 = s2.indexOf(e2);
      if (t2 >= 0)
        for (let n of s2.splice(t2, 1))
          n();
    };
  }, dispose() {
    for (let e2 of s2.splice(0))
      e2();
  } };
  return r3;
}

// node_modules/@headlessui/react/dist/hooks/use-disposables.js
function p() {
  let [e2] = o3(o2);
  return s2(() => () => e2.dispose(), [e2]), e2;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
import a from "react";

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
import { useRef as t2 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
import { useEffect as f, useLayoutEffect as c } from "react";
var n = (e2, t2) => {
  s.isServer ? f(e2, t2) : c(e2, t2);
};

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
function s3(e2) {
  let r3 = t2(e2);
  return n(() => {
    r3.current = e2;
  }, [e2]), r3;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
var o4 = function(t3) {
  let e2 = s3(t3);
  return a.useCallback((...r3) => e2.current(...r3), [e2]);
};

// node_modules/@headlessui/react/dist/hooks/use-active-press.js
function E(e2) {
  let t3 = e2.width / 2, n2 = e2.height / 2;
  return { top: e2.clientY - n2, right: e2.clientX + t3, bottom: e2.clientY + n2, left: e2.clientX - t3 };
}
function P(e2, t3) {
  return !(!e2 || !t3 || e2.right < t3.left || e2.left > t3.right || e2.bottom < t3.top || e2.top > t3.bottom);
}
function w({ disabled: e2 = false } = {}) {
  let t3 = a2(null), [n2, l2] = m(false), r3 = p(), o5 = o4(() => {
    t3.current = null, l2(false), r3.dispose();
  }), f2 = o4((s4) => {
    if (r3.dispose(), t3.current === null) {
      t3.current = s4.currentTarget, l2(true);
      {
        let i2 = l(s4.currentTarget);
        r3.addEventListener(i2, "pointerup", o5, false), r3.addEventListener(i2, "pointermove", (c2) => {
          if (t3.current) {
            let p2 = E(c2);
            l2(P(p2, t3.current.getBoundingClientRect()));
          }
        }, false), r3.addEventListener(i2, "pointercancel", o5, false);
      }
    }
  });
  return { pressed: n2, pressProps: e2 ? {} : { onPointerDown: f2, onPointerUp: o5, onClick: o5 } };
}

// node_modules/@headlessui/react/dist/hooks/use-slot.js
import { useMemo as t3 } from "react";
function n2(e2) {
  return t3(() => e2, Object.values(e2));
}

// node_modules/@headlessui/react/dist/internal/disabled.js
import n3, { createContext as r3, useContext as i2 } from "react";
var e2 = r3(undefined);
function a3() {
  return i2(e2);
}
function l2({ value: t4, children: o5 }) {
  return n3.createElement(e2.Provider, { value: t4 }, o5);
}

// node_modules/@headlessui/react/dist/utils/render.js
import v, { Fragment as S, cloneElement as j, createElement as w2, forwardRef as k, isValidElement as M, useCallback as x, useRef as O } from "react";

// node_modules/@headlessui/react/dist/utils/class-names.js
function t4(...r4) {
  return Array.from(new Set(r4.flatMap((n4) => typeof n4 == "string" ? n4.split(" ") : []))).filter(Boolean).join(" ");
}

// node_modules/@headlessui/react/dist/utils/match.js
function u(r4, n4, ...a4) {
  if (r4 in n4) {
    let e3 = n4[r4];
    return typeof e3 == "function" ? e3(...a4) : e3;
  }
  let t5 = new Error(`Tried to handle "${r4}" but there is no handler defined. Only defined handlers are: ${Object.keys(n4).map((e3) => `"${e3}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t5, u), t5;
}

// node_modules/@headlessui/react/dist/utils/render.js
var A = ((a4) => (a4[a4.None = 0] = "None", a4[a4.RenderStrategy = 1] = "RenderStrategy", a4[a4.Static = 2] = "Static", a4))(A || {});
var C = ((t5) => (t5[t5.Unmount = 0] = "Unmount", t5[t5.Hidden = 1] = "Hidden", t5))(C || {});
function K() {
  let e3 = I();
  return x((r4) => U({ mergeRefs: e3, ...r4 }), [e3]);
}
function U({ ourProps: e3, theirProps: r4, slot: t5, defaultTag: a4, features: o5, visible: n4 = true, name: i3, mergeRefs: l3 }) {
  l3 = l3 != null ? l3 : H;
  let s4 = P2(r4, e3);
  if (n4)
    return F(s4, t5, a4, i3, l3);
  let y = o5 != null ? o5 : 0;
  if (y & 2) {
    let { static: f2 = false, ...u2 } = s4;
    if (f2)
      return F(u2, t5, a4, i3, l3);
  }
  if (y & 1) {
    let { unmount: f2 = true, ...u2 } = s4;
    return u(f2 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return F({ ...u2, hidden: true, style: { display: "none" } }, t5, a4, i3, l3);
    } });
  }
  return F(s4, t5, a4, i3, l3);
}
function F(e3, r4 = {}, t5, a4, o5) {
  let { as: n4 = t5, children: i3, refName: l3 = "ref", ...s4 } = h(e3, ["unmount", "static"]), y = e3.ref !== undefined ? { [l3]: e3.ref } : {}, f2 = typeof i3 == "function" ? i3(r4) : i3;
  f2 = E2(f2), "className" in s4 && s4.className && typeof s4.className == "function" && (s4.className = s4.className(r4)), s4["aria-labelledby"] && s4["aria-labelledby"] === s4.id && (s4["aria-labelledby"] = undefined);
  let u2 = {};
  if (r4) {
    let d3 = false, p2 = [];
    for (let [c2, T] of Object.entries(r4))
      typeof T == "boolean" && (d3 = true), T === true && p2.push(c2.replace(/([A-Z])/g, (g) => `-${g.toLowerCase()}`));
    if (d3) {
      u2["data-headlessui-state"] = p2.join(" ");
      for (let c2 of p2)
        u2[`data-${c2}`] = "";
    }
  }
  if (b(n4) && (Object.keys(m2(s4)).length > 0 || Object.keys(m2(u2)).length > 0))
    if (!M(f2) || Array.isArray(f2) && f2.length > 1 || L(f2)) {
      if (Object.keys(m2(s4)).length > 0)
        throw new Error(['Passing props on "Fragment"!', "", `The current component <${a4} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(m2(s4)).concat(Object.keys(m2(u2))).map((d3) => `  - ${d3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((d3) => `  - ${d3}`).join(`
`)].join(`
`));
    } else {
      let d3 = f2.props, p2 = d3 == null ? undefined : d3.className, c2 = typeof p2 == "function" ? (...R) => t4(p2(...R), s4.className) : t4(p2, s4.className), T = c2 ? { className: c2 } : {}, g = P2(f2.props, m2(h(s4, ["ref"])));
      for (let R in u2)
        R in g && delete u2[R];
      return j(f2, Object.assign({}, g, u2, y, { ref: o5(D(f2), y.ref) }, T));
    }
  return w2(n4, Object.assign({}, h(s4, ["ref"]), !b(n4) && y, !b(n4) && u2), f2);
}
function I() {
  let e3 = O([]), r4 = x((t5) => {
    for (let a4 of e3.current)
      a4 != null && (typeof a4 == "function" ? a4(t5) : a4.current = t5);
  }, []);
  return (...t5) => {
    if (!t5.every((a4) => a4 == null))
      return e3.current = t5, r4;
  };
}
function H(...e3) {
  return e3.every((r4) => r4 == null) ? undefined : (r4) => {
    for (let t5 of e3)
      t5 != null && (typeof t5 == "function" ? t5(r4) : t5.current = r4);
  };
}
function P2(...e3) {
  var a4;
  if (e3.length === 0)
    return {};
  if (e3.length === 1)
    return e3[0];
  let r4 = {}, t5 = {};
  for (let o5 of e3)
    for (let n4 in o5)
      n4.startsWith("on") && typeof o5[n4] == "function" ? ((a4 = t5[n4]) != null || (t5[n4] = []), t5[n4].push(o5[n4])) : r4[n4] = o5[n4];
  if (r4.disabled || r4["aria-disabled"])
    for (let o5 in t5)
      /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(o5) && (t5[o5] = [(n4) => {
        var i3;
        return (i3 = n4 == null ? undefined : n4.preventDefault) == null ? undefined : i3.call(n4);
      }]);
  for (let o5 in t5)
    Object.assign(r4, { [o5](n4, ...i3) {
      let l3 = t5[o5];
      for (let s4 of l3) {
        if ((n4 instanceof Event || (n4 == null ? undefined : n4.nativeEvent) instanceof Event) && n4.defaultPrevented)
          return;
        s4(n4, ...i3);
      }
    } });
  return r4;
}
function V(...e3) {
  var a4;
  if (e3.length === 0)
    return {};
  if (e3.length === 1)
    return e3[0];
  let r4 = {}, t5 = {};
  for (let o5 of e3)
    for (let n4 in o5)
      n4.startsWith("on") && typeof o5[n4] == "function" ? ((a4 = t5[n4]) != null || (t5[n4] = []), t5[n4].push(o5[n4])) : r4[n4] = o5[n4];
  for (let o5 in t5)
    Object.assign(r4, { [o5](...n4) {
      let i3 = t5[o5];
      for (let l3 of i3)
        l3 == null || l3(...n4);
    } });
  return r4;
}
function Y(e3) {
  var r4;
  return Object.assign(k(e3), { displayName: (r4 = e3.displayName) != null ? r4 : e3.name });
}
function m2(e3) {
  let r4 = Object.assign({}, e3);
  for (let t5 in r4)
    r4[t5] === undefined && delete r4[t5];
  return r4;
}
function h(e3, r4 = []) {
  let t5 = Object.assign({}, e3);
  for (let a4 of r4)
    a4 in t5 && delete t5[a4];
  return t5;
}
function D(e3) {
  return v.version.split(".")[0] >= "19" ? e3.props.ref : e3.ref;
}
function E2(e3) {
  if (e3 != null && e3.$$typeof === Symbol.for("react.lazy")) {
    let r4 = e3._payload;
    if (r4 != null && r4.status === "fulfilled")
      return E2(r4.value);
  }
  return e3;
}
function b(e3) {
  return e3 === S || e3 === Symbol.for("react.fragment");
}
function L(e3) {
  return b(e3.type);
}

// node_modules/@headlessui/react/dist/components/button/button.js
"use client";
var R = "button";
function v2(s4, n4) {
  var r4;
  let p2 = a3(), { disabled: e3 = p2 || false, autoFocus: t5 = false, ...o5 } = s4, { isFocusVisible: a4, focusProps: l3 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: t5 }), { isHovered: u2, hoverProps: i3 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: e3 }), { pressed: T, pressProps: d3 } = w({ disabled: e3 }), f2 = V({ ref: n4, type: (r4 = o5.type) != null ? r4 : "button", disabled: e3 || undefined, autoFocus: t5 }, l3, i3, d3), m3 = n2({ disabled: e3, hover: u2, focus: a4, active: T, autofocus: t5 });
  return K()({ ourProps: f2, theirProps: o5, slot: m3, defaultTag: R, name: "Button" });
}
var L2 = Y(v2);
// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
import s7, { useCallback as w4, useState as J } from "react";

// node_modules/@headlessui/react/dist/hooks/use-controllable.js
import { useRef as o5, useState as f2 } from "react";
import { flushSync as a4 } from "react-dom";
function b2(l3, r4, c2) {
  let [i3, s4] = f2(c2), e3 = l3 !== undefined, t5 = o5(e3), u2 = o5(false), d3 = o5(false);
  return e3 && !t5.current && !u2.current ? (u2.current = true, t5.current = e3, console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !e3 && t5.current && !d3.current && (d3.current = true, t5.current = e3, console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")), [e3 ? l3 : i3, o4((n4) => (e3 || a4(() => s4(n4)), r4 == null ? undefined : r4(n4)))];
}

// node_modules/@headlessui/react/dist/hooks/use-default-value.js
import { useState as u2 } from "react";
function l3(e3) {
  let [t5] = u2(e3);
  return t5;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
import { useId as r4 } from "react";

// node_modules/@headlessui/react/dist/internal/form-fields.js
import o6, { createContext as H2, useContext as E3, useEffect as m3, useState as u3 } from "react";
import { createPortal as g2 } from "react-dom";

// node_modules/@headlessui/react/dist/utils/form.js
import { isValidElement as f3 } from "react";
function p2(t5 = {}, i3 = null, n4 = []) {
  for (let [e3, o6] of Object.entries(t5))
    s4(n4, r5(i3, e3), o6);
  return n4;
}
function r5(t5, i3) {
  return t5 ? t5 + "[" + i3 + "]" : i3;
}
function s4(t5, i3, n4) {
  if (Array.isArray(n4))
    for (let [e3, o6] of n4.entries())
      s4(t5, r5(i3, e3.toString()), o6);
  else
    n4 instanceof Date ? t5.push([i3, n4.toISOString()]) : typeof n4 == "boolean" ? t5.push([i3, n4 ? "1" : "0"]) : typeof n4 == "string" ? t5.push([i3, n4]) : typeof n4 == "number" ? t5.push([i3, `${n4}`]) : n4 == null ? t5.push([i3, ""]) : c2(n4) && !f3(n4) && p2(n4, i3, t5);
}
function g(t5) {
  var n4, e3;
  let i3 = (n4 = t5 == null ? undefined : t5.form) != null ? n4 : t5.closest("form");
  if (i3) {
    for (let o6 of i3.elements)
      if (o6 !== t5 && (o6.tagName === "INPUT" && o6.type === "submit" || o6.tagName === "BUTTON" && o6.type === "submit" || o6.nodeName === "INPUT" && o6.type === "image")) {
        o6.click();
        return;
      }
    (e3 = i3.requestSubmit) == null || e3.call(i3);
  }
}
function c2(t5) {
  if (Object.prototype.toString.call(t5) !== "[object Object]")
    return false;
  let i3 = Object.getPrototypeOf(t5);
  return i3 === null || Object.getPrototypeOf(i3) === null;
}

// node_modules/@headlessui/react/dist/internal/hidden.js
var a5 = "span";
var s5 = ((e3) => (e3[e3.None = 1] = "None", e3[e3.Focusable = 2] = "Focusable", e3[e3.Hidden = 4] = "Hidden", e3))(s5 || {});
function l4(t5, r6) {
  var n4;
  let { features: d3 = 1, ...e3 } = t5, o6 = { ref: r6, "aria-hidden": (d3 & 2) === 2 ? true : (n4 = e3["aria-hidden"]) != null ? n4 : undefined, hidden: (d3 & 4) === 4 ? true : undefined, style: { position: "fixed", top: 1, left: 1, width: 1, height: 0, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", borderWidth: "0", ...(d3 & 4) === 4 && (d3 & 2) !== 2 && { display: "none" } } };
  return K()({ ourProps: o6, theirProps: e3, slot: {}, defaultTag: a5, name: "Hidden" });
}
var f4 = Y(l4);

// node_modules/@headlessui/react/dist/internal/form-fields.js
var f5 = H2(null);
function W(t5) {
  let [e3, r6] = u3(null);
  return o6.createElement(f5.Provider, { value: { target: e3 } }, t5.children, o6.createElement(f4, { features: s5.Hidden, ref: r6 }));
}
function c3({ children: t5 }) {
  let e3 = E3(f5);
  if (!e3)
    return o6.createElement(o6.Fragment, null, t5);
  let { target: r6 } = e3;
  return r6 ? g2(o6.createElement(o6.Fragment, null, t5), r6) : null;
}
function j2({ data: t5, form: e3, disabled: r6, onReset: n4, overrides: F2 }) {
  let [i3, a6] = u3(null), p3 = p();
  return m3(() => {
    if (n4 && i3)
      return p3.addEventListener(i3, "reset", n4);
  }, [i3, e3, n4]), o6.createElement(c3, null, o6.createElement(C2, { setForm: a6, formId: e3 }), p2(t5).map(([s6, v3]) => o6.createElement(f4, { features: s5.Hidden, ...m2({ key: s6, as: "input", type: "hidden", hidden: true, readOnly: true, form: e3, disabled: r6, name: s6, value: v3, ...F2 }) })));
}
function C2({ setForm: t5, formId: e3 }) {
  return m3(() => {
    if (e3) {
      let r6 = document.getElementById(e3);
      r6 && t5(r6);
    }
  }, [t5, e3]), e3 ? null : o6.createElement(f4, { features: s5.Hidden, as: "input", type: "hidden", hidden: true, readOnly: true, ref: (r6) => {
    if (!r6)
      return;
    let n4 = r6.closest("form");
    n4 && t5(n4);
  } });
}

// node_modules/@headlessui/react/dist/internal/id.js
import n4, { createContext as d3, useContext as i3 } from "react";
var e3 = d3(undefined);
function u4() {
  return i3(e3);
}
function f6({ id: t5, children: r6 }) {
  return n4.createElement(e3.Provider, { value: t5 }, r6);
}

// node_modules/@headlessui/react/dist/utils/dom.js
function o7(e4) {
  return typeof e4 != "object" || e4 === null ? false : ("nodeType" in e4);
}
function t5(e4) {
  return o7(e4) && "tagName" in e4;
}
function n5(e4) {
  return t5(e4) && "accessKey" in e4;
}
function i4(e4) {
  return t5(e4) && "tabIndex" in e4;
}
function r6(e4) {
  return t5(e4) && "style" in e4;
}
function u5(e4) {
  return n5(e4) && e4.nodeName === "IFRAME";
}
function l5(e4) {
  return n5(e4) && e4.nodeName === "INPUT";
}
function m4(e4) {
  return n5(e4) && e4.nodeName === "LABEL";
}
function a6(e4) {
  return n5(e4) && e4.nodeName === "FIELDSET";
}
function E4(e4) {
  return n5(e4) && e4.nodeName === "LEGEND";
}
function L3(e4) {
  return t5(e4) ? e4.matches('a[href],audio[controls],button,details,embed,iframe,img[usemap],input:not([type="hidden"]),label,select,textarea,video[controls]') : false;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
function s6(l6) {
  let e4 = l6.parentElement, t6 = null;
  for (;e4 && !a6(e4); )
    E4(e4) && (t6 = e4), e4 = e4.parentElement;
  let i5 = (e4 == null ? undefined : e4.getAttribute("disabled")) === "";
  return i5 && r7(t6) ? false : i5;
}
function r7(l6) {
  if (!l6)
    return false;
  let e4 = l6.previousElementSibling;
  for (;e4 !== null; ) {
    if (E4(e4))
      return false;
    e4 = e4.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/components/description/description.js
import m5, { createContext as D2, useContext as d4, useMemo as u7, useState as T2 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
import { useEffect as l6, useRef as i5 } from "react";
var u6 = Symbol();
function T(t6, n6 = true) {
  return Object.assign(t6, { [u6]: n6 });
}
function y(...t6) {
  let n6 = i5(t6);
  l6(() => {
    n6.current = t6;
  }, [t6]);
  let c4 = o4((e4) => {
    for (let o8 of n6.current)
      o8 != null && (typeof o8 == "function" ? o8(e4) : o8.current = e4);
  });
  return t6.every((e4) => e4 == null || (e4 == null ? undefined : e4[u6])) ? undefined : c4;
}

// node_modules/@headlessui/react/dist/components/description/description.js
"use client";
var a7 = D2(null);
a7.displayName = "DescriptionContext";
function f7() {
  let r8 = d4(a7);
  if (r8 === null) {
    let e4 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(e4, f7), e4;
  }
  return r8;
}
function w3() {
  var r8, e4;
  return (e4 = (r8 = d4(a7)) == null ? undefined : r8.value) != null ? e4 : undefined;
}
function H3() {
  let [r8, e4] = T2([]);
  return [r8.length > 0 ? r8.join(" ") : undefined, u7(() => function(t6) {
    let i6 = o4((n6) => (e4((o8) => [...o8, n6]), () => e4((o8) => {
      let s7 = o8.slice(), p3 = s7.indexOf(n6);
      return p3 !== -1 && s7.splice(p3, 1), s7;
    }))), l7 = u7(() => ({ register: i6, slot: t6.slot, name: t6.name, props: t6.props, value: t6.value }), [i6, t6.slot, t6.name, t6.props, t6.value]);
    return m5.createElement(a7.Provider, { value: l7 }, t6.children);
  }, [e4])];
}
var I2 = "p";
function C3(r8, e4) {
  let c4 = r4(), t6 = a3(), { id: i6 = `headlessui-description-${c4}`, ...l7 } = r8, n6 = f7(), o8 = y(e4);
  n(() => n6.register(i6), [i6, n6.register]);
  let s7 = n2({ ...n6.slot, disabled: t6 || false }), p3 = { ref: o8, ...n6.props, id: i6 };
  return K()({ ourProps: p3, theirProps: l7, slot: s7, defaultTag: I2, name: n6.name || "Description" });
}
var _ = Y(C3);
var M2 = Object.assign(_, {});

// node_modules/@headlessui/react/dist/components/keyboard.js
var o8 = ((r8) => (r8.Space = " ", r8.Enter = "Enter", r8.Escape = "Escape", r8.Backspace = "Backspace", r8.Delete = "Delete", r8.ArrowLeft = "ArrowLeft", r8.ArrowUp = "ArrowUp", r8.ArrowRight = "ArrowRight", r8.ArrowDown = "ArrowDown", r8.Home = "Home", r8.End = "End", r8.PageUp = "PageUp", r8.PageDown = "PageDown", r8.Tab = "Tab", r8))(o8 || {});

// node_modules/@headlessui/react/dist/components/label/label.js
import R2, { createContext as D3, useContext as h2, useMemo as v3, useState as k2 } from "react";
"use client";
var L4 = D3(null);
L4.displayName = "LabelContext";
function C4() {
  let n6 = h2(L4);
  if (n6 === null) {
    let l7 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(l7, C4), l7;
  }
  return n6;
}
function N(n6) {
  var a8, e4, o9;
  let l7 = (e4 = (a8 = h2(L4)) == null ? undefined : a8.value) != null ? e4 : undefined;
  return ((o9 = n6 == null ? undefined : n6.length) != null ? o9 : 0) > 0 ? [l7, ...n6].filter(Boolean).join(" ") : l7;
}
function V2({ inherit: n6 = false } = {}) {
  let l7 = N(), [a8, e4] = k2([]), o9 = n6 ? [l7, ...a8].filter(Boolean) : a8;
  return [o9.length > 0 ? o9.join(" ") : undefined, v3(() => function(t6) {
    let p3 = o4((i6) => (e4((u8) => [...u8, i6]), () => e4((u8) => {
      let d5 = u8.slice(), f8 = d5.indexOf(i6);
      return f8 !== -1 && d5.splice(f8, 1), d5;
    }))), b3 = v3(() => ({ register: p3, slot: t6.slot, name: t6.name, props: t6.props, value: t6.value }), [p3, t6.slot, t6.name, t6.props, t6.value]);
    return R2.createElement(L4.Provider, { value: b3 }, t6.children);
  }, [e4])];
}
var G = "label";
function U2(n6, l7) {
  var y2;
  let a8 = r4(), e4 = C4(), o9 = u4(), T3 = a3(), { id: t6 = `headlessui-label-${a8}`, htmlFor: p3 = o9 != null ? o9 : (y2 = e4.props) == null ? undefined : y2.htmlFor, passive: b3 = false, ...i6 } = n6, u8 = y(l7);
  n(() => e4.register(t6), [t6, e4.register]);
  let d5 = o4((s7) => {
    let g3 = s7.currentTarget;
    if (!(s7.target !== s7.currentTarget && L3(s7.target)) && (m4(g3) && s7.preventDefault(), e4.props && ("onClick" in e4.props) && typeof e4.props.onClick == "function" && e4.props.onClick(s7), m4(g3))) {
      let r8 = document.getElementById(g3.htmlFor);
      if (r8) {
        let E5 = r8.getAttribute("disabled");
        if (E5 === "true" || E5 === "")
          return;
        let x2 = r8.getAttribute("aria-disabled");
        if (x2 === "true" || x2 === "")
          return;
        (l5(r8) && (r8.type === "file" || r8.type === "radio" || r8.type === "checkbox") || r8.role === "radio" || r8.role === "checkbox" || r8.role === "switch") && r8.click(), r8.focus({ preventScroll: true });
      }
    }
  }), f8 = n2({ ...e4.slot, disabled: T3 || false }), c4 = { ref: u8, ...e4.props, id: t6, htmlFor: p3, onClick: d5 };
  return b3 && (("onClick" in c4) && (delete c4.htmlFor, delete c4.onClick), ("onClick" in i6) && delete i6.onClick), K()({ ourProps: c4, theirProps: i6, slot: f8, defaultTag: p3 ? G : "div", name: e4.name || "Label" });
}
var j3 = Y(U2);
var Z = Object.assign(j3, {});

// node_modules/@headlessui/react/dist/components/checkbox/checkbox.js
"use client";
var de = "span";
function pe(u8, b3) {
  let f8 = r4(), y2 = u4(), T3 = a3(), { id: h3 = y2 || `headlessui-checkbox-${f8}`, disabled: o9 = T3 || false, autoFocus: i6 = false, checked: C5, defaultChecked: k3, onChange: x2, name: d5, value: g3, form: E5, indeterminate: l7 = false, tabIndex: v4 = 0, ...P3 } = u8, r8 = l3(k3), [a8, t6] = b2(C5, x2, r8 != null ? r8 : false), D4 = N(), R3 = w3(), A2 = p(), [F2, p3] = J(false), c4 = o4(() => {
    p3(true), t6 == null || t6(!a8), A2.nextFrame(() => {
      p3(false);
    });
  }), K2 = o4((e4) => {
    if (s6(e4.currentTarget))
      return e4.preventDefault();
    e4.preventDefault(), c4();
  }), _2 = o4((e4) => {
    e4.key === o8.Space ? (e4.preventDefault(), c4()) : e4.key === o8.Enter && g(e4.currentTarget);
  }), H4 = o4((e4) => e4.preventDefault()), { isFocusVisible: B, focusProps: I3 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: i6 }), { isHovered: L5, hoverProps: M3 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: o9 }), { pressed: U3, pressProps: O2 } = w({ disabled: o9 }), S2 = V({ ref: b3, id: h3, role: "checkbox", "aria-checked": l7 ? "mixed" : a8 ? "true" : "false", "aria-labelledby": D4, "aria-describedby": R3, "aria-disabled": o9 ? true : undefined, indeterminate: l7 ? "true" : undefined, tabIndex: o9 ? undefined : v4, onKeyUp: o9 ? undefined : _2, onKeyPress: o9 ? undefined : H4, onClick: o9 ? undefined : K2 }, I3, M3, O2), X = n2({ checked: a8, disabled: o9, hover: L5, focus: B, active: U3, indeterminate: l7, changing: F2, autofocus: i6 }), G2 = w4(() => {
    if (r8 !== undefined)
      return t6 == null ? undefined : t6(r8);
  }, [t6, r8]), W2 = K();
  return s7.createElement(s7.Fragment, null, d5 != null && s7.createElement(j2, { disabled: o9, data: { [d5]: g3 || "on" }, overrides: { type: "checkbox", checked: a8 }, form: E5, onReset: G2 }), W2({ ourProps: S2, theirProps: P3, slot: X, defaultTag: de, name: "Checkbox" }));
}
var Ke = Y(pe);
// node_modules/@headlessui/react/dist/components/close-button/close-button.js
import n7 from "react";

// node_modules/@headlessui/react/dist/internal/close-provider.js
import r8, { createContext as n6, useContext as i6 } from "react";
"use client";
var e4 = n6(() => {});
function u8() {
  return i6(e4);
}
function C5({ value: t6, children: o9 }) {
  return r8.createElement(e4.Provider, { value: t6 }, o9);
}

// node_modules/@headlessui/react/dist/components/close-button/close-button.js
"use client";
function l7(t6, e5) {
  let o9 = u8();
  return n7.createElement(L2, { ref: e5, ...V({ onClick: o9 }, t6) });
}
var y2 = Y(l7);
// node_modules/@tanstack/react-virtual/dist/esm/index.js
import * as React from "react";
import { flushSync } from "react-dom";

// node_modules/@tanstack/virtual-core/dist/esm/utils.js
function memo(getDeps, fn, opts) {
  let deps = opts.initialDeps ?? [];
  let result;
  let isInitial = true;
  function memoizedFunction() {
    var _a, _b, _c;
    let depTime;
    if (opts.key && ((_a = opts.debug) == null ? undefined : _a.call(opts)))
      depTime = Date.now();
    const newDeps = getDeps();
    const depsChanged = newDeps.length !== deps.length || newDeps.some((dep, index) => deps[index] !== dep);
    if (!depsChanged) {
      return result;
    }
    deps = newDeps;
    let resultTime;
    if (opts.key && ((_b = opts.debug) == null ? undefined : _b.call(opts)))
      resultTime = Date.now();
    result = fn(...newDeps);
    if (opts.key && ((_c = opts.debug) == null ? undefined : _c.call(opts))) {
      const depEndTime = Math.round((Date.now() - depTime) * 100) / 100;
      const resultEndTime = Math.round((Date.now() - resultTime) * 100) / 100;
      const resultFpsPercentage = resultEndTime / 16;
      const pad = (str, num) => {
        str = String(str);
        while (str.length < num) {
          str = " " + str;
        }
        return str;
      };
      console.info(`%c⏱ ${pad(resultEndTime, 5)} /${pad(depEndTime, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * resultFpsPercentage, 120))}deg 100% 31%);`, opts == null ? undefined : opts.key);
    }
    if ((opts == null ? undefined : opts.onChange) && !(isInitial && opts.skipInitialOnChange)) {
      opts.onChange(result);
    }
    isInitial = false;
    return result;
  }
  memoizedFunction.updateDeps = (newDeps) => {
    deps = newDeps;
  };
  return memoizedFunction;
}
function notUndefined(value, msg) {
  if (value === undefined) {
    throw new Error(`Unexpected undefined${msg ? `: ${msg}` : ""}`);
  } else {
    return value;
  }
}
var approxEqual = (a8, b3) => Math.abs(a8 - b3) < 1.01;
var debounce = (targetWindow, fn, ms) => {
  let timeoutId;
  return function(...args) {
    targetWindow.clearTimeout(timeoutId);
    timeoutId = targetWindow.setTimeout(() => fn.apply(this, args), ms);
  };
};

// node_modules/@tanstack/virtual-core/dist/esm/index.js
var getRect = (element) => {
  const { offsetWidth, offsetHeight } = element;
  return { width: offsetWidth, height: offsetHeight };
};
var defaultKeyExtractor = (index) => index;
var defaultRangeExtractor = (range) => {
  const start = Math.max(range.startIndex - range.overscan, 0);
  const end = Math.min(range.endIndex + range.overscan, range.count - 1);
  const arr = [];
  for (let i7 = start;i7 <= end; i7++) {
    arr.push(i7);
  }
  return arr;
};
var observeElementRect = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  const handler = (rect) => {
    const { width, height } = rect;
    cb({ width: Math.round(width), height: Math.round(height) });
  };
  handler(getRect(element));
  if (!targetWindow.ResizeObserver) {
    return () => {};
  }
  const observer = new targetWindow.ResizeObserver((entries) => {
    const run = () => {
      const entry = entries[0];
      if (entry == null ? undefined : entry.borderBoxSize) {
        const box = entry.borderBoxSize[0];
        if (box) {
          handler({ width: box.inlineSize, height: box.blockSize });
          return;
        }
      }
      handler(getRect(element));
    };
    instance.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
  });
  observer.observe(element, { box: "border-box" });
  return () => {
    observer.unobserve(element);
  };
};
var addEventListenerOptions = {
  passive: true
};
var supportsScrollend = typeof window == "undefined" ? true : ("onscrollend" in window);
var observeElementOffset = (instance, cb) => {
  const element = instance.scrollElement;
  if (!element) {
    return;
  }
  const targetWindow = instance.targetWindow;
  if (!targetWindow) {
    return;
  }
  let offset = 0;
  const fallback = instance.options.useScrollendEvent && supportsScrollend ? () => {
    return;
  } : debounce(targetWindow, () => {
    cb(offset, false);
  }, instance.options.isScrollingResetDelay);
  const createHandler = (isScrolling) => () => {
    const { horizontal, isRtl } = instance.options;
    offset = horizontal ? element["scrollLeft"] * (isRtl && -1 || 1) : element["scrollTop"];
    fallback();
    cb(offset, isScrolling);
  };
  const handler = createHandler(true);
  const endHandler = createHandler(false);
  element.addEventListener("scroll", handler, addEventListenerOptions);
  const registerScrollendEvent = instance.options.useScrollendEvent && supportsScrollend;
  if (registerScrollendEvent) {
    element.addEventListener("scrollend", endHandler, addEventListenerOptions);
  }
  return () => {
    element.removeEventListener("scroll", handler);
    if (registerScrollendEvent) {
      element.removeEventListener("scrollend", endHandler);
    }
  };
};
var measureElement = (element, entry, instance) => {
  if (entry == null ? undefined : entry.borderBoxSize) {
    const box = entry.borderBoxSize[0];
    if (box) {
      const size = Math.round(box[instance.options.horizontal ? "inlineSize" : "blockSize"]);
      return size;
    }
  }
  return element[instance.options.horizontal ? "offsetWidth" : "offsetHeight"];
};
var elementScroll = (offset, {
  adjustments = 0,
  behavior
}, instance) => {
  var _a, _b;
  const toOffset = offset + adjustments;
  (_b = (_a = instance.scrollElement) == null ? undefined : _a.scrollTo) == null || _b.call(_a, {
    [instance.options.horizontal ? "left" : "top"]: toOffset,
    behavior
  });
};

class Virtualizer {
  constructor(opts) {
    this.unsubs = [];
    this.scrollElement = null;
    this.targetWindow = null;
    this.isScrolling = false;
    this.scrollState = null;
    this.measurementsCache = [];
    this.itemSizeCache = /* @__PURE__ */ new Map;
    this.laneAssignments = /* @__PURE__ */ new Map;
    this.pendingMeasuredCacheIndexes = [];
    this.prevLanes = undefined;
    this.lanesChangedFlag = false;
    this.lanesSettling = false;
    this.scrollRect = null;
    this.scrollOffset = null;
    this.scrollDirection = null;
    this.scrollAdjustments = 0;
    this.elementsCache = /* @__PURE__ */ new Map;
    this.now = () => {
      var _a, _b, _c;
      return ((_c = (_b = (_a = this.targetWindow) == null ? undefined : _a.performance) == null ? undefined : _b.now) == null ? undefined : _c.call(_b)) ?? Date.now();
    };
    this.observer = /* @__PURE__ */ (() => {
      let _ro = null;
      const get = () => {
        if (_ro) {
          return _ro;
        }
        if (!this.targetWindow || !this.targetWindow.ResizeObserver) {
          return null;
        }
        return _ro = new this.targetWindow.ResizeObserver((entries) => {
          entries.forEach((entry) => {
            const run = () => {
              const node = entry.target;
              const index = this.indexFromElement(node);
              if (!node.isConnected) {
                this.observer.unobserve(node);
                return;
              }
              if (this.shouldMeasureDuringScroll(index)) {
                this.resizeItem(index, this.options.measureElement(node, entry, this));
              }
            };
            this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(run) : run();
          });
        });
      };
      return {
        disconnect: () => {
          var _a;
          (_a = get()) == null || _a.disconnect();
          _ro = null;
        },
        observe: (target) => {
          var _a;
          return (_a = get()) == null ? undefined : _a.observe(target, { box: "border-box" });
        },
        unobserve: (target) => {
          var _a;
          return (_a = get()) == null ? undefined : _a.unobserve(target);
        }
      };
    })();
    this.range = null;
    this.setOptions = (opts2) => {
      Object.entries(opts2).forEach(([key, value]) => {
        if (typeof value === "undefined")
          delete opts2[key];
      });
      this.options = {
        debug: false,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: false,
        getItemKey: defaultKeyExtractor,
        rangeExtractor: defaultRangeExtractor,
        onChange: () => {},
        measureElement,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: true,
        isRtl: false,
        useScrollendEvent: false,
        useAnimationFrameWithResizeObserver: false,
        laneAssignmentMode: "estimate",
        ...opts2
      };
    };
    this.notify = (sync) => {
      var _a, _b;
      (_b = (_a = this.options).onChange) == null || _b.call(_a, this, sync);
    };
    this.maybeNotify = memo(() => {
      this.calculateRange();
      return [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ];
    }, (isScrolling) => {
      this.notify(isScrolling);
    }, {
      key: "maybeNotify",
      debug: () => this.options.debug,
      initialDeps: [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]
    });
    this.cleanup = () => {
      this.unsubs.filter(Boolean).forEach((d5) => d5());
      this.unsubs = [];
      this.observer.disconnect();
      if (this.rafId != null && this.targetWindow) {
        this.targetWindow.cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      this.scrollState = null;
      this.scrollElement = null;
      this.targetWindow = null;
    };
    this._didMount = () => {
      return () => {
        this.cleanup();
      };
    };
    this._willUpdate = () => {
      var _a;
      const scrollElement = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== scrollElement) {
        this.cleanup();
        if (!scrollElement) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = scrollElement;
        if (this.scrollElement && "ownerDocument" in this.scrollElement) {
          this.targetWindow = this.scrollElement.ownerDocument.defaultView;
        } else {
          this.targetWindow = ((_a = this.scrollElement) == null ? undefined : _a.window) ?? null;
        }
        this.elementsCache.forEach((cached) => {
          this.observer.observe(cached);
        });
        this.unsubs.push(this.options.observeElementRect(this, (rect) => {
          this.scrollRect = rect;
          this.maybeNotify();
        }));
        this.unsubs.push(this.options.observeElementOffset(this, (offset, isScrolling) => {
          this.scrollAdjustments = 0;
          this.scrollDirection = isScrolling ? this.getScrollOffset() < offset ? "forward" : "backward" : null;
          this.scrollOffset = offset;
          this.isScrolling = isScrolling;
          if (this.scrollState) {
            this.scheduleScrollReconcile();
          }
          this.maybeNotify();
        }));
        this._scrollToOffset(this.getScrollOffset(), {
          adjustments: undefined,
          behavior: undefined
        });
      }
    };
    this.rafId = null;
    this.getSize = () => {
      if (!this.options.enabled) {
        this.scrollRect = null;
        return 0;
      }
      this.scrollRect = this.scrollRect ?? this.options.initialRect;
      return this.scrollRect[this.options.horizontal ? "width" : "height"];
    };
    this.getScrollOffset = () => {
      if (!this.options.enabled) {
        this.scrollOffset = null;
        return 0;
      }
      this.scrollOffset = this.scrollOffset ?? (typeof this.options.initialOffset === "function" ? this.options.initialOffset() : this.options.initialOffset);
      return this.scrollOffset;
    };
    this.getFurthestMeasurement = (measurements, index) => {
      const furthestMeasurementsFound = /* @__PURE__ */ new Map;
      const furthestMeasurements = /* @__PURE__ */ new Map;
      for (let m6 = index - 1;m6 >= 0; m6--) {
        const measurement = measurements[m6];
        if (furthestMeasurementsFound.has(measurement.lane)) {
          continue;
        }
        const previousFurthestMeasurement = furthestMeasurements.get(measurement.lane);
        if (previousFurthestMeasurement == null || measurement.end > previousFurthestMeasurement.end) {
          furthestMeasurements.set(measurement.lane, measurement);
        } else if (measurement.end < previousFurthestMeasurement.end) {
          furthestMeasurementsFound.set(measurement.lane, true);
        }
        if (furthestMeasurementsFound.size === this.options.lanes) {
          break;
        }
      }
      return furthestMeasurements.size === this.options.lanes ? Array.from(furthestMeasurements.values()).sort((a8, b3) => {
        if (a8.end === b3.end) {
          return a8.index - b3.index;
        }
        return a8.end - b3.end;
      })[0] : undefined;
    };
    this.getMeasurementOptions = memo(() => [
      this.options.count,
      this.options.paddingStart,
      this.options.scrollMargin,
      this.options.getItemKey,
      this.options.enabled,
      this.options.lanes,
      this.options.laneAssignmentMode
    ], (count, paddingStart, scrollMargin, getItemKey, enabled, lanes, laneAssignmentMode) => {
      const lanesChanged = this.prevLanes !== undefined && this.prevLanes !== lanes;
      if (lanesChanged) {
        this.lanesChangedFlag = true;
      }
      this.prevLanes = lanes;
      this.pendingMeasuredCacheIndexes = [];
      return {
        count,
        paddingStart,
        scrollMargin,
        getItemKey,
        enabled,
        lanes,
        laneAssignmentMode
      };
    }, {
      key: false
    });
    this.getMeasurements = memo(() => [this.getMeasurementOptions(), this.itemSizeCache], ({
      count,
      paddingStart,
      scrollMargin,
      getItemKey,
      enabled,
      lanes,
      laneAssignmentMode
    }, itemSizeCache) => {
      if (!enabled) {
        this.measurementsCache = [];
        this.itemSizeCache.clear();
        this.laneAssignments.clear();
        return [];
      }
      if (this.laneAssignments.size > count) {
        for (const index of this.laneAssignments.keys()) {
          if (index >= count) {
            this.laneAssignments.delete(index);
          }
        }
      }
      if (this.lanesChangedFlag) {
        this.lanesChangedFlag = false;
        this.lanesSettling = true;
        this.measurementsCache = [];
        this.itemSizeCache.clear();
        this.laneAssignments.clear();
        this.pendingMeasuredCacheIndexes = [];
      }
      if (this.measurementsCache.length === 0 && !this.lanesSettling) {
        this.measurementsCache = this.options.initialMeasurementsCache;
        this.measurementsCache.forEach((item) => {
          this.itemSizeCache.set(item.key, item.size);
        });
      }
      const min = this.lanesSettling ? 0 : this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
      this.pendingMeasuredCacheIndexes = [];
      if (this.lanesSettling && this.measurementsCache.length === count) {
        this.lanesSettling = false;
      }
      const measurements = this.measurementsCache.slice(0, min);
      const laneLastIndex = new Array(lanes).fill(undefined);
      for (let m6 = 0;m6 < min; m6++) {
        const item = measurements[m6];
        if (item) {
          laneLastIndex[item.lane] = m6;
        }
      }
      for (let i7 = min;i7 < count; i7++) {
        const key = getItemKey(i7);
        const cachedLane = this.laneAssignments.get(i7);
        let lane;
        let start;
        const shouldCacheLane = laneAssignmentMode === "estimate" || itemSizeCache.has(key);
        if (cachedLane !== undefined && this.options.lanes > 1) {
          lane = cachedLane;
          const prevIndex = laneLastIndex[lane];
          const prevInLane = prevIndex !== undefined ? measurements[prevIndex] : undefined;
          start = prevInLane ? prevInLane.end + this.options.gap : paddingStart + scrollMargin;
        } else {
          const furthestMeasurement = this.options.lanes === 1 ? measurements[i7 - 1] : this.getFurthestMeasurement(measurements, i7);
          start = furthestMeasurement ? furthestMeasurement.end + this.options.gap : paddingStart + scrollMargin;
          lane = furthestMeasurement ? furthestMeasurement.lane : i7 % this.options.lanes;
          if (this.options.lanes > 1 && shouldCacheLane) {
            this.laneAssignments.set(i7, lane);
          }
        }
        const measuredSize = itemSizeCache.get(key);
        const size = typeof measuredSize === "number" ? measuredSize : this.options.estimateSize(i7);
        const end = start + size;
        measurements[i7] = {
          index: i7,
          start,
          size,
          end,
          key,
          lane
        };
        laneLastIndex[lane] = i7;
      }
      this.measurementsCache = measurements;
      return measurements;
    }, {
      key: "getMeasurements",
      debug: () => this.options.debug
    });
    this.calculateRange = memo(() => [
      this.getMeasurements(),
      this.getSize(),
      this.getScrollOffset(),
      this.options.lanes
    ], (measurements, outerSize, scrollOffset, lanes) => {
      return this.range = measurements.length > 0 && outerSize > 0 ? calculateRange({
        measurements,
        outerSize,
        scrollOffset,
        lanes
      }) : null;
    }, {
      key: "calculateRange",
      debug: () => this.options.debug
    });
    this.getVirtualIndexes = memo(() => {
      let startIndex = null;
      let endIndex = null;
      const range = this.calculateRange();
      if (range) {
        startIndex = range.startIndex;
        endIndex = range.endIndex;
      }
      this.maybeNotify.updateDeps([this.isScrolling, startIndex, endIndex]);
      return [
        this.options.rangeExtractor,
        this.options.overscan,
        this.options.count,
        startIndex,
        endIndex
      ];
    }, (rangeExtractor, overscan, count, startIndex, endIndex) => {
      return startIndex === null || endIndex === null ? [] : rangeExtractor({
        startIndex,
        endIndex,
        overscan,
        count
      });
    }, {
      key: "getVirtualIndexes",
      debug: () => this.options.debug
    });
    this.indexFromElement = (node) => {
      const attributeName = this.options.indexAttribute;
      const indexStr = node.getAttribute(attributeName);
      if (!indexStr) {
        console.warn(`Missing attribute name '${attributeName}={index}' on measured element.`);
        return -1;
      }
      return parseInt(indexStr, 10);
    };
    this.shouldMeasureDuringScroll = (index) => {
      var _a;
      if (!this.scrollState || this.scrollState.behavior !== "smooth") {
        return true;
      }
      const scrollIndex = this.scrollState.index ?? ((_a = this.getVirtualItemForOffset(this.scrollState.lastTargetOffset)) == null ? undefined : _a.index);
      if (scrollIndex !== undefined && this.range) {
        const bufferSize = Math.max(this.options.overscan, Math.ceil((this.range.endIndex - this.range.startIndex) / 2));
        const minIndex = Math.max(0, scrollIndex - bufferSize);
        const maxIndex = Math.min(this.options.count - 1, scrollIndex + bufferSize);
        return index >= minIndex && index <= maxIndex;
      }
      return true;
    };
    this.measureElement = (node) => {
      if (!node) {
        this.elementsCache.forEach((cached, key2) => {
          if (!cached.isConnected) {
            this.observer.unobserve(cached);
            this.elementsCache.delete(key2);
          }
        });
        return;
      }
      const index = this.indexFromElement(node);
      const key = this.options.getItemKey(index);
      const prevNode = this.elementsCache.get(key);
      if (prevNode !== node) {
        if (prevNode) {
          this.observer.unobserve(prevNode);
        }
        this.observer.observe(node);
        this.elementsCache.set(key, node);
      }
      if ((!this.isScrolling || this.scrollState) && this.shouldMeasureDuringScroll(index)) {
        this.resizeItem(index, this.options.measureElement(node, undefined, this));
      }
    };
    this.resizeItem = (index, size) => {
      var _a;
      const item = this.measurementsCache[index];
      if (!item)
        return;
      const itemSize = this.itemSizeCache.get(item.key) ?? item.size;
      const delta = size - itemSize;
      if (delta !== 0) {
        if (((_a = this.scrollState) == null ? undefined : _a.behavior) !== "smooth" && (this.shouldAdjustScrollPositionOnItemSizeChange !== undefined ? this.shouldAdjustScrollPositionOnItemSizeChange(item, delta, this) : item.start < this.getScrollOffset() + this.scrollAdjustments)) {
          if (this.options.debug) {
            console.info("correction", delta);
          }
          this._scrollToOffset(this.getScrollOffset(), {
            adjustments: this.scrollAdjustments += delta,
            behavior: undefined
          });
        }
        this.pendingMeasuredCacheIndexes.push(item.index);
        this.itemSizeCache = new Map(this.itemSizeCache.set(item.key, size));
        this.notify(false);
      }
    };
    this.getVirtualItems = memo(() => [this.getVirtualIndexes(), this.getMeasurements()], (indexes, measurements) => {
      const virtualItems = [];
      for (let k3 = 0, len = indexes.length;k3 < len; k3++) {
        const i7 = indexes[k3];
        const measurement = measurements[i7];
        virtualItems.push(measurement);
      }
      return virtualItems;
    }, {
      key: "getVirtualItems",
      debug: () => this.options.debug
    });
    this.getVirtualItemForOffset = (offset) => {
      const measurements = this.getMeasurements();
      if (measurements.length === 0) {
        return;
      }
      return notUndefined(measurements[findNearestBinarySearch(0, measurements.length - 1, (index) => notUndefined(measurements[index]).start, offset)]);
    };
    this.getMaxScrollOffset = () => {
      if (!this.scrollElement)
        return 0;
      if ("scrollHeight" in this.scrollElement) {
        return this.options.horizontal ? this.scrollElement.scrollWidth - this.scrollElement.clientWidth : this.scrollElement.scrollHeight - this.scrollElement.clientHeight;
      } else {
        const doc = this.scrollElement.document.documentElement;
        return this.options.horizontal ? doc.scrollWidth - this.scrollElement.innerWidth : doc.scrollHeight - this.scrollElement.innerHeight;
      }
    };
    this.getOffsetForAlignment = (toOffset, align, itemSize = 0) => {
      if (!this.scrollElement)
        return 0;
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      if (align === "auto") {
        align = toOffset >= scrollOffset + size ? "end" : "start";
      }
      if (align === "center") {
        toOffset += (itemSize - size) / 2;
      } else if (align === "end") {
        toOffset -= size;
      }
      const maxOffset = this.getMaxScrollOffset();
      return Math.max(Math.min(maxOffset, toOffset), 0);
    };
    this.getOffsetForIndex = (index, align = "auto") => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const size = this.getSize();
      const scrollOffset = this.getScrollOffset();
      const item = this.measurementsCache[index];
      if (!item)
        return;
      if (align === "auto") {
        if (item.end >= scrollOffset + size - this.options.scrollPaddingEnd) {
          align = "end";
        } else if (item.start <= scrollOffset + this.options.scrollPaddingStart) {
          align = "start";
        } else {
          return [scrollOffset, align];
        }
      }
      if (align === "end" && index === this.options.count - 1) {
        return [this.getMaxScrollOffset(), align];
      }
      const toOffset = align === "end" ? item.end + this.options.scrollPaddingEnd : item.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(toOffset, align, item.size),
        align
      ];
    };
    this.scrollToOffset = (toOffset, { align = "start", behavior = "auto" } = {}) => {
      const offset = this.getOffsetForAlignment(toOffset, align);
      const now = this.now();
      this.scrollState = {
        index: null,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: undefined, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollToIndex = (index, {
      align: initialAlign = "auto",
      behavior = "auto"
    } = {}) => {
      index = Math.max(0, Math.min(index, this.options.count - 1));
      const offsetInfo = this.getOffsetForIndex(index, initialAlign);
      if (!offsetInfo) {
        return;
      }
      const [offset, align] = offsetInfo;
      const now = this.now();
      this.scrollState = {
        index,
        align,
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: undefined, behavior });
      this.scheduleScrollReconcile();
    };
    this.scrollBy = (delta, { behavior = "auto" } = {}) => {
      const offset = this.getScrollOffset() + delta;
      const now = this.now();
      this.scrollState = {
        index: null,
        align: "start",
        behavior,
        startedAt: now,
        lastTargetOffset: offset,
        stableFrames: 0
      };
      this._scrollToOffset(offset, { adjustments: undefined, behavior });
      this.scheduleScrollReconcile();
    };
    this.getTotalSize = () => {
      var _a;
      const measurements = this.getMeasurements();
      let end;
      if (measurements.length === 0) {
        end = this.options.paddingStart;
      } else if (this.options.lanes === 1) {
        end = ((_a = measurements[measurements.length - 1]) == null ? undefined : _a.end) ?? 0;
      } else {
        const endByLane = Array(this.options.lanes).fill(null);
        let endIndex = measurements.length - 1;
        while (endIndex >= 0 && endByLane.some((val) => val === null)) {
          const item = measurements[endIndex];
          if (endByLane[item.lane] === null) {
            endByLane[item.lane] = item.end;
          }
          endIndex--;
        }
        end = Math.max(...endByLane.filter((val) => val !== null));
      }
      return Math.max(end - this.options.scrollMargin + this.options.paddingEnd, 0);
    };
    this._scrollToOffset = (offset, {
      adjustments,
      behavior
    }) => {
      this.options.scrollToFn(offset, { behavior, adjustments }, this);
    };
    this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map;
      this.laneAssignments = /* @__PURE__ */ new Map;
      this.notify(false);
    };
    this.setOptions(opts);
  }
  scheduleScrollReconcile() {
    if (!this.targetWindow) {
      this.scrollState = null;
      return;
    }
    if (this.rafId != null)
      return;
    this.rafId = this.targetWindow.requestAnimationFrame(() => {
      this.rafId = null;
      this.reconcileScroll();
    });
  }
  reconcileScroll() {
    if (!this.scrollState)
      return;
    const el = this.scrollElement;
    if (!el)
      return;
    const MAX_RECONCILE_MS = 5000;
    if (this.now() - this.scrollState.startedAt > MAX_RECONCILE_MS) {
      this.scrollState = null;
      return;
    }
    const offsetInfo = this.scrollState.index != null ? this.getOffsetForIndex(this.scrollState.index, this.scrollState.align) : undefined;
    const targetOffset = offsetInfo ? offsetInfo[0] : this.scrollState.lastTargetOffset;
    const STABLE_FRAMES = 1;
    const targetChanged = targetOffset !== this.scrollState.lastTargetOffset;
    if (!targetChanged && approxEqual(targetOffset, this.getScrollOffset())) {
      this.scrollState.stableFrames++;
      if (this.scrollState.stableFrames >= STABLE_FRAMES) {
        this.scrollState = null;
        return;
      }
    } else {
      this.scrollState.stableFrames = 0;
      if (targetChanged) {
        this.scrollState.lastTargetOffset = targetOffset;
        this.scrollState.behavior = "auto";
        this._scrollToOffset(targetOffset, {
          adjustments: undefined,
          behavior: "auto"
        });
      }
    }
    this.scheduleScrollReconcile();
  }
}
var findNearestBinarySearch = (low, high, getCurrentValue, value) => {
  while (low <= high) {
    const middle = (low + high) / 2 | 0;
    const currentValue = getCurrentValue(middle);
    if (currentValue < value) {
      low = middle + 1;
    } else if (currentValue > value) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  if (low > 0) {
    return low - 1;
  } else {
    return 0;
  }
};
function calculateRange({
  measurements,
  outerSize,
  scrollOffset,
  lanes
}) {
  const lastIndex = measurements.length - 1;
  const getOffset = (index) => measurements[index].start;
  if (measurements.length <= lanes) {
    return {
      startIndex: 0,
      endIndex: lastIndex
    };
  }
  let startIndex = findNearestBinarySearch(0, lastIndex, getOffset, scrollOffset);
  let endIndex = startIndex;
  if (lanes === 1) {
    while (endIndex < lastIndex && measurements[endIndex].end < scrollOffset + outerSize) {
      endIndex++;
    }
  } else if (lanes > 1) {
    const endPerLane = Array(lanes).fill(0);
    while (endIndex < lastIndex && endPerLane.some((pos) => pos < scrollOffset + outerSize)) {
      const item = measurements[endIndex];
      endPerLane[item.lane] = item.end;
      endIndex++;
    }
    const startPerLane = Array(lanes).fill(scrollOffset + outerSize);
    while (startIndex >= 0 && startPerLane.some((pos) => pos >= scrollOffset)) {
      const item = measurements[startIndex];
      startPerLane[item.lane] = item.start;
      startIndex--;
    }
    startIndex = Math.max(0, startIndex - startIndex % lanes);
    endIndex = Math.min(lastIndex, endIndex + (lanes - 1 - endIndex % lanes));
  }
  return { startIndex, endIndex };
}

// node_modules/@tanstack/react-virtual/dist/esm/index.js
var useIsomorphicLayoutEffect = typeof document !== "undefined" ? React.useLayoutEffect : React.useEffect;
function useVirtualizerBase({
  useFlushSync = true,
  ...options
}) {
  const rerender = React.useReducer(() => ({}), {})[1];
  const resolvedOptions = {
    ...options,
    onChange: (instance2, sync) => {
      var _a;
      if (useFlushSync && sync) {
        flushSync(rerender);
      } else {
        rerender();
      }
      (_a = options.onChange) == null || _a.call(options, instance2, sync);
    }
  };
  const [instance] = React.useState(() => new Virtualizer(resolvedOptions));
  instance.setOptions(resolvedOptions);
  useIsomorphicLayoutEffect(() => {
    return instance._didMount();
  }, []);
  useIsomorphicLayoutEffect(() => {
    return instance._willUpdate();
  });
  return instance;
}
function useVirtualizer(options) {
  return useVirtualizerBase({
    observeElementRect,
    observeElementOffset,
    scrollToFn: elementScroll,
    ...options
  });
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
import L6, { Fragment as Ee, createContext as he, useCallback as Q, useContext as Ae2, useMemo as ae2, useRef as me, useState as xe } from "react";
import { flushSync as oe2 } from "react-dom";

// node_modules/@headlessui/react/dist/hooks/use-by-comparator.js
import { useCallback as n8 } from "react";
function l8(e5, r9) {
  return e5 !== null && r9 !== null && typeof e5 == "object" && typeof r9 == "object" && "id" in e5 && "id" in r9 ? e5.id === r9.id : e5 === r9;
}
function u9(e5 = l8) {
  return n8((r9, t6) => {
    if (typeof e5 == "string") {
      let o9 = e5;
      return (r9 == null ? undefined : r9[o9]) === (t6 == null ? undefined : t6[o9]);
    }
    return e5(r9, t6);
  }, [e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-element-size.js
import { useState as l9 } from "react";
function h3(i7) {
  if (i7 === null)
    return { width: 0, height: 0 };
  let { width: t6, height: e5 } = i7.getBoundingClientRect();
  return { width: t6, height: e5 };
}
function w5(i7, t6, e5 = false) {
  let [r9, f8] = l9(() => h3(t6));
  return n(() => {
    if (!t6 || !i7)
      return;
    let n9 = o2();
    return n9.requestAnimationFrame(function s() {
      n9.requestAnimationFrame(s), f8((u10) => {
        let o9 = h3(t6);
        return o9.width === u10.width && o9.height === u10.height ? u10 : o9;
      });
    }), () => {
      n9.dispose();
    };
  }, [t6, i7]), e5 ? { width: `${r9.width}px`, height: `${r9.height}px` } : r9;
}

// node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
import { useRef as l10 } from "react";

// node_modules/@headlessui/react/dist/components/mouse.js
var g3 = ((f8) => (f8[f8.Left = 0] = "Left", f8[f8.Right = 2] = "Right", f8))(g3 || {});

// node_modules/@headlessui/react/dist/hooks/use-handle-toggle.js
function s8(t6) {
  let r9 = l10(null), u10 = o4((e5) => {
    r9.current = e5.pointerType, !s6(e5.currentTarget) && e5.pointerType === "mouse" && e5.button === g3.Left && (e5.preventDefault(), t6(e5));
  }), i7 = o4((e5) => {
    r9.current !== "mouse" && (s6(e5.currentTarget) || t6(e5));
  });
  return { onPointerDown: u10, onClick: i7 };
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
import { useCallback as n10, useId as u11 } from "react";

// node_modules/@headlessui/react/dist/utils/default-map.js
class a8 extends Map {
  constructor(t6) {
    super();
    this.factory = t6;
  }
  get(t6) {
    let e5 = super.get(t6);
    return e5 === undefined && (e5 = this.factory(t6), this.set(t6, e5)), e5;
  }
}

// node_modules/@headlessui/react/dist/machine.js
var h4 = Object.defineProperty;
var v4 = (t6, e5, r9) => (e5 in t6) ? h4(t6, e5, { enumerable: true, configurable: true, writable: true, value: r9 }) : t6[e5] = r9;
var S2 = (t6, e5, r9) => (v4(t6, typeof e5 != "symbol" ? e5 + "" : e5, r9), r9);
var b3 = (t6, e5, r9) => {
  if (!e5.has(t6))
    throw TypeError("Cannot " + r9);
};
var i7 = (t6, e5, r9) => (b3(t6, e5, "read from private field"), r9 ? r9.call(t6) : e5.get(t6));
var c4 = (t6, e5, r9) => {
  if (e5.has(t6))
    throw TypeError("Cannot add the same private member more than once");
  e5 instanceof WeakSet ? e5.add(t6) : e5.set(t6, r9);
};
var u10 = (t6, e5, r9, s9) => (b3(t6, e5, "write to private field"), s9 ? s9.call(t6, r9) : e5.set(t6, r9), r9);
var n9;
var a9;
var o9;

class T3 {
  constructor(e5) {
    c4(this, n9, {});
    c4(this, a9, new a8(() => new Set));
    c4(this, o9, new Set);
    S2(this, "disposables", o2());
    u10(this, n9, e5), s.isServer && this.disposables.microTask(() => {
      this.dispose();
    });
  }
  dispose() {
    this.disposables.dispose();
  }
  get state() {
    return i7(this, n9);
  }
  subscribe(e5, r9) {
    if (s.isServer)
      return () => {};
    let s9 = { selector: e5, callback: r9, current: e5(i7(this, n9)) };
    return i7(this, o9).add(s9), this.disposables.add(() => {
      i7(this, o9).delete(s9);
    });
  }
  on(e5, r9) {
    return s.isServer ? () => {} : (i7(this, a9).get(e5).add(r9), this.disposables.add(() => {
      i7(this, a9).get(e5).delete(r9);
    }));
  }
  send(e5) {
    let r9 = this.reduce(i7(this, n9), e5);
    if (r9 !== i7(this, n9)) {
      u10(this, n9, r9);
      for (let s9 of i7(this, o9)) {
        let l11 = s9.selector(i7(this, n9));
        j4(s9.current, l11) || (s9.current = l11, s9.callback(l11));
      }
      for (let s9 of i7(this, a9).get(e5.type))
        s9(i7(this, n9), e5);
    }
  }
}
n9 = new WeakMap, a9 = new WeakMap, o9 = new WeakMap;
function j4(t6, e5) {
  return Object.is(t6, e5) ? true : typeof t6 != "object" || t6 === null || typeof e5 != "object" || e5 === null ? false : Array.isArray(t6) && Array.isArray(e5) ? t6.length !== e5.length ? false : f8(t6[Symbol.iterator](), e5[Symbol.iterator]()) : t6 instanceof Map && e5 instanceof Map || t6 instanceof Set && e5 instanceof Set ? t6.size !== e5.size ? false : f8(t6.entries(), e5.entries()) : p3(t6) && p3(e5) ? f8(Object.entries(t6)[Symbol.iterator](), Object.entries(e5)[Symbol.iterator]()) : false;
}
function f8(t6, e5) {
  do {
    let r9 = t6.next(), s9 = e5.next();
    if (r9.done && s9.done)
      return true;
    if (r9.done || s9.done || !Object.is(r9.value, s9.value))
      return false;
  } while (true);
}
function p3(t6) {
  if (Object.prototype.toString.call(t6) !== "[object Object]")
    return false;
  let e5 = Object.getPrototypeOf(t6);
  return e5 === null || Object.getPrototypeOf(e5) === null;
}
function k3(t6) {
  let [e5, r9] = t6(), s9 = o2();
  return (...l11) => {
    e5(...l11), s9.dispose(), s9.microTask(r9);
  };
}

// node_modules/@headlessui/react/dist/machines/stack-machine.js
var a10 = Object.defineProperty;
var r9 = (e5, c5, t6) => (c5 in e5) ? a10(e5, c5, { enumerable: true, configurable: true, writable: true, value: t6 }) : e5[c5] = t6;
var p4 = (e5, c5, t6) => (r9(e5, typeof c5 != "symbol" ? c5 + "" : c5, t6), t6);
var k4 = ((t6) => (t6[t6.Push = 0] = "Push", t6[t6.Pop = 1] = "Pop", t6))(k4 || {});
var y3 = { [0](e5, c5) {
  let t6 = c5.id, s9 = e5.stack, i8 = e5.stack.indexOf(t6);
  if (i8 !== -1) {
    let n10 = e5.stack.slice();
    return n10.splice(i8, 1), n10.push(t6), s9 = n10, { ...e5, stack: s9 };
  }
  return { ...e5, stack: [...e5.stack, t6] };
}, [1](e5, c5) {
  let t6 = c5.id, s9 = e5.stack.indexOf(t6);
  if (s9 === -1)
    return e5;
  let i8 = e5.stack.slice();
  return i8.splice(s9, 1), { ...e5, stack: i8 };
} };

class o10 extends T3 {
  constructor() {
    super(...arguments);
    p4(this, "actions", { push: (t6) => this.send({ type: 0, id: t6 }), pop: (t6) => this.send({ type: 1, id: t6 }) });
    p4(this, "selectors", { isTop: (t6, s9) => t6.stack[t6.stack.length - 1] === s9, inStack: (t6, s9) => t6.stack.includes(s9) });
  }
  static new() {
    return new o10({ stack: [] });
  }
  reduce(t6, s9) {
    return u(s9.type, y3, t6, s9);
  }
}
var x2 = new a8(() => o10.new());

// node_modules/@headlessui/react/dist/react-glue.js
var import_with_selector = __toESM(require_with_selector(), 1);
function S3(e5, n10, r10 = j4) {
  return import_with_selector.useSyncExternalStoreWithSelector(o4((i8) => e5.subscribe(s9, i8)), o4(() => e5.state), o4(() => e5.state), o4(n10), r10);
}
function s9(e5) {
  return e5;
}

// node_modules/@headlessui/react/dist/hooks/use-is-top-layer.js
function I3(o11, s10) {
  let t6 = u11(), r10 = x2.get(s10), [i8, c5] = S3(r10, n10((e5) => [r10.selectors.isTop(e5, t6), r10.selectors.inStack(e5, t6)], [r10, t6]));
  return n(() => {
    if (o11)
      return r10.actions.push(t6), () => r10.actions.pop(t6);
  }, [r10, o11, t6]), o11 ? c5 ? i8 : true : false;
}

// node_modules/@headlessui/react/dist/hooks/use-inert-others.js
var f9 = new Map;
var u12 = new Map;
function h5(t6) {
  var e5;
  let r10 = (e5 = u12.get(t6)) != null ? e5 : 0;
  return u12.set(t6, r10 + 1), r10 !== 0 ? () => m6(t6) : (f9.set(t6, { "aria-hidden": t6.getAttribute("aria-hidden"), inert: t6.inert }), t6.setAttribute("aria-hidden", "true"), t6.inert = true, () => m6(t6));
}
function m6(t6) {
  var i8;
  let r10 = (i8 = u12.get(t6)) != null ? i8 : 1;
  if (r10 === 1 ? u12.delete(t6) : u12.set(t6, r10 - 1), r10 !== 1)
    return;
  let e5 = f9.get(t6);
  e5 && (e5["aria-hidden"] === null ? t6.removeAttribute("aria-hidden") : t6.setAttribute("aria-hidden", e5["aria-hidden"]), t6.inert = e5.inert, f9.delete(t6));
}
function y4(t6, { allowed: r10, disallowed: e5 } = {}) {
  let i8 = I3(t6, "inert-others");
  n(() => {
    var d5, c5;
    if (!i8)
      return;
    let a12 = o2();
    for (let n11 of (d5 = e5 == null ? undefined : e5()) != null ? d5 : [])
      n11 && a12.add(h5(n11));
    let s10 = (c5 = r10 == null ? undefined : r10()) != null ? c5 : [];
    for (let n11 of s10) {
      if (!n11)
        continue;
      let l11 = l(n11);
      if (!l11)
        continue;
      let o11 = n11.parentElement;
      for (;o11 && o11 !== l11.body; ) {
        for (let p5 of o11.children)
          s10.some((E5) => p5.contains(E5)) || a12.add(h5(p5));
        o11 = o11.parentElement;
      }
    }
    return a12.dispose;
  }, [i8, r10, e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-on-disappear.js
import { useEffect as l11 } from "react";
function p5(s10, n11, o11) {
  let i8 = s3((t6) => {
    let e5 = t6.getBoundingClientRect();
    e5.x === 0 && e5.y === 0 && e5.width === 0 && e5.height === 0 && o11();
  });
  l11(() => {
    if (!s10)
      return;
    let t6 = n11 === null ? null : n5(n11) ? n11 : n11.current;
    if (!t6)
      return;
    let e5 = o2();
    if (typeof ResizeObserver != "undefined") {
      let r10 = new ResizeObserver(() => i8.current(t6));
      r10.observe(t6), e5.add(() => r10.disconnect());
    }
    if (typeof IntersectionObserver != "undefined") {
      let r10 = new IntersectionObserver(() => i8.current(t6));
      r10.observe(t6), e5.add(() => r10.disconnect());
    }
    return () => e5.dispose();
  }, [n11, i8, s10]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
import { useCallback as T5, useRef as E6 } from "react";

// node_modules/@headlessui/react/dist/utils/focus-management.js
var E5 = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "details>summary", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var S4 = ["[data-autofocus]"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
var T4 = ((o11) => (o11[o11.First = 1] = "First", o11[o11.Previous = 2] = "Previous", o11[o11.Next = 4] = "Next", o11[o11.Last = 8] = "Last", o11[o11.WrapAround = 16] = "WrapAround", o11[o11.NoScroll = 32] = "NoScroll", o11[o11.AutoFocus = 64] = "AutoFocus", o11))(T4 || {});
var A2 = ((n11) => (n11[n11.Error = 0] = "Error", n11[n11.Overflow = 1] = "Overflow", n11[n11.Success = 2] = "Success", n11[n11.Underflow = 3] = "Underflow", n11))(A2 || {});
var O2 = ((t6) => (t6[t6.Previous = -1] = "Previous", t6[t6.Next = 1] = "Next", t6))(O2 || {});
function x3(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(E5)).sort((r10, t6) => Math.sign((r10.tabIndex || Number.MAX_SAFE_INTEGER) - (t6.tabIndex || Number.MAX_SAFE_INTEGER)));
}
function h6(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(S4)).sort((r10, t6) => Math.sign((r10.tabIndex || Number.MAX_SAFE_INTEGER) - (t6.tabIndex || Number.MAX_SAFE_INTEGER)));
}
var I4 = ((t6) => (t6[t6.Strict = 0] = "Strict", t6[t6.Loose = 1] = "Loose", t6))(I4 || {});
function H4(e5, r10 = 0) {
  var t6;
  return e5 === ((t6 = l(e5)) == null ? undefined : t6.body) ? false : u(r10, { [0]() {
    return e5.matches(E5);
  }, [1]() {
    let l12 = e5;
    for (;l12 !== null; ) {
      if (l12.matches(E5))
        return true;
      l12 = l12.parentElement;
    }
    return false;
  } });
}
function K2(e5) {
  o2().nextFrame(() => {
    let r10 = e(e5);
    r10 && i4(r10) && !H4(r10, 0) && w6(e5);
  });
}
var g4 = ((t6) => (t6[t6.Keyboard = 0] = "Keyboard", t6[t6.Mouse = 1] = "Mouse", t6))(g4 || {});
typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("keydown", (e5) => {
  e5.metaKey || e5.altKey || e5.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true), document.addEventListener("click", (e5) => {
  e5.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e5.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "");
}, true));
function w6(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
var _2 = ["textarea", "input"].join(",");
function P3(e5) {
  var r10, t6;
  return (t6 = (r10 = e5 == null ? undefined : e5.matches) == null ? undefined : r10.call(e5, _2)) != null ? t6 : false;
}
function G2(e5, r10 = (t6) => t6) {
  return e5.slice().sort((t6, l12) => {
    let n11 = r10(t6), a12 = r10(l12);
    if (n11 === null || a12 === null)
      return 0;
    let u13 = n11.compareDocumentPosition(a12);
    return u13 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u13 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function R3(e5, r10, t6 = e5 === null ? document.body : r2(e5)) {
  return v5(x3(t6), r10, { relativeTo: e5 });
}
function v5(e5, r10, { sorted: t6 = true, relativeTo: l12 = null, skipElements: n11 = [] } = {}) {
  let a12 = Array.isArray(e5) ? e5.length > 0 ? r2(e5[0]) : document : r2(e5), u13 = Array.isArray(e5) ? t6 ? G2(e5) : e5 : r10 & 64 ? h6(e5) : x3(e5);
  n11.length > 0 && u13.length > 1 && (u13 = u13.filter((i8) => !n11.some((d5) => d5 != null && ("current" in d5) ? (d5 == null ? undefined : d5.current) === i8 : d5 === i8))), l12 = l12 != null ? l12 : a12 == null ? undefined : a12.activeElement;
  let o11 = (() => {
    if (r10 & 5)
      return 1;
    if (r10 & 10)
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), M3 = (() => {
    if (r10 & 1)
      return 0;
    if (r10 & 2)
      return Math.max(0, u13.indexOf(l12)) - 1;
    if (r10 & 4)
      return Math.max(0, u13.indexOf(l12)) + 1;
    if (r10 & 8)
      return u13.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), N2 = r10 & 32 ? { preventScroll: true } : {}, m7 = 0, c5 = u13.length, s10;
  do {
    if (m7 >= c5 || m7 + c5 <= 0)
      return 0;
    let i8 = M3 + m7;
    if (r10 & 16)
      i8 = (i8 + c5) % c5;
    else {
      if (i8 < 0)
        return 3;
      if (i8 >= c5)
        return 1;
    }
    s10 = u13[i8], s10 == null || s10.focus(N2), m7 += o11;
  } while (s10 !== e(s10));
  return r10 & 6 && P3(s10) && s10.select(), 2;
}

// node_modules/@headlessui/react/dist/utils/platform.js
function t6() {
  return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0;
}
function i8() {
  return /Android/gi.test(window.navigator.userAgent);
}
function n11() {
  return t6() || i8();
}

// node_modules/@headlessui/react/dist/hooks/use-document-event.js
import { useEffect as c5 } from "react";
function i9(t7, e5, o11, n12) {
  let u13 = s3(o11);
  c5(() => {
    if (!t7)
      return;
    function r10(m7) {
      u13.current(m7);
    }
    return document.addEventListener(e5, r10, n12), () => document.removeEventListener(e5, r10, n12);
  }, [t7, e5, n12]);
}

// node_modules/@headlessui/react/dist/hooks/use-window-event.js
import { useEffect as a12 } from "react";
function s10(t7, e5, o11, n12) {
  let i10 = s3(o11);
  a12(() => {
    if (!t7)
      return;
    function r10(d5) {
      i10.current(d5);
    }
    return window.addEventListener(e5, r10, n12), () => window.removeEventListener(e5, r10, n12);
  }, [t7, e5, n12]);
}

// node_modules/@headlessui/react/dist/hooks/use-outside-click.js
var C6 = 30;
function k5(o11, f10, h7) {
  let m7 = s3(h7), s11 = T5(function(e5, c6) {
    if (e5.defaultPrevented)
      return;
    let r10 = c6(e5);
    if (r10 === null || !r10.getRootNode().contains(r10) || !r10.isConnected)
      return;
    let M3 = function u(n12) {
      return typeof n12 == "function" ? u(n12()) : Array.isArray(n12) || n12 instanceof Set ? n12 : [n12];
    }(f10);
    for (let u13 of M3)
      if (u13 !== null && (u13.contains(r10) || e5.composed && e5.composedPath().includes(u13)))
        return;
    return !H4(r10, I4.Loose) && r10.tabIndex !== -1 && e5.preventDefault(), m7.current(e5, r10);
  }, [m7, f10]), i10 = E6(null);
  i9(o11, "pointerdown", (t7) => {
    var e5, c6;
    n11() || (i10.current = ((c6 = (e5 = t7.composedPath) == null ? undefined : e5.call(t7)) == null ? undefined : c6[0]) || t7.target);
  }, true), i9(o11, "pointerup", (t7) => {
    if (n11() || !i10.current)
      return;
    let e5 = i10.current;
    return i10.current = null, s11(t7, () => e5);
  }, true);
  let l12 = E6({ x: 0, y: 0 });
  i9(o11, "touchstart", (t7) => {
    l12.current.x = t7.touches[0].clientX, l12.current.y = t7.touches[0].clientY;
  }, true), i9(o11, "touchend", (t7) => {
    let e5 = { x: t7.changedTouches[0].clientX, y: t7.changedTouches[0].clientY };
    if (!(Math.abs(e5.x - l12.current.x) >= C6 || Math.abs(e5.y - l12.current.y) >= C6))
      return s11(t7, () => i4(t7.target) ? t7.target : null);
  }, true), s10(o11, "blur", (t7) => s11(t7, () => u5(window.document.activeElement) ? window.document.activeElement : null), true);
}

// node_modules/@headlessui/react/dist/hooks/use-owner.js
import { useMemo as o11 } from "react";
function u13(...e5) {
  return o11(() => l(...e5), [...e5]);
}
function c6(...e5) {
  return o11(() => r2(...e5), [...e5]);
}

// node_modules/@headlessui/react/dist/hooks/use-quick-release.js
import { useRef as o12 } from "react";
var H5 = ((e5) => (e5[e5.Ignore = 0] = "Ignore", e5[e5.Select = 1] = "Select", e5[e5.Close = 2] = "Close", e5))(H5 || {});
var S5 = { Ignore: { kind: 0 }, Select: (r10) => ({ kind: 1, target: r10 }), Close: { kind: 2 } };
var M3 = 200;
var f10 = 5;
function L5(r10, { trigger: n12, action: T6, close: e5, select: p6 }) {
  let l12 = o12(null), i10 = o12(null), u14 = o12(null);
  i9(r10 && n12 !== null, "pointerdown", (t7) => {
    o7(t7 == null ? undefined : t7.target) && n12 != null && n12.contains(t7.target) && (i10.current = t7.x, u14.current = t7.y, l12.current = t7.timeStamp);
  }), i9(r10 && n12 !== null, "pointerup", (t7) => {
    var s11, m7;
    let c7 = l12.current;
    if (c7 === null || (l12.current = null, !i4(t7.target)) || Math.abs(t7.x - ((s11 = i10.current) != null ? s11 : t7.x)) < f10 && Math.abs(t7.y - ((m7 = u14.current) != null ? m7 : t7.y)) < f10)
      return;
    let a13 = T6(t7);
    switch (a13.kind) {
      case 0:
        return;
      case 1: {
        t7.timeStamp - c7 > M3 && (p6(a13.target), e5());
        break;
      }
      case 2: {
        e5();
        break;
      }
    }
  }, { capture: true });
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
import { useRef as u14 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-event-listener.js
import { useEffect as d5 } from "react";
function E7(n12, e5, a13, t7) {
  let i10 = s3(a13);
  d5(() => {
    n12 = n12 != null ? n12 : window;
    function r10(o13) {
      i10.current(o13);
    }
    return n12.addEventListener(e5, r10, t7), () => n12.removeEventListener(e5, r10, t7);
  }, [n12, e5, t7]);
}

// node_modules/@headlessui/react/dist/hooks/use-refocusable-input.js
function v6(e5) {
  let l12 = u14({ value: "", selectionStart: null, selectionEnd: null });
  return E7(e5, "blur", (n12) => {
    let t7 = n12.target;
    l5(t7) && (l12.current = { value: t7.value, selectionStart: t7.selectionStart, selectionEnd: t7.selectionEnd });
  }), o4(() => {
    if (!d2(e5) && l5(e5) && e5.isConnected) {
      if (e5.focus({ preventScroll: true }), e5.value !== l12.current.value)
        e5.setSelectionRange(e5.value.length, e5.value.length);
      else {
        let { selectionStart: n12, selectionEnd: t7 } = l12.current;
        n12 !== null && t7 !== null && e5.setSelectionRange(n12, t7);
      }
      l12.current = { value: "", selectionStart: null, selectionEnd: null };
    }
  });
}

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
import { useMemo as a13 } from "react";
function e5(t7, u15) {
  return a13(() => {
    var n12;
    if (t7.type)
      return t7.type;
    let r10 = (n12 = t7.as) != null ? n12 : "button";
    if (typeof r10 == "string" && r10.toLowerCase() === "button" || (u15 == null ? undefined : u15.tagName) === "BUTTON" && !u15.hasAttribute("type"))
      return "button";
  }, [t7.type, t7.as, u15]);
}

// node_modules/@headlessui/react/dist/hooks/use-store.js
import { useSyncExternalStore as e6 } from "react";
function o13(t7) {
  return e6(t7.subscribe, t7.getSnapshot, t7.getSnapshot);
}

// node_modules/@headlessui/react/dist/utils/store.js
function a14(o14, r10) {
  let t7 = o14(), n12 = new Set;
  return { getSnapshot() {
    return t7;
  }, subscribe(e7) {
    return n12.add(e7), () => n12.delete(e7);
  }, dispatch(e7, ...s11) {
    let i10 = r10[e7].call(t7, ...s11);
    i10 && (t7 = i10, n12.forEach((c7) => c7()));
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/adjust-scrollbar-padding.js
function d6() {
  let r10;
  return { before({ doc: e7 }) {
    var l12;
    let o14 = e7.documentElement, t7 = (l12 = e7.defaultView) != null ? l12 : window;
    r10 = Math.max(0, t7.innerWidth - o14.clientWidth);
  }, after({ doc: e7, d: o14 }) {
    let t7 = e7.documentElement, l12 = Math.max(0, t7.clientWidth - t7.offsetWidth), n12 = Math.max(0, r10 - l12);
    o14.style(t7, "paddingRight", `${n12}px`);
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/handle-ios-locking.js
function w7() {
  return t6() ? { before({ doc: o14, d: r10, meta: m7 }) {
    function a15(s11) {
      for (let l12 of m7().containers)
        for (let c7 of l12())
          if (c7.contains(s11))
            return true;
      return false;
    }
    r10.microTask(() => {
      var c7;
      if (window.getComputedStyle(o14.documentElement).scrollBehavior !== "auto") {
        let t7 = o2();
        t7.style(o14.documentElement, "scrollBehavior", "auto"), r10.add(() => r10.microTask(() => t7.dispose()));
      }
      let s11 = (c7 = window.scrollY) != null ? c7 : window.pageYOffset, l12 = null;
      r10.addEventListener(o14, "click", (t7) => {
        if (i4(t7.target))
          try {
            let e7 = t7.target.closest("a");
            if (!e7)
              return;
            let { hash: n12 } = new URL(e7.href), f11 = o14.querySelector(n12);
            i4(f11) && !a15(f11) && (l12 = f11);
          } catch {}
      }, true), r10.group((t7) => {
        r10.addEventListener(o14, "touchstart", (e7) => {
          if (t7.dispose(), i4(e7.target) && r6(e7.target))
            if (a15(e7.target)) {
              let n12 = e7.target;
              for (;n12.parentElement && a15(n12.parentElement); )
                n12 = n12.parentElement;
              t7.style(n12, "overscrollBehavior", "contain");
            } else
              t7.style(e7.target, "touchAction", "none");
        });
      }), r10.addEventListener(o14, "touchmove", (t7) => {
        if (i4(t7.target)) {
          if (l5(t7.target))
            return;
          if (a15(t7.target)) {
            let e7 = t7.target;
            for (;e7.parentElement && e7.dataset.headlessuiPortal !== "" && !(e7.scrollHeight > e7.clientHeight || e7.scrollWidth > e7.clientWidth); )
              e7 = e7.parentElement;
            e7.dataset.headlessuiPortal === "" && t7.preventDefault();
          } else
            t7.preventDefault();
        }
      }, { passive: false }), r10.add(() => {
        var e7;
        let t7 = (e7 = window.scrollY) != null ? e7 : window.pageYOffset;
        s11 !== t7 && window.scrollTo(0, s11), l12 && l12.isConnected && (l12.scrollIntoView({ block: "nearest" }), l12 = null);
      });
    });
  } } : {};
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/prevent-scroll.js
function r10() {
  return { before({ doc: e7, d: o14 }) {
    o14.style(e7.documentElement, "overflow", "hidden");
  } };
}

// node_modules/@headlessui/react/dist/hooks/document-overflow/overflow-store.js
function r11(e7) {
  let o14 = {};
  for (let t7 of e7)
    Object.assign(o14, t7(o14));
  return o14;
}
var c7 = a14(() => new Map, { PUSH(e7, o14) {
  var n12;
  let t7 = (n12 = this.get(e7)) != null ? n12 : { doc: e7, count: 0, d: o2(), meta: new Set, computedMeta: {} };
  return t7.count++, t7.meta.add(o14), t7.computedMeta = r11(t7.meta), this.set(e7, t7), this;
}, POP(e7, o14) {
  let t7 = this.get(e7);
  return t7 && (t7.count--, t7.meta.delete(o14), t7.computedMeta = r11(t7.meta)), this;
}, SCROLL_PREVENT(e7) {
  let o14 = { doc: e7.doc, d: e7.d, meta() {
    return e7.computedMeta;
  } }, t7 = [w7(), d6(), r10()];
  t7.forEach(({ before: n12 }) => n12 == null ? undefined : n12(o14)), t7.forEach(({ after: n12 }) => n12 == null ? undefined : n12(o14));
}, SCROLL_ALLOW({ d: e7 }) {
  e7.dispose();
}, TEARDOWN({ doc: e7 }) {
  this.delete(e7);
} });
c7.subscribe(() => {
  let e7 = c7.getSnapshot(), o14 = new Map;
  for (let [t7] of e7)
    o14.set(t7, t7.documentElement.style.overflow);
  for (let t7 of e7.values()) {
    let n12 = o14.get(t7.doc) === "hidden", a15 = t7.count !== 0;
    (a15 && !n12 || !a15 && n12) && c7.dispatch(t7.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", t7), t7.count === 0 && c7.dispatch("TEARDOWN", t7);
  }
});

// node_modules/@headlessui/react/dist/hooks/document-overflow/use-document-overflow.js
function a15(r12, e7, n12 = () => ({ containers: [] })) {
  let f11 = o13(c7), o14 = e7 ? f11.get(e7) : undefined, i10 = o14 ? o14.count > 0 : false;
  return n(() => {
    if (!(!e7 || !r12))
      return c7.dispatch("PUSH", e7, n12), () => c7.dispatch("POP", e7, n12);
  }, [r12, e7]), i10;
}

// node_modules/@headlessui/react/dist/hooks/use-scroll-lock.js
function f11(e7, c8, n12 = () => [document.body]) {
  let r12 = I3(e7, "scroll-lock");
  a15(r12, c8, (t7) => {
    var o14;
    return { containers: [...(o14 = t7.containers) != null ? o14 : [], n12] };
  });
}

// node_modules/@headlessui/react/dist/hooks/use-tracked-pointer.js
import { useRef as o14 } from "react";
function t7(e7) {
  return [e7.screenX, e7.screenY];
}
function u15() {
  let e7 = o14([-1, -1]);
  return { wasMoved(r12) {
    let n12 = t7(r12);
    return e7.current[0] === n12[0] && e7.current[1] === n12[1] ? false : (e7.current = n12, true);
  }, update(r12) {
    e7.current = t7(r12);
  } };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
import { useRef as c9, useState as b5 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-flags.js
import { useCallback as t8, useState as b4 } from "react";
function c8(u16 = 0) {
  let [r12, a16] = b4(u16), g5 = t8((e7) => a16(e7), []), s11 = t8((e7) => a16((l12) => l12 | e7), []), m7 = t8((e7) => (r12 & e7) === e7, [r12]), n12 = t8((e7) => a16((l12) => l12 & ~e7), []), F2 = t8((e7) => a16((l12) => l12 ^ e7), []);
  return { flags: r12, setFlag: g5, addFlag: s11, hasFlag: m7, removeFlag: n12, toggleFlag: F2 };
}

// node_modules/@headlessui/react/dist/hooks/use-transition.js
var T6;
var S6;
typeof process != "undefined" && typeof globalThis != "undefined" && typeof Element != "undefined" && ((T6 = process == null ? undefined : process.env) == null ? undefined : T6["NODE_ENV"]) === "test" && typeof ((S6 = Element == null ? undefined : Element.prototype) == null ? undefined : S6.getAnimations) == "undefined" && (Element.prototype.getAnimations = function() {
  return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)), [];
});
var A3 = ((i10) => (i10[i10.None = 0] = "None", i10[i10.Closed = 1] = "Closed", i10[i10.Enter = 2] = "Enter", i10[i10.Leave = 4] = "Leave", i10))(A3 || {});
function x4(e7) {
  let r12 = {};
  for (let t9 in e7)
    e7[t9] === true && (r12[`data-${t9}`] = "");
  return r12;
}
function N2(e7, r12, t9, n12) {
  let [i10, a16] = b5(t9), { hasFlag: s11, addFlag: o15, removeFlag: l12 } = c8(e7 && i10 ? 3 : 0), u16 = c9(false), f12 = c9(false), E8 = p();
  return n(() => {
    var d7;
    if (e7) {
      if (t9 && a16(true), !r12) {
        t9 && o15(3);
        return;
      }
      return (d7 = n12 == null ? undefined : n12.start) == null || d7.call(n12, t9), C7(r12, { inFlight: u16, prepare() {
        f12.current ? f12.current = false : f12.current = u16.current, u16.current = true, !f12.current && (t9 ? (o15(3), l12(4)) : (o15(4), l12(2)));
      }, run() {
        f12.current ? t9 ? (l12(3), o15(4)) : (l12(4), o15(3)) : t9 ? l12(1) : o15(1);
      }, done() {
        var p6;
        f12.current && D4(r12) || (u16.current = false, l12(7), t9 || a16(false), (p6 = n12 == null ? undefined : n12.end) == null || p6.call(n12, t9));
      } });
    }
  }, [e7, t9, r12, E8]), e7 ? [i10, { closed: s11(1), enter: s11(2), leave: s11(4), transition: s11(2) || s11(4) }] : [t9, { closed: undefined, enter: undefined, leave: undefined, transition: undefined }];
}
function C7(e7, { prepare: r12, run: t9, done: n12, inFlight: i10 }) {
  let a16 = o2();
  return j5(e7, { prepare: r12, inFlight: i10 }), a16.nextFrame(() => {
    t9(), a16.requestAnimationFrame(() => {
      a16.add(M4(e7, n12));
    });
  }), a16.dispose;
}
function M4(e7, r12) {
  var a16, s11;
  let t9 = o2();
  if (!e7)
    return t9.dispose;
  let n12 = false;
  t9.add(() => {
    n12 = true;
  });
  let i10 = (s11 = (a16 = e7.getAnimations) == null ? undefined : a16.call(e7).filter((o15) => o15 instanceof CSSTransition)) != null ? s11 : [];
  return i10.length === 0 ? (r12(), t9.dispose) : (Promise.allSettled(i10.map((o15) => o15.finished)).then(() => {
    n12 || r12();
  }), t9.dispose);
}
function j5(e7, { inFlight: r12, prepare: t9 }) {
  if (r12 != null && r12.current) {
    t9();
    return;
  }
  let n12 = e7.style.transition;
  e7.style.transition = "none", t9(), e7.offsetHeight, e7.style.transition = n12;
}
function D4(e7) {
  var t9, n12;
  return ((n12 = (t9 = e7.getAnimations) == null ? undefined : t9.call(e7)) != null ? n12 : []).some((i10) => i10 instanceof CSSTransition && i10.playState !== "finished");
}

// node_modules/@headlessui/react/dist/hooks/use-tree-walker.js
import { useEffect as T7, useRef as E8 } from "react";
function F2(c10, { container: e7, accept: t9, walk: r12 }) {
  let o15 = E8(t9), l12 = E8(r12);
  T7(() => {
    o15.current = t9, l12.current = r12;
  }, [t9, r12]), n(() => {
    if (!e7 || !c10)
      return;
    let n12 = l(e7);
    if (!n12)
      return;
    let f12 = o15.current, p6 = l12.current, i10 = Object.assign((m7) => f12(m7), { acceptNode: f12 }), u16 = n12.createTreeWalker(e7, NodeFilter.SHOW_ELEMENT, i10, false);
    for (;u16.nextNode(); )
      p6(u16.currentNode);
  }, [e7, c10, o15, l12]);
}

// node_modules/@headlessui/react/dist/hooks/use-watch.js
import { useEffect as f12, useRef as s11 } from "react";
function m7(u16, t9) {
  let e7 = s11([]), r12 = o4(u16);
  f12(() => {
    let o15 = [...e7.current];
    for (let [a16, l12] of t9.entries())
      if (e7.current[a16] !== l12) {
        let n12 = r12(t9, o15);
        return e7.current = t9, n12;
      }
  }, [r12, ...t9]);
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
import * as React4 from "react";
import { useLayoutEffect as useLayoutEffect3, useEffect as useEffect3, useRef as useRef3 } from "react";

// node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs
function hasWindow() {
  return typeof window !== "undefined";
}
function getNodeName(node) {
  if (isNode(node)) {
    return (node.nodeName || "").toLowerCase();
  }
  return "#document";
}
function getWindow(node) {
  var _node$ownerDocument;
  return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? undefined : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
  var _ref;
  return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? undefined : _ref.documentElement;
}
function isNode(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
  if (!hasWindow()) {
    return false;
  }
  return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
  if (!hasWindow() || typeof ShadowRoot === "undefined") {
    return false;
  }
  return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
  const {
    overflow,
    overflowX,
    overflowY,
    display
  } = getComputedStyle2(element);
  return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== "inline" && display !== "contents";
}
function isTableElement(element) {
  return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
  try {
    if (element.matches(":popover-open")) {
      return true;
    }
  } catch (_e) {}
  try {
    return element.matches(":modal");
  } catch (_e) {
    return false;
  }
}
var willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
var containRe = /paint|layout|strict|content/;
var isNotNone = (value) => !!value && value !== "none";
var isWebKitValue;
function isContainingBlock(elementOrCss) {
  const css = isElement(elementOrCss) ? getComputedStyle2(elementOrCss) : elementOrCss;
  return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || "") || containRe.test(css.contain || "");
}
function getContainingBlock(element) {
  let currentNode = getParentNode(element);
  while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else if (isTopLayer(currentNode)) {
      return null;
    }
    currentNode = getParentNode(currentNode);
  }
  return null;
}
function isWebKit() {
  if (isWebKitValue == null) {
    isWebKitValue = typeof CSS !== "undefined" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none");
  }
  return isWebKitValue;
}
function isLastTraversableNode(node) {
  return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle2(element) {
  return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
  if (isElement(element)) {
    return {
      scrollLeft: element.scrollLeft,
      scrollTop: element.scrollTop
    };
  }
  return {
    scrollLeft: element.scrollX,
    scrollTop: element.scrollY
  };
}
function getParentNode(node) {
  if (getNodeName(node) === "html") {
    return node;
  }
  const result = node.assignedSlot || node.parentNode || isShadowRoot(node) && node.host || getDocumentElement(node);
  return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
  const parentNode = getParentNode(node);
  if (isLastTraversableNode(parentNode)) {
    return node.ownerDocument ? node.ownerDocument.body : node.body;
  }
  if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
    return parentNode;
  }
  return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
  var _node$ownerDocument2;
  if (list === undefined) {
    list = [];
  }
  if (traverseIframes === undefined) {
    traverseIframes = true;
  }
  const scrollableAncestor = getNearestOverflowAncestor(node);
  const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? undefined : _node$ownerDocument2.body);
  const win = getWindow(scrollableAncestor);
  if (isBody) {
    const frameElement = getFrameElement(win);
    return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
  } else {
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
  }
}
function getFrameElement(win) {
  return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}

// node_modules/@floating-ui/react/dist/floating-ui.react.utils.mjs
function getUserAgent() {
  const uaData = navigator.userAgentData;
  if (uaData && Array.isArray(uaData.brands)) {
    return uaData.brands.map((_ref) => {
      let {
        brand,
        version
      } = _ref;
      return brand + "/" + version;
    }).join(" ");
  }
  return navigator.userAgent;
}
var TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";

// node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs
var min = Math.min;
var max = Math.max;
var round = Math.round;
var floor = Math.floor;
var createCoords = (v7) => ({
  x: v7,
  y: v7
});
var oppositeSideMap = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function clamp(start, value, end) {
  return max(start, min(value, end));
}
function evaluate(value, param) {
  return typeof value === "function" ? value(param) : value;
}
function getSide(placement) {
  return placement.split("-")[0];
}
function getAlignment(placement) {
  return placement.split("-")[1];
}
function getOppositeAxis(axis) {
  return axis === "x" ? "y" : "x";
}
function getAxisLength(axis) {
  return axis === "y" ? "height" : "width";
}
function getSideAxis(placement) {
  const firstChar = placement[0];
  return firstChar === "t" || firstChar === "b" ? "y" : "x";
}
function getAlignmentAxis(placement) {
  return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
  if (rtl === undefined) {
    rtl = false;
  }
  const alignment = getAlignment(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const length = getAxisLength(alignmentAxis);
  let mainAlignmentSide = alignmentAxis === "x" ? alignment === (rtl ? "end" : "start") ? "right" : "left" : alignment === "start" ? "bottom" : "top";
  if (rects.reference[length] > rects.floating[length]) {
    mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
  }
  return [mainAlignmentSide, getOppositePlacement(mainAlignmentSide)];
}
function getExpandedPlacements(placement) {
  const oppositePlacement = getOppositePlacement(placement);
  return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
}
function getOppositeAlignmentPlacement(placement) {
  return placement.includes("start") ? placement.replace("start", "end") : placement.replace("end", "start");
}
var lrPlacement = ["left", "right"];
var rlPlacement = ["right", "left"];
var tbPlacement = ["top", "bottom"];
var btPlacement = ["bottom", "top"];
function getSideList(side, isStart, rtl) {
  switch (side) {
    case "top":
    case "bottom":
      if (rtl)
        return isStart ? rlPlacement : lrPlacement;
      return isStart ? lrPlacement : rlPlacement;
    case "left":
    case "right":
      return isStart ? tbPlacement : btPlacement;
    default:
      return [];
  }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
  const alignment = getAlignment(placement);
  let list = getSideList(getSide(placement), direction === "start", rtl);
  if (alignment) {
    list = list.map((side) => side + "-" + alignment);
    if (flipAlignment) {
      list = list.concat(list.map(getOppositeAlignmentPlacement));
    }
  }
  return list;
}
function getOppositePlacement(placement) {
  const side = getSide(placement);
  return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...padding
  };
}
function getPaddingObject(padding) {
  return typeof padding !== "number" ? expandPaddingObject(padding) : {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  };
}
function rectToClientRect(rect) {
  const {
    x: x5,
    y: y5,
    width,
    height
  } = rect;
  return {
    width,
    height,
    top: y5,
    left: x5,
    right: x5 + width,
    bottom: y5 + height,
    x: x5,
    y: y5
  };
}

// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
import * as ReactDOM2 from "react-dom";

// node_modules/@floating-ui/core/dist/floating-ui.core.mjs
function computeCoordsFromPlacement(_ref, placement, rtl) {
  let {
    reference,
    floating
  } = _ref;
  const sideAxis = getSideAxis(placement);
  const alignmentAxis = getAlignmentAxis(placement);
  const alignLength = getAxisLength(alignmentAxis);
  const side = getSide(placement);
  const isVertical = sideAxis === "y";
  const commonX = reference.x + reference.width / 2 - floating.width / 2;
  const commonY = reference.y + reference.height / 2 - floating.height / 2;
  const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
  let coords;
  switch (side) {
    case "top":
      coords = {
        x: commonX,
        y: reference.y - floating.height
      };
      break;
    case "bottom":
      coords = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;
    case "right":
      coords = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;
    case "left":
      coords = {
        x: reference.x - floating.width,
        y: commonY
      };
      break;
    default:
      coords = {
        x: reference.x,
        y: reference.y
      };
  }
  switch (getAlignment(placement)) {
    case "start":
      coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
      break;
    case "end":
      coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
      break;
  }
  return coords;
}
async function detectOverflow(state, options) {
  var _await$platform$isEle;
  if (options === undefined) {
    options = {};
  }
  const {
    x: x5,
    y: y5,
    platform,
    rects,
    elements,
    strategy
  } = state;
  const {
    boundary = "clippingAncestors",
    rootBoundary = "viewport",
    elementContext = "floating",
    altBoundary = false,
    padding = 0
  } = evaluate(options, state);
  const paddingObject = getPaddingObject(padding);
  const altContext = elementContext === "floating" ? "reference" : "floating";
  const element = elements[altBoundary ? altContext : elementContext];
  const clippingClientRect = rectToClientRect(await platform.getClippingRect({
    element: ((_await$platform$isEle = await (platform.isElement == null ? undefined : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? undefined : platform.getDocumentElement(elements.floating)),
    boundary,
    rootBoundary,
    strategy
  }));
  const rect = elementContext === "floating" ? {
    x: x5,
    y: y5,
    width: rects.floating.width,
    height: rects.floating.height
  } : rects.reference;
  const offsetParent = await (platform.getOffsetParent == null ? undefined : platform.getOffsetParent(elements.floating));
  const offsetScale = await (platform.isElement == null ? undefined : platform.isElement(offsetParent)) ? await (platform.getScale == null ? undefined : platform.getScale(offsetParent)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  };
  const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements,
    rect,
    offsetParent,
    strategy
  }) : rect);
  return {
    top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
    bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
    left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
    right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
  };
}
var MAX_RESET_COUNT = 50;
var computePosition = async (reference, floating, config) => {
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform
  } = config;
  const platformWithDetectOverflow = platform.detectOverflow ? platform : {
    ...platform,
    detectOverflow
  };
  const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(floating));
  let rects = await platform.getElementRects({
    reference,
    floating,
    strategy
  });
  let {
    x: x5,
    y: y5
  } = computeCoordsFromPlacement(rects, placement, rtl);
  let statefulPlacement = placement;
  let resetCount = 0;
  const middlewareData = {};
  for (let i10 = 0;i10 < middleware.length; i10++) {
    const currentMiddleware = middleware[i10];
    if (!currentMiddleware) {
      continue;
    }
    const {
      name,
      fn
    } = currentMiddleware;
    const {
      x: nextX,
      y: nextY,
      data,
      reset
    } = await fn({
      x: x5,
      y: y5,
      initialPlacement: placement,
      placement: statefulPlacement,
      strategy,
      middlewareData,
      rects,
      platform: platformWithDetectOverflow,
      elements: {
        reference,
        floating
      }
    });
    x5 = nextX != null ? nextX : x5;
    y5 = nextY != null ? nextY : y5;
    middlewareData[name] = {
      ...middlewareData[name],
      ...data
    };
    if (reset && resetCount < MAX_RESET_COUNT) {
      resetCount++;
      if (typeof reset === "object") {
        if (reset.placement) {
          statefulPlacement = reset.placement;
        }
        if (reset.rects) {
          rects = reset.rects === true ? await platform.getElementRects({
            reference,
            floating,
            strategy
          }) : reset.rects;
        }
        ({
          x: x5,
          y: y5
        } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
      }
      i10 = -1;
    }
  }
  return {
    x: x5,
    y: y5,
    placement: statefulPlacement,
    strategy,
    middlewareData
  };
};
var flip = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "flip",
    options,
    async fn(state) {
      var _middlewareData$arrow, _middlewareData$flip;
      const {
        placement,
        middlewareData,
        rects,
        initialPlacement,
        platform,
        elements
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = true,
        fallbackPlacements: specifiedFallbackPlacements,
        fallbackStrategy = "bestFit",
        fallbackAxisSideDirection = "none",
        flipAlignment = true,
        ...detectOverflowOptions
      } = evaluate(options, state);
      if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      const side = getSide(placement);
      const initialSideAxis = getSideAxis(initialPlacement);
      const isBasePlacement = getSide(initialPlacement) === initialPlacement;
      const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating));
      const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
      const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== "none";
      if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
        fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
      }
      const placements2 = [initialPlacement, ...fallbackPlacements];
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const overflows = [];
      let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? undefined : _middlewareData$flip.overflows) || [];
      if (checkMainAxis) {
        overflows.push(overflow[side]);
      }
      if (checkCrossAxis) {
        const sides2 = getAlignmentSides(placement, rects, rtl);
        overflows.push(overflow[sides2[0]], overflow[sides2[1]]);
      }
      overflowsData = [...overflowsData, {
        placement,
        overflows
      }];
      if (!overflows.every((side2) => side2 <= 0)) {
        var _middlewareData$flip2, _overflowsData$filter;
        const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? undefined : _middlewareData$flip2.index) || 0) + 1;
        const nextPlacement = placements2[nextIndex];
        if (nextPlacement) {
          const ignoreCrossAxisOverflow = checkCrossAxis === "alignment" ? initialSideAxis !== getSideAxis(nextPlacement) : false;
          if (!ignoreCrossAxisOverflow || overflowsData.every((d7) => getSideAxis(d7.placement) === initialSideAxis ? d7.overflows[0] > 0 : true)) {
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }
        }
        let resetPlacement = (_overflowsData$filter = overflowsData.filter((d7) => d7.overflows[0] <= 0).sort((a16, b6) => a16.overflows[1] - b6.overflows[1])[0]) == null ? undefined : _overflowsData$filter.placement;
        if (!resetPlacement) {
          switch (fallbackStrategy) {
            case "bestFit": {
              var _overflowsData$filter2;
              const placement2 = (_overflowsData$filter2 = overflowsData.filter((d7) => {
                if (hasFallbackAxisSideDirection) {
                  const currentSideAxis = getSideAxis(d7.placement);
                  return currentSideAxis === initialSideAxis || currentSideAxis === "y";
                }
                return true;
              }).map((d7) => [d7.placement, d7.overflows.filter((overflow2) => overflow2 > 0).reduce((acc, overflow2) => acc + overflow2, 0)]).sort((a16, b6) => a16[1] - b6[1])[0]) == null ? undefined : _overflowsData$filter2[0];
              if (placement2) {
                resetPlacement = placement2;
              }
              break;
            }
            case "initialPlacement":
              resetPlacement = initialPlacement;
              break;
          }
        }
        if (placement !== resetPlacement) {
          return {
            reset: {
              placement: resetPlacement
            }
          };
        }
      }
      return {};
    }
  };
};
var originSides = /* @__PURE__ */ new Set(["left", "top"]);
async function convertValueToCoords(state, options) {
  const {
    placement,
    platform,
    elements
  } = state;
  const rtl = await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating));
  const side = getSide(placement);
  const alignment = getAlignment(placement);
  const isVertical = getSideAxis(placement) === "y";
  const mainAxisMulti = originSides.has(side) ? -1 : 1;
  const crossAxisMulti = rtl && isVertical ? -1 : 1;
  const rawValue = evaluate(options, state);
  let {
    mainAxis,
    crossAxis,
    alignmentAxis
  } = typeof rawValue === "number" ? {
    mainAxis: rawValue,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: rawValue.mainAxis || 0,
    crossAxis: rawValue.crossAxis || 0,
    alignmentAxis: rawValue.alignmentAxis
  };
  if (alignment && typeof alignmentAxis === "number") {
    crossAxis = alignment === "end" ? alignmentAxis * -1 : alignmentAxis;
  }
  return isVertical ? {
    x: crossAxis * crossAxisMulti,
    y: mainAxis * mainAxisMulti
  } : {
    x: mainAxis * mainAxisMulti,
    y: crossAxis * crossAxisMulti
  };
}
var offset = function(options) {
  if (options === undefined) {
    options = 0;
  }
  return {
    name: "offset",
    options,
    async fn(state) {
      var _middlewareData$offse, _middlewareData$arrow;
      const {
        x: x5,
        y: y5,
        placement,
        middlewareData
      } = state;
      const diffCoords = await convertValueToCoords(state, options);
      if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? undefined : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
        return {};
      }
      return {
        x: x5 + diffCoords.x,
        y: y5 + diffCoords.y,
        data: {
          ...diffCoords,
          placement
        }
      };
    }
  };
};
var shift = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "shift",
    options,
    async fn(state) {
      const {
        x: x5,
        y: y5,
        placement,
        platform
      } = state;
      const {
        mainAxis: checkMainAxis = true,
        crossAxis: checkCrossAxis = false,
        limiter = {
          fn: (_ref) => {
            let {
              x: x6,
              y: y6
            } = _ref;
            return {
              x: x6,
              y: y6
            };
          }
        },
        ...detectOverflowOptions
      } = evaluate(options, state);
      const coords = {
        x: x5,
        y: y5
      };
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const crossAxis = getSideAxis(getSide(placement));
      const mainAxis = getOppositeAxis(crossAxis);
      let mainAxisCoord = coords[mainAxis];
      let crossAxisCoord = coords[crossAxis];
      if (checkMainAxis) {
        const minSide = mainAxis === "y" ? "top" : "left";
        const maxSide = mainAxis === "y" ? "bottom" : "right";
        const min2 = mainAxisCoord + overflow[minSide];
        const max2 = mainAxisCoord - overflow[maxSide];
        mainAxisCoord = clamp(min2, mainAxisCoord, max2);
      }
      if (checkCrossAxis) {
        const minSide = crossAxis === "y" ? "top" : "left";
        const maxSide = crossAxis === "y" ? "bottom" : "right";
        const min2 = crossAxisCoord + overflow[minSide];
        const max2 = crossAxisCoord - overflow[maxSide];
        crossAxisCoord = clamp(min2, crossAxisCoord, max2);
      }
      const limitedCoords = limiter.fn({
        ...state,
        [mainAxis]: mainAxisCoord,
        [crossAxis]: crossAxisCoord
      });
      return {
        ...limitedCoords,
        data: {
          x: limitedCoords.x - x5,
          y: limitedCoords.y - y5,
          enabled: {
            [mainAxis]: checkMainAxis,
            [crossAxis]: checkCrossAxis
          }
        }
      };
    }
  };
};
var size = function(options) {
  if (options === undefined) {
    options = {};
  }
  return {
    name: "size",
    options,
    async fn(state) {
      var _state$middlewareData, _state$middlewareData2;
      const {
        placement,
        rects,
        platform,
        elements
      } = state;
      const {
        apply = () => {},
        ...detectOverflowOptions
      } = evaluate(options, state);
      const overflow = await platform.detectOverflow(state, detectOverflowOptions);
      const side = getSide(placement);
      const alignment = getAlignment(placement);
      const isYAxis = getSideAxis(placement) === "y";
      const {
        width,
        height
      } = rects.floating;
      let heightSide;
      let widthSide;
      if (side === "top" || side === "bottom") {
        heightSide = side;
        widthSide = alignment === (await (platform.isRTL == null ? undefined : platform.isRTL(elements.floating)) ? "start" : "end") ? "left" : "right";
      } else {
        widthSide = side;
        heightSide = alignment === "end" ? "top" : "bottom";
      }
      const maximumClippingHeight = height - overflow.top - overflow.bottom;
      const maximumClippingWidth = width - overflow.left - overflow.right;
      const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
      const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
      const noShift = !state.middlewareData.shift;
      let availableHeight = overflowAvailableHeight;
      let availableWidth = overflowAvailableWidth;
      if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
        availableWidth = maximumClippingWidth;
      }
      if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
        availableHeight = maximumClippingHeight;
      }
      if (noShift && !alignment) {
        const xMin = max(overflow.left, 0);
        const xMax = max(overflow.right, 0);
        const yMin = max(overflow.top, 0);
        const yMax = max(overflow.bottom, 0);
        if (isYAxis) {
          availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
        } else {
          availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
        }
      }
      await apply({
        ...state,
        availableWidth,
        availableHeight
      });
      const nextDimensions = await platform.getDimensions(elements.floating);
      if (width !== nextDimensions.width || height !== nextDimensions.height) {
        return {
          reset: {
            rects: true
          }
        };
      }
      return {};
    }
  };
};

// node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs
function getCssDimensions(element) {
  const css = getComputedStyle2(element);
  let width = parseFloat(css.width) || 0;
  let height = parseFloat(css.height) || 0;
  const hasOffset = isHTMLElement(element);
  const offsetWidth = hasOffset ? element.offsetWidth : width;
  const offsetHeight = hasOffset ? element.offsetHeight : height;
  const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
  if (shouldFallback) {
    width = offsetWidth;
    height = offsetHeight;
  }
  return {
    width,
    height,
    $: shouldFallback
  };
}
function unwrapElement(element) {
  return !isElement(element) ? element.contextElement : element;
}
function getScale(element) {
  const domElement = unwrapElement(element);
  if (!isHTMLElement(domElement)) {
    return createCoords(1);
  }
  const rect = domElement.getBoundingClientRect();
  const {
    width,
    height,
    $
  } = getCssDimensions(domElement);
  let x5 = ($ ? round(rect.width) : rect.width) / width;
  let y5 = ($ ? round(rect.height) : rect.height) / height;
  if (!x5 || !Number.isFinite(x5)) {
    x5 = 1;
  }
  if (!y5 || !Number.isFinite(y5)) {
    y5 = 1;
  }
  return {
    x: x5,
    y: y5
  };
}
var noOffsets = /* @__PURE__ */ createCoords(0);
function getVisualOffsets(element) {
  const win = getWindow(element);
  if (!isWebKit() || !win.visualViewport) {
    return noOffsets;
  }
  return {
    x: win.visualViewport.offsetLeft,
    y: win.visualViewport.offsetTop
  };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
  if (isFixed === undefined) {
    isFixed = false;
  }
  if (!floatingOffsetParent || isFixed && floatingOffsetParent !== getWindow(element)) {
    return false;
  }
  return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
  if (includeScale === undefined) {
    includeScale = false;
  }
  if (isFixedStrategy === undefined) {
    isFixedStrategy = false;
  }
  const clientRect = element.getBoundingClientRect();
  const domElement = unwrapElement(element);
  let scale = createCoords(1);
  if (includeScale) {
    if (offsetParent) {
      if (isElement(offsetParent)) {
        scale = getScale(offsetParent);
      }
    } else {
      scale = getScale(element);
    }
  }
  const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
  let x5 = (clientRect.left + visualOffsets.x) / scale.x;
  let y5 = (clientRect.top + visualOffsets.y) / scale.y;
  let width = clientRect.width / scale.x;
  let height = clientRect.height / scale.y;
  if (domElement) {
    const win = getWindow(domElement);
    const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
    let currentWin = win;
    let currentIFrame = getFrameElement(currentWin);
    while (currentIFrame && offsetParent && offsetWin !== currentWin) {
      const iframeScale = getScale(currentIFrame);
      const iframeRect = currentIFrame.getBoundingClientRect();
      const css = getComputedStyle2(currentIFrame);
      const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
      const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
      x5 *= iframeScale.x;
      y5 *= iframeScale.y;
      width *= iframeScale.x;
      height *= iframeScale.y;
      x5 += left;
      y5 += top;
      currentWin = getWindow(currentIFrame);
      currentIFrame = getFrameElement(currentWin);
    }
  }
  return rectToClientRect({
    width,
    height,
    x: x5,
    y: y5
  });
}
function getWindowScrollBarX(element, rect) {
  const leftScroll = getNodeScroll(element).scrollLeft;
  if (!rect) {
    return getBoundingClientRect(getDocumentElement(element)).left + leftScroll;
  }
  return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
  const htmlRect = documentElement.getBoundingClientRect();
  const x5 = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
  const y5 = htmlRect.top + scroll.scrollTop;
  return {
    x: x5,
    y: y5
  };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
  let {
    elements,
    rect,
    offsetParent,
    strategy
  } = _ref;
  const isFixed = strategy === "fixed";
  const documentElement = getDocumentElement(offsetParent);
  const topLayer = elements ? isTopLayer(elements.floating) : false;
  if (offsetParent === documentElement || topLayer && isFixed) {
    return rect;
  }
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  let scale = createCoords(1);
  const offsets = createCoords(0);
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent);
      scale = getScale(offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    }
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  return {
    width: rect.width * scale.x,
    height: rect.height * scale.y,
    x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
    y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
  };
}
function getClientRects(element) {
  return Array.from(element.getClientRects());
}
function getDocumentRect(element) {
  const html = getDocumentElement(element);
  const scroll = getNodeScroll(element);
  const body = element.ownerDocument.body;
  const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
  const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
  let x5 = -scroll.scrollLeft + getWindowScrollBarX(element);
  const y5 = -scroll.scrollTop;
  if (getComputedStyle2(body).direction === "rtl") {
    x5 += max(html.clientWidth, body.clientWidth) - width;
  }
  return {
    width,
    height,
    x: x5,
    y: y5
  };
}
var SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
  const win = getWindow(element);
  const html = getDocumentElement(element);
  const visualViewport = win.visualViewport;
  let width = html.clientWidth;
  let height = html.clientHeight;
  let x5 = 0;
  let y5 = 0;
  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    const visualViewportBased = isWebKit();
    if (!visualViewportBased || visualViewportBased && strategy === "fixed") {
      x5 = visualViewport.offsetLeft;
      y5 = visualViewport.offsetTop;
    }
  }
  const windowScrollbarX = getWindowScrollBarX(html);
  if (windowScrollbarX <= 0) {
    const doc = html.ownerDocument;
    const body = doc.body;
    const bodyStyles = getComputedStyle(body);
    const bodyMarginInline = doc.compatMode === "CSS1Compat" ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
    const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
    if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
      width -= clippingStableScrollbarWidth;
    }
  } else if (windowScrollbarX <= SCROLLBAR_MAX) {
    width += windowScrollbarX;
  }
  return {
    width,
    height,
    x: x5,
    y: y5
  };
}
function getInnerBoundingClientRect(element, strategy) {
  const clientRect = getBoundingClientRect(element, true, strategy === "fixed");
  const top = clientRect.top + element.clientTop;
  const left = clientRect.left + element.clientLeft;
  const scale = isHTMLElement(element) ? getScale(element) : createCoords(1);
  const width = element.clientWidth * scale.x;
  const height = element.clientHeight * scale.y;
  const x5 = left * scale.x;
  const y5 = top * scale.y;
  return {
    width,
    height,
    x: x5,
    y: y5
  };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
  let rect;
  if (clippingAncestor === "viewport") {
    rect = getViewportRect(element, strategy);
  } else if (clippingAncestor === "document") {
    rect = getDocumentRect(getDocumentElement(element));
  } else if (isElement(clippingAncestor)) {
    rect = getInnerBoundingClientRect(clippingAncestor, strategy);
  } else {
    const visualOffsets = getVisualOffsets(element);
    rect = {
      x: clippingAncestor.x - visualOffsets.x,
      y: clippingAncestor.y - visualOffsets.y,
      width: clippingAncestor.width,
      height: clippingAncestor.height
    };
  }
  return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
  const parentNode = getParentNode(element);
  if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
    return false;
  }
  return getComputedStyle2(parentNode).position === "fixed" || hasFixedPositionAncestor(parentNode, stopNode);
}
function getClippingElementAncestors(element, cache) {
  const cachedResult = cache.get(element);
  if (cachedResult) {
    return cachedResult;
  }
  let result = getOverflowAncestors(element, [], false).filter((el) => isElement(el) && getNodeName(el) !== "body");
  let currentContainingBlockComputedStyle = null;
  const elementIsFixed = getComputedStyle2(element).position === "fixed";
  let currentNode = elementIsFixed ? getParentNode(element) : element;
  while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
    const computedStyle = getComputedStyle2(currentNode);
    const currentNodeIsContaining = isContainingBlock(currentNode);
    if (!currentNodeIsContaining && computedStyle.position === "fixed") {
      currentContainingBlockComputedStyle = null;
    }
    const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === "static" && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === "absolute" || currentContainingBlockComputedStyle.position === "fixed") || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
    if (shouldDropCurrentNode) {
      result = result.filter((ancestor) => ancestor !== currentNode);
    } else {
      currentContainingBlockComputedStyle = computedStyle;
    }
    currentNode = getParentNode(currentNode);
  }
  cache.set(element, result);
  return result;
}
function getClippingRect(_ref) {
  let {
    element,
    boundary,
    rootBoundary,
    strategy
  } = _ref;
  const elementClippingAncestors = boundary === "clippingAncestors" ? isTopLayer(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
  const clippingAncestors = [...elementClippingAncestors, rootBoundary];
  const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
  let top = firstRect.top;
  let right = firstRect.right;
  let bottom = firstRect.bottom;
  let left = firstRect.left;
  for (let i10 = 1;i10 < clippingAncestors.length; i10++) {
    const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i10], strategy);
    top = max(rect.top, top);
    right = min(rect.right, right);
    bottom = min(rect.bottom, bottom);
    left = max(rect.left, left);
  }
  return {
    width: right - left,
    height: bottom - top,
    x: left,
    y: top
  };
}
function getDimensions(element) {
  const {
    width,
    height
  } = getCssDimensions(element);
  return {
    width,
    height
  };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
  const isOffsetParentAnElement = isHTMLElement(offsetParent);
  const documentElement = getDocumentElement(offsetParent);
  const isFixed = strategy === "fixed";
  const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
  let scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const offsets = createCoords(0);
  function setLeftRTLScrollbarOffset() {
    offsets.x = getWindowScrollBarX(documentElement);
  }
  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== "body" || isOverflowElement(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }
    if (isOffsetParentAnElement) {
      const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
      offsets.x = offsetRect.x + offsetParent.clientLeft;
      offsets.y = offsetRect.y + offsetParent.clientTop;
    } else if (documentElement) {
      setLeftRTLScrollbarOffset();
    }
  }
  if (isFixed && !isOffsetParentAnElement && documentElement) {
    setLeftRTLScrollbarOffset();
  }
  const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
  const x5 = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
  const y5 = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
  return {
    x: x5,
    y: y5,
    width: rect.width,
    height: rect.height
  };
}
function isStaticPositioned(element) {
  return getComputedStyle2(element).position === "static";
}
function getTrueOffsetParent(element, polyfill) {
  if (!isHTMLElement(element) || getComputedStyle2(element).position === "fixed") {
    return null;
  }
  if (polyfill) {
    return polyfill(element);
  }
  let rawOffsetParent = element.offsetParent;
  if (getDocumentElement(element) === rawOffsetParent) {
    rawOffsetParent = rawOffsetParent.ownerDocument.body;
  }
  return rawOffsetParent;
}
function getOffsetParent(element, polyfill) {
  const win = getWindow(element);
  if (isTopLayer(element)) {
    return win;
  }
  if (!isHTMLElement(element)) {
    let svgOffsetParent = getParentNode(element);
    while (svgOffsetParent && !isLastTraversableNode(svgOffsetParent)) {
      if (isElement(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
        return svgOffsetParent;
      }
      svgOffsetParent = getParentNode(svgOffsetParent);
    }
    return win;
  }
  let offsetParent = getTrueOffsetParent(element, polyfill);
  while (offsetParent && isTableElement(offsetParent) && isStaticPositioned(offsetParent)) {
    offsetParent = getTrueOffsetParent(offsetParent, polyfill);
  }
  if (offsetParent && isLastTraversableNode(offsetParent) && isStaticPositioned(offsetParent) && !isContainingBlock(offsetParent)) {
    return win;
  }
  return offsetParent || getContainingBlock(element) || win;
}
var getElementRects = async function(data) {
  const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
  const getDimensionsFn = this.getDimensions;
  const floatingDimensions = await getDimensionsFn(data.floating);
  return {
    reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
    floating: {
      x: 0,
      y: 0,
      width: floatingDimensions.width,
      height: floatingDimensions.height
    }
  };
};
function isRTL(element) {
  return getComputedStyle2(element).direction === "rtl";
}
var platform = {
  convertOffsetParentRelativeRectToViewportRelativeRect,
  getDocumentElement,
  getClippingRect,
  getOffsetParent,
  getElementRects,
  getClientRects,
  getDimensions,
  getScale,
  isElement,
  isRTL
};
function rectsAreEqual(a16, b6) {
  return a16.x === b6.x && a16.y === b6.y && a16.width === b6.width && a16.height === b6.height;
}
function observeMove(element, onMove) {
  let io = null;
  let timeoutId;
  const root = getDocumentElement(element);
  function cleanup() {
    var _io;
    clearTimeout(timeoutId);
    (_io = io) == null || _io.disconnect();
    io = null;
  }
  function refresh(skip, threshold) {
    if (skip === undefined) {
      skip = false;
    }
    if (threshold === undefined) {
      threshold = 1;
    }
    cleanup();
    const elementRectForRootMargin = element.getBoundingClientRect();
    const {
      left,
      top,
      width,
      height
    } = elementRectForRootMargin;
    if (!skip) {
      onMove();
    }
    if (!width || !height) {
      return;
    }
    const insetTop = floor(top);
    const insetRight = floor(root.clientWidth - (left + width));
    const insetBottom = floor(root.clientHeight - (top + height));
    const insetLeft = floor(left);
    const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
    const options = {
      rootMargin,
      threshold: max(0, min(1, threshold)) || 1
    };
    let isFirstUpdate = true;
    function handleObserve(entries) {
      const ratio = entries[0].intersectionRatio;
      if (ratio !== threshold) {
        if (!isFirstUpdate) {
          return refresh();
        }
        if (!ratio) {
          timeoutId = setTimeout(() => {
            refresh(false, 0.0000001);
          }, 1000);
        } else {
          refresh(false, ratio);
        }
      }
      if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
        refresh();
      }
      isFirstUpdate = false;
    }
    try {
      io = new IntersectionObserver(handleObserve, {
        ...options,
        root: root.ownerDocument
      });
    } catch (_e) {
      io = new IntersectionObserver(handleObserve, options);
    }
    io.observe(element);
  }
  refresh(true);
  return cleanup;
}
function autoUpdate(reference, floating, update, options) {
  if (options === undefined) {
    options = {};
  }
  const {
    ancestorScroll = true,
    ancestorResize = true,
    elementResize = typeof ResizeObserver === "function",
    layoutShift = typeof IntersectionObserver === "function",
    animationFrame = false
  } = options;
  const referenceEl = unwrapElement(reference);
  const ancestors = ancestorScroll || ancestorResize ? [...referenceEl ? getOverflowAncestors(referenceEl) : [], ...floating ? getOverflowAncestors(floating) : []] : [];
  ancestors.forEach((ancestor) => {
    ancestorScroll && ancestor.addEventListener("scroll", update, {
      passive: true
    });
    ancestorResize && ancestor.addEventListener("resize", update);
  });
  const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
  let reobserveFrame = -1;
  let resizeObserver = null;
  if (elementResize) {
    resizeObserver = new ResizeObserver((_ref) => {
      let [firstEntry] = _ref;
      if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
        resizeObserver.unobserve(floating);
        cancelAnimationFrame(reobserveFrame);
        reobserveFrame = requestAnimationFrame(() => {
          var _resizeObserver;
          (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
        });
      }
      update();
    });
    if (referenceEl && !animationFrame) {
      resizeObserver.observe(referenceEl);
    }
    if (floating) {
      resizeObserver.observe(floating);
    }
  }
  let frameId;
  let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
  if (animationFrame) {
    frameLoop();
  }
  function frameLoop() {
    const nextRefRect = getBoundingClientRect(reference);
    if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
      update();
    }
    prevRefRect = nextRefRect;
    frameId = requestAnimationFrame(frameLoop);
  }
  update();
  return () => {
    var _resizeObserver2;
    ancestors.forEach((ancestor) => {
      ancestorScroll && ancestor.removeEventListener("scroll", update);
      ancestorResize && ancestor.removeEventListener("resize", update);
    });
    cleanupIo == null || cleanupIo();
    (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
    resizeObserver = null;
    if (animationFrame) {
      cancelAnimationFrame(frameId);
    }
  };
}
var detectOverflow2 = detectOverflow;
var offset2 = offset;
var shift2 = shift;
var flip2 = flip;
var size2 = size;
var computePosition2 = (reference, floating, options) => {
  const cache = new Map;
  const mergedOptions = {
    platform,
    ...options
  };
  const platformWithCache = {
    ...mergedOptions.platform,
    _c: cache
  };
  return computePosition(reference, floating, {
    ...mergedOptions,
    platform: platformWithCache
  });
};

// node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs
import * as React3 from "react";
import { useLayoutEffect as useLayoutEffect2 } from "react";
import * as ReactDOM from "react-dom";
var isClient = typeof document !== "undefined";
var noop = function noop2() {};
var index = isClient ? useLayoutEffect2 : noop;
function deepEqual(a16, b6) {
  if (a16 === b6) {
    return true;
  }
  if (typeof a16 !== typeof b6) {
    return false;
  }
  if (typeof a16 === "function" && a16.toString() === b6.toString()) {
    return true;
  }
  let length;
  let i10;
  let keys;
  if (a16 && b6 && typeof a16 === "object") {
    if (Array.isArray(a16)) {
      length = a16.length;
      if (length !== b6.length)
        return false;
      for (i10 = length;i10-- !== 0; ) {
        if (!deepEqual(a16[i10], b6[i10])) {
          return false;
        }
      }
      return true;
    }
    keys = Object.keys(a16);
    length = keys.length;
    if (length !== Object.keys(b6).length) {
      return false;
    }
    for (i10 = length;i10-- !== 0; ) {
      if (!{}.hasOwnProperty.call(b6, keys[i10])) {
        return false;
      }
    }
    for (i10 = length;i10-- !== 0; ) {
      const key = keys[i10];
      if (key === "_owner" && a16.$$typeof) {
        continue;
      }
      if (!deepEqual(a16[key], b6[key])) {
        return false;
      }
    }
    return true;
  }
  return a16 !== a16 && b6 !== b6;
}
function getDPR(element) {
  if (typeof window === "undefined") {
    return 1;
  }
  const win = element.ownerDocument.defaultView || window;
  return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
  const dpr = getDPR(element);
  return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
  const ref = React3.useRef(value);
  index(() => {
    ref.current = value;
  });
  return ref;
}
function useFloating(options) {
  if (options === undefined) {
    options = {};
  }
  const {
    placement = "bottom",
    strategy = "absolute",
    middleware = [],
    platform: platform2,
    elements: {
      reference: externalReference,
      floating: externalFloating
    } = {},
    transform = true,
    whileElementsMounted,
    open
  } = options;
  const [data, setData] = React3.useState({
    x: 0,
    y: 0,
    strategy,
    placement,
    middlewareData: {},
    isPositioned: false
  });
  const [latestMiddleware, setLatestMiddleware] = React3.useState(middleware);
  if (!deepEqual(latestMiddleware, middleware)) {
    setLatestMiddleware(middleware);
  }
  const [_reference, _setReference] = React3.useState(null);
  const [_floating, _setFloating] = React3.useState(null);
  const setReference = React3.useCallback((node) => {
    if (node !== referenceRef.current) {
      referenceRef.current = node;
      _setReference(node);
    }
  }, []);
  const setFloating = React3.useCallback((node) => {
    if (node !== floatingRef.current) {
      floatingRef.current = node;
      _setFloating(node);
    }
  }, []);
  const referenceEl = externalReference || _reference;
  const floatingEl = externalFloating || _floating;
  const referenceRef = React3.useRef(null);
  const floatingRef = React3.useRef(null);
  const dataRef = React3.useRef(data);
  const hasWhileElementsMounted = whileElementsMounted != null;
  const whileElementsMountedRef = useLatestRef(whileElementsMounted);
  const platformRef = useLatestRef(platform2);
  const openRef = useLatestRef(open);
  const update = React3.useCallback(() => {
    if (!referenceRef.current || !floatingRef.current) {
      return;
    }
    const config = {
      placement,
      strategy,
      middleware: latestMiddleware
    };
    if (platformRef.current) {
      config.platform = platformRef.current;
    }
    computePosition2(referenceRef.current, floatingRef.current, config).then((data2) => {
      const fullData = {
        ...data2,
        isPositioned: openRef.current !== false
      };
      if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
        dataRef.current = fullData;
        ReactDOM.flushSync(() => {
          setData(fullData);
        });
      }
    });
  }, [latestMiddleware, placement, strategy, platformRef, openRef]);
  index(() => {
    if (open === false && dataRef.current.isPositioned) {
      dataRef.current.isPositioned = false;
      setData((data2) => ({
        ...data2,
        isPositioned: false
      }));
    }
  }, [open]);
  const isMountedRef = React3.useRef(false);
  index(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  index(() => {
    if (referenceEl)
      referenceRef.current = referenceEl;
    if (floatingEl)
      floatingRef.current = floatingEl;
    if (referenceEl && floatingEl) {
      if (whileElementsMountedRef.current) {
        return whileElementsMountedRef.current(referenceEl, floatingEl, update);
      }
      update();
    }
  }, [referenceEl, floatingEl, update, whileElementsMountedRef, hasWhileElementsMounted]);
  const refs = React3.useMemo(() => ({
    reference: referenceRef,
    floating: floatingRef,
    setReference,
    setFloating
  }), [setReference, setFloating]);
  const elements = React3.useMemo(() => ({
    reference: referenceEl,
    floating: floatingEl
  }), [referenceEl, floatingEl]);
  const floatingStyles = React3.useMemo(() => {
    const initialStyles = {
      position: strategy,
      left: 0,
      top: 0
    };
    if (!elements.floating) {
      return initialStyles;
    }
    const x5 = roundByDPR(elements.floating, data.x);
    const y5 = roundByDPR(elements.floating, data.y);
    if (transform) {
      return {
        ...initialStyles,
        transform: "translate(" + x5 + "px, " + y5 + "px)",
        ...getDPR(elements.floating) >= 1.5 && {
          willChange: "transform"
        }
      };
    }
    return {
      position: strategy,
      left: x5,
      top: y5
    };
  }, [strategy, transform, elements.floating, data.x, data.y]);
  return React3.useMemo(() => ({
    ...data,
    update,
    refs,
    elements,
    floatingStyles
  }), [data, update, refs, elements, floatingStyles]);
}
var offset3 = (options, deps) => {
  const result = offset2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var shift3 = (options, deps) => {
  const result = shift2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var flip3 = (options, deps) => {
  const result = flip2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
var size3 = (options, deps) => {
  const result = size2(options);
  return {
    name: result.name,
    fn: result.fn,
    options: [options, deps]
  };
};
// node_modules/@floating-ui/react/dist/floating-ui.react.mjs
var SafeReact = {
  ...React4
};
var useInsertionEffect = SafeReact.useInsertionEffect;
var useSafeInsertionEffect = useInsertionEffect || ((fn) => fn());
function useEffectEvent(callback) {
  const ref = React4.useRef(() => {
    if (true) {
      throw new Error("Cannot call an event handler while rendering.");
    }
  });
  useSafeInsertionEffect(() => {
    ref.current = callback;
  });
  return React4.useCallback(function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return ref.current == null ? undefined : ref.current(...args);
  }, []);
}
var ARROW_UP = "ArrowUp";
var ARROW_DOWN = "ArrowDown";
var ARROW_LEFT = "ArrowLeft";
var ARROW_RIGHT = "ArrowRight";
var index2 = typeof document !== "undefined" ? useLayoutEffect3 : useEffect3;
var horizontalKeys = [ARROW_LEFT, ARROW_RIGHT];
var verticalKeys = [ARROW_UP, ARROW_DOWN];
var allKeys = [...horizontalKeys, ...verticalKeys];
var serverHandoffComplete = false;
var count = 0;
var genId = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + count++;
function useFloatingId() {
  const [id, setId] = React4.useState(() => serverHandoffComplete ? genId() : undefined);
  index2(() => {
    if (id == null) {
      setId(genId());
    }
  }, []);
  React4.useEffect(() => {
    serverHandoffComplete = true;
  }, []);
  return id;
}
var useReactId = SafeReact.useId;
var useId = useReactId || useFloatingId;
var devMessageSet;
if (true) {
  devMessageSet = /* @__PURE__ */ new Set;
}
function warn() {
  var _devMessageSet;
  for (var _len = arguments.length, messages = new Array(_len), _key = 0;_key < _len; _key++) {
    messages[_key] = arguments[_key];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet = devMessageSet) != null && _devMessageSet.has(message))) {
    var _devMessageSet2;
    (_devMessageSet2 = devMessageSet) == null || _devMessageSet2.add(message);
    console.warn(message);
  }
}
function error() {
  var _devMessageSet3;
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0;_key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  const message = "Floating UI: " + messages.join(" ");
  if (!((_devMessageSet3 = devMessageSet) != null && _devMessageSet3.has(message))) {
    var _devMessageSet4;
    (_devMessageSet4 = devMessageSet) == null || _devMessageSet4.add(message);
    console.error(message);
  }
}
function createPubSub() {
  const map = new Map;
  return {
    emit(event, data) {
      var _map$get;
      (_map$get = map.get(event)) == null || _map$get.forEach((handler) => handler(data));
    },
    on(event, listener) {
      map.set(event, [...map.get(event) || [], listener]);
    },
    off(event, listener) {
      var _map$get2;
      map.set(event, ((_map$get2 = map.get(event)) == null ? undefined : _map$get2.filter((l12) => l12 !== listener)) || []);
    }
  };
}
var FloatingNodeContext = /* @__PURE__ */ React4.createContext(null);
var FloatingTreeContext = /* @__PURE__ */ React4.createContext(null);
var useFloatingParentNodeId = () => {
  var _React$useContext;
  return ((_React$useContext = React4.useContext(FloatingNodeContext)) == null ? undefined : _React$useContext.id) || null;
};
var useFloatingTree = () => React4.useContext(FloatingTreeContext);
var FOCUSABLE_ATTRIBUTE = "data-floating-ui-focusable";
function useFloatingRootContext(options) {
  const {
    open = false,
    onOpenChange: onOpenChangeProp,
    elements: elementsProp
  } = options;
  const floatingId = useId();
  const dataRef = React4.useRef({});
  const [events] = React4.useState(() => createPubSub());
  const nested = useFloatingParentNodeId() != null;
  if (true) {
    const optionDomReference = elementsProp.reference;
    if (optionDomReference && !isElement(optionDomReference)) {
      error("Cannot pass a virtual element to the `elements.reference` option,", "as it must be a real DOM element. Use `refs.setPositionReference()`", "instead.");
    }
  }
  const [positionReference, setPositionReference] = React4.useState(elementsProp.reference);
  const onOpenChange = useEffectEvent((open2, event, reason) => {
    dataRef.current.openEvent = open2 ? event : undefined;
    events.emit("openchange", {
      open: open2,
      event,
      reason,
      nested
    });
    onOpenChangeProp == null || onOpenChangeProp(open2, event, reason);
  });
  const refs = React4.useMemo(() => ({
    setPositionReference
  }), []);
  const elements = React4.useMemo(() => ({
    reference: positionReference || elementsProp.reference || null,
    floating: elementsProp.floating || null,
    domReference: elementsProp.reference
  }), [positionReference, elementsProp.reference, elementsProp.floating]);
  return React4.useMemo(() => ({
    dataRef,
    open,
    onOpenChange,
    elements,
    events,
    floatingId,
    refs
  }), [open, onOpenChange, elements, events, floatingId, refs]);
}
function useFloating2(options) {
  if (options === undefined) {
    options = {};
  }
  const {
    nodeId
  } = options;
  const internalRootContext = useFloatingRootContext({
    ...options,
    elements: {
      reference: null,
      floating: null,
      ...options.elements
    }
  });
  const rootContext = options.rootContext || internalRootContext;
  const computedElements = rootContext.elements;
  const [_domReference, setDomReference] = React4.useState(null);
  const [positionReference, _setPositionReference] = React4.useState(null);
  const optionDomReference = computedElements == null ? undefined : computedElements.domReference;
  const domReference = optionDomReference || _domReference;
  const domReferenceRef = React4.useRef(null);
  const tree = useFloatingTree();
  index2(() => {
    if (domReference) {
      domReferenceRef.current = domReference;
    }
  }, [domReference]);
  const position = useFloating({
    ...options,
    elements: {
      ...computedElements,
      ...positionReference && {
        reference: positionReference
      }
    }
  });
  const setPositionReference = React4.useCallback((node) => {
    const computedPositionReference = isElement(node) ? {
      getBoundingClientRect: () => node.getBoundingClientRect(),
      contextElement: node
    } : node;
    _setPositionReference(computedPositionReference);
    position.refs.setReference(computedPositionReference);
  }, [position.refs]);
  const setReference = React4.useCallback((node) => {
    if (isElement(node) || node === null) {
      domReferenceRef.current = node;
      setDomReference(node);
    }
    if (isElement(position.refs.reference.current) || position.refs.reference.current === null || node !== null && !isElement(node)) {
      position.refs.setReference(node);
    }
  }, [position.refs]);
  const refs = React4.useMemo(() => ({
    ...position.refs,
    setReference,
    setPositionReference,
    domReference: domReferenceRef
  }), [position.refs, setReference, setPositionReference]);
  const elements = React4.useMemo(() => ({
    ...position.elements,
    domReference
  }), [position.elements, domReference]);
  const context = React4.useMemo(() => ({
    ...position,
    ...rootContext,
    refs,
    elements,
    nodeId
  }), [position, refs, elements, nodeId, rootContext]);
  index2(() => {
    rootContext.dataRef.current.floatingContext = context;
    const node = tree == null ? undefined : tree.nodesRef.current.find((node2) => node2.id === nodeId);
    if (node) {
      node.context = context;
    }
  });
  return React4.useMemo(() => ({
    ...position,
    context,
    refs,
    elements
  }), [position, refs, elements, context]);
}
var ACTIVE_KEY = "active";
var SELECTED_KEY = "selected";
function mergeProps(userProps, propsList, elementKey) {
  const map = new Map;
  const isItem = elementKey === "item";
  let domUserProps = userProps;
  if (isItem && userProps) {
    const {
      [ACTIVE_KEY]: _3,
      [SELECTED_KEY]: __,
      ...validProps
    } = userProps;
    domUserProps = validProps;
  }
  return {
    ...elementKey === "floating" && {
      tabIndex: -1,
      [FOCUSABLE_ATTRIBUTE]: ""
    },
    ...domUserProps,
    ...propsList.map((value) => {
      const propsOrGetProps = value ? value[elementKey] : null;
      if (typeof propsOrGetProps === "function") {
        return userProps ? propsOrGetProps(userProps) : null;
      }
      return propsOrGetProps;
    }).concat(userProps).reduce((acc, props) => {
      if (!props) {
        return acc;
      }
      Object.entries(props).forEach((_ref) => {
        let [key, value] = _ref;
        if (isItem && [ACTIVE_KEY, SELECTED_KEY].includes(key)) {
          return;
        }
        if (key.indexOf("on") === 0) {
          if (!map.has(key)) {
            map.set(key, []);
          }
          if (typeof value === "function") {
            var _map$get;
            (_map$get = map.get(key)) == null || _map$get.push(value);
            acc[key] = function() {
              var _map$get2;
              for (var _len = arguments.length, args = new Array(_len), _key = 0;_key < _len; _key++) {
                args[_key] = arguments[_key];
              }
              return (_map$get2 = map.get(key)) == null ? undefined : _map$get2.map((fn) => fn(...args)).find((val) => val !== undefined);
            };
          }
        } else {
          acc[key] = value;
        }
      });
      return acc;
    }, {})
  };
}
function useInteractions(propsList) {
  if (propsList === undefined) {
    propsList = [];
  }
  const referenceDeps = propsList.map((key) => key == null ? undefined : key.reference);
  const floatingDeps = propsList.map((key) => key == null ? undefined : key.floating);
  const itemDeps = propsList.map((key) => key == null ? undefined : key.item);
  const getReferenceProps = React4.useCallback((userProps) => mergeProps(userProps, propsList, "reference"), referenceDeps);
  const getFloatingProps = React4.useCallback((userProps) => mergeProps(userProps, propsList, "floating"), floatingDeps);
  const getItemProps = React4.useCallback((userProps) => mergeProps(userProps, propsList, "item"), itemDeps);
  return React4.useMemo(() => ({
    getReferenceProps,
    getFloatingProps,
    getItemProps
  }), [getReferenceProps, getFloatingProps, getItemProps]);
}
function getArgsWithCustomFloatingHeight(state, height) {
  return {
    ...state,
    rects: {
      ...state.rects,
      floating: {
        ...state.rects.floating,
        height
      }
    }
  };
}
var inner = (props) => ({
  name: "inner",
  options: props,
  async fn(state) {
    const {
      listRef,
      overflowRef,
      onFallbackChange,
      offset: innerOffset = 0,
      index: index3 = 0,
      minItemsVisible = 4,
      referenceOverflowThreshold = 0,
      scrollRef,
      ...detectOverflowOptions
    } = evaluate(props, state);
    const {
      rects,
      elements: {
        floating
      }
    } = state;
    const item = listRef.current[index3];
    const scrollEl = (scrollRef == null ? undefined : scrollRef.current) || floating;
    const clientTop = floating.clientTop || scrollEl.clientTop;
    const floatingIsBordered = floating.clientTop !== 0;
    const scrollElIsBordered = scrollEl.clientTop !== 0;
    const floatingIsScrollEl = floating === scrollEl;
    if (true) {
      if (!state.placement.startsWith("bottom")) {
        warn('`placement` side must be "bottom" when using the `inner`', "middleware.");
      }
    }
    if (!item) {
      return {};
    }
    const nextArgs = {
      ...state,
      ...await offset3(-item.offsetTop - floating.clientTop - rects.reference.height / 2 - item.offsetHeight / 2 - innerOffset).fn(state)
    };
    const overflow = await detectOverflow2(getArgsWithCustomFloatingHeight(nextArgs, scrollEl.scrollHeight + clientTop + floating.clientTop), detectOverflowOptions);
    const refOverflow = await detectOverflow2(nextArgs, {
      ...detectOverflowOptions,
      elementContext: "reference"
    });
    const diffY = max(0, overflow.top);
    const nextY = nextArgs.y + diffY;
    const isScrollable = scrollEl.scrollHeight > scrollEl.clientHeight;
    const rounder = isScrollable ? (v7) => v7 : round;
    const maxHeight = rounder(max(0, scrollEl.scrollHeight + (floatingIsBordered && floatingIsScrollEl || scrollElIsBordered ? clientTop * 2 : 0) - diffY - max(0, overflow.bottom)));
    scrollEl.style.maxHeight = maxHeight + "px";
    scrollEl.scrollTop = diffY;
    if (onFallbackChange) {
      const shouldFallback = scrollEl.offsetHeight < item.offsetHeight * min(minItemsVisible, listRef.current.length) - 1 || refOverflow.top >= -referenceOverflowThreshold || refOverflow.bottom >= -referenceOverflowThreshold;
      ReactDOM2.flushSync(() => onFallbackChange(shouldFallback));
    }
    if (overflowRef) {
      overflowRef.current = await detectOverflow2(getArgsWithCustomFloatingHeight({
        ...nextArgs,
        y: nextY
      }, scrollEl.offsetHeight + clientTop + floating.clientTop), detectOverflowOptions);
    }
    return {
      y: nextY
    };
  }
});
function useInnerOffset(context, props) {
  const {
    open,
    elements
  } = context;
  const {
    enabled = true,
    overflowRef,
    scrollRef,
    onChange: unstable_onChange
  } = props;
  const onChange = useEffectEvent(unstable_onChange);
  const controlledScrollingRef = React4.useRef(false);
  const prevScrollTopRef = React4.useRef(null);
  const initialOverflowRef = React4.useRef(null);
  React4.useEffect(() => {
    if (!enabled)
      return;
    function onWheel(e7) {
      if (e7.ctrlKey || !el || overflowRef.current == null) {
        return;
      }
      const dY = e7.deltaY;
      const isAtTop = overflowRef.current.top >= -0.5;
      const isAtBottom = overflowRef.current.bottom >= -0.5;
      const remainingScroll = el.scrollHeight - el.clientHeight;
      const sign = dY < 0 ? -1 : 1;
      const method = dY < 0 ? "max" : "min";
      if (el.scrollHeight <= el.clientHeight) {
        return;
      }
      if (!isAtTop && dY > 0 || !isAtBottom && dY < 0) {
        e7.preventDefault();
        ReactDOM2.flushSync(() => {
          onChange((d7) => d7 + Math[method](dY, remainingScroll * sign));
        });
      } else if (/firefox/i.test(getUserAgent())) {
        el.scrollTop += dY;
      }
    }
    const el = (scrollRef == null ? undefined : scrollRef.current) || elements.floating;
    if (open && el) {
      el.addEventListener("wheel", onWheel);
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
        if (overflowRef.current != null) {
          initialOverflowRef.current = {
            ...overflowRef.current
          };
        }
      });
      return () => {
        prevScrollTopRef.current = null;
        initialOverflowRef.current = null;
        el.removeEventListener("wheel", onWheel);
      };
    }
  }, [enabled, open, elements.floating, overflowRef, scrollRef, onChange]);
  const floating = React4.useMemo(() => ({
    onKeyDown() {
      controlledScrollingRef.current = true;
    },
    onWheel() {
      controlledScrollingRef.current = false;
    },
    onPointerMove() {
      controlledScrollingRef.current = false;
    },
    onScroll() {
      const el = (scrollRef == null ? undefined : scrollRef.current) || elements.floating;
      if (!overflowRef.current || !el || !controlledScrollingRef.current) {
        return;
      }
      if (prevScrollTopRef.current !== null) {
        const scrollDiff = el.scrollTop - prevScrollTopRef.current;
        if (overflowRef.current.bottom < -0.5 && scrollDiff < -1 || overflowRef.current.top < -0.5 && scrollDiff > 1) {
          ReactDOM2.flushSync(() => onChange((d7) => d7 + scrollDiff));
        }
      }
      requestAnimationFrame(() => {
        prevScrollTopRef.current = el.scrollTop;
      });
    }
  }), [elements.floating, onChange, overflowRef, scrollRef]);
  return React4.useMemo(() => enabled ? {
    floating
  } : {}, [enabled, floating]);
}

// node_modules/@headlessui/react/dist/internal/floating.js
import * as j6 from "react";
import { createContext as _3, useCallback as ae, useContext as T8, useMemo as R4, useRef as ue, useState as v7 } from "react";
var y5 = _3({ styles: undefined, setReference: () => {}, setFloating: () => {}, getReferenceProps: () => ({}), getFloatingProps: () => ({}), slot: {} });
y5.displayName = "FloatingContext";
var $ = _3(null);
$.displayName = "PlacementContext";
function ye(e7) {
  return R4(() => e7 ? typeof e7 == "string" ? { to: e7 } : e7 : null, [e7]);
}
function Fe() {
  return T8(y5).setReference;
}
function be() {
  return T8(y5).getReferenceProps;
}
function Te() {
  let { getFloatingProps: e7, slot: t9 } = T8(y5);
  return ae((...n12) => Object.assign({}, e7(...n12), { "data-anchor": t9.anchor }), [e7, t9]);
}
function Re(e7 = null) {
  e7 === false && (e7 = null), typeof e7 == "string" && (e7 = { to: e7 });
  let t9 = T8($), n12 = R4(() => e7, [JSON.stringify(e7, (l12, o15) => {
    var u16;
    return (u16 = o15 == null ? undefined : o15.outerHTML) != null ? u16 : o15;
  })]);
  n(() => {
    t9 == null || t9(n12 != null ? n12 : null);
  }, [t9, n12]);
  let r12 = T8(y5);
  return R4(() => [r12.setFloating, e7 ? r12.styles : {}], [r12.setFloating, e7, r12.styles]);
}
var D5 = 4;
function Ae({ children: e7, enabled: t9 = true }) {
  let [n12, r12] = v7(null), [l12, o15] = v7(0), u16 = ue(null), [f13, s12] = v7(null);
  ce(f13);
  let i10 = t9 && n12 !== null && f13 !== null, { to: F3 = "bottom", gap: E9 = 0, offset: A4 = 0, padding: c10 = 0, inner: h7 } = ge(n12, f13), [a16, p6 = "center"] = F3.split(" ");
  n(() => {
    i10 && o15(0);
  }, [i10]);
  let { refs: b6, floatingStyles: S7, context: g5 } = useFloating2({ open: i10, placement: a16 === "selection" ? p6 === "center" ? "bottom" : `bottom-${p6}` : p6 === "center" ? `${a16}` : `${a16}-${p6}`, strategy: "absolute", transform: false, middleware: [offset3({ mainAxis: a16 === "selection" ? 0 : E9, crossAxis: A4 }), shift3({ padding: c10 }), a16 !== "selection" && flip3({ padding: c10 }), a16 === "selection" && h7 ? inner({ ...h7, padding: c10, overflowRef: u16, offset: l12, minItemsVisible: D5, referenceOverflowThreshold: c10, onFallbackChange(P4) {
    var L6, N3;
    if (!P4)
      return;
    let d7 = g5.elements.floating;
    if (!d7)
      return;
    let M5 = parseFloat(getComputedStyle(d7).scrollPaddingBottom) || 0, I5 = Math.min(D5, d7.childElementCount), W2 = 0, B = 0;
    for (let m8 of (N3 = (L6 = g5.elements.floating) == null ? undefined : L6.childNodes) != null ? N3 : [])
      if (n5(m8)) {
        let x5 = m8.offsetTop, k6 = x5 + m8.clientHeight + M5, H6 = d7.scrollTop, U3 = H6 + d7.clientHeight;
        if (x5 >= H6 && k6 <= U3)
          I5--;
        else {
          B = Math.max(0, Math.min(k6, U3) - Math.max(x5, H6)), W2 = m8.clientHeight;
          break;
        }
      }
    I5 >= 1 && o15((m8) => {
      let x5 = W2 * I5 - B + M5;
      return m8 >= x5 ? m8 : x5;
    });
  } }) : null, size3({ padding: c10, apply({ availableWidth: P4, availableHeight: d7, elements: M5 }) {
    Object.assign(M5.floating.style, { overflow: "auto", maxWidth: `${P4}px`, maxHeight: `min(var(--anchor-max-height, 100vh), ${d7}px)` });
  } })].filter(Boolean), whileElementsMounted: autoUpdate }), [w8 = a16, V3 = p6] = g5.placement.split("-");
  a16 === "selection" && (w8 = "selection");
  let G3 = R4(() => ({ anchor: [w8, V3].filter(Boolean).join(" ") }), [w8, V3]), K3 = useInnerOffset(g5, { overflowRef: u16, onChange: o15 }), { getReferenceProps: Q, getFloatingProps: X } = useInteractions([K3]), Y2 = o4((P4) => {
    s12(P4), b6.setFloating(P4);
  });
  return j6.createElement($.Provider, { value: r12 }, j6.createElement(y5.Provider, { value: { setFloating: Y2, setReference: b6.setReference, styles: S7, getReferenceProps: Q, getFloatingProps: X, slot: G3 } }, e7));
}
function ce(e7) {
  n(() => {
    if (!e7)
      return;
    let t9 = new MutationObserver(() => {
      let n12 = window.getComputedStyle(e7).maxHeight, r12 = parseFloat(n12);
      if (isNaN(r12))
        return;
      let l12 = parseInt(n12);
      isNaN(l12) || r12 !== l12 && (e7.style.maxHeight = `${Math.ceil(r12)}px`);
    });
    return t9.observe(e7, { attributes: true, attributeFilter: ["style"] }), () => {
      t9.disconnect();
    };
  }, [e7]);
}
function ge(e7, t9) {
  var o15, u16, f13;
  let n12 = O3((o15 = e7 == null ? undefined : e7.gap) != null ? o15 : "var(--anchor-gap, 0)", t9), r12 = O3((u16 = e7 == null ? undefined : e7.offset) != null ? u16 : "var(--anchor-offset, 0)", t9), l12 = O3((f13 = e7 == null ? undefined : e7.padding) != null ? f13 : "var(--anchor-padding, 0)", t9);
  return { ...e7, gap: n12, offset: r12, padding: l12 };
}
function O3(e7, t9, n12 = undefined) {
  let r12 = p(), l12 = o4((s12, i10) => {
    if (s12 == null)
      return [n12, null];
    if (typeof s12 == "number")
      return [s12, null];
    if (typeof s12 == "string") {
      if (!i10)
        return [n12, null];
      let F3 = J2(s12, i10);
      return [F3, (E9) => {
        let A4 = q(s12);
        {
          let c10 = A4.map((h7) => window.getComputedStyle(i10).getPropertyValue(h7));
          r12.requestAnimationFrame(function h() {
            r12.nextFrame(h);
            let a16 = false;
            for (let [b6, S7] of A4.entries()) {
              let g5 = window.getComputedStyle(i10).getPropertyValue(S7);
              if (c10[b6] !== g5) {
                c10[b6] = g5, a16 = true;
                break;
              }
            }
            if (!a16)
              return;
            let p6 = J2(s12, i10);
            F3 !== p6 && (E9(p6), F3 = p6);
          });
        }
        return r12.dispose;
      }];
    }
    return [n12, null];
  }), o15 = R4(() => l12(e7, t9)[0], [e7, t9]), [u16 = o15, f13] = v7();
  return n(() => {
    let [s12, i10] = l12(e7, t9);
    if (f13(s12), !!i10)
      return i10(f13);
  }, [e7, t9]), u16;
}
function q(e7) {
  let t9 = /var\((.*)\)/.exec(e7);
  if (t9) {
    let n12 = t9[1].indexOf(",");
    if (n12 === -1)
      return [t9[1]];
    let r12 = t9[1].slice(0, n12).trim(), l12 = t9[1].slice(n12 + 1).trim();
    return l12 ? [r12, ...q(l12)] : [r12];
  }
  return [];
}
function J2(e7, t9) {
  let n12 = document.createElement("div");
  t9.appendChild(n12), n12.style.setProperty("margin-top", "0px", "important"), n12.style.setProperty("margin-top", e7, "important");
  let r12 = parseFloat(window.getComputedStyle(n12).marginTop) || 0;
  return t9.removeChild(n12), r12;
}

// node_modules/@headlessui/react/dist/internal/frozen.js
import r12, { cloneElement as l12, isValidElement as c10, useState as a16 } from "react";
function f13({ children: t9, freeze: e7 }, o15) {
  let n12 = u16(e7, t9);
  return c10(n12) ? l12(n12, { ref: o15 }) : r12.createElement(r12.Fragment, null, n12);
}
var s12 = r12.forwardRef(f13);
function u16(t9, e7) {
  let [o15, n12] = a16(e7);
  return !t9 && o15 !== e7 && n12(e7), t9 ? o15 : e7;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
import r13, { createContext as l13, useContext as d7 } from "react";
var n12 = l13(null);
n12.displayName = "OpenClosedContext";
var i10 = ((e7) => (e7[e7.Open = 1] = "Open", e7[e7.Closed = 2] = "Closed", e7[e7.Closing = 4] = "Closing", e7[e7.Opening = 8] = "Opening", e7))(i10 || {});
function u17() {
  return d7(n12);
}
function c11({ value: o15, children: t9 }) {
  return r13.createElement(n12.Provider, { value: o15 }, t9);
}
function s13({ children: o15 }) {
  return r13.createElement(n12.Provider, { value: null }, o15);
}

// node_modules/@headlessui/react/dist/utils/document-ready.js
function t9(n13) {
  function e7() {
    document.readyState !== "loading" && (n13(), document.removeEventListener("DOMContentLoaded", e7));
  }
  typeof window != "undefined" && typeof document != "undefined" && (document.addEventListener("DOMContentLoaded", e7), e7());
}

// node_modules/@headlessui/react/dist/utils/active-element-history.js
var n13 = [];
t9(() => {
  function e7(t10) {
    if (!i4(t10.target) || t10.target === document.body || n13[0] === t10.target)
      return;
    let r14 = t10.target;
    r14 = r14.closest(E5), n13.unshift(r14 != null ? r14 : t10.target), n13 = n13.filter((o15) => o15 != null && o15.isConnected), n13.splice(10);
  }
  window.addEventListener("click", e7, { capture: true }), window.addEventListener("mousedown", e7, { capture: true }), window.addEventListener("focus", e7, { capture: true }), document.body.addEventListener("click", e7, { capture: true }), document.body.addEventListener("mousedown", e7, { capture: true }), document.body.addEventListener("focus", e7, { capture: true });
});

// node_modules/@headlessui/react/dist/utils/calculate-active-index.js
function u18(l14) {
  throw new Error("Unexpected object: " + l14);
}
var c12 = ((i11) => (i11[i11.First = 0] = "First", i11[i11.Previous = 1] = "Previous", i11[i11.Next = 2] = "Next", i11[i11.Last = 3] = "Last", i11[i11.Specific = 4] = "Specific", i11[i11.Nothing = 5] = "Nothing", i11))(c12 || {});
function f14(l14, n14) {
  let t10 = n14.resolveItems();
  if (t10.length <= 0)
    return null;
  let r14 = n14.resolveActiveIndex(), s14 = r14 != null ? r14 : -1;
  switch (l14.focus) {
    case 0: {
      for (let e7 = 0;e7 < t10.length; ++e7)
        if (!n14.resolveDisabled(t10[e7], e7, t10))
          return e7;
      return r14;
    }
    case 1: {
      s14 === -1 && (s14 = t10.length);
      for (let e7 = s14 - 1;e7 >= 0; --e7)
        if (!n14.resolveDisabled(t10[e7], e7, t10))
          return e7;
      return r14;
    }
    case 2: {
      for (let e7 = s14 + 1;e7 < t10.length; ++e7)
        if (!n14.resolveDisabled(t10[e7], e7, t10))
          return e7;
      return r14;
    }
    case 3: {
      for (let e7 = t10.length - 1;e7 >= 0; --e7)
        if (!n14.resolveDisabled(t10[e7], e7, t10))
          return e7;
      return r14;
    }
    case 4: {
      for (let e7 = 0;e7 < t10.length; ++e7)
        if (n14.resolveId(t10[e7], e7, t10) === l14.id)
          return e7;
      return r14;
    }
    case 5:
      return null;
    default:
      u18(l14);
  }
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
import i11, { Fragment as R5, createContext as E9, useContext as f15, useEffect as A4, useMemo as G3, useRef as x5, useState as b6 } from "react";
import { createPortal as H6 } from "react-dom";

// node_modules/@headlessui/react/dist/hooks/use-on-unmount.js
import { useEffect as u19, useRef as n14 } from "react";
function c13(t10) {
  let r14 = o4(t10), e7 = n14(false);
  u19(() => (e7.current = false, () => {
    e7.current = true, t(() => {
      e7.current && r14();
    });
  }), [r14]);
}

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
import * as t10 from "react";
function s14() {
  let r14 = typeof document == "undefined";
  return "useSyncExternalStore" in t10 ? ((o15) => o15.useSyncExternalStore)(t10)(() => () => {}, () => false, () => !r14) : false;
}
function l14() {
  let r14 = s14(), [e7, n15] = t10.useState(s.isHandoffComplete);
  return e7 && s.isHandoffComplete === false && n15(false), t10.useEffect(() => {
    e7 !== true && n15(true);
  }, [e7]), t10.useEffect(() => s.handoff(), []), r14 ? false : e7;
}

// node_modules/@headlessui/react/dist/internal/portal-force-root.js
import t11, { createContext as r14, useContext as c14 } from "react";
var e7 = r14(false);
function a17() {
  return c14(e7);
}
function l15(o15) {
  return t11.createElement(e7.Provider, { value: o15.force }, o15.children);
}

// node_modules/@headlessui/react/dist/components/portal/portal.js
"use client";
function j7(e8) {
  let o15 = a17(), l16 = f15(c15), [r15, p6] = b6(() => {
    var s15;
    if (!o15 && l16 !== null)
      return (s15 = l16.current) != null ? s15 : null;
    if (s.isServer)
      return null;
    let t12 = e8 == null ? undefined : e8.getElementById("headlessui-portal-root");
    if (t12)
      return t12;
    if (e8 === null)
      return null;
    let n15 = e8.createElement("div");
    return n15.setAttribute("id", "headlessui-portal-root"), e8.body.appendChild(n15);
  });
  return A4(() => {
    r15 !== null && (e8 != null && e8.body.contains(r15) || e8 == null || e8.body.appendChild(r15));
  }, [r15, e8]), A4(() => {
    o15 || l16 !== null && p6(l16.current);
  }, [l16, p6, o15]), r15;
}
var _4 = R5;
var I5 = Y(function(o15, l16) {
  let { ownerDocument: r15 = null, ...p6 } = o15, t12 = x5(null), n15 = y(T((a18) => {
    t12.current = a18;
  }), l16), s15 = u13(t12.current), C8 = r15 != null ? r15 : s15, u20 = j7(C8), y6 = f15(m8), g5 = p(), v8 = l14(), M5 = K();
  return c13(() => {
    var a18;
    u20 && u20.childNodes.length <= 0 && ((a18 = u20.parentElement) == null || a18.removeChild(u20));
  }), !u20 || !v8 ? null : H6(i11.createElement("div", { "data-headlessui-portal": "", ref: (a18) => {
    g5.dispose(), y6 && a18 && g5.add(y6.register(a18));
  } }, M5({ ourProps: { ref: n15 }, theirProps: p6, slot: {}, defaultTag: _4, name: "Portal" })), u20);
});
function D6(e8, o15) {
  let l16 = y(o15), { enabled: r15 = true, ownerDocument: p6, ...t12 } = e8, n15 = K();
  return r15 ? i11.createElement(I5, { ...t12, ownerDocument: p6, ref: l16 }) : n15({ ourProps: { ref: l16 }, theirProps: t12, slot: {}, defaultTag: _4, name: "Portal" });
}
var J3 = R5;
var c15 = E9(null);
function X(e8, o15) {
  let { target: l16, ...r15 } = e8, t12 = { ref: y(o15) }, n15 = K();
  return i11.createElement(c15.Provider, { value: l16 }, n15({ ourProps: t12, theirProps: r15, defaultTag: J3, name: "Popover.Group" }));
}
var m8 = E9(null);
function oe() {
  let e8 = f15(m8), o15 = x5([]), l16 = o4((t12) => (o15.current.push(t12), e8 && e8.register(t12), () => r15(t12))), r15 = o4((t12) => {
    let n15 = o15.current.indexOf(t12);
    n15 !== -1 && o15.current.splice(n15, 1), e8 && e8.unregister(t12);
  }), p6 = G3(() => ({ register: l16, unregister: r15, portals: o15 }), [l16, r15, o15]);
  return [o15, G3(() => function({ children: n15 }) {
    return i11.createElement(m8.Provider, { value: p6 }, n15);
  }, [p6])];
}
var k6 = Y(D6);
var B = Y(X);
var le = Object.assign(k6, { Group: B });

// node_modules/@headlessui/react/dist/utils/element-movement.js
var c16 = { Idle: { kind: "Idle" }, Tracked: (e8) => ({ kind: "Tracked", position: e8 }), Moved: { kind: "Moved" } };
function a18(e8) {
  let t12 = e8.getBoundingClientRect();
  return `${t12.x},${t12.y}`;
}
function p6(e8, t12, i12) {
  let n15 = o2();
  if (t12.kind === "Tracked") {
    let o15 = function() {
      d8 !== a18(e8) && (n15.dispose(), i12());
    };
    var f16 = o15;
    let { position: d8 } = t12, s15 = new ResizeObserver(o15);
    s15.observe(e8), n15.add(() => s15.disconnect()), n15.addEventListener(window, "scroll", o15, { passive: true }), n15.addEventListener(window, "resize", o15);
  }
  return () => n15.dispose();
}

// node_modules/@headlessui/react/dist/components/combobox/combobox-machine.js
var I6 = Object.defineProperty;
var h7 = (t12, i12, e8) => (i12 in t12) ? I6(t12, i12, { enumerable: true, configurable: true, writable: true, value: e8 }) : t12[i12] = e8;
var f16 = (t12, i12, e8) => (h7(t12, typeof i12 != "symbol" ? i12 + "" : i12, e8), e8);
var P4 = ((e8) => (e8[e8.Open = 0] = "Open", e8[e8.Closed = 1] = "Closed", e8))(P4 || {});
var k7 = ((e8) => (e8[e8.Single = 0] = "Single", e8[e8.Multi = 1] = "Multi", e8))(k7 || {});
var _5 = ((n15) => (n15[n15.Pointer = 0] = "Pointer", n15[n15.Focus = 1] = "Focus", n15[n15.Other = 2] = "Other", n15))(_5 || {});
var D7 = ((l16) => (l16[l16.OpenCombobox = 0] = "OpenCombobox", l16[l16.CloseCombobox = 1] = "CloseCombobox", l16[l16.GoToOption = 2] = "GoToOption", l16[l16.SetTyping = 3] = "SetTyping", l16[l16.RegisterOption = 4] = "RegisterOption", l16[l16.UnregisterOption = 5] = "UnregisterOption", l16[l16.DefaultToFirstOption = 6] = "DefaultToFirstOption", l16[l16.SetActivationTrigger = 7] = "SetActivationTrigger", l16[l16.UpdateVirtualConfiguration = 8] = "UpdateVirtualConfiguration", l16[l16.SetInputElement = 9] = "SetInputElement", l16[l16.SetButtonElement = 10] = "SetButtonElement", l16[l16.SetOptionsElement = 11] = "SetOptionsElement", l16[l16.MarkInputAsMoved = 12] = "MarkInputAsMoved", l16))(D7 || {});
function v8(t12, i12 = (e8) => e8) {
  let e8 = t12.activeOptionIndex !== null ? t12.options[t12.activeOptionIndex] : null, n15 = i12(t12.options.slice()), o15 = n15.length > 0 && n15[0].dataRef.current.order !== null ? n15.sort((u20, a19) => u20.dataRef.current.order - a19.dataRef.current.order) : G2(n15, (u20) => u20.dataRef.current.domRef.current), r15 = e8 ? o15.indexOf(e8) : null;
  return r15 === -1 && (r15 = null), { options: o15, activeOptionIndex: r15 };
}
var j8 = { [1](t12) {
  var e8;
  if ((e8 = t12.dataRef.current) != null && e8.disabled || t12.comboboxState === 1)
    return t12;
  let i12 = t12.inputElement ? c16.Tracked(a18(t12.inputElement)) : t12.inputPositionState;
  return { ...t12, activeOptionIndex: null, comboboxState: 1, isTyping: false, activationTrigger: 2, inputPositionState: i12, __demoMode: false };
}, [0](t12) {
  var i12, e8;
  if ((i12 = t12.dataRef.current) != null && i12.disabled || t12.comboboxState === 0)
    return t12;
  if ((e8 = t12.dataRef.current) != null && e8.value) {
    let n15 = t12.dataRef.current.calculateIndex(t12.dataRef.current.value);
    if (n15 !== -1)
      return { ...t12, activeOptionIndex: n15, comboboxState: 0, __demoMode: false, inputPositionState: c16.Idle };
  }
  return { ...t12, comboboxState: 0, inputPositionState: c16.Idle, __demoMode: false };
}, [3](t12, i12) {
  return t12.isTyping === i12.isTyping ? t12 : { ...t12, isTyping: i12.isTyping };
}, [2](t12, i12) {
  var r15, u20, a19, s15;
  if ((r15 = t12.dataRef.current) != null && r15.disabled || t12.optionsElement && !((u20 = t12.dataRef.current) != null && u20.optionsPropsRef.current.static) && t12.comboboxState === 1)
    return t12;
  if (t12.virtual) {
    let { options: p7, disabled: c17 } = t12.virtual, m9 = i12.focus === c12.Specific ? i12.idx : f14(i12, { resolveItems: () => p7, resolveActiveIndex: () => {
      var l16, x6;
      return (x6 = (l16 = t12.activeOptionIndex) != null ? l16 : p7.findIndex((S7) => !c17(S7))) != null ? x6 : null;
    }, resolveDisabled: c17, resolveId() {
      throw new Error("Function not implemented.");
    } }), b7 = (a19 = i12.trigger) != null ? a19 : 2;
    return t12.activeOptionIndex === m9 && t12.activationTrigger === b7 ? t12 : { ...t12, activeOptionIndex: m9, activationTrigger: b7, isTyping: false, __demoMode: false };
  }
  let e8 = v8(t12);
  if (e8.activeOptionIndex === null) {
    let p7 = e8.options.findIndex((c17) => !c17.dataRef.current.disabled);
    p7 !== -1 && (e8.activeOptionIndex = p7);
  }
  let n15 = i12.focus === c12.Specific ? i12.idx : f14(i12, { resolveItems: () => e8.options, resolveActiveIndex: () => e8.activeOptionIndex, resolveId: (p7) => p7.id, resolveDisabled: (p7) => p7.dataRef.current.disabled }), o15 = (s15 = i12.trigger) != null ? s15 : 2;
  return t12.activeOptionIndex === n15 && t12.activationTrigger === o15 ? t12 : { ...t12, ...e8, isTyping: false, activeOptionIndex: n15, activationTrigger: o15, __demoMode: false };
}, [4]: (t12, i12) => {
  var r15, u20, a19, s15;
  if ((r15 = t12.dataRef.current) != null && r15.virtual)
    return { ...t12, options: [...t12.options, i12.payload] };
  let e8 = i12.payload, n15 = v8(t12, (p7) => (p7.push(e8), p7));
  t12.activeOptionIndex === null && (a19 = (u20 = t12.dataRef.current).isSelected) != null && a19.call(u20, i12.payload.dataRef.current.value) && (n15.activeOptionIndex = n15.options.indexOf(e8));
  let o15 = { ...t12, ...n15, activationTrigger: 2 };
  return (s15 = t12.dataRef.current) != null && s15.__demoMode && t12.dataRef.current.value === undefined && (o15.activeOptionIndex = 0), o15;
}, [5]: (t12, i12) => {
  var n15;
  if ((n15 = t12.dataRef.current) != null && n15.virtual)
    return { ...t12, options: t12.options.filter((o15) => o15.id !== i12.id) };
  let e8 = v8(t12, (o15) => {
    let r15 = o15.findIndex((u20) => u20.id === i12.id);
    return r15 !== -1 && o15.splice(r15, 1), o15;
  });
  return { ...t12, ...e8, activationTrigger: 2 };
}, [6]: (t12, i12) => t12.defaultToFirstOption === i12.value ? t12 : { ...t12, defaultToFirstOption: i12.value }, [7]: (t12, i12) => t12.activationTrigger === i12.trigger ? t12 : { ...t12, activationTrigger: i12.trigger }, [8]: (t12, i12) => {
  var n15, o15;
  if (t12.virtual === null)
    return { ...t12, virtual: { options: i12.options, disabled: (n15 = i12.disabled) != null ? n15 : () => false } };
  if (t12.virtual.options === i12.options && t12.virtual.disabled === i12.disabled)
    return t12;
  let e8 = t12.activeOptionIndex;
  if (t12.activeOptionIndex !== null) {
    let r15 = i12.options.indexOf(t12.virtual.options[t12.activeOptionIndex]);
    r15 !== -1 ? e8 = r15 : e8 = null;
  }
  return { ...t12, activeOptionIndex: e8, virtual: { options: i12.options, disabled: (o15 = i12.disabled) != null ? o15 : () => false } };
}, [9]: (t12, i12) => t12.inputElement === i12.element ? t12 : { ...t12, inputElement: i12.element }, [10]: (t12, i12) => t12.buttonElement === i12.element ? t12 : { ...t12, buttonElement: i12.element }, [11]: (t12, i12) => t12.optionsElement === i12.element ? t12 : { ...t12, optionsElement: i12.element }, [12](t12) {
  return t12.inputPositionState.kind !== "Tracked" ? t12 : { ...t12, inputPositionState: c16.Moved };
} };

class y6 extends T3 {
  constructor(e8) {
    super(e8);
    f16(this, "actions", { onChange: (e9) => {
      let { onChange: n15, compare: o15, mode: r15, value: u20 } = this.state.dataRef.current;
      return u(r15, { [0]: () => n15 == null ? undefined : n15(e9), [1]: () => {
        let a19 = u20.slice(), s15 = a19.findIndex((p7) => o15(p7, e9));
        return s15 === -1 ? a19.push(e9) : a19.splice(s15, 1), n15 == null ? undefined : n15(a19);
      } });
    }, registerOption: (e9, n15) => (this.send({ type: 4, payload: { id: e9, dataRef: n15 } }), () => {
      this.state.activeOptionIndex === this.state.dataRef.current.calculateIndex(n15.current.value) && this.send({ type: 6, value: true }), this.send({ type: 5, id: e9 });
    }), goToOption: (e9, n15) => (this.send({ type: 6, value: false }), this.send({ type: 2, ...e9, trigger: n15 })), setIsTyping: (e9) => {
      this.send({ type: 3, isTyping: e9 });
    }, closeCombobox: () => {
      var e9, n15;
      this.send({ type: 1 }), this.send({ type: 6, value: false }), (n15 = (e9 = this.state.dataRef.current).onClose) == null || n15.call(e9);
    }, openCombobox: () => {
      this.send({ type: 0 }), this.send({ type: 6, value: true });
    }, setActivationTrigger: (e9) => {
      this.send({ type: 7, trigger: e9 });
    }, selectActiveOption: () => {
      let e9 = this.selectors.activeOptionIndex(this.state);
      if (e9 !== null) {
        if (this.actions.setIsTyping(false), this.state.virtual)
          this.actions.onChange(this.state.virtual.options[e9]);
        else {
          let { dataRef: n15 } = this.state.options[e9];
          this.actions.onChange(n15.current.value);
        }
        this.actions.goToOption({ focus: c12.Specific, idx: e9 });
      }
    }, setInputElement: (e9) => {
      this.send({ type: 9, element: e9 });
    }, setButtonElement: (e9) => {
      this.send({ type: 10, element: e9 });
    }, setOptionsElement: (e9) => {
      this.send({ type: 11, element: e9 });
    } });
    f16(this, "selectors", { activeDescendantId: (e9) => {
      var o15, r15;
      let n15 = this.selectors.activeOptionIndex(e9);
      if (n15 !== null)
        return e9.virtual ? (r15 = e9.options.find((u20) => !u20.dataRef.current.disabled && e9.dataRef.current.compare(u20.dataRef.current.value, e9.virtual.options[n15]))) == null ? undefined : r15.id : (o15 = e9.options[n15]) == null ? undefined : o15.id;
    }, activeOptionIndex: (e9) => {
      if (e9.defaultToFirstOption && e9.activeOptionIndex === null && (e9.virtual ? e9.virtual.options.length > 0 : e9.options.length > 0)) {
        if (e9.virtual) {
          let { options: o15, disabled: r15 } = e9.virtual, u20 = o15.findIndex((a19) => {
            var s15;
            return !((s15 = r15 == null ? undefined : r15(a19)) != null && s15);
          });
          if (u20 !== -1)
            return u20;
        }
        let n15 = e9.options.findIndex((o15) => !o15.dataRef.current.disabled);
        if (n15 !== -1)
          return n15;
      }
      return e9.activeOptionIndex;
    }, activeOption: (e9) => {
      var o15, r15;
      let n15 = this.selectors.activeOptionIndex(e9);
      return n15 === null ? null : e9.virtual ? e9.virtual.options[n15 != null ? n15 : 0] : (r15 = (o15 = e9.options[n15]) == null ? undefined : o15.dataRef.current.value) != null ? r15 : null;
    }, isActive: (e9, n15, o15) => {
      var u20;
      let r15 = this.selectors.activeOptionIndex(e9);
      return r15 === null ? false : e9.virtual ? r15 === e9.dataRef.current.calculateIndex(n15) : ((u20 = e9.options[r15]) == null ? undefined : u20.id) === o15;
    }, shouldScrollIntoView: (e9, n15, o15) => !(e9.virtual || e9.__demoMode || e9.comboboxState !== 0 || e9.activationTrigger === 0 || !this.selectors.isActive(e9, n15, o15)), didInputMove(e9) {
      return e9.inputPositionState.kind === "Moved";
    } });
    {
      let n15 = this.state.id, o15 = x2.get(null);
      this.disposables.add(o15.on(k4.Push, (r15) => {
        !o15.selectors.isTop(r15, n15) && this.state.comboboxState === 0 && this.actions.closeCombobox();
      })), this.on(0, () => o15.actions.push(n15)), this.on(1, () => o15.actions.pop(n15));
    }
    this.disposables.group((n15) => {
      this.on(1, (o15) => {
        o15.inputElement && (n15.dispose(), n15.add(p6(o15.inputElement, o15.inputPositionState, () => {
          this.send({ type: 12 });
        })));
      });
    });
  }
  static new({ id: e8, virtual: n15 = null, __demoMode: o15 = false }) {
    var r15;
    return new y6({ id: e8, dataRef: { current: {} }, comboboxState: o15 ? 0 : 1, isTyping: false, options: [], virtual: n15 ? { options: n15.options, disabled: (r15 = n15.disabled) != null ? r15 : () => false } : null, activeOptionIndex: null, activationTrigger: 2, inputElement: null, buttonElement: null, optionsElement: null, __demoMode: o15, inputPositionState: c16.Idle });
  }
  reduce(e8, n15) {
    return u(n15.type, j8, e8, n15);
  }
}

// node_modules/@headlessui/react/dist/components/combobox/combobox-machine-glue.js
import { createContext as r15, useContext as a19, useMemo as m9 } from "react";
var u20 = r15(null);
function p7(n15) {
  let o15 = a19(u20);
  if (o15 === null) {
    let e8 = new Error(`<${n15} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, b7), e8;
  }
  return o15;
}
function b7({ id: n15, virtual: o15 = null, __demoMode: e8 = false }) {
  let t12 = m9(() => y6.new({ id: n15, virtual: o15, __demoMode: e8 }), []);
  return c13(() => t12.dispose()), t12;
}

// node_modules/@headlessui/react/dist/components/combobox/combobox.js
"use client";
var de2 = he(null);
de2.displayName = "ComboboxDataContext";
function te(T9) {
  let O4 = Ae2(de2);
  if (O4 === null) {
    let e8 = new Error(`<${T9} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e8, te), e8;
  }
  return O4;
}
var Le = he(null);
function Eo(T9) {
  let O4 = p7("VirtualProvider"), e8 = te("VirtualProvider"), { options: o15 } = e8.virtual, E10 = S3(O4, (a20) => a20.optionsElement), [R6, y7] = ae2(() => {
    let a20 = E10;
    if (!a20)
      return [0, 0];
    let u21 = window.getComputedStyle(a20);
    return [parseFloat(u21.paddingBlockStart || u21.paddingTop), parseFloat(u21.paddingBlockEnd || u21.paddingBottom)];
  }, [E10]), b8 = useVirtualizer({ enabled: o15.length !== 0, scrollPaddingStart: R6, scrollPaddingEnd: y7, count: o15.length, estimateSize() {
    return 40;
  }, getScrollElement() {
    return O4.state.optionsElement;
  }, overscan: 12 }), [h8, p8] = xe(0);
  n(() => {
    p8((a20) => a20 + 1);
  }, [o15]);
  let f17 = b8.getVirtualItems(), n15 = S3(O4, (a20) => a20.activationTrigger === _5.Pointer), m10 = S3(O4, O4.selectors.activeOptionIndex);
  return f17.length === 0 ? null : L6.createElement(Le.Provider, { value: b8 }, L6.createElement("div", { style: { position: "relative", width: "100%", height: `${b8.getTotalSize()}px` }, ref: (a20) => {
    a20 && (n15 || m10 !== null && o15.length > m10 && b8.scrollToIndex(m10));
  } }, f17.map((a20) => {
    var u21;
    return L6.createElement(Ee, { key: a20.key }, L6.cloneElement((u21 = T9.children) == null ? undefined : u21.call(T9, { ...T9.slot, option: o15[a20.index] }), { key: `${h8}-${a20.key}`, "data-index": a20.index, "aria-setsize": o15.length, "aria-posinset": a20.index + 1, style: { position: "absolute", top: 0, left: 0, transform: `translateY(${a20.start}px)`, overflowAnchor: "none" } }));
  })));
}
var ho = Ee;
function Ao(T9, O4) {
  let e8 = r4(), o15 = a3(), { value: E10, defaultValue: R6, onChange: y7, form: b8, name: h8, by: p8, invalid: f17 = false, disabled: n15 = o15 || false, onClose: m10, __demoMode: a20 = false, multiple: u21 = false, immediate: A5 = false, virtual: d8 = null, nullable: X2, ...G4 } = T9, C8 = l3(R6), [x6 = u21 ? [] : undefined, v9] = b2(E10, y7, C8), c17 = b7({ id: e8, virtual: d8, __demoMode: a20 }), z = me({ static: false, hold: false }), D8 = u9(p8), K3 = o4((i12) => d8 ? p8 === null ? d8.options.indexOf(i12) : d8.options.findIndex((M5) => D8(M5, i12)) : c17.state.options.findIndex((M5) => D8(M5.dataRef.current.value, i12))), W2 = Q((i12) => u(l16.mode, { [k7.Multi]: () => x6.some((M5) => D8(M5, i12)), [k7.Single]: () => D8(x6, i12) }), [x6]), S7 = S3(c17, (i12) => i12.virtual), j9 = o4(() => m10 == null ? undefined : m10()), l16 = ae2(() => ({ __demoMode: a20, immediate: A5, optionsPropsRef: z, value: x6, defaultValue: C8, disabled: n15, invalid: f17, mode: u21 ? k7.Multi : k7.Single, virtual: d8 ? S7 : null, onChange: v9, isSelected: W2, calculateIndex: K3, compare: D8, onClose: j9 }), [a20, A5, z, x6, C8, n15, f17, u21, d8, S7, v9, W2, K3, D8, j9]);
  n(() => {
    var i12;
    d8 && c17.send({ type: D7.UpdateVirtualConfiguration, options: d8.options, disabled: (i12 = d8.disabled) != null ? i12 : null });
  }, [d8, d8 == null ? undefined : d8.options, d8 == null ? undefined : d8.disabled]), n(() => {
    c17.state.dataRef.current = l16;
  }, [l16]);
  let [k8, Y2, s15, U3] = S3(c17, (i12) => [i12.comboboxState, i12.buttonElement, i12.inputElement, i12.optionsElement]), $2 = x2.get(null), ne = S3($2, Q((i12) => $2.selectors.isTop(i12, e8), [$2, e8]));
  k5(ne, [Y2, s15, U3], () => c17.actions.closeCombobox());
  let be2 = S3(c17, c17.selectors.activeOptionIndex), ee = S3(c17, c17.selectors.activeOption), q2 = n2({ open: k8 === P4.Open, disabled: n15, invalid: f17, activeIndex: be2, activeOption: ee, value: x6 }), [t12, V3] = V2(), P5 = O4 === null ? {} : { ref: O4 }, N3 = Q(() => {
    if (C8 !== undefined)
      return v9 == null ? undefined : v9(C8);
  }, [v9, C8]), g5 = K();
  return L6.createElement(V3, { value: t12, props: { htmlFor: s15 == null ? undefined : s15.id }, slot: { open: k8 === P4.Open, disabled: n15 } }, L6.createElement(Ae, null, L6.createElement(de2.Provider, { value: l16 }, L6.createElement(u20.Provider, { value: c17 }, L6.createElement(c11, { value: u(k8, { [P4.Open]: i10.Open, [P4.Closed]: i10.Closed }) }, h8 != null && L6.createElement(j2, { disabled: n15, data: x6 != null ? { [h8]: x6 } : {}, form: b8, onReset: N3 }), g5({ ourProps: P5, theirProps: G4, slot: q2, defaultTag: ho, name: "Combobox" }))))));
}
var Io = "input";
function Ro(T9, O4) {
  var ee, q2;
  let e8 = p7("Combobox.Input"), o15 = te("Combobox.Input"), E10 = r4(), R6 = u4(), { id: y7 = R6 || `headlessui-combobox-input-${E10}`, onChange: b8, displayValue: h8, disabled: p8 = o15.disabled || false, autoFocus: f17 = false, type: n15 = "text", ...m10 } = T9, a20 = me(null), u21 = y(a20, O4, Fe(), e8.actions.setInputElement), [A5, d8] = S3(e8, (t12) => [t12.comboboxState, t12.isTyping]), X2 = p(), G4 = o4(() => {
    e8.actions.onChange(null), e8.state.optionsElement && (e8.state.optionsElement.scrollTop = 0), e8.actions.goToOption({ focus: c12.Nothing });
  }), C8 = ae2(() => {
    var t12;
    return typeof h8 == "function" && o15.value !== undefined ? (t12 = h8(o15.value)) != null ? t12 : "" : typeof o15.value == "string" ? o15.value : "";
  }, [o15.value, h8]);
  m7(([t12, V3], [P5, N3]) => {
    if (e8.state.isTyping)
      return;
    let g5 = a20.current;
    g5 && ((N3 === P4.Open && V3 === P4.Closed || t12 !== P5) && (g5.value = t12), requestAnimationFrame(() => {
      if (e8.state.isTyping || !g5 || d2(g5))
        return;
      let { selectionStart: i12, selectionEnd: M5 } = g5;
      Math.abs((M5 != null ? M5 : 0) - (i12 != null ? i12 : 0)) === 0 && i12 === 0 && g5.setSelectionRange(g5.value.length, g5.value.length);
    }));
  }, [C8, A5, d8]), m7(([t12], [V3]) => {
    if (t12 === P4.Open && V3 === P4.Closed) {
      if (e8.state.isTyping)
        return;
      let P5 = a20.current;
      if (!P5)
        return;
      let N3 = P5.value, { selectionStart: g5, selectionEnd: i12, selectionDirection: M5 } = P5;
      P5.value = "", P5.value = N3, M5 !== null ? P5.setSelectionRange(g5, i12, M5) : P5.setSelectionRange(g5, i12);
    }
  }, [A5]);
  let x6 = me(false), v9 = o4(() => {
    x6.current = true;
  }), c17 = o4(() => {
    X2.nextFrame(() => {
      x6.current = false;
    });
  }), z = o4((t12) => {
    switch (e8.actions.setIsTyping(true), t12.key) {
      case o8.Enter:
        if (e8.state.comboboxState !== P4.Open || x6.current)
          return;
        if (t12.preventDefault(), t12.stopPropagation(), e8.selectors.activeOptionIndex(e8.state) === null) {
          e8.actions.closeCombobox();
          return;
        }
        e8.actions.selectActiveOption(), o15.mode === k7.Single && e8.actions.closeCombobox();
        break;
      case o8.ArrowDown:
        return t12.preventDefault(), t12.stopPropagation(), u(e8.state.comboboxState, { [P4.Open]: () => e8.actions.goToOption({ focus: c12.Next }), [P4.Closed]: () => e8.actions.openCombobox() });
      case o8.ArrowUp:
        return t12.preventDefault(), t12.stopPropagation(), u(e8.state.comboboxState, { [P4.Open]: () => e8.actions.goToOption({ focus: c12.Previous }), [P4.Closed]: () => {
          oe2(() => e8.actions.openCombobox()), o15.value || e8.actions.goToOption({ focus: c12.Last });
        } });
      case o8.Home:
        if (e8.state.comboboxState === P4.Closed || t12.shiftKey)
          break;
        return t12.preventDefault(), t12.stopPropagation(), e8.actions.goToOption({ focus: c12.First });
      case o8.PageUp:
        return t12.preventDefault(), t12.stopPropagation(), e8.actions.goToOption({ focus: c12.First });
      case o8.End:
        if (e8.state.comboboxState === P4.Closed || t12.shiftKey)
          break;
        return t12.preventDefault(), t12.stopPropagation(), e8.actions.goToOption({ focus: c12.Last });
      case o8.PageDown:
        return t12.preventDefault(), t12.stopPropagation(), e8.actions.goToOption({ focus: c12.Last });
      case o8.Escape:
        return e8.state.comboboxState !== P4.Open ? undefined : (t12.preventDefault(), e8.state.optionsElement && !o15.optionsPropsRef.current.static && t12.stopPropagation(), o15.mode === k7.Single && o15.value === null && G4(), e8.actions.closeCombobox());
      case o8.Tab:
        if (e8.actions.setIsTyping(false), e8.state.comboboxState !== P4.Open)
          return;
        o15.mode === k7.Single && e8.state.activationTrigger !== _5.Focus && e8.actions.selectActiveOption(), e8.actions.closeCombobox();
        break;
    }
  }), D8 = o4((t12) => {
    b8 == null || b8(t12), o15.mode === k7.Single && t12.target.value === "" && G4(), e8.actions.openCombobox();
  }), K3 = o4((t12) => {
    var P5, N3, g5;
    let V3 = (P5 = t12.relatedTarget) != null ? P5 : n13.find((i12) => i12 !== t12.currentTarget);
    if (!((N3 = e8.state.optionsElement) != null && N3.contains(V3)) && !((g5 = e8.state.buttonElement) != null && g5.contains(V3)) && e8.state.comboboxState === P4.Open)
      return t12.preventDefault(), o15.mode === k7.Single && o15.value === null && G4(), e8.actions.closeCombobox();
  }), W2 = o4((t12) => {
    var P5, N3, g5;
    let V3 = (P5 = t12.relatedTarget) != null ? P5 : n13.find((i12) => i12 !== t12.currentTarget);
    (N3 = e8.state.buttonElement) != null && N3.contains(V3) || (g5 = e8.state.optionsElement) != null && g5.contains(V3) || o15.disabled || o15.immediate && e8.state.comboboxState !== P4.Open && X2.microTask(() => {
      oe2(() => e8.actions.openCombobox()), e8.actions.setActivationTrigger(_5.Focus);
    });
  }), S7 = N(), j9 = w3(), { isFocused: l16, focusProps: k8 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: f17 }), { isHovered: Y2, hoverProps: s15 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: p8 }), U3 = S3(e8, (t12) => t12.optionsElement), $2 = n2({ open: A5 === P4.Open, disabled: p8, invalid: o15.invalid, hover: Y2, focus: l16, autofocus: f17 }), ne = V({ ref: u21, id: y7, role: "combobox", type: n15, "aria-controls": U3 == null ? undefined : U3.id, "aria-expanded": A5 === P4.Open, "aria-activedescendant": S3(e8, e8.selectors.activeDescendantId), "aria-labelledby": S7, "aria-describedby": j9, "aria-autocomplete": "list", defaultValue: (q2 = (ee = T9.defaultValue) != null ? ee : o15.defaultValue !== undefined ? h8 == null ? undefined : h8(o15.defaultValue) : null) != null ? q2 : o15.defaultValue, disabled: p8 || undefined, autoFocus: f17, onCompositionStart: v9, onCompositionEnd: c17, onKeyDown: z, onChange: D8, onFocus: W2, onBlur: K3 }, k8, s15);
  return K()({ ourProps: ne, theirProps: m10, slot: $2, defaultTag: Io, name: "Combobox.Input" });
}
var _o = "button";
function Fo(T9, O4) {
  let e8 = p7("Combobox.Button"), o15 = te("Combobox.Button"), [E10, R6] = xe(null), y7 = y(O4, R6, e8.actions.setButtonElement), b8 = r4(), { id: h8 = `headlessui-combobox-button-${b8}`, disabled: p8 = o15.disabled || false, autoFocus: f17 = false, ...n15 } = T9, [m10, a20, u21] = S3(e8, (l16) => [l16.comboboxState, l16.inputElement, l16.optionsElement]), A5 = v6(a20), d8 = m10 === P4.Open;
  L5(d8, { trigger: E10, action: Q((l16) => {
    if (E10 != null && E10.contains(l16.target))
      return S5.Ignore;
    if (a20 != null && a20.contains(l16.target))
      return S5.Ignore;
    let k8 = l16.target.closest('[role="option"]:not([data-disabled])');
    return n5(k8) ? S5.Select(k8) : u21 != null && u21.contains(l16.target) ? S5.Ignore : S5.Close;
  }, [E10, a20, u21]), close: e8.actions.closeCombobox, select: e8.actions.selectActiveOption });
  let X2 = o4((l16) => {
    switch (l16.key) {
      case o8.Space:
      case o8.Enter:
        l16.preventDefault(), l16.stopPropagation(), e8.state.comboboxState === P4.Closed && oe2(() => e8.actions.openCombobox()), A5();
        return;
      case o8.ArrowDown:
        l16.preventDefault(), l16.stopPropagation(), e8.state.comboboxState === P4.Closed && (oe2(() => e8.actions.openCombobox()), e8.state.dataRef.current.value || e8.actions.goToOption({ focus: c12.First })), A5();
        return;
      case o8.ArrowUp:
        l16.preventDefault(), l16.stopPropagation(), e8.state.comboboxState === P4.Closed && (oe2(() => e8.actions.openCombobox()), e8.state.dataRef.current.value || e8.actions.goToOption({ focus: c12.Last })), A5();
        return;
      case o8.Escape:
        if (e8.state.comboboxState !== P4.Open)
          return;
        l16.preventDefault(), e8.state.optionsElement && !o15.optionsPropsRef.current.static && l16.stopPropagation(), oe2(() => e8.actions.closeCombobox()), A5();
        return;
      default:
        return;
    }
  }), G4 = s8(() => {
    e8.state.comboboxState === P4.Open ? e8.actions.closeCombobox() : e8.actions.openCombobox(), A5();
  }), C8 = N([h8]), { isFocusVisible: x6, focusProps: v9 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: f17 }), { isHovered: c17, hoverProps: z } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: p8 }), { pressed: D8, pressProps: K3 } = w({ disabled: p8 }), W2 = n2({ open: m10 === P4.Open, active: D8 || m10 === P4.Open, disabled: p8, invalid: o15.invalid, value: o15.value, hover: c17, focus: x6 }), S7 = V({ ref: y7, id: h8, type: e5(T9, E10), tabIndex: -1, "aria-haspopup": "listbox", "aria-controls": u21 == null ? undefined : u21.id, "aria-expanded": m10 === P4.Open, "aria-labelledby": C8, disabled: p8 || undefined, autoFocus: f17, onKeyDown: X2 }, G4, v9, z, K3);
  return K()({ ourProps: S7, theirProps: n15, slot: W2, defaultTag: _o, name: "Combobox.Button" });
}
var Do = "div";
var So = A.RenderStrategy | A.Static;
function Mo(T9, O4) {
  var M5, Ce, ve;
  let e8 = r4(), { id: o15 = `headlessui-combobox-options-${e8}`, hold: E10 = false, anchor: R6, portal: y7 = false, modal: b8 = true, transition: h8 = false, ...p8 } = T9, f17 = p7("Combobox.Options"), n15 = te("Combobox.Options"), m10 = ye(R6);
  m10 && (y7 = true);
  let [a20, u21] = Re(m10), [A5, d8] = xe(null), X2 = Te(), G4 = y(O4, m10 ? a20 : null, f17.actions.setOptionsElement, d8), [C8, x6, v9, c17, z] = S3(f17, (_6) => [_6.comboboxState, _6.inputElement, _6.buttonElement, _6.optionsElement, _6.activationTrigger]), D8 = u13(x6 || v9), K3 = u13(c17), W2 = u17(), [S7, j9] = N2(h8, A5, W2 !== null ? (W2 & i10.Open) === i10.Open : C8 === P4.Open);
  p5(S7, x6, f17.actions.closeCombobox);
  let l16 = n15.__demoMode ? false : b8 && C8 === P4.Open;
  f11(l16, K3);
  let k8 = n15.__demoMode ? false : b8 && C8 === P4.Open;
  y4(k8, { allowed: Q(() => [x6, v9, c17], [x6, v9, c17]) });
  let s15 = S3(f17, f17.selectors.didInputMove) ? false : S7;
  n(() => {
    var _6;
    n15.optionsPropsRef.current.static = (_6 = T9.static) != null ? _6 : false;
  }, [n15.optionsPropsRef, T9.static]), n(() => {
    n15.optionsPropsRef.current.hold = E10;
  }, [n15.optionsPropsRef, E10]), F2(C8 === P4.Open, { container: c17, accept(_6) {
    return _6.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : _6.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(_6) {
    _6.setAttribute("role", "none");
  } });
  let U3 = N([v9 == null ? undefined : v9.id]), $2 = n2({ open: C8 === P4.Open, option: undefined }), ne = o4(() => {
    f17.actions.setActivationTrigger(_5.Pointer);
  }), be2 = o4((_6) => {
    _6.preventDefault(), f17.actions.setActivationTrigger(_5.Pointer);
  }), ee = V(m10 ? X2() : {}, { "aria-labelledby": U3, role: "listbox", "aria-multiselectable": n15.mode === k7.Multi ? true : undefined, id: o15, ref: G4, style: { ...p8.style, ...u21, "--input-width": w5(S7, x6, true).width, "--button-width": w5(S7, v9, true).width }, onWheel: z === _5.Pointer ? undefined : ne, onMouseDown: be2, ...x4(j9) }), q2 = S7 && C8 === P4.Closed && !T9.static, t12 = u16(q2, (M5 = n15.virtual) == null ? undefined : M5.options), V3 = u16(q2, n15.value), P5 = Q((_6) => n15.compare(V3, _6), [n15.compare, V3]), N3 = ae2(() => {
    if (!n15.virtual)
      return n15;
    if (t12 === undefined)
      throw new Error("Missing `options` in virtual mode");
    return t12 !== n15.virtual.options ? { ...n15, virtual: { ...n15.virtual, options: t12 } } : n15;
  }, [n15, t12, (Ce = n15.virtual) == null ? undefined : Ce.options]);
  n15.virtual && Object.assign(p8, { children: L6.createElement(de2.Provider, { value: N3 }, L6.createElement(Eo, { slot: $2 }, p8.children)) });
  let g5 = K(), i12 = ae2(() => n15.mode === k7.Multi ? n15 : { ...n15, isSelected: P5 }, [n15, P5]);
  return L6.createElement(le, { enabled: y7 ? T9.static || S7 : false, ownerDocument: D8 }, L6.createElement(de2.Provider, { value: i12 }, g5({ ourProps: ee, theirProps: { ...p8, children: L6.createElement(s12, { freeze: q2 }, typeof p8.children == "function" ? (ve = p8.children) == null ? undefined : ve.call(p8, $2) : p8.children) }, slot: $2, defaultTag: Do, features: So, visible: s15, name: "Combobox.Options" })));
}
var Lo = "div";
function Vo(T9, O4) {
  var l16, k8, Y2;
  let e8 = te("Combobox.Option"), o15 = p7("Combobox.Option"), E10 = r4(), { id: R6 = `headlessui-combobox-option-${E10}`, value: y7, disabled: b8 = (Y2 = (k8 = (l16 = e8.virtual) == null ? undefined : l16.disabled) == null ? undefined : k8.call(l16, y7)) != null ? Y2 : false, order: h8 = null, ...p8 } = T9, [f17] = S3(o15, (s15) => [s15.inputElement]), n15 = v6(f17), m10 = S3(o15, Q((s15) => o15.selectors.isActive(s15, y7, R6), [y7, R6])), a20 = e8.isSelected(y7), u21 = me(null), A5 = s3({ disabled: b8, value: y7, domRef: u21, order: h8 }), d8 = Ae2(Le), X2 = y(O4, u21, d8 ? d8.measureElement : null), G4 = o4(() => {
    o15.actions.setIsTyping(false), o15.actions.onChange(y7);
  });
  n(() => o15.actions.registerOption(R6, A5), [A5, R6]);
  let C8 = S3(o15, Q((s15) => o15.selectors.shouldScrollIntoView(s15, y7, R6), [y7, R6]));
  n(() => {
    if (C8)
      return o2().requestAnimationFrame(() => {
        var s15, U3;
        (U3 = (s15 = u21.current) == null ? undefined : s15.scrollIntoView) == null || U3.call(s15, { block: "nearest" });
      });
  }, [C8, u21]);
  let x6 = o4((s15) => {
    s15.preventDefault(), s15.button === g3.Left && (b8 || (G4(), n11() || requestAnimationFrame(() => n15()), e8.mode === k7.Single && o15.actions.closeCombobox()));
  }), v9 = o4(() => {
    if (b8)
      return o15.actions.goToOption({ focus: c12.Nothing });
    let s15 = e8.calculateIndex(y7);
    o15.actions.goToOption({ focus: c12.Specific, idx: s15 });
  }), c17 = u15(), z = o4((s15) => c17.update(s15)), D8 = o4((s15) => {
    if (!c17.wasMoved(s15) || b8 || m10 && o15.state.activationTrigger === _5.Pointer)
      return;
    let U3 = e8.calculateIndex(y7);
    o15.actions.goToOption({ focus: c12.Specific, idx: U3 }, _5.Pointer);
  }), K3 = o4((s15) => {
    c17.wasMoved(s15) && (b8 || m10 && (e8.optionsPropsRef.current.hold || o15.state.activationTrigger === _5.Pointer && o15.actions.goToOption({ focus: c12.Nothing })));
  }), W2 = n2({ active: m10, focus: m10, selected: a20, disabled: b8 }), S7 = { id: R6, ref: X2, role: "option", tabIndex: b8 === true ? undefined : -1, "aria-disabled": b8 === true ? true : undefined, "aria-selected": a20, disabled: undefined, onMouseDown: x6, onFocus: v9, onPointerEnter: z, onMouseEnter: z, onPointerMove: D8, onMouseMove: D8, onPointerLeave: K3, onMouseLeave: K3 };
  return K()({ ourProps: S7, theirProps: p8, slot: W2, defaultTag: Lo, name: "Combobox.Option" });
}
var wo = Y(Ao);
var Bo = Y(Fo);
var ko = Y(Ro);
var No = Z;
var Uo = Y(Mo);
var Ho = Y(Vo);
var Ht = Object.assign(wo, { Input: ko, Button: Bo, Label: No, Options: Uo, Option: Ho });
// node_modules/@headlessui/react/dist/components/data-interactive/data-interactive.js
import { Fragment as D8 } from "react";
"use client";
var E10 = D8;
function d8(t12, r16) {
  let { ...a20 } = t12, e8 = false, { isFocusVisible: o15, focusProps: n15 } = $0c4a58759813079a$export$4e328f61c538687f(), { isHovered: p8, hoverProps: s15 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: e8 }), { pressed: i12, pressProps: T9 } = w({ disabled: e8 }), l16 = V({ ref: r16 }, n15, s15, T9), m10 = n2({ hover: p8, focus: o15, active: i12 });
  return K()({ ourProps: l16, theirProps: a20, slot: m10, defaultTag: E10, name: "DataInteractive" });
}
var b8 = Y(d8);
// node_modules/@headlessui/react/dist/components/dialog/dialog.js
import l16, { Fragment as $3, createContext as pe2, createRef as se, useCallback as de4, useContext as ue3, useEffect as Te3, useMemo as fe2, useReducer as ge4, useRef as j10 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-escape.js
function a20(o15, r16 = typeof document != "undefined" ? document.defaultView : null, t12) {
  let n15 = I3(o15, "escape");
  E7(r16, "keydown", (e8) => {
    n15 && (e8.defaultPrevented || e8.key === o8.Escape && t12(e8));
  });
}

// node_modules/@headlessui/react/dist/hooks/use-is-touch-device.js
import { useState as i12 } from "react";
function f17() {
  var t12;
  let [e8] = i12(() => typeof window != "undefined" && typeof window.matchMedia == "function" ? window.matchMedia("(pointer: coarse)") : null), [o15, c17] = i12((t12 = e8 == null ? undefined : e8.matches) != null ? t12 : false);
  return n(() => {
    if (!e8)
      return;
    function n15(r16) {
      c17(r16.matches);
    }
    return e8.addEventListener("change", n15), () => e8.removeEventListener("change", n15);
  }, [e8]), o15;
}

// node_modules/@headlessui/react/dist/hooks/use-root-containers.js
import s15, { createContext as h8, useContext as b9, useState as p8 } from "react";
function S7({ defaultContainers: l16 = [], portals: n15, mainTreeNode: o15 } = {}) {
  let c17 = o4(() => {
    var r16, u21;
    let i13 = l(o15), t12 = [];
    for (let e8 of l16)
      e8 !== null && (t5(e8) ? t12.push(e8) : ("current" in e8) && t5(e8.current) && t12.push(e8.current));
    if (n15 != null && n15.current)
      for (let e8 of n15.current)
        t12.push(e8);
    for (let e8 of (r16 = i13 == null ? undefined : i13.querySelectorAll("html > *, body > *")) != null ? r16 : [])
      e8 !== document.body && e8 !== document.head && t5(e8) && e8.id !== "headlessui-portal-root" && (o15 && (e8.contains(o15) || e8.contains((u21 = o15 == null ? undefined : o15.getRootNode()) == null ? undefined : u21.host)) || t12.some((E11) => e8.contains(E11)) || t12.push(e8));
    return t12;
  });
  return { resolveContainers: c17, contains: o4((i13) => c17().some((t12) => t12.contains(i13))) };
}
var d9 = h8(null);
function j9({ children: l16, node: n15 }) {
  let [o15, c17] = p8(null), i13 = x6(n15 != null ? n15 : o15);
  return s15.createElement(d9.Provider, { value: i13 }, l16, i13 === null && s15.createElement(f4, { features: s5.Hidden, ref: (t12) => {
    var r16, u21;
    if (t12) {
      for (let e8 of (u21 = (r16 = l(t12)) == null ? undefined : r16.querySelectorAll("html > *, body > *")) != null ? u21 : [])
        if (e8 !== document.body && e8 !== document.head && t5(e8) && e8 != null && e8.contains(t12)) {
          c17(e8);
          break;
        }
    }
  } }));
}
function x6(l16 = null) {
  var n15;
  return (n15 = b9(d9)) != null ? n15 : l16;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
import F3, { useRef as M5 } from "react";

// node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
import { useRef as r16 } from "react";
function f18() {
  let e8 = r16(false);
  return n(() => (e8.current = true, () => {
    e8.current = false;
  }), []), e8;
}

// node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
import { useRef as o15 } from "react";
var a21 = ((r17) => (r17[r17.Forwards = 0] = "Forwards", r17[r17.Backwards = 1] = "Backwards", r17))(a21 || {});
function u21() {
  let e8 = o15(0);
  return s10(true, "keydown", (r17) => {
    r17.key === "Tab" && (e8.current = r17.shiftKey ? 1 : 0);
  }, true), e8;
}

// node_modules/@headlessui/react/dist/components/focus-trap/focus-trap.js
"use client";
function x7(o16) {
  if (!o16)
    return new Set;
  if (typeof o16 == "function")
    return new Set(o16());
  let t12 = new Set;
  for (let e8 of o16.current)
    t5(e8.current) && t12.add(e8.current);
  return t12;
}
var $2 = "div";
var G4 = ((n15) => (n15[n15.None = 0] = "None", n15[n15.InitialFocus = 1] = "InitialFocus", n15[n15.TabLock = 2] = "TabLock", n15[n15.FocusLock = 4] = "FocusLock", n15[n15.RestoreFocus = 8] = "RestoreFocus", n15[n15.AutoFocus = 16] = "AutoFocus", n15))(G4 || {});
function w8(o16, t12) {
  let e8 = M5(null), r17 = y(e8, t12), { initialFocus: u22, initialFocusFallback: a22, containers: n15, features: s16 = 15, ...f19 } = o16;
  l14() || (s16 = 0);
  let l16 = u13(e8.current);
  re(s16, { ownerDocument: l16 });
  let T9 = ne(s16, { ownerDocument: l16, container: e8, initialFocus: u22, initialFocusFallback: a22 });
  oe3(s16, { ownerDocument: l16, container: e8, containers: n15, previousActiveElement: T9 });
  let g5 = u21(), A5 = o4((c17) => {
    if (!n5(e8.current))
      return;
    let E11 = e8.current;
    ((V3) => V3())(() => {
      u(g5.current, { [a21.Forwards]: () => {
        v5(E11, T4.First, { skipElements: [c17.relatedTarget, a22] });
      }, [a21.Backwards]: () => {
        v5(E11, T4.Last, { skipElements: [c17.relatedTarget, a22] });
      } });
    });
  }), v9 = I3(!!(s16 & 2), "focus-trap#tab-lock"), N3 = p(), b10 = M5(false), k8 = { ref: r17, onKeyDown(c17) {
    c17.key == "Tab" && (b10.current = true, N3.requestAnimationFrame(() => {
      b10.current = false;
    }));
  }, onBlur(c17) {
    if (!(s16 & 4))
      return;
    let E11 = x7(n15);
    n5(e8.current) && E11.add(e8.current);
    let L7 = c17.relatedTarget;
    i4(L7) && L7.dataset.headlessuiFocusGuard !== "true" && (I7(E11, L7) || (b10.current ? v5(e8.current, u(g5.current, { [a21.Forwards]: () => T4.Next, [a21.Backwards]: () => T4.Previous }) | T4.WrapAround, { relativeTo: c17.target }) : i4(c17.target) && w6(c17.target)));
  } }, B2 = K();
  return F3.createElement(F3.Fragment, null, v9 && F3.createElement(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A5, features: s5.Focusable }), B2({ ourProps: k8, theirProps: f19, defaultTag: $2, name: "FocusTrap" }), v9 && F3.createElement(f4, { as: "button", type: "button", "data-headlessui-focus-guard": true, onFocus: A5, features: s5.Focusable }));
}
var ee = Y(w8);
var ge2 = Object.assign(ee, { features: G4 });
function te2(o16 = true) {
  let t12 = M5(n13.slice());
  return m7(([e8], [r17]) => {
    r17 === true && e8 === false && t(() => {
      t12.current.splice(0);
    }), r17 === false && e8 === true && (t12.current = n13.slice());
  }, [o16, n13, t12]), o4(() => {
    var e8;
    return (e8 = t12.current.find((r17) => r17 != null && r17.isConnected)) != null ? e8 : null;
  });
}
function re(o16, { ownerDocument: t12 }) {
  let e8 = !!(o16 & 8), r17 = te2(e8);
  m7(() => {
    e8 || d2(t12 == null ? undefined : t12.body) && w6(r17());
  }, [e8]), c13(() => {
    e8 && w6(r17());
  });
}
function ne(o16, { ownerDocument: t12, container: e8, initialFocus: r17, initialFocusFallback: u22 }) {
  let a22 = M5(null), n15 = I3(!!(o16 & 1), "focus-trap#initial-focus"), s16 = f18();
  return m7(() => {
    if (o16 === 0)
      return;
    if (!n15) {
      u22 != null && u22.current && w6(u22.current);
      return;
    }
    let f19 = e8.current;
    f19 && t(() => {
      if (!s16.current)
        return;
      let l16 = t12 == null ? undefined : t12.activeElement;
      if (r17 != null && r17.current) {
        if ((r17 == null ? undefined : r17.current) === l16) {
          a22.current = l16;
          return;
        }
      } else if (f19.contains(l16)) {
        a22.current = l16;
        return;
      }
      if (r17 != null && r17.current)
        w6(r17.current);
      else {
        if (o16 & 16) {
          if (v5(f19, T4.First | T4.AutoFocus) !== A2.Error)
            return;
        } else if (v5(f19, T4.First) !== A2.Error)
          return;
        if (u22 != null && u22.current && (w6(u22.current), (t12 == null ? undefined : t12.activeElement) === u22.current))
          return;
        console.warn("There are no focusable elements inside the <FocusTrap />");
      }
      a22.current = t12 == null ? undefined : t12.activeElement;
    });
  }, [u22, n15, o16]), a22;
}
function oe3(o16, { ownerDocument: t12, container: e8, containers: r17, previousActiveElement: u22 }) {
  let a22 = f18(), n15 = !!(o16 & 4);
  E7(t12 == null ? undefined : t12.defaultView, "focus", (s16) => {
    if (!n15 || !a22.current)
      return;
    let f19 = x7(r17);
    n5(e8.current) && f19.add(e8.current);
    let l16 = u22.current;
    if (!l16)
      return;
    let T9 = s16.target;
    n5(T9) ? I7(f19, T9) ? (u22.current = T9, w6(T9)) : (s16.preventDefault(), s16.stopPropagation(), w6(l16)) : w6(u22.current);
  }, true);
}
function I7(o16, t12) {
  for (let e8 of o16)
    if (e8.contains(t12))
      return true;
  return false;
}

// node_modules/@headlessui/react/dist/components/transition/transition.js
import c17, { Fragment as k8, createContext as ne2, useContext as q2, useEffect as ge3, useMemo as ie, useRef as b10, useState as O4 } from "react";
"use client";
function ue2(e8) {
  var t12;
  return !!(e8.enter || e8.enterFrom || e8.enterTo || e8.leave || e8.leaveFrom || e8.leaveTo) || !b((t12 = e8.as) != null ? t12 : de3) || c17.Children.count(e8.children) === 1;
}
var V3 = ne2(null);
V3.displayName = "TransitionContext";
var De = ((n15) => (n15.Visible = "visible", n15.Hidden = "hidden", n15))(De || {});
function He() {
  let e8 = q2(V3);
  if (e8 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e8;
}
function Ae3() {
  let e8 = q2(w9);
  if (e8 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e8;
}
var w9 = ne2(null);
w9.displayName = "NestingContext";
function M6(e8) {
  return "children" in e8 ? M6(e8.children) : e8.current.filter(({ el: t12 }) => t12.current !== null).filter(({ state: t12 }) => t12 === "visible").length > 0;
}
function Te2(e8, t12) {
  let n15 = s3(e8), l16 = b10([]), S8 = f18(), R6 = p(), d10 = o4((o16, i13 = C.Hidden) => {
    let a22 = l16.current.findIndex(({ el: s16 }) => s16 === o16);
    a22 !== -1 && (u(i13, { [C.Unmount]() {
      l16.current.splice(a22, 1);
    }, [C.Hidden]() {
      l16.current[a22].state = "hidden";
    } }), R6.microTask(() => {
      var s16;
      !M6(l16) && S8.current && ((s16 = n15.current) == null || s16.call(n15));
    }));
  }), y7 = o4((o16) => {
    let i13 = l16.current.find(({ el: a22 }) => a22 === o16);
    return i13 ? i13.state !== "visible" && (i13.state = "visible") : l16.current.push({ el: o16, state: "visible" }), () => d10(o16, C.Unmount);
  }), C8 = b10([]), p9 = b10(Promise.resolve()), h9 = b10({ enter: [], leave: [] }), g5 = o4((o16, i13, a22) => {
    C8.current.splice(0), t12 && (t12.chains.current[i13] = t12.chains.current[i13].filter(([s16]) => s16 !== o16)), t12 == null || t12.chains.current[i13].push([o16, new Promise((s16) => {
      C8.current.push(s16);
    })]), t12 == null || t12.chains.current[i13].push([o16, new Promise((s16) => {
      Promise.all(h9.current[i13].map(([r17, f19]) => f19)).then(() => s16());
    })]), i13 === "enter" ? p9.current = p9.current.then(() => t12 == null ? undefined : t12.wait.current).then(() => a22(i13)) : a22(i13);
  }), v9 = o4((o16, i13, a22) => {
    Promise.all(h9.current[i13].splice(0).map(([s16, r17]) => r17)).then(() => {
      var s16;
      (s16 = C8.current.shift()) == null || s16();
    }).then(() => a22(i13));
  });
  return ie(() => ({ children: l16, register: y7, unregister: d10, onStart: g5, onStop: v9, wait: p9, chains: h9 }), [y7, d10, l16, g5, v9, h9, p9]);
}
var de3 = k8;
var fe = A.RenderStrategy;
function Fe2(e8, t12) {
  var ee2, te3;
  let { transition: n15 = true, beforeEnter: l16, afterEnter: S8, beforeLeave: R6, afterLeave: d10, enter: y7, enterFrom: C8, enterTo: p9, entered: h9, leave: g5, leaveFrom: v9, leaveTo: o16, ...i13 } = e8, [a22, s16] = O4(null), r17 = b10(null), f19 = ue2(e8), U3 = y(...f19 ? [r17, t12, s16] : t12 === null ? [] : [t12]), H7 = (ee2 = i13.unmount) == null || ee2 ? C.Unmount : C.Hidden, { show: u22, appear: z, initial: K3 } = He(), [m10, j10] = O4(u22 ? "visible" : "hidden"), Q2 = Ae3(), { register: A5, unregister: F4 } = Q2;
  n(() => A5(r17), [A5, r17]), n(() => {
    if (H7 === C.Hidden && r17.current) {
      if (u22 && m10 !== "visible") {
        j10("visible");
        return;
      }
      return u(m10, { ["hidden"]: () => F4(r17), ["visible"]: () => A5(r17) });
    }
  }, [m10, r17, A5, F4, u22, H7]);
  let G5 = l14();
  n(() => {
    if (f19 && G5 && m10 === "visible" && r17.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [r17, m10, G5, f19]);
  let ce2 = K3 && !z, Y2 = z && u22 && K3, B2 = b10(false), I8 = Te2(() => {
    B2.current || (j10("hidden"), F4(r17));
  }, Q2), Z2 = o4((W2) => {
    B2.current = true;
    let L7 = W2 ? "enter" : "leave";
    I8.onStart(r17, L7, (_6) => {
      _6 === "enter" ? l16 == null || l16() : _6 === "leave" && (R6 == null || R6());
    });
  }), $3 = o4((W2) => {
    let L7 = W2 ? "enter" : "leave";
    B2.current = false, I8.onStop(r17, L7, (_6) => {
      _6 === "enter" ? S8 == null || S8() : _6 === "leave" && (d10 == null || d10());
    }), L7 === "leave" && !M6(I8) && (j10("hidden"), F4(r17));
  });
  ge3(() => {
    f19 && n15 || (Z2(u22), $3(u22));
  }, [u22, f19, n15]);
  let pe2 = (() => !(!n15 || !f19 || !G5 || ce2))(), [, T9] = N2(pe2, a22, u22, { start: Z2, end: $3 }), Ce = m2({ ref: U3, className: ((te3 = t4(i13.className, Y2 && y7, Y2 && C8, T9.enter && y7, T9.enter && T9.closed && C8, T9.enter && !T9.closed && p9, T9.leave && g5, T9.leave && !T9.closed && v9, T9.leave && T9.closed && o16, !T9.transition && u22 && h9)) == null ? undefined : te3.trim()) || undefined, ...x4(T9) }), N3 = 0;
  m10 === "visible" && (N3 |= i10.Open), m10 === "hidden" && (N3 |= i10.Closed), u22 && m10 === "hidden" && (N3 |= i10.Opening), !u22 && m10 === "visible" && (N3 |= i10.Closing);
  let he2 = K();
  return c17.createElement(w9.Provider, { value: I8 }, c17.createElement(c11, { value: N3 }, he2({ ourProps: Ce, theirProps: i13, defaultTag: de3, features: fe, visible: m10 === "visible", name: "Transition.Child" })));
}
function Ie(e8, t12) {
  let { show: n15, appear: l16 = false, unmount: S8 = true, ...R6 } = e8, d10 = b10(null), y7 = ue2(e8), C8 = y(...y7 ? [d10, t12] : t12 === null ? [] : [t12]);
  l14();
  let p9 = u17();
  if (n15 === undefined && p9 !== null && (n15 = (p9 & i10.Open) === i10.Open), n15 === undefined)
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [h9, g5] = O4(n15 ? "visible" : "hidden"), v9 = Te2(() => {
    n15 || g5("hidden");
  }), [o16, i13] = O4(true), a22 = b10([n15]);
  n(() => {
    o16 !== false && a22.current[a22.current.length - 1] !== n15 && (a22.current.push(n15), i13(false));
  }, [a22, n15]);
  let s16 = ie(() => ({ show: n15, appear: l16, initial: o16 }), [n15, l16, o16]);
  n(() => {
    n15 ? g5("visible") : !M6(v9) && d10.current !== null && g5("hidden");
  }, [n15, v9]);
  let r17 = { unmount: S8 }, f19 = o4(() => {
    var u22;
    o16 && i13(false), (u22 = e8.beforeEnter) == null || u22.call(e8);
  }), U3 = o4(() => {
    var u22;
    o16 && i13(false), (u22 = e8.beforeLeave) == null || u22.call(e8);
  }), H7 = K();
  return c17.createElement(w9.Provider, { value: v9 }, c17.createElement(V3.Provider, { value: s16 }, H7({ ourProps: { ...r17, as: k8, children: c17.createElement(me2, { ref: C8, ...r17, ...R6, beforeEnter: f19, beforeLeave: U3 }) }, theirProps: {}, defaultTag: k8, features: fe, visible: h9 === "visible", name: "Transition" })));
}
function Le2(e8, t12) {
  let n15 = q2(V3) !== null, l16 = u17() !== null;
  return c17.createElement(c17.Fragment, null, !n15 && l16 ? c17.createElement(X2, { ref: t12, ...e8 }) : c17.createElement(me2, { ref: t12, ...e8 }));
}
var X2 = Y(Ie);
var me2 = Y(Fe2);
var Oe = Y(Le2);
var Ke2 = Object.assign(X2, { Child: Oe, Root: X2 });

// node_modules/@headlessui/react/dist/components/dialog/dialog.js
"use client";
var we = ((o16) => (o16[o16.Open = 0] = "Open", o16[o16.Closed = 1] = "Closed", o16))(we || {});
var Be = ((t12) => (t12[t12.SetTitleId = 0] = "SetTitleId", t12))(Be || {});
var Ue = { [0](e8, t12) {
  return e8.titleId === t12.id ? e8 : { ...e8, titleId: t12.id };
} };
var w10 = pe2(null);
w10.displayName = "DialogContext";
function O5(e8) {
  let t12 = ue3(w10);
  if (t12 === null) {
    let o16 = new Error(`<${e8} /> is missing a parent <Dialog /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o16, O5), o16;
  }
  return t12;
}
function He2(e8, t12) {
  return u(t12.type, Ue, e8, t12);
}
var z = Y(function(t12, o16) {
  let a22 = r4(), { id: n15 = `headlessui-dialog-${a22}`, open: i13, onClose: p9, initialFocus: d10, role: s16 = "dialog", autoFocus: f19 = true, __demoMode: u22 = false, unmount: y7 = false, ...S8 } = t12, R6 = j10(false);
  s16 = function() {
    return s16 === "dialog" || s16 === "alertdialog" ? s16 : (R6.current || (R6.current = true, console.warn(`Invalid role [${s16}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog");
  }();
  let g5 = u17();
  i13 === undefined && g5 !== null && (i13 = (g5 & i10.Open) === i10.Open);
  let T9 = j10(null), I8 = y(T9, o16), F4 = u13(T9.current), c18 = i13 ? 0 : 1, [b11, Q2] = ge4(He2, { titleId: null, descriptionId: null, panelRef: se() }), m10 = o4(() => p9(false)), B2 = o4((r17) => Q2({ type: 0, id: r17 })), D9 = l14() ? c18 === 0 : false, [Z2, ee2] = oe(), te3 = { get current() {
    var r17;
    return (r17 = b11.panelRef.current) != null ? r17 : T9.current;
  } }, v9 = x6(), { resolveContainers: M7 } = S7({ mainTreeNode: v9, portals: Z2, defaultContainers: [te3] }), U3 = g5 !== null ? (g5 & i10.Closing) === i10.Closing : false;
  y4(u22 || U3 ? false : D9, { allowed: o4(() => {
    var r17, W2;
    return [(W2 = (r17 = T9.current) == null ? undefined : r17.closest("[data-headlessui-portal]")) != null ? W2 : null];
  }), disallowed: o4(() => {
    var r17;
    return [(r17 = v9 == null ? undefined : v9.closest("body > *:not(#headlessui-portal-root)")) != null ? r17 : null];
  }) });
  let P5 = x2.get(null);
  n(() => {
    if (D9)
      return P5.actions.push(n15), () => P5.actions.pop(n15);
  }, [P5, n15, D9]);
  let H7 = S3(P5, de4((r17) => P5.selectors.isTop(r17, n15), [P5, n15]));
  k5(H7, M7, (r17) => {
    r17.preventDefault(), m10();
  }), a20(H7, F4 == null ? undefined : F4.defaultView, (r17) => {
    r17.preventDefault(), r17.stopPropagation(), document.activeElement && "blur" in document.activeElement && typeof document.activeElement.blur == "function" && document.activeElement.blur(), m10();
  }), f11(u22 || U3 ? false : D9, F4, M7), p5(D9, T9, m10);
  let [oe4, ne3] = H3(), re2 = fe2(() => [{ dialogState: c18, close: m10, setTitleId: B2, unmount: y7 }, b11], [c18, m10, B2, y7, b11]), N3 = n2({ open: c18 === 0 }), le2 = { ref: I8, id: n15, role: s16, tabIndex: -1, "aria-modal": u22 ? undefined : c18 === 0 ? true : undefined, "aria-labelledby": b11.titleId, "aria-describedby": oe4, unmount: y7 }, ae3 = !f17(), E11 = G4.None;
  D9 && !u22 && (E11 |= G4.RestoreFocus, E11 |= G4.TabLock, f19 && (E11 |= G4.AutoFocus), ae3 && (E11 |= G4.InitialFocus));
  let ie2 = K();
  return l16.createElement(s13, null, l16.createElement(l15, { force: true }, l16.createElement(le, null, l16.createElement(w10.Provider, { value: re2 }, l16.createElement(B, { target: T9 }, l16.createElement(l15, { force: false }, l16.createElement(ne3, { slot: N3 }, l16.createElement(ee2, null, l16.createElement(ge2, { initialFocus: d10, initialFocusFallback: T9, containers: M7, features: E11 }, l16.createElement(C5, { value: m10 }, ie2({ ourProps: le2, theirProps: S8, slot: N3, defaultTag: Ne, features: We, visible: c18 === 0, name: "Dialog" })))))))))));
});
var Ne = "div";
var We = A.RenderStrategy | A.Static;
function $e(e8, t12) {
  let { transition: o16 = false, open: a22, ...n15 } = e8, i13 = u17(), p9 = e8.hasOwnProperty("open") || i13 !== null, d10 = e8.hasOwnProperty("onClose");
  if (!p9 && !d10)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!p9)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!d10)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (!i13 && typeof e8.open != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${e8.open}`);
  if (typeof e8.onClose != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${e8.onClose}`);
  return (a22 !== undefined || o16) && !n15.static ? l16.createElement(j9, null, l16.createElement(Ke2, { show: a22, transition: o16, unmount: n15.unmount }, l16.createElement(z, { ref: t12, ...n15 }))) : l16.createElement(j9, null, l16.createElement(z, { ref: t12, open: a22, ...n15 }));
}
var je = "div";
function Ye(e8, t12) {
  let o16 = r4(), { id: a22 = `headlessui-dialog-panel-${o16}`, transition: n15 = false, ...i13 } = e8, [{ dialogState: p9, unmount: d10 }, s16] = O5("Dialog.Panel"), f19 = y(t12, s16.panelRef), u22 = n2({ open: p9 === 0 }), y7 = o4((I8) => {
    I8.stopPropagation();
  }), S8 = { ref: f19, id: a22, onClick: y7 }, R6 = n15 ? Oe : $3, g5 = n15 ? { unmount: d10 } : {}, T9 = K();
  return l16.createElement(R6, { ...g5 }, T9({ ourProps: S8, theirProps: i13, slot: u22, defaultTag: je, name: "Dialog.Panel" }));
}
var Je = "div";
function Ke3(e8, t12) {
  let { transition: o16 = false, ...a22 } = e8, [{ dialogState: n15, unmount: i13 }] = O5("Dialog.Backdrop"), p9 = n2({ open: n15 === 0 }), d10 = { ref: t12, "aria-hidden": true }, s16 = o16 ? Oe : $3, f19 = o16 ? { unmount: i13 } : {}, u22 = K();
  return l16.createElement(s16, { ...f19 }, u22({ ourProps: d10, theirProps: a22, slot: p9, defaultTag: Je, name: "Dialog.Backdrop" }));
}
var Xe = "h2";
function Ve(e8, t12) {
  let o16 = r4(), { id: a22 = `headlessui-dialog-title-${o16}`, ...n15 } = e8, [{ dialogState: i13, setTitleId: p9 }] = O5("Dialog.Title"), d10 = y(t12);
  Te3(() => (p9(a22), () => p9(null)), [a22, p9]);
  let s16 = n2({ open: i13 === 0 }), f19 = { ref: d10, id: a22 };
  return K()({ ourProps: f19, theirProps: n15, slot: s16, defaultTag: Xe, name: "Dialog.Title" });
}
var qe = Y($e);
var ze = Y(Ye);
var Lt = Y(Ke3);
var Qe = Y(Ve);
var xt = M2;
var ht = Object.assign(qe, { Panel: ze, Title: Qe, Description: M2 });
// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
import y7, { Fragment as Q2, createContext as R6, useContext as I8, useEffect as N3, useMemo as Y2, useReducer as Z2, useRef as k9, useState as ee2 } from "react";

// node_modules/@headlessui/react/dist/utils/start-transition.js
import r17 from "react";
var t12;
var a22 = (t12 = r17.startTransition) != null ? t12 : function(i13) {
  i13();
};

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
"use client";
var me3 = ((l17) => (l17[l17.Open = 0] = "Open", l17[l17.Closed = 1] = "Closed", l17))(me3 || {});
var fe3 = ((n15) => (n15[n15.ToggleDisclosure = 0] = "ToggleDisclosure", n15[n15.CloseDisclosure = 1] = "CloseDisclosure", n15[n15.SetButtonId = 2] = "SetButtonId", n15[n15.SetPanelId = 3] = "SetPanelId", n15[n15.SetButtonElement = 4] = "SetButtonElement", n15[n15.SetPanelElement = 5] = "SetPanelElement", n15))(fe3 || {});
var De2 = { [0]: (e8) => ({ ...e8, disclosureState: u(e8.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e8) => e8.disclosureState === 1 ? e8 : { ...e8, disclosureState: 1 }, [2](e8, t13) {
  return e8.buttonId === t13.buttonId ? e8 : { ...e8, buttonId: t13.buttonId };
}, [3](e8, t13) {
  return e8.panelId === t13.panelId ? e8 : { ...e8, panelId: t13.panelId };
}, [4](e8, t13) {
  return e8.buttonElement === t13.element ? e8 : { ...e8, buttonElement: t13.element };
}, [5](e8, t13) {
  return e8.panelElement === t13.element ? e8 : { ...e8, panelElement: t13.element };
} };
var _6 = R6(null);
_6.displayName = "DisclosureContext";
function M7(e8) {
  let t13 = I8(_6);
  if (t13 === null) {
    let l17 = new Error(`<${e8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l17, M7), l17;
  }
  return t13;
}
var F4 = R6(null);
F4.displayName = "DisclosureAPIContext";
function V4(e8) {
  let t13 = I8(F4);
  if (t13 === null) {
    let l17 = new Error(`<${e8} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(l17, V4), l17;
  }
  return t13;
}
var H7 = R6(null);
H7.displayName = "DisclosurePanelContext";
function ye2() {
  return I8(H7);
}
function Pe(e8, t13) {
  return u(t13.type, De2, e8, t13);
}
var Ee2 = Q2;
function Se(e8, t13) {
  let { defaultOpen: l17 = false, ...p9 } = e8, a23 = k9(null), c18 = y(t13, T((u22) => {
    a23.current = u22;
  }, e8.as === undefined || b(e8.as))), n15 = Z2(Pe, { disclosureState: l17 ? 0 : 1, buttonElement: null, panelElement: null, buttonId: null, panelId: null }), [{ disclosureState: o16, buttonId: r18 }, f19] = n15, s16 = o4((u22) => {
    f19({ type: 1 });
    let m10 = l(a23.current);
    if (!m10 || !r18)
      return;
    let d10 = (() => u22 ? i4(u22) ? u22 : ("current" in u22) && i4(u22.current) ? u22.current : m10.getElementById(r18) : m10.getElementById(r18))();
    d10 == null || d10.focus();
  }), E11 = Y2(() => ({ close: s16 }), [s16]), T9 = n2({ open: o16 === 0, close: s16 }), D9 = { ref: c18 }, S8 = K();
  return y7.createElement(_6.Provider, { value: n15 }, y7.createElement(F4.Provider, { value: E11 }, y7.createElement(C5, { value: s16 }, y7.createElement(c11, { value: u(o16, { [0]: i10.Open, [1]: i10.Closed }) }, S8({ ourProps: D9, theirProps: p9, slot: T9, defaultTag: Ee2, name: "Disclosure" })))));
}
var ge5 = "button";
function Ae4(e8, t13) {
  let l17 = r4(), { id: p9 = `headlessui-disclosure-button-${l17}`, disabled: a23 = false, autoFocus: c18 = false, ...n15 } = e8, [o16, r18] = M7("Disclosure.Button"), f19 = ye2(), s16 = f19 === null ? false : f19 === o16.panelId, E11 = k9(null), T9 = y(E11, t13, o4((i13) => {
    if (!s16)
      return r18({ type: 4, element: i13 });
  }));
  N3(() => {
    if (!s16)
      return r18({ type: 2, buttonId: p9 }), () => {
        r18({ type: 2, buttonId: null });
      };
  }, [p9, r18, s16]);
  let D9 = o4((i13) => {
    var g5;
    if (s16) {
      if (o16.disclosureState === 1)
        return;
      switch (i13.key) {
        case o8.Space:
        case o8.Enter:
          i13.preventDefault(), i13.stopPropagation(), r18({ type: 0 }), (g5 = o16.buttonElement) == null || g5.focus();
          break;
      }
    } else
      switch (i13.key) {
        case o8.Space:
        case o8.Enter:
          i13.preventDefault(), i13.stopPropagation(), r18({ type: 0 });
          break;
      }
  }), S8 = o4((i13) => {
    switch (i13.key) {
      case o8.Space:
        i13.preventDefault();
        break;
    }
  }), u22 = o4((i13) => {
    var g5;
    s6(i13.currentTarget) || a23 || (s16 ? (r18({ type: 0 }), (g5 = o16.buttonElement) == null || g5.focus()) : r18({ type: 0 }));
  }), { isFocusVisible: m10, focusProps: d10 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: c18 }), { isHovered: C8, hoverProps: h9 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: a23 }), { pressed: $4, pressProps: U3 } = w({ disabled: a23 }), J4 = n2({ open: o16.disclosureState === 0, hover: C8, active: $4, disabled: a23, focus: m10, autofocus: c18 }), G5 = e5(e8, o16.buttonElement), X3 = s16 ? V({ ref: T9, type: G5, disabled: a23 || undefined, autoFocus: c18, onKeyDown: D9, onClick: u22 }, d10, h9, U3) : V({ ref: T9, id: p9, type: G5, "aria-expanded": o16.disclosureState === 0, "aria-controls": o16.panelElement ? o16.panelId : undefined, disabled: a23 || undefined, autoFocus: c18, onKeyDown: D9, onKeyUp: S8, onClick: u22 }, d10, h9, U3);
  return K()({ ourProps: X3, theirProps: n15, slot: J4, defaultTag: ge5, name: "Disclosure.Button" });
}
var be2 = "div";
var Ce = A.RenderStrategy | A.Static;
function Re2(e8, t13) {
  let l17 = r4(), { id: p9 = `headlessui-disclosure-panel-${l17}`, transition: a23 = false, ...c18 } = e8, [n15, o16] = M7("Disclosure.Panel"), { close: r18 } = V4("Disclosure.Panel"), [f19, s16] = ee2(null), E11 = y(t13, o4((C8) => {
    a22(() => o16({ type: 5, element: C8 }));
  }), s16);
  N3(() => (o16({ type: 3, panelId: p9 }), () => {
    o16({ type: 3, panelId: null });
  }), [p9, o16]);
  let T9 = u17(), [D9, S8] = N2(a23, f19, T9 !== null ? (T9 & i10.Open) === i10.Open : n15.disclosureState === 0), u22 = n2({ open: n15.disclosureState === 0, close: r18 }), m10 = { ref: E11, id: p9, ...x4(S8) }, d10 = K();
  return y7.createElement(s13, null, y7.createElement(H7.Provider, { value: n15.panelId }, d10({ ourProps: m10, theirProps: c18, slot: u22, defaultTag: be2, features: Ce, visible: D9, name: "Disclosure.Panel" })));
}
var Ie2 = Y(Se);
var xe2 = Y(Ae4);
var Le3 = Y(Re2);
var Xe2 = Object.assign(Ie2, { Button: xe2, Panel: Le3 });
// node_modules/@headlessui/react/dist/components/field/field.js
import e8 from "react";
"use client";
var _7 = "div";
function c18(d10, l17) {
  let t13 = `headlessui-control-${r4()}`, [p9, n15] = V2(), [s16, a23] = H3(), m10 = a3(), { disabled: r18 = m10 || false, ...o16 } = d10, i13 = n2({ disabled: r18 }), f19 = { ref: l17, disabled: r18 || undefined, "aria-disabled": r18 || undefined }, F5 = K();
  return e8.createElement(l2, { value: r18 }, e8.createElement(n15, { value: p9 }, e8.createElement(a23, { value: s16 }, e8.createElement(f6, { id: t13 }, F5({ ourProps: f19, theirProps: { ...o16, children: e8.createElement(W, null, typeof o16.children == "function" ? o16.children(i13) : o16.children) }, slot: i13, defaultTag: _7, name: "Field" })))));
}
var W2 = Y(c18);
// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
import s16 from "react";

// node_modules/@headlessui/react/dist/hooks/use-resolved-tag.js
import { useCallback as r18, useState as a23 } from "react";
function d10(t13) {
  let e9 = typeof t13 == "string" ? t13 : undefined, [s16, o16] = a23(e9);
  return [e9 != null ? e9 : s16, r18((n15) => {
    e9 || n5(n15) && o16(n15.tagName.toLowerCase());
  }, [e9])];
}

// node_modules/@headlessui/react/dist/components/fieldset/fieldset.js
"use client";
var d11 = "fieldset";
function R7(t13, i13) {
  var o16;
  let a24 = a3(), { disabled: e9 = a24 || false, ...p9 } = t13, [n15, T9] = d10((o16 = t13.as) != null ? o16 : d11), l17 = y(i13, T9), [r19, f19] = V2(), m10 = n2({ disabled: e9 }), y8 = n15 === "fieldset" ? { ref: l17, "aria-labelledby": r19, disabled: e9 || undefined } : { ref: l17, role: "group", "aria-labelledby": r19, "aria-disabled": e9 || undefined }, F5 = K();
  return s16.createElement(l2, { value: e9 }, s16.createElement(f19, null, F5({ ourProps: y8, theirProps: p9, slot: m10, defaultTag: d11, name: "Fieldset" })));
}
var I9 = Y(R7);
// node_modules/@headlessui/react/dist/components/input/input.js
"use client";
var x8 = "input";
function h9(r19, p9) {
  let n15 = r4(), s17 = u4(), a24 = a3(), { id: l17 = s17 || `headlessui-input-${n15}`, disabled: e9 = a24 || false, autoFocus: o16 = false, invalid: t13 = false, ...i13 } = r19, d12 = N(), u22 = w3(), { isFocused: f19, focusProps: m10 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: o16 }), { isHovered: T9, hoverProps: b11 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: e9 }), y8 = V({ ref: p9, id: l17, "aria-labelledby": d12, "aria-describedby": u22, "aria-invalid": t13 ? "true" : undefined, disabled: e9 || undefined, autoFocus: o16 }, m10, b11), I10 = n2({ disabled: e9, invalid: t13, hover: T9, focus: f19, autofocus: o16 });
  return K()({ ourProps: y8, theirProps: i13, slot: I10, defaultTag: x8, name: "Input" });
}
var X3 = Y(h9);
// node_modules/@headlessui/react/dist/components/legend/legend.js
import p9 from "react";
"use client";
function o16(t13, n15) {
  return p9.createElement(Z, { as: "div", ref: n15, ...t13 });
}
var d12 = Y(o16);
// node_modules/@headlessui/react/dist/components/listbox/listbox.js
import D10, { Fragment as ce2, createContext as fe4, useCallback as K3, useContext as Te4, useEffect as Ae5, useMemo as _e, useRef as ae3, useState as Se2 } from "react";
import { flushSync as ie2 } from "react-dom";

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
import { useRef as l17 } from "react";

// node_modules/@headlessui/react/dist/utils/get-text-value.js
var a24 = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
function o17(e9) {
  var l17, n15;
  let i13 = (l17 = e9.innerText) != null ? l17 : "", t13 = e9.cloneNode(true);
  if (!n5(t13))
    return i13;
  let u22 = false;
  for (let f19 of t13.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
    f19.remove(), u22 = true;
  let r19 = u22 ? (n15 = t13.innerText) != null ? n15 : "" : i13;
  return a24.test(r19) && (r19 = r19.replace(a24, "")), r19;
}
function F5(e9) {
  let i13 = e9.getAttribute("aria-label");
  if (typeof i13 == "string")
    return i13.trim();
  let t13 = e9.getAttribute("aria-labelledby");
  if (t13) {
    let u22 = t13.split(" ").map((r19) => {
      let l17 = document.getElementById(r19);
      if (l17) {
        let n15 = l17.getAttribute("aria-label");
        return typeof n15 == "string" ? n15.trim() : o17(l17).trim();
      }
      return null;
    }).filter(Boolean);
    if (u22.length > 0)
      return u22.join(", ");
  }
  return o17(e9).trim();
}

// node_modules/@headlessui/react/dist/hooks/use-text-value.js
function s17(c19) {
  let t13 = l17(""), r19 = l17("");
  return o4(() => {
    let e9 = c19.current;
    if (!e9)
      return "";
    let u22 = e9.innerText;
    if (t13.current === u22)
      return r19.current;
    let n15 = F5(e9).trim().toLowerCase();
    return t13.current = u22, r19.current = n15, n15;
  });
}

// node_modules/@headlessui/react/dist/components/listbox/listbox-machine.js
var T9 = Object.defineProperty;
var y8 = (e9, o18, t13) => (o18 in e9) ? T9(e9, o18, { enumerable: true, configurable: true, writable: true, value: t13 }) : e9[o18] = t13;
var b11 = (e9, o18, t13) => (y8(e9, typeof o18 != "symbol" ? o18 + "" : o18, t13), t13);
var F6 = ((t13) => (t13[t13.Open = 0] = "Open", t13[t13.Closed = 1] = "Closed", t13))(F6 || {});
var P5 = ((t13) => (t13[t13.Single = 0] = "Single", t13[t13.Multi = 1] = "Multi", t13))(P5 || {});
var C8 = ((t13) => (t13[t13.Pointer = 0] = "Pointer", t13[t13.Other = 1] = "Other", t13))(C8 || {});
var k10 = ((r19) => (r19[r19.OpenListbox = 0] = "OpenListbox", r19[r19.CloseListbox = 1] = "CloseListbox", r19[r19.GoToOption = 2] = "GoToOption", r19[r19.Search = 3] = "Search", r19[r19.ClearSearch = 4] = "ClearSearch", r19[r19.SelectOption = 5] = "SelectOption", r19[r19.RegisterOptions = 6] = "RegisterOptions", r19[r19.UnregisterOptions = 7] = "UnregisterOptions", r19[r19.SetButtonElement = 8] = "SetButtonElement", r19[r19.SetOptionsElement = 9] = "SetOptionsElement", r19[r19.SortOptions = 10] = "SortOptions", r19[r19.MarkButtonAsMoved = 11] = "MarkButtonAsMoved", r19))(k10 || {});
function g5(e9, o18 = (t13) => t13) {
  let t13 = e9.activeOptionIndex !== null ? e9.options[e9.activeOptionIndex] : null, n15 = G2(o18(e9.options.slice()), (s18) => s18.dataRef.current.domRef.current), i13 = t13 ? n15.indexOf(t13) : null;
  return i13 === -1 && (i13 = null), { options: n15, activeOptionIndex: i13 };
}
var D9 = { [1](e9) {
  if (e9.dataRef.current.disabled || e9.listboxState === 1)
    return e9;
  let o18 = e9.buttonElement ? c16.Tracked(a18(e9.buttonElement)) : e9.buttonPositionState;
  return { ...e9, activeOptionIndex: null, pendingFocus: { focus: c12.Nothing }, listboxState: 1, __demoMode: false, buttonPositionState: o18 };
}, [0](e9, o18) {
  if (e9.dataRef.current.disabled || e9.listboxState === 0)
    return e9;
  let t13 = e9.activeOptionIndex, { isSelected: n15 } = e9.dataRef.current, i13 = e9.options.findIndex((s18) => n15(s18.dataRef.current.value));
  return i13 !== -1 && (t13 = i13), { ...e9, frozenValue: false, pendingFocus: o18.focus, listboxState: 0, activeOptionIndex: t13, __demoMode: false, buttonPositionState: c16.Idle };
}, [2](e9, o18) {
  var s18, l18, c19, p10, f19;
  if (e9.dataRef.current.disabled || e9.listboxState === 1)
    return e9;
  let t13 = { ...e9, searchQuery: "", activationTrigger: (s18 = o18.trigger) != null ? s18 : 1, __demoMode: false };
  if (o18.focus === c12.Nothing)
    return { ...t13, activeOptionIndex: null };
  if (o18.focus === c12.Specific)
    return { ...t13, activeOptionIndex: e9.options.findIndex((d13) => d13.id === o18.id) };
  if (o18.focus === c12.Previous) {
    let d13 = e9.activeOptionIndex;
    if (d13 !== null) {
      let O6 = e9.options[d13].dataRef.current.domRef, r19 = f14(o18, { resolveItems: () => e9.options, resolveActiveIndex: () => e9.activeOptionIndex, resolveId: (u22) => u22.id, resolveDisabled: (u22) => u22.dataRef.current.disabled });
      if (r19 !== null) {
        let u22 = e9.options[r19].dataRef.current.domRef;
        if (((l18 = O6.current) == null ? undefined : l18.previousElementSibling) === u22.current || ((c19 = u22.current) == null ? undefined : c19.previousElementSibling) === null)
          return { ...t13, activeOptionIndex: r19 };
      }
    }
  } else if (o18.focus === c12.Next) {
    let d13 = e9.activeOptionIndex;
    if (d13 !== null) {
      let O6 = e9.options[d13].dataRef.current.domRef, r19 = f14(o18, { resolveItems: () => e9.options, resolveActiveIndex: () => e9.activeOptionIndex, resolveId: (u22) => u22.id, resolveDisabled: (u22) => u22.dataRef.current.disabled });
      if (r19 !== null) {
        let u22 = e9.options[r19].dataRef.current.domRef;
        if (((p10 = O6.current) == null ? undefined : p10.nextElementSibling) === u22.current || ((f19 = u22.current) == null ? undefined : f19.nextElementSibling) === null)
          return { ...t13, activeOptionIndex: r19 };
      }
    }
  }
  let n15 = g5(e9), i13 = f14(o18, { resolveItems: () => n15.options, resolveActiveIndex: () => n15.activeOptionIndex, resolveId: (d13) => d13.id, resolveDisabled: (d13) => d13.dataRef.current.disabled });
  return { ...t13, ...n15, activeOptionIndex: i13 };
}, [3]: (e9, o18) => {
  if (e9.dataRef.current.disabled || e9.listboxState === 1)
    return e9;
  let n15 = e9.searchQuery !== "" ? 0 : 1, i13 = e9.searchQuery + o18.value.toLowerCase(), l18 = (e9.activeOptionIndex !== null ? e9.options.slice(e9.activeOptionIndex + n15).concat(e9.options.slice(0, e9.activeOptionIndex + n15)) : e9.options).find((p10) => {
    var f19;
    return !p10.dataRef.current.disabled && ((f19 = p10.dataRef.current.textValue) == null ? undefined : f19.startsWith(i13));
  }), c19 = l18 ? e9.options.indexOf(l18) : -1;
  return c19 === -1 || c19 === e9.activeOptionIndex ? { ...e9, searchQuery: i13 } : { ...e9, searchQuery: i13, activeOptionIndex: c19, activationTrigger: 1 };
}, [4](e9) {
  return e9.dataRef.current.disabled || e9.listboxState === 1 || e9.searchQuery === "" ? e9 : { ...e9, searchQuery: "" };
}, [5](e9) {
  return e9.dataRef.current.mode === 0 ? { ...e9, frozenValue: true } : { ...e9 };
}, [6]: (e9, o18) => {
  let t13 = e9.options.concat(o18.options), n15 = e9.activeOptionIndex;
  if (e9.pendingFocus.focus !== c12.Nothing && (n15 = f14(e9.pendingFocus, { resolveItems: () => t13, resolveActiveIndex: () => e9.activeOptionIndex, resolveId: (i13) => i13.id, resolveDisabled: (i13) => i13.dataRef.current.disabled })), e9.activeOptionIndex === null) {
    let { isSelected: i13 } = e9.dataRef.current;
    if (i13) {
      let s18 = t13.findIndex((l18) => i13 == null ? undefined : i13(l18.dataRef.current.value));
      s18 !== -1 && (n15 = s18);
    }
  }
  return { ...e9, options: t13, activeOptionIndex: n15, pendingFocus: { focus: c12.Nothing }, pendingShouldSort: true };
}, [7]: (e9, o18) => {
  let t13 = e9.options, n15 = [], i13 = new Set(o18.options);
  for (let [s18, l18] of t13.entries())
    if (i13.has(l18.id) && (n15.push(s18), i13.delete(l18.id), i13.size === 0))
      break;
  if (n15.length > 0) {
    t13 = t13.slice();
    for (let s18 of n15.reverse())
      t13.splice(s18, 1);
  }
  return { ...e9, options: t13, activationTrigger: 1 };
}, [8]: (e9, o18) => e9.buttonElement === o18.element ? e9 : { ...e9, buttonElement: o18.element }, [9]: (e9, o18) => e9.optionsElement === o18.element ? e9 : { ...e9, optionsElement: o18.element }, [10]: (e9) => e9.pendingShouldSort ? { ...e9, ...g5(e9), pendingShouldSort: false } : e9, [11](e9) {
  return e9.buttonPositionState.kind !== "Tracked" ? e9 : { ...e9, buttonPositionState: c16.Moved };
} };

class h10 extends T3 {
  constructor(t13) {
    super(t13);
    b11(this, "actions", { onChange: (t14) => {
      let { onChange: n15, compare: i13, mode: s18, value: l18 } = this.state.dataRef.current;
      return u(s18, { [0]: () => n15 == null ? undefined : n15(t14), [1]: () => {
        let c19 = l18.slice(), p10 = c19.findIndex((f19) => i13(f19, t14));
        return p10 === -1 ? c19.push(t14) : c19.splice(p10, 1), n15 == null ? undefined : n15(c19);
      } });
    }, registerOption: k3(() => {
      let t14 = [], n15 = new Set;
      return [(i13, s18) => {
        n15.has(s18) || (n15.add(s18), t14.push({ id: i13, dataRef: s18 }));
      }, () => (n15.clear(), this.send({ type: 6, options: t14.splice(0) }))];
    }), unregisterOption: k3(() => {
      let t14 = [];
      return [(n15) => t14.push(n15), () => {
        this.send({ type: 7, options: t14.splice(0) });
      }];
    }), goToOption: k3(() => {
      let t14 = null;
      return [(n15, i13) => {
        t14 = { type: 2, ...n15, trigger: i13 };
      }, () => t14 && this.send(t14)];
    }), closeListbox: () => {
      this.send({ type: 1 });
    }, openListbox: (t14) => {
      this.send({ type: 0, focus: t14 });
    }, selectActiveOption: () => {
      var t14;
      if (this.state.activeOptionIndex !== null) {
        let { dataRef: n15 } = this.state.options[this.state.activeOptionIndex];
        this.actions.selectOption(n15.current.value);
      } else
        this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (t14 = this.state.buttonElement) == null || t14.focus({ preventScroll: true }));
    }, selectOption: (t14) => {
      this.send({ type: 5, value: t14 });
    }, search: (t14) => {
      this.send({ type: 3, value: t14 });
    }, clearSearch: () => {
      this.send({ type: 4 });
    }, setButtonElement: (t14) => {
      this.send({ type: 8, element: t14 });
    }, setOptionsElement: (t14) => {
      this.send({ type: 9, element: t14 });
    } });
    b11(this, "selectors", { activeDescendantId(t14) {
      var s18;
      let { activeOptionIndex: n15, options: i13 } = t14;
      return n15 === null || (s18 = i13[n15]) == null ? undefined : s18.id;
    }, isActive(t14, n15) {
      var l18;
      let { activeOptionIndex: i13, options: s18 } = t14;
      return i13 !== null ? ((l18 = s18[i13]) == null ? undefined : l18.id) === n15 : false;
    }, hasFrozenValue(t14) {
      return t14.frozenValue;
    }, shouldScrollIntoView(t14, n15) {
      return t14.__demoMode || t14.listboxState !== 0 || t14.activationTrigger === 0 ? false : this.isActive(t14, n15);
    }, didButtonMove(t14) {
      return t14.buttonPositionState.kind === "Moved";
    } });
    this.on(6, () => {
      requestAnimationFrame(() => {
        this.send({ type: 10 });
      });
    });
    {
      let n15 = this.state.id, i13 = x2.get(null);
      this.disposables.add(i13.on(k4.Push, (s18) => {
        !i13.selectors.isTop(s18, n15) && this.state.listboxState === 0 && this.actions.closeListbox();
      })), this.on(0, () => i13.actions.push(n15)), this.on(1, () => i13.actions.pop(n15));
    }
    this.disposables.group((n15) => {
      this.on(1, (i13) => {
        i13.buttonElement && (n15.dispose(), n15.add(p6(i13.buttonElement, i13.buttonPositionState, () => {
          this.send({ type: 11 });
        })));
      });
    }), this.on(5, (n15, i13) => {
      var s18;
      this.actions.onChange(i13.value), this.state.dataRef.current.mode === 0 && (this.actions.closeListbox(), (s18 = this.state.buttonElement) == null || s18.focus({ preventScroll: true }));
    });
  }
  static new({ id: t13, __demoMode: n15 = false }) {
    return new h10({ id: t13, dataRef: { current: {} }, listboxState: n15 ? 0 : 1, options: [], searchQuery: "", activeOptionIndex: null, activationTrigger: 1, buttonElement: null, optionsElement: null, pendingShouldSort: false, pendingFocus: { focus: c12.Nothing }, frozenValue: false, __demoMode: n15, buttonPositionState: c16.Idle });
  }
  reduce(t13, n15) {
    return u(n15.type, D9, t13, n15);
  }
}

// node_modules/@headlessui/react/dist/components/listbox/listbox-machine-glue.js
import { createContext as n15, useContext as r19, useMemo as i13 } from "react";
var c19 = n15(null);
function p10(o18) {
  let e9 = r19(c19);
  if (e9 === null) {
    let t13 = new Error(`<${o18} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t13, u22), t13;
  }
  return e9;
}
function u22({ id: o18, __demoMode: e9 = false }) {
  let t13 = i13(() => h10.new({ id: o18, __demoMode: e9 }), []);
  return c13(() => t13.dispose()), t13;
}

// node_modules/@headlessui/react/dist/components/listbox/listbox.js
"use client";
var oe4 = fe4(null);
oe4.displayName = "ListboxDataContext";
function Q3(b12) {
  let E11 = Te4(oe4);
  if (E11 === null) {
    let m10 = new Error(`<${b12} /> is missing a parent <Listbox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(m10, Q3), m10;
  }
  return E11;
}
var Pt = ce2;
function gt(b12, E11) {
  let m10 = r4(), u23 = a3(), { value: s18, defaultValue: a25, form: _8, name: i14, onChange: y9, by: o18, invalid: x9 = false, disabled: O6 = u23 || false, horizontal: l18 = false, multiple: t13 = false, __demoMode: p11 = false, ...S8 } = b12;
  const h11 = l18 ? "horizontal" : "vertical";
  let I10 = y(E11), R8 = l3(a25), [c20 = t13 ? [] : undefined, L7] = b2(s18, y9, R8), f19 = u22({ id: m10, __demoMode: p11 }), k11 = ae3({ static: false, hold: false }), N4 = ae3(new Map), C9 = u9(o18), V5 = K3((P6) => u(n16.mode, { [P5.Multi]: () => c20.some((W3) => C9(W3, P6)), [P5.Single]: () => C9(c20, P6) }), [c20]), n16 = n2({ value: c20, disabled: O6, invalid: x9, mode: t13 ? P5.Multi : P5.Single, orientation: h11, onChange: L7, compare: C9, isSelected: V5, optionsPropsRef: k11, listRef: N4 });
  n(() => {
    f19.state.dataRef.current = n16;
  }, [n16]);
  let F7 = S3(f19, (P6) => P6.listboxState), U3 = x2.get(null), H8 = S3(U3, K3((P6) => U3.selectors.isTop(P6, m10), [U3, m10])), [A5, $4] = S3(f19, (P6) => [P6.buttonElement, P6.optionsElement]);
  k5(H8, [A5, $4], (P6, W3) => {
    f19.send({ type: k10.CloseListbox }), H4(W3, I4.Loose) || (P6.preventDefault(), A5 == null || A5.focus());
  });
  let r20 = n2({ open: F7 === F6.Open, disabled: O6, invalid: x9, value: c20 }), [M8, ne3] = V2({ inherit: true }), re2 = { ref: I10 }, q3 = K3(() => {
    if (R8 !== undefined)
      return L7 == null ? undefined : L7(R8);
  }, [L7, R8]), le2 = K();
  return D10.createElement(ne3, { value: M8, props: { htmlFor: A5 == null ? undefined : A5.id }, slot: { open: F7 === F6.Open, disabled: O6 } }, D10.createElement(Ae, null, D10.createElement(c19.Provider, { value: f19 }, D10.createElement(oe4.Provider, { value: n16 }, D10.createElement(c11, { value: u(F7, { [F6.Open]: i10.Open, [F6.Closed]: i10.Closed }) }, i14 != null && c20 != null && D10.createElement(j2, { disabled: O6, data: { [i14]: c20 }, form: _8, onReset: q3 }), le2({ ourProps: re2, theirProps: S8, slot: r20, defaultTag: Pt, name: "Listbox" }))))));
}
var vt = "button";
function Et(b12, E11) {
  let m10 = r4(), u23 = u4(), s18 = Q3("Listbox.Button"), a25 = p10("Listbox.Button"), { id: _8 = u23 || `headlessui-listbox-button-${m10}`, disabled: i14 = s18.disabled || false, autoFocus: y9 = false, ...o18 } = b12, x9 = y(E11, Fe(), a25.actions.setButtonElement), O6 = be(), [l18, t13, p11] = S3(a25, (r20) => [r20.listboxState, r20.buttonElement, r20.optionsElement]), S8 = l18 === F6.Open;
  L5(S8, { trigger: t13, action: K3((r20) => {
    if (t13 != null && t13.contains(r20.target))
      return S5.Ignore;
    let M8 = r20.target.closest('[role="option"]:not([data-disabled])');
    return n5(M8) ? S5.Select(M8) : p11 != null && p11.contains(r20.target) ? S5.Ignore : S5.Close;
  }, [t13, p11]), close: a25.actions.closeListbox, select: a25.actions.selectActiveOption });
  let h11 = o4((r20) => {
    switch (r20.key) {
      case o8.Enter:
        g(r20.currentTarget);
        break;
      case o8.Space:
      case o8.ArrowDown:
        r20.preventDefault(), a25.actions.openListbox({ focus: s18.value ? c12.Nothing : c12.First });
        break;
      case o8.ArrowUp:
        r20.preventDefault(), a25.actions.openListbox({ focus: s18.value ? c12.Nothing : c12.Last });
        break;
    }
  }), I10 = o4((r20) => {
    switch (r20.key) {
      case o8.Space:
        r20.preventDefault();
        break;
    }
  }), R8 = s8((r20) => {
    var M8;
    a25.state.listboxState === F6.Open ? (ie2(() => a25.actions.closeListbox()), (M8 = a25.state.buttonElement) == null || M8.focus({ preventScroll: true })) : (r20.preventDefault(), a25.actions.openListbox({ focus: c12.Nothing }));
  }), c20 = o4((r20) => r20.preventDefault()), L7 = N([_8]), f19 = w3(), { isFocusVisible: k11, focusProps: N4 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: y9 }), { isHovered: C9, hoverProps: V5 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: i14 }), { pressed: n16, pressProps: F7 } = w({ disabled: i14 }), U3 = n2({ open: l18 === F6.Open, active: n16 || l18 === F6.Open, disabled: i14, invalid: s18.invalid, value: s18.value, hover: C9, focus: k11, autofocus: y9 }), H8 = S3(a25, (r20) => r20.listboxState === F6.Open), A5 = V(O6(), { ref: x9, id: _8, type: e5(b12, t13), "aria-haspopup": "listbox", "aria-controls": p11 == null ? undefined : p11.id, "aria-expanded": H8, "aria-labelledby": L7, "aria-describedby": f19, disabled: i14 || undefined, autoFocus: y9, onKeyDown: h11, onKeyUp: I10, onKeyPress: c20 }, R8, N4, V5, F7);
  return K()({ ourProps: A5, theirProps: o18, slot: U3, defaultTag: vt, name: "Listbox.Button" });
}
var Oe2 = fe4(false);
var ht2 = "div";
var At = A.RenderStrategy | A.Static;
function _t(b12, E11) {
  let m10 = r4(), { id: u23 = `headlessui-listbox-options-${m10}`, anchor: s18, portal: a25 = false, modal: _8 = true, transition: i14 = false, ...y9 } = b12, o18 = ye(s18), [x9, O6] = Se2(null);
  o18 && (a25 = true);
  let l18 = Q3("Listbox.Options"), t13 = p10("Listbox.Options"), [p11, S8, h11, I10] = S3(t13, (e9) => [e9.listboxState, e9.buttonElement, e9.optionsElement, e9.__demoMode]), R8 = u13(S8), c20 = u13(h11), L7 = u17(), [f19, k11] = N2(i14, x9, L7 !== null ? (L7 & i10.Open) === i10.Open : p11 === F6.Open);
  p5(f19, S8, t13.actions.closeListbox);
  let N4 = I10 ? false : _8 && p11 === F6.Open;
  f11(N4, c20);
  let C9 = I10 ? false : _8 && p11 === F6.Open;
  y4(C9, { allowed: K3(() => [S8, h11], [S8, h11]) });
  let n16 = S3(t13, t13.selectors.didButtonMove) ? false : f19, F7 = S3(t13, t13.selectors.hasFrozenValue) && !b12.static, U3 = u16(F7, l18.value), H8 = K3((e9) => l18.compare(U3, e9), [l18.compare, U3]), A5 = S3(t13, (e9) => {
    var de5;
    if (o18 == null || !((de5 = o18 == null ? undefined : o18.to) != null && de5.includes("selection")))
      return null;
    let w11 = e9.options.findIndex((ve) => H8(ve.dataRef.current.value));
    return w11 === -1 && (w11 = 0), w11;
  }), $4 = (() => {
    if (o18 == null)
      return;
    if (A5 === null)
      return { ...o18, inner: undefined };
    let e9 = Array.from(l18.listRef.current.values());
    return { ...o18, inner: { listRef: { current: e9 }, index: A5 } };
  })(), [r20, M8] = Re($4), ne3 = Te(), re2 = y(E11, o18 ? r20 : null, t13.actions.setOptionsElement, O6), q3 = p();
  Ae5(() => {
    let e9 = h11;
    e9 && p11 === F6.Open && (d2(e9) || e9 == null || e9.focus({ preventScroll: true }));
  }, [p11, h11]);
  let le2 = o4((e9) => {
    var w11;
    switch (q3.dispose(), e9.key) {
      case o8.Space:
        if (t13.state.searchQuery !== "")
          return e9.preventDefault(), e9.stopPropagation(), t13.actions.search(e9.key);
      case o8.Enter:
        e9.preventDefault(), e9.stopPropagation(), t13.actions.selectActiveOption();
        break;
      case u(l18.orientation, { vertical: o8.ArrowDown, horizontal: o8.ArrowRight }):
        return e9.preventDefault(), e9.stopPropagation(), t13.actions.goToOption({ focus: c12.Next });
      case u(l18.orientation, { vertical: o8.ArrowUp, horizontal: o8.ArrowLeft }):
        return e9.preventDefault(), e9.stopPropagation(), t13.actions.goToOption({ focus: c12.Previous });
      case o8.Home:
      case o8.PageUp:
        return e9.preventDefault(), e9.stopPropagation(), t13.actions.goToOption({ focus: c12.First });
      case o8.End:
      case o8.PageDown:
        return e9.preventDefault(), e9.stopPropagation(), t13.actions.goToOption({ focus: c12.Last });
      case o8.Escape:
        e9.preventDefault(), e9.stopPropagation(), ie2(() => t13.actions.closeListbox()), (w11 = t13.state.buttonElement) == null || w11.focus({ preventScroll: true });
        return;
      case o8.Tab:
        e9.preventDefault(), e9.stopPropagation(), ie2(() => t13.actions.closeListbox()), R3(t13.state.buttonElement, e9.shiftKey ? T4.Previous : T4.Next);
        break;
      default:
        e9.key.length === 1 && (t13.actions.search(e9.key), q3.setTimeout(() => t13.actions.clearSearch(), 350));
        break;
    }
  }), P6 = S3(t13, (e9) => {
    var w11;
    return (w11 = e9.buttonElement) == null ? undefined : w11.id;
  }), W3 = n2({ open: p11 === F6.Open }), Le4 = V(o18 ? ne3() : {}, { id: u23, ref: re2, "aria-activedescendant": S3(t13, t13.selectors.activeDescendantId), "aria-multiselectable": l18.mode === P5.Multi ? true : undefined, "aria-labelledby": P6, "aria-orientation": l18.orientation, onKeyDown: le2, role: "listbox", tabIndex: p11 === F6.Open ? 0 : undefined, style: { ...y9.style, ...M8, "--button-width": w5(f19, S8, true).width }, ...x4(k11) }), Pe2 = K(), ge6 = _e(() => l18.mode === P5.Multi ? l18 : { ...l18, isSelected: H8 }, [l18, H8]);
  return D10.createElement(le, { enabled: a25 ? b12.static || f19 : false, ownerDocument: R8 }, D10.createElement(oe4.Provider, { value: ge6 }, Pe2({ ourProps: Le4, theirProps: y9, slot: W3, defaultTag: ht2, features: At, visible: n16, name: "Listbox.Options" })));
}
var St = "div";
function Dt(b12, E11) {
  let m10 = r4(), { id: u23 = `headlessui-listbox-option-${m10}`, disabled: s18 = false, value: a25, ..._8 } = b12, i14 = Te4(Oe2) === true, y9 = Q3("Listbox.Option"), o18 = p10("Listbox.Option"), x9 = S3(o18, (n16) => o18.selectors.isActive(n16, u23)), O6 = y9.isSelected(a25), l18 = ae3(null), t13 = s17(l18), p11 = s3({ disabled: s18, value: a25, domRef: l18, get textValue() {
    return t13();
  } }), S8 = y(E11, l18, (n16) => {
    n16 ? y9.listRef.current.set(u23, n16) : y9.listRef.current.delete(u23);
  }), h11 = S3(o18, (n16) => o18.selectors.shouldScrollIntoView(n16, u23));
  n(() => {
    if (h11)
      return o2().requestAnimationFrame(() => {
        var n16, F7;
        (F7 = (n16 = l18.current) == null ? undefined : n16.scrollIntoView) == null || F7.call(n16, { block: "nearest" });
      });
  }, [h11, l18]), n(() => {
    if (!i14)
      return o18.actions.registerOption(u23, p11), () => o18.actions.unregisterOption(u23);
  }, [p11, u23, i14]);
  let I10 = o4((n16) => {
    if (s18)
      return n16.preventDefault();
    o18.actions.selectOption(a25);
  }), R8 = o4(() => {
    if (s18)
      return o18.actions.goToOption({ focus: c12.Nothing });
    o18.actions.goToOption({ focus: c12.Specific, id: u23 });
  }), c20 = u15(), L7 = o4((n16) => c20.update(n16)), f19 = o4((n16) => {
    c20.wasMoved(n16) && (s18 || x9 && o18.state.activationTrigger === C8.Pointer || o18.actions.goToOption({ focus: c12.Specific, id: u23 }, C8.Pointer));
  }), k11 = o4((n16) => {
    c20.wasMoved(n16) && (s18 || x9 && o18.state.activationTrigger === C8.Pointer && o18.actions.goToOption({ focus: c12.Nothing }));
  }), N4 = n2({ active: x9, focus: x9, selected: O6, disabled: s18, selectedOption: O6 && i14 }), C9 = i14 ? {} : { id: u23, ref: S8, role: "option", tabIndex: s18 === true ? undefined : -1, "aria-disabled": s18 === true ? true : undefined, "aria-selected": O6, disabled: undefined, onClick: I10, onFocus: R8, onPointerEnter: L7, onMouseEnter: L7, onPointerMove: f19, onMouseMove: f19, onPointerLeave: k11, onMouseLeave: k11 }, V5 = K();
  return !O6 && i14 ? null : V5({ ourProps: C9, theirProps: _8, slot: N4, defaultTag: St, name: "Listbox.Option" });
}
var Rt = ce2;
function Ft(b12, E11) {
  let { options: m10, placeholder: u23, ...s18 } = b12, _8 = { ref: y(E11) }, i14 = Q3("ListboxSelectedOption"), y9 = n2({}), o18 = i14.value === undefined || i14.value === null || i14.mode === P5.Multi && Array.isArray(i14.value) && i14.value.length === 0, x9 = K();
  return D10.createElement(Oe2.Provider, { value: true }, x9({ ourProps: _8, theirProps: { ...s18, children: D10.createElement(D10.Fragment, null, u23 && o18 ? u23 : m10) }, slot: y9, defaultTag: Rt, name: "ListboxSelectedOption" }));
}
var Ct = Y(gt);
var Mt = Y(Et);
var wt = Z;
var Bt = Y(_t);
var It = Y(Dt);
var kt = Y(Ft);
var Mo2 = Object.assign(Ct, { Button: Mt, Label: wt, Options: Bt, Option: It, SelectedOption: kt });
// node_modules/@headlessui/react/dist/components/menu/menu.js
import h12, { Fragment as ee3, useCallback as k12, useEffect as fe5, useRef as Q4, useState as ye3 } from "react";
import { flushSync as $4 } from "react-dom";

// node_modules/@headlessui/react/dist/components/menu/menu-machine.js
var y9 = Object.defineProperty;
var M8 = (e9, i14, t13) => (i14 in e9) ? y9(e9, i14, { enumerable: true, configurable: true, writable: true, value: t13 }) : e9[i14] = t13;
var S8 = (e9, i14, t13) => (M8(e9, typeof i14 != "symbol" ? i14 + "" : i14, t13), t13);
var P6 = ((t13) => (t13[t13.Open = 0] = "Open", t13[t13.Closed = 1] = "Closed", t13))(P6 || {});
var D11 = ((t13) => (t13[t13.Pointer = 0] = "Pointer", t13[t13.Other = 1] = "Other", t13))(D11 || {});
var C9 = ((o18) => (o18[o18.OpenMenu = 0] = "OpenMenu", o18[o18.CloseMenu = 1] = "CloseMenu", o18[o18.GoToItem = 2] = "GoToItem", o18[o18.Search = 3] = "Search", o18[o18.ClearSearch = 4] = "ClearSearch", o18[o18.RegisterItems = 5] = "RegisterItems", o18[o18.UnregisterItems = 6] = "UnregisterItems", o18[o18.SetButtonElement = 7] = "SetButtonElement", o18[o18.SetItemsElement = 8] = "SetItemsElement", o18[o18.SortItems = 9] = "SortItems", o18[o18.MarkButtonAsMoved = 10] = "MarkButtonAsMoved", o18))(C9 || {});
function x9(e9, i14 = (t13) => t13) {
  let t13 = e9.activeItemIndex !== null ? e9.items[e9.activeItemIndex] : null, n16 = G2(i14(e9.items.slice()), (s18) => s18.dataRef.current.domRef.current), r20 = t13 ? n16.indexOf(t13) : null;
  return r20 === -1 && (r20 = null), { items: n16, activeItemIndex: r20 };
}
var k11 = { [1](e9) {
  if (e9.menuState === 1)
    return e9;
  let i14 = e9.buttonElement ? c16.Tracked(a18(e9.buttonElement)) : e9.buttonPositionState;
  return { ...e9, activeItemIndex: null, pendingFocus: { focus: c12.Nothing }, menuState: 1, buttonPositionState: i14 };
}, [0](e9, i14) {
  return e9.menuState === 0 ? e9 : { ...e9, __demoMode: false, pendingFocus: i14.focus, menuState: 0, buttonPositionState: c16.Idle };
}, [2]: (e9, i14) => {
  var s18, l18, a25, I10, f19;
  if (e9.menuState === 1)
    return e9;
  let t13 = { ...e9, searchQuery: "", activationTrigger: (s18 = i14.trigger) != null ? s18 : 1, __demoMode: false };
  if (i14.focus === c12.Nothing)
    return { ...t13, activeItemIndex: null };
  if (i14.focus === c12.Specific)
    return { ...t13, activeItemIndex: e9.items.findIndex((d13) => d13.id === i14.id) };
  if (i14.focus === c12.Previous) {
    let d13 = e9.activeItemIndex;
    if (d13 !== null) {
      let o18 = e9.items[d13].dataRef.current.domRef, c20 = f14(i14, { resolveItems: () => e9.items, resolveActiveIndex: () => e9.activeItemIndex, resolveId: (u23) => u23.id, resolveDisabled: (u23) => u23.dataRef.current.disabled });
      if (c20 !== null) {
        let u23 = e9.items[c20].dataRef.current.domRef;
        if (((l18 = o18.current) == null ? undefined : l18.previousElementSibling) === u23.current || ((a25 = u23.current) == null ? undefined : a25.previousElementSibling) === null)
          return { ...t13, activeItemIndex: c20 };
      }
    }
  } else if (i14.focus === c12.Next) {
    let d13 = e9.activeItemIndex;
    if (d13 !== null) {
      let o18 = e9.items[d13].dataRef.current.domRef, c20 = f14(i14, { resolveItems: () => e9.items, resolveActiveIndex: () => e9.activeItemIndex, resolveId: (u23) => u23.id, resolveDisabled: (u23) => u23.dataRef.current.disabled });
      if (c20 !== null) {
        let u23 = e9.items[c20].dataRef.current.domRef;
        if (((I10 = o18.current) == null ? undefined : I10.nextElementSibling) === u23.current || ((f19 = u23.current) == null ? undefined : f19.nextElementSibling) === null)
          return { ...t13, activeItemIndex: c20 };
      }
    }
  }
  let n16 = x9(e9), r20 = f14(i14, { resolveItems: () => n16.items, resolveActiveIndex: () => n16.activeItemIndex, resolveId: (d13) => d13.id, resolveDisabled: (d13) => d13.dataRef.current.disabled });
  return { ...t13, ...n16, activeItemIndex: r20 };
}, [3]: (e9, i14) => {
  let n16 = e9.searchQuery !== "" ? 0 : 1, r20 = e9.searchQuery + i14.value.toLowerCase(), l18 = (e9.activeItemIndex !== null ? e9.items.slice(e9.activeItemIndex + n16).concat(e9.items.slice(0, e9.activeItemIndex + n16)) : e9.items).find((I10) => {
    var f19;
    return ((f19 = I10.dataRef.current.textValue) == null ? undefined : f19.startsWith(r20)) && !I10.dataRef.current.disabled;
  }), a25 = l18 ? e9.items.indexOf(l18) : -1;
  return a25 === -1 || a25 === e9.activeItemIndex ? { ...e9, searchQuery: r20 } : { ...e9, searchQuery: r20, activeItemIndex: a25, activationTrigger: 1 };
}, [4](e9) {
  return e9.searchQuery === "" ? e9 : { ...e9, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e9, i14) => {
  let t13 = e9.items.concat(i14.items.map((r20) => r20)), n16 = e9.activeItemIndex;
  return e9.pendingFocus.focus !== c12.Nothing && (n16 = f14(e9.pendingFocus, { resolveItems: () => t13, resolveActiveIndex: () => e9.activeItemIndex, resolveId: (r20) => r20.id, resolveDisabled: (r20) => r20.dataRef.current.disabled })), { ...e9, items: t13, activeItemIndex: n16, pendingFocus: { focus: c12.Nothing }, pendingShouldSort: true };
}, [6]: (e9, i14) => {
  let t13 = e9.items, n16 = [], r20 = new Set(i14.items);
  for (let [s18, l18] of t13.entries())
    if (r20.has(l18.id) && (n16.push(s18), r20.delete(l18.id), r20.size === 0))
      break;
  if (n16.length > 0) {
    t13 = t13.slice();
    for (let s18 of n16.reverse())
      t13.splice(s18, 1);
  }
  return { ...e9, items: t13, activationTrigger: 1 };
}, [7]: (e9, i14) => e9.buttonElement === i14.element ? e9 : { ...e9, buttonElement: i14.element }, [8]: (e9, i14) => e9.itemsElement === i14.element ? e9 : { ...e9, itemsElement: i14.element }, [9]: (e9) => e9.pendingShouldSort ? { ...e9, ...x9(e9), pendingShouldSort: false } : e9, [10](e9) {
  return e9.buttonPositionState.kind !== "Tracked" ? e9 : { ...e9, buttonPositionState: c16.Moved };
} };

class h11 extends T3 {
  constructor(t13) {
    super(t13);
    S8(this, "actions", { registerItem: k3(() => {
      let t14 = [], n16 = new Set;
      return [(r20, s18) => {
        n16.has(s18) || (n16.add(s18), t14.push({ id: r20, dataRef: s18 }));
      }, () => (n16.clear(), this.send({ type: 5, items: t14.splice(0) }))];
    }), unregisterItem: k3(() => {
      let t14 = [];
      return [(n16) => t14.push(n16), () => this.send({ type: 6, items: t14.splice(0) })];
    }) });
    S8(this, "selectors", { activeDescendantId(t14) {
      var s18;
      let { activeItemIndex: n16, items: r20 } = t14;
      return n16 === null || (s18 = r20[n16]) == null ? undefined : s18.id;
    }, isActive(t14, n16) {
      var l18;
      let { activeItemIndex: r20, items: s18 } = t14;
      return r20 !== null ? ((l18 = s18[r20]) == null ? undefined : l18.id) === n16 : false;
    }, shouldScrollIntoView(t14, n16) {
      return t14.__demoMode || t14.menuState !== 0 || t14.activationTrigger === 0 ? false : this.isActive(t14, n16);
    }, didButtonMove(t14) {
      return t14.buttonPositionState.kind === "Moved";
    } });
    this.on(5, () => {
      this.disposables.requestAnimationFrame(() => {
        this.send({ type: 9 });
      });
    });
    {
      let n16 = this.state.id, r20 = x2.get(null);
      this.disposables.add(r20.on(k4.Push, (s18) => {
        !r20.selectors.isTop(s18, n16) && this.state.menuState === 0 && this.send({ type: 1 });
      })), this.on(0, () => r20.actions.push(n16)), this.on(1, () => r20.actions.pop(n16));
    }
    this.disposables.group((n16) => {
      this.on(1, (r20) => {
        r20.buttonElement && (n16.dispose(), n16.add(p6(r20.buttonElement, r20.buttonPositionState, () => {
          this.send({ type: 10 });
        })));
      });
    });
  }
  static new({ id: t13, __demoMode: n16 = false }) {
    return new h11({ id: t13, __demoMode: n16, menuState: n16 ? 0 : 1, buttonElement: null, itemsElement: null, items: [], searchQuery: "", activeItemIndex: null, activationTrigger: 1, pendingShouldSort: false, pendingFocus: { focus: c12.Nothing }, buttonPositionState: c16.Idle });
  }
  reduce(t13, n16) {
    return u(n16.type, k11, t13, n16);
  }
}

// node_modules/@headlessui/react/dist/components/menu/menu-machine-glue.js
import { createContext as r20, useContext as o18, useMemo as u23 } from "react";
var a25 = r20(null);
function p11(t13) {
  let n16 = o18(a25);
  if (n16 === null) {
    let e9 = new Error(`<${t13} /> is missing a parent <Menu /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e9, s18), e9;
  }
  return n16;
}
function s18({ id: t13, __demoMode: n16 = false }) {
  let e9 = u23(() => h11.new({ id: t13, __demoMode: n16 }), []);
  return c13(() => e9.dispose()), e9;
}

// node_modules/@headlessui/react/dist/components/menu/menu.js
"use client";
var Ze = ee3;
function et(m10, y10) {
  let l18 = r4(), { __demoMode: a26 = false, ...p12 } = m10, s19 = s18({ id: l18, __demoMode: a26 }), [n16, M9, f19] = S3(s19, (d13) => [d13.menuState, d13.itemsElement, d13.buttonElement]), _8 = y(y10), o19 = x2.get(null), F7 = S3(o19, k12((d13) => o19.selectors.isTop(d13, l18), [o19, l18]));
  k5(F7, [f19, M9], (d13, T10) => {
    var P7;
    s19.send({ type: C9.CloseMenu }), H4(T10, I4.Loose) || (d13.preventDefault(), (P7 = s19.state.buttonElement) == null || P7.focus());
  });
  let I10 = o4(() => {
    s19.send({ type: C9.CloseMenu });
  }), b12 = n2({ open: n16 === P6.Open, close: I10 }), i14 = { ref: _8 }, g6 = K();
  return h12.createElement(Ae, null, h12.createElement(a25.Provider, { value: s19 }, h12.createElement(c11, { value: u(n16, { [P6.Open]: i10.Open, [P6.Closed]: i10.Closed }) }, g6({ ourProps: i14, theirProps: p12, slot: b12, defaultTag: Ze, name: "Menu" }))));
}
var tt = "button";
function ot(m10, y10) {
  let l18 = p11("Menu.Button"), a26 = r4(), { id: p12 = `headlessui-menu-button-${a26}`, disabled: s19 = false, autoFocus: n16 = false, ...M9 } = m10, f19 = Q4(null), _8 = be(), o19 = y(y10, f19, Fe(), o4((t13) => l18.send({ type: C9.SetButtonElement, element: t13 }))), F7 = o4((t13) => {
    switch (t13.key) {
      case o8.Space:
      case o8.Enter:
      case o8.ArrowDown:
        t13.preventDefault(), t13.stopPropagation(), l18.send({ type: C9.OpenMenu, focus: { focus: c12.First } });
        break;
      case o8.ArrowUp:
        t13.preventDefault(), t13.stopPropagation(), l18.send({ type: C9.OpenMenu, focus: { focus: c12.Last } });
        break;
    }
  }), I10 = o4((t13) => {
    switch (t13.key) {
      case o8.Space:
        t13.preventDefault();
        break;
    }
  }), [b12, i14, g6] = S3(l18, (t13) => [t13.menuState, t13.buttonElement, t13.itemsElement]), d13 = b12 === P6.Open;
  L5(d13, { trigger: i14, action: k12((t13) => {
    if (i14 != null && i14.contains(t13.target))
      return S5.Ignore;
    let S9 = t13.target.closest('[role="menuitem"]:not([data-disabled])');
    return n5(S9) ? S5.Select(S9) : g6 != null && g6.contains(t13.target) ? S5.Ignore : S5.Close;
  }, [i14, g6]), close: k12(() => l18.send({ type: C9.CloseMenu }), []), select: k12((t13) => t13.click(), []) });
  let T10 = s8((t13) => {
    var S9;
    s19 || (b12 === P6.Open ? ($4(() => l18.send({ type: C9.CloseMenu })), (S9 = f19.current) == null || S9.focus({ preventScroll: true })) : (t13.preventDefault(), l18.send({ type: C9.OpenMenu, focus: { focus: c12.Nothing }, trigger: D11.Pointer })));
  }), { isFocusVisible: P7, focusProps: L7 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: n16 }), { isHovered: O6, hoverProps: v9 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: s19 }), { pressed: D12, pressProps: U3 } = w({ disabled: s19 }), H8 = n2({ open: b12 === P6.Open, active: D12 || b12 === P6.Open, disabled: s19, hover: O6, focus: P7, autofocus: n16 }), G5 = V(_8(), { ref: o19, id: p12, type: e5(m10, f19.current), "aria-haspopup": "menu", "aria-controls": g6 == null ? undefined : g6.id, "aria-expanded": b12 === P6.Open, disabled: s19 || undefined, autoFocus: n16, onKeyDown: F7, onKeyUp: I10 }, T10, L7, v9, U3);
  return K()({ ourProps: G5, theirProps: M9, slot: H8, defaultTag: tt, name: "Menu.Button" });
}
var nt = "div";
var rt = A.RenderStrategy | A.Static;
function at(m10, y10) {
  let l18 = r4(), { id: a26 = `headlessui-menu-items-${l18}`, anchor: p12, portal: s19 = false, modal: n16 = true, transition: M9 = false, ...f19 } = m10, _8 = ye(p12), o19 = p11("Menu.Items"), [F7, I10] = Re(_8), b12 = Te(), [i14, g6] = ye3(null), d13 = y(y10, _8 ? F7 : null, o4((e9) => o19.send({ type: C9.SetItemsElement, element: e9 })), g6), [T10, P7] = S3(o19, (e9) => [e9.menuState, e9.buttonElement]), L7 = u13(P7), O6 = u13(i14);
  _8 && (s19 = true);
  let v9 = u17(), [D12, U3] = N2(M9, i14, v9 !== null ? (v9 & i10.Open) === i10.Open : T10 === P6.Open);
  p5(D12, P7, () => {
    o19.send({ type: C9.CloseMenu });
  });
  let H8 = S3(o19, (e9) => e9.__demoMode), G5 = H8 ? false : n16 && T10 === P6.Open;
  f11(G5, O6);
  let w11 = H8 ? false : n16 && T10 === P6.Open;
  y4(w11, { allowed: k12(() => [P7, i14], [P7, i14]) });
  let S9 = S3(o19, o19.selectors.didButtonMove) ? false : D12;
  fe5(() => {
    let e9 = i14;
    e9 && T10 === P6.Open && (d2(e9) || e9.focus({ preventScroll: true }));
  }, [T10, i14]), F2(T10 === P6.Open, { container: i14, accept(e9) {
    return e9.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : e9.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(e9) {
    e9.setAttribute("role", "none");
  } });
  let z2 = p(), le2 = o4((e9) => {
    var N4, Y3, Z3;
    switch (z2.dispose(), e9.key) {
      case o8.Space:
        if (o19.state.searchQuery !== "")
          return e9.preventDefault(), e9.stopPropagation(), o19.send({ type: C9.Search, value: e9.key });
      case o8.Enter:
        if (e9.preventDefault(), e9.stopPropagation(), o19.state.activeItemIndex !== null) {
          let { dataRef: de5 } = o19.state.items[o19.state.activeItemIndex];
          (Y3 = (N4 = de5.current) == null ? undefined : N4.domRef.current) == null || Y3.click();
        }
        o19.send({ type: C9.CloseMenu }), K2(o19.state.buttonElement);
        break;
      case o8.ArrowDown:
        return e9.preventDefault(), e9.stopPropagation(), o19.send({ type: C9.GoToItem, focus: c12.Next });
      case o8.ArrowUp:
        return e9.preventDefault(), e9.stopPropagation(), o19.send({ type: C9.GoToItem, focus: c12.Previous });
      case o8.Home:
      case o8.PageUp:
        return e9.preventDefault(), e9.stopPropagation(), o19.send({ type: C9.GoToItem, focus: c12.First });
      case o8.End:
      case o8.PageDown:
        return e9.preventDefault(), e9.stopPropagation(), o19.send({ type: C9.GoToItem, focus: c12.Last });
      case o8.Escape:
        e9.preventDefault(), e9.stopPropagation(), $4(() => o19.send({ type: C9.CloseMenu })), (Z3 = o19.state.buttonElement) == null || Z3.focus({ preventScroll: true });
        break;
      case o8.Tab:
        e9.preventDefault(), e9.stopPropagation(), $4(() => o19.send({ type: C9.CloseMenu })), R3(o19.state.buttonElement, e9.shiftKey ? T4.Previous : T4.Next);
        break;
      default:
        e9.key.length === 1 && (o19.send({ type: C9.Search, value: e9.key }), z2.setTimeout(() => o19.send({ type: C9.ClearSearch }), 350));
        break;
    }
  }), pe3 = o4((e9) => {
    switch (e9.key) {
      case o8.Space:
        e9.preventDefault();
        break;
    }
  }), ie3 = n2({ open: T10 === P6.Open }), ue4 = V(_8 ? b12() : {}, { "aria-activedescendant": S3(o19, o19.selectors.activeDescendantId), "aria-labelledby": S3(o19, (e9) => {
    var N4;
    return (N4 = e9.buttonElement) == null ? undefined : N4.id;
  }), id: a26, onKeyDown: le2, onKeyUp: pe3, role: "menu", tabIndex: T10 === P6.Open ? 0 : undefined, ref: d13, style: { ...f19.style, ...I10, "--button-width": w5(D12, P7, true).width }, ...x4(U3) }), me4 = K();
  return h12.createElement(le, { enabled: s19 ? m10.static || D12 : false, ownerDocument: L7 }, me4({ ourProps: ue4, theirProps: f19, slot: ie3, defaultTag: nt, features: rt, visible: S9, name: "Menu.Items" }));
}
var st = ee3;
function lt(m10, y10) {
  let l18 = r4(), { id: a26 = `headlessui-menu-item-${l18}`, disabled: p12 = false, ...s19 } = m10, n16 = p11("Menu.Item"), M9 = S3(n16, (t13) => n16.selectors.isActive(t13, a26)), f19 = Q4(null), _8 = y(y10, f19), o19 = S3(n16, (t13) => n16.selectors.shouldScrollIntoView(t13, a26));
  n(() => {
    if (o19)
      return o2().requestAnimationFrame(() => {
        var t13, S9;
        (S9 = (t13 = f19.current) == null ? undefined : t13.scrollIntoView) == null || S9.call(t13, { block: "nearest" });
      });
  }, [o19, f19]);
  let F7 = s17(f19), I10 = Q4({ disabled: p12, domRef: f19, get textValue() {
    return F7();
  } });
  n(() => {
    I10.current.disabled = p12;
  }, [I10, p12]), n(() => (n16.actions.registerItem(a26, I10), () => n16.actions.unregisterItem(a26)), [I10, a26]);
  let b12 = o4(() => {
    n16.send({ type: C9.CloseMenu });
  }), i14 = o4((t13) => {
    if (p12)
      return t13.preventDefault();
    n16.send({ type: C9.CloseMenu }), K2(n16.state.buttonElement);
  }), g6 = o4(() => {
    if (p12)
      return n16.send({ type: C9.GoToItem, focus: c12.Nothing });
    n16.send({ type: C9.GoToItem, focus: c12.Specific, id: a26 });
  }), d13 = u15(), T10 = o4((t13) => d13.update(t13)), P7 = o4((t13) => {
    d13.wasMoved(t13) && (p12 || M9 || n16.send({ type: C9.GoToItem, focus: c12.Specific, id: a26, trigger: D11.Pointer }));
  }), L7 = o4((t13) => {
    d13.wasMoved(t13) && (p12 || M9 && n16.state.activationTrigger === D11.Pointer && n16.send({ type: C9.GoToItem, focus: c12.Nothing }));
  }), [O6, v9] = V2(), [D12, U3] = H3(), H8 = n2({ active: M9, focus: M9, disabled: p12, close: b12 }), G5 = { id: a26, ref: _8, role: "menuitem", tabIndex: p12 === true ? undefined : -1, "aria-disabled": p12 === true ? true : undefined, "aria-labelledby": O6, "aria-describedby": D12, disabled: undefined, onClick: i14, onFocus: g6, onPointerEnter: T10, onMouseEnter: T10, onPointerMove: P7, onMouseMove: P7, onPointerLeave: L7, onMouseLeave: L7 }, w11 = K();
  return h12.createElement(v9, null, h12.createElement(U3, null, w11({ ourProps: G5, theirProps: s19, slot: H8, defaultTag: st, name: "Menu.Item" })));
}
var pt = "div";
function it(m10, y10) {
  let [l18, a26] = V2(), p12 = m10, s19 = { ref: y10, "aria-labelledby": l18, role: "group" }, n16 = K();
  return h12.createElement(a26, null, n16({ ourProps: s19, theirProps: p12, slot: {}, defaultTag: pt, name: "Menu.Section" }));
}
var ut = "header";
function mt(m10, y10) {
  let l18 = r4(), { id: a26 = `headlessui-menu-heading-${l18}`, ...p12 } = m10, s19 = C4();
  n(() => s19.register(a26), [a26, s19.register]);
  let n16 = { id: a26, ref: y10, role: "presentation", ...s19.props };
  return K()({ ourProps: n16, theirProps: p12, slot: {}, defaultTag: ut, name: "Menu.Heading" });
}
var dt = "div";
function Tt(m10, y10) {
  let l18 = m10, a26 = { ref: y10, role: "separator" };
  return K()({ ourProps: a26, theirProps: l18, slot: {}, defaultTag: dt, name: "Menu.Separator" });
}
var ct = Y(et);
var ft = Y(ot);
var yt = Y(at);
var gt2 = Y(lt);
var Pt2 = Y(it);
var Et2 = Y(mt);
var Mt2 = Y(Tt);
var lo = Object.assign(ct, { Button: ft, Items: yt, Item: gt2, Section: Pt2, Heading: Et2, Separator: Mt2 });
// node_modules/@headlessui/react/dist/components/popover/popover.js
import v10, { createContext as _e2, useCallback as ee4, useContext as Ce2, useEffect as pe3, useMemo as De3, useRef as ue4, useState as ie3 } from "react";

// node_modules/@headlessui/react/dist/components/popover/popover-machine.js
var f19 = Object.defineProperty;
var b12 = (t13, n16, e9) => (n16 in t13) ? f19(t13, n16, { enumerable: true, configurable: true, writable: true, value: e9 }) : t13[n16] = e9;
var p12 = (t13, n16, e9) => (b12(t13, typeof n16 != "symbol" ? n16 + "" : n16, e9), e9);
var v9 = ((e9) => (e9[e9.Open = 0] = "Open", e9[e9.Closed = 1] = "Closed", e9))(v9 || {});
var h13 = ((r21) => (r21[r21.OpenPopover = 0] = "OpenPopover", r21[r21.ClosePopover = 1] = "ClosePopover", r21[r21.SetButton = 2] = "SetButton", r21[r21.SetButtonId = 3] = "SetButtonId", r21[r21.SetPanel = 4] = "SetPanel", r21[r21.SetPanelId = 5] = "SetPanelId", r21))(h13 || {});
var E11 = { [0]: (t13) => t13.popoverState === 0 ? t13 : { ...t13, popoverState: 0, __demoMode: false }, [1](t13) {
  return t13.popoverState === 1 ? t13 : { ...t13, popoverState: 1, __demoMode: false };
}, [2](t13, n16) {
  return t13.button === n16.button ? t13 : { ...t13, button: n16.button };
}, [3](t13, n16) {
  return t13.buttonId === n16.buttonId ? t13 : { ...t13, buttonId: n16.buttonId };
}, [4](t13, n16) {
  return t13.panel === n16.panel ? t13 : { ...t13, panel: n16.panel };
}, [5](t13, n16) {
  return t13.panelId === n16.panelId ? t13 : { ...t13, panelId: n16.panelId };
} };

class d13 extends T3 {
  constructor(e9) {
    super(e9);
    p12(this, "actions", { close: () => this.send({ type: 1 }), refocusableClose: (e10) => {
      this.actions.close();
      let o19 = (() => e10 ? n5(e10) ? e10 : ("current" in e10) && n5(e10.current) ? e10.current : this.state.button : this.state.button)();
      o19 == null || o19.focus();
    }, open: () => this.send({ type: 0 }), setButtonId: (e10) => this.send({ type: 3, buttonId: e10 }), setButton: (e10) => this.send({ type: 2, button: e10 }), setPanelId: (e10) => this.send({ type: 5, panelId: e10 }), setPanel: (e10) => this.send({ type: 4, panel: e10 }) });
    p12(this, "selectors", { isPortalled: (e10) => {
      var i14;
      if (!e10.button || !e10.panel)
        return false;
      let o19 = (i14 = l(e10.button)) != null ? i14 : document;
      for (let u24 of o19.querySelectorAll("body > *"))
        if (Number(u24 == null ? undefined : u24.contains(e10.button)) ^ Number(u24 == null ? undefined : u24.contains(e10.panel)))
          return true;
      let l18 = x3(o19), s19 = l18.indexOf(e10.button), r21 = (s19 + l18.length - 1) % l18.length, c20 = (s19 + 1) % l18.length, S9 = l18[r21], m10 = l18[c20];
      return !e10.panel.contains(S9) && !e10.panel.contains(m10);
    } });
    {
      let o19 = this.state.id, l18 = x2.get(null);
      this.on(0, () => l18.actions.push(o19)), this.on(1, () => l18.actions.pop(o19));
    }
  }
  static new({ id: e9, __demoMode: o19 = false }) {
    return new d13({ id: e9, __demoMode: o19, popoverState: o19 ? 0 : 1, buttons: { current: [] }, button: null, buttonId: null, panel: null, panelId: null, beforePanelSentinel: { current: null }, afterPanelSentinel: { current: null }, afterButtonSentinel: { current: null } });
  }
  reduce(e9, o19) {
    return u(o19.type, E11, e9, o19);
  }
}

// node_modules/@headlessui/react/dist/components/popover/popover-machine-glue.js
import { createContext as t13, useContext as n16, useMemo as i14 } from "react";
var a26 = t13(null);
function u24(r21) {
  let o19 = n16(a26);
  if (o19 === null) {
    let e9 = new Error(`<${r21} /> is missing a parent <Popover /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e9, u24), e9;
  }
  return o19;
}
function f20({ id: r21, __demoMode: o19 = false }) {
  let e9 = i14(() => d13.new({ id: r21, __demoMode: o19 }), []);
  return c13(() => e9.dispose()), e9;
}

// node_modules/@headlessui/react/dist/components/popover/popover.js
"use client";
var Fe3 = _e2(null);
Fe3.displayName = "PopoverGroupContext";
function we2() {
  return Ce2(Fe3);
}
var de5 = _e2(null);
de5.displayName = "PopoverPanelContext";
function mt2() {
  return Ce2(de5);
}
var vt2 = "div";
function Tt2(E12, O6) {
  var M9;
  let R8 = r4(), { __demoMode: B2 = false, ...T10 } = E12, n17 = f20({ id: R8, __demoMode: B2 }), b13 = ue4(null), t14 = y(O6, T((r21) => {
    b13.current = r21;
  })), [A5, d14, o19, C10, y10] = S3(n17, ee4((r21) => [r21.popoverState, r21.button, r21.panel, r21.buttonId, r21.panelId], [])), D12 = c6((M9 = b13.current) != null ? M9 : d14), _8 = s3(C10), a27 = s3(y10), u25 = De3(() => ({ buttonId: _8, panelId: a27, close: n17.actions.close }), [_8, a27, n17]), f21 = we2(), l18 = f21 == null ? undefined : f21.registerPopover, c20 = o4(() => {
    var F7, G5;
    let r21 = e((F7 = b13.current) != null ? F7 : d14);
    return (G5 = f21 == null ? undefined : f21.isFocusWithinPopoverGroup()) != null ? G5 : r21 && ((d14 == null ? undefined : d14.contains(r21)) || (o19 == null ? undefined : o19.contains(r21)));
  });
  pe3(() => l18 == null ? undefined : l18(u25), [l18, u25]);
  let [m10, W3] = oe(), V5 = x6(d14), j11 = S7({ mainTreeNode: V5, portals: m10, defaultContainers: [{ get current() {
    return n17.state.button;
  } }, { get current() {
    return n17.state.panel;
  } }] });
  E7(D12, "focus", (r21) => {
    var F7, G5, h14, k13, I10, H8;
    r21.target !== window && i4(r21.target) && n17.state.popoverState === v9.Open && (c20() || n17.state.button && n17.state.panel && (j11.contains(r21.target) || (G5 = (F7 = n17.state.beforePanelSentinel.current) == null ? undefined : F7.contains) != null && G5.call(F7, r21.target) || (k13 = (h14 = n17.state.afterPanelSentinel.current) == null ? undefined : h14.contains) != null && k13.call(h14, r21.target) || (H8 = (I10 = n17.state.afterButtonSentinel.current) == null ? undefined : I10.contains) != null && H8.call(I10, r21.target) || n17.actions.close()));
  }, true);
  let L7 = A5 === v9.Open;
  k5(L7, j11.resolveContainers, (r21, F7) => {
    n17.actions.close(), H4(F7, I4.Loose) || (r21.preventDefault(), d14 == null || d14.focus());
  });
  let Y3 = n2({ open: A5 === v9.Open, close: n17.actions.refocusableClose }), $5 = S3(n17, ee4((r21) => u(r21.popoverState, { [v9.Open]: i10.Open, [v9.Closed]: i10.Closed }), [])), Q5 = { ref: t14 }, Z3 = K();
  return v10.createElement(j9, { node: V5 }, v10.createElement(Ae, null, v10.createElement(de5.Provider, { value: null }, v10.createElement(a26.Provider, { value: n17 }, v10.createElement(C5, { value: n17.actions.refocusableClose }, v10.createElement(c11, { value: $5 }, v10.createElement(W3, null, Z3({ ourProps: Q5, theirProps: T10, slot: Y3, defaultTag: vt2, name: "Popover" }))))))));
}
var Et3 = "button";
function bt(E12, O6) {
  let R8 = r4(), { id: B2 = `headlessui-popover-button-${R8}`, disabled: T10 = false, autoFocus: n17 = false, ...b13 } = E12, t14 = u24("Popover.Button"), [A5, d14, o19, C10, y10, D12, _8] = S3(t14, ee4((e9) => [e9.popoverState, t14.selectors.isPortalled(e9), e9.button, e9.buttonId, e9.panel, e9.panelId, e9.afterButtonSentinel], [])), a27 = ue4(null), u25 = `headlessui-focus-sentinel-${r4()}`, f21 = we2(), l18 = f21 == null ? undefined : f21.closeOthers, m10 = mt2() !== null;
  pe3(() => {
    if (!m10)
      return t14.actions.setButtonId(B2), () => t14.actions.setButtonId(null);
  }, [m10, B2, t14]);
  let [W3] = ie3(() => Symbol()), V5 = y(a27, O6, Fe(), o4((e9) => {
    if (!m10) {
      if (e9)
        t14.state.buttons.current.push(W3);
      else {
        let p13 = t14.state.buttons.current.indexOf(W3);
        p13 !== -1 && t14.state.buttons.current.splice(p13, 1);
      }
      t14.state.buttons.current.length > 1 && console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."), e9 && t14.actions.setButton(e9);
    }
  })), j11 = y(a27, O6), L7 = o4((e9) => {
    var p13, i15, x10;
    if (m10) {
      if (t14.state.popoverState === v9.Closed)
        return;
      switch (e9.key) {
        case o8.Space:
        case o8.Enter:
          e9.preventDefault(), (i15 = (p13 = e9.target).click) == null || i15.call(p13), t14.actions.close(), (x10 = t14.state.button) == null || x10.focus();
          break;
      }
    } else
      switch (e9.key) {
        case o8.Space:
        case o8.Enter:
          e9.preventDefault(), e9.stopPropagation(), t14.state.popoverState === v9.Closed ? (l18 == null || l18(t14.state.buttonId), t14.actions.open()) : t14.actions.close();
          break;
        case o8.Escape:
          if (t14.state.popoverState !== v9.Open)
            return l18 == null ? undefined : l18(t14.state.buttonId);
          if (!a27.current)
            return;
          let S9 = e(a27.current);
          if (S9 && !a27.current.contains(S9))
            return;
          e9.preventDefault(), e9.stopPropagation(), t14.actions.close();
          break;
      }
  }), Y3 = o4((e9) => {
    m10 || e9.key === o8.Space && e9.preventDefault();
  }), $5 = o4((e9) => {
    var p13, i15;
    s6(e9.currentTarget) || T10 || (m10 ? (t14.actions.close(), (p13 = t14.state.button) == null || p13.focus()) : (e9.preventDefault(), e9.stopPropagation(), t14.state.popoverState === v9.Closed ? (l18 == null || l18(t14.state.buttonId), t14.actions.open()) : t14.actions.close(), (i15 = t14.state.button) == null || i15.focus()));
  }), Q5 = o4((e9) => {
    e9.preventDefault(), e9.stopPropagation();
  }), { isFocusVisible: Z3, focusProps: M9 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: n17 }), { isHovered: r21, hoverProps: F7 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: T10 }), { pressed: G5, pressProps: h14 } = w({ disabled: T10 }), k13 = A5 === v9.Open, I10 = n2({ open: k13, active: G5 || k13, disabled: T10, hover: r21, focus: Z3, autofocus: n17 }), H8 = e5(E12, o19), fe6 = m10 ? V({ ref: j11, type: H8, onKeyDown: L7, onClick: $5, disabled: T10 || undefined, autoFocus: n17 }, M9, F7, h14) : V({ ref: V5, id: C10, type: H8, "aria-expanded": A5 === v9.Open, "aria-controls": y10 ? D12 : undefined, disabled: T10 || undefined, autoFocus: n17, onKeyDown: L7, onKeyUp: Y3, onClick: $5, onMouseDown: Q5 }, M9, F7, h14), ae4 = u21(), Pe2 = o4(() => {
    if (!n5(t14.state.panel))
      return;
    let e9 = t14.state.panel;
    function p13() {
      u(ae4.current, { [a21.Forwards]: () => v5(e9, T4.First), [a21.Backwards]: () => v5(e9, T4.Last) }) === A2.Error && v5(x3(r2(t14.state.button)).filter((x10) => x10.dataset.headlessuiFocusGuard !== "true"), u(ae4.current, { [a21.Forwards]: T4.Next, [a21.Backwards]: T4.Previous }), { relativeTo: t14.state.button });
    }
    p13();
  }), s19 = K();
  return v10.createElement(v10.Fragment, null, s19({ ourProps: fe6, theirProps: b13, slot: I10, defaultTag: Et3, name: "Popover.Button" }), k13 && !m10 && d14 && v10.createElement(f4, { id: u25, ref: _8, features: s5.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: Pe2 }));
}
var yt2 = "div";
var gt3 = A.RenderStrategy | A.Static;
function Ne2(E12, O6) {
  let R8 = r4(), { id: B2 = `headlessui-popover-backdrop-${R8}`, transition: T10 = false, ...n17 } = E12, b13 = u24("Popover.Backdrop"), t14 = S3(b13, ee4((l18) => l18.popoverState, [])), [A5, d14] = ie3(null), o19 = y(O6, d14), C10 = u17(), [y10, D12] = N2(T10, A5, C10 !== null ? (C10 & i10.Open) === i10.Open : t14 === v9.Open), _8 = o4((l18) => {
    if (s6(l18.currentTarget))
      return l18.preventDefault();
    b13.actions.close();
  }), a27 = n2({ open: t14 === v9.Open }), u25 = { ref: o19, id: B2, "aria-hidden": true, onClick: _8, ...x4(D12) };
  return K()({ ourProps: u25, theirProps: n17, slot: a27, defaultTag: yt2, features: gt3, visible: y10, name: "Popover.Backdrop" });
}
var Rt2 = "div";
var Ft2 = A.RenderStrategy | A.Static;
function Bt2(E12, O6) {
  let R8 = r4(), { id: B2 = `headlessui-popover-panel-${R8}`, focus: T10 = false, anchor: n17, portal: b13 = false, modal: t14 = false, transition: A5 = false, ...d14 } = E12, o19 = u24("Popover.Panel"), C10 = S3(o19, o19.selectors.isPortalled), [y10, D12, _8, a27, u25] = S3(o19, ee4((s19) => [s19.popoverState, s19.button, s19.__demoMode, s19.beforePanelSentinel, s19.afterPanelSentinel], [])), f21 = `headlessui-focus-sentinel-before-${R8}`, l18 = `headlessui-focus-sentinel-after-${R8}`, c20 = ue4(null), m10 = ye(n17), [W3, V5] = Re(m10), j11 = Te();
  m10 && (b13 = true);
  let [L7, Y3] = ie3(null), $5 = y(c20, O6, m10 ? W3 : null, o19.actions.setPanel, Y3), Q5 = u13(D12), Z3 = u13(c20.current);
  n(() => (o19.actions.setPanelId(B2), () => o19.actions.setPanelId(null)), [B2, o19]);
  let M9 = u17(), [r21, F7] = N2(A5, L7, M9 !== null ? (M9 & i10.Open) === i10.Open : y10 === v9.Open);
  p5(r21, D12, o19.actions.close), f11(_8 ? false : t14 && r21, Z3);
  let h14 = o4((s19) => {
    var e9;
    switch (s19.key) {
      case o8.Escape:
        if (o19.state.popoverState !== v9.Open || !c20.current)
          return;
        let p13 = e(c20.current);
        if (p13 && !c20.current.contains(p13))
          return;
        s19.preventDefault(), s19.stopPropagation(), o19.actions.close(), (e9 = o19.state.button) == null || e9.focus();
        break;
    }
  });
  pe3(() => {
    var s19;
    E12.static || y10 === v9.Closed && ((s19 = E12.unmount) == null || s19) && o19.actions.setPanel(null);
  }, [y10, E12.unmount, E12.static, o19]), pe3(() => {
    if (_8 || !T10 || y10 !== v9.Open || !c20.current)
      return;
    let s19 = e(c20.current);
    c20.current.contains(s19) || v5(c20.current, T4.First);
  }, [_8, T10, c20.current, y10]);
  let k13 = n2({ open: y10 === v9.Open, close: o19.actions.refocusableClose }), I10 = V(m10 ? j11() : {}, { ref: $5, id: B2, onKeyDown: h14, onBlur: T10 && y10 === v9.Open ? (s19) => {
    var p13, i15, x10, S9, me4;
    let e9 = s19.relatedTarget;
    e9 && c20.current && ((p13 = c20.current) != null && p13.contains(e9) || (o19.actions.close(), ((x10 = (i15 = a27.current) == null ? undefined : i15.contains) != null && x10.call(i15, e9) || (me4 = (S9 = u25.current) == null ? undefined : S9.contains) != null && me4.call(S9, e9)) && e9.focus({ preventScroll: true })));
  } : undefined, tabIndex: -1, style: { ...d14.style, ...V5, "--button-width": w5(r21, D12, true).width }, ...x4(F7) }), H8 = u21(), fe6 = o4(() => {
    let s19 = c20.current;
    if (!s19)
      return;
    function e9() {
      u(H8.current, { [a21.Forwards]: () => {
        var i15;
        v5(s19, T4.First) === A2.Error && ((i15 = o19.state.afterPanelSentinel.current) == null || i15.focus());
      }, [a21.Backwards]: () => {
        var p13;
        (p13 = o19.state.button) == null || p13.focus({ preventScroll: true });
      } });
    }
    e9();
  }), ae4 = o4(() => {
    let s19 = c20.current;
    if (!s19)
      return;
    function e9() {
      u(H8.current, { [a21.Forwards]: () => {
        var Be2;
        if (!o19.state.button)
          return;
        let p13 = (Be2 = r2(o19.state.button)) != null ? Be2 : document.body, i15 = x3(p13), x10 = i15.indexOf(o19.state.button), S9 = i15.slice(0, x10 + 1), se2 = [...i15.slice(x10 + 1), ...S9];
        for (let ve of se2.slice())
          if (ve.dataset.headlessuiFocusGuard === "true" || L7 != null && L7.contains(ve)) {
            let Ae6 = se2.indexOf(ve);
            Ae6 !== -1 && se2.splice(Ae6, 1);
          }
        v5(se2, T4.First, { sorted: false });
      }, [a21.Backwards]: () => {
        var i15;
        v5(s19, T4.Previous) === A2.Error && ((i15 = o19.state.button) == null || i15.focus());
      } });
    }
    e9();
  }), Pe2 = K();
  return v10.createElement(s13, null, v10.createElement(de5.Provider, { value: B2 }, v10.createElement(C5, { value: o19.actions.refocusableClose }, v10.createElement(le, { enabled: b13 ? E12.static || r21 : false, ownerDocument: Q5 }, r21 && C10 && v10.createElement(f4, { id: f21, ref: a27, features: s5.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: fe6 }), Pe2({ ourProps: I10, theirProps: d14, slot: k13, defaultTag: Rt2, features: Ft2, visible: r21, name: "Popover.Panel" }), r21 && C10 && v10.createElement(f4, { id: l18, ref: u25, features: s5.Focusable, "data-headlessui-focus-guard": true, as: "button", type: "button", onFocus: ae4 })))));
}
var At2 = "div";
function _t2(E12, O6) {
  let R8 = ue4(null), B2 = y(R8, O6), [T10, n17] = ie3([]), b13 = o4((a27) => {
    n17((u25) => {
      let f21 = u25.indexOf(a27);
      if (f21 !== -1) {
        let l18 = u25.slice();
        return l18.splice(f21, 1), l18;
      }
      return u25;
    });
  }), t14 = o4((a27) => (n17((u25) => [...u25, a27]), () => b13(a27))), A5 = o4(() => {
    var f21;
    let a27 = r2(R8.current);
    if (!a27)
      return false;
    let u25 = e(R8.current);
    return (f21 = R8.current) != null && f21.contains(u25) ? true : T10.some((l18) => {
      var c20, m10;
      return ((c20 = a27.getElementById(l18.buttonId.current)) == null ? undefined : c20.contains(u25)) || ((m10 = a27.getElementById(l18.panelId.current)) == null ? undefined : m10.contains(u25));
    });
  }), d14 = o4((a27) => {
    for (let u25 of T10)
      u25.buttonId.current !== a27 && u25.close();
  }), o19 = De3(() => ({ registerPopover: t14, unregisterPopover: b13, isFocusWithinPopoverGroup: A5, closeOthers: d14 }), [t14, b13, A5, d14]), C10 = n2({}), y10 = E12, D12 = { ref: B2 }, _8 = K();
  return v10.createElement(j9, null, v10.createElement(Fe3.Provider, { value: o19 }, _8({ ourProps: D12, theirProps: y10, slot: C10, defaultTag: At2, name: "Popover.Group" })));
}
var Ct2 = Y(Tt2);
var Dt2 = Y(bt);
var Ot = Y(Ne2);
var xt2 = Y(Ne2);
var Lt2 = Y(Bt2);
var ht3 = Y(_t2);
var vo = Object.assign(Ct2, { Button: Dt2, Backdrop: xt2, Overlay: Ot, Panel: Lt2, Group: ht3 });
// node_modules/@headlessui/react/dist/components/radio-group/radio-group.js
import _8, { createContext as te3, useCallback as ge6, useContext as oe5, useMemo as M9, useReducer as Oe3, useRef as W3 } from "react";
"use client";
var Ie3 = ((e9) => (e9[e9.RegisterOption = 0] = "RegisterOption", e9[e9.UnregisterOption = 1] = "UnregisterOption", e9))(Ie3 || {});
var Fe4 = { [0](o19, t14) {
  let e9 = [...o19.options, { id: t14.id, element: t14.element, propsRef: t14.propsRef }];
  return { ...o19, options: G2(e9, (n17) => n17.element.current) };
}, [1](o19, t14) {
  let e9 = o19.options.slice(), n17 = o19.options.findIndex((P7) => P7.id === t14.id);
  return n17 === -1 ? o19 : (e9.splice(n17, 1), { ...o19, options: e9 });
} };
var X4 = te3(null);
X4.displayName = "RadioGroupDataContext";
function z2(o19) {
  let t14 = oe5(X4);
  if (t14 === null) {
    let e9 = new Error(`<${o19} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e9, z2), e9;
  }
  return t14;
}
var q3 = te3(null);
q3.displayName = "RadioGroupActionsContext";
function Q5(o19) {
  let t14 = oe5(q3);
  if (t14 === null) {
    let e9 = new Error(`<${o19} /> is missing a parent <RadioGroup /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(e9, Q5), e9;
  }
  return t14;
}
function Ue2(o19, t14) {
  return u(t14.type, Fe4, o19, t14);
}
var we3 = "div";
function Se3(o19, t14) {
  let e9 = r4(), n17 = a3(), { id: P7 = `headlessui-radiogroup-${e9}`, value: R8, form: D12, name: i15, onChange: c20, by: d14, disabled: a27 = n17 || false, defaultValue: h14, tabIndex: f21 = 0, ...L7 } = o19, T10 = u9(d14), [v11, y10] = Oe3(Ue2, { options: [] }), p13 = v11.options, [k13, G5] = V2(), [I10, F7] = H3(), E12 = W3(null), m10 = y(E12, t14), b13 = l3(h14), [s19, x10] = b2(R8, c20, b13), g6 = M9(() => p13.find((r21) => !r21.propsRef.current.disabled), [p13]), O6 = M9(() => p13.some((r21) => T10(r21.propsRef.current.value, s19)), [p13, s19]), l18 = o4((r21) => {
    var U3;
    if (a27 || T10(r21, s19))
      return false;
    let S9 = (U3 = p13.find((u25) => T10(u25.propsRef.current.value, r21))) == null ? undefined : U3.propsRef.current;
    return S9 != null && S9.disabled ? false : (x10 == null || x10(r21), true);
  }), ce3 = o4((r21) => {
    if (!E12.current)
      return;
    let U3 = p13.filter((u25) => u25.propsRef.current.disabled === false).map((u25) => u25.element.current);
    switch (r21.key) {
      case o8.Enter:
        g(r21.currentTarget);
        break;
      case o8.ArrowLeft:
      case o8.ArrowUp:
        if (r21.preventDefault(), r21.stopPropagation(), v5(U3, T4.Previous | T4.WrapAround) === A2.Success) {
          let A5 = p13.find((N4) => d2(N4.element.current));
          A5 && l18(A5.propsRef.current.value);
        }
        break;
      case o8.ArrowRight:
      case o8.ArrowDown:
        if (r21.preventDefault(), r21.stopPropagation(), v5(U3, T4.Next | T4.WrapAround) === A2.Success) {
          let A5 = p13.find((N4) => d2(N4.element.current));
          A5 && l18(A5.propsRef.current.value);
        }
        break;
      case o8.Space:
        {
          r21.preventDefault(), r21.stopPropagation();
          let u25 = p13.find((A5) => d2(A5.element.current));
          u25 && l18(u25.propsRef.current.value);
        }
        break;
    }
  }), Y3 = o4((r21) => (y10({ type: 0, ...r21 }), () => y10({ type: 1, id: r21.id }))), fe6 = M9(() => ({ value: s19, firstOption: g6, containsCheckedOption: O6, disabled: a27, compare: T10, tabIndex: f21, ...v11 }), [s19, g6, O6, a27, T10, f21, v11]), Te5 = M9(() => ({ registerOption: Y3, change: l18 }), [Y3, l18]), me4 = { ref: m10, id: P7, role: "radiogroup", "aria-labelledby": k13, "aria-describedby": I10, onKeyDown: ce3 }, Re3 = n2({ value: s19 }), ye4 = ge6(() => {
    if (b13 !== undefined)
      return l18(b13);
  }, [l18, b13]), be3 = K();
  return _8.createElement(F7, { name: "RadioGroup.Description" }, _8.createElement(G5, { name: "RadioGroup.Label" }, _8.createElement(q3.Provider, { value: Te5 }, _8.createElement(X4.Provider, { value: fe6 }, i15 != null && _8.createElement(j2, { disabled: a27, data: { [i15]: s19 || "on" }, overrides: { type: "radio", checked: s19 != null }, form: D12, onReset: ye4 }), be3({ ourProps: me4, theirProps: L7, slot: Re3, defaultTag: we3, name: "RadioGroup" })))));
}
var Me = "div";
function He3(o19, t14) {
  var g6;
  let e9 = z2("RadioGroup.Option"), n17 = Q5("RadioGroup.Option"), P7 = r4(), { id: R8 = `headlessui-radiogroup-option-${P7}`, value: D12, disabled: i15 = e9.disabled || false, autoFocus: c20 = false, ...d14 } = o19, a27 = W3(null), h14 = y(a27, t14), [f21, L7] = V2(), [T10, v11] = H3(), y10 = s3({ value: D12, disabled: i15 });
  n(() => n17.registerOption({ id: R8, element: a27, propsRef: y10 }), [R8, n17, a27, y10]);
  let p13 = o4((O6) => {
    var l18;
    if (s6(O6.currentTarget))
      return O6.preventDefault();
    n17.change(D12) && ((l18 = a27.current) == null || l18.focus());
  }), k13 = ((g6 = e9.firstOption) == null ? undefined : g6.id) === R8, { isFocusVisible: G5, focusProps: I10 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: c20 }), { isHovered: F7, hoverProps: E12 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: i15 }), m10 = e9.compare(e9.value, D12), b13 = V({ ref: h14, id: R8, role: "radio", "aria-checked": m10 ? "true" : "false", "aria-labelledby": f21, "aria-describedby": T10, "aria-disabled": i15 ? true : undefined, tabIndex: (() => i15 ? -1 : m10 || !e9.containsCheckedOption && k13 ? e9.tabIndex : -1)(), onClick: i15 ? undefined : p13, autoFocus: c20 }, I10, E12), s19 = n2({ checked: m10, disabled: i15, active: G5, hover: F7, focus: G5, autofocus: c20 }), x10 = K();
  return _8.createElement(v11, { name: "RadioGroup.Description" }, _8.createElement(L7, { name: "RadioGroup.Label" }, x10({ ourProps: b13, theirProps: d14, slot: s19, defaultTag: Me, name: "RadioGroup.Option" })));
}
var Ne3 = "span";
function We2(o19, t14) {
  var g6;
  let e9 = z2("Radio"), n17 = Q5("Radio"), P7 = r4(), R8 = u4(), D12 = a3(), { id: i15 = R8 || `headlessui-radio-${P7}`, value: c20, disabled: d14 = e9.disabled || D12 || false, autoFocus: a27 = false, ...h14 } = o19, f21 = W3(null), L7 = y(f21, t14), T10 = N(), v11 = w3(), y10 = s3({ value: c20, disabled: d14 });
  n(() => n17.registerOption({ id: i15, element: f21, propsRef: y10 }), [i15, n17, f21, y10]);
  let p13 = o4((O6) => {
    var l18;
    if (s6(O6.currentTarget))
      return O6.preventDefault();
    n17.change(c20) && ((l18 = f21.current) == null || l18.focus());
  }), { isFocusVisible: k13, focusProps: G5 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: a27 }), { isHovered: I10, hoverProps: F7 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: d14 }), E12 = ((g6 = e9.firstOption) == null ? undefined : g6.id) === i15, m10 = e9.compare(e9.value, c20), b13 = V({ ref: L7, id: i15, role: "radio", "aria-checked": m10 ? "true" : "false", "aria-labelledby": T10, "aria-describedby": v11, "aria-disabled": d14 ? true : undefined, tabIndex: (() => d14 ? -1 : m10 || !e9.containsCheckedOption && E12 ? e9.tabIndex : -1)(), autoFocus: a27, onClick: d14 ? undefined : p13 }, G5, F7), s19 = n2({ checked: m10, disabled: d14, hover: I10, focus: k13, autofocus: a27 });
  return K()({ ourProps: b13, theirProps: h14, slot: s19, defaultTag: Ne3, name: "Radio" });
}
var Be2 = Y(Se3);
var Ve2 = Y(He3);
var Ke4 = Y(We2);
var $e2 = Z;
var je2 = M2;
var yt3 = Object.assign(Be2, { Option: Ve2, Radio: Ke4, Label: $e2, Description: je2 });
// node_modules/@headlessui/react/dist/components/select/select.js
"use client";
var H8 = "select";
function B2(r21, l18) {
  let s19 = r4(), a27 = u4(), i15 = a3(), { id: p13 = a27 || `headlessui-select-${s19}`, disabled: e9 = i15 || false, invalid: t14 = false, autoFocus: o19 = false, ...d14 } = r21, n17 = N(), c20 = w3(), { isFocusVisible: m10, focusProps: f21 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: o19 }), { isHovered: u25, hoverProps: T10 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: e9 }), { pressed: b13, pressProps: y10 } = w({ disabled: e9 }), P7 = V({ ref: l18, id: p13, "aria-labelledby": n17, "aria-describedby": c20, "aria-invalid": t14 ? "true" : undefined, disabled: e9 || undefined, autoFocus: o19 }, f21, T10, y10), S9 = n2({ disabled: e9, invalid: t14, hover: u25, focus: m10, active: b13, autofocus: o19 });
  return K()({ ourProps: P7, theirProps: d14, slot: S9, defaultTag: H8, name: "Select" });
}
var k13 = Y(B2);
// node_modules/@headlessui/react/dist/components/switch/switch.js
import i15, { Fragment as Y3, createContext as Z3, useCallback as ee5, useContext as te4, useMemo as oe6, useRef as re2, useState as w11 } from "react";
"use client";
var E12 = Z3(null);
E12.displayName = "GroupContext";
var ve = Y3;
function xe3(n17) {
  var c20;
  let [t14, a27] = w11(null), [f21, h14] = V2(), [b13, o19] = H3(), s19 = oe6(() => ({ switch: t14, setSwitch: a27 }), [t14, a27]), T10 = {}, y10 = n17, p13 = K();
  return i15.createElement(o19, { name: "Switch.Description", value: b13 }, i15.createElement(h14, { name: "Switch.Label", value: f21, props: { htmlFor: (c20 = s19.switch) == null ? undefined : c20.id, onClick(u25) {
    t14 && (m4(u25.currentTarget) && u25.preventDefault(), t14.click(), t14.focus({ preventScroll: true }));
  } } }, i15.createElement(E12.Provider, { value: s19 }, p13({ ourProps: T10, theirProps: y10, slot: {}, defaultTag: ve, name: "Switch.Group" }))));
}
var Ce3 = "button";
function Le4(n17, t14) {
  var g6;
  let a27 = r4(), f21 = u4(), h14 = a3(), { id: b13 = f21 || `headlessui-switch-${a27}`, disabled: o19 = h14 || false, checked: s19, defaultChecked: T10, onChange: y10, name: p13, value: c20, form: u25, autoFocus: S9 = false, ...C10 } = n17, _9 = te4(E12), [L7, R8] = w11(null), G5 = re2(null), A5 = y(G5, t14, _9 === null ? null : _9.setSwitch, R8), l18 = l3(T10), [d14, r21] = b2(s19, y10, l18 != null ? l18 : false), F7 = p(), [H9, P7] = w11(false), D12 = o4(() => {
    P7(true), r21 == null || r21(!d14), F7.nextFrame(() => {
      P7(false);
    });
  }), k14 = o4((e9) => {
    if (s6(e9.currentTarget))
      return e9.preventDefault();
    e9.preventDefault(), D12();
  }), M10 = o4((e9) => {
    e9.key === o8.Space ? (e9.preventDefault(), D12()) : e9.key === o8.Enter && g(e9.currentTarget);
  }), U3 = o4((e9) => e9.preventDefault()), I10 = N(), B3 = w3(), { isFocusVisible: K4, focusProps: O6 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: S9 }), { isHovered: W4, hoverProps: N4 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: o19 }), { pressed: J4, pressProps: V5 } = w({ disabled: o19 }), X5 = n2({ checked: d14, disabled: o19, hover: W4, focus: K4, active: J4, autofocus: S9, changing: H9 }), j11 = V({ id: b13, ref: A5, role: "switch", type: e5(n17, L7), tabIndex: n17.tabIndex === -1 ? 0 : (g6 = n17.tabIndex) != null ? g6 : 0, "aria-checked": d14, "aria-labelledby": I10, "aria-describedby": B3, disabled: o19 || undefined, autoFocus: S9, onClick: k14, onKeyUp: M10, onKeyPress: U3 }, O6, N4, V5), $5 = ee5(() => {
    if (l18 !== undefined)
      return r21 == null ? undefined : r21(l18);
  }, [r21, l18]), q4 = K();
  return i15.createElement(i15.Fragment, null, p13 != null && i15.createElement(j2, { disabled: o19, data: { [p13]: c20 || "on" }, overrides: { type: "checkbox", checked: d14 }, form: u25, onReset: $5 }), q4({ ourProps: j11, theirProps: C10, slot: X5, defaultTag: Ce3, name: "Switch" }));
}
var Re3 = Y(Le4);
var Ge = xe3;
var Ae6 = Z;
var Fe5 = M2;
var tt2 = Object.assign(Re3, { Group: Ge, Label: Ae6, Description: Fe5 });
// node_modules/@headlessui/react/dist/components/tabs/tabs.js
import G5, { createContext as re3, useContext as ne3, useMemo as ae4, useReducer as fe6, useRef as q4, useState as me4 } from "react";

// node_modules/@headlessui/react/dist/internal/focus-sentinel.js
import s19, { useState as c20 } from "react";
function b13({ onFocus: n17 }) {
  let [r21, o19] = c20(true), u25 = f18();
  return r21 ? s19.createElement(f4, { as: "button", type: "button", features: s5.Focusable, onFocus: (a27) => {
    a27.preventDefault();
    let e9, i16 = 50;
    function t14() {
      if (i16-- <= 0) {
        e9 && cancelAnimationFrame(e9);
        return;
      }
      if (n17()) {
        if (cancelAnimationFrame(e9), !u25.current)
          return;
        o19(false);
        return;
      }
      e9 = requestAnimationFrame(t14);
    }
    e9 = requestAnimationFrame(t14);
  } }) : null;
}

// node_modules/@headlessui/react/dist/utils/stable-collection.js
import * as l18 from "react";
var s20 = l18.createContext(null);
function a27() {
  return { groups: new Map, get(o19, e9) {
    var i16;
    let t14 = this.groups.get(o19);
    t14 || (t14 = new Map, this.groups.set(o19, t14));
    let n17 = (i16 = t14.get(e9)) != null ? i16 : 0;
    t14.set(e9, n17 + 1);
    let r21 = Array.from(t14.keys()).indexOf(e9);
    function u25() {
      let c21 = t14.get(e9);
      c21 > 1 ? t14.set(e9, c21 - 1) : t14.delete(e9);
    }
    return [r21, u25];
  } };
}
function f21({ children: o19 }) {
  let e9 = l18.useRef(a27());
  return l18.createElement(s20.Provider, { value: e9 }, o19);
}
function C10(o19) {
  let e9 = l18.useContext(s20);
  if (!e9)
    throw new Error("You must wrap your component in a <StableCollection>");
  let t14 = l18.useId(), [n17, r21] = e9.current.get(o19, t14);
  return l18.useEffect(() => r21, []), n17;
}

// node_modules/@headlessui/react/dist/components/tabs/tabs.js
"use client";
var Le5 = ((t14) => (t14[t14.Forwards = 0] = "Forwards", t14[t14.Backwards = 1] = "Backwards", t14))(Le5 || {});
var _e3 = ((l19) => (l19[l19.Less = -1] = "Less", l19[l19.Equal = 0] = "Equal", l19[l19.Greater = 1] = "Greater", l19))(_e3 || {});
var Se4 = ((n17) => (n17[n17.SetSelectedIndex = 0] = "SetSelectedIndex", n17[n17.RegisterTab = 1] = "RegisterTab", n17[n17.UnregisterTab = 2] = "UnregisterTab", n17[n17.RegisterPanel = 3] = "RegisterPanel", n17[n17.UnregisterPanel = 4] = "UnregisterPanel", n17))(Se4 || {});
var De4 = { [0](e9, r21) {
  var d14;
  let t14 = G2(e9.tabs, (u25) => u25.current), l19 = G2(e9.panels, (u25) => u25.current), a28 = t14.filter((u25) => {
    var T10;
    return !((T10 = u25.current) != null && T10.hasAttribute("disabled"));
  }), n17 = { ...e9, tabs: t14, panels: l19 };
  if (r21.index < 0 || r21.index > t14.length - 1) {
    let u25 = u(Math.sign(r21.index - e9.selectedIndex), { [-1]: () => 1, [0]: () => u(Math.sign(r21.index), { [-1]: () => 0, [0]: () => 0, [1]: () => 1 }), [1]: () => 0 });
    if (a28.length === 0)
      return n17;
    let T10 = u(u25, { [0]: () => t14.indexOf(a28[0]), [1]: () => t14.indexOf(a28[a28.length - 1]) });
    return { ...n17, selectedIndex: T10 === -1 ? e9.selectedIndex : T10 };
  }
  let s21 = t14.slice(0, r21.index), f22 = [...t14.slice(r21.index), ...s21].find((u25) => a28.includes(u25));
  if (!f22)
    return n17;
  let b14 = (d14 = t14.indexOf(f22)) != null ? d14 : e9.selectedIndex;
  return b14 === -1 && (b14 = e9.selectedIndex), { ...n17, selectedIndex: b14 };
}, [1](e9, r21) {
  if (e9.tabs.includes(r21.tab))
    return e9;
  let t14 = e9.tabs[e9.selectedIndex], l19 = G2([...e9.tabs, r21.tab], (n17) => n17.current), a28 = e9.selectedIndex;
  return e9.info.current.isControlled || (a28 = l19.indexOf(t14), a28 === -1 && (a28 = e9.selectedIndex)), { ...e9, tabs: l19, selectedIndex: a28 };
}, [2](e9, r21) {
  return { ...e9, tabs: e9.tabs.filter((t14) => t14 !== r21.tab) };
}, [3](e9, r21) {
  return e9.panels.includes(r21.panel) ? e9 : { ...e9, panels: G2([...e9.panels, r21.panel], (t14) => t14.current) };
}, [4](e9, r21) {
  return { ...e9, panels: e9.panels.filter((t14) => t14 !== r21.panel) };
} };
var z3 = re3(null);
z3.displayName = "TabsDataContext";
function h14(e9) {
  let r21 = ne3(z3);
  if (r21 === null) {
    let t14 = new Error(`<${e9} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t14, h14), t14;
  }
  return r21;
}
var V5 = re3(null);
V5.displayName = "TabsActionsContext";
function Q6(e9) {
  let r21 = ne3(V5);
  if (r21 === null) {
    let t14 = new Error(`<${e9} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(t14, Q6), t14;
  }
  return r21;
}
function Fe6(e9, r21) {
  return u(r21.type, De4, e9, r21);
}
var Ie4 = "div";
function he2(e9, r21) {
  let { defaultIndex: t14 = 0, vertical: l19 = false, manual: a28 = false, onChange: n17, selectedIndex: s21 = null, ...g6 } = e9;
  const f22 = l19 ? "vertical" : "horizontal", b14 = a28 ? "manual" : "auto";
  let d14 = s21 !== null, u25 = s3({ isControlled: d14 }), T10 = y(r21), [p13, c21] = fe6(Fe6, { info: u25, selectedIndex: s21 != null ? s21 : t14, tabs: [], panels: [] }), v11 = n2({ selectedIndex: p13.selectedIndex }), m10 = s3(n17 || (() => {})), C11 = s3(p13.tabs), D12 = ae4(() => ({ orientation: f22, activation: b14, ...p13 }), [f22, b14, p13]), P7 = o4((i16) => (c21({ type: 1, tab: i16 }), () => c21({ type: 2, tab: i16 }))), R8 = o4((i16) => (c21({ type: 3, panel: i16 }), () => c21({ type: 4, panel: i16 }))), A5 = o4((i16) => {
    L7.current !== i16 && m10.current(i16), d14 || c21({ type: 0, index: i16 });
  }), L7 = s3(d14 ? e9.selectedIndex : p13.selectedIndex), _9 = ae4(() => ({ registerTab: P7, registerPanel: R8, change: A5 }), []);
  n(() => {
    c21({ type: 0, index: s21 != null ? s21 : t14 });
  }, [s21]), n(() => {
    if (L7.current === undefined || p13.tabs.length <= 0)
      return;
    let i16 = G2(p13.tabs, (S9) => S9.current);
    i16.some((S9, $5) => p13.tabs[$5] !== S9) && A5(i16.indexOf(p13.tabs[L7.current]));
  });
  let J4 = { ref: T10 }, X5 = K();
  return G5.createElement(f21, null, G5.createElement(V5.Provider, { value: _9 }, G5.createElement(z3.Provider, { value: D12 }, D12.tabs.length <= 0 && G5.createElement(b13, { onFocus: () => {
    var i16, M10;
    for (let S9 of C11.current)
      if (((i16 = S9.current) == null ? undefined : i16.tabIndex) === 0)
        return (M10 = S9.current) == null || M10.focus(), true;
    return false;
  } }), X5({ ourProps: J4, theirProps: g6, slot: v11, defaultTag: Ie4, name: "Tabs" }))));
}
var ve2 = "div";
function Ce4(e9, r21) {
  let { orientation: t14, selectedIndex: l19 } = h14("Tab.List"), a28 = y(r21), n17 = n2({ selectedIndex: l19 }), s21 = e9, g6 = { ref: a28, role: "tablist", "aria-orientation": t14 };
  return K()({ ourProps: g6, theirProps: s21, slot: n17, defaultTag: ve2, name: "Tabs.List" });
}
var Me2 = "button";
function Ge2(e9, r21) {
  var Y4, Z4;
  let t14 = r4(), { id: l19 = `headlessui-tabs-tab-${t14}`, disabled: a28 = false, autoFocus: n17 = false, ...s21 } = e9, { orientation: g6, activation: f22, selectedIndex: b14, tabs: d14, panels: u25 } = h14("Tab"), T10 = Q6("Tab"), p13 = h14("Tab"), [c21, v11] = me4(null), m10 = q4(null), C11 = y(m10, r21, v11);
  n(() => T10.registerTab(m10), [T10, m10]);
  let D12 = C10("tabs"), P7 = d14.indexOf(m10);
  P7 === -1 && (P7 = D12);
  let R8 = P7 === b14, A5 = o4((o19) => {
    let E13 = o19();
    if (E13 === A2.Success && f22 === "auto") {
      let ee6 = e(m10.current), B3 = p13.tabs.findIndex((ce3) => ce3.current === ee6);
      B3 !== -1 && T10.change(B3);
    }
    return E13;
  }), L7 = o4((o19) => {
    let E13 = d14.map((B3) => B3.current).filter(Boolean);
    if (o19.key === o8.Space || o19.key === o8.Enter) {
      o19.preventDefault(), o19.stopPropagation(), T10.change(P7);
      return;
    }
    switch (o19.key) {
      case o8.Home:
      case o8.PageUp:
        return o19.preventDefault(), o19.stopPropagation(), A5(() => v5(E13, T4.First));
      case o8.End:
      case o8.PageDown:
        return o19.preventDefault(), o19.stopPropagation(), A5(() => v5(E13, T4.Last));
    }
    if (A5(() => u(g6, { vertical() {
      return o19.key === o8.ArrowUp ? v5(E13, T4.Previous | T4.WrapAround) : o19.key === o8.ArrowDown ? v5(E13, T4.Next | T4.WrapAround) : A2.Error;
    }, horizontal() {
      return o19.key === o8.ArrowLeft ? v5(E13, T4.Previous | T4.WrapAround) : o19.key === o8.ArrowRight ? v5(E13, T4.Next | T4.WrapAround) : A2.Error;
    } })) === A2.Success)
      return o19.preventDefault();
  }), _9 = q4(false), J4 = o4(() => {
    var o19;
    _9.current || (_9.current = true, (o19 = m10.current) == null || o19.focus({ preventScroll: true }), T10.change(P7), t(() => {
      _9.current = false;
    }));
  }), X5 = o4((o19) => {
    o19.preventDefault();
  }), { isFocusVisible: i16, focusProps: M10 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: n17 }), { isHovered: S9, hoverProps: $5 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: a28 }), { pressed: pe4, pressProps: ue5 } = w({ disabled: a28 }), Te5 = n2({ selected: R8, hover: S9, active: pe4, focus: i16, autofocus: n17, disabled: a28 }), de6 = V({ ref: C11, onKeyDown: L7, onMouseDown: X5, onClick: J4, id: l19, role: "tab", type: e5(e9, c21), "aria-controls": (Z4 = (Y4 = u25[P7]) == null ? undefined : Y4.current) == null ? undefined : Z4.id, "aria-selected": R8, tabIndex: R8 ? 0 : -1, disabled: a28 || undefined, autoFocus: n17 }, M10, $5, ue5);
  return K()({ ourProps: de6, theirProps: s21, slot: Te5, defaultTag: Me2, name: "Tabs.Tab" });
}
var Ue3 = "div";
function He4(e9, r21) {
  let { selectedIndex: t14 } = h14("Tab.Panels"), l19 = y(r21), a28 = n2({ selectedIndex: t14 }), n17 = e9, s21 = { ref: l19 };
  return K()({ ourProps: s21, theirProps: n17, slot: a28, defaultTag: Ue3, name: "Tabs.Panels" });
}
var we4 = "div";
var Oe4 = A.RenderStrategy | A.Static;
function Ne4(e9, r21) {
  var R8, A5, L7, _9;
  let t14 = r4(), { id: l19 = `headlessui-tabs-panel-${t14}`, tabIndex: a28 = 0, ...n17 } = e9, { selectedIndex: s21, tabs: g6, panels: f22 } = h14("Tab.Panel"), b14 = Q6("Tab.Panel"), d14 = q4(null), u25 = y(d14, r21);
  n(() => b14.registerPanel(d14), [b14, d14]);
  let T10 = C10("panels"), p13 = f22.indexOf(d14);
  p13 === -1 && (p13 = T10);
  let c21 = p13 === s21, { isFocusVisible: v11, focusProps: m10 } = $0c4a58759813079a$export$4e328f61c538687f(), C11 = n2({ selected: c21, focus: v11 }), D12 = V({ ref: u25, id: l19, role: "tabpanel", "aria-labelledby": (A5 = (R8 = g6[p13]) == null ? undefined : R8.current) == null ? undefined : A5.id, tabIndex: c21 ? a28 : -1 }, m10), P7 = K();
  return !c21 && ((L7 = n17.unmount) == null || L7) && !((_9 = n17.static) != null && _9) ? G5.createElement(f4, { "aria-hidden": "true", ...D12 }) : P7({ ourProps: D12, theirProps: n17, slot: C11, defaultTag: we4, features: Oe4, visible: c21, name: "Tabs.Panel" });
}
var ke = Y(Ge2);
var Be3 = Y(he2);
var We3 = Y(Ce4);
var je3 = Y(He4);
var Ke5 = Y(Ne4);
var dt2 = Object.assign(ke, { Group: Be3, List: We3, Panels: je3, Panel: Ke5 });
// node_modules/@headlessui/react/dist/components/textarea/textarea.js
"use client";
var L7 = "textarea";
function H9(a28, t14) {
  let s21 = r4(), l19 = u4(), d14 = a3(), { id: i16 = l19 || `headlessui-textarea-${s21}`, disabled: e9 = d14 || false, autoFocus: r21 = false, invalid: o19 = false, ...p13 } = a28, n17 = N(), T10 = w3(), { isFocused: f22, focusProps: m10 } = $0c4a58759813079a$export$4e328f61c538687f({ autoFocus: r21 }), { isHovered: u25, hoverProps: b14 } = $e969f22b6713ca4a$export$ae780daf29e6d456({ isDisabled: e9 }), y10 = V({ ref: t14, id: i16, "aria-labelledby": n17, "aria-describedby": T10, "aria-invalid": o19 ? "true" : undefined, disabled: e9 || undefined, autoFocus: r21 }, m10, b14), x10 = n2({ disabled: e9, invalid: o19, hover: u25, focus: f22, autofocus: r21 });
  return K()({ ourProps: y10, theirProps: p13, slot: x10, defaultTag: L7, name: "Textarea" });
}
var M10 = Y(H9);
export {
  u8 as useClose,
  Oe as TransitionChild,
  Ke2 as Transition,
  M10 as Textarea,
  je3 as TabPanels,
  Ke5 as TabPanel,
  We3 as TabList,
  Be3 as TabGroup,
  dt2 as Tab,
  Ae6 as SwitchLabel,
  Ge as SwitchGroup,
  Fe5 as SwitchDescription,
  tt2 as Switch,
  k13 as Select,
  Ve2 as RadioGroupOption,
  $e2 as RadioGroupLabel,
  je2 as RadioGroupDescription,
  yt3 as RadioGroup,
  Ke4 as Radio,
  le as Portal,
  Lt2 as PopoverPanel,
  Ot as PopoverOverlay,
  ht3 as PopoverGroup,
  Dt2 as PopoverButton,
  xt2 as PopoverBackdrop,
  vo as Popover,
  Mt2 as MenuSeparator,
  Pt2 as MenuSection,
  yt as MenuItems,
  gt2 as MenuItem,
  Et2 as MenuHeading,
  ft as MenuButton,
  lo as Menu,
  kt as ListboxSelectedOption,
  Bt as ListboxOptions,
  It as ListboxOption,
  wt as ListboxLabel,
  Mt as ListboxButton,
  Mo2 as Listbox,
  d12 as Legend,
  Z as Label,
  X3 as Input,
  G4 as FocusTrapFeatures,
  ge2 as FocusTrap,
  I9 as Fieldset,
  W2 as Field,
  Le3 as DisclosurePanel,
  xe2 as DisclosureButton,
  Xe2 as Disclosure,
  Qe as DialogTitle,
  ze as DialogPanel,
  xt as DialogDescription,
  Lt as DialogBackdrop,
  ht as Dialog,
  M2 as Description,
  b8 as DataInteractive,
  Uo as ComboboxOptions,
  Ho as ComboboxOption,
  No as ComboboxLabel,
  ko as ComboboxInput,
  Bo as ComboboxButton,
  Ht as Combobox,
  y2 as CloseButton,
  Ke as Checkbox,
  L2 as Button
};
