import Ct from "@vuepic/vue-datepicker";
import ce from "vue-next-select";
import { generateRandomString as P, isFunction as q, slotProvided as le, isUndefined as V, rmArrayValue as ie, isObject as he, mergeObjects as pe } from "lkt-tools";
import { openBlock as k, createElementBlock as z, renderSlot as N, withDirectives as D, createElementVNode as W, vModelCheckbox as fe, createCommentVNode as L, resolveComponent as F, vModelText as H, createBlock as $, vModelDynamic as de, Fragment as zt, renderList as Lt, vModelRadio as Et, createVNode as ge } from "vue";
import { existsHTTPResource as It } from "lkt-http";
import me from "suneditor";
import Rt from "katex";
const be = {
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: P(16) },
    valid: { type: [Boolean, Function], default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Identifier: P(16),
      originalValue: this.modelValue
    };
  },
  computed: {
    isValid() {
      return q(this.valid) ? this.valid() : this.valid;
    },
    changed() {
      return this.Value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return le(this, "label");
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  watch: {
    modelValue(e) {
      this.$emit("update:modelValue", e);
    }
  },
  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    getValue() {
      return this.modelValue;
    }
  }
}, U = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [n, l] of t)
    i[n] = l;
  return i;
}, Tt = {
  name: "LktFieldCheck",
  mixins: [be]
}, Bt = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], At = ["name", "id", "disabled", "readonly", "placeholder", "value"], Nt = ["for", "innerHTML"];
function Mt(e, t, i, n, l, o) {
  return k(), z("div", {
    "data-lkt": "field-check",
    "data-state": e.state,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.modelValue,
    "data-filled": !!e.modelValue
  }, [
    N(e.$slots, "prefix"),
    D(W("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (s) => e.modelValue = s),
      type: "checkbox",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder,
      value: e.modelValue ? "true" : "false"
    }, null, 8, At), [
      [fe, e.modelValue]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 0 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Nt)) : L("", !0)
  ], 8, Bt);
}
const Dt = /* @__PURE__ */ U(Tt, [["render", Mt]]), Ot = {
  name: "LktFieldSwitch",
  mixins: [be]
}, Ut = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Vt = ["name", "id", "disabled", "readonly", "placeholder"], Ft = ["for", "innerHTML"];
function Ht(e, t, i, n, l, o) {
  return k(), z("div", {
    "data-lkt": "field-switch",
    "data-state": e.state,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.modelValue,
    "data-filled": !!e.modelValue
  }, [
    N(e.$slots, "prefix"),
    D(W("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (s) => e.modelValue = s),
      type: "checkbox",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Vt), [
      [fe, e.modelValue]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 0 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Ft)) : L("", !0)
  ], 8, Ut);
}
const Pt = /* @__PURE__ */ U(Ot, [["render", Ht]]);
class R {
}
R.SHOW_PASSWORD_MESSAGE = "";
R.IS_MANDATORY_MESSAGE = "";
R.FOLLOW_LINK_MESSAGE = "";
R.OPEN_MESSAGE = "";
R.RESET_MESSAGE = "";
R.NO_OPTIONS_MESSAGE = "";
R.TODAY_RANGE_TEXT = "";
R.THIS_MONTH_RANGE_TEXT = "";
R.LAST_MONTH_RANGE_TEXT = "";
R.THIS_YEAR_RANGE_TEXT = "";
const $t = {
  showAdd: { type: Boolean, default: !1 },
  showLink: { type: Boolean, default: !1 },
  showOpen: { type: Boolean, default: !1 },
  showInfo: { type: Boolean, default: !1 },
  showPassword: { type: Boolean, default: !1 },
  showMandatory: { type: Boolean, default: !1 },
  showError: { type: Boolean, default: !1 },
  showWarn: { type: Boolean, default: !1 },
  showLog: { type: Boolean, default: !1 },
  showReset: { type: Boolean, default: !1 },
  textAdd: { type: String, default: "" },
  textInfo: { type: String, default: "More info" },
  textPassword: { type: String, default: R.SHOW_PASSWORD_MESSAGE },
  textMandatory: { type: String, default: R.IS_MANDATORY_MESSAGE },
  textError: { type: String, default: "" },
  textWarn: { type: String, default: "" },
  textLog: { type: String, default: "" },
  textLink: { type: String, default: R.FOLLOW_LINK_MESSAGE },
  textOpen: { type: String, default: R.OPEN_MESSAGE },
  textReset: { type: String, default: R.RESET_MESSAGE }
}, Gt = "Show password", qt = "This is mandatory", jt = "Follow link", Wt = "Show details", Yt = "Reset", Xt = "No results. Try typing some text.", Kt = "Today", Jt = "This month", Zt = "Last month", Qt = "This year", ei = {
  noOptionsMessage: Xt,
  showPasswordMessage: Gt,
  isMandatoryMessage: qt,
  followLinkMessage: jt,
  openMessage: Wt,
  resetMessage: Yt,
  todayRangeText: Kt,
  thisMonthRangeText: Jt,
  lastMonthRangeText: Zt,
  thisYearRangeText: Qt
}, ti = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock"],
  ["paragraphStyle", "blockquote"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["fontColor", "hiliteColor", "textStyle"],
  ["removeFormat"],
  "/",
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "lineHeight"],
  ["table", "link"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"],
  ["template"]
], ii = [
  ["undo", "redo"],
  ["font", "fontSize", "formatBlock"],
  ["paragraphStyle", "blockquote"],
  ["bold", "underline", "italic", "strike", "subscript", "superscript"],
  ["fontColor", "hiliteColor", "textStyle"],
  ["removeFormat"],
  "/",
  ["outdent", "indent"],
  ["align", "horizontalRule", "list", "lineHeight"],
  ["table", "link", "math"],
  ["fullScreen", "showBlocks", "codeView"],
  ["preview", "print"],
  ["template"]
];
class ni {
  constructor(t, i) {
    this.id = void 0, this.value = void 0, this.id = t, this.value = i;
  }
}
const K = (e, t) => new ni(e, t), ve = (e, t, i, n = {}) => {
  e.$emit("click-ui", t, K(i, n));
}, _e = (e, t, i, n = {}) => {
  e.$emit("keyup", t, K(i, n));
}, ye = (e, t, i, n = {}) => {
  e.$emit("keydown", t, K(i, n));
}, we = (e, t, i, n = {}) => {
  e.$emit("focus", t, K(i, n));
}, ke = (e, t, i, n = {}) => {
  e.$emit("blur", t, K(i, n));
}, Se = (e, t, i, n = {}) => {
  e.$emit("click", t, K(i, n));
}, xe = {
  props: $t,
  computed: {
    showInfoUi() {
      return this.showAdd || this.showMandatory || this.showOpen || this.showInfo || this.showError || this.showLog || this.showWarn || this.showLink || this.showReset || this.showPassword;
    }
  },
  methods: {
    onUIStatusClick(e, t, i = {}) {
      ve(this, e, t, i);
    }
  }
}, j = {
  mixins: [xe],
  methods: {
    onClickUi(e, t) {
      if (t === "reset") {
        this.reset();
        return;
      }
      if (t === "show-password" && this.hasOwnProperty("visiblePassword")) {
        this.visiblePassword = !this.visiblePassword;
        return;
      }
      ve(this, e, t, { field: this });
    }
  }
}, li = {
  name: "lktFieldState",
  mixins: [xe]
};
const oi = { "data-lkt": "field-state-ui" }, si = ["title"], ai = ["title"], ri = ["title"], di = ["title"], ui = ["title"], ci = ["title"], hi = ["title"], pi = ["title"], fi = ["title"], gi = ["title"];
function mi(e, t, i, n, l, o) {
  return k(), z("div", oi, [
    e.showAdd ? (k(), z("i", {
      key: 0,
      "data-lkt": "add-icon",
      title: e.textAdd,
      onClick: t[0] || (t[0] = (s) => e.onUIStatusClick(s, "add"))
    }, null, 8, si)) : L("", !0),
    e.showOpen ? (k(), z("i", {
      key: 1,
      "data-lkt": "open-icon",
      title: e.textOpen,
      onClick: t[1] || (t[1] = (s) => e.onUIStatusClick(s, "open"))
    }, null, 8, ai)) : L("", !0),
    e.showLink ? (k(), z("i", {
      key: 2,
      "data-lkt": "link-icon",
      title: e.textLink,
      onClick: t[2] || (t[2] = (s) => e.onUIStatusClick(s, "link"))
    }, null, 8, ri)) : L("", !0),
    e.showInfo ? (k(), z("i", {
      key: 3,
      "data-lkt": "info-icon",
      title: e.textInfo,
      onClick: t[3] || (t[3] = (s) => e.onUIStatusClick(s, "info"))
    }, null, 8, di)) : L("", !0),
    e.showPassword ? (k(), z("i", {
      key: 4,
      "data-lkt": "show-password-icon",
      title: e.textPassword,
      onClick: t[4] || (t[4] = (s) => e.onUIStatusClick(s, "show-password"))
    }, null, 8, ui)) : L("", !0),
    e.showLog ? (k(), z("i", {
      key: 5,
      "data-lkt": "log-icon",
      title: e.textLog,
      onClick: t[5] || (t[5] = (s) => e.onUIStatusClick(s, "log"))
    }, null, 8, ci)) : L("", !0),
    e.showWarn ? (k(), z("i", {
      key: 6,
      "data-lkt": "warn-icon",
      title: e.textWarn,
      onClick: t[6] || (t[6] = (s) => e.onUIStatusClick(s, "warn"))
    }, null, 8, hi)) : L("", !0),
    e.showError ? (k(), z("i", {
      key: 7,
      "data-lkt": "error-icon",
      title: e.textError,
      onClick: t[7] || (t[7] = (s) => e.onUIStatusClick(s, "error"))
    }, null, 8, pi)) : L("", !0),
    e.showMandatory ? (k(), z("i", {
      key: 8,
      "data-lkt": "mandatory-icon",
      title: e.textMandatory,
      onClick: t[8] || (t[8] = (s) => e.onUIStatusClick(s, "mandatory"))
    }, null, 8, fi)) : L("", !0),
    e.showReset ? (k(), z("i", {
      key: 9,
      "data-lkt": "reset-icon",
      title: e.textReset,
      onClick: t[9] || (t[9] = (s) => e.onUIStatusClick(s, "reset"))
    }, null, 8, gi)) : L("", !0)
  ]);
}
const G = /* @__PURE__ */ U(li, [["render", mi]]), J = {
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click"],
  props: {
    modelValue: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: P(16) },
    valid: { type: [Boolean, Function], default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Identifier: P(16),
      originalValue: this.modelValue,
      value: this.modelValue
    };
  },
  computed: {
    isValid() {
      return q(this.valid) ? this.valid() : this.valid;
    },
    isEmpty() {
      return !this.modelValue;
    },
    changed() {
      return this.value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return le(this, "label");
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  watch: {
    modelValue(e) {
      this.value = e, console.log("updated modelValue", e, this.modelValue);
    },
    value(e) {
      console.log("updated value", e, this.value), this.$emit("update:modelValue", e);
    }
  },
  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    reset() {
      this.modelValue = this.originalValue;
    },
    getValue() {
      return this.modelValue;
    },
    onKeyUp(e) {
      _e(this, e, this.name, { value: this.Value });
    },
    onKeyDown(e) {
      ye(this, e, this.name, { value: this.Value });
    },
    onFocus(e) {
      we(this, e, this.name, { value: this.Value });
    },
    onBlur(e) {
      ke(this, e, this.name, { value: this.Value });
    },
    onClick(e) {
      Se(this, e, this.name, { value: this.Value });
    }
  }
}, bi = {
  name: "LktFieldText",
  components: { lktFieldState: G },
  mixins: [J, j]
}, vi = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled", "data-labeled"], _i = ["name", "id", "disabled", "readonly", "placeholder"], yi = ["name", "id", "disabled", "readonly"], wi = ["for", "innerHTML"];
function ki(e, t, i, n, l, o) {
  const s = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-text",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty,
    "data-labeled": e.canRenderLabelHtml
  }, [
    N(e.$slots, "prefix"),
    e.placeholder ? D((k(), z("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      ref: "input",
      type: "text",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder,
      onKeyup: t[1] || (t[1] = (...a) => e.onKeyUp && e.onKeyUp(...a)),
      onKeydown: t[2] || (t[2] = (...a) => e.onKeyDown && e.onKeyDown(...a)),
      onFocus: t[3] || (t[3] = (...a) => e.onFocus && e.onFocus(...a)),
      onBlur: t[4] || (t[4] = (...a) => e.onBlur && e.onBlur(...a)),
      onClick: t[5] || (t[5] = (...a) => e.onClick && e.onClick(...a))
    }, null, 40, _i)), [
      [H, e.value]
    ]) : D((k(), z("input", {
      key: 1,
      "onUpdate:modelValue": t[6] || (t[6] = (a) => e.value = a),
      ref: "input",
      type: "text",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      onKeyup: t[7] || (t[7] = (...a) => e.onKeyUp && e.onKeyUp(...a)),
      onKeydown: t[8] || (t[8] = (...a) => e.onKeyDown && e.onKeyDown(...a)),
      onFocus: t[9] || (t[9] = (...a) => e.onFocus && e.onFocus(...a)),
      onBlur: t[10] || (t[10] = (...a) => e.onBlur && e.onBlur(...a)),
      onClick: t[11] || (t[11] = (...a) => e.onClick && e.onClick(...a))
    }, null, 40, yi)), [
      [H, e.value]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 2 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, wi)) : L("", !0),
    e.showInfoUi ? (k(), $(s, {
      key: 4,
      "show-add": e.showAdd,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, vi);
}
const Si = /* @__PURE__ */ U(bi, [["render", ki]]), xi = {
  name: "LktFieldTextArea",
  components: { lktFieldState: G },
  mixins: [J, j]
}, Ci = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], zi = ["name", "id", "disabled", "readonly", "placeholder"], Li = ["name", "id", "disabled", "readonly"], Ei = ["for", "innerHTML"];
function Ii(e, t, i, n, l, o) {
  const s = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-textarea",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    N(e.$slots, "prefix"),
    e.placeholder ? D((k(), z("textarea", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, zi)), [
      [H, e.value]
    ]) : D((k(), z("textarea", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.value = a),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, Li)), [
      [H, e.value]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 2 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Ei)) : L("", !0),
    e.showInfoUi ? (k(), $(s, {
      key: 4,
      "show-add": e.showAdd,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, Ci);
}
const Ri = /* @__PURE__ */ U(xi, [["render", Ii]]), Ti = {
  name: "LktFieldEmail",
  components: { lktFieldState: G },
  mixins: [J, j]
}, Bi = ["data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Ai = ["name", "id", "disabled", "readonly", "placeholder"], Ni = ["name", "id", "disabled", "readonly"], Mi = ["for", "innerHTML"];
function Di(e, t, i, n, l, o) {
  const s = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-email",
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    N(e.$slots, "prefix"),
    e.placeholder ? D((k(), z("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      type: "email",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Ai)), [
      [H, e.value]
    ]) : D((k(), z("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.value = a),
      type: "email",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, Ni)), [
      [H, e.value]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 2 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Mi)) : L("", !0),
    e.showInfoUi ? (k(), $(s, {
      key: 4,
      "show-add": e.showAdd,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, Bi);
}
const Oi = /* @__PURE__ */ U(Ti, [["render", Di]]), Ui = {
  name: "LktFieldTel",
  components: { lktFieldState: G },
  mixins: [J, j]
}, Vi = ["data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Fi = ["name", "id", "disabled", "readonly", "placeholder"], Hi = ["name", "id", "disabled", "readonly"], Pi = ["for", "innerHTML"];
function $i(e, t, i, n, l, o) {
  const s = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-tel",
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    N(e.$slots, "prefix"),
    e.placeholder ? D((k(), z("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      type: "tel",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Fi)), [
      [H, e.value]
    ]) : D((k(), z("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.value = a),
      type: "tel",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, Hi)), [
      [H, e.value]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 2 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Pi)) : L("", !0),
    e.showInfoUi ? (k(), $(s, {
      key: 4,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-error", "show-info", "show-log", "show-warn", "text-error", "text-info", "text-log", "text-warn", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, Vi);
}
const Gi = /* @__PURE__ */ U(Ui, [["render", $i]]), Ce = {
  props: {
    modelValue: { type: [String, Number, Object, Array, Date, Boolean], default: () => {
    } },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: P(16) },
    invalid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    canReset: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Value: this.modelValue,
      Identifier: P(16),
      canEmit: !1,
      originalValue: this.value
    };
  },
  computed: {
    changed() {
      return this.Value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return !!this.$slots.label;
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  methods: {
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    reset() {
      this.Value = void 0;
    },
    getValue() {
      return this.Value;
    },
    onKeyUp(e) {
      _e(this, e, this.name, { value: this.Value });
    },
    onKeyDown(e) {
      ye(this, e, this.name, { value: this.Value });
    },
    onFocus(e) {
      we(this, e, this.name, { value: this.Value });
    },
    onBlur(e) {
      ke(this, e, this.name, { value: this.Value });
    },
    onClick(e) {
      Se(this, e, this.name, { value: this.Value });
    }
  },
  watch: {
    value(e) {
      console.log("Updated value", e), this.Value = e;
    },
    Value(e) {
      console.log("Updated Value", e, this.canEmit), this.canEmit === !0 && (this.$emit("input", e), this.$emit("change", e));
    }
  },
  mounted() {
    this.canEmit = !0;
  }
}, qi = {
  name: "LktFieldUnit",
  components: { lktFieldState: G },
  mixins: [Ce, j],
  props: {
    value: { type: [Number, String], default: "" },
    min: { type: [Number, void 0], default: void 0 },
    max: { type: [Number, void 0], default: void 0 },
    step: { type: [Number, String], default: 1 },
    addRange: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Value: 0,
      updating: !1
    };
  },
  computed: {
    Min() {
      return V(this.min) ? !1 : parseInt(this.min);
    },
    Max() {
      return V(this.max) ? !1 : parseInt(this.max);
    }
  },
  watch: {
    Value(e) {
      if (this.canEmit === !0) {
        if (this.updating)
          return;
        if (this.updating = !0, this.reAssign(e)) {
          this.$nextTick(() => {
            this.updating = !1;
          });
          return;
        }
        this.validate(e), this.$emit("input", e), this.$emit("change", e), this.$nextTick(() => {
          this.updating = !1;
        });
      }
    },
    min() {
      this.reAssign(this.Value);
    },
    max() {
      this.reAssign(this.Value);
    }
  },
  methods: {
    reAssign(e) {
      e = Number(e);
      let t = !1;
      return this.min !== !1 && e < this.min ? (e = this.min, t = !0) : this.max !== !1 && e > this.max && (e = this.max, t = !0), t === !0 ? (this.Value = e, !0) : !1;
    }
  }
}, ji = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled", "data-ranged"], Wi = ["id", "name", "disabled", "readonly", "min", "max"], Yi = ["name", "id", "disabled", "readonly", "min", "max", "step", "placeholder"], Xi = ["for", "innerHTML"];
function Ki(e, t, i, n, l, o) {
  const s = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-unit",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !l.Value,
    "data-filled": !!l.Value,
    "data-ranged": i.addRange
  }, [
    i.addRange ? D((k(), z("input", {
      key: 0,
      type: "range",
      id: e.Identifier + "Points",
      name: e.name + "Points",
      "onUpdate:modelValue": t[0] || (t[0] = (a) => l.Value = a),
      disabled: e.disabled,
      readonly: e.readonly,
      min: o.Min,
      max: o.Max
    }, null, 8, Wi)), [
      [H, l.Value]
    ]) : L("", !0),
    N(e.$slots, "prefix"),
    D(W("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (a) => l.Value = a),
      type: "number",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      min: o.Min,
      max: o.Max,
      step: i.step,
      placeholder: e.placeholder
    }, null, 8, Yi), [
      [H, l.Value]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 1 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 2,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Xi)) : L("", !0),
    e.showInfoUi ? (k(), $(s, {
      key: 3,
      "show-add": e.showAdd,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, ji);
}
const Ji = /* @__PURE__ */ U(qi, [["render", Ki]]), Zi = {
  name: "LktFieldPassword",
  components: { lktFieldState: G },
  mixins: [J, j],
  data() {
    return {
      visiblePassword: !1
    };
  },
  computed: {
    inputType() {
      return this.visiblePassword ? "text" : "password";
    }
  }
}, Qi = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], en = ["type", "name", "id", "disabled", "readonly", "placeholder"], tn = ["type", "name", "id", "disabled", "readonly"], nn = ["for", "innerHTML"];
function ln(e, t, i, n, l, o) {
  const s = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-password",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    N(e.$slots, "prefix"),
    e.placeholder ? D((k(), z("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      type: o.inputType,
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, en)), [
      [de, e.value]
    ]) : D((k(), z("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (a) => e.value = a),
      type: o.inputType,
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, tn)), [
      [de, e.value]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 2 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, nn)) : L("", !0),
    e.showInfoUi ? (k(), $(s, {
      key: 4,
      "show-add": e.showAdd,
      "show-password": e.showPassword && e.value.length > 0,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "text-password": e.textPassword,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-password", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "text-password", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, Qi);
}
const on = /* @__PURE__ */ U(Zi, [["render", ln]]), ze = () => R.NO_OPTIONS_MESSAGE, Le = (e = {}) => e.label, Ee = (e = {}, t = 0) => e, X = (e, t, i = !1) => {
  if (i) {
    let n = [];
    return e.forEach((l) => {
      let o = Object.keys(l);
      ie(o, "id"), ie(o, "text"), ie(o, "children"), ie(o, "disabled");
      let s = !1, a = [];
      l.children && (s = !0, a = X(l.children, t, i));
      let r = {};
      o.forEach((d) => {
        r[d] = l[d];
      }), n.push({
        group: s,
        disabled: l.disabled && l.disabled === !0 || s,
        value: s ? a : l.id,
        label: l.text,
        data: r
      }), a.forEach((d) => {
        n.push(d);
      });
    }), n;
  }
  return e.map((n, l) => t(n, l));
}, se = (e, t) => (e.forEach((i) => {
  i.disabled = i.disabled || t.indexOf(i.value) > -1;
}), e), sn = {
  props: {
    options: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: ze() },
    optionFormatter: { type: Function, default: Le },
    optionParser: { type: Function, default: Ee },
    select2Compatibility: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Options: X(this.options, this.optionParser, this.select2Compatibility)
    };
  },
  computed: {
    renderSelectedOption: {
      cache: !1,
      get() {
        let e = this.Options.filter((t) => t.selected === !0);
        return e && e.length > 0 && q(this.optionFormatter) ? this.optionFormatter(e[0]) : this.fetchString;
      }
    }
  },
  watch: {
    options: {
      handler() {
        this.Options = X(this.options, this.optionParser, this.select2Compatibility);
      },
      deep: !0
    }
  },
  methods: {
    getDropdownOptionSelector(e, t = -1, i = -1) {
      let n = { "is-highlight": t == i, "is-selected": e.selected === !0 };
      return e.selector && e.selector.split(" ").forEach((o) => {
        n[o] = !0;
      }), n;
    },
    renderOption(e) {
      return q(this.optionFormatter) ? this.optionFormatter(e) : e.label;
    }
  }
}, an = {
  name: "LktFieldRadio",
  mixins: [Ce, sn],
  props: {
    value: { type: String, default: "" }
  }
}, rn = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], dn = { "data-role": "option" }, un = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], cn = ["for", "innerHTML"];
function hn(e, t, i, n, l, o) {
  return k(), z("div", {
    "data-lkt": "field-radio",
    "data-state": e.state,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    N(e.$slots, "prefix"),
    (k(!0), z(zt, null, Lt(e.Options, (s, a) => (k(), z("div", dn, [
      D(W("input", {
        type: "radio",
        "onUpdate:modelValue": t[0] || (t[0] = (r) => e.Value = r),
        name: e.name,
        id: e.Identifier + a,
        disabled: e.disabled,
        readonly: e.readonly,
        placeholder: e.placeholder,
        value: s.id,
        checked: s.id === e.Value
      }, null, 8, un), [
        [Et, e.Value]
      ]),
      W("label", {
        for: e.Identifier + a,
        innerHTML: s.text
      }, null, 8, cn)
    ]))), 256))
  ], 8, rn);
}
const pn = /* @__PURE__ */ U(an, [["render", hn]]), fn = {
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: [String, Date], default: "" },
    disabledDates: { type: Array, default: () => [] },
    utc: { type: Boolean, default: !1 },
    multiDates: { type: Boolean, default: !1 },
    inline: { type: Boolean, default: !1 },
    monthPicker: { type: Boolean, default: !1 },
    timePicker: { type: Boolean, default: !1 },
    weekPicker: { type: Boolean, default: !1 },
    yearPicker: { type: Boolean, default: !1 },
    preventMinMaxNavigation: { type: Boolean, default: !1 },
    range: { type: Boolean, default: !1 },
    autoRange: { type: [Number, String], default: () => null },
    multiCalendars: { type: [Boolean, Number, String], default: () => null },
    flow: { type: Array, default: () => null },
    presetRanges: { type: Array, default: () => [] },
    minDate: { type: [Date, String], default: () => null },
    maxDate: { type: [Date, String], default: () => null },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: P(16) },
    valid: { type: [Boolean, Function], default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Identifier: P(16),
      originalValue: this.modelValue,
      value: this.modelValue
    };
  },
  computed: {
    isValid() {
      return q(this.valid) ? this.valid() : this.valid;
    },
    isEmpty() {
      return !this.value;
    },
    changed() {
      return this.value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return le(this, "label");
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  watch: {
    modelValue(e) {
      this.value = e, console.log("Updated modelValue", e);
    },
    value(e) {
      console.log("Updated value", e), this.$emit("update:modelValue", e);
    }
  },
  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    reset() {
      this.modelValue = this.originalValue;
    },
    getValue() {
      return this.modelValue;
    }
  }
}, gn = {
  name: "LktFieldDate",
  components: { lktFieldState: G },
  mixins: [fn, j]
}, mn = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], bn = ["for", "innerHTML"];
function vn(e, t, i, n, l, o) {
  const s = F("Datepicker"), a = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-date",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    N(e.$slots, "prefix"),
    ge(s, {
      modelValue: e.value,
      "onUpdate:modelValue": t[0] || (t[0] = (r) => e.value = r),
      uid: e.Identifier,
      disabled: e.disabled,
      name: e.name,
      range: e.range,
      "auto-range": e.autoRange,
      "multi-calendars": e.multiCalendars,
      "month-picker": e.monthPicker,
      "time-picker": e.timePicker,
      inline: e.inline,
      "multi-dates": e.multiDates,
      flow: e.flow,
      utc: e.utc,
      "week-picker": e.weekPicker,
      "year-picker": e.yearPicker,
      "preset-ranges": e.presetRanges,
      "disabled-dates": e.disabledDates,
      "min-date": e.minDate,
      "max-date": e.maxDate,
      "prevent-min-max-navigation": e.preventMinMaxNavigation
    }, null, 8, ["modelValue", "uid", "disabled", "name", "range", "auto-range", "multi-calendars", "month-picker", "time-picker", "inline", "multi-dates", "flow", "utc", "week-picker", "year-picker", "preset-ranges", "disabled-dates", "min-date", "max-date", "prevent-min-max-navigation"]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 0 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, bn)) : L("", !0),
    e.showInfoUi ? (k(), $(a, {
      key: 2,
      "show-add": e.showAdd,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, mn);
}
const _n = /* @__PURE__ */ U(gn, [["render", vn]]), yn = {
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: [String, Number, Array], default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: P(16) },
    valid: { type: [Boolean, Function], default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    disabledOptions: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: ze() },
    optionFormatter: { type: Function, default: Le },
    optionParser: { type: Function, default: Ee },
    select2Compatibility: { type: Boolean, default: !1 },
    resource: { type: String, default: () => null },
    searchOptions: { type: [Object, Function], default: () => null },
    searchPlaceholder: { type: String, default: "" }
  },
  data() {
    return {
      Identifier: P(16),
      originalValue: this.modelValue,
      value: this.modelValue,
      Options: se(X(this.options, this.optionParser, this.select2Compatibility), this.disabledOptions),
      loading: !1,
      visibleOptions: [],
      latestTimestamp: Date.now(),
      apiOptions: []
    };
  },
  computed: {
    isSearchable() {
      return It(this.resource);
    },
    renderSelectedOption: {
      cache: !1,
      get() {
        let e = this.Options.filter((t) => t.selected === !0);
        return e && e.length > 0 && q(this.optionFormatter) ? this.optionFormatter(e[0]) : this.fetchString;
      }
    },
    isValid() {
      return q(this.valid) ? this.valid() : this.valid;
    },
    isEmpty() {
      return !this.modelValue;
    },
    changed() {
      return this.value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return le(this, "label");
    },
    canRenderLabelHtml() {
      return this.canRenderLabelSlot ? !1 : !this.label && this.emptyLabel ? !0 : !!this.label;
    }
  },
  watch: {
    modelValue(e) {
      this.value = e, console.log("updated modelValue", e, this.modelValue);
    },
    value(e) {
      console.log("updated value", e, this.value), this.$emit("update:modelValue", e);
    },
    options: {
      handler() {
        this.Options = se(X(this.options, this.optionParser, this.select2Compatibility), this.disabledOptions), this.buildVisibleOptions();
      },
      deep: !0
    },
    apiOptions: {
      handler() {
        console.log("visibleOptions watcher", this.visibleOptions), this.buildVisibleOptions();
      },
      deep: !0
    }
  },
  methods: {
    buildVisibleOptions() {
      this.visibleOptions = [].concat(this.Options, this.apiOptions);
    },
    async handleInput(e) {
      if (console.log("inputEvent", e), this.isSearchable) {
        console.log("resource", this.resource);
        const t = q(this.searchOptions) ? this.searchOptions() : he(this.searchOptions) ? this.searchOptions : {};
        console.log("searchOptions", this.searchOptions, t), console.log("$http", this.$http), this.$http(this.resource, t).then((i) => {
          this.apiOptions = se(X(i.data.results, this.optionParser, this.select2Compatibility), this.disabledOptions), console.log("visibleOptions", this.visibleOptions);
        });
      }
    },
    getDropdownOptionSelector(e, t = -1, i = -1) {
      let n = { "is-highlight": t == i, "is-selected": e.selected === !0 };
      return e.selector && e.selector.split(" ").forEach((o) => {
        n[o] = !0;
      }), n;
    },
    renderOption(e) {
      return q(this.optionFormatter) ? this.optionFormatter(e) : e.label;
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },
    setIsDisabled(e = !1) {
      return this.disabled = e === !0, this;
    },
    isDisabled() {
      return this.disabled;
    },
    reset() {
      this.modelValue = this.originalValue;
    },
    getValue() {
      return this.modelValue;
    }
  }
}, wn = {
  name: "LktFieldSelect",
  components: { lktFieldState: G, VueNextSelect: ce },
  mixins: [yn, j]
}, kn = ["data-state", "data-multiple", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Sn = ["for", "innerHTML"];
function xn(e, t, i, n, l, o) {
  const s = F("vue-next-select"), a = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "select",
    "data-state": e.state,
    "data-multiple": e.multiple,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    N(e.$slots, "prefix"),
    ge(s, {
      modelValue: e.value,
      "onUpdate:modelValue": t[0] || (t[0] = (r) => e.value = r),
      options: e.Options,
      "label-by": "label",
      "group-by": "group",
      "visible-options": e.visibleOptions,
      searchable: e.isSearchable,
      multiple: e.multiple,
      loading: e.loading,
      "onSearch:input": e.handleInput,
      "search-placeholder": e.searchPlaceholder,
      "clear-on-close": ""
    }, null, 8, ["modelValue", "options", "visible-options", "searchable", "multiple", "loading", "onSearch:input", "search-placeholder"]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 0 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Sn)) : L("", !0),
    e.showInfoUi ? (k(), $(a, {
      key: 2,
      "show-add": e.showAdd,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, kn);
}
const Cn = /* @__PURE__ */ U(wn, [["render", xn]]), zn = {
  name: "blockquote",
  display: "command",
  add: function(e, t) {
    const i = e.context;
    i.blockquote = {
      targetButton: t,
      tag: e.util.createElement("BLOCKQUOTE")
    };
  },
  active: function(e) {
    if (!e)
      this.util.removeClass(this.context.blockquote.targetButton, "active");
    else if (/blockquote/i.test(e.nodeName))
      return this.util.addClass(this.context.blockquote.targetButton, "active"), !0;
    return !1;
  },
  action: function() {
    const e = this.util.getParentElement(this.getSelectionNode(), "blockquote");
    e ? this.detachRangeFormatElement(e, null, null, !1, !1) : this.applyRangeFormatElement(this.context.blockquote.tag.cloneNode(!1));
  }
}, Ln = {
  name: "align",
  display: "submenu",
  add: function(e, t) {
    const i = e.icons, n = e.context;
    n.align = {
      targetButton: t,
      _itemMenu: null,
      _alignList: null,
      currentAlign: "",
      defaultDir: e.options.rtl ? "right" : "left",
      icons: {
        justify: i.align_justify,
        left: i.align_left,
        right: i.align_right,
        center: i.align_center
      }
    };
    let l = this.setSubmenu(e), o = n.align._itemMenu = l.querySelector("ul");
    o.addEventListener("click", this.pickup.bind(e)), n.align._alignList = o.querySelectorAll("li button"), e.initMenuTarget(this.name, t, l), l = null, o = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV"), l = e.options.alignItems;
    let o = "";
    for (let s = 0, a, r; s < l.length; s++)
      a = l[s], r = t.toolbar["align" + a.charAt(0).toUpperCase() + a.slice(1)], o += '<li><button type="button" class="se-btn-list se-btn-align" data-value="' + a + '" title="' + r + '" aria-label="' + r + '"><span class="se-list-icon">' + i["align_" + a] + "</span>" + r + "</button></li>";
    return n.className = "se-submenu se-list-layer se-list-align", n.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + o + "</ul></div>", n;
  },
  active: function(e) {
    const t = this.context.align, i = t.targetButton, n = i.firstElementChild;
    if (!e)
      this.util.changeElement(n, t.icons[t.defaultDir]), i.removeAttribute("data-focus");
    else if (this.util.isFormatElement(e)) {
      const l = e.style.textAlign;
      if (l)
        return this.util.changeElement(n, t.icons[l] || t.icons[t.defaultDir]), i.setAttribute("data-focus", l), !0;
    }
    return !1;
  },
  on: function() {
    const e = this.context.align, t = e._alignList, i = e.targetButton.getAttribute("data-focus") || e.defaultDir;
    if (i !== e.currentAlign) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentAlign = i;
    }
  },
  exchangeDir: function() {
    const e = this.options.rtl ? "right" : "left";
    if (!this.context.align || this.context.align.defaultDir === e)
      return;
    this.context.align.defaultDir = e;
    let t = this.context.align._itemMenu, i = t.querySelector('[data-value="left"]'), n = t.querySelector('[data-value="right"]');
    if (i && n) {
      const l = i.parentElement, o = n.parentElement;
      l.appendChild(n), o.appendChild(i);
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !i && !/UL/i.test(t.tagName); )
      i = t.getAttribute("data-value"), t = t.parentNode;
    if (!i)
      return;
    const n = this.context.align.defaultDir, l = this.getSelectedElements();
    for (let o = 0, s = l.length; o < s; o++)
      this.util.setStyle(l[o], "textAlign", i === n ? "" : i);
    this.effectNode = null, this.submenuOff(), this.focus(), this.history.push(!1);
  }
}, En = {
  name: "font",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.font = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _fontList: null,
      currentFont: ""
    };
    let n = this.setSubmenu(e);
    n.querySelector(".se-list-inner").addEventListener("click", this.pickup.bind(e)), i.font._fontList = n.querySelectorAll("ul li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-font-family";
    let n, l, o, s, a = e.options.font, r = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + t.toolbar.default + '" aria-label="' + t.toolbar.default + '">(' + t.toolbar.default + ")</button></li>";
    for (o = 0, s = a.length; o < s; o++)
      n = a[o], l = n.split(",")[0], r += '<li><button type="button" class="se-btn-list" data-value="' + n + '" data-txt="' + l + '" title="' + l + '" aria-label="' + l + '" style="font-family:' + n + ';">' + l + "</button></li>";
    return r += "</ul></div>", i.innerHTML = r, i;
  },
  active: function(e) {
    const t = this.context.font.targetText, i = this.context.font.targetTooltip;
    if (e) {
      if (e.style && e.style.fontFamily.length > 0) {
        const n = e.style.fontFamily.replace(/["']/g, "");
        return this.util.changeTxt(t, n), this.util.changeTxt(i, this.lang.toolbar.font + " (" + n + ")"), !0;
      }
    } else {
      const n = this.hasFocus ? this.wwComputedStyle.fontFamily : this.lang.toolbar.font;
      this.util.changeTxt(t, n), this.util.changeTxt(i, this.hasFocus ? this.lang.toolbar.font + (n ? " (" + n + ")" : "") : n);
    }
    return !1;
  },
  on: function() {
    const e = this.context.font, t = e._fontList, i = e.targetText.textContent;
    if (i !== e.currentFont) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentFont = i;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const i = this.util.createElement("SPAN");
      i.style.fontFamily = t, this.nodeChange(i, ["font-family"], null, null);
    } else
      this.nodeChange(null, ["font-family"], ["span"], !0);
    this.submenuOff();
  }
}, In = {
  name: "fontSize",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.fontSize = {
      targetText: t.querySelector(".txt"),
      _sizeList: null,
      currentSize: ""
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.fontSize._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-font-size";
    const l = t.fontSize ? t.fontSize : [8, 9, 10, 11, 12, 14, 16, 18, 20, 22, 24, 26, 28, 36, 48, 72];
    let o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let s = 0, a = t.fontSizeUnit, r = l.length, d; s < r; s++)
      d = l[s], o += '<li><button type="button" class="se-btn-list" data-value="' + d + a + '" title="' + d + a + '" aria-label="' + d + a + '" style="font-size:' + d + a + ';">' + d + "</button></li>";
    return o += "</ul></div>", n.innerHTML = o, n;
  },
  active: function(e) {
    if (!e)
      this.util.changeTxt(this.context.fontSize.targetText, this.hasFocus ? this.options.__defaultFontSize || this.wwComputedStyle.fontSize : this.lang.toolbar.fontSize);
    else if (e.style && e.style.fontSize.length > 0)
      return this.util.changeTxt(this.context.fontSize.targetText, e.style.fontSize), !0;
    return !1;
  },
  on: function() {
    const e = this.context.fontSize, t = e._sizeList, i = e.targetText.textContent;
    if (i !== e.currentSize) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-value") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentSize = i;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value");
    if (t) {
      const i = this.util.createElement("SPAN");
      i.style.fontSize = t, this.nodeChange(i, ["font-size"], null, null);
    } else
      this.nodeChange(null, ["font-size"], ["span"], !0);
    this.submenuOff();
  }
}, Ie = {
  name: "colorPicker",
  add: function(e) {
    const t = e.context;
    t.colorPicker = {
      colorListHTML: "",
      _colorInput: "",
      _defaultColor: "#000",
      _styleProperty: "color",
      _currentColor: "",
      _colorList: []
    }, t.colorPicker.colorListHTML = this.createColorList(e, this._makeColorList);
  },
  createColorList: function(e, t) {
    const i = e.options, n = e.lang, l = !i.colorList || i.colorList.length === 0 ? [
      "#ff0000",
      "#ff5e00",
      "#ffe400",
      "#abf200",
      "#00d8ff",
      "#0055ff",
      "#6600ff",
      "#ff00dd",
      "#000000",
      "#ffd8d8",
      "#fae0d4",
      "#faf4c0",
      "#e4f7ba",
      "#d4f4fa",
      "#d9e5ff",
      "#e8d9ff",
      "#ffd9fa",
      "#f1f1f1",
      "#ffa7a7",
      "#ffc19e",
      "#faed7d",
      "#cef279",
      "#b2ebf4",
      "#b2ccff",
      "#d1b2ff",
      "#ffb2f5",
      "#bdbdbd",
      "#f15f5f",
      "#f29661",
      "#e5d85c",
      "#bce55c",
      "#5cd1e5",
      "#6699ff",
      "#a366ff",
      "#f261df",
      "#8c8c8c",
      "#980000",
      "#993800",
      "#998a00",
      "#6b9900",
      "#008299",
      "#003399",
      "#3d0099",
      "#990085",
      "#353535",
      "#670000",
      "#662500",
      "#665c00",
      "#476600",
      "#005766",
      "#002266",
      "#290066",
      "#660058",
      "#222222"
    ] : i.colorList;
    let o = [], s = '<div class="se-list-inner">';
    for (let a = 0, r = l.length, d; a < r; a++)
      d = l[a], d && (typeof d == "string" && (o.push(d), a < r - 1) || (o.length > 0 && (s += '<div class="se-selector-color">' + t(o) + "</div>", o = []), typeof d == "object" && (s += '<div class="se-selector-color">' + t(d) + "</div>")));
    return s += '<form class="se-form-group"><input type="text" maxlength="9" class="_se_color_picker_input se-color-input"/><button type="submit" class="se-btn-primary _se_color_picker_submit" title="' + n.dialogBox.submitButton + '" aria-label="' + n.dialogBox.submitButton + '">' + e.icons.checked + '</button><button type="button" class="se-btn _se_color_picker_remove" title="' + n.toolbar.removeFormat + '" aria-label="' + n.toolbar.removeFormat + '">' + e.icons.erase + "</button></form></div>", s;
  },
  _makeColorList: function(e) {
    let t = "";
    t += '<ul class="se-color-pallet">';
    for (let i = 0, n = e.length, l; i < n; i++)
      l = e[i], typeof l == "string" && (t += '<li><button type="button" data-value="' + l + '" title="' + l + '" aria-label="' + l + '" style="background-color:' + l + ';"></button></li>');
    return t += "</ul>", t;
  },
  init: function(e, t) {
    const i = this.plugins.colorPicker;
    let n = t || i.getColorInNode.call(this, e) || this.context.colorPicker._defaultColor;
    n = i.isHexColor(n) ? n : i.rgb2hex(n) || n;
    const l = this.context.colorPicker._colorList;
    if (l)
      for (let o = 0, s = l.length; o < s; o++)
        n.toLowerCase() === l[o].getAttribute("data-value").toLowerCase() ? this.util.addClass(l[o], "active") : this.util.removeClass(l[o], "active");
    i.setInputText.call(this, i.colorName2hex.call(this, n));
  },
  setCurrentColor: function(e) {
    this.context.colorPicker._currentColor = e, this.context.colorPicker._colorInput.style.borderColor = e;
  },
  setInputText: function(e) {
    e = /^#/.test(e) ? e : "#" + e, this.context.colorPicker._colorInput.value = e, this.plugins.colorPicker.setCurrentColor.call(this, e);
  },
  getColorInNode: function(e) {
    let t = "";
    const i = this.context.colorPicker._styleProperty;
    for (; e && !this.util.isWysiwygDiv(e) && t.length === 0; )
      e.nodeType === 1 && e.style[i] && (t = e.style[i]), e = e.parentNode;
    return t;
  },
  isHexColor: function(e) {
    return /^#[0-9a-f]{3}(?:[0-9a-f]{3})?$/i.test(e);
  },
  rgb2hex: function(e) {
    const t = e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
    return t && t.length === 4 ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "";
  },
  colorName2hex: function(e) {
    if (/^#/.test(e))
      return e;
    var t = this.util.createElement("div");
    t.style.display = "none", t.style.color = e;
    var i = this._w.getComputedStyle(this._d.body.appendChild(t)).color.match(/\d+/g).map(function(n) {
      return parseInt(n, 10);
    });
    return this.util.removeItem(t), i.length >= 3 ? "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).substr(1) : !1;
  }
}, Rn = {
  name: "fontColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Ie]);
    const i = e.context;
    i.fontColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let n = this.setSubmenu(e);
    i.fontColor.colorInput = n.querySelector("._se_color_picker_input"), i.fontColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), n.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), n.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), n.addEventListener("click", this.pickup.bind(e)), i.fontColor.colorList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = t, i;
  },
  on: function() {
    const e = this.context.colorPicker, t = this.context.fontColor;
    e._colorInput = t.colorInput;
    const i = this.wwComputedStyle.color;
    e._defaultColor = i ? this.plugins.colorPicker.isHexColor(i) ? i : this.plugins.colorPicker.rgb2hex(i) : "#333333", e._styleProperty = "color", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.fontColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.fontColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e)
      return;
    const t = this.util.createElement("SPAN");
    t.style.color = e, this.nodeChange(t, ["color"], null, null), this.submenuOff();
  }
}, Tn = {
  name: "hiliteColor",
  display: "submenu",
  add: function(e, t) {
    e.addModule([Ie]);
    const i = e.context;
    i.hiliteColor = {
      previewEl: null,
      colorInput: null,
      colorList: null
    };
    let n = this.setSubmenu(e);
    i.hiliteColor.colorInput = n.querySelector("._se_color_picker_input"), i.hiliteColor.colorInput.addEventListener("keyup", this.onChangeInput.bind(e)), n.querySelector("._se_color_picker_submit").addEventListener("click", this.submit.bind(e)), n.querySelector("._se_color_picker_remove").addEventListener("click", this.remove.bind(e)), n.addEventListener("click", this.pickup.bind(e)), i.hiliteColor.colorList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.context.colorPicker.colorListHTML, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = t, i;
  },
  on: function() {
    const e = this.context.colorPicker, t = this.context.hiliteColor;
    e._colorInput = t.colorInput;
    const i = this.wwComputedStyle.backgroundColor;
    e._defaultColor = i ? this.plugins.colorPicker.isHexColor(i) ? i : this.plugins.colorPicker.rgb2hex(i) : "#ffffff", e._styleProperty = "backgroundColor", e._colorList = t.colorList, this.plugins.colorPicker.init.call(this, this.getSelectionNode(), null);
  },
  onChangeInput: function(e) {
    this.plugins.colorPicker.setCurrentColor.call(this, e.target.value);
  },
  submit: function() {
    this.plugins.hiliteColor.applyColor.call(this, this.context.colorPicker._currentColor);
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation(), this.plugins.hiliteColor.applyColor.call(this, e.target.getAttribute("data-value"));
  },
  remove: function() {
    this.nodeChange(null, ["background-color"], ["span"], !0), this.submenuOff();
  },
  applyColor: function(e) {
    if (!e)
      return;
    const t = this.util.createElement("SPAN");
    t.style.backgroundColor = e, this.nodeChange(t, ["background-color"], null, null), this.submenuOff();
  }
}, Bn = {
  name: "horizontalRule",
  display: "submenu",
  add: function(e, t) {
    e.context.horizontalRule = {
      currentHR: null
    };
    let i = this.setSubmenu(e);
    i.querySelector("ul").addEventListener("click", this.horizontalRulePick.bind(e)), e.initMenuTarget(this.name, t, i), i = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.options.hrItems || [{ name: t.toolbar.hr_solid, class: "__se__solid" }, { name: t.toolbar.hr_dashed, class: "__se__dashed" }, { name: t.toolbar.hr_dotted, class: "__se__dotted" }];
    let l = "";
    for (let o = 0, s = n.length; o < s; o++)
      l += '<li><button type="button" class="se-btn-list btn_line" data-command="horizontalRule" data-value="' + n[o].class + '" title="' + n[o].name + '" aria-label="' + n[o].name + '"><hr' + (n[o].class ? ' class="' + n[o].class + '"' : "") + (n[o].style ? ' style="' + n[o].style + '"' : "") + "/></button></li>";
    return i.className = "se-submenu se-list-layer se-list-line", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic">' + l + "</ul></div>", i;
  },
  active: function(e) {
    if (!e)
      this.util.hasClass(this.context.horizontalRule.currentHR, "on") && this.controllersOff();
    else if (/HR/i.test(e.nodeName))
      return this.context.horizontalRule.currentHR = e, this.util.hasClass(e, "on") || (this.util.addClass(e, "on"), this.controllersOn("hr", this.util.removeClass.bind(this.util, e, "on"))), !0;
    return !1;
  },
  appendHr: function(e) {
    return this.focus(), this.insertComponent(e.cloneNode(!1), !1, !0, !1);
  },
  horizontalRulePick: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = t.getAttribute("data-command");
    for (; !i && !/UL/i.test(t.tagName); )
      t = t.parentNode, i = t.getAttribute("data-command");
    if (!i)
      return;
    const n = this.plugins.horizontalRule.appendHr.call(this, t.firstElementChild);
    n && (this.setRange(n, 0, n, 0), this.submenuOff());
  }
}, An = {
  name: "list",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.list = {
      targetButton: t,
      _list: null,
      currentList: "",
      icons: {
        bullets: e.icons.list_bullets,
        number: e.icons.list_number
      }
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.list._list = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-submenu se-list-layer", i.innerHTML = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="OL" title="' + t.toolbar.orderList + '" aria-label="' + t.toolbar.orderList + '">' + e.icons.list_number + '</button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="UL" title="' + t.toolbar.unorderList + '" aria-label="' + t.toolbar.unorderList + '">' + e.icons.list_bullets + "</button></li></ul></div>", i;
  },
  active: function(e) {
    const t = this.context.list.targetButton, i = t.firstElementChild, n = this.util;
    if (n.isList(e)) {
      const l = e.nodeName;
      return t.setAttribute("data-focus", l), n.addClass(t, "active"), /UL/i.test(l) ? n.changeElement(i, this.context.list.icons.bullets) : n.changeElement(i, this.context.list.icons.number), !0;
    } else
      t.removeAttribute("data-focus"), n.changeElement(i, this.context.list.icons.number), n.removeClass(t, "active");
    return !1;
  },
  on: function() {
    const e = this.context.list, t = e._list, i = e.targetButton.getAttribute("data-focus") || "";
    if (i !== e.currentList) {
      for (let n = 0, l = t.length; n < l; n++)
        i === t[n].getAttribute("data-command") ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
      e.currentList = i;
    }
  },
  editList: function(e, t, i) {
    let n = this.getRange(), l = t || this.getSelectedElementsAndComponents(!1);
    if (l.length === 0 && (t || (n = this.getRange_addLine(n, null), l = this.getSelectedElementsAndComponents(!1), l.length === 0)))
      return;
    const o = this.util;
    o.sortByDepth(l, !0);
    let s = l[0], a = l[l.length - 1], r = (o.isListCell(s) || o.isComponent(s)) && !s.previousElementSibling ? s.parentNode.previousElementSibling : s.previousElementSibling, d = (o.isListCell(a) || o.isComponent(a)) && !a.nextElementSibling ? a.parentNode.nextElementSibling : a.nextElementSibling;
    const u = {
      sc: n.startContainer,
      so: n.startContainer === n.endContainer && o.onlyZeroWidthSpace(n.startContainer) && n.startOffset === 0 && n.endOffset === 1 ? n.endOffset : n.startOffset,
      ec: n.endContainer,
      eo: n.endOffset
    };
    let f = !0;
    for (let h = 0, g = l.length; h < g; h++)
      if (!o.isList(o.getRangeFormatElement(l[h], function(p) {
        return this.getRangeFormatElement(p) && p !== l[h];
      }.bind(o)))) {
        f = !1;
        break;
      }
    if (f && (!r || s.tagName !== r.tagName || e !== r.tagName.toUpperCase()) && (!d || a.tagName !== d.tagName || e !== d.tagName.toUpperCase())) {
      if (i) {
        for (let c = 0, v = l.length; c < v; c++)
          for (let _ = c - 1; _ >= 0; _--)
            if (l[_].contains(l[c])) {
              l.splice(c, 1), c--, v--;
              break;
            }
      }
      const h = o.getRangeFormatElement(s), g = h && h.tagName === e;
      let p, b;
      const m = function(c) {
        return !this.isComponent(c);
      }.bind(o);
      g || (b = o.createElement(e));
      for (let c = 0, v = l.length, _, y; c < v; c++)
        y = o.getRangeFormatElement(l[c], m), !(!y || !o.isList(y)) && (_ ? _ !== y ? (i && o.isListCell(y.parentNode) ? this.plugins.list._detachNested.call(this, p.f) : this.detachRangeFormatElement(p.f[0].parentNode, p.f, b, !1, !0), y = l[c].parentNode, g || (b = o.createElement(e)), _ = y, p = { r: _, f: [o.getParentElement(l[c], "LI")] }) : p.f.push(o.getParentElement(l[c], "LI")) : (_ = y, p = { r: _, f: [o.getParentElement(l[c], "LI")] }), c === v - 1 && (i && o.isListCell(y.parentNode) ? this.plugins.list._detachNested.call(this, p.f) : this.detachRangeFormatElement(p.f[0].parentNode, p.f, b, !1, !0)));
    } else {
      const h = r && r.parentNode, g = d && d.parentNode;
      r = h && !o.isWysiwygDiv(h) && h.nodeName === e ? h : r, d = g && !o.isWysiwygDiv(g) && g.nodeName === e ? g : d;
      const p = r && r.tagName === e, b = d && d.tagName === e;
      let m = p ? r : o.createElement(e), c = null, v = null, _ = null;
      const y = function(w) {
        return !this.isComponent(w) && !this.isList(w);
      }.bind(o);
      for (let w = 0, x = l.length, S, E, B, A, C, I, T, O, te; w < x; w++) {
        if (E = l[w], E.childNodes.length === 0 && !o._isIgnoreNodeChange(E)) {
          o.removeItem(E);
          continue;
        }
        if (A = l[w + 1], C = E.parentNode, I = A ? A.parentNode : null, B = o.isListCell(E), te = o.isRangeFormatElement(C) ? C : null, T = B && !o.isWysiwygDiv(C) ? C.parentNode : C, O = B && !o.isWysiwygDiv(C) ? !A || o.isListCell(T) ? C : C.nextSibling : E.nextSibling, S = o.createElement("LI"), o.copyFormatAttributes(S, E), w === 0 && u.sc === E && (u.sc = S), w === x - 1 && u.ec === E && (u.ec = S), o.isComponent(E)) {
          const Z = /^HR$/i.test(E.nodeName);
          Z || (S.innerHTML = "<br>"), S.innerHTML += E.outerHTML, Z && (S.innerHTML += "<br>");
        } else {
          const Z = E.childNodes;
          for (; Z[0]; )
            S.appendChild(Z[0]);
        }
        m.appendChild(S), (!A || T !== I || o.isRangeFormatElement(O)) && (c || (c = m), (!p || !A || T !== I) && !(A && o.isList(I) && I === C) && m.parentNode !== T && T.insertBefore(m, O)), o.removeItem(E), p && v === null && (v = m.children.length - 1), A && (o.getRangeFormatElement(I, y) !== o.getRangeFormatElement(C, y) || o.isList(I) && o.isList(C) && o.getElementDepth(I) !== o.getElementDepth(C)) && (m = o.createElement(e)), te && te.children.length === 0 && o.removeItem(te);
      }
      v && (c = c.children[v]), b && (_ = m.children.length - 1, m.innerHTML += d.innerHTML, m.children[_], o.removeItem(d));
    }
    return this.effectNode = null, u;
  },
  _detachNested: function(e) {
    const t = e[0], i = e[e.length - 1], n = i.nextElementSibling, l = t.parentNode, o = l.parentNode.nextElementSibling, s = l.parentNode.parentNode;
    for (let r = 0, d = e.length; r < d; r++)
      s.insertBefore(e[r], o);
    if (n && l.children.length > 0) {
      const r = l.cloneNode(!1), d = l.childNodes, u = this.util.getPositionIndex(n);
      for (; d[u]; )
        r.appendChild(d[u]);
      i.appendChild(r);
    }
    l.children.length === 0 && this.util.removeItem(l), this.util.mergeSameTags(s);
    const a = this.util.getEdgeChildNodes(t, i);
    return {
      cc: t.parentNode,
      sc: a.sc,
      ec: a.ec
    };
  },
  editInsideList: function(e, t) {
    t = t || this.getSelectedElements().filter(function(s) {
      return this.isListCell(s);
    }.bind(this.util));
    const i = t.length;
    if (i === 0 || !e && !this.util.isListCell(t[0].previousElementSibling) && !this.util.isListCell(t[i - 1].nextElementSibling))
      return {
        sc: t[0],
        so: 0,
        ec: t[i - 1],
        eo: 1
      };
    let n = t[0].parentNode, l = t[i - 1], o = null;
    if (e) {
      if (n !== l.parentNode && this.util.isList(l.parentNode.parentNode) && l.nextElementSibling)
        for (l = l.nextElementSibling; l; )
          t.push(l), l = l.nextElementSibling;
      o = this.plugins.list.editList.call(this, n.nodeName.toUpperCase(), t, !0);
    } else {
      let s = this.util.createElement(n.nodeName), a = t[0].previousElementSibling, r = l.nextElementSibling;
      const d = { s: null, e: null, sl: n, el: n };
      for (let h = 0, g = i, p; h < g; h++)
        p = t[h], p.parentNode !== n && (this.plugins.list._insiedList.call(this, n, s, a, r, d), n = p.parentNode, s = this.util.createElement(n.nodeName)), a = p.previousElementSibling, r = p.nextElementSibling, s.appendChild(p);
      this.plugins.list._insiedList.call(this, n, s, a, r, d);
      const u = this.util.getNodeFromPath(d.s, d.sl), f = this.util.getNodeFromPath(d.e, d.el);
      o = {
        sc: u,
        so: 0,
        ec: f,
        eo: f.textContent.length
      };
    }
    return o;
  },
  _insiedList: function(e, t, i, n, l) {
    let o = !1;
    if (i && t.tagName === i.tagName) {
      const s = t.children;
      for (; s[0]; )
        i.appendChild(s[0]);
      t = i, o = !0;
    }
    if (n && t.tagName === n.tagName) {
      const s = n.children;
      for (; s[0]; )
        t.appendChild(s[0]);
      const a = n.nextElementSibling;
      n.parentNode.removeChild(n), n = a;
    }
    if (!o) {
      this.util.isListCell(i) && (e = i, n = null), e.insertBefore(t, n), l.s || (l.s = this.util.getNodePath(t.firstElementChild.firstChild, e, null), l.sl = e);
      const s = e.contains(l.sl) ? this.util.getNodePath(l.sl, e) : null;
      l.e = this.util.getNodePath(t.lastElementChild.firstChild, e, null), l.el = e, this.util.mergeSameTags(e, [l.s, l.e, s], !1), this.util.mergeNestedTags(e), s && (l.sl = this.util.getNodeFromPath(s, e));
    }
    return t;
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = "";
    for (; !i && !/^UL$/i.test(t.tagName); )
      i = t.getAttribute("data-command"), t = t.parentNode;
    if (!i)
      return;
    const n = this.plugins.list.editList.call(this, i, null, !1);
    n && this.setRange(n.sc, n.so, n.ec, n.eo), this.submenuOff(), this.history.push(!1);
  }
}, Nn = {
  name: "table",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    let n = i.table = {
      _element: null,
      _tdElement: null,
      _trElement: null,
      _trElements: null,
      _tableXY: [],
      _maxWidth: !0,
      _fixedColumn: !1,
      _rtl: e.options.rtl,
      cellControllerTop: e.options.tableCellControllerPosition === "top",
      resizeText: null,
      headerButton: null,
      mergeButton: null,
      splitButton: null,
      splitMenu: null,
      maxText: e.lang.controller.maxSize,
      minText: e.lang.controller.minSize,
      _physical_cellCnt: 0,
      _logical_cellCnt: 0,
      _rowCnt: 0,
      _rowIndex: 0,
      _physical_cellIndex: 0,
      _logical_cellIndex: 0,
      _current_colSpan: 0,
      _current_rowSpan: 0,
      icons: {
        expansion: e.icons.expansion,
        reduction: e.icons.reduction
      }
    }, l = this.setSubmenu(e), o = l.querySelector(".se-controller-table-picker");
    n.tableHighlight = l.querySelector(".se-table-size-highlighted"), n.tableUnHighlight = l.querySelector(".se-table-size-unhighlighted"), n.tableDisplay = l.querySelector(".se-table-size-display"), e.options.rtl && (n.tableHighlight.style.left = 10 * 18 - 13 + "px");
    let s = this.setController_table(e);
    n.tableController = s, n.resizeButton = s.querySelector("._se_table_resize"), n.resizeText = s.querySelector("._se_table_resize > span > span"), n.columnFixedButton = s.querySelector("._se_table_fixed_column"), n.headerButton = s.querySelector("._se_table_header");
    let a = this.setController_tableEditor(e, n.cellControllerTop);
    n.resizeDiv = a, n.splitMenu = a.querySelector(".se-btn-group-sub"), n.mergeButton = a.querySelector("._se_table_merge_button"), n.splitButton = a.querySelector("._se_table_split_button"), n.insertRowAboveButton = a.querySelector("._se_table_insert_row_a"), n.insertRowBelowButton = a.querySelector("._se_table_insert_row_b"), o.addEventListener("mousemove", this.onMouseMove_tablePicker.bind(e, n)), o.addEventListener("click", this.appendTable.bind(e)), a.addEventListener("click", this.onClick_tableController.bind(e)), s.addEventListener("click", this.onClick_tableController.bind(e)), e.initMenuTarget(this.name, t, l), i.element.relative.appendChild(a), i.element.relative.appendChild(s), l = null, o = null, a = null, s = null, n = null;
  },
  setSubmenu: function(e) {
    const t = e.util.createElement("DIV");
    return t.className = "se-submenu se-selector-table", t.innerHTML = '<div class="se-table-size"><div class="se-table-size-picker se-controller-table-picker"></div><div class="se-table-size-highlighted"></div><div class="se-table-size-unhighlighted"></div></div><div class="se-table-size-display">1 x 1</div>', t;
  },
  setController_table: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-table", n.innerHTML = '<div><div class="se-btn-group"><button type="button" data-command="resize" class="se-btn se-tooltip _se_table_resize">' + i.expansion + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.maxSize + '</span></span></button><button type="button" data-command="layout" class="se-btn se-tooltip _se_table_fixed_column">' + i.fixed_column_width + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.fixedColumnWidth + '</span></span></button><button type="button" data-command="header" class="se-btn se-tooltip _se_table_header">' + i.table_header + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.tableHeader + '</span></span></button><button type="button" data-command="remove" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
  },
  setController_tableEditor: function(e, t) {
    const i = e.lang, n = e.icons, l = e.util.createElement("DIV");
    return l.className = "se-controller se-controller-table-cell", l.innerHTML = (t ? "" : '<div class="se-arrow se-arrow-up"></div>') + '<div class="se-btn-group"><button type="button" data-command="insert" data-value="row" data-option="up" class="se-btn se-tooltip _se_table_insert_row_a">' + n.insert_row_above + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowAbove + '</span></span></button><button type="button" data-command="insert" data-value="row" data-option="down" class="se-btn se-tooltip _se_table_insert_row_b">' + n.insert_row_below + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertRowBelow + '</span></span></button><button type="button" data-command="delete" data-value="row" class="se-btn se-tooltip">' + n.delete_row + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteRow + '</span></span></button><button type="button" data-command="merge" class="_se_table_merge_button se-btn se-tooltip" disabled>' + n.merge_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.mergeCells + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="insert" data-value="cell" data-option="left" class="se-btn se-tooltip">' + n.insert_column_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnBefore + '</span></span></button><button type="button" data-command="insert" data-value="cell" data-option="right" class="se-btn se-tooltip">' + n.insert_column_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.insertColumnAfter + '</span></span></button><button type="button" data-command="delete" data-value="cell" class="se-btn se-tooltip">' + n.delete_column + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.deleteColumn + '</span></span></button><button type="button" data-command="onsplit" class="_se_table_split_button se-btn se-tooltip">' + n.split_cell + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + i.controller.splitCells + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-table-split"><div class="se-list-inner"><ul class="se-list-basic"><li class="se-btn-list" data-command="split" data-value="vertical" style="line-height:32px;" title="' + i.controller.VerticalSplit + '" aria-label="' + i.controller.VerticalSplit + '">' + i.controller.VerticalSplit + '</li><li class="se-btn-list" data-command="split" data-value="horizontal" style="line-height:32px;" title="' + i.controller.HorizontalSplit + '" aria-label="' + i.controller.HorizontalSplit + '">' + i.controller.HorizontalSplit + "</li></ul></div></div></div>", l;
  },
  appendTable: function() {
    const e = this.util.createElement("TABLE"), t = this.plugins.table.createCells, i = this.context.table._tableXY[0];
    let n = this.context.table._tableXY[1], l = "<tbody>";
    for (; n > 0; )
      l += "<tr>" + t.call(this, "td", i) + "</tr>", --n;
    if (l += "</tbody>", e.innerHTML = l, this.insertComponent(e, !1, !0, !1)) {
      const s = e.querySelector("td div");
      this.setRange(s, 0, s, 0), this.plugins.table.reset_table_picker.call(this);
    }
  },
  createCells: function(e, t, i) {
    if (e = e.toLowerCase(), i) {
      const n = this.util.createElement(e);
      return n.innerHTML = "<div><br></div>", n;
    } else {
      let n = "";
      for (; t > 0; )
        n += "<" + e + "><div><br></div></" + e + ">", t--;
      return n;
    }
  },
  onMouseMove_tablePicker: function(e, t) {
    t.stopPropagation();
    let i = this._w.Math.ceil(t.offsetX / 18), n = this._w.Math.ceil(t.offsetY / 18);
    i = i < 1 ? 1 : i, n = n < 1 ? 1 : n, e._rtl && (e.tableHighlight.style.left = i * 18 - 13 + "px", i = 11 - i), e.tableHighlight.style.width = i + "em", e.tableHighlight.style.height = n + "em", this.util.changeTxt(e.tableDisplay, i + " x " + n), e._tableXY = [i, n];
  },
  reset_table_picker: function() {
    if (!this.context.table.tableHighlight)
      return;
    const e = this.context.table.tableHighlight.style, t = this.context.table.tableUnHighlight.style;
    e.width = "1em", e.height = "1em", t.width = "10em", t.height = "10em", this.util.changeTxt(this.context.table.tableDisplay, "1 x 1"), this.submenuOff();
  },
  init: function() {
    const e = this.context.table, t = this.plugins.table;
    if (t._removeEvents.call(this), t._selectedTable) {
      const i = t._selectedTable.querySelectorAll(".se-table-selected-cell");
      for (let n = 0, l = i.length; n < l; n++)
        this.util.removeClass(i[n], "se-table-selected-cell");
    }
    t._toggleEditor.call(this, !0), e._element = null, e._tdElement = null, e._trElement = null, e._trElements = null, e._tableXY = [], e._maxWidth = !0, e._fixedColumn = !1, e._physical_cellCnt = 0, e._logical_cellCnt = 0, e._rowCnt = 0, e._rowIndex = 0, e._physical_cellIndex = 0, e._logical_cellIndex = 0, e._current_colSpan = 0, e._current_rowSpan = 0, t._shift = !1, t._selectedCells = null, t._selectedTable = null, t._ref = null, t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null;
  },
  call_controller_tableEdit: function(e) {
    const t = this.plugins.table, i = this.context.table;
    if (!this.getSelection().isCollapsed && !t._selectedCell) {
      this.controllersOff(), this.util.removeClass(e, "se-table-selected-cell");
      return;
    }
    const n = i._element || this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    i._maxWidth = this.util.hasClass(n, "se-table-size-100") || n.style.width === "100%" || !n.style.width && !this.util.hasClass(n, "se-table-size-auto"), i._fixedColumn = this.util.hasClass(n, "se-table-layout-fixed") || n.style.tableLayout === "fixed", t.setTableStyle.call(this, i._maxWidth ? "width|column" : "width"), t.setPositionControllerTop.call(this, n), t.setPositionControllerDiv.call(this, e, t._shift), t._shift || this.controllersOn(i.resizeDiv, i.tableController, t.init.bind(this), e, "table");
  },
  setPositionControllerTop: function(e) {
    this.setControllerPosition(this.context.table.tableController, e, "top", { left: 0, top: 0 });
  },
  setPositionControllerDiv: function(e, t) {
    const i = this.context.table, n = i.resizeDiv;
    this.plugins.table.setCellInfo.call(this, e, t), i.cellControllerTop ? this.setControllerPosition(n, i._element, "top", { left: i.tableController.offsetWidth, top: 0 }) : this.setControllerPosition(n, e, "bottom", { left: 0, top: 0 });
  },
  setCellInfo: function(e, t) {
    const i = this.context.table, n = i._element = this.plugins.table._selectedTable || this.util.getParentElement(e, "TABLE");
    if (/THEAD/i.test(n.firstElementChild.nodeName) ? this.util.addClass(i.headerButton, "active") : this.util.removeClass(i.headerButton, "active"), t || i._physical_cellCnt === 0) {
      i._tdElement !== e && (i._tdElement = e, i._trElement = e.parentNode);
      const l = i._trElements = n.rows, o = e.cellIndex;
      let s = 0;
      for (let u = 0, f = l[0].cells, h = l[0].cells.length; u < h; u++)
        s += f[u].colSpan;
      const a = i._rowIndex = i._trElement.rowIndex;
      i._rowCnt = l.length, i._physical_cellCnt = i._trElement.cells.length, i._logical_cellCnt = s, i._physical_cellIndex = o, i._current_colSpan = i._tdElement.colSpan - 1, i._current_rowSpan - i._trElement.cells[o].rowSpan - 1;
      let r = [], d = [];
      for (let u = 0, f, h; u <= a; u++) {
        f = l[u].cells, h = 0;
        for (let g = 0, p = f.length, b, m, c, v; g < p; g++) {
          if (b = f[g], m = b.colSpan - 1, c = b.rowSpan - 1, v = g + h, d.length > 0)
            for (let _ = 0, y; _ < d.length; _++)
              y = d[_], !(y.row > u) && (v >= y.index ? (h += y.cs, v += y.cs, y.rs -= 1, y.row = u + 1, y.rs < 1 && (d.splice(_, 1), _--)) : g === p - 1 && (y.rs -= 1, y.row = u + 1, y.rs < 1 && (d.splice(_, 1), _--)));
          if (u === a && g === o) {
            i._logical_cellIndex = v;
            break;
          }
          c > 0 && r.push({
            index: v,
            cs: m + 1,
            rs: c,
            row: -1
          }), h += m;
        }
        d = d.concat(r).sort(function(g, p) {
          return g.index - p.index;
        }), r = [];
      }
      r = null, d = null;
    }
  },
  editTable: function(e, t) {
    const i = this.plugins.table, n = this.context.table, l = n._element, o = e === "row";
    if (o) {
      const s = n._trElement.parentNode;
      if (/^THEAD$/i.test(s.nodeName)) {
        if (t === "up")
          return;
        if (!s.nextElementSibling || !/^TBODY$/i.test(s.nextElementSibling.nodeName)) {
          l.innerHTML += "<tbody><tr>" + i.createCells.call(this, "td", n._logical_cellCnt, !1) + "</tr></tbody>";
          return;
        }
      }
    }
    if (i._ref) {
      const s = n._tdElement, a = i._selectedCells;
      if (o)
        if (t)
          i.setCellInfo.call(this, t === "up" ? a[0] : a[a.length - 1], !0), i.editRow.call(this, t, s);
        else {
          let r = a[0].parentNode;
          const d = [a[0]];
          for (let u = 1, f = a.length, h; u < f; u++)
            h = a[u], r !== h.parentNode && (d.push(h), r = h.parentNode);
          for (let u = 0, f = d.length; u < f; u++)
            i.setCellInfo.call(this, d[u], !0), i.editRow.call(this, t);
        }
      else {
        const r = a[0].parentNode;
        if (t) {
          let d = null;
          for (let u = 0, f = a.length - 1; u < f; u++)
            if (r !== a[u + 1].parentNode) {
              d = a[u];
              break;
            }
          i.setCellInfo.call(this, t === "left" ? a[0] : d || a[0], !0), i.editCell.call(this, t, s);
        } else {
          const d = [a[0]];
          for (let u = 1, f = a.length, h; u < f && (h = a[u], r === h.parentNode); u++)
            d.push(h);
          for (let u = 0, f = d.length; u < f; u++)
            i.setCellInfo.call(this, d[u], !0), i.editCell.call(this, t);
        }
      }
      t || i.init.call(this);
    } else
      i[o ? "editRow" : "editCell"].call(this, t);
    if (!t) {
      const s = l.children;
      for (let a = 0; a < s.length; a++)
        s[a].children.length === 0 && (this.util.removeItem(s[a]), a--);
      l.children.length === 0 && this.util.removeItem(l);
    }
  },
  editRow: function(e, t) {
    const i = this.context.table, n = !e, l = e === "up", o = i._rowIndex, s = n || l ? o : o + i._current_rowSpan + 1, a = n ? -1 : 1, r = i._trElements;
    let d = i._logical_cellCnt;
    for (let u = 0, f = o + (n ? -1 : 0), h; u <= f; u++) {
      if (h = r[u].cells, h.length === 0)
        return;
      for (let g = 0, p = h.length, b, m; g < p; g++)
        b = h[g].rowSpan, m = h[g].colSpan, !(b < 2 && m < 2) && b + u > s && s > u && (h[g].rowSpan = b + a, d -= m);
    }
    if (n) {
      const u = r[o + 1];
      if (u) {
        const f = [];
        let h = r[o].cells, g = 0;
        for (let p = 0, b = h.length, m, c; p < b; p++)
          m = h[p], c = p + g, g += m.colSpan - 1, m.rowSpan > 1 && (m.rowSpan -= 1, f.push({ cell: m.cloneNode(!1), index: c }));
        if (f.length > 0) {
          let p = f.shift();
          h = u.cells, g = 0;
          for (let b = 0, m = h.length, c, v; b < m && (c = h[b], v = b + g, g += c.colSpan - 1, !(v >= p.index && (b--, g--, g += p.cell.colSpan - 1, u.insertBefore(p.cell, c), p = f.shift(), !p))); b++)
            ;
          if (p) {
            u.appendChild(p.cell);
            for (let b = 0, m = f.length; b < m; b++)
              u.appendChild(f[b].cell);
          }
        }
      }
      i._element.deleteRow(s);
    } else {
      const u = i._element.insertRow(s);
      u.innerHTML = this.plugins.table.createCells.call(this, "td", d, !1);
    }
    n ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  editCell: function(e, t) {
    const i = this.context.table, n = this.util, l = !e, o = e === "left", s = i._current_colSpan, a = l || o ? i._logical_cellIndex : i._logical_cellIndex + s + 1, r = i._trElements;
    let d = [], u = [], f = 0;
    const h = [], g = [];
    for (let p = 0, b = i._rowCnt, m, c, v, _, y, w; p < b; p++) {
      m = r[p], c = a, y = !1, v = m.cells, w = 0;
      for (let x = 0, S, E = v.length, B, A, C; x < E && (S = v[x], !!S); x++)
        if (B = S.rowSpan - 1, A = S.colSpan - 1, l) {
          if (C = x + w, u.length > 0) {
            const I = !v[x + 1];
            for (let T = 0, O; T < u.length; T++)
              O = u[T], !(O.row > p) && (C >= O.index ? (w += O.cs, C = x + w, O.rs -= 1, O.row = p + 1, O.rs < 1 && (u.splice(T, 1), T--)) : I && (O.rs -= 1, O.row = p + 1, O.rs < 1 && (u.splice(T, 1), T--)));
          }
          B > 0 && d.push({
            rs: B,
            cs: A + 1,
            index: C,
            row: -1
          }), C >= c && C + A <= c + s ? h.push(S) : C <= c + s && C + A >= c ? S.colSpan -= n.getOverlapRangeAtIndex(a, a + s, C, C + A) : B > 0 && (C < c || C + A > c + s) && g.push({
            cell: S,
            i: p,
            rs: p + B
          }), w += A;
        } else {
          if (x >= c)
            break;
          if (A > 0) {
            if (f < 1 && A + x >= c) {
              S.colSpan += 1, c = null, f = B + 1;
              break;
            }
            c -= A;
          }
          if (!y) {
            for (let I = 0, T; I < u.length; I++)
              T = u[I], c -= T.cs, T.rs -= 1, T.rs < 1 && (u.splice(I, 1), I--);
            y = !0;
          }
        }
      if (u = u.concat(d).sort(function(x, S) {
        return x.index - S.index;
      }), d = [], !l) {
        if (f > 0) {
          f -= 1;
          continue;
        }
        c !== null && v.length > 0 && (_ = this.plugins.table.createCells.call(this, v[0].nodeName, 0, !0), _ = m.insertBefore(_, v[c]));
      }
    }
    if (l) {
      let p, b;
      for (let m = 0, c = h.length, v; m < c; m++)
        v = h[m].parentNode, n.removeItem(h[m]), v.cells.length === 0 && (p || (p = n.getArrayIndex(r, v)), b = n.getArrayIndex(r, v), n.removeItem(v));
      for (let m = 0, c = g.length, v; m < c; m++)
        v = g[m], v.cell.rowSpan = n.getOverlapRangeAtIndex(p, b, v.i, v.rs);
      this.controllersOff();
    } else
      this.plugins.table.setPositionControllerDiv.call(this, t || i._tdElement, !0);
  },
  _closeSplitMenu: null,
  openSplitMenu: function() {
    this.util.addClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "inline-table", this.plugins.table._closeSplitMenu = function() {
      this.util.removeClass(this.context.table.splitButton, "on"), this.context.table.splitMenu.style.display = "none", this.removeDocEvent("click", this.plugins.table._closeSplitMenu), this.plugins.table._closeSplitMenu = null;
    }.bind(this), this.addDocEvent("click", this.plugins.table._closeSplitMenu);
  },
  splitCells: function(e) {
    const t = this.util, i = e === "vertical", n = this.context.table, l = n._tdElement, o = n._trElements, s = n._trElement, a = n._logical_cellIndex, r = n._rowIndex, d = this.plugins.table.createCells.call(this, l.nodeName, 0, !0);
    if (i) {
      const u = l.colSpan;
      if (d.rowSpan = l.rowSpan, u > 1)
        d.colSpan = this._w.Math.floor(u / 2), l.colSpan = u - d.colSpan, s.insertBefore(d, l.nextElementSibling);
      else {
        let f = [], h = [];
        for (let g = 0, p = n._rowCnt, b, m; g < p; g++) {
          b = o[g].cells, m = 0;
          for (let c = 0, v = b.length, _, y, w, x; c < v; c++) {
            if (_ = b[c], y = _.colSpan - 1, w = _.rowSpan - 1, x = c + m, h.length > 0)
              for (let S = 0, E; S < h.length; S++)
                E = h[S], !(E.row > g) && (x >= E.index ? (m += E.cs, x += E.cs, E.rs -= 1, E.row = g + 1, E.rs < 1 && (h.splice(S, 1), S--)) : c === v - 1 && (E.rs -= 1, E.row = g + 1, E.rs < 1 && (h.splice(S, 1), S--)));
            if (x <= a && w > 0 && f.push({
              index: x,
              cs: y + 1,
              rs: w,
              row: -1
            }), _ !== l && x <= a && x + y >= a + u - 1) {
              _.colSpan += 1;
              break;
            }
            if (x > a)
              break;
            m += y;
          }
          h = h.concat(f).sort(function(c, v) {
            return c.index - v.index;
          }), f = [];
        }
        s.insertBefore(d, l.nextElementSibling);
      }
    } else {
      const u = l.rowSpan;
      if (d.colSpan = l.colSpan, u > 1) {
        d.rowSpan = this._w.Math.floor(u / 2);
        const f = u - d.rowSpan, h = [], g = t.getArrayIndex(o, s) + f;
        for (let c = 0, v, _; c < g; c++) {
          v = o[c].cells, _ = 0;
          for (let y = 0, w = v.length, x, S, E; y < w && (E = y + _, !(E >= a)); y++)
            x = v[y], S = x.rowSpan - 1, S > 0 && S + c >= g && E < a && h.push({
              index: E,
              cs: x.colSpan
            }), _ += x.colSpan - 1;
        }
        const p = o[g], b = p.cells;
        let m = h.shift();
        for (let c = 0, v = b.length, _ = 0, y, w, x, S; c < v; c++) {
          if (x = c + _, y = b[c], w = y.colSpan - 1, S = x + w + 1, m && S >= m.index && (_ += m.cs, S += m.cs, m = h.shift()), S >= a || c === v - 1) {
            p.insertBefore(d, y.nextElementSibling);
            break;
          }
          _ += w;
        }
        l.rowSpan = f;
      } else {
        d.rowSpan = l.rowSpan;
        const f = t.createElement("TR");
        f.appendChild(d);
        for (let p = 0, b; p < r; p++) {
          if (b = o[p].cells, b.length === 0)
            return;
          for (let m = 0, c = b.length; m < c; m++)
            p + b[m].rowSpan - 1 >= r && (b[m].rowSpan += 1);
        }
        const h = n._physical_cellIndex, g = s.cells;
        for (let p = 0, b = g.length; p < b; p++)
          p !== h && (g[p].rowSpan += 1);
        s.parentNode.insertBefore(f, s.nextElementSibling);
      }
    }
    this.focusEdge(l), this.plugins.table.setPositionControllerDiv.call(this, l, !0);
  },
  mergeCells: function() {
    const e = this.plugins.table, t = this.context.table, i = this.util, n = e._ref, l = e._selectedCells, o = l[0];
    let s = null, a = null, r = n.ce - n.cs + 1, d = n.re - n.rs + 1, u = "", f = null;
    for (let h = 1, g = l.length, p, b; h < g; h++) {
      p = l[h], f !== p.parentNode && (f = p.parentNode), b = p.children;
      for (let m = 0, c = b.length; m < c; m++)
        i.isFormatElement(b[m]) && i.onlyZeroWidthSpace(b[m].textContent) && i.removeItem(b[m]);
      u += p.innerHTML, i.removeItem(p), f.cells.length === 0 && (s ? a = f : s = f, d -= 1);
    }
    if (s) {
      const h = t._trElements, g = i.getArrayIndex(h, s), p = i.getArrayIndex(h, a || s), b = [];
      for (let m = 0, c; m <= p; m++) {
        if (c = h[m].cells, c.length === 0) {
          b.push(h[m]);
          continue;
        }
        for (let v = 0, _ = c.length, y, w; v < _; v++)
          y = c[v], w = y.rowSpan - 1, w > 0 && m + w >= g && (y.rowSpan -= i.getOverlapRangeAtIndex(g, p, m, m + w));
      }
      for (let m = 0, c = b.length; m < c; m++)
        i.removeItem(b[m]);
    }
    o.innerHTML += u, o.colSpan = r, o.rowSpan = d, this.controllersOff(), e.setActiveButton.call(this, !0, !1), e.call_controller_tableEdit.call(this, o), i.addClass(o, "se-table-selected-cell"), this.focusEdge(o);
  },
  toggleHeader: function() {
    const e = this.util, t = this.context.table.headerButton, i = e.hasClass(t, "active"), n = this.context.table._element;
    if (i)
      e.removeItem(n.querySelector("thead"));
    else {
      const l = e.createElement("THEAD");
      l.innerHTML = "<tr>" + this.plugins.table.createCells.call(this, "th", this.context.table._logical_cellCnt, !1) + "</tr>", n.insertBefore(l, n.firstElementChild);
    }
    e.toggleClass(t, "active"), /TH/i.test(this.context.table._tdElement.nodeName) ? this.controllersOff() : this.plugins.table.setPositionControllerDiv.call(this, this.context.table._tdElement, !1);
  },
  setTableStyle: function(e) {
    const t = this.context.table, i = t._element;
    let n, l, o, s;
    e.indexOf("width") > -1 && (n = t.resizeButton.firstElementChild, l = t.resizeText, t._maxWidth ? (o = t.icons.reduction, s = t.minText, t.columnFixedButton.style.display = "block", this.util.removeClass(i, "se-table-size-auto"), this.util.addClass(i, "se-table-size-100")) : (o = t.icons.expansion, s = t.maxText, t.columnFixedButton.style.display = "none", this.util.removeClass(i, "se-table-size-100"), this.util.addClass(i, "se-table-size-auto")), this.util.changeElement(n, o), this.util.changeTxt(l, s)), e.indexOf("column") > -1 && (t._fixedColumn ? (this.util.removeClass(i, "se-table-layout-auto"), this.util.addClass(i, "se-table-layout-fixed"), this.util.addClass(t.columnFixedButton, "active")) : (this.util.removeClass(i, "se-table-layout-fixed"), this.util.addClass(i, "se-table-layout-auto"), this.util.removeClass(t.columnFixedButton, "active")));
  },
  setActiveButton: function(e, t) {
    const i = this.context.table;
    /^TH$/i.test(e.nodeName) ? (i.insertRowAboveButton.setAttribute("disabled", !0), i.insertRowBelowButton.setAttribute("disabled", !0)) : (i.insertRowAboveButton.removeAttribute("disabled"), i.insertRowBelowButton.removeAttribute("disabled")), !t || e === t ? (i.splitButton.removeAttribute("disabled"), i.mergeButton.setAttribute("disabled", !0)) : (i.splitButton.setAttribute("disabled", !0), i.mergeButton.removeAttribute("disabled"));
  },
  _bindOnSelect: null,
  _bindOffSelect: null,
  _bindOffShift: null,
  _selectedCells: null,
  _shift: !1,
  _fixedCell: null,
  _fixedCellName: null,
  _selectedCell: null,
  _selectedTable: null,
  _ref: null,
  _toggleEditor: function(e) {
    this.context.element.wysiwyg.setAttribute("contenteditable", e), e ? this.util.removeClass(this.context.element.wysiwyg, "se-disabled") : this.util.addClass(this.context.element.wysiwyg, "se-disabled");
  },
  _offCellMultiSelect: function(e) {
    e.stopPropagation();
    const t = this.plugins.table;
    t._shift ? t._initBind && (this._wd.removeEventListener("touchmove", t._initBind), t._initBind = null) : (t._removeEvents.call(this), t._toggleEditor.call(this, !0)), !(!t._fixedCell || !t._selectedTable) && (t.setActiveButton.call(this, t._fixedCell, t._selectedCell), t.call_controller_tableEdit.call(this, t._selectedCell || t._fixedCell), t._selectedCells = t._selectedTable.querySelectorAll(".se-table-selected-cell"), t._selectedCell && t._fixedCell && this.focusEdge(t._selectedCell), t._shift || (t._fixedCell = null, t._selectedCell = null, t._fixedCellName = null));
  },
  _onCellMultiSelect: function(e) {
    this._antiBlur = !0;
    const t = this.plugins.table, i = this.util.getParentElement(e.target, this.util.isCell);
    if (t._shift)
      i === t._fixedCell ? t._toggleEditor.call(this, !0) : t._toggleEditor.call(this, !1);
    else if (!t._ref) {
      if (i === t._fixedCell)
        return;
      t._toggleEditor.call(this, !1);
    }
    !i || i === t._selectedCell || t._fixedCellName !== i.nodeName || t._selectedTable !== this.util.getParentElement(i, "TABLE") || (t._selectedCell = i, t._setMultiCells.call(this, t._fixedCell, i));
  },
  _setMultiCells: function(e, t) {
    const i = this.plugins.table, n = i._selectedTable.rows, l = this.util, o = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let u = 0, f = o.length; u < f; u++)
      l.removeClass(o[u], "se-table-selected-cell");
    if (e === t && (l.addClass(e, "se-table-selected-cell"), !i._shift))
      return;
    let s = !0, a = [], r = [];
    const d = i._ref = { _i: 0, cs: null, ce: null, rs: null, re: null };
    for (let u = 0, f = n.length, h, g; u < f; u++) {
      h = n[u].cells, g = 0;
      for (let p = 0, b = h.length, m, c, v, _; p < b; p++) {
        if (m = h[p], v = m.colSpan - 1, _ = m.rowSpan - 1, c = p + g, a.length > 0)
          for (let y = 0, w; y < a.length; y++)
            w = a[y], !(w.row > u) && (c >= w.index ? (g += w.cs, c += w.cs, w.rs -= 1, w.row = u + 1, w.rs < 1 && (a.splice(y, 1), y--)) : p === b - 1 && (w.rs -= 1, w.row = u + 1, w.rs < 1 && (a.splice(y, 1), y--)));
        if (s) {
          if ((m === e || m === t) && (d.cs = d.cs !== null && d.cs < c ? d.cs : c, d.ce = d.ce !== null && d.ce > c + v ? d.ce : c + v, d.rs = d.rs !== null && d.rs < u ? d.rs : u, d.re = d.re !== null && d.re > u + _ ? d.re : u + _, d._i += 1), d._i === 2) {
            s = !1, a = [], r = [], u = -1;
            break;
          }
        } else if (l.getOverlapRangeAtIndex(d.cs, d.ce, c, c + v) && l.getOverlapRangeAtIndex(d.rs, d.re, u, u + _)) {
          const y = d.cs < c ? d.cs : c, w = d.ce > c + v ? d.ce : c + v, x = d.rs < u ? d.rs : u, S = d.re > u + _ ? d.re : u + _;
          if (d.cs !== y || d.ce !== w || d.rs !== x || d.re !== S) {
            d.cs = y, d.ce = w, d.rs = x, d.re = S, u = -1, a = [], r = [];
            break;
          }
          l.addClass(m, "se-table-selected-cell");
        }
        _ > 0 && r.push({
          index: c,
          cs: v + 1,
          rs: _,
          row: -1
        }), g += m.colSpan - 1;
      }
      a = a.concat(r).sort(function(p, b) {
        return p.index - b.index;
      }), r = [];
    }
  },
  _removeEvents: function() {
    const e = this.plugins.table;
    e._initBind && (this._wd.removeEventListener("touchmove", e._initBind), e._initBind = null), e._bindOnSelect && (this._wd.removeEventListener("mousedown", e._bindOnSelect), this._wd.removeEventListener("mousemove", e._bindOnSelect), e._bindOnSelect = null), e._bindOffSelect && (this._wd.removeEventListener("mouseup", e._bindOffSelect), e._bindOffSelect = null), e._bindOffShift && (this._wd.removeEventListener("keyup", e._bindOffShift), e._bindOffShift = null);
  },
  _initBind: null,
  onTableCellMultiSelect: function(e, t) {
    const i = this.plugins.table;
    i._removeEvents.call(this), this.controllersOff(), i._shift = t, i._fixedCell = e, i._fixedCellName = e.nodeName, i._selectedTable = this.util.getParentElement(e, "TABLE");
    const n = i._selectedTable.querySelectorAll(".se-table-selected-cell");
    for (let l = 0, o = n.length; l < o; l++)
      this.util.removeClass(n[l], "se-table-selected-cell");
    this.util.addClass(e, "se-table-selected-cell"), i._bindOnSelect = i._onCellMultiSelect.bind(this), i._bindOffSelect = i._offCellMultiSelect.bind(this), t ? (i._bindOffShift = function() {
      this.controllersOn(this.context.table.resizeDiv, this.context.table.tableController, this.plugins.table.init.bind(this), e, "table"), i._ref || this.controllersOff();
    }.bind(this), this._wd.addEventListener("keyup", i._bindOffShift, !1), this._wd.addEventListener("mousedown", i._bindOnSelect, !1)) : this._wd.addEventListener("mousemove", i._bindOnSelect, !1), this._wd.addEventListener("mouseup", i._bindOffSelect, !1), i._initBind = i.init.bind(this), this._wd.addEventListener("touchmove", i._initBind, !1);
  },
  onClick_tableController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") ? e.target : e.target.parentNode;
    if (t.getAttribute("disabled"))
      return;
    const i = t.getAttribute("data-command"), n = t.getAttribute("data-value"), l = t.getAttribute("data-option"), o = this.plugins.table;
    if (typeof o._closeSplitMenu == "function" && (o._closeSplitMenu(), i === "onsplit") || !i)
      return;
    e.preventDefault();
    const s = this.context.table;
    switch (i) {
      case "insert":
      case "delete":
        o.editTable.call(this, n, l);
        break;
      case "header":
        o.toggleHeader.call(this);
        break;
      case "onsplit":
        o.openSplitMenu.call(this);
        break;
      case "split":
        o.splitCells.call(this, n);
        break;
      case "merge":
        o.mergeCells.call(this);
        break;
      case "resize":
        s._maxWidth = !s._maxWidth, o.setTableStyle.call(this, "width"), o.setPositionControllerTop.call(this, s._element), o.setPositionControllerDiv.call(this, s._tdElement, o._shift);
        break;
      case "layout":
        s._fixedColumn = !s._fixedColumn, o.setTableStyle.call(this, "column"), o.setPositionControllerTop.call(this, s._element), o.setPositionControllerDiv.call(this, s._tdElement, o._shift);
        break;
      case "remove":
        const a = s._element.parentNode;
        this.util.removeItem(s._element), this.controllersOff(), a !== this.context.element.wysiwyg && this.util.removeItemAllParents(a, function(r) {
          return r.childNodes.length === 0;
        }, null), this.focus();
    }
    this.history.push(!1);
  }
}, Mn = {
  name: "formatBlock",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.formatBlock = {
      targetText: t.querySelector(".txt"),
      targetTooltip: t.parentNode.querySelector(".se-tooltip-text"),
      _formatList: null,
      currentFormat: ""
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.formatBlock._formatList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang.toolbar, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer se-list-format";
    const l = ["p", "div", "blockquote", "pre", "h1", "h2", "h3", "h4", "h5", "h6"], o = !t.formats || t.formats.length === 0 ? l : t.formats;
    let s = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let a = 0, r = o.length, d, u, f, h, g, p, b; a < r; a++)
      d = o[a], typeof d == "string" && l.indexOf(d) > -1 ? (u = d.toLowerCase(), f = u === "blockquote" ? "range" : u === "pre" ? "free" : "replace", g = /^h/.test(u) ? u.match(/\d+/)[0] : "", h = i["tag_" + (g ? "h" : u)] + g, b = "", p = "") : (u = d.tag.toLowerCase(), f = d.command, h = d.name || u, b = d.class, p = b ? ' class="' + b + '"' : ""), s += '<li><button type="button" class="se-btn-list" data-command="' + f + '" data-value="' + u + '" data-class="' + b + '" title="' + h + '" aria-label="' + h + '"><' + u + p + ">" + h + "</" + u + "></button></li>";
    return s += "</ul></div>", n.innerHTML = s, n;
  },
  active: function(e) {
    let t = this.lang.toolbar.formats;
    const i = this.context.formatBlock.targetText;
    if (!e)
      this.util.changeTxt(i, t);
    else if (this.util.isFormatElement(e)) {
      const l = this.context.formatBlock._formatList, o = e.nodeName.toLowerCase(), s = (e.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim();
      for (let a = 0, r = l.length, d; a < r; a++)
        if (d = l[a], o === d.getAttribute("data-value") && s === d.getAttribute("data-class")) {
          t = d.title;
          break;
        }
      return this.util.changeTxt(i, t), i.setAttribute("data-value", o), i.setAttribute("data-class", s), !0;
    }
    return !1;
  },
  on: function() {
    const e = this.context.formatBlock, t = e._formatList, i = e.targetText, n = (i.getAttribute("data-value") || "") + (i.getAttribute("data-class") || "");
    if (n !== e.currentFormat) {
      for (let l = 0, o = t.length, s; l < o; l++)
        s = t[l], n === s.getAttribute("data-value") + s.getAttribute("data-class") ? this.util.addClass(s, "active") : this.util.removeClass(s, "active");
      e.currentFormat = n;
    }
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, n = null, l = null, o = "";
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), n = t.getAttribute("data-value"), o = t.getAttribute("data-class"), i) {
        l = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!!i) {
      if (i === "range") {
        const s = l.cloneNode(!1);
        this.applyRangeFormatElement(s);
      } else {
        let s = this.getRange(), a = this.getSelectedElementsAndComponents(!1);
        if (a.length === 0 && (s = this.getRange_addLine(s, null), a = this.getSelectedElementsAndComponents(!1), a.length === 0))
          return;
        const r = s.startOffset, d = s.endOffset, u = this.util;
        let f = a[0], h = a[a.length - 1];
        const g = u.getNodePath(s.startContainer, f, null, null), p = u.getNodePath(s.endContainer, h, null, null), b = this.detachList(a, !1);
        b.sc && (f = b.sc), b.ec && (h = b.ec), this.setRange(u.getNodeFromPath(g, f), r, u.getNodeFromPath(p, h), d);
        const m = this.getSelectedElementsAndComponents(!1);
        if (i === "free") {
          const c = m.length - 1;
          let v = m[c].parentNode, _ = l.cloneNode(!1);
          const y = _;
          for (let w = c, x, S, E, B, A, C, I = !0; w >= 0; w--)
            if (x = m[w], x !== (m[w + 1] ? m[w + 1].parentNode : null)) {
              if (C = u.isComponent(x), S = C ? "" : x.innerHTML.replace(/(?!>)\s+(?=<)|\n/g, " "), E = u.getParentElement(x, function(T) {
                return T.parentNode === v;
              }), (v !== x.parentNode || C) && (u.isFormatElement(v) ? (v.parentNode.insertBefore(_, v.nextSibling), v = v.parentNode) : (v.insertBefore(_, E ? E.nextSibling : null), v = x.parentNode), B = _.nextSibling, B && _.nodeName === B.nodeName && u.isSameAttributes(_, B) && (_.innerHTML += "<BR>" + B.innerHTML, u.removeItem(B)), _ = l.cloneNode(!1), I = !0), A = _.innerHTML, _.innerHTML = (I || !S || !A || /<br>$/i.test(S) ? S : S + "<BR>") + A, w === 0) {
                v.insertBefore(_, x), B = x.nextSibling, B && _.nodeName === B.nodeName && u.isSameAttributes(_, B) && (_.innerHTML += "<BR>" + B.innerHTML, u.removeItem(B));
                const T = _.previousSibling;
                T && _.nodeName === T.nodeName && u.isSameAttributes(_, T) && (T.innerHTML += "<BR>" + _.innerHTML, u.removeItem(_));
              }
              C || u.removeItem(x), S && (I = !1);
            }
          this.setRange(y, 0, y, 0);
        } else {
          for (let c = 0, v = m.length, _, y; c < v; c++)
            _ = m[c], (_.nodeName.toLowerCase() !== n.toLowerCase() || (_.className.match(/(\s|^)__se__format__[^\s]+/) || [""])[0].trim() !== o) && !u.isComponent(_) && (y = l.cloneNode(!1), u.copyFormatAttributes(y, _), y.innerHTML = _.innerHTML, _.parentNode.replaceChild(y, _)), c === 0 && (f = y || _), c === v - 1 && (h = y || _), y = null;
          this.setRange(u.getNodeFromPath(g, f), r, u.getNodeFromPath(p, h), d);
        }
        this.history.push(!1);
      }
      this.submenuOff();
    }
  }
}, Dn = {
  name: "lineHeight",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.lineHeight = {
      _sizeList: null,
      currentSize: -1
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.lineHeight._sizeList = l.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-submenu se-list-layer";
    const l = t.lineHeights ? t.lineHeights : [
      { text: "1", value: 1 },
      { text: "1.15", value: 1.15 },
      { text: "1.5", value: 1.5 },
      { text: "2", value: 2 }
    ];
    let o = '<div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="default_value se-btn-list" title="' + i.toolbar.default + '" aria-label="' + i.toolbar.default + '">(' + i.toolbar.default + ")</button></li>";
    for (let s = 0, a = l.length, r; s < a; s++)
      r = l[s], o += '<li><button type="button" class="se-btn-list" data-value="' + r.value + '" title="' + r.text + '" aria-label="' + r.text + '">' + r.text + "</button></li>";
    return o += "</ul></div>", n.innerHTML = o, n;
  },
  on: function() {
    const e = this.context.lineHeight, t = e._sizeList, i = this.util.getFormatElement(this.getSelectionNode()), n = i ? i.style.lineHeight + "" : "";
    if (n !== e.currentSize) {
      for (let l = 0, o = t.length; l < o; l++)
        n === t[l].getAttribute("data-value") ? this.util.addClass(t[l], "active") : this.util.removeClass(t[l], "active");
      e.currentSize = n;
    }
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation();
    const t = e.target.getAttribute("data-value") || "", i = this.getSelectedElements();
    for (let n = 0, l = i.length; n < l; n++)
      i[n].style.lineHeight = t;
    this.submenuOff(), this.history.push(!1);
  }
}, On = {
  name: "template",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.template = {
      selectedIndex: -1
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickup.bind(e)), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options.templates;
    if (!t || t.length === 0)
      throw Error('[SUNEDITOR.plugins.template.fail] To use the "template" plugin, please define the "templates" option.');
    const i = e.util.createElement("DIV");
    i.className = "se-list-layer";
    let n = '<div class="se-submenu se-list-inner"><ul class="se-list-basic">';
    for (let l = 0, o = t.length, s; l < o; l++)
      s = t[l], n += '<li><button type="button" class="se-btn-list" data-value="' + l + '" title="' + s.name + '" aria-label="' + s.name + '">' + s.name + "</button></li>";
    return n += "</ul></div>", i.innerHTML = n, i;
  },
  pickup: function(e) {
    if (!/^BUTTON$/i.test(e.target.tagName))
      return !1;
    e.preventDefault(), e.stopPropagation(), this.context.template.selectedIndex = e.target.getAttribute("data-value") * 1;
    const t = this.options.templates[this.context.template.selectedIndex];
    if (t.html)
      this.setContents(t.html);
    else
      throw this.submenuOff(), Error('[SUNEDITOR.template.fail] cause : "templates[i].html not found"');
    this.submenuOff();
  }
}, Un = {
  name: "paragraphStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.paragraphStyle = {
      _classList: null
    };
    let n = this.setSubmenu(e);
    n.querySelector("ul").addEventListener("click", this.pickUp.bind(e)), i.paragraphStyle._classList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const n = e.lang.menu, l = {
      spaced: {
        name: n.spaced,
        class: "__se__p-spaced",
        _class: ""
      },
      bordered: {
        name: n.bordered,
        class: "__se__p-bordered",
        _class: ""
      },
      neon: {
        name: n.neon,
        class: "__se__p-neon",
        _class: ""
      }
    }, o = !t.paragraphStyles || t.paragraphStyles.length === 0 ? ["spaced", "bordered", "neon"] : t.paragraphStyles;
    let s = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let a = 0, r = o.length, d, u, f, h; a < r; a++) {
      if (d = o[a], typeof d == "string") {
        const g = l[d.toLowerCase()];
        if (!g)
          continue;
        d = g;
      }
      u = d.name, f = d.class ? ' class="' + d.class + '"' : "", h = d._class, s += '<li><button type="button" class="se-btn-list' + (h ? " " + h : "") + '" data-value="' + d.class + '" title="' + u + '" aria-label="' + u + '"><div' + f + ">" + u + "</div></button></li>";
    }
    return s += "</ul></div>", i.innerHTML = s, i;
  },
  on: function() {
    const t = this.context.paragraphStyle._classList, i = this.util.getFormatElement(this.getSelectionNode());
    for (let n = 0, l = t.length; n < l; n++)
      this.util.hasClass(i, t[n].getAttribute("data-value")) ? this.util.addClass(t[n], "active") : this.util.removeClass(t[n], "active");
  },
  pickUp: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null;
    for (; !/^UL$/i.test(t.tagName) && (i = t.getAttribute("data-value"), !i); )
      t = t.parentNode;
    if (!i)
      return;
    let n = this.getSelectedElements();
    if (n.length === 0 && (this.getRange_addLine(this.getRange(), null), n = this.getSelectedElements(), n.length === 0))
      return;
    const l = this.util.hasClass(t, "active") ? this.util.removeClass.bind(this.util) : this.util.addClass.bind(this.util);
    for (let o = 0, s = n.length; o < s; o++)
      l(n[o], i);
    this.submenuOff(), this.history.push(!1);
  }
}, Vn = {
  name: "textStyle",
  display: "submenu",
  add: function(e, t) {
    const i = e.context;
    i.textStyle = {
      _styleList: null
    };
    let n = this.setSubmenu(e), l = n.querySelector("ul");
    l.addEventListener("click", this.pickup.bind(e)), i.textStyle._styleList = n.querySelectorAll("li button"), e.initMenuTarget(this.name, t, n), n = null, l = null;
  },
  setSubmenu: function(e) {
    const t = e.options, i = e.util.createElement("DIV");
    i.className = "se-submenu se-list-layer se-list-format";
    const n = {
      code: {
        name: e.lang.menu.code,
        class: "__se__t-code",
        tag: "code"
      },
      translucent: {
        name: e.lang.menu.translucent,
        style: "opacity: 0.5;",
        tag: "span"
      },
      shadow: {
        name: e.lang.menu.shadow,
        class: "__se__t-shadow",
        tag: "span"
      }
    }, l = t.textStyles ? t.textStyles : e._w.Object.keys(n);
    let o = '<div class="se-list-inner"><ul class="se-list-basic">';
    for (let s = 0, a = l.length, r, d, u, f, h, g, p; s < a; s++) {
      if (r = l[s], f = "", g = "", h = [], typeof r == "string") {
        const b = n[r.toLowerCase()];
        if (!b)
          continue;
        r = b;
      }
      u = r.name, d = r.tag || "span", p = r._class, r.style && (f += ' style="' + r.style + '"', g += r.style.replace(/:[^;]+(;|$)\s*/g, ","), h.push("style")), r.class && (f += ' class="' + r.class + '"', g += "." + r.class.trim().replace(/\s+/g, ",."), h.push("class")), g = g.replace(/,$/, ""), o += '<li><button type="button" class="se-btn-list' + (p ? " " + p : "") + '" data-command="' + d + '" data-value="' + g + '" title="' + u + '" aria-label="' + u + '"><' + d + f + ">" + u + "</" + d + "></button></li>";
    }
    return o += "</ul></div>", i.innerHTML = o, i;
  },
  on: function() {
    const e = this.util, i = this.context.textStyle._styleList, n = this.getSelectionNode();
    for (let l = 0, o = i.length, s, a, r; l < o; l++) {
      s = i[l], a = s.getAttribute("data-value").split(",");
      for (let d = 0, u, f; d < a.length; d++) {
        for (u = n, r = !1; u && !e.isFormatElement(u) && !e.isComponent(u); ) {
          if (u.nodeName.toLowerCase() === s.getAttribute("data-command").toLowerCase() && (f = a[d], /^\./.test(f) ? e.hasClass(u, f.replace(/^\./, "")) : !!u.style[f])) {
            r = !0;
            break;
          }
          u = u.parentNode;
        }
        if (!r)
          break;
      }
      r ? e.addClass(s, "active") : e.removeClass(s, "active");
    }
  },
  pickup: function(e) {
    e.preventDefault(), e.stopPropagation();
    let t = e.target, i = null, n = null;
    for (; !i && !/UL/i.test(t.tagName); ) {
      if (i = t.getAttribute("data-command"), i) {
        n = t.firstChild;
        break;
      }
      t = t.parentNode;
    }
    if (!i)
      return;
    const l = n.style.cssText.replace(/:.+(;|$)/g, ",").split(",");
    l.pop();
    const o = n.classList;
    for (let r = 0, d = o.length; r < d; r++)
      l.push("." + o[r]);
    const s = this.util.hasClass(t, "active") ? null : n.cloneNode(!1), a = s ? null : [n.nodeName];
    this.nodeChange(s, l, a, !0), this.submenuOff();
  }
};
var M = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, Re = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      name: "dialog",
      add: function(l) {
        const o = l.context;
        o.dialog = {
          kind: "",
          updateModal: !1,
          _closeSignal: !1
        };
        let s = l.util.createElement("DIV");
        s.className = "se-dialog sun-editor-common";
        let a = l.util.createElement("DIV");
        a.className = "se-dialog-back", a.style.display = "none";
        let r = l.util.createElement("DIV");
        r.className = "se-dialog-inner", r.style.display = "none", s.appendChild(a), s.appendChild(r), o.dialog.modalArea = s, o.dialog.back = a, o.dialog.modal = r, o.dialog.modal.addEventListener("mousedown", this._onMouseDown_dialog.bind(l)), o.dialog.modal.addEventListener("click", this._onClick_dialog.bind(l)), o.element.relative.appendChild(s), s = null, a = null, r = null;
      },
      _onMouseDown_dialog: function(l) {
        /se-dialog-inner/.test(l.target.className) ? this.context.dialog._closeSignal = !0 : this.context.dialog._closeSignal = !1;
      },
      _onClick_dialog: function(l) {
        (/close/.test(l.target.getAttribute("data-command")) || this.context.dialog._closeSignal) && this.plugins.dialog.close.call(this);
      },
      open: function(l, o) {
        if (this.modalForm)
          return !1;
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null), this.plugins.dialog._bindClose = function(a) {
          !/27/.test(a.keyCode) || this.plugins.dialog.close.call(this);
        }.bind(this), this._d.addEventListener("keydown", this.plugins.dialog._bindClose), this.context.dialog.updateModal = o, this.options.popupDisplay === "full" ? this.context.dialog.modalArea.style.position = "fixed" : this.context.dialog.modalArea.style.position = "absolute", this.context.dialog.kind = l, this.modalForm = this.context[l].modal;
        const s = this.context[l].focusElement;
        typeof this.plugins[l].on == "function" && this.plugins[l].on.call(this, o), this.context.dialog.modalArea.style.display = "block", this.context.dialog.back.style.display = "block", this.context.dialog.modal.style.display = "block", this.modalForm.style.display = "block", s && s.focus();
      },
      _bindClose: null,
      close: function() {
        this.plugins.dialog._bindClose && (this._d.removeEventListener("keydown", this.plugins.dialog._bindClose), this.plugins.dialog._bindClose = null);
        const l = this.context.dialog.kind;
        this.modalForm.style.display = "none", this.context.dialog.back.style.display = "none", this.context.dialog.modalArea.style.display = "none", this.context.dialog.updateModal = !1, typeof this.plugins[l].init == "function" && this.plugins[l].init.call(this), this.context.dialog.kind = "", this.modalForm = null, this.focus();
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "dialog", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(Re);
const Q = Re.exports, Fn = {
  name: "selectMenu",
  add: function(e) {
    e.context.selectMenu = {
      caller: {},
      callerContext: null
    };
  },
  setForm: function() {
    return '<div class="se-select-list"></div>';
  },
  createList: function(e, t, i) {
    e.form.innerHTML = "<ul>" + i + "</ul>", e.items = t, e.menus = e.form.querySelectorAll("li");
  },
  initEvent: function(e, t) {
    const i = t.querySelector(".se-select-list"), n = this.context.selectMenu.caller[e] = {
      form: i,
      items: [],
      menus: [],
      index: -1,
      item: null,
      clickMethod: null,
      callerName: e
    };
    i.addEventListener("mousedown", this.plugins.selectMenu.onMousedown_list), i.addEventListener("mousemove", this.plugins.selectMenu.onMouseMove_list.bind(this, n)), i.addEventListener("click", this.plugins.selectMenu.onClick_list.bind(this, n));
  },
  onMousedown_list: function(e) {
    e.preventDefault(), e.stopPropagation();
  },
  onMouseMove_list: function(e, t) {
    this.util.addClass(e.form, "__se_select-menu-mouse-move");
    const i = t.target.getAttribute("data-index");
    !i || (e.index = i * 1);
  },
  onClick_list: function(e, t) {
    const i = t.target.getAttribute("data-index");
    !i || e.clickMethod.call(this, e.items[i]);
  },
  moveItem: function(e, t) {
    this.util.removeClass(e.form, "__se_select-menu-mouse-move"), t = e.index + t;
    const i = e.menus, n = i.length, l = e.index = t >= n ? 0 : t < 0 ? n - 1 : t;
    for (let o = 0; o < n; o++)
      o === l ? this.util.addClass(i[o], "active") : this.util.removeClass(i[o], "active");
    e.item = e.items[l];
  },
  getItem: function(e, t) {
    return t = !t || t < 0 ? e.index : t, e.items[t];
  },
  on: function(e, t) {
    const i = this.context.selectMenu.caller[e];
    this.context.selectMenu.callerContext = i, i.clickMethod = t, i.callerName = e;
  },
  open: function(e, t) {
    const i = e.form;
    i.style.visibility = "hidden", i.style.display = "block", t(i), i.style.visibility = "";
  },
  close: function(e) {
    e.form.style.display = "none", e.items = [], e.menus = [], e.index = -1, e.item = null;
  },
  init: function(e) {
    !e || (e.items = [], e.menus = [], e.index = -1, e.item = null, e.callerName = "", this.context.selectMenu.callerContext = null);
  }
}, Te = {
  name: "anchor",
  add: function(e) {
    e.addModule([Fn]), e.context.anchor = {
      caller: {},
      forms: this.setDialogForm(e),
      host: (e._w.location.origin + e._w.location.pathname).replace(/\/$/, ""),
      callerContext: null
    };
  },
  setDialogForm: function(e) {
    const t = e.lang, i = e.options.linkRel, n = (e.options.linkRelDefault.default || "").split(" "), l = e.icons, o = e.util.createElement("DIV");
    let s = '<div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url" type="text" placeholder="' + (e.options.protocol || "") + '" /><button type="button" class="se-btn se-dialog-files-edge-button _se_bookmark_button" title="' + t.dialogBox.linkBox.bookmark + '" aria-label="' + t.dialogBox.linkBox.bookmark + '">' + l.bookmark + "</button>" + e.plugins.selectMenu.setForm() + '</div><div class="se-anchor-preview-form"><span class="se-svg se-anchor-preview-icon _se_anchor_bookmark_icon">' + l.bookmark + '</span><span class="se-svg se-anchor-preview-icon _se_anchor_download_icon">' + l.download + '</span><pre class="se-link-preview"></pre></div></div><div class="se-dialog-form"><label>' + t.dialogBox.linkBox.text + '</label><input class="se-input-form _se_anchor_text" type="text" /></div><div class="se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_check" />&nbsp;' + t.dialogBox.linkBox.newWindowCheck + '</label><label><input type="checkbox" class="se-dialog-btn-check _se_anchor_download" />&nbsp;' + t.dialogBox.linkBox.downloadLinkCheck + "</label>";
    if (i.length > 0) {
      s += '<div class="se-anchor-rel"><button type="button" class="se-btn se-btn-select se-anchor-rel-btn">&lt;rel&gt;</button><div class="se-anchor-rel-wrapper"><pre class="se-link-preview se-anchor-rel-preview"></pre></div><div class="se-list-layer"><div class="se-list-inner"><ul class="se-list-basic se-list-checked">';
      for (let a = 0, r = i.length, d; a < r; a++)
        d = i[a], s += '<li><button type="button" class="se-btn-list' + (n.indexOf(d) > -1 ? " se-checked" : "") + '" data-command="' + d + '" title="' + d + '" aria-label="' + d + '"><span class="se-svg">' + l.checked + "</span>" + d + "</button></li>";
      s += "</ul></div></div></div>";
    }
    return s += "</div></div>", o.innerHTML = s, o;
  },
  initEvent: function(e, t) {
    const i = this.plugins.anchor, n = this.context.anchor.caller[e] = {
      modal: t,
      urlInput: null,
      linkDefaultRel: this.options.linkRelDefault,
      defaultRel: this.options.linkRelDefault.default || "",
      currentRel: [],
      linkAnchor: null,
      linkValue: "",
      _change: !1,
      callerName: e
    };
    typeof n.linkDefaultRel.default == "string" && (n.linkDefaultRel.default = n.linkDefaultRel.default.trim()), typeof n.linkDefaultRel.check_new_window == "string" && (n.linkDefaultRel.check_new_window = n.linkDefaultRel.check_new_window.trim()), typeof n.linkDefaultRel.check_bookmark == "string" && (n.linkDefaultRel.check_bookmark = n.linkDefaultRel.check_bookmark.trim()), n.urlInput = t.querySelector(".se-input-url"), n.anchorText = t.querySelector("._se_anchor_text"), n.newWindowCheck = t.querySelector("._se_anchor_check"), n.downloadCheck = t.querySelector("._se_anchor_download"), n.download = t.querySelector("._se_anchor_download_icon"), n.preview = t.querySelector(".se-link-preview"), n.bookmark = t.querySelector("._se_anchor_bookmark_icon"), n.bookmarkButton = t.querySelector("._se_bookmark_button"), this.plugins.selectMenu.initEvent.call(this, e, t);
    const l = this.context.selectMenu.caller[e];
    this.options.linkRel.length > 0 && (n.relButton = t.querySelector(".se-anchor-rel-btn"), n.relList = t.querySelector(".se-list-layer"), n.relPreview = t.querySelector(".se-anchor-rel-preview"), n.relButton.addEventListener("click", i.onClick_relButton.bind(this, n)), n.relList.addEventListener("click", i.onClick_relList.bind(this, n))), n.newWindowCheck.addEventListener("change", i.onChange_newWindowCheck.bind(this, n)), n.downloadCheck.addEventListener("change", i.onChange_downloadCheck.bind(this, n)), n.anchorText.addEventListener("input", i.onChangeAnchorText.bind(this, n)), n.urlInput.addEventListener("input", i.onChangeUrlInput.bind(this, n)), n.urlInput.addEventListener("keydown", i.onKeyDownUrlInput.bind(this, l)), n.urlInput.addEventListener("focus", i.onFocusUrlInput.bind(this, n, l)), n.urlInput.addEventListener("blur", i.onBlurUrlInput.bind(this, l)), n.bookmarkButton.addEventListener("click", i.onClick_bookmarkButton.bind(this, n));
  },
  on: function(e, t) {
    const i = this.plugins.anchor;
    if (!t)
      i.init.call(this, e), e.anchorText.value = this.getSelection().toString().trim(), e.newWindowCheck.checked = this.options.linkTargetNewWindow;
    else if (e.linkAnchor) {
      this.context.dialog.updateModal = !0;
      const n = e.linkAnchor.getAttribute("href");
      e.linkValue = e.preview.textContent = e.urlInput.value = i.selfPathBookmark.call(this, n) ? n.substr(n.lastIndexOf("#")) : n, e.anchorText.value = e.linkAnchor.textContent || e.linkAnchor.getAttribute("alt"), e.newWindowCheck.checked = !!/_blank/i.test(e.linkAnchor.target), e.downloadCheck.checked = e.linkAnchor.download;
    }
    this.context.anchor.callerContext = e, i.setRel.call(this, e, t && e.linkAnchor ? e.linkAnchor.rel : e.defaultRel), i.setLinkPreview.call(this, e, e.linkValue), this.plugins.selectMenu.on.call(this, e.callerName, this.plugins.anchor.setHeaderBookmark);
  },
  selfPathBookmark: function(e) {
    const t = this._w.location.href.replace(/\/$/, "");
    return e.indexOf("#") === 0 || e.indexOf(t) === 0 && e.indexOf("#") === (t.indexOf("#") === -1 ? t.length : t.substr(0, t.indexOf("#")).length);
  },
  _closeRelMenu: null,
  toggleRelList: function(e, t) {
    if (!t)
      this.plugins.anchor._closeRelMenu && this.plugins.anchor._closeRelMenu();
    else {
      const i = e.relButton, n = e.relList;
      this.util.addClass(i, "active"), n.style.visibility = "hidden", n.style.display = "block", this.options.rtl ? n.style.left = i.offsetLeft - n.offsetWidth - 1 + "px" : n.style.left = i.offsetLeft + i.offsetWidth + 1 + "px", n.style.top = i.offsetTop + i.offsetHeight / 2 - n.offsetHeight / 2 + "px", n.style.visibility = "", this.plugins.anchor._closeRelMenu = function(l, o, s) {
        s && (l.relButton.contains(s.target) || l.relList.contains(s.target)) || (this.util.removeClass(o, "active"), l.relList.style.display = "none", this.modalForm.removeEventListener("click", this.plugins.anchor._closeRelMenu), this.plugins.anchor._closeRelMenu = null);
      }.bind(this, e, i), this.modalForm.addEventListener("click", this.plugins.anchor._closeRelMenu);
    }
  },
  onClick_relButton: function(e, t) {
    this.plugins.anchor.toggleRelList.call(this, e, !this.util.hasClass(t.target, "active"));
  },
  onClick_relList: function(e, t) {
    const i = t.target, n = i.getAttribute("data-command");
    if (!n)
      return;
    const l = e.currentRel, o = this.util.toggleClass(i, "se-checked"), s = l.indexOf(n);
    o ? s === -1 && l.push(n) : s > -1 && l.splice(s, 1), e.relPreview.title = e.relPreview.textContent = l.join(" ");
  },
  setRel: function(e, t) {
    const i = e.relList, n = e.currentRel = t ? t.split(" ") : [];
    if (!i)
      return;
    const l = i.querySelectorAll("button");
    for (let o = 0, s = l.length, a; o < s; o++)
      a = l[o].getAttribute("data-command"), n.indexOf(a) > -1 ? this.util.addClass(l[o], "se-checked") : this.util.removeClass(l[o], "se-checked");
    e.relPreview.title = e.relPreview.textContent = n.join(" ");
  },
  createHeaderList: function(e, t, i) {
    const n = this.util.getListChildren(this.context.element.wysiwyg, function(a) {
      return /h[1-6]/i.test(a.nodeName);
    });
    if (n.length === 0)
      return;
    const l = new this._w.RegExp("^" + i.replace(/^#/, ""), "i"), o = [];
    let s = "";
    for (let a = 0, r = n.length, d; a < r; a++)
      d = n[a], l.test(d.textContent) && (o.push(d), s += '<li class="se-select-item" data-index="' + a + '">' + d.textContent + "</li>");
    o.length === 0 ? this.plugins.selectMenu.close.call(this, t) : (this.plugins.selectMenu.createList(t, o, s), this.plugins.selectMenu.open.call(this, t, this.plugins.anchor._setMenuListPosition.bind(this, e)));
  },
  _setMenuListPosition: function(e, t) {
    t.style.top = e.urlInput.offsetHeight + 1 + "px";
  },
  onKeyDownUrlInput: function(e, t) {
    switch (t.keyCode) {
      case 38:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, -1);
        break;
      case 40:
        t.preventDefault(), t.stopPropagation(), this.plugins.selectMenu.moveItem.call(this, e, 1);
        break;
      case 13:
        e.index > -1 && (t.preventDefault(), t.stopPropagation(), this.plugins.anchor.setHeaderBookmark.call(this, this.plugins.selectMenu.getItem(e, null)));
        break;
    }
  },
  setHeaderBookmark: function(e) {
    const t = this.context.anchor.callerContext, i = e.id || "h_" + this._w.Math.random().toString().replace(/.+\./, "");
    e.id = i, t.urlInput.value = "#" + i, (!t.anchorText.value.trim() || !t._change) && (t.anchorText.value = e.textContent), this.plugins.anchor.setLinkPreview.call(this, t, t.urlInput.value), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext), this.context.anchor.callerContext.urlInput.focus();
  },
  onChangeAnchorText: function(e, t) {
    e._change = !!t.target.value.trim();
  },
  onChangeUrlInput: function(e, t) {
    const i = t.target.value.trim();
    this.plugins.anchor.setLinkPreview.call(this, e, i), this.plugins.anchor.selfPathBookmark.call(this, i) ? this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, i) : this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext);
  },
  onFocusUrlInput: function(e, t) {
    const i = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, i) && this.plugins.anchor.createHeaderList.call(this, e, t, i);
  },
  onBlurUrlInput: function(e) {
    this.plugins.selectMenu.close.call(this, e);
  },
  setLinkPreview: function(e, t) {
    const i = e.preview, n = this.options.linkProtocol, l = this.options.linkNoPrefix, o = /^(mailto\:|tel\:|sms\:|https*\:\/\/|#)/.test(t), s = n ? this._w.RegExp("^" + t.substr(0, n.length)).test(n) : !1;
    t = e.linkValue = i.textContent = t ? l ? t : n && !o && !s ? n + t : o ? t : /^www\./.test(t) ? "http://" + t : this.context.anchor.host + (/^\//.test(t) ? "" : "/") + t : "", this.plugins.anchor.selfPathBookmark.call(this, t) ? (e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active")) : (e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active")), !this.plugins.anchor.selfPathBookmark.call(this, t) && e.downloadCheck.checked ? e.download.style.display = "block" : e.download.style.display = "none";
  },
  setCtx: function(e, t) {
    !e || (t.linkAnchor = e, t.linkValue = e.href, t.currentRel = e.rel.split(" "));
  },
  updateAnchor: function(e, t, i, n, l) {
    !this.plugins.anchor.selfPathBookmark.call(this, t) && n.downloadCheck.checked ? e.setAttribute("download", i || t) : e.removeAttribute("download"), n.newWindowCheck.checked ? e.target = "_blank" : e.removeAttribute("target");
    const o = n.currentRel.join(" ");
    o ? e.rel = o : e.removeAttribute("rel"), e.href = t, e.setAttribute("alt", i), l ? e.children.length === 0 && (e.textContent = "") : e.textContent = i;
  },
  createAnchor: function(e, t) {
    if (e.linkValue.length === 0)
      return null;
    const i = e.linkValue, n = e.anchorText, l = n.value.length === 0 ? i : n.value, o = e.linkAnchor || this.util.createElement("A");
    return this.plugins.anchor.updateAnchor.call(this, o, i, l, e, t), e.linkValue = e.preview.textContent = e.urlInput.value = e.anchorText.value = "", o;
  },
  onClick_bookmarkButton: function(e) {
    let t = e.urlInput.value;
    this.plugins.anchor.selfPathBookmark.call(this, t) ? (t = t.substr(1), e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), this.plugins.selectMenu.close.call(this, this.context.selectMenu.callerContext)) : (t = "#" + t, e.bookmark.style.display = "block", this.util.addClass(e.bookmarkButton, "active"), e.downloadCheck.checked = !1, e.download.style.display = "none", this.plugins.anchor.createHeaderList.call(this, e, this.context.selectMenu.callerContext, t)), e.urlInput.value = t, this.plugins.anchor.setLinkPreview.call(this, e, t), e.urlInput.focus();
  },
  onChange_newWindowCheck: function(e, t) {
    typeof e.linkDefaultRel.check_new_window == "string" && (t.target.checked ? this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_new_window)) : this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_new_window)));
  },
  onChange_downloadCheck: function(e, t) {
    t.target.checked ? (e.download.style.display = "block", e.bookmark.style.display = "none", this.util.removeClass(e.bookmarkButton, "active"), e.linkValue = e.preview.textContent = e.urlInput.value = e.urlInput.value.replace(/^\#+/, ""), typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relMerge.call(this, e, e.linkDefaultRel.check_bookmark))) : (e.download.style.display = "none", typeof e.linkDefaultRel.check_bookmark == "string" && this.plugins.anchor.setRel.call(this, e, this.plugins.anchor._relDelete.call(this, e, e.linkDefaultRel.check_bookmark)));
  },
  _relMerge: function(e, t) {
    const i = e.currentRel;
    if (!t)
      return i.join(" ");
    if (/^only\:/.test(t))
      return t = t.replace(/^only\:/, "").trim(), e.currentRel = t.split(" "), t;
    const n = t.split(" ");
    for (let l = 0, o = n.length, s; l < o; l++)
      s = i.indexOf(n[l]), s === -1 && i.push(n[l]);
    return i.join(" ");
  },
  _relDelete: function(e, t) {
    if (!t)
      return e.currentRel.join(" ");
    /^only\:/.test(t) && (t = t.replace(/^only\:/, "").trim());
    const i = e.currentRel.join(" ").replace(this._w.RegExp(t + "\\s*"), "");
    return e.currentRel = i.split(" "), i;
  },
  init: function(e) {
    e.linkAnchor = null, e.linkValue = e.preview.textContent = e.urlInput.value = "", e.anchorText.value = "", e.newWindowCheck.checked = !1, e.downloadCheck.checked = !1, e._change = !1, this.plugins.anchor.setRel.call(this, e, e.defaultRel), e.relList && this.plugins.anchor.toggleRelList.call(this, e, !1), this.context.anchor.callerContext = null, this.plugins.selectMenu.init.call(this, this.context.selectMenu.callerContext);
  }
}, Hn = {
  name: "link",
  display: "dialog",
  add: function(e) {
    e.addModule([Q, Te]);
    const t = e.context, i = t.link = {
      focusElement: null,
      _linkAnchor: null,
      anchorCtx: null
    };
    let n = this.setDialog(e);
    i.modal = n;
    let l = this.setController_LinkButton(e);
    i.linkController = l, n.querySelector("form").addEventListener("submit", this.submit.bind(e)), l.addEventListener("click", this.onClick_linkController.bind(e)), t.dialog.modal.appendChild(n), t.element.relative.appendChild(l), e.plugins.anchor.initEvent.call(e, "link", n), i.focusElement = t.anchor.caller.link.urlInput, n = null, l = null;
  },
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.icons;
    i.className = "se-dialog-content", i.style.display = "none";
    let l = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + n.cancel + '</button><span class="se-modal-title">' + t.dialogBox.linkBox.title + "</span></div>" + e.context.anchor.forms.innerHTML + '<div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>";
    return i.innerHTML = l, i;
  },
  setController_LinkButton: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><span><a target="_blank" href=""></a>&nbsp;</span><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="unlink" tabindex="-1" class="se-btn se-tooltip">' + i.unlink + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.unlink + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
  },
  open: function() {
    this.plugins.dialog.open.call(this, "link", this.currentControllerName === "link");
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    try {
      const t = this.plugins.anchor.createAnchor.call(this, this.context.anchor.caller.link, !1);
      if (t === null)
        return;
      if (this.context.dialog.updateModal) {
        const i = this.context.link._linkAnchor.childNodes[0];
        this.setRange(i, 0, i, i.textContent.length);
      } else {
        const i = this.getSelectedElements();
        if (i.length > 1) {
          const n = this.util.createElement(i[0].nodeName);
          if (n.appendChild(t), !this.insertNode(n, null, !0))
            return;
        } else if (!this.insertNode(t, null, !0))
          return;
        this.setRange(t.childNodes[0], 0, t.childNodes[0], t.textContent.length);
      }
    } finally {
      this.plugins.dialog.close.call(this), this.closeLoading(), this.history.push(!1);
    }
    return !1;
  },
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.link.linkController) > -1 && this.controllersOff();
    else if (this.util.isAnchor(e) && e.getAttribute("data-image-link") === null)
      return this.controllerArray.indexOf(this.context.link.linkController) < 0 && this.plugins.link.call_controller.call(this, e), !0;
    return !1;
  },
  on: function(e) {
    this.plugins.anchor.on.call(this, this.context.anchor.caller.link, e);
  },
  call_controller: function(e) {
    this.editLink = this.context.link._linkAnchor = this.context.anchor.caller.link.linkAnchor = e;
    const t = this.context.link.linkController, i = t.querySelector("a");
    i.href = e.href, i.title = e.textContent, i.textContent = e.textContent, this.util.addClass(e, "on"), this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "link", this.util.removeClass.bind(this.util, this.context.link._linkAnchor, "on"));
  },
  onClick_linkController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    if (!!t) {
      if (e.preventDefault(), /update/.test(t))
        this.plugins.dialog.open.call(this, "link", !0);
      else if (/unlink/.test(t)) {
        const i = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !1), n = this.util.getChildElement(this.context.link._linkAnchor, function(l) {
          return l.childNodes.length === 0 || l.nodeType === 3;
        }, !0);
        this.setRange(i, 0, n, n.textContent.length), this.nodeChange(null, null, ["A"], !1);
      } else
        this.util.removeItem(this.context.link._linkAnchor), this.context.anchor.caller.link.linkAnchor = null, this.focus(), this.history.push(!1);
      this.controllersOff();
    }
  },
  init: function() {
    this.context.link.linkController.style.display = "none", this.plugins.anchor.init.call(this, this.context.anchor.caller.link);
  }
};
var Be = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      name: "component",
      set_container: function(l, o) {
        const s = this.util.createElement("DIV");
        return s.className = "se-component " + o, s.setAttribute("contenteditable", !1), s.appendChild(l), s;
      },
      set_cover: function(l) {
        const o = this.util.createElement("FIGURE");
        return o.appendChild(l), o;
      },
      create_caption: function() {
        const l = this.util.createElement("FIGCAPTION");
        return l.setAttribute("contenteditable", !0), l.innerHTML = "<div>" + this.lang.dialogBox.caption + "</div>", l;
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "component", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(Be);
const ae = Be.exports;
var Ae = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      name: "resizing",
      add: function(l) {
        const o = l.icons, s = l.context;
        s.resizing = {
          _resizeClientX: 0,
          _resizeClientY: 0,
          _resize_plugin: "",
          _resize_w: 0,
          _resize_h: 0,
          _origin_w: 0,
          _origin_h: 0,
          _rotateVertical: !1,
          _resize_direction: "",
          _move_path: null,
          _isChange: !1,
          alignIcons: {
            basic: o.align_justify,
            left: o.align_left,
            right: o.align_right,
            center: o.align_center
          }
        };
        let a = this.setController_resize(l);
        s.resizing.resizeContainer = a, s.resizing.resizeDiv = a.querySelector(".se-modal-resize"), s.resizing.resizeDot = a.querySelector(".se-resize-dot"), s.resizing.resizeDisplay = a.querySelector(".se-resize-display");
        let r = this.setController_button(l);
        s.resizing.resizeButton = r;
        let d = s.resizing.resizeHandles = s.resizing.resizeDot.querySelectorAll("span");
        s.resizing.resizeButtonGroup = r.querySelector("._se_resizing_btn_group"), s.resizing.rotationButtons = r.querySelectorAll("._se_resizing_btn_group ._se_rotation"), s.resizing.percentageButtons = r.querySelectorAll("._se_resizing_btn_group ._se_percentage"), s.resizing.alignMenu = r.querySelector(".se-resizing-align-list"), s.resizing.alignMenuList = s.resizing.alignMenu.querySelectorAll("button"), s.resizing.alignButton = r.querySelector("._se_resizing_align_button"), s.resizing.autoSizeButton = r.querySelector("._se_resizing_btn_group ._se_auto_size"), s.resizing.captionButton = r.querySelector("._se_resizing_caption_button"), a.addEventListener("mousedown", function(u) {
          u.preventDefault();
        }), d[0].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), d[1].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), d[2].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), d[3].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), d[4].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), d[5].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), d[6].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), d[7].addEventListener("mousedown", this.onMouseDown_resize_handle.bind(l)), r.addEventListener("click", this.onClick_resizeButton.bind(l)), s.element.relative.appendChild(a), s.element.relative.appendChild(r), a = null, r = null, d = null;
      },
      setController_resize: function(l) {
        const o = l.util.createElement("DIV");
        return o.className = "se-controller se-resizing-container", o.style.display = "none", o.innerHTML = '<div class="se-modal-resize"></div><div class="se-resize-dot"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span><span class="lw"></span><span class="th"></span><span class="rw"></span><span class="bh"></span><div class="se-resize-display"></div></div>', o;
      },
      setController_button: function(l) {
        const o = l.lang, s = l.icons, a = l.util.createElement("DIV");
        return a.className = "se-controller se-controller-resizing", a.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="se-btn-group _se_resizing_btn_group"><button type="button" data-command="percent" data-value="1" class="se-tooltip _se_percentage"><span>100%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.resize100 + '</span></span></button><button type="button" data-command="percent" data-value="0.75" class="se-tooltip _se_percentage"><span>75%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.resize75 + '</span></span></button><button type="button" data-command="percent" data-value="0.5" class="se-tooltip _se_percentage"><span>50%</span><span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.resize50 + '</span></span></button><button type="button" data-command="auto" class="se-btn se-tooltip _se_auto_size">' + s.auto_size + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.autoSize + '</span></span></button><button type="button" data-command="rotate" data-value="-90" class="se-btn se-tooltip _se_rotation">' + s.rotate_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.rotateLeft + '</span></span></button><button type="button" data-command="rotate" data-value="90" class="se-btn se-tooltip _se_rotation">' + s.rotate_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.rotateRight + '</span></span></button></div><div class="se-btn-group" style="padding-top: 0;"><button type="button" data-command="mirror" data-value="h" class="se-btn se-tooltip">' + s.mirror_horizontal + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.mirrorHorizontal + '</span></span></button><button type="button" data-command="mirror" data-value="v" class="se-btn se-tooltip">' + s.mirror_vertical + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.mirrorVertical + '</span></span></button><button type="button" data-command="onalign" class="se-btn se-tooltip _se_resizing_align_button">' + s.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.toolbar.align + '</span></span></button><div class="se-btn-group-sub sun-editor-common se-list-layer se-resizing-align-list"><div class="se-list-inner"><ul class="se-list-basic"><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="basic">' + s.align_justify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.dialogBox.basic + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="left">' + s.align_left + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.dialogBox.left + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="center">' + s.align_center + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.dialogBox.center + '</span></span></button></li><li><button type="button" class="se-btn-list se-tooltip" data-command="align" data-value="right">' + s.align_right + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.dialogBox.right + '</span></span></button></li></ul></div></div><button type="button" data-command="caption" class="se-btn se-tooltip _se_resizing_caption_button">' + s.caption + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.dialogBox.caption + '</span></span></button><button type="button" data-command="revert" class="se-btn se-tooltip">' + s.revert + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.dialogBox.revertButton + '</span></span></button><button type="button" data-command="update" class="se-btn se-tooltip">' + s.modify + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.edit + '</span></span></button><button type="button" data-command="delete" class="se-btn se-tooltip">' + s.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + o.controller.remove + "</span></span></button></div>", a;
      },
      _module_getSizeX: function(l, o, s, a) {
        return o || (o = l._element), s || (s = l._cover), a || (a = l._container), o ? /%$/.test(o.style.width) ? (a && this.util.getNumber(a.style.width, 2) || 100) + "%" : o.style.width : "";
      },
      _module_getSizeY: function(l, o, s, a) {
        return o || (o = l._element), s || (s = l._cover), a || (a = l._container), !a || !s ? o && o.style.height || "" : this.util.getNumber(s.style.paddingBottom, 0) > 0 && !this.context.resizing._rotateVertical ? s.style.height : !/%$/.test(o.style.height) || !/%$/.test(o.style.width) ? o.style.height : (a && this.util.getNumber(a.style.height, 2) || 100) + "%";
      },
      _module_setModifyInputSize: function(l, o) {
        const s = l._onlyPercentage && this.context.resizing._rotateVertical;
        l.proportion.checked = l._proportionChecked = l._element.getAttribute("data-proportion") !== "false";
        let a = s ? "" : this.plugins.resizing._module_getSizeX.call(this, l);
        if (a === l._defaultSizeX && (a = ""), l._onlyPercentage && (a = this.util.getNumber(a, 2)), l.inputX.value = a, o.setInputSize.call(this, "x"), !l._onlyPercentage) {
          let r = s ? "" : this.plugins.resizing._module_getSizeY.call(this, l);
          r === l._defaultSizeY && (r = ""), l._onlyPercentage && (r = this.util.getNumber(r, 2)), l.inputY.value = r;
        }
        l.inputX.disabled = !!s, l.inputY.disabled = !!s, l.proportion.disabled = !!s, o.setRatio.call(this);
      },
      _module_setInputSize: function(l, o) {
        if (l._onlyPercentage) {
          o === "x" && l.inputX.value > 100 && (l.inputX.value = 100);
          return;
        }
        if (l.proportion.checked && l._ratio && /\d/.test(l.inputX.value) && /\d/.test(l.inputY.value)) {
          const s = l.inputX.value.replace(/\d+|\./g, "") || l.sizeUnit, a = l.inputY.value.replace(/\d+|\./g, "") || l.sizeUnit;
          if (s !== a)
            return;
          const r = s === "%" ? 2 : 0;
          o === "x" ? l.inputY.value = this.util.getNumber(l._ratioY * this.util.getNumber(l.inputX.value, r), r) + a : l.inputX.value = this.util.getNumber(l._ratioX * this.util.getNumber(l.inputY.value, r), r) + s;
        }
      },
      _module_setRatio: function(l) {
        const o = l.inputX.value, s = l.inputY.value;
        if (l.proportion.checked && /\d+/.test(o) && /\d+/.test(s)) {
          const a = o.replace(/\d+|\./g, "") || l.sizeUnit, r = s.replace(/\d+|\./g, "") || l.sizeUnit;
          if (a !== r)
            l._ratio = !1;
          else if (!l._ratio) {
            const d = this.util.getNumber(o, 0), u = this.util.getNumber(s, 0);
            l._ratio = !0, l._ratioX = d / u, l._ratioY = u / d;
          }
        } else
          l._ratio = !1;
      },
      _module_sizeRevert: function(l) {
        l._onlyPercentage ? l.inputX.value = l._origin_w > 100 ? 100 : l._origin_w : (l.inputX.value = l._origin_w, l.inputY.value = l._origin_h);
      },
      _module_saveCurrentSize: function(l) {
        const o = this.plugins.resizing._module_getSizeX.call(this, l), s = this.plugins.resizing._module_getSizeY.call(this, l);
        l._element.setAttribute("data-size", o + "," + s), l._videoRatio && (l._videoRatio = s);
      },
      call_controller_resize: function(l, o) {
        const s = this.context.resizing, a = this.context[o];
        s._resize_plugin = o;
        const r = s.resizeContainer, d = s.resizeDiv, u = this.util.getOffset(l, this.context.element.wysiwygFrame), f = s._rotateVertical = /^(90|270)$/.test(Math.abs(l.getAttribute("data-rotate")).toString()), h = f ? l.offsetHeight : l.offsetWidth, g = f ? l.offsetWidth : l.offsetHeight, p = u.top, b = u.left - this.context.element.wysiwygFrame.scrollLeft;
        r.style.top = p + "px", r.style.left = b + "px", r.style.width = h + "px", r.style.height = g + "px", d.style.top = "0px", d.style.left = "0px", d.style.width = h + "px", d.style.height = g + "px";
        let m = l.getAttribute("data-align") || "basic";
        m = m === "none" ? "basic" : m;
        const c = this.util.getParentElement(l, this.util.isComponent), v = this.util.getParentElement(l, "FIGURE"), _ = this.plugins.resizing._module_getSizeX.call(this, a, l, v, c) || "auto", y = a._onlyPercentage && o === "image" ? "" : ", " + (this.plugins.resizing._module_getSizeY.call(this, a, l, v, c) || "auto");
        this.util.changeTxt(s.resizeDisplay, this.lang.dialogBox[m] + " (" + _ + y + ")"), s.resizeButtonGroup.style.display = a._resizing ? "" : "none";
        const w = a._resizing && !a._resizeDotHide && !a._onlyPercentage ? "flex" : "none", x = s.resizeHandles;
        for (let C = 0, I = x.length; C < I; C++)
          x[C].style.display = w;
        if (a._resizing) {
          const C = s.rotationButtons;
          C[0].style.display = C[1].style.display = a._rotation ? "" : "none";
        }
        if (a._alignHide)
          s.alignButton.style.display = "none";
        else {
          s.alignButton.style.display = "";
          const C = s.alignMenuList;
          this.util.changeElement(s.alignButton.firstElementChild, s.alignIcons[m]);
          for (let I = 0, T = C.length; I < T; I++)
            C[I].getAttribute("data-value") === m ? this.util.addClass(C[I], "on") : this.util.removeClass(C[I], "on");
        }
        const S = s.percentageButtons, E = /%$/.test(l.style.width) && /%$/.test(c.style.width) ? this.util.getNumber(c.style.width, 0) / 100 + "" : "";
        for (let C = 0, I = S.length; C < I; C++)
          S[C].getAttribute("data-value") === E ? this.util.addClass(S[C], "active") : this.util.removeClass(S[C], "active");
        a._captionShow ? (s.captionButton.style.display = "", this.util.getChildElement(l.parentNode, "figcaption") ? (this.util.addClass(s.captionButton, "active"), a._captionChecked = !0) : (this.util.removeClass(s.captionButton, "active"), a._captionChecked = !1)) : s.captionButton.style.display = "none", r.style.display = "block";
        const B = { left: 0, top: 50 };
        this.options.iframe && (B.left -= this.context.element.wysiwygFrame.parentElement.offsetLeft, B.top -= this.context.element.wysiwygFrame.parentElement.offsetTop), this.setControllerPosition(s.resizeButton, r, "bottom", B), this.controllersOn(r, s.resizeButton, this.util.setDisabledButtons.bind(this.util, !1, this.resizingDisabledButtons), l, o), this.util.setDisabledButtons(!0, this.resizingDisabledButtons), s._resize_w = h, s._resize_h = g;
        const A = (l.getAttribute("origin-size") || "").split(",");
        return s._origin_w = A[0] || l.naturalWidth, s._origin_h = A[1] || l.naturalHeight, {
          w: h,
          h: g,
          t: p,
          l: b
        };
      },
      _closeAlignMenu: null,
      openAlignMenu: function() {
        const l = this.context.resizing.alignButton;
        this.util.addClass(l, "on"), this.context.resizing.alignMenu.style.top = l.offsetTop + l.offsetHeight + "px", this.context.resizing.alignMenu.style.left = l.offsetLeft - l.offsetWidth / 2 + "px", this.context.resizing.alignMenu.style.display = "block", this.plugins.resizing._closeAlignMenu = function() {
          this.util.removeClass(this.context.resizing.alignButton, "on"), this.context.resizing.alignMenu.style.display = "none", this.removeDocEvent("click", this.plugins.resizing._closeAlignMenu), this.plugins.resizing._closeAlignMenu = null;
        }.bind(this), this.addDocEvent("click", this.plugins.resizing._closeAlignMenu);
      },
      onClick_resizeButton: function(l) {
        l.stopPropagation();
        const o = l.target, s = o.getAttribute("data-command") || o.parentNode.getAttribute("data-command");
        if (!s)
          return;
        const a = o.getAttribute("data-value") || o.parentNode.getAttribute("data-value"), r = this.context.resizing._resize_plugin, d = this.context[r], u = d._element, f = this.plugins[r];
        if (l.preventDefault(), !(typeof this.plugins.resizing._closeAlignMenu == "function" && (this.plugins.resizing._closeAlignMenu(), s === "onalign"))) {
          switch (s) {
            case "auto":
              this.plugins.resizing.resetTransform.call(this, u), f.setAutoSize.call(this), this.selectComponent(u, r);
              break;
            case "percent":
              let h = this.plugins.resizing._module_getSizeY.call(this, d);
              if (this.context.resizing._rotateVertical) {
                const w = u.getAttribute("data-percentage");
                w && (h = w.split(",")[1]);
              }
              this.plugins.resizing.resetTransform.call(this, u), f.setPercentSize.call(this, a * 100, this.util.getNumber(h, 0) === null || !/%$/.test(h) ? "" : h), this.selectComponent(u, r);
              break;
            case "mirror":
              const g = u.getAttribute("data-rotate") || "0";
              let p = u.getAttribute("data-rotateX") || "", b = u.getAttribute("data-rotateY") || "";
              a === "h" && !this.context.resizing._rotateVertical || a === "v" && this.context.resizing._rotateVertical ? b = b ? "" : "180" : p = p ? "" : "180", u.setAttribute("data-rotateX", p), u.setAttribute("data-rotateY", b), this.plugins.resizing._setTransForm(u, g, p, b);
              break;
            case "rotate":
              const m = this.context.resizing, c = u.getAttribute("data-rotate") * 1 + a * 1, v = this._w.Math.abs(c) >= 360 ? 0 : c;
              u.setAttribute("data-rotate", v), m._rotateVertical = /^(90|270)$/.test(this._w.Math.abs(v).toString()), this.plugins.resizing.setTransformSize.call(this, u, null, null), this.selectComponent(u, r);
              break;
            case "onalign":
              this.plugins.resizing.openAlignMenu.call(this);
              return;
            case "align":
              const _ = a === "basic" ? "none" : a;
              f.setAlign.call(this, _, null, null, null), this.selectComponent(u, r);
              break;
            case "caption":
              const y = !d._captionChecked;
              if (f.openModify.call(this, !0), d._captionChecked = d.captionCheckEl.checked = y, f.update_image.call(this, !1, !1, !1), y) {
                const w = this.util.getChildElement(d._caption, function(x) {
                  return x.nodeType === 3;
                });
                w ? this.setRange(w, 0, w, w.textContent.length) : d._caption.focus(), this.controllersOff();
              } else
                this.selectComponent(u, r), f.openModify.call(this, !0);
              break;
            case "revert":
              f.setOriginSize.call(this), this.selectComponent(u, r);
              break;
            case "update":
              f.openModify.call(this), this.controllersOff();
              break;
            case "delete":
              f.destroy.call(this);
              break;
          }
          this.history.push(!1);
        }
      },
      resetTransform: function(l) {
        const o = (l.getAttribute("data-size") || l.getAttribute("data-origin") || "").split(",");
        this.context.resizing._rotateVertical = !1, l.style.maxWidth = "", l.style.transform = "", l.style.transformOrigin = "", l.setAttribute("data-rotate", ""), l.setAttribute("data-rotateX", ""), l.setAttribute("data-rotateY", ""), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, o[0] ? o[0] : "auto", o[1] ? o[1] : "", !0);
      },
      setTransformSize: function(l, o, s) {
        let a = l.getAttribute("data-percentage");
        const r = this.context.resizing._rotateVertical, d = l.getAttribute("data-rotate") * 1;
        let u = "";
        if (a && !r)
          a = a.split(","), a[0] === "auto" && a[1] === "auto" ? this.plugins[this.context.resizing._resize_plugin].setAutoSize.call(this) : this.plugins[this.context.resizing._resize_plugin].setPercentSize.call(this, a[0], a[1]);
        else {
          const f = this.util.getParentElement(l, "FIGURE"), h = o || l.offsetWidth, g = s || l.offsetHeight, p = (r ? g : h) + "px", b = (r ? h : g) + "px";
          if (this.plugins[this.context.resizing._resize_plugin].cancelPercentAttr.call(this), this.plugins[this.context.resizing._resize_plugin].setSize.call(this, h + "px", g + "px", !0), f.style.width = p, f.style.height = this.context[this.context.resizing._resize_plugin]._caption ? "" : b, r) {
            let m = h / 2 + "px " + h / 2 + "px 0", c = g / 2 + "px " + g / 2 + "px 0";
            u = d === 90 || d === -270 ? c : m;
          }
        }
        l.style.transformOrigin = u, this.plugins.resizing._setTransForm(l, d.toString(), l.getAttribute("data-rotateX") || "", l.getAttribute("data-rotateY") || ""), r ? l.style.maxWidth = "none" : l.style.maxWidth = "", this.plugins.resizing.setCaptionPosition.call(this, l);
      },
      _setTransForm: function(l, o, s, a) {
        let r = (l.offsetWidth - l.offsetHeight) * (/-/.test(o) ? 1 : -1), d = "";
        if (/[1-9]/.test(o) && (s || a))
          switch (d = s ? "Y" : "X", o) {
            case "90":
              d = s && a ? "X" : a ? d : "";
              break;
            case "270":
              r *= -1, d = s && a ? "Y" : s ? d : "";
              break;
            case "-90":
              d = s && a ? "Y" : s ? d : "";
              break;
            case "-270":
              r *= -1, d = s && a ? "X" : a ? d : "";
              break;
            default:
              d = "";
          }
        o % 180 === 0 && (l.style.maxWidth = ""), l.style.transform = "rotate(" + o + "deg)" + (s ? " rotateX(" + s + "deg)" : "") + (a ? " rotateY(" + a + "deg)" : "") + (d ? " translate" + d + "(" + r + "px)" : "");
      },
      setCaptionPosition: function(l) {
        const o = this.util.getChildElement(this.util.getParentElement(l, "FIGURE"), "FIGCAPTION");
        o && (o.style.marginTop = (this.context.resizing._rotateVertical ? l.offsetWidth - l.offsetHeight : 0) + "px");
      },
      onMouseDown_resize_handle: function(l) {
        l.stopPropagation(), l.preventDefault();
        const o = this.context.resizing, s = o._resize_direction = l.target.classList[0];
        o._resizeClientX = l.clientX, o._resizeClientY = l.clientY, this.context.element.resizeBackground.style.display = "block", o.resizeButton.style.display = "none", o.resizeDiv.style.float = /l/.test(s) ? "right" : /r/.test(s) ? "left" : "none";
        const a = function(u) {
          if (u.type === "keydown" && u.keyCode !== 27)
            return;
          const f = o._isChange;
          o._isChange = !1, this.removeDocEvent("mousemove", r), this.removeDocEvent("mouseup", a), this.removeDocEvent("keydown", a), u.type === "keydown" ? (this.controllersOff(), this.context.element.resizeBackground.style.display = "none", this.plugins[this.context.resizing._resize_plugin].init.call(this)) : (this.plugins.resizing.cancel_controller_resize.call(this, s), f && this.history.push(!1));
        }.bind(this), r = this.plugins.resizing.resizing_element.bind(this, o, s, this.context[o._resize_plugin]);
        this.addDocEvent("mousemove", r), this.addDocEvent("mouseup", a), this.addDocEvent("keydown", a);
      },
      resizing_element: function(l, o, s, a) {
        const r = a.clientX, d = a.clientY;
        let u = s._element_w, f = s._element_h;
        const h = s._element_w + (/r/.test(o) ? r - l._resizeClientX : l._resizeClientX - r), g = s._element_h + (/b/.test(o) ? d - l._resizeClientY : l._resizeClientY - d), p = s._element_h / s._element_w * h;
        /t/.test(o) && (l.resizeDiv.style.top = s._element_h - (/h/.test(o) ? g : p) + "px"), /l/.test(o) && (l.resizeDiv.style.left = s._element_w - h + "px"), /r|l/.test(o) && (l.resizeDiv.style.width = h + "px", u = h), /^(t|b)[^h]$/.test(o) ? (l.resizeDiv.style.height = p + "px", f = p) : /^(t|b)h$/.test(o) && (l.resizeDiv.style.height = g + "px", f = g), l._resize_w = u, l._resize_h = f, this.util.changeTxt(l.resizeDisplay, this._w.Math.round(u) + " x " + this._w.Math.round(f)), l._isChange = !0;
      },
      cancel_controller_resize: function(l) {
        const o = this.context.resizing._rotateVertical;
        this.controllersOff(), this.context.element.resizeBackground.style.display = "none";
        let s = this._w.Math.round(o ? this.context.resizing._resize_h : this.context.resizing._resize_w), a = this._w.Math.round(o ? this.context.resizing._resize_w : this.context.resizing._resize_h);
        if (!o && !/%$/.test(s)) {
          const u = this.context.element.wysiwygFrame.clientWidth - 32 - 2;
          this.util.getNumber(s, 0) > u && (a = this._w.Math.round(a / s * u), s = u);
        }
        const r = this.context.resizing._resize_plugin;
        this.plugins[r].setSize.call(this, s, a, !1, l), o && this.plugins.resizing.setTransformSize.call(this, this.context[this.context.resizing._resize_plugin]._element, s, a), this.selectComponent(this.context[r]._element, r);
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "resizing", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(Ae);
const Ne = Ae.exports;
var Me = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      name: "fileManager",
      _xmlHttp: null,
      _checkMediaComponent: function(l) {
        return /IMG/i.test(l) ? !/FIGURE/i.test(l.parentElement.nodeName) || !/FIGURE/i.test(l.parentElement.parentElement.nodeName) : !0;
      },
      upload: function(l, o, s, a, r) {
        this.showLoading();
        const d = this.plugins.fileManager, u = d._xmlHttp = this.util.getXMLHttpRequest();
        if (u.onreadystatechange = d._callBackUpload.bind(this, u, a, r), u.open("post", l, !0), o !== null && typeof o == "object" && this._w.Object.keys(o).length > 0)
          for (let f in o)
            u.setRequestHeader(f, o[f]);
        u.send(s);
      },
      _callBackUpload: function(l, o, s) {
        if (l.readyState === 4)
          if (l.status === 200)
            try {
              o(l);
            } catch (a) {
              throw Error('[SUNEDITOR.fileManager.upload.callBack.fail] cause : "' + a.message + '"');
            } finally {
              this.closeLoading();
            }
          else {
            this.closeLoading();
            const a = l.responseText ? JSON.parse(l.responseText) : l;
            if (typeof s != "function" || s("", a, this)) {
              const r = "[SUNEDITOR.fileManager.upload.serverException] status: " + l.status + ", response: " + (a.errorMessage || l.responseText);
              throw this.functions.noticeOpen(r), Error(r);
            }
          }
      },
      checkInfo: function(l, o, s, a, r) {
        let d = [];
        for (let c = 0, v = o.length; c < v; c++)
          d = d.concat([].slice.call(this.context.element.wysiwyg.querySelectorAll(o[c] + ':not([data-se-embed="true"])')));
        const u = this.plugins.fileManager, f = this.context[l], h = f._infoList, g = u.setInfo.bind(this);
        if (d.length === h.length)
          if (this._componentsInfoReset) {
            for (let c = 0, v = d.length; c < v; c++)
              g(l, d[c], s, null, r);
            return;
          } else {
            let c = !1;
            for (let v = 0, _ = h.length, y; v < _; v++)
              if (y = h[v], d.filter(function(w) {
                return y.src === w.src && y.index.toString() === w.getAttribute("data-index");
              }).length === 0) {
                c = !0;
                break;
              }
            if (!c)
              return;
          }
        const p = r ? this.context.resizing._resize_plugin : "";
        r && (this.context.resizing._resize_plugin = l);
        const b = [], m = [];
        for (let c = 0, v = h.length; c < v; c++)
          m[c] = h[c].index;
        for (let c = 0, v = d.length, _; c < v; c++)
          _ = d[c], !this.util.getParentElement(_, this.util.isMediaComponent) || !u._checkMediaComponent(_) ? (b.push(f._infoIndex), a(_)) : !_.getAttribute("data-index") || m.indexOf(_.getAttribute("data-index") * 1) < 0 ? (b.push(f._infoIndex), _.removeAttribute("data-index"), g(l, _, s, null, r)) : b.push(_.getAttribute("data-index") * 1);
        for (let c = 0, v; c < h.length; c++)
          v = h[c].index, !(b.indexOf(v) > -1) && (h.splice(c, 1), typeof s == "function" && s(null, v, "delete", null, 0, this), c--);
        r && (this.context.resizing._resize_plugin = p);
      },
      setInfo: function(l, o, s, a, r) {
        const d = r ? this.context.resizing._resize_plugin : "";
        r && (this.context.resizing._resize_plugin = l);
        const u = this.plugins[l], f = this.context[l], h = f._infoList;
        let g = o.getAttribute("data-index"), p = null, b = "";
        if (a || (a = {
          name: o.getAttribute("data-file-name") || (typeof o.src == "string" ? o.src.split("/").pop() : ""),
          size: o.getAttribute("data-file-size") || 0
        }), !g || this._componentsInfoInit)
          b = "create", g = f._infoIndex++, o.setAttribute("data-index", g), o.setAttribute("data-file-name", a.name), o.setAttribute("data-file-size", a.size), p = {
            src: o.src,
            index: g * 1,
            name: a.name,
            size: a.size
          }, h.push(p);
        else {
          b = "update", g *= 1;
          for (let m = 0, c = h.length; m < c; m++)
            if (g === h[m].index) {
              p = h[m];
              break;
            }
          p || (g = f._infoIndex++, p = { index: g }, h.push(p)), p.src = o.src, p.name = o.getAttribute("data-file-name"), p.size = o.getAttribute("data-file-size") * 1;
        }
        if (p.element = o, p.delete = u.destroy.bind(this, o), p.select = function(m) {
          m.scrollIntoView(!0), this._w.setTimeout(u.select.bind(this, m));
        }.bind(this, o), r) {
          if (!o.getAttribute("origin-size") && o.naturalWidth && o.setAttribute("origin-size", o.naturalWidth + "," + o.naturalHeight), !o.getAttribute("data-origin")) {
            const m = this.util.getParentElement(o, this.util.isMediaComponent), c = this.util.getParentElement(o, "FIGURE"), v = this.plugins.resizing._module_getSizeX.call(this, f, o, c, m), _ = this.plugins.resizing._module_getSizeY.call(this, f, o, c, m);
            o.setAttribute("data-origin", v + "," + _), o.setAttribute("data-size", v + "," + _);
          }
          if (!o.style.width) {
            const m = (o.getAttribute("data-size") || o.getAttribute("data-origin") || "").split(",");
            u.onModifyMode.call(this, o, null), u.applySize.call(this, m[0], m[1]);
          }
          this.context.resizing._resize_plugin = d;
        }
        typeof s == "function" && s(o, g, b, p, --f._uploadFileLength < 0 ? 0 : f._uploadFileLength, this);
      },
      deleteInfo: function(l, o, s) {
        if (o >= 0) {
          const a = this.context[l]._infoList;
          for (let r = 0, d = a.length; r < d; r++)
            if (o === a[r].index) {
              a.splice(r, 1), typeof s == "function" && s(null, o, "delete", null, 0, this);
              return;
            }
        }
      },
      resetInfo: function(l, o) {
        const s = this.context[l];
        if (typeof o == "function") {
          const a = s._infoList;
          for (let r = 0, d = a.length; r < d; r++)
            o(null, a[r].index, "delete", null, 0, this);
        }
        s._infoList = [], s._infoIndex = 0;
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileManager", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(Me);
const re = Me.exports, Pn = {
  name: "image",
  display: "dialog",
  add: function(e) {
    e.addModule([Q, Te, ae, Ne, re]);
    const t = e.options, i = e.context, n = i.image = {
      _infoList: [],
      _infoIndex: 0,
      _uploadFileLength: 0,
      focusElement: null,
      sizeUnit: t._imageSizeUnit,
      _linkElement: "",
      _altText: "",
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _v_src: { _linkValue: "" },
      svgDefaultSize: "30%",
      base64RenderIndex: 0,
      _element: null,
      _cover: null,
      _container: null,
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "auto",
      _defaultSizeY: "auto",
      _origin_w: t.imageWidth === "auto" ? "" : t.imageWidth,
      _origin_h: t.imageHeight === "auto" ? "" : t.imageHeight,
      _proportionChecked: !0,
      _resizing: t.imageResizing,
      _resizeDotHide: !t.imageHeightShow,
      _rotation: t.imageRotation,
      _alignHide: !t.imageAlignShow,
      _onlyPercentage: t.imageSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !0,
      _captionChecked: !1,
      _caption: null,
      captionCheckEl: null
    };
    let l = this.setDialog(e);
    n.modal = l, n.imgInputFile = l.querySelector("._se_image_file"), n.imgUrlFile = l.querySelector("._se_image_url"), n.focusElement = n.imgInputFile || n.imgUrlFile, n.altText = l.querySelector("._se_image_alt"), n.captionCheckEl = l.querySelector("._se_image_check_caption"), n.previewSrc = l.querySelector("._se_tab_content_image .se-link-preview"), l.querySelector(".se-dialog-tabs").addEventListener("click", this.openTab.bind(e)), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.imgInputFile && l.querySelector(".se-file-remove").addEventListener("click", this._removeSelectedFiles.bind(n.imgInputFile, n.imgUrlFile, n.previewSrc)), n.imgUrlFile && n.imgUrlFile.addEventListener("input", this._onLinkPreview.bind(n.previewSrc, n._v_src, t.linkProtocol)), n.imgInputFile && n.imgUrlFile && n.imgInputFile.addEventListener("change", this._fileInputChange.bind(n));
    const o = l.querySelector(".__se__gallery");
    o && o.addEventListener("click", this._openGallery.bind(e)), n.proportion = {}, n.inputX = {}, n.inputY = {}, t.imageResizing && (n.proportion = l.querySelector("._se_image_check_proportion"), n.inputX = l.querySelector("._se_image_size_x"), n.inputY = l.querySelector("._se_image_size_y"), n.inputX.value = t.imageWidth, n.inputY.value = t.imageHeight, n.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), n.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), n.inputX.addEventListener("change", this.setRatio.bind(e)), n.inputY.addEventListener("change", this.setRatio.bind(e)), n.proportion.addEventListener("change", this.setRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), e.plugins.anchor.initEvent.call(e, "image", l.querySelector("._se_tab_content_url")), n.anchorCtx = e.context.anchor.caller.image, l = null;
  },
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content se-dialog-image", n.style.display = "none";
    let l = '<div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" class="close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.imageBox.title + '</span></div><div class="se-dialog-tabs"><button type="button" class="_se_tab_link active" data-tab-link="image">' + i.toolbar.image + '</button><button type="button" class="_se_tab_link" data-tab-link="url">' + i.toolbar.link + '</button></div><form method="post" enctype="multipart/form-data"><div class="_se_tab_content _se_tab_content_image"><div class="se-dialog-body"><div style="border-bottom: 1px dashed #ccc;">';
    if (t.imageFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_image_file" type="file" accept="' + t.imageAccept + '"' + (t.imageMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.imageUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.imageBox.url + '</label><div class="se-dialog-form-files"><input class="se-input-form se-input-url _se_image_url" type="text" />' + (t.imageGalleryUrl && e.plugins.imageGallery ? '<button type="button" class="se-btn se-dialog-files-edge-button __se__gallery" title="' + i.toolbar.imageGallery + '" aria-label="' + i.toolbar.imageGallery + '">' + e.icons.image_gallery + "</button>" : "") + '</div><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-form"><label>' + i.dialogBox.imageBox.altText + '</label><input class="se-input-form _se_image_alt" type="text" /></div>', t.imageResizing) {
      const o = t.imageSizeOnlyPercentage, s = o ? ' style="display: none !important;"' : "", a = t.imageHeightShow ? "" : ' style="display: none !important;"';
      l += '<div class="se-dialog-form">', o || !t.imageHeightShow ? l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.size + "</label></div>" : l += '<div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h">' + i.dialogBox.height + "</label></div>", l += '<input class="se-input-control _se_image_size_x" placeholder="auto"' + (o ? ' type="number" min="1"' : 'type="text"') + (o ? ' max="100"' : "") + ' /><label class="se-dialog-size-x"' + a + ">" + (o ? "%" : "x") + '</label><input type="text" class="se-input-control _se_image_size_y" placeholder="auto"' + s + (o ? ' max="100"' : "") + a + "/><label" + s + a + '><input type="checkbox" class="se-dialog-btn-check _se_image_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + '</label><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + "</button></div>";
    }
    return l += '<div class="se-dialog-form se-dialog-form-footer"><label><input type="checkbox" class="se-dialog-btn-check _se_image_check_caption" />&nbsp;' + i.dialogBox.caption + '</label></div></div></div><div class="_se_tab_content _se_tab_content_url" style="display: none">' + e.context.anchor.forms.innerHTML + '</div><div class="se-dialog-footer"><div' + (t.imageAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_image_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
  },
  _fileInputChange: function() {
    this.imgInputFile.value ? (this.imgUrlFile.setAttribute("disabled", !0), this.previewSrc.style.textDecoration = "line-through") : (this.imgUrlFile.removeAttribute("disabled"), this.previewSrc.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _openGallery: function() {
    this.callPlugin("imageGallery", this.plugins.imageGallery.open.bind(this, this.plugins.image._setUrlInput.bind(this.context.image)), null);
  },
  _setUrlInput: function(e) {
    this.altText.value = e.alt, this._v_src._linkValue = this.previewSrc.textContent = this.imgUrlFile.value = e.src, this.imgUrlFile.focus();
  },
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
  },
  fileTags: ["img"],
  select: function(e) {
    this.plugins.image.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "image"));
  },
  destroy: function(e) {
    const t = e || this.context.image._element, i = this.util.getParentElement(t, this.util.isMediaComponent) || t, n = t.getAttribute("data-index") * 1;
    let l = i.previousElementSibling || i.nextElementSibling;
    const o = i.parentNode;
    this.util.removeItem(i), this.plugins.image.init.call(this), this.controllersOff(), o !== this.context.element.wysiwyg && this.util.removeItemAllParents(o, function(s) {
      return s.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "image", n, this.functions.onImageUpload), this.history.push(!1);
  },
  on: function(e) {
    const t = this.context.image;
    e ? t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.imageWidth === t._defaultSizeX ? "" : this.options.imageWidth, t.inputY.value = t._origin_h = this.options.imageHeight === t._defaultSizeY ? "" : this.options.imageHeight, t.imgInputFile && this.options.imageMultipleFile && t.imgInputFile.setAttribute("multiple", "multiple")), this.plugins.anchor.on.call(this, t.anchorCtx, e);
  },
  open: function() {
    this.plugins.dialog.open.call(this, "image", this.currentControllerName === "image");
  },
  openTab: function(e) {
    const t = this.context.image.modal, i = e === "init" ? t.querySelector("._se_tab_link") : e.target;
    if (!/^BUTTON$/i.test(i.tagName))
      return !1;
    const n = i.getAttribute("data-tab-link"), l = "_se_tab_content";
    let o, s, a;
    for (s = t.getElementsByClassName(l), o = 0; o < s.length; o++)
      s[o].style.display = "none";
    for (a = t.getElementsByClassName("_se_tab_link"), o = 0; o < a.length; o++)
      this.util.removeClass(a[o], "active");
    return t.querySelector("." + l + "_" + n).style.display = "block", this.util.addClass(i, "active"), n === "image" && this.context.image.focusElement ? this.context.image.focusElement.focus() : n === "url" && this.context.anchor.caller.image.urlInput.focus(), !1;
  },
  submit: function(e) {
    const t = this.context.image, i = this.plugins.image;
    e.preventDefault(), e.stopPropagation(), t._altText = t.altText.value, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked, t._resizing && (t._proportionChecked = t.proportion.checked);
    try {
      this.context.dialog.updateModal && i.update_image.call(this, !1, !0, !1), t.imgInputFile && t.imgInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.image.imgInputFile.files)) : t.imgUrlFile && t._v_src._linkValue.length > 0 && (this.showLoading(), i.onRender_imgUrl.call(this, t._v_src._linkValue));
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.submit.fail] cause : "' + n.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, i = [];
    for (let a = 0, r = e.length; a < r; a++)
      /image/i.test(e[a].type) && (i.push(e[a]), t += e[a].size);
    const n = this.options.imageUploadSizeLimit;
    if (n > 0) {
      let a = 0;
      const r = this.context.image._infoList;
      for (let d = 0, u = r.length; d < u; d++)
        a += r[d].size * 1;
      if (t + a > n) {
        this.closeLoading();
        const d = "[SUNEDITOR.imageUpload.fail] Size of uploadable total images: " + n / 1e3 + "KB";
        (typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(d, { limitSize: n, currentSize: a, uploadSize: t }, this)) && this.functions.noticeOpen(d);
        return;
      }
    }
    const l = this.context.image;
    l._uploadFileLength = i.length;
    const s = {
      anchor: this.plugins.anchor.createAnchor.call(this, l.anchorCtx, !0),
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      alt: l._altText,
      element: l._element
    };
    if (typeof this.functions.onImageUploadBefore == "function") {
      const a = this.functions.onImageUploadBefore(i, s, this, function(r) {
        r && this._w.Array.isArray(r.result) ? this.plugins.image.register.call(this, s, r) : this.plugins.image.upload.call(this, s, r);
      }.bind(this));
      if (typeof a > "u")
        return;
      if (!a) {
        this.closeLoading();
        return;
      }
      this._w.Array.isArray(a) && a.length > 0 && (i = a);
    }
    this.plugins.image.upload.call(this, s, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onImageUploadError != "function" || this.functions.onImageUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.image.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.image.error.call(this, t, null);
      return;
    }
    const i = this.options.imageUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let o = 0; o < n; o++)
        l.append("file-" + o, t[o]);
      this.plugins.fileManager.upload.call(this, i, this.options.imageUploadHeader, l, this.plugins.image.callBack_imgUpload.bind(this, e), this.functions.onImageUploadError);
    } else
      this.plugins.image.setup_reader.call(this, t, e.anchor, e.inputWidth, e.inputHeight, e.align, e.alt, n, e.isUpdate);
  },
  callBack_imgUpload: function(e, t) {
    if (typeof this.functions.imageUploadHandler == "function")
      this.functions.imageUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.image.error.call(this, i.errorMessage, i) : this.plugins.image.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result;
    for (let n = 0, l = i.length, o; n < l; n++)
      if (o = { name: i[n].name, size: i[n].size }, e.isUpdate) {
        this.plugins.image.update_src.call(this, i[n].url, e.element, o);
        break;
      } else
        this.plugins.image.create_image.call(this, i[n].url, e.anchor, e.inputWidth, e.inputHeight, e.align, o, e.alt);
    this.closeLoading();
  },
  setup_reader: function(e, t, i, n, l, o, s, a) {
    try {
      this.context.image.base64RenderIndex = s;
      const r = this._w.FileReader, d = [s];
      this.context.image.inputX.value = i, this.context.image.inputY.value = n;
      for (let u = 0, f, h; u < s; u++)
        f = new r(), h = e[u], f.onload = function(g, p, b, m, c) {
          d[c] = { result: g.result, file: m }, --this.context.image.base64RenderIndex === 0 && (this.plugins.image.onRender_imgBase64.call(this, p, d, b, t, i, n, l, o), this.closeLoading());
        }.bind(this, f, a, this.context.image._element, h, u), f.readAsDataURL(h);
    } catch (r) {
      throw this.closeLoading(), Error('[SUNEDITOR.image.setup_reader.fail] cause : "' + r.message + '"');
    }
  },
  onRender_imgBase64: function(e, t, i, n, l, o, s, a) {
    const r = this.plugins.image.update_src, d = this.plugins.image.create_image;
    for (let u = 0, f = t.length; u < f; u++)
      e ? (this.context.image._element.setAttribute("data-file-name", t[u].file.name), this.context.image._element.setAttribute("data-file-size", t[u].file.size), r.call(this, t[u].result, i, t[u].file)) : d.call(this, t[u].result, n, l, o, s, t[u].file, a);
  },
  onRender_imgUrl: function(e) {
    if (e || (e = this.context.image._v_src._linkValue), !e)
      return !1;
    const t = this.context.image;
    try {
      const i = { name: e.split("/").pop(), size: 0 };
      this.context.dialog.updateModal ? this.plugins.image.update_src.call(this, e, t._element, i) : this.plugins.image.create_image.call(this, e, this.plugins.anchor.createAnchor.call(this, t.anchorCtx, !0), t.inputX.value, t.inputY.value, t._align, i, t._altText);
    } catch (i) {
      throw Error('[SUNEDITOR.image.URLRendering.fail] cause : "' + i.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  onRender_link: function(e, t) {
    return t ? (t.setAttribute("data-image-link", "image"), e.setAttribute("data-image-link", t.href), t.appendChild(e), t) : e;
  },
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    this.plugins.resizing._module_setInputSize.call(this, this.context.image, e);
  },
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.image);
  },
  checkFileInfo: function() {
    const e = this.plugins.image, t = this.context.image, i = function(n) {
      e.onModifyMode.call(this, n, null), e.openModify.call(this, !0), t.inputX.value = t._origin_w, t.inputY.value = t._origin_h;
      const l = this.util.getFormatElement(n);
      l && (t._align = l.style.textAlign || l.style.float), this.util.getParentElement(n, this.util.isAnchor) && !t.anchorCtx.linkValue && (t.anchorCtx.linkValue = " "), e.update_image.call(this, !0, !1, !0), e.init.call(this);
    }.bind(this);
    this.plugins.fileManager.checkInfo.call(this, "image", ["img"], this.functions.onImageUpload, i, !0);
  },
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "image", this.functions.onImageUpload);
  },
  create_image: function(e, t, i, n, l, o, s) {
    const a = this.plugins.image, r = this.context.image;
    this.context.resizing._resize_plugin = "image";
    let d = this.util.createElement("IMG");
    d.src = e, d.alt = s, d.setAttribute("data-rotate", "0"), t = a.onRender_link.call(this, d, t), r._resizing && d.setAttribute("data-proportion", r._proportionChecked);
    const u = this.plugins.component.set_cover.call(this, t), f = this.plugins.component.set_container.call(this, u, "se-image-container");
    r._captionChecked && (r._caption = this.plugins.component.create_caption.call(this), r._caption.setAttribute("contenteditable", !1), u.appendChild(r._caption)), r._element = d, r._cover = u, r._container = f, a.applySize.call(this, i, n), a.setAlign.call(this, l, d, u, f), d.onload = a._image_create_onload.bind(this, d, r.svgDefaultSize, f), this.insertComponent(f, !0, !0, !0) && this.plugins.fileManager.setInfo.call(this, "image", d, this.functions.onImageUpload, o, !0), this.context.resizing._resize_plugin = "";
  },
  _image_create_onload: function(e, t, i) {
    if (e.offsetWidth === 0 && this.plugins.image.applySize.call(this, t, ""), this.options.mediaAutoSelect)
      this.selectComponent(e, "image");
    else {
      const n = this.appendFormatTag(i, null);
      n && this.setRange(n, 0, n, 0);
    }
  },
  update_image: function(e, t, i) {
    const n = this.context.image;
    let l = n._element, o = n._cover, s = n._container, a = !1;
    o === null && (a = !0, l = n._element.cloneNode(!0), o = this.plugins.component.set_cover.call(this, l)), s === null ? (o = o.cloneNode(!0), l = o.querySelector("img"), a = !0, s = this.plugins.component.set_container.call(this, o, "se-image-container")) : a && (s.innerHTML = "", s.appendChild(o), n._cover = o, n._element = l, a = !1);
    let r;
    const d = this.util.isNumber(n.inputX.value) ? n.inputX.value + n.sizeUnit : n.inputX.value, u = this.util.isNumber(n.inputY.value) ? n.inputY.value + n.sizeUnit : n.inputY.value;
    /%$/.test(l.style.width) ? r = d !== s.style.width || u !== s.style.height : r = d !== l.style.width || u !== l.style.height, l.alt = n._altText;
    let f = !1;
    n._captionChecked ? n._caption || (n._caption = this.plugins.component.create_caption.call(this), o.appendChild(n._caption), f = !0) : n._caption && (this.util.removeItem(n._caption), n._caption = null, f = !0);
    const h = this.plugins.anchor.createAnchor.call(this, n.anchorCtx, !0);
    if (h)
      n._linkElement !== h ? (n._linkElement = h.cloneNode(!1), o.insertBefore(this.plugins.image.onRender_link.call(this, l, n._linkElement), n._caption), this.util.removeItem(h)) : n._linkElement.setAttribute("data-image-link", "image");
    else if (n._linkElement !== null) {
      const g = l;
      if (g.setAttribute("data-image-link", ""), o.contains(n._linkElement)) {
        const p = g.cloneNode(!0);
        o.removeChild(n._linkElement), o.insertBefore(p, n._caption), n._element = l = p;
      }
    }
    if (a) {
      let g = this.util.isRangeFormatElement(n._element.parentNode) || this.util.isWysiwygDiv(n._element.parentNode) ? n._element : /^A$/i.test(n._element.parentNode.nodeName) ? n._element.parentNode : this.util.getFormatElement(n._element) || n._element;
      if (this.util.isListCell(g)) {
        const p = this.util.getParentElement(n._element, function(b) {
          return b.parentNode === g;
        });
        g.insertBefore(s, p), this.util.removeItem(n._element), this.util.removeEmptyNode(p, null);
      } else if (this.util.isFormatElement(g)) {
        const p = this.util.getParentElement(n._element, function(b) {
          return b.parentNode === g;
        });
        g = this.util.splitElement(g, p), g.parentNode.insertBefore(s, g), this.util.removeItem(n._element), this.util.removeEmptyNode(g, null), g.children.length === 0 && (g.innerHTML = this.util.htmlRemoveWhiteSpace(g.innerHTML));
      } else if (this.util.isFormatElement(g.parentNode)) {
        const p = g.parentNode;
        p.parentNode.insertBefore(s, g.previousSibling ? p.nextElementSibling : p), this.util.removeItem(g);
      } else
        g.parentNode.replaceChild(s, g);
      l = s.querySelector("img"), n._element = l, n._cover = o, n._container = s;
    }
    (f || !n._onlyPercentage && r) && !e && (/\d+/.test(l.style.height) || this.context.resizing._rotateVertical && n._captionChecked) && (/%$/.test(n.inputX.value) || /%$/.test(n.inputY.value) ? this.plugins.resizing.resetTransform.call(this, l) : this.plugins.resizing.setTransformSize.call(this, l, this.util.getNumber(n.inputX.value, 0), this.util.getNumber(n.inputY.value, 0))), n._resizing && (l.setAttribute("data-proportion", n._proportionChecked), r && this.plugins.image.applySize.call(this)), this.plugins.image.setAlign.call(this, null, l, null, null), e && this.plugins.fileManager.setInfo.call(this, "image", l, this.functions.onImageUpload, null, !0), t && this.selectComponent(l, "image"), i || this.history.push(!1);
  },
  update_src: function(e, t, i) {
    t.src = e, this._w.setTimeout(this.plugins.fileManager.setInfo.bind(this, "image", t, this.functions.onImageUpload, i, !0)), this.selectComponent(t, "image");
  },
  onModifyMode: function(e, t) {
    if (!e)
      return;
    const i = this.context.image;
    i._linkElement = i.anchorCtx.linkAnchor = /^A$/i.test(e.parentNode.nodeName) ? e.parentNode : null, i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._caption = this.util.getChildElement(i._cover, "FIGCAPTION"), i._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", this.plugins.anchor.setCtx(i._linkElement, i.anchorCtx), t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let n = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, o;
    n ? (n = n.split(","), l = n[0], o = n[1]) : t && (l = t.w, o = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = o || e.style.height || e.height || "";
  },
  openModify: function(e) {
    const t = this.context.image;
    t.imgUrlFile && (t._v_src._linkValue = t.previewSrc.textContent = t.imgUrlFile.value = t._element.src), t._altText = t.altText.value = t._element.alt, (t.modal.querySelector('input[name="suneditor_image_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_image_radio"][value="none"]')).checked = !0, t._align = t.modal.querySelector('input[name="suneditor_image_radio"]:checked').value, t._captionChecked = t.captionCheckEl.checked = !!t._caption, t._resizing && this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.image), e || this.plugins.dialog.open.call(this, "image", !0);
  },
  applySize: function(e, t) {
    const i = this.context.image;
    return e || (e = i.inputX.value || this.options.imageWidth), t || (t = i.inputY.value || this.options.imageHeight), i._onlyPercentage && !!e || /%$/.test(e) ? (this.plugins.image.setPercentSize.call(this, e, t), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.image.setAutoSize.call(this) : this.plugins.image.setSize.call(this, e, t, !1), !1);
  },
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.image);
  },
  setSize: function(e, t, i, n) {
    const l = this.context.image, o = /^(rw|lw)$/.test(n);
    /^(th|bh)$/.test(n) || (l._element.style.width = this.util.isNumber(e) ? e + l.sizeUnit : e, this.plugins.image.cancelPercentAttr.call(this)), o || (l._element.style.height = this.util.isNumber(t) ? t + l.sizeUnit : /%$/.test(t) ? "" : t), l._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
  },
  setAutoSize: function() {
    const e = this.context.image;
    this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this), e._element.style.maxWidth = "", e._element.style.width = "", e._element.style.height = "", e._cover.style.width = "", e._cover.style.height = "", this.plugins.image.setAlign.call(this, null, null, null, null), e._element.setAttribute("data-percentage", "auto,auto"), this.plugins.resizing._module_saveCurrentSize.call(this, e);
  },
  setOriginSize: function() {
    const e = this.context.image;
    e._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, e._element), this.plugins.image.cancelPercentAttr.call(this);
    const t = (e._element.getAttribute("data-origin") || "").split(","), i = t[0], n = t[1];
    t && (e._onlyPercentage || /%$/.test(i) && (/%$/.test(n) || !/\d/.test(n)) ? this.plugins.image.setPercentSize.call(this, i, n) : this.plugins.image.setSize.call(this, i, n), this.plugins.resizing._module_saveCurrentSize.call(this, e));
  },
  setPercentSize: function(e, t) {
    const i = this.context.image;
    t = !!t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || "";
    const n = /%$/.test(t);
    i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = n ? t : "", i._element.style.width = "100%", i._element.style.height = n ? "" : t, i._element.style.maxWidth = "", i._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing.setCaptionPosition.call(this, i._element), this.plugins.resizing._module_saveCurrentSize.call(this, i);
  },
  cancelPercentAttr: function() {
    const e = this.context.image;
    e._cover.style.width = "", e._cover.style.height = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.image._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.image.setAlign.call(this, null, null, null, null);
  },
  setAlign: function(e, t, i, n) {
    const l = this.context.image;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), n || (n = l._container), e && e !== "none" ? i.style.margin = "auto" : i.style.margin = "0", /%$/.test(t.style.width) && e === "center" ? (n.style.minWidth = "100%", i.style.width = n.style.width) : (n.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : !t.style.width || t.style.width === "auto" ? "" : t.style.width || "100%"), this.util.hasClass(n, "__se__float-" + e) || (this.util.removeClass(n, l._floatClassRegExp), this.util.addClass(n, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  init: function() {
    const e = this.context.image;
    e.imgInputFile && (e.imgInputFile.value = ""), e.imgUrlFile && (e._v_src._linkValue = e.previewSrc.textContent = e.imgUrlFile.value = ""), e.imgInputFile && e.imgUrlFile && (e.imgUrlFile.removeAttribute("disabled"), e.previewSrc.style.textDecoration = ""), e.altText.value = "", e.modal.querySelector('input[name="suneditor_image_radio"][value="none"]').checked = !0, e.captionCheckEl.checked = !1, e._element = null, this.plugins.image.openTab.call(this, "init"), e._resizing && (e.inputX.value = this.options.imageWidth === e._defaultSizeX ? "" : this.options.imageWidth, e.inputY.value = this.options.imageHeight === e._defaultSizeY ? "" : this.options.imageHeight, e.proportion.checked = !0, e._ratio = !1, e._ratioX = 1, e._ratioY = 1), this.plugins.anchor.init.call(this, e.anchorCtx);
  }
}, $n = {
  name: "video",
  display: "dialog",
  add: function(e) {
    e.addModule([Q, ae, Ne, re]);
    const t = e.options, i = e.context, n = i.video = {
      _infoList: [],
      _infoIndex: 0,
      _uploadFileLength: 0,
      focusElement: null,
      sizeUnit: t._videoSizeUnit,
      _align: "none",
      _floatClassRegExp: "__se__float\\-[a-z]+",
      _youtubeQuery: t.youtubeQuery,
      _videoRatio: t.videoRatio * 100 + "%",
      _defaultRatio: t.videoRatio * 100 + "%",
      _linkValue: "",
      _element: null,
      _cover: null,
      _container: null,
      inputX: null,
      inputY: null,
      _element_w: 1,
      _element_h: 1,
      _element_l: 0,
      _element_t: 0,
      _defaultSizeX: "100%",
      _defaultSizeY: t.videoRatio * 100 + "%",
      _origin_w: t.videoWidth === "100%" ? "" : t.videoWidth,
      _origin_h: t.videoHeight === "56.25%" ? "" : t.videoHeight,
      _proportionChecked: !0,
      _resizing: t.videoResizing,
      _resizeDotHide: !t.videoHeightShow,
      _rotation: t.videoRotation,
      _alignHide: !t.videoAlignShow,
      _onlyPercentage: t.videoSizeOnlyPercentage,
      _ratio: !1,
      _ratioX: 1,
      _ratioY: 1,
      _captionShow: !1
    };
    let l = this.setDialog(e);
    n.modal = l, n.videoInputFile = l.querySelector("._se_video_file"), n.videoUrlFile = l.querySelector(".se-input-url"), n.focusElement = n.videoUrlFile || n.videoInputFile, n.preview = l.querySelector(".se-link-preview"), l.querySelector("form").addEventListener("submit", this.submit.bind(e)), n.videoInputFile && l.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(n.videoInputFile, n.videoUrlFile, n.preview)), n.videoInputFile && n.videoUrlFile && n.videoInputFile.addEventListener("change", this._fileInputChange.bind(n)), n.videoUrlFile && n.videoUrlFile.addEventListener("input", this._onLinkPreview.bind(n.preview, n, t.linkProtocol)), n.proportion = {}, n.videoRatioOption = {}, n.inputX = {}, n.inputY = {}, t.videoResizing && (n.proportion = l.querySelector("._se_video_check_proportion"), n.videoRatioOption = l.querySelector(".se-video-ratio"), n.inputX = l.querySelector("._se_video_size_x"), n.inputY = l.querySelector("._se_video_size_y"), n.inputX.value = t.videoWidth, n.inputY.value = t.videoHeight, n.inputX.addEventListener("keyup", this.setInputSize.bind(e, "x")), n.inputY.addEventListener("keyup", this.setInputSize.bind(e, "y")), n.inputX.addEventListener("change", this.setRatio.bind(e)), n.inputY.addEventListener("change", this.setRatio.bind(e)), n.proportion.addEventListener("change", this.setRatio.bind(e)), n.videoRatioOption.addEventListener("change", this.setVideoRatio.bind(e)), l.querySelector(".se-dialog-btn-revert").addEventListener("click", this.sizeRevert.bind(e))), i.dialog.modal.appendChild(l), l = null;
  },
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content", n.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.videoBox.title + '</span></div><div class="se-dialog-body">';
    if (t.videoFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_video_file" type="file" accept="' + t.videoAccept + '"' + (t.videoMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.videoUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.videoBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), t.videoResizing) {
      const o = t.videoRatioList || [{ name: "16:9", value: 0.5625 }, { name: "4:3", value: 0.75 }, { name: "21:9", value: 0.4285 }], s = t.videoRatio, a = t.videoSizeOnlyPercentage, r = a ? ' style="display: none !important;"' : "", d = t.videoHeightShow ? "" : ' style="display: none !important;"', u = t.videoRatioShow ? "" : ' style="display: none !important;"', f = !a && !t.videoHeightShow && !t.videoRatioShow ? ' style="display: none !important;"' : "";
      l += '<div class="se-dialog-form"><div class="se-dialog-size-text"><label class="size-w">' + i.dialogBox.width + '</label><label class="se-dialog-size-x">&nbsp;</label><label class="size-h"' + d + ">" + i.dialogBox.height + '</label><label class="size-h"' + u + ">(" + i.dialogBox.ratio + ')</label></div><input class="se-input-control _se_video_size_x" placeholder="100%"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + '/><label class="se-dialog-size-x"' + f + ">" + (a ? "%" : "x") + '</label><input class="se-input-control _se_video_size_y" placeholder="' + t.videoRatio * 100 + '%"' + (a ? ' type="number" min="1"' : 'type="text"') + (a ? ' max="100"' : "") + d + '/><select class="se-input-select se-video-ratio" title="' + i.dialogBox.ratio + '" aria-label="' + i.dialogBox.ratio + '"' + u + ">", d || (l += '<option value=""> - </option>');
      for (let h = 0, g = o.length; h < g; h++)
        l += '<option value="' + o[h].value + '"' + (s.toString() === o[h].value.toString() ? " selected" : "") + ">" + o[h].name + "</option>";
      l += '</select><button type="button" title="' + i.dialogBox.revertButton + '" aria-label="' + i.dialogBox.revertButton + '" class="se-btn se-dialog-btn-revert" style="float: right;">' + e.icons.revert + '</button></div><div class="se-dialog-form se-dialog-form-footer"' + r + f + '><label><input type="checkbox" class="se-dialog-btn-check _se_video_check_proportion" checked/>&nbsp;' + i.dialogBox.proportion + "</label></div>";
    }
    return l += '</div><div class="se-dialog-footer"><div' + (t.videoAlignShow ? "" : ' style="display: none"') + '><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="none" checked>' + i.dialogBox.basic + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="left">' + i.dialogBox.left + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="center">' + i.dialogBox.center + '</label><label><input type="radio" name="suneditor_video_radio" class="se-dialog-btn-radio" value="right">' + i.dialogBox.right + '</label></div><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
  },
  _fileInputChange: function() {
    this.videoInputFile.value ? (this.videoUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.videoUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    /^<iframe.*\/iframe>$/.test(n) ? (e._linkValue = n, this.textContent = '<IFrame :src=".."></IFrame>') : e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.videoTagAttrs;
    if (!!t)
      for (let i in t)
        !this.util.hasOwn(t, i) || e.setAttribute(i, t[i]);
  },
  createVideoTag: function() {
    const e = this.util.createElement("VIDEO");
    return this.plugins.video._setTagAttrs.call(this, e), e;
  },
  _setIframeAttrs: function(e) {
    e.frameBorder = "0", e.allowFullscreen = !0;
    const t = this.options.videoIframeAttrs;
    if (!!t)
      for (let i in t)
        !this.util.hasOwn(t, i) || e.setAttribute(i, t[i]);
  },
  createIframeTag: function() {
    const e = this.util.createElement("IFRAME");
    return this.plugins.video._setIframeAttrs.call(this, e), e;
  },
  fileTags: ["iframe", "video"],
  select: function(e) {
    this.plugins.video.onModifyMode.call(this, e, this.plugins.resizing.call_controller_resize.call(this, e, "video"));
  },
  destroy: function(e) {
    const t = e || this.context.video._element, i = this.context.video._container, n = t.getAttribute("data-index") * 1;
    let l = i.previousElementSibling || i.nextElementSibling;
    const o = i.parentNode;
    this.util.removeItem(i), this.plugins.video.init.call(this), this.controllersOff(), o !== this.context.element.wysiwyg && this.util.removeItemAllParents(o, function(s) {
      return s.childNodes.length === 0;
    }, null), this.focusEdge(l), this.plugins.fileManager.deleteInfo.call(this, "video", n, this.functions.onVideoUpload), this.history.push(!1);
  },
  on: function(e) {
    const t = this.context.video;
    e ? t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.removeAttribute("multiple") : (t.inputX.value = t._origin_w = this.options.videoWidth === t._defaultSizeX ? "" : this.options.videoWidth, t.inputY.value = t._origin_h = this.options.videoHeight === t._defaultSizeY ? "" : this.options.videoHeight, t.proportion.disabled = !0, t.videoInputFile && this.options.videoMultipleFile && t.videoInputFile.setAttribute("multiple", "multiple")), t._resizing && this.plugins.video.setVideoRatioSelect.call(this, t._origin_h || t._defaultRatio);
  },
  open: function() {
    this.plugins.dialog.open.call(this, "video", this.currentControllerName === "video");
  },
  setVideoRatio: function(e) {
    const t = this.context.video, i = e.target.options[e.target.selectedIndex].value;
    t._defaultSizeY = t._videoRatio = i ? i * 100 + "%" : t._defaultSizeY, t.inputY.placeholder = i ? i * 100 + "%" : "", t.inputY.value = "";
  },
  setInputSize: function(e, t) {
    if (t && t.keyCode === 32) {
      t.preventDefault();
      return;
    }
    const i = this.context.video;
    this.plugins.resizing._module_setInputSize.call(this, i, e), e === "y" && this.plugins.video.setVideoRatioSelect.call(this, t.target.value || i._defaultRatio);
  },
  setRatio: function() {
    this.plugins.resizing._module_setRatio.call(this, this.context.video);
  },
  submit: function(e) {
    const t = this.context.video, i = this.plugins.video;
    e.preventDefault(), e.stopPropagation(), t._align = t.modal.querySelector('input[name="suneditor_video_radio"]:checked').value;
    try {
      t.videoInputFile && t.videoInputFile.files.length > 0 ? (this.showLoading(), i.submitAction.call(this, this.context.video.videoInputFile.files)) : t.videoUrlFile && t._linkValue.length > 0 && (this.showLoading(), i.setup_url.call(this, t._linkValue));
    } catch (n) {
      throw this.closeLoading(), Error('[SUNEDITOR.video.submit.fail] cause : "' + n.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, i = [];
    for (let s = 0, a = e.length; s < a; s++)
      /video/i.test(e[s].type) && (i.push(e[s]), t += e[s].size);
    const n = this.options.videoUploadSizeLimit;
    if (n > 0) {
      let s = 0;
      const a = this.context.video._infoList;
      for (let r = 0, d = a.length; r < d; r++)
        s += a[r].size * 1;
      if (t + s > n) {
        this.closeLoading();
        const r = "[SUNEDITOR.videoUpload.fail] Size of uploadable total videos: " + n / 1e3 + "KB";
        (typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(r, { limitSize: n, currentSize: s, uploadSize: t }, this)) && this.functions.noticeOpen(r);
        return;
      }
    }
    const l = this.context.video;
    l._uploadFileLength = i.length;
    const o = {
      inputWidth: l.inputX.value,
      inputHeight: l.inputY.value,
      align: l._align,
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onVideoUploadBefore == "function") {
      const s = this.functions.onVideoUploadBefore(i, o, this, function(a) {
        a && this._w.Array.isArray(a.result) ? this.plugins.video.register.call(this, o, a) : this.plugins.video.upload.call(this, o, a);
      }.bind(this));
      if (typeof s > "u")
        return;
      if (!s) {
        this.closeLoading();
        return;
      }
      typeof s == "object" && s.length > 0 && (i = s);
    }
    this.plugins.video.upload.call(this, o, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onVideoUploadError != "function" || this.functions.onVideoUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.video.error] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.video.error.call(this, t, null);
      return;
    }
    const i = this.options.videoUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length;
    if (typeof i == "string" && i.length > 0) {
      const l = new FormData();
      for (let o = 0; o < n; o++)
        l.append("file-" + o, t[o]);
      this.plugins.fileManager.upload.call(this, i, this.options.videoUploadHeader, l, this.plugins.video.callBack_videoUpload.bind(this, e), this.functions.onVideoUploadError);
    } else
      throw Error('[SUNEDITOR.videoUpload.fail] cause : There is no "videoUploadUrl" option.');
  },
  callBack_videoUpload: function(e, t) {
    if (typeof this.functions.videoUploadHandler == "function")
      this.functions.videoUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.video.error.call(this, i.errorMessage, i) : this.plugins.video.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result, n = this.plugins.video.createVideoTag.call(this);
    for (let l = 0, o = i.length, s; l < o; l++)
      s = { name: i[l].name, size: i[l].size }, this.plugins.video.create_video.call(this, e.isUpdate ? e.element : n.cloneNode(!1), i[l].url, e.inputWidth, e.inputHeight, e.align, s, e.isUpdate);
    this.closeLoading();
  },
  setup_url: function(e) {
    try {
      const t = this.context.video;
      if (e || (e = t._linkValue), !e || /^<iframe.*\/iframe>$/.test(e) && (e = new this._w.DOMParser().parseFromString(e, "text/html").querySelector("iframe").src, e.length === 0))
        return !1;
      if (/youtu\.?be/.test(e)) {
        if (/^http/.test(e) || (e = "https://" + e), e = e.replace("watch?v=", ""), /^\/\/.+\/embed\//.test(e) || (e = e.replace(e.match(/\/\/.+\//)[0], "//www.youtube.com/embed/").replace("&", "?&")), t._youtubeQuery.length > 0)
          if (/\?/.test(e)) {
            const i = e.split("?");
            e = i[0] + "?" + t._youtubeQuery + "&" + i[1];
          } else
            e += "?" + t._youtubeQuery;
      } else
        /vimeo\.com/.test(e) && (e.endsWith("/") && (e = e.slice(0, -1)), e = "https://player.vimeo.com/video/" + e.slice(e.lastIndexOf("/") + 1));
      this.plugins.video.create_video.call(this, this.plugins.video[!/youtu\.?be/.test(e) && !/vimeo\.com/.test(e) ? "createVideoTag" : "createIframeTag"].call(this), e, t.inputX.value, t.inputY.value, t._align, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.video.upload.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_video: function(e, t, i, n, l, o, s) {
    this.context.resizing._resize_plugin = "video";
    const a = this.context.video;
    let r = null, d = null, u = !1;
    if (s) {
      if (e = a._element, e.src !== t) {
        u = !0;
        const b = /youtu\.?be/.test(t), m = /vimeo\.com/.test(t);
        if ((b || m) && !/^iframe$/i.test(e.nodeName)) {
          const c = this.plugins.video.createIframeTag.call(this);
          c.src = t, e.parentNode.replaceChild(c, e), a._element = e = c;
        } else if (!b && !m && !/^videoo$/i.test(e.nodeName)) {
          const c = this.plugins.video.createVideoTag.call(this);
          c.src = t, e.parentNode.replaceChild(c, e), a._element = e = c;
        } else
          e.src = t;
      }
      d = a._container, r = this.util.getParentElement(e, "FIGURE");
    } else
      u = !0, e.src = t, a._element = e, r = this.plugins.component.set_cover.call(this, e), d = this.plugins.component.set_container.call(this, r, "se-video-container");
    a._cover = r, a._container = d;
    const f = this.plugins.resizing._module_getSizeX.call(this, a) !== (i || a._defaultSizeX) || this.plugins.resizing._module_getSizeY.call(this, a) !== (n || a._videoRatio), h = !s || f;
    a._resizing && (this.context.video._proportionChecked = a.proportion.checked, e.setAttribute("data-proportion", a._proportionChecked));
    let g = !1;
    h && (g = this.plugins.video.applySize.call(this)), g && l === "center" || this.plugins.video.setAlign.call(this, null, e, r, d);
    let p = !0;
    if (s)
      a._resizing && this.context.resizing._rotateVertical && h && this.plugins.resizing.setTransformSize.call(this, e, null, null);
    else if (p = this.insertComponent(d, !1, !0, !this.options.mediaAutoSelect), !this.options.mediaAutoSelect) {
      const b = this.appendFormatTag(d, null);
      b && this.setRange(b, 0, b, 0);
    }
    p && (u && this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, o, !0), s && (this.selectComponent(e, "video"), this.history.push(!1))), this.context.resizing._resize_plugin = "";
  },
  _update_videoCover: function(e) {
    if (!e)
      return;
    const t = this.context.video;
    /^video$/i.test(e.nodeName) ? this.plugins.video._setTagAttrs.call(this, e) : this.plugins.video._setIframeAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const n = e;
    t._element = e = e.cloneNode(!0);
    const l = t._cover = this.plugins.component.set_cover.call(this, e), o = t._container = this.plugins.component.set_container.call(this, l, "se-video-container");
    try {
      const s = i.querySelector("figcaption");
      let a = null;
      s && (a = this.util.createElement("DIV"), a.innerHTML = s.innerHTML, this.util.removeItem(s));
      const r = (e.getAttribute("data-size") || e.getAttribute("data-origin") || "").split(",");
      this.plugins.video.applySize.call(this, r[0] || n.style.width || n.width || "", r[1] || n.style.height || n.height || "");
      const d = this.util.getFormatElement(n);
      if (d && (t._align = d.style.textAlign || d.style.float), this.plugins.video.setAlign.call(this, null, e, l, o), this.util.isListCell(i)) {
        const u = this.util.getParentElement(n, function(f) {
          return f.parentNode === i;
        });
        i.insertBefore(o, u), this.util.removeItem(n), this.util.removeEmptyNode(u, null);
      } else if (this.util.isFormatElement(i)) {
        const u = this.util.getParentElement(n, function(f) {
          return f.parentNode === i;
        });
        i = this.util.splitElement(i, u), i.parentNode.insertBefore(o, i), this.util.removeItem(n), this.util.removeEmptyNode(i, null), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(o, i);
      a && i.parentNode.insertBefore(a, o.nextElementSibling);
    } catch (s) {
      console.warn("[SUNEDITOR.video.error] Maybe the video tag is nested.", s);
    }
    this.plugins.fileManager.setInfo.call(this, "video", e, this.functions.onVideoUpload, null, !0), this.plugins.video.init.call(this);
  },
  onModifyMode: function(e, t) {
    const i = this.context.video;
    i._element = e, i._cover = this.util.getParentElement(e, "FIGURE"), i._container = this.util.getParentElement(e, this.util.isMediaComponent), i._align = e.style.float || e.getAttribute("data-align") || "none", e.style.float = "", t && (i._element_w = t.w, i._element_h = t.h, i._element_t = t.t, i._element_l = t.l);
    let n = i._element.getAttribute("data-size") || i._element.getAttribute("data-origin"), l, o;
    n ? (n = n.split(","), l = n[0], o = n[1]) : t && (l = t.w, o = t.h), i._origin_w = l || e.style.width || e.width || "", i._origin_h = o || e.style.height || e.height || "";
  },
  openModify: function(e) {
    const t = this.context.video;
    if (t.videoUrlFile && (t._linkValue = t.preview.textContent = t.videoUrlFile.value = t._element.src || (t._element.querySelector("source") || "").src || ""), (t.modal.querySelector('input[name="suneditor_video_radio"][value="' + t._align + '"]') || t.modal.querySelector('input[name="suneditor_video_radio"][value="none"]')).checked = !0, t._resizing) {
      this.plugins.resizing._module_setModifyInputSize.call(this, t, this.plugins.video);
      const i = t._videoRatio = this.plugins.resizing._module_getSizeY.call(this, t);
      this.plugins.video.setVideoRatioSelect.call(this, i) || (t.inputY.value = t._onlyPercentage ? this.util.getNumber(i, 2) : i);
    }
    e || this.plugins.dialog.open.call(this, "video", !0);
  },
  setVideoRatioSelect: function(e) {
    let t = !1;
    const i = this.context.video, n = i.videoRatioOption.options;
    /%$/.test(e) || i._onlyPercentage ? e = this.util.getNumber(e, 2) / 100 + "" : (!this.util.isNumber(e) || e * 1 >= 1) && (e = ""), i.inputY.placeholder = "";
    for (let l = 0, o = n.length; l < o; l++)
      n[l].value === e ? (t = n[l].selected = !0, i.inputY.placeholder = e ? e * 100 + "%" : "") : n[l].selected = !1;
    return t;
  },
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "video", ["iframe", "video"], this.functions.onVideoUpload, this.plugins.video._update_videoCover.bind(this), !0);
  },
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "video", this.functions.onVideoUpload);
  },
  applySize: function(e, t) {
    const i = this.context.video;
    return e || (e = i.inputX.value || this.options.videoWidth), t || (t = i.inputY.value || this.options.videoHeight), i._onlyPercentage || /%$/.test(e) || !e ? (this.plugins.video.setPercentSize.call(this, e || "100%", t || (/%$/.test(i._videoRatio) ? i._videoRatio : i._defaultRatio)), !0) : ((!e || e === "auto") && (!t || t === "auto") ? this.plugins.video.setAutoSize.call(this) : this.plugins.video.setSize.call(this, e, t || i._videoRatio || i._defaultRatio, !1), !1);
  },
  sizeRevert: function() {
    this.plugins.resizing._module_sizeRevert.call(this, this.context.video);
  },
  setSize: function(e, t, i, n) {
    const l = this.context.video, o = /^(rw|lw)$/.test(n), s = /^(th|bh)$/.test(n);
    s || (e = this.util.getNumber(e, 0)), o || (t = this.util.isNumber(t) ? t + l.sizeUnit : t || ""), e = e ? e + l.sizeUnit : "", s || (l._element.style.width = e), o || (l._cover.style.paddingBottom = l._cover.style.height = t), !s && !/%$/.test(e) && (l._cover.style.width = e, l._container.style.width = ""), !o && !/%$/.test(t) ? l._element.style.height = t : l._element.style.height = "", i || l._element.removeAttribute("data-percentage"), this.plugins.resizing._module_saveCurrentSize.call(this, l);
  },
  setAutoSize: function() {
    this.plugins.video.setPercentSize.call(this, 100, this.context.video._defaultRatio);
  },
  setOriginSize: function(e) {
    const t = this.context.video;
    t._element.removeAttribute("data-percentage"), this.plugins.resizing.resetTransform.call(this, t._element), this.plugins.video.cancelPercentAttr.call(this);
    const i = ((e ? t._element.getAttribute("data-size") : "") || t._element.getAttribute("data-origin") || "").split(",");
    if (i) {
      const n = i[0], l = i[1];
      t._onlyPercentage || /%$/.test(n) && (/%$/.test(l) || !/\d/.test(l)) ? this.plugins.video.setPercentSize.call(this, n, l) : this.plugins.video.setSize.call(this, n, l), this.plugins.resizing._module_saveCurrentSize.call(this, t);
    }
  },
  setPercentSize: function(e, t) {
    const i = this.context.video;
    t = !!t && !/%$/.test(t) && !this.util.getNumber(t, 0) ? this.util.isNumber(t) ? t + "%" : t : this.util.isNumber(t) ? t + i.sizeUnit : t || i._defaultRatio, i._container.style.width = this.util.isNumber(e) ? e + "%" : e, i._container.style.height = "", i._cover.style.width = "100%", i._cover.style.height = t, i._cover.style.paddingBottom = t, i._element.style.width = "100%", i._element.style.height = "100%", i._element.style.maxWidth = "", i._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null), i._element.setAttribute("data-percentage", e + "," + t), this.plugins.resizing._module_saveCurrentSize.call(this, i);
  },
  cancelPercentAttr: function() {
    const e = this.context.video;
    e._cover.style.width = "", e._cover.style.height = "", e._cover.style.paddingBottom = "", e._container.style.width = "", e._container.style.height = "", this.util.removeClass(e._container, this.context.video._floatClassRegExp), this.util.addClass(e._container, "__se__float-" + e._align), e._align === "center" && this.plugins.video.setAlign.call(this, null, null, null, null);
  },
  setAlign: function(e, t, i, n) {
    const l = this.context.video;
    e || (e = l._align), t || (t = l._element), i || (i = l._cover), n || (n = l._container), e && e !== "none" ? i.style.margin = "auto" : i.style.margin = "0", /%$/.test(t.style.width) && e === "center" ? (n.style.minWidth = "100%", i.style.width = n.style.width, i.style.height = i.style.height, i.style.paddingBottom = /%$/.test(i.style.height) ? this.util.getNumber(this.util.getNumber(i.style.height, 2) / 100 * this.util.getNumber(i.style.width, 2), 2) + "%" : i.style.height) : (n.style.minWidth = "", i.style.width = this.context.resizing._rotateVertical ? t.style.height || t.offsetHeight : t.style.width || "100%", i.style.paddingBottom = i.style.height), this.util.hasClass(n, "__se__float-" + e) || (this.util.removeClass(n, l._floatClassRegExp), this.util.addClass(n, "__se__float-" + e)), t.setAttribute("data-align", e);
  },
  init: function() {
    const e = this.context.video;
    e.videoInputFile && (e.videoInputFile.value = ""), e.videoUrlFile && (e._linkValue = e.preview.textContent = e.videoUrlFile.value = ""), e.videoInputFile && e.videoUrlFile && (e.videoUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._origin_w = this.options.videoWidth, e._origin_h = this.options.videoHeight, e.modal.querySelector('input[name="suneditor_video_radio"][value="none"]').checked = !0, e._resizing && (e.inputX.value = this.options.videoWidth === e._defaultSizeX ? "" : this.options.videoWidth, e.inputY.value = this.options.videoHeight === e._defaultSizeY ? "" : this.options.videoHeight, e.proportion.checked = !0, e.proportion.disabled = !0, this.plugins.video.setVideoRatioSelect.call(this, e._defaultRatio));
  }
}, Gn = {
  name: "audio",
  display: "dialog",
  add: function(e) {
    e.addModule([Q, ae, re]);
    const t = e.context, i = t.audio = {
      _infoList: [],
      _infoIndex: 0,
      _uploadFileLength: 0,
      focusElement: null,
      targetSelect: null,
      _origin_w: e.options.audioWidth,
      _origin_h: e.options.audioHeight,
      _linkValue: "",
      _element: null,
      _cover: null,
      _container: null
    };
    let n = this.setDialog(e);
    i.modal = n, i.audioInputFile = n.querySelector("._se_audio_files"), i.audioUrlFile = n.querySelector(".se-input-url"), i.focusElement = i.audioInputFile || i.audioUrlFile, i.preview = n.querySelector(".se-link-preview");
    let l = this.setController(e);
    i.controller = l, n.querySelector("form").addEventListener("submit", this.submit.bind(e)), i.audioInputFile && n.querySelector(".se-dialog-files-edge-button").addEventListener("click", this._removeSelectedFiles.bind(i.audioInputFile, i.audioUrlFile, i.preview)), i.audioInputFile && i.audioUrlFile && i.audioInputFile.addEventListener("change", this._fileInputChange.bind(i)), l.addEventListener("click", this.onClick_controller.bind(e)), i.audioUrlFile && i.audioUrlFile.addEventListener("input", this._onLinkPreview.bind(i.preview, i, e.options.linkProtocol)), t.dialog.modal.appendChild(n), t.element.relative.appendChild(l), n = null, l = null;
  },
  setDialog: function(e) {
    const t = e.options, i = e.lang, n = e.util.createElement("DIV");
    n.className = "se-dialog-content", n.style.display = "none";
    let l = '<form method="post" enctype="multipart/form-data"><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + i.dialogBox.close + '" aria-label="' + i.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + i.dialogBox.audioBox.title + '</span></div><div class="se-dialog-body">';
    return t.audioFileInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.file + '</label><div class="se-dialog-form-files"><input class="se-input-form _se_audio_files" type="file" accept="' + t.audioAccept + '"' + (t.audioMultipleFile ? ' multiple="multiple"' : "") + '/><button type="button" data-command="filesRemove" class="se-btn se-dialog-files-edge-button se-file-remove" title="' + i.controller.remove + '" aria-label="' + i.controller.remove + '">' + e.icons.cancel + "</button></div></div>"), t.audioUrlInput && (l += '<div class="se-dialog-form"><label>' + i.dialogBox.audioBox.url + '</label><input class="se-input-form se-input-url" type="text" /><pre class="se-link-preview"></pre></div>'), l += '</div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + i.dialogBox.submitButton + '" aria-label="' + i.dialogBox.submitButton + '"><span>' + i.dialogBox.submitButton + "</span></button></div></form>", n.innerHTML = l, n;
  },
  setController: function(e) {
    const t = e.lang, i = e.icons, n = e.util.createElement("DIV");
    return n.className = "se-controller se-controller-link", n.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-tooltip">' + i.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-tooltip">' + i.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", n;
  },
  _fileInputChange: function() {
    this.audioInputFile.value ? (this.audioUrlFile.setAttribute("disabled", !0), this.preview.style.textDecoration = "line-through") : (this.audioUrlFile.removeAttribute("disabled"), this.preview.style.textDecoration = "");
  },
  _removeSelectedFiles: function(e, t) {
    this.value = "", e && (e.removeAttribute("disabled"), t.style.textDecoration = "");
  },
  _createAudioTag: function() {
    const e = this.util.createElement("AUDIO");
    this.plugins.audio._setTagAttrs.call(this, e);
    const t = this.context.audio._origin_w, i = this.context.audio._origin_h;
    return e.setAttribute("origin-size", t + "," + i), e.style.cssText = (t ? "width:" + t + "; " : "") + (i ? "height:" + i + ";" : ""), e;
  },
  _setTagAttrs: function(e) {
    e.setAttribute("controls", !0);
    const t = this.options.audioTagAttrs;
    if (!!t)
      for (let i in t)
        !this.util.hasOwn(t, i) || e.setAttribute(i, t[i]);
  },
  _onLinkPreview: function(e, t, i) {
    const n = i.target.value.trim();
    e._linkValue = this.textContent = n ? t && n.indexOf("://") === -1 && n.indexOf("#") !== 0 ? t + n : n.indexOf("://") === -1 ? "/" + n : n : "";
  },
  fileTags: ["audio"],
  select: function(e) {
    this.plugins.audio.onModifyMode.call(this, e);
  },
  destroy: function(e) {
    e = e || this.context.audio._element;
    const t = this.util.getParentElement(e, this.util.isComponent) || e, i = e.getAttribute("data-index") * 1, n = t.previousElementSibling || t.nextElementSibling, l = t.parentNode;
    this.util.removeItem(t), this.plugins.audio.init.call(this), this.controllersOff(), l !== this.context.element.wysiwyg && this.util.removeItemAllParents(l, function(o) {
      return o.childNodes.length === 0;
    }, null), this.focusEdge(n), this.plugins.fileManager.deleteInfo.call(this, "audio", i, this.functions.onAudioUpload), this.history.push(!1);
  },
  checkFileInfo: function() {
    this.plugins.fileManager.checkInfo.call(this, "audio", ["audio"], this.functions.onAudioUpload, this.plugins.audio.updateCover.bind(this), !1);
  },
  resetFileInfo: function() {
    this.plugins.fileManager.resetInfo.call(this, "audio", this.functions.onAudioUpload);
  },
  on: function(e) {
    const t = this.context.audio;
    e ? t._element ? (this.context.dialog.updateModal = !0, t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src, t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple")) : t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.removeAttribute("multiple") : (this.plugins.audio.init.call(this), t.audioInputFile && this.options.audioMultipleFile && t.audioInputFile.setAttribute("multiple", "multiple"));
  },
  open: function() {
    this.plugins.dialog.open.call(this, "audio", this.currentControllerName === "audio");
  },
  submit: function(e) {
    const t = this.context.audio;
    e.preventDefault(), e.stopPropagation();
    try {
      t.audioInputFile && t.audioInputFile.files.length > 0 ? (this.showLoading(), this.plugins.audio.submitAction.call(this, t.audioInputFile.files)) : t.audioUrlFile && t._linkValue.length > 0 && (this.showLoading(), this.plugins.audio.setupUrl.call(this, t._linkValue));
    } catch (i) {
      throw this.closeLoading(), Error('[SUNEDITOR.audio.submit.fail] cause : "' + i.message + '"');
    } finally {
      this.plugins.dialog.close.call(this);
    }
    return !1;
  },
  submitAction: function(e) {
    if (e.length === 0)
      return;
    let t = 0, i = [];
    for (let s = 0, a = e.length; s < a; s++)
      /audio/i.test(e[s].type) && (i.push(e[s]), t += e[s].size);
    const n = this.options.audioUploadSizeLimit;
    if (n > 0) {
      let s = 0;
      const a = this.context.audio._infoList;
      for (let r = 0, d = a.length; r < d; r++)
        s += a[r].size * 1;
      if (t + s > n) {
        this.closeLoading();
        const r = "[SUNEDITOR.audioUpload.fail] Size of uploadable total audios: " + n / 1e3 + "KB";
        (typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(r, { limitSize: n, currentSize: s, uploadSize: t }, this)) && this.functions.noticeOpen(r);
        return;
      }
    }
    const l = this.context.audio;
    l._uploadFileLength = i.length;
    const o = {
      isUpdate: this.context.dialog.updateModal,
      element: l._element
    };
    if (typeof this.functions.onAudioUploadBefore == "function") {
      const s = this.functions.onAudioUploadBefore(i, o, this, function(a) {
        a && this._w.Array.isArray(a.result) ? this.plugins.audio.register.call(this, o, a) : this.plugins.audio.upload.call(this, o, a);
      }.bind(this));
      if (typeof s > "u")
        return;
      if (!s) {
        this.closeLoading();
        return;
      }
      typeof s == "object" && s.length > 0 && (i = s);
    }
    this.plugins.audio.upload.call(this, o, i);
  },
  error: function(e, t) {
    if (this.closeLoading(), typeof this.functions.onAudioUploadError != "function" || this.functions.onAudioUploadError(e, t, this))
      throw this.functions.noticeOpen(e), Error("[SUNEDITOR.plugin.audio.exception] response: " + e);
  },
  upload: function(e, t) {
    if (!t) {
      this.closeLoading();
      return;
    }
    if (typeof t == "string") {
      this.plugins.audio.error.call(this, t, null);
      return;
    }
    const i = this.options.audioUploadUrl, n = this.context.dialog.updateModal ? 1 : t.length, l = new FormData();
    for (let o = 0; o < n; o++)
      l.append("file-" + o, t[o]);
    this.plugins.fileManager.upload.call(this, i, this.options.audioUploadHeader, l, this.plugins.audio.callBack_upload.bind(this, e), this.functions.onAudioUploadError);
  },
  callBack_upload: function(e, t) {
    if (typeof this.functions.audioUploadHandler == "function")
      this.functions.audioUploadHandler(t, e, this);
    else {
      const i = JSON.parse(t.responseText);
      i.errorMessage ? this.plugins.audio.error.call(this, i.errorMessage, i) : this.plugins.audio.register.call(this, e, i);
    }
  },
  register: function(e, t) {
    const i = t.result;
    for (let n = 0, l = i.length, o, s; n < l; n++)
      e.isUpdate ? s = e.element : s = this.plugins.audio._createAudioTag.call(this), o = { name: i[n].name, size: i[n].size }, this.plugins.audio.create_audio.call(this, s, i[n].url, o, e.isUpdate);
    this.closeLoading();
  },
  setupUrl: function(e) {
    try {
      if (e.length === 0)
        return !1;
      this.plugins.audio.create_audio.call(this, this.plugins.audio._createAudioTag.call(this), e, null, this.context.dialog.updateModal);
    } catch (t) {
      throw Error('[SUNEDITOR.audio.audio.fail] cause : "' + t.message + '"');
    } finally {
      this.closeLoading();
    }
  },
  create_audio: function(e, t, i, n) {
    const l = this.context.audio;
    if (n)
      if (l._element && (e = l._element), e && e.src !== t)
        e.src = t, this.selectComponent(e, "audio");
      else {
        this.selectComponent(e, "audio");
        return;
      }
    else {
      e.src = t;
      const o = this.plugins.component.set_cover.call(this, e), s = this.plugins.component.set_container.call(this, o, "");
      if (!this.insertComponent(s, !1, !0, !this.options.mediaAutoSelect)) {
        this.focus();
        return;
      }
      if (!this.options.mediaAutoSelect) {
        const a = this.appendFormatTag(s, null);
        a && this.setRange(a, 0, a, 0);
      }
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, i, !1), n && this.history.push(!1);
  },
  updateCover: function(e) {
    const t = this.context.audio;
    this.plugins.audio._setTagAttrs.call(this, e);
    let i = this.util.isRangeFormatElement(e.parentNode) || this.util.isWysiwygDiv(e.parentNode) ? e : this.util.getFormatElement(e) || e;
    const n = e;
    t._element = e = e.cloneNode(!1);
    const l = this.plugins.component.set_cover.call(this, e), o = this.plugins.component.set_container.call(this, l, "se-audio-container");
    try {
      if (this.util.isListCell(i)) {
        const s = this.util.getParentElement(n, function(a) {
          return a.parentNode === i;
        });
        i.insertBefore(o, s), this.util.removeItem(n), this.util.removeEmptyNode(s, null);
      } else if (this.util.isFormatElement(i)) {
        const s = this.util.getParentElement(n, function(a) {
          return a.parentNode === i;
        });
        i = this.util.splitElement(i, s), i.parentNode.insertBefore(o, i), this.util.removeItem(n), this.util.removeEmptyNode(i, null), i.children.length === 0 && (i.innerHTML = this.util.htmlRemoveWhiteSpace(i.innerHTML));
      } else
        i.parentNode.replaceChild(o, i);
    } catch (s) {
      console.warn("[SUNEDITOR.audio.error] Maybe the audio tag is nested.", s);
    }
    this.plugins.fileManager.setInfo.call(this, "audio", e, this.functions.onAudioUpload, null, !1), this.plugins.audio.init.call(this);
  },
  onModifyMode: function(e) {
    const t = this.context.audio;
    this.setControllerPosition(t.controller, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t.controller, e, this.plugins.audio.onControllerOff.bind(this, e), "audio"), this.util.addClass(e, "active"), t._element = e, t._cover = this.util.getParentElement(e, "FIGURE"), t._container = this.util.getParentElement(e, this.util.isComponent);
  },
  openModify: function(e) {
    if (this.context.audio.audioUrlFile) {
      const t = this.context.audio;
      t._linkValue = t.preview.textContent = t.audioUrlFile.value = t._element.src;
    }
    e || this.plugins.dialog.open.call(this, "audio", !0);
  },
  onClick_controller: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command");
    !t || (e.preventDefault(), /update/.test(t) ? this.plugins.audio.openModify.call(this, !1) : this.plugins.audio.destroy.call(this, this.context.audio._element), this.controllersOff());
  },
  onControllerOff: function(e) {
    this.util.removeClass(e, "active"), this.context.audio.controller.style.display = "none";
  },
  init: function() {
    if (this.context.dialog.updateModal)
      return;
    const e = this.context.audio;
    e.audioInputFile && (e.audioInputFile.value = ""), e.audioUrlFile && (e._linkValue = e.preview.textContent = e.audioUrlFile.value = ""), e.audioInputFile && e.audioUrlFile && (e.audioUrlFile.removeAttribute("disabled"), e.preview.style.textDecoration = ""), e._element = null;
  }
}, qn = {
  name: "math",
  display: "dialog",
  add: function(e) {
    e.addModule([Q]);
    const t = e.context;
    t.math = {
      focusElement: null,
      previewElement: null,
      fontSizeElement: null,
      defaultFontSize: "",
      _mathExp: null
    };
    let i = this.setDialog(e);
    t.math.modal = i, t.math.focusElement = i.querySelector(".se-math-exp"), t.math.previewElement = i.querySelector(".se-math-preview"), t.math.fontSizeElement = i.querySelector(".se-math-size"), t.math.focusElement.addEventListener(e.util.isIE ? "textinput" : "input", this._renderMathExp.bind(e, t.math), !1), t.math.fontSizeElement.addEventListener("change", function(l) {
      this.fontSize = l.target.value;
    }.bind(t.math.previewElement.style), !1);
    let n = this.setController_MathButton(e);
    t.math.mathController = n, t.math._mathExp = null, i.querySelector("form").addEventListener("submit", this.submit.bind(e), !1), n.addEventListener("click", this.onClick_mathController.bind(e)), t.math.previewElement.style.fontSize = t.math.defaultFontSize, t.dialog.modal.appendChild(i), t.element.relative.appendChild(n), i = null, n = null;
  },
  setDialog: function(e) {
    const t = e.lang, i = e.util.createElement("DIV"), n = e.options.mathFontSize;
    let l = n[0].value;
    i.className = "se-dialog-content", i.style.display = "none";
    let o = '<form><div class="se-dialog-header"><button type="button" data-command="close" class="se-btn se-dialog-close" title="' + t.dialogBox.close + '" aria-label="' + t.dialogBox.close + '">' + e.icons.cancel + '</button><span class="se-modal-title">' + t.dialogBox.mathBox.title + '</span></div><div class="se-dialog-body"><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.inputLabel + ' (<a href="https://katex.org/docs/supported.html" target="_blank">KaTeX</a>)</label><textarea class="se-input-form se-math-exp" type="text"></textarea></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.fontSizeLabel + '</label><select class="se-input-select se-math-size">';
    for (let s = 0, a = n.length, r; s < a; s++)
      r = n[s], r.default && (l = r.value), o += '<option value="' + r.value + '"' + (r.default ? " selected" : "") + ">" + r.text + "</option>";
    return o += '</select></div><div class="se-dialog-form"><label>' + t.dialogBox.mathBox.previewLabel + '</label><p class="se-math-preview"></p></div></div><div class="se-dialog-footer"><button type="submit" class="se-btn-primary" title="' + t.dialogBox.submitButton + '" aria-label="' + t.dialogBox.submitButton + '"><span>' + t.dialogBox.submitButton + "</span></button></div></form>", e.context.math.defaultFontSize = l, i.innerHTML = o, i;
  },
  setController_MathButton: function(e) {
    const t = e.lang, i = e.util.createElement("DIV");
    return i.className = "se-controller se-controller-link", i.innerHTML = '<div class="se-arrow se-arrow-up"></div><div class="link-content"><div class="se-btn-group"><button type="button" data-command="update" tabindex="-1" class="se-btn se-tooltip">' + e.icons.edit + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.edit + '</span></span></button><button type="button" data-command="delete" tabindex="-1" class="se-btn se-tooltip">' + e.icons.delete + '<span class="se-tooltip-inner"><span class="se-tooltip-text">' + t.controller.remove + "</span></span></button></div></div>", i;
  },
  open: function() {
    this.plugins.dialog.open.call(this, "math", this.currentControllerName === "math");
  },
  managedTags: function() {
    return {
      className: "katex",
      method: function(e) {
        if (!e.getAttribute("data-exp") || !this.options.katex)
          return;
        const t = this._d.createRange().createContextualFragment(this.plugins.math._renderer.call(this, this.util.HTMLDecoder(e.getAttribute("data-exp"))));
        e.innerHTML = t.querySelector(".katex").innerHTML;
      }
    };
  },
  _renderer: function(e) {
    let t = "";
    try {
      t = this.options.katex.src.renderToString(e, { throwOnError: !0, displayMode: !0 });
    } catch (i) {
      t = '<span class="se-math-katex-error">' + i + "</span>", console.warn("[SUNEDITOR.math.Katex.error] ", i);
    }
    return t;
  },
  _renderMathExp: function(e, t) {
    e.previewElement.innerHTML = this.plugins.math._renderer.call(this, t.target.value);
  },
  submit: function(e) {
    this.showLoading(), e.preventDefault(), e.stopPropagation();
    const t = function() {
      if (this.context.math.focusElement.value.trim().length === 0)
        return !1;
      const i = this.context.math, n = i.focusElement.value, l = i.previewElement.querySelector(".katex");
      if (!l)
        return !1;
      if (l.className = "__se__katex " + l.className, l.setAttribute("contenteditable", !1), l.setAttribute("data-exp", this.util.HTMLEncoder(n)), l.setAttribute("data-font-size", i.fontSizeElement.value), l.style.fontSize = i.fontSizeElement.value, this.context.dialog.updateModal) {
        const o = this.util.getParentElement(i._mathExp, ".katex");
        o.parentNode.replaceChild(l, o), this.setRange(l, 0, l, 1);
      } else {
        const o = this.getSelectedElements();
        if (o.length > 1) {
          const a = this.util.createElement(o[0].nodeName);
          if (a.appendChild(l), !this.insertNode(a, null, !0))
            return !1;
        } else if (!this.insertNode(l, null, !0))
          return !1;
        const s = this.util.createTextNode(this.util.zeroWidthSpace);
        l.parentNode.insertBefore(s, l.nextSibling), this.setRange(l, 0, l, 1);
      }
      return i.focusElement.value = "", i.fontSizeElement.value = "1em", i.previewElement.style.fontSize = "1em", i.previewElement.innerHTML = "", !0;
    }.bind(this);
    try {
      t() && (this.plugins.dialog.close.call(this), this.history.push(!1));
    } catch {
      this.plugins.dialog.close.call(this);
    } finally {
      this.closeLoading();
    }
    return !1;
  },
  active: function(e) {
    if (!e)
      this.controllerArray.indexOf(this.context.math.mathController) > -1 && this.controllersOff();
    else if (e.getAttribute("data-exp"))
      return this.controllerArray.indexOf(this.context.math.mathController) < 0 && (this.setRange(e, 0, e, 1), this.plugins.math.call_controller.call(this, e)), !0;
    return !1;
  },
  on: function(e) {
    if (!e)
      this.plugins.math.init.call(this);
    else {
      const t = this.context.math;
      if (t._mathExp) {
        const i = this.util.HTMLDecoder(t._mathExp.getAttribute("data-exp")), n = t._mathExp.getAttribute("data-font-size") || "1em";
        this.context.dialog.updateModal = !0, t.focusElement.value = i, t.fontSizeElement.value = n, t.previewElement.innerHTML = this.plugins.math._renderer.call(this, i), t.previewElement.style.fontSize = n;
      }
    }
  },
  call_controller: function(e) {
    this.context.math._mathExp = e;
    const t = this.context.math.mathController;
    this.setControllerPosition(t, e, "bottom", { left: 0, top: 0 }), this.controllersOn(t, e, "math");
  },
  onClick_mathController: function(e) {
    e.stopPropagation();
    const t = e.target.getAttribute("data-command") || e.target.parentNode.getAttribute("data-command");
    !t || (e.preventDefault(), /update/.test(t) ? (this.context.math.focusElement.value = this.util.HTMLDecoder(this.context.math._mathExp.getAttribute("data-exp")), this.plugins.dialog.open.call(this, "math", !0)) : (this.util.removeItem(this.context.math._mathExp), this.context.math._mathExp = null, this.focus(), this.history.push(!1)), this.controllersOff());
  },
  init: function() {
    const e = this.context.math;
    e.mathController.style.display = "none", e._mathExp = null, e.focusElement.value = "", e.previewElement.innerHTML = "";
  }
};
var De = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_MODULES a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      name: "fileBrowser",
      _xmlHttp: null,
      _loading: null,
      add: function(l) {
        const o = l.context;
        o.fileBrowser = {
          _closeSignal: !1,
          area: null,
          header: null,
          tagArea: null,
          body: null,
          list: null,
          tagElements: null,
          items: [],
          selectedTags: [],
          selectorHandler: null,
          contextPlugin: "",
          columnSize: 4
        };
        let s = l.util.createElement("DIV");
        s.className = "se-file-browser sun-editor-common";
        let a = l.util.createElement("DIV");
        a.className = "se-file-browser-back";
        let r = l.util.createElement("DIV");
        r.className = "se-file-browser-inner", r.innerHTML = this.set_browser(l), s.appendChild(a), s.appendChild(r), this._loading = s.querySelector(".se-loading-box"), o.fileBrowser.area = s, o.fileBrowser.header = r.querySelector(".se-file-browser-header"), o.fileBrowser.titleArea = r.querySelector(".se-file-browser-title"), o.fileBrowser.tagArea = r.querySelector(".se-file-browser-tags"), o.fileBrowser.body = r.querySelector(".se-file-browser-body"), o.fileBrowser.list = r.querySelector(".se-file-browser-list"), o.fileBrowser.tagArea.addEventListener("click", this.onClickTag.bind(l)), o.fileBrowser.list.addEventListener("click", this.onClickFile.bind(l)), r.addEventListener("mousedown", this._onMouseDown_browser.bind(l)), r.addEventListener("click", this._onClick_browser.bind(l)), o.element.relative.appendChild(s), s = null, a = null, r = null;
      },
      set_browser: function(l) {
        const o = l.lang;
        return '<div class="se-file-browser-content"><div class="se-file-browser-header"><button type="button" data-command="close" class="se-btn se-file-browser-close" class="close" title="' + o.dialogBox.close + '" aria-label="' + o.dialogBox.close + '">' + l.icons.cancel + '</button><span class="se-file-browser-title"></span><div class="se-file-browser-tags"></div></div><div class="se-file-browser-body"><div class="se-loading-box sun-editor-common"><div class="se-loading-effect"></div></div><div class="se-file-browser-list"></div></div></div>';
      },
      _onMouseDown_browser: function(l) {
        /se-file-browser-inner/.test(l.target.className) ? this.context.fileBrowser._closeSignal = !0 : this.context.fileBrowser._closeSignal = !1;
      },
      _onClick_browser: function(l) {
        l.stopPropagation(), (/close/.test(l.target.getAttribute("data-command")) || this.context.fileBrowser._closeSignal) && this.plugins.fileBrowser.close.call(this);
      },
      open: function(l, o) {
        this.plugins.fileBrowser._bindClose && (this._d.removeEventListener("keydown", this.plugins.fileBrowser._bindClose), this.plugins.fileBrowser._bindClose = null), this.plugins.fileBrowser._bindClose = function(d) {
          !/27/.test(d.keyCode) || this.plugins.fileBrowser.close.call(this);
        }.bind(this), this._d.addEventListener("keydown", this.plugins.fileBrowser._bindClose);
        const s = this.context.fileBrowser;
        s.contextPlugin = l, s.selectorHandler = o;
        const a = this.context[l], r = a.listClass;
        this.util.hasClass(s.list, r) || (s.list.className = "se-file-browser-list " + r), this.options.popupDisplay === "full" ? s.area.style.position = "fixed" : s.area.style.position = "absolute", s.titleArea.textContent = a.title, s.area.style.display = "block", this.plugins.fileBrowser._drawFileList.call(this, this.context[l].url, this.context[l].header);
      },
      _bindClose: null,
      close: function() {
        const l = this.plugins.fileBrowser;
        l._xmlHttp && l._xmlHttp.abort(), l._bindClose && (this._d.removeEventListener("keydown", l._bindClose), l._bindClose = null);
        const o = this.context.fileBrowser;
        o.area.style.display = "none", o.selectorHandler = null, o.selectedTags = [], o.items = [], o.list.innerHTML = o.tagArea.innerHTML = o.titleArea.textContent = "", typeof this.plugins[o.contextPlugin].init == "function" && this.plugins[o.contextPlugin].init.call(this), o.contextPlugin = "";
      },
      showBrowserLoading: function() {
        this._loading.style.display = "block";
      },
      closeBrowserLoading: function() {
        this._loading.style.display = "none";
      },
      _drawFileList: function(l, o) {
        const s = this.plugins.fileBrowser, a = s._xmlHttp = this.util.getXMLHttpRequest();
        if (a.onreadystatechange = s._callBackGet.bind(this, a), a.open("get", l, !0), o !== null && typeof o == "object" && this._w.Object.keys(o).length > 0)
          for (let r in o)
            a.setRequestHeader(r, o[r]);
        a.send(null), this.plugins.fileBrowser.showBrowserLoading();
      },
      _callBackGet: function(l) {
        if (l.readyState === 4) {
          if (this.plugins.fileBrowser._xmlHttp = null, l.status === 200)
            try {
              const o = JSON.parse(l.responseText);
              o.result.length > 0 ? this.plugins.fileBrowser._drawListItem.call(this, o.result, !0) : o.nullMessage && (this.context.fileBrowser.list.innerHTML = o.nullMessage);
            } catch (o) {
              throw Error('[SUNEDITOR.fileBrowser.drawList.fail] cause : "' + o.message + '"');
            } finally {
              this.plugins.fileBrowser.closeBrowserLoading(), this.context.fileBrowser.body.style.maxHeight = this._w.innerHeight - this.context.fileBrowser.header.offsetHeight - 50 + "px";
            }
          else if (this.plugins.fileBrowser.closeBrowserLoading(), l.status !== 0) {
            const o = l.responseText ? JSON.parse(l.responseText) : l, s = "[SUNEDITOR.fileBrowser.get.serverException] status: " + l.status + ", response: " + (o.errorMessage || l.responseText);
            throw Error(s);
          }
        }
      },
      _drawListItem: function(l, o) {
        const s = this.context.fileBrowser, a = this.context[s.contextPlugin], r = [], d = l.length, u = a.columnSize || s.columnSize, f = u <= 1 ? 1 : Math.round(d / u) || 1, h = a.itemTemplateHandler;
        let g = "", p = '<div class="se-file-item-column">', b = 1;
        for (let m = 0, c, v; m < d; m++)
          if (c = l[m], v = c.tag ? typeof c.tag == "string" ? c.tag.split(",") : c.tag : [], v = c.tag = v.map(function(_) {
            return _.trim();
          }), p += h(c), (m + 1) % f === 0 && b < u && m + 1 < d && (b++, p += '</div><div class="se-file-item-column">'), o && v.length > 0)
            for (let _ = 0, y = v.length, w; _ < y; _++)
              w = v[_], w && r.indexOf(w) === -1 && (r.push(w), g += '<a title="' + w + '" aria-label="' + w + '">' + w + "</a>");
        p += "</div>", s.list.innerHTML = p, o && (s.items = l, s.tagArea.innerHTML = g, s.tagElements = s.tagArea.querySelectorAll("A"));
      },
      onClickTag: function(l) {
        const o = l.target;
        if (!this.util.isAnchor(o))
          return;
        const s = o.textContent, a = this.plugins.fileBrowser, r = this.context.fileBrowser, d = r.tagArea.querySelector('a[title="' + s + '"]'), u = r.selectedTags, f = u.indexOf(s);
        f > -1 ? (u.splice(f, 1), this.util.removeClass(d, "on")) : (u.push(s), this.util.addClass(d, "on")), a._drawListItem.call(
          this,
          u.length === 0 ? r.items : r.items.filter(function(h) {
            return h.tag.some(function(g) {
              return u.indexOf(g) > -1;
            });
          }),
          !1
        );
      },
      onClickFile: function(l) {
        l.preventDefault(), l.stopPropagation();
        const o = this.context.fileBrowser, s = o.list;
        let a = l.target, r = null;
        if (a === s)
          return;
        for (; s !== a.parentNode && (r = a.getAttribute("data-command"), !r); )
          a = a.parentNode;
        if (!r)
          return;
        const d = o.selectorHandler || this.context[o.contextPlugin].selectorHandler;
        this.plugins.fileBrowser.close.call(this), d(a);
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_MODULES || Object.defineProperty(t, "SUNEDITOR_MODULES", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_MODULES, "fileBrowser", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: n
    })), n;
  });
})(De);
const jn = De.exports, Wn = {
  name: "imageGallery",
  add: function(e) {
    e.addModule([jn]);
    const t = e.context;
    t.imageGallery = {
      title: e.lang.toolbar.imageGallery,
      url: e.options.imageGalleryUrl,
      header: e.options.imageGalleryHeader,
      listClass: "se-image-list",
      itemTemplateHandler: this.drawItems,
      selectorHandler: this.setImage.bind(e),
      columnSize: 4
    };
  },
  open: function(e) {
    this.plugins.fileBrowser.open.call(this, "imageGallery", e);
  },
  drawItems: function(e) {
    const t = e.src.split("/").pop();
    return '<div class="se-file-item-img"><img src="' + (e.thumbnail || e.src) + '" alt="' + (e.alt || t) + '" data-command="pick" data-value="' + (e.src || e.thumbnail) + '"><div class="se-file-img-name se-file-name-back"></div><div class="se-file-img-name __se__img_name">' + (e.name || t) + "</div></div>";
  },
  setImage: function(e) {
    this.callPlugin("image", function() {
      const t = { name: e.parentNode.querySelector(".__se__img_name").textContent, size: 0 };
      this.plugins.image.create_image.call(this, e.getAttribute("data-value"), null, this.context.image._origin_w, this.context.image._origin_h, "none", t, e.alt);
    }.bind(this), null);
  }
}, Oe = { blockquote: zn, align: Ln, font: En, fontSize: In, fontColor: Rn, hiliteColor: Tn, horizontalRule: Bn, list: An, table: Nn, formatBlock: Mn, lineHeight: Dn, template: On, paragraphStyle: Un, textStyle: Vn, link: Hn, image: Pn, video: $n, audio: Gn, math: qn, imageGallery: Wn };
var Ue = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "ckb",
      toolbar: {
        default: "\u0628\u0646\u0647\u200C\u0695\u0647\u200C\u062A",
        save: "\u067E\u0627\u0634\u0647\u200C\u0643\u0647\u200C\u0648\u062A\u0643\u0631\u062F\u0646",
        font: "\u0641\u06C6\u0646\u062A",
        formats: "Formats",
        fontSize: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C",
        bold: "\u062A\u06C6\u062E\u0643\u0631\u062F\u0646",
        underline: "\u0647\u06CE\u06B5 \u0628\u0647\u200C\u0698\u06CE\u0631\u062F\u0627 \u0628\u06CE\u0646\u0647\u200C",
        italic: "\u0644\u0627\u0631",
        strike: "\u0647\u06CE\u06B5 \u0628\u0647\u200C\u0646\u0627\u0648\u062F\u0627 \u0628\u06CE\u0646\u0647\u200C",
        subscript: "\u0698\u06CE\u0631\u0633\u06A9\u0631\u06CC\u067E\u062A",
        superscript: "\u0633\u06D5\u0631\u0646\u0648\u0648\u0633",
        removeFormat: "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u0641\u06C6\u0631\u0645\u0627\u062A",
        fontColor: "\u0631\u0647\u200C\u0646\u06AF\u06CC \u0641\u06C6\u0646\u062A",
        hiliteColor: "\u0631\u0647\u200C\u0646\u06AF\u06CC \u062F\u06CC\u0627\u0631\u0643\u0631\u0627\u0648",
        indent: "\u0628\u06C6\u0634\u0627\u06CC\u06CC \u0628\u06D5\u062C\u06CE\u0647\u06CE\u0634\u062A\u0646",
        outdent: "\u0644\u0627\u0628\u0631\u062F\u0646\u06CC \u0628\u06C6\u0634\u0627\u06CC\u06CC",
        align: "\u0626\u0627\u0631\u0627\u0633\u062A\u0647\u200C",
        alignLeft: "\u0644\u0627\u06CC \u0686\u0647\u200C\u067E",
        alignRight: "\u0644\u0627\u06CC \u0631\u0627\u0633\u062A",
        alignCenter: "\u0646\u0627\u0648\u0647\u200C\u0646\u062F",
        alignJustify: "\u0628\u0647\u200C\u0631\u06CE\u0643\u06CC \u062F\u0627\u0628\u0647\u200C\u0634 \u0628\u0643\u0647\u200C",
        list: "\u0644\u06CC\u0633\u062A",
        orderList: "\u0644\u06CC\u0633\u062A\u06CC \u0631\u06CC\u0632\u0643\u0631\u0627\u0648",
        unorderList: "\u0644\u06CC\u0633\u062A\u06CC \u0631\u06CC\u0632\u0646\u0647\u200C\u0643\u0631\u0627\u0648",
        horizontalRule: "\u0647\u06CE\u06B5\u06CC \u0626\u0627\u0633\u06C6\u06CC\u06CC",
        hr_solid: "\u067E\u062A\u0647\u200C\u0648",
        hr_dotted: "\u0646\u0648\u0643\u062A\u0647\u200C \u0646\u0648\u0643\u062A\u0647\u200C",
        hr_dashed: "\u062F\u0627\u0634 \u062F\u0627\u0634",
        table: "\u062E\u0634\u062A\u0647\u200C",
        link: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631",
        math: "\u0628\u06CC\u0631\u0643\u0627\u0631\u06CC",
        image: "\u0648\u06CE\u0646\u0647\u200C",
        video: "\u06A4\u06CC\u062F\u06CC\u06C6",
        audio: "\u062F\u0647\u200C\u0646\u06AF",
        fullScreen: "\u067E\u0695 \u0628\u0647\u200C \u0634\u0627\u0634\u0647\u200C",
        showBlocks: "\u0628\u06B5\u06C6\u0643 \u0646\u06CC\u0634\u0627\u0646\u0628\u062F\u0647",
        codeView: "\u0628\u06CC\u0646\u06CC\u0646\u06CC \u0643\u06C6\u062F\u0647\u200C\u0643\u0627\u0646",
        undo: "\u0648\u06D5\u06A9 \u062E\u06C6\u06CC \u0644\u06CE \u0628\u06A9\u06D5\u0648\u06D5",
        redo: "\u0647\u06D5\u06B5\u06AF\u06D5\u0695\u0627\u0646\u062F\u0646\u06D5\u0648\u06D5",
        preview: "\u067E\u06CE\u0634\u0628\u06CC\u0646\u06CC\u0646",
        print: "\u067E\u0631\u06CC\u0646\u062A",
        tag_p: "\u067E\u0647\u200C\u0631\u0647\u200C\u06AF\u0631\u0627\u0641",
        tag_div: "\u06CC \u0626\u0627\u0633\u0627\u06CC\u06CC (DIV)",
        tag_h: "\u0633\u06D5\u0631\u067E\u06D5\u0695\u06D5",
        tag_blockquote: "\u062F\u0647\u200C\u0642",
        tag_pre: "\u0643\u06C6\u062F",
        template: "\u0642\u0627\u06B5\u0628",
        lineHeight: "\u0628\u06B5\u0646\u062F\u06CC \u062F\u06CE\u0631",
        paragraphStyle: "\u0633\u062A\u0627\u06CC\u0644\u06CC \u067E\u0647\u200C\u0631\u0647\u200C\u06AF\u0631\u0627\u0641",
        textStyle: "\u0633\u062A\u0627\u06CC\u0644\u06CC \u0646\u0648\u0633\u06CC\u0646",
        imageGallery: "\u06AF\u0627\u0644\u0647\u200C\u0631\u06CC \u0648\u06CE\u0646\u0647\u200C\u0643\u0627\u0646",
        dir_ltr: "\u0645\u0646 \u0627\u0644\u064A\u0633\u0627\u0631 \u0625\u0644\u0649 \u0627\u0644\u064A\u0645\u064A\u0646",
        dir_rtl: "\u0645\u0646 \u0627\u0644\u064A\u0645\u064A\u0646 \u0627\u0644\u0649 \u0627\u0644\u064A\u0633\u0627\u0631",
        mention: "\u062A\u0646\u0648\u064A\u0647 \u0628"
      },
      dialogBox: {
        linkBox: {
          title: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631 \u062F\u0627\u0628\u0646\u06CE",
          url: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631",
          text: "\u062A\u06CE\u0643\u0633\u062A\u06CC \u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631",
          newWindowCheck: "\u0644\u0647\u200C \u067E\u0647\u200C\u0646\u062C\u0647\u200C\u0631\u0647\u200C\u06CC\u0647\u200C\u0643\u06CC \u0646\u0648\u06CE \u0628\u0643\u0647\u200C\u0631\u0647\u200C\u0648\u0647\u200C",
          downloadLinkCheck: "\u0631\u0627\u0628\u0637 \u0627\u0644\u062A\u062D\u0645\u064A\u0644",
          bookmark: "\u0627\u0644\u0645\u0631\u062C\u0639\u064A\u0629"
        },
        mathBox: {
          title: "\u0628\u06CC\u0631\u0643\u0627\u0631\u06CC",
          inputLabel: "\u0646\u06CC\u0634\u0627\u0646\u0647\u200C\u0643\u0627\u0646\u06CC \u0628\u06CC\u0631\u0643\u0627\u0631\u06CC",
          fontSizeLabel: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C\u06CC \u0641\u06C6\u0646\u062A",
          previewLabel: "\u067E\u06CE\u0634\u0628\u06CC\u0646\u06CC\u0646"
        },
        imageBox: {
          title: "\u0648\u06CE\u0646\u0647\u200C\u06CC\u0647\u200C\u0643 \u062F\u0627\u0628\u0646\u06CE",
          file: "\u0641\u0627\u06CC\u0644\u06CE\u0643 \u0647\u0647\u200C\u06B5\u0628\u0698\u06CE\u0631\u0647\u200C",
          url: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631\u06CC \u0648\u06CE\u0646\u0647\u200C",
          altText: "\u0646\u0648\u0633\u06CC\u0646\u06CC \u062C\u06CE\u06AF\u0631\u0647\u200C\u0648\u0647\u200C"
        },
        videoBox: {
          title: "\u06A4\u06CC\u062F\u06CC\u06C6\u06CC\u0647\u200C\u0643 \u062F\u0627\u0628\u0646\u06CE",
          file: "\u0641\u0627\u06CC\u0644\u06CE\u0643 \u0647\u0647\u200C\u06B5\u0628\u0698\u06CE\u0631\u0647\u200C",
          url: "YouTube/Vimeo \u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631\u06CC \u0644\u0647\u200C\u0646\u0627\u0648\u062F\u0627\u0646\u0627\u0646 \u0648\u0647\u200C\u0643 "
        },
        audioBox: {
          title: "\u062F\u0647\u200C\u0646\u06AF\u06CE\u0643 \u062F\u0627\u0628\u0646\u06CE",
          file: "\u0641\u0627\u06CC\u0644\u06CE\u0643 \u0647\u0647\u200C\u06B5\u0628\u0698\u06CE\u0631\u0647\u200C",
          url: "\u0628\u0647\u200C\u0633\u062A\u0647\u200C\u0631\u06CC \u062F\u0647\u200C\u0646\u06AF"
        },
        browser: {
          tags: "\u062A\u0627\u06AF\u0647\u200C\u0643\u0627\u0646",
          search: "\u06AF\u0647\u200C\u0631\u0627\u0646"
        },
        caption: "\u067E\u06CE\u0646\u0627\u0633\u0647\u200C\u06CC\u0647\u200C\u0643 \u062F\u0627\u0628\u0646\u06CE",
        close: "\u062F\u0627\u062E\u0633\u062A\u0646",
        submitButton: "\u0646\u0627\u0631\u062F\u0646",
        revertButton: "\u0628\u06CC\u06AF\u06D5\u0695\u06CE\u0646\u06D5\u0648\u06D5 \u0633\u06D5\u0631 \u0628\u0627\u0631\u06CC \u0633\u06D5\u0631\u06D5\u062A\u0627\u06CC\u06CC",
        proportion: "\u0631\u06CE\u0698\u0647\u200C\u0643\u0627\u0646 \u0648\u0647\u200C\u0643 \u062E\u06C6\u06CC \u0628\u0647\u06CE\u06B5\u0647\u200C\u0648\u0647\u200C",
        basic: "\u0633\u0647\u200C\u0631\u0647\u200C\u062A\u0627\u06CC\u06CC",
        left: "\u0686\u0647\u200C\u067E",
        right: "\u0631\u0627\u0633\u062A",
        center: "\u0646\u0627\u0648\u06D5\u0695\u0627\u0633\u062A",
        width: "\u067E\u0627\u0646\u06CC",
        height: "\u0628\u0647\u200C\u0631\u0632\u06CC",
        size: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C",
        ratio: "\u0631\u06CE\u0698\u0647\u200C"
      },
      controller: {
        edit: "\u062F\u06D5\u0633\u06A9\u0627\u0631\u06CC\u06A9\u0631\u062F\u0646",
        unlink: "\u0633\u0695\u06CC\u0646\u06D5\u0648\u06D5\u06CC \u0628\u06D5\u0633\u062A\u06D5\u0631",
        remove: "\u0633\u0695\u06CC\u0646\u0647\u200C\u0648\u0647\u200C",
        insertRowAbove: "\u0631\u06CC\u0632\u0643 \u0644\u0647\u200C \u0633\u0647\u200C\u0631\u0647\u200C\u0648\u0647\u200C \u0632\u06CC\u0627\u062F\u0628\u0643\u0647\u200C",
        insertRowBelow: "\u0631\u06CC\u0632\u06CE\u0643 \u0644\u0647\u200C \u062E\u0648\u0627\u0631\u0647\u200C\u0648\u0647\u200C \u0632\u06CC\u0627\u062F\u0628\u0643\u0647\u200C",
        deleteRow: "\u0631\u06CC\u0632 \u0628\u0633\u0631\u0647\u200C\u0648\u0647\u200C",
        insertColumnBefore: "\u0633\u062A\u0648\u0646\u06CE\u0643 \u0644\u0647\u200C \u067E\u06CE\u0634\u0647\u200C\u0648\u0647\u200C \u0632\u06CC\u0627\u062F\u0628\u0643\u0647\u200C",
        insertColumnAfter: "\u0633\u062A\u0648\u0646\u06CE\u0643 \u0644\u0647\u200C \u062F\u0648\u0627\u0648\u0647\u200C \u0632\u06CC\u0627\u062F\u0628\u0643\u0647\u200C",
        deleteColumn: "\u0633\u062A\u0648\u0646\u06CE\u0643 \u0628\u0633\u0631\u0647\u200C\u0648\u0647\u200C",
        fixedColumnWidth: "\u067E\u0627\u0646\u06CC \u0633\u062A\u0648\u0646 \u0646\u0647\u200C\u06AF\u06C6\u0631\u0628\u0643\u0647\u200C",
        resize100: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C \u0628\u06AF\u06C6\u0631\u0647\u200C \u0628\u06C6 \u0661\u0660\u0660%",
        resize75: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C \u0628\u06AF\u06C6\u0631\u0647\u200C \u0628\u06C6 \u0667\u0665%",
        resize50: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C \u0628\u06AF\u06C6\u0631\u0647\u200C \u0628\u06C6 \u0665\u0660%",
        resize25: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C \u0628\u06AF\u06C6\u0631\u0647\u200C \u0628\u06C6 \u0662\u0665%",
        autoSize: "\u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C\u06CC \u062E\u06C6\u0643\u0627\u0631\u0627\u0646\u0647\u200C",
        mirrorHorizontal: "\u0647\u0647\u200C\u06B5\u06AF\u0647\u200C\u0631\u06CE\u0646\u0647\u200C\u0648\u0647\u200C \u0628\u0647\u200C\u062F\u0647\u200C\u0648\u0631\u06CC \u062A\u0647\u200C\u0648\u0647\u200C\u0631\u0647\u200C\u06CC \u0626\u0627\u0633\u06C6\u06CC\u06CC",
        mirrorVertical: "\u0647\u0647\u200C\u06B5\u06AF\u0647\u200C\u0631\u06CE\u0646\u0647\u200C\u0648\u0647\u200C \u0628\u0647\u200C\u062F\u0647\u200C\u0648\u0631\u06CC \u062A\u0647\u200C\u0648\u0647\u200C\u0631\u0647\u200C\u06CC \u0633\u062A\u0648\u0646\u06CC",
        rotateLeft: "\u0628\u0633\u0648\u0695\u06CE\u0646\u0647\u200C \u0628\u0647\u200C\u0644\u0627\u06CC \u0686\u0647\u200C\u067E\u062F\u0627",
        rotateRight: "\u0628\u0633\u0648\u0631\u06CE\u0646\u0647\u200C \u0628\u0647\u200C\u0644\u0627\u06CC \u0631\u0627\u0633\u062A\u062F\u0627",
        maxSize: "\u06AF\u0647\u200C\u0648\u0631\u0647\u200C\u062A\u0631\u06CC\u0646 \u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C",
        minSize: "\u0628\u0686\u0648\u0643\u062A\u0631\u06CC\u0646 \u0642\u0647\u200C\u0628\u0627\u0631\u0647\u200C",
        tableHeader: "\u0633\u0647\u200C\u0631\u062F\u06CE\u0631\u06CC \u062E\u0634\u062A\u0647\u200C\u0643",
        mergeCells: "\u062E\u0627\u0646\u0647\u200C\u0643\u0627\u0646 \u062A\u06CE\u0643\u0647\u200C\u06B5\u0628\u0643\u0647\u200C",
        splitCells: "\u062E\u0627\u0646\u0647\u200C\u0643\u0627\u0646 \u0644\u06CE\u0643 \u062C\u06CC\u0627\u0628\u0643\u0647\u200C\u0648\u0647\u200C",
        HorizontalSplit: "\u062C\u06CC\u0627\u0643\u0631\u062F\u0646\u0647\u200C\u0648\u0647\u200C\u06CC \u0626\u0627\u0633\u06C6\u06CC\u06CC",
        VerticalSplit: "\u062C\u06CC\u0627\u0643\u0631\u062F\u0646\u0647\u200C\u0648\u0647\u200C\u06CC \u0633\u062A\u0648\u0646\u06CC"
      },
      menu: {
        spaced: "\u0628\u06C6\u0634\u0627\u06CC \u0647\u0647\u200C\u0628\u06CE\u062A",
        bordered: "\u0644\u06CE\u0648\u0627\u0631\u06CC \u0647\u0647\u200C\u0628\u06CE\u062A",
        neon: "\u0646\u06CC\u06C6\u0646",
        translucent: "\u0643\u0647\u200C\u0645\u06CE\u0643 \u0648\u0647\u200C\u0643 \u0634\u0648\u0648\u0634\u0647\u200C",
        shadow: "\u0633\u06CE\u0628\u0647\u200C\u0631",
        code: "\u0643\u06C6\u062F"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ckb", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Ue);
const Ve = Ue.exports;
var Fe = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "da",
      toolbar: {
        default: "Default",
        save: "Gem",
        font: "Skrifttype",
        formats: "Format",
        fontSize: "Skriftst\xF8rrelse",
        bold: "Fed",
        underline: "Understreget",
        italic: "Skr\xE5skrift",
        strike: "Overstreget",
        subscript: "S\xE6nket skrift",
        superscript: "H\xE6vet skrift",
        removeFormat: "Fjern formatering",
        fontColor: "Skriftfarve",
        hiliteColor: "Baggrundsfarve",
        indent: "Ryk ind",
        outdent: "Ryk ud",
        align: "Justering",
        alignLeft: "Venstrejustering",
        alignRight: "H\xF8jrejustering",
        alignCenter: "Midterjustering",
        alignJustify: "Tilpas margin",
        list: "Lister",
        orderList: "Nummereret liste",
        unorderList: "Uordnet liste",
        horizontalRule: "Horisontal linie",
        hr_solid: "Almindelig",
        hr_dotted: "Punkteret",
        hr_dashed: "Streget",
        table: "Tabel",
        link: "Link",
        math: "Math",
        image: "Billede",
        video: "Video",
        audio: "Audio",
        fullScreen: "Fuld sk\xE6rm",
        showBlocks: "Vis blokke",
        codeView: "Vis koder",
        undo: "Undo",
        redo: "Redo",
        preview: "Preview",
        print: "Print",
        tag_p: "Paragraph",
        tag_div: "Normal (DIV)",
        tag_h: "Overskrift",
        tag_blockquote: "Citer",
        tag_pre: "Code",
        template: "Schablone",
        lineHeight: "Linjeh\xF8jde",
        paragraphStyle: "Afsnitstil",
        textStyle: "Tekststil",
        imageGallery: "Billedgalleri",
        dir_ltr: "Venstre til h\xF8jre",
        dir_rtl: "H\xF8jre til venstre",
        mention: "N\xE6vne"
      },
      dialogBox: {
        linkBox: {
          title: "Inds\xE6t link",
          url: "URL til link",
          text: "Tekst for link",
          newWindowCheck: "\xC5ben i nyt faneblad",
          downloadLinkCheck: "Download link",
          bookmark: "Bogm\xE6rke"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Matematisk notation",
          fontSizeLabel: "Skriftst\xF8rrelse",
          previewLabel: "Preview"
        },
        imageBox: {
          title: "Inds\xE6t billede",
          file: "Inds\xE6t fra fil",
          url: "Inds\xE6t fra URL",
          altText: "Alternativ tekst"
        },
        videoBox: {
          title: "Inds\xE6t Video",
          file: "Inds\xE6t fra fil",
          url: "Indlejr video / YouTube,Vimeo"
        },
        audioBox: {
          title: "Inds\xE6t Audio",
          file: "Inds\xE6t fra fil",
          url: "Inds\xE6t fra URL"
        },
        browser: {
          tags: "Tags",
          search: "S\xF8g"
        },
        caption: "Inds\xE6t beskrivelse",
        close: "Luk",
        submitButton: "Gennemf\xF8r",
        revertButton: "Gendan",
        proportion: "Bevar proportioner",
        basic: "Basis",
        left: "Venstre",
        right: "H\xF8jre",
        center: "Center",
        width: "Bredde",
        height: "H\xF8jde",
        size: "St\xF8rrelse",
        ratio: "Forhold"
      },
      controller: {
        edit: "Rediger",
        unlink: "Fjern link",
        remove: "Fjern",
        insertRowAbove: "Inds\xE6t r\xE6kke foroven",
        insertRowBelow: "Inds\xE6t r\xE6kke nedenfor",
        deleteRow: "Slet r\xE6kke",
        insertColumnBefore: "Inds\xE6t kolonne f\xF8r",
        insertColumnAfter: "Inds\xE6t kolonne efter",
        deleteColumn: "Slet kolonne",
        fixedColumnWidth: "Fast s\xF8jlebredde",
        resize100: "Forst\xF8r 100%",
        resize75: "Forst\xF8r 75%",
        resize50: "Forst\xF8r 50%",
        resize25: "Forst\xF8r 25%",
        autoSize: "Auto st\xF8rrelse",
        mirrorHorizontal: "Spejling, horisontal",
        mirrorVertical: "Spejling, vertikal",
        rotateLeft: "Roter til venstre",
        rotateRight: "Toter til h\xF8jre",
        maxSize: "Max st\xF8rrelse",
        minSize: "Min st\xF8rrelse",
        tableHeader: "Tabel overskrift",
        mergeCells: "Sammenl\xE6g celler (merge)",
        splitCells: "Opdel celler",
        HorizontalSplit: "Opdel horisontalt",
        VerticalSplit: "Opdel vertikalt"
      },
      menu: {
        spaced: "Brev Afstand",
        bordered: "Afgr\xE6nsningslinje",
        neon: "Neon",
        translucent: "Gennemsigtig",
        shadow: "Skygge",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "da", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Fe);
const He = Fe.exports;
var Pe = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "de",
      toolbar: {
        default: "Standard",
        save: "Speichern",
        font: "Schriftart",
        formats: "Format",
        fontSize: "Schriftgr\xF6\xDFe",
        bold: "Fett",
        underline: "Unterstrichen",
        italic: "Kursiv",
        strike: "Durchgestrichen",
        subscript: "Tiefgestellt",
        superscript: "Hochgestellt",
        removeFormat: "Format entfernen",
        fontColor: "Schriftfarbe",
        hiliteColor: "Farbe f\xFCr Hervorhebungen",
        indent: "Einzug vergr\xF6\xDFern",
        outdent: "Einzug verkleinern",
        align: "Ausrichtung",
        alignLeft: "Links ausrichten",
        alignRight: "Rechts ausrichten",
        alignCenter: "Zentriert ausrichten",
        alignJustify: "Blocksatz",
        list: "Liste",
        orderList: "Nummerierte Liste",
        unorderList: "Aufz\xE4hlung",
        horizontalRule: "Horizontale Linie",
        hr_solid: "Strich",
        hr_dotted: "Gepunktet",
        hr_dashed: "Gestrichelt",
        table: "Tabelle",
        link: "Link",
        math: "Mathematik",
        image: "Bild",
        video: "Video",
        audio: "Audio",
        fullScreen: "Vollbild",
        showBlocks: "Blockformatierungen anzeigen",
        codeView: "Quelltext anzeigen",
        undo: "R\xFCckg\xE4ngig",
        redo: "Wiederholen",
        preview: "Vorschau",
        print: "Drucken",
        tag_p: "Absatz",
        tag_div: "Normal (DIV)",
        tag_h: "Header",
        tag_blockquote: "Zitat",
        tag_pre: "Quellcode",
        template: "Vorlage",
        lineHeight: "Zeilenh\xF6he",
        paragraphStyle: "Absatzstil",
        textStyle: "Textstil",
        imageGallery: "Bildergalerie",
        dir_ltr: "Links nach rechts",
        dir_rtl: "Rechts nach links",
        mention: "Erw\xE4hnen"
      },
      dialogBox: {
        linkBox: {
          title: "Link einf\xFCgen",
          url: "Link-URL",
          text: "Link-Text",
          newWindowCheck: "In neuem Fenster anzeigen",
          downloadLinkCheck: "Download-Link",
          bookmark: "Lesezeichen"
        },
        mathBox: {
          title: "Mathematik",
          inputLabel: "Mathematische Notation",
          fontSizeLabel: "Schriftgr\xF6\xDFe",
          previewLabel: "Vorschau"
        },
        imageBox: {
          title: "Bild einf\xFCgen",
          file: "Datei ausw\xE4hlen",
          url: "Bild-URL",
          altText: "Alternativer Text"
        },
        videoBox: {
          title: "Video enf\xFCgen",
          file: "Datei ausw\xE4hlen",
          url: "Video-URL, YouTube/Vimeo"
        },
        audioBox: {
          title: "Audio enf\xFCgen",
          file: "Datei ausw\xE4hlen",
          url: "Audio-URL"
        },
        browser: {
          tags: "Stichworte",
          search: "Suche"
        },
        caption: "Beschreibung eingeben",
        close: "Schlie\xDFen",
        submitButton: "\xDCbernehmen",
        revertButton: "R\xFCckg\xE4ngig",
        proportion: "Seitenverh\xE4ltnis beibehalten",
        basic: "Standard",
        left: "Links",
        right: "Rechts",
        center: "Zentriert",
        width: "Breite",
        height: "H\xF6he",
        size: "Gr\xF6\xDFe",
        ratio: "Verh\xE4ltnis"
      },
      controller: {
        edit: "Bearbeiten",
        unlink: "Link entfernen",
        remove: "L\xF6schen",
        insertRowAbove: "Zeile oberhalb einf\xFCgen",
        insertRowBelow: "Zeile unterhalb einf\xFCgen",
        deleteRow: "Zeile l\xF6schen",
        insertColumnBefore: "Spalte links einf\xFCgen",
        insertColumnAfter: "Spalte rechts einf\xFCgen",
        deleteColumn: "Spalte l\xF6schen",
        fixedColumnWidth: "Feste Spaltenbreite",
        resize100: "Zoom 100%",
        resize75: "Zoom 75%",
        resize50: "Zoom 50%",
        resize25: "Zoom 25%",
        autoSize: "Automatische Gr\xF6\xDFenanpassung",
        mirrorHorizontal: "Horizontal spiegeln",
        mirrorVertical: "Vertikal spiegeln",
        rotateLeft: "Nach links drehen",
        rotateRight: "Nach rechts drehen",
        maxSize: "Maximale Gr\xF6\xDFe",
        minSize: "Mindestgr\xF6\xDFe",
        tableHeader: "Tabellen\xFCberschrift",
        mergeCells: "Zellen verbinden",
        splitCells: "Zellen teilen",
        HorizontalSplit: "Horizontal teilen",
        VerticalSplit: "Vertikal teilen"
      },
      menu: {
        spaced: "Buchstabenabstand",
        bordered: "Umrandet",
        neon: "Neon",
        translucent: "Durchscheinend",
        shadow: "Schatten",
        code: "Quellcode"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "de", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Pe);
const $e = Pe.exports;
var Ge = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "en",
      toolbar: {
        default: "Default",
        save: "Save",
        font: "Font",
        formats: "Formats",
        fontSize: "Size",
        bold: "Bold",
        underline: "Underline",
        italic: "Italic",
        strike: "Strike",
        subscript: "Subscript",
        superscript: "Superscript",
        removeFormat: "Remove Format",
        fontColor: "Font Color",
        hiliteColor: "Highlight Color",
        indent: "Indent",
        outdent: "Outdent",
        align: "Align",
        alignLeft: "Align left",
        alignRight: "Align right",
        alignCenter: "Align center",
        alignJustify: "Align justify",
        list: "List",
        orderList: "Ordered list",
        unorderList: "Unordered list",
        horizontalRule: "Horizontal line",
        hr_solid: "Solid",
        hr_dotted: "Dotted",
        hr_dashed: "Dashed",
        table: "Table",
        link: "Link",
        math: "Math",
        image: "Image",
        video: "Video",
        audio: "Audio",
        fullScreen: "Full screen",
        showBlocks: "Show blocks",
        codeView: "Code view",
        undo: "Undo",
        redo: "Redo",
        preview: "Preview",
        print: "print",
        tag_p: "Paragraph",
        tag_div: "Normal (DIV)",
        tag_h: "Header",
        tag_blockquote: "Quote",
        tag_pre: "Code",
        template: "Template",
        lineHeight: "Line height",
        paragraphStyle: "Paragraph style",
        textStyle: "Text style",
        imageGallery: "Image gallery",
        dir_ltr: "Left to right",
        dir_rtl: "Right to left",
        mention: "Mention"
      },
      dialogBox: {
        linkBox: {
          title: "Insert Link",
          url: "URL to link",
          text: "Text to display",
          newWindowCheck: "Open in new window",
          downloadLinkCheck: "Download link",
          bookmark: "Bookmark"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Mathematical Notation",
          fontSizeLabel: "Font Size",
          previewLabel: "Preview"
        },
        imageBox: {
          title: "Insert image",
          file: "Select from files",
          url: "Image URL",
          altText: "Alternative text"
        },
        videoBox: {
          title: "Insert Video",
          file: "Select from files",
          url: "Media embed URL, YouTube/Vimeo"
        },
        audioBox: {
          title: "Insert Audio",
          file: "Select from files",
          url: "Audio URL"
        },
        browser: {
          tags: "Tags",
          search: "Search"
        },
        caption: "Insert description",
        close: "Close",
        submitButton: "Submit",
        revertButton: "Revert",
        proportion: "Constrain proportions",
        basic: "Basic",
        left: "Left",
        right: "Right",
        center: "Center",
        width: "Width",
        height: "Height",
        size: "Size",
        ratio: "Ratio"
      },
      controller: {
        edit: "Edit",
        unlink: "Unlink",
        remove: "Remove",
        insertRowAbove: "Insert row above",
        insertRowBelow: "Insert row below",
        deleteRow: "Delete row",
        insertColumnBefore: "Insert column before",
        insertColumnAfter: "Insert column after",
        deleteColumn: "Delete column",
        fixedColumnWidth: "Fixed column width",
        resize100: "Resize 100%",
        resize75: "Resize 75%",
        resize50: "Resize 50%",
        resize25: "Resize 25%",
        autoSize: "Auto size",
        mirrorHorizontal: "Mirror, Horizontal",
        mirrorVertical: "Mirror, Vertical",
        rotateLeft: "Rotate left",
        rotateRight: "Rotate right",
        maxSize: "Max size",
        minSize: "Min size",
        tableHeader: "Table header",
        mergeCells: "Merge cells",
        splitCells: "Split Cells",
        HorizontalSplit: "Horizontal split",
        VerticalSplit: "Vertical split"
      },
      menu: {
        spaced: "Spaced",
        bordered: "Bordered",
        neon: "Neon",
        translucent: "Translucent",
        shadow: "Shadow",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "en", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Ge);
const oe = Ge.exports;
var qe = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "es",
      toolbar: {
        default: "Valor por defecto",
        save: "Guardar",
        font: "Fuente",
        formats: "Formato",
        fontSize: "Tama\xF1o de fuente",
        bold: "Negrita",
        underline: "Subrayado",
        italic: "Cursiva",
        strike: "Tachado",
        subscript: "Sub\xEDndice",
        superscript: "Super\xEDndice",
        removeFormat: "Eliminar formato",
        fontColor: "Color de fuente",
        hiliteColor: "Color de resaltado",
        indent: "M\xE1s tabulaci\xF3n",
        outdent: "Menos tabulaci\xF3n",
        align: "Alinear",
        alignLeft: "Alinear a la izquierda",
        alignRight: "Alinear a la derecha",
        alignCenter: "Alinear al centro",
        alignJustify: "Justificar",
        list: "Lista",
        orderList: "Lista ordenada",
        unorderList: "Lista desordenada",
        horizontalRule: "Horizontal line",
        hr_solid: "L\xEDnea horizontal solida",
        hr_dotted: "L\xEDnea horizontal punteada",
        hr_dashed: "L\xEDnea horizontal discontinua",
        table: "Tabla",
        link: "Link",
        math: "Matem\xE1ticas",
        image: "Imagen",
        video: "Video",
        audio: "Audio",
        fullScreen: "Pantalla completa",
        showBlocks: "Ver bloques",
        codeView: "Ver c\xF3digo fuente",
        undo: "UndoDeshacer \xFAltima acci\xF3n",
        redo: "Rehacer \xFAltima acci\xF3n",
        preview: "Vista previa",
        print: "Imprimir",
        tag_p: "P\xE1rrafo",
        tag_div: "Normal (DIV)",
        tag_h: "Header",
        tag_blockquote: "Cita",
        tag_pre: "C\xF3digo",
        template: "Plantilla",
        lineHeight: "Altura de la l\xEDnea",
        paragraphStyle: "Estilo del parrafo",
        textStyle: "Estilo del texto",
        imageGallery: "Galer\xEDa de im\xE1genes",
        dir_ltr: "De izquierda a derecha",
        dir_rtl: "De derecha a izquierda",
        mention: "Mencionar"
      },
      dialogBox: {
        linkBox: {
          title: "Insertar Link",
          url: "\xBFHacia que URL lleva el link?",
          text: "Texto para mostrar",
          newWindowCheck: "Abrir en una nueva ventana",
          downloadLinkCheck: "Enlace de descarga",
          bookmark: "Marcador"
        },
        mathBox: {
          title: "Matem\xE1ticas",
          inputLabel: "Notaci\xF3n Matem\xE1tica",
          fontSizeLabel: "Tama\xF1o de fuente",
          previewLabel: "Vista previa"
        },
        imageBox: {
          title: "Insertar imagen",
          file: "Seleccionar desde los archivos",
          url: "URL de la imagen",
          altText: "Texto alternativo"
        },
        videoBox: {
          title: "Insertar Video",
          file: "Seleccionar desde los archivos",
          url: "\xBFURL del v\xEDdeo? Youtube/Vimeo"
        },
        audioBox: {
          title: "Insertar Audio",
          file: "Seleccionar desde los archivos",
          url: "URL de la audio"
        },
        browser: {
          tags: "Etiquetas",
          search: "Buscar"
        },
        caption: "Insertar descripci\xF3n",
        close: "Cerrar",
        submitButton: "Enviar",
        revertButton: "revertir",
        proportion: "Restringir las proporciones",
        basic: "Basico",
        left: "Izquierda",
        right: "derecha",
        center: "Centro",
        width: "Ancho",
        height: "Alto",
        size: "Tama\xF1o",
        ratio: "Proporci\xF3n"
      },
      controller: {
        edit: "Editar",
        unlink: "Desvincular",
        remove: "RemoveQuitar",
        insertRowAbove: "Insertar fila arriba",
        insertRowBelow: "Insertar fila debajo",
        deleteRow: "Eliminar fila",
        insertColumnBefore: "Insertar columna antes",
        insertColumnAfter: "Insertar columna despu\xE9s",
        deleteColumn: "Eliminar columna",
        fixedColumnWidth: "Ancho de columna fijo",
        resize100: "Redimensionar 100%",
        resize75: "Redimensionar 75%",
        resize50: "Redimensionar 50%",
        resize25: "Redimensionar 25%",
        autoSize: "Tama\xF1o autom\xE1tico",
        mirrorHorizontal: "Espejo, Horizontal",
        mirrorVertical: "Espejo, Vertical",
        rotateLeft: "Girar a la izquierda",
        rotateRight: "Girar a la derecha",
        maxSize: "Tama\xF1o m\xE1ximo",
        minSize: "Tama\xF1o min\xEDmo",
        tableHeader: "Encabezado de tabla",
        mergeCells: "Combinar celdas",
        splitCells: "Dividir celdas",
        HorizontalSplit: "Divisi\xF3n horizontal",
        VerticalSplit: "Divisi\xF3n vertical"
      },
      menu: {
        spaced: "Espaciado",
        bordered: "Bordeado",
        neon: "Ne\xF3n",
        translucent: "Transl\xFAcido",
        shadow: "Sombreado",
        code: "C\xF3digo"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "es", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(qe);
const je = qe.exports;
var We = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "fr",
      toolbar: {
        default: "D\xE9faut",
        save: "Sauvegarder",
        font: "Police",
        formats: "Formats",
        fontSize: "Taille",
        bold: "Gras",
        underline: "Soulign\xE9",
        italic: "Italique",
        strike: "Barr\xE9",
        subscript: "Indice",
        superscript: "Exposant",
        removeFormat: "Effacer le formatage",
        fontColor: "Couleur du texte",
        hiliteColor: "Couleur en arri\xE8re plan",
        indent: "Indenter",
        outdent: "D\xE9sindenter",
        align: "Alignement",
        alignLeft: "\xC0 gauche",
        alignRight: "\xC0 droite",
        alignCenter: "Centr\xE9",
        alignJustify: "Justifi\xE9",
        list: "Liste",
        orderList: "Ordonn\xE9e",
        unorderList: "Non-ordonn\xE9e",
        horizontalRule: "Ligne horizontale",
        hr_solid: "Solide",
        hr_dotted: "Points",
        hr_dashed: "Tirets",
        table: "Table",
        link: "Lien",
        math: "Math",
        image: "Image",
        video: "Video",
        audio: "Audio",
        fullScreen: "Plein \xE9cran",
        showBlocks: "Voir les blocs",
        codeView: "Voir le code",
        undo: "Annuler",
        redo: "R\xE9tablir",
        preview: "Pr\xE9visualiser",
        print: "Imprimer",
        tag_p: "Paragraphe",
        tag_div: "Normal (DIV)",
        tag_h: "Titre",
        tag_blockquote: "Citation",
        tag_pre: "Code",
        template: "Template",
        lineHeight: "Hauteur de la ligne",
        paragraphStyle: "Style de paragraphe",
        textStyle: "Style de texte",
        imageGallery: "Galerie d'images",
        dir_ltr: "De gauche \xE0 droite",
        dir_rtl: "De droite \xE0 gauche",
        mention: "Mention"
      },
      dialogBox: {
        linkBox: {
          title: "Ins\xE9rer un lien",
          url: "Adresse URL du lien",
          text: "Texte \xE0 afficher",
          newWindowCheck: "Ouvrir dans une nouvelle fen\xEAtre",
          downloadLinkCheck: "Lien de t\xE9l\xE9chargement",
          bookmark: "Signet"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Notation math\xE9matique",
          fontSizeLabel: "Taille",
          previewLabel: "Pr\xE9visualiser"
        },
        imageBox: {
          title: "Ins\xE9rer une image",
          file: "S\xE9lectionner le fichier",
          url: "Adresse URL du fichier",
          altText: "Texte Alternatif"
        },
        videoBox: {
          title: "Ins\xE9rer une vid\xE9o",
          file: "S\xE9lectionner le fichier",
          url: "URL d\u2019int\xE9gration du m\xE9dia, YouTube/Vimeo"
        },
        audioBox: {
          title: "Ins\xE9rer un fichier audio",
          file: "S\xE9lectionner le fichier",
          url: "Adresse URL du fichier"
        },
        browser: {
          tags: "Mots cl\xE9s",
          search: "Chercher"
        },
        caption: "Ins\xE9rer une description",
        close: "Fermer",
        submitButton: "Appliquer",
        revertButton: "Revenir en arri\xE8re",
        proportion: "Maintenir le rapport hauteur/largeur",
        basic: "Basique",
        left: "Gauche",
        right: "Droite",
        center: "Centr\xE9",
        width: "Largeur",
        height: "Hauteur",
        size: "Taille",
        ratio: "Rapport"
      },
      controller: {
        edit: "Modifier",
        unlink: "Supprimer un lien",
        remove: "Effacer",
        insertRowAbove: "Ins\xE9rer une ligne en dessous",
        insertRowBelow: "Ins\xE9rer une ligne au dessus",
        deleteRow: "Effacer la ligne",
        insertColumnBefore: "Ins\xE9rer une colonne avant",
        insertColumnAfter: "Ins\xE9rer une colonne apr\xE8s",
        deleteColumn: "Effacer la colonne",
        fixedColumnWidth: "Largeur de colonne fixe",
        resize100: "Redimensionner \xE0 100%",
        resize75: "Redimensionner \xE0 75%",
        resize50: "Redimensionner \xE0 50%",
        resize25: "Redimensionner \xE0 25%",
        autoSize: "Taille automatique",
        mirrorHorizontal: "Mirroir, Horizontal",
        mirrorVertical: "Mirroir, Vertical",
        rotateLeft: "Rotation \xE0 gauche",
        rotateRight: "Rotation \xE0 droite",
        maxSize: "Taille max",
        minSize: "Taille min",
        tableHeader: "En-t\xEAte de table",
        mergeCells: "Fusionner les cellules",
        splitCells: "Diviser les Cellules",
        HorizontalSplit: "Scission horizontale",
        VerticalSplit: "Scission verticale"
      },
      menu: {
        spaced: "Espacement",
        bordered: "Ligne de d\xE9marcation",
        neon: "N\xE9on",
        translucent: "Translucide",
        shadow: "Ombre",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "fr", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(We);
const Ye = We.exports;
var Xe = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "he",
      toolbar: {
        default: "\u05D1\u05E8\u05D9\u05E8\u05EA \u05DE\u05D7\u05D3\u05DC",
        save: "\u05E9\u05DE\u05D5\u05E8",
        font: "\u05D2\u05D5\u05E4\u05DF",
        formats: "\u05E2\u05D9\u05E6\u05D5\u05D1",
        fontSize: "\u05D2\u05D5\u05D3\u05DC",
        bold: "\u05DE\u05D5\u05D3\u05D2\u05E9",
        underline: "\u05E7\u05D5 \u05EA\u05D7\u05EA\u05D5\u05DF",
        italic: "\u05E0\u05D8\u05D5\u05D9",
        strike: "\u05E7\u05D5 \u05D7\u05D5\u05E6\u05D4",
        subscript: "\u05E2\u05D9\u05DC\u05D9",
        superscript: "\u05EA\u05D7\u05EA\u05D9",
        removeFormat: "\u05D4\u05E1\u05E8 \u05E2\u05D9\u05E6\u05D5\u05D1",
        fontColor: "\u05E6\u05D1\u05E2 \u05D2\u05D5\u05E4\u05DF",
        hiliteColor: "\u05E6\u05D1\u05E2 \u05E7\u05D5 \u05EA\u05D7\u05EA\u05D5\u05DF",
        indent: "\u05D4\u05D2\u05D3\u05DC \u05DB\u05E0\u05D9\u05E1\u05D4",
        outdent: "\u05D4\u05E7\u05D8\u05DF \u05DB\u05E0\u05D9\u05E1\u05D4",
        align: "\u05D9\u05D9\u05E9\u05D5\u05E8",
        alignLeft: "\u05D9\u05D9\u05E9\u05E8 \u05DC\u05E9\u05DE\u05D0\u05DC",
        alignRight: "\u05D9\u05D9\u05E9\u05E8 \u05DC\u05D9\u05DE\u05D9\u05DF",
        alignCenter: "\u05DE\u05E8\u05DB\u05D6",
        alignJustify: "\u05D9\u05D9\u05E9\u05E8 \u05DC\u05E9\u05E0\u05D9 \u05D4\u05E6\u05D3\u05D3\u05D9\u05DD",
        list: "\u05E8\u05E9\u05D9\u05DE\u05D4",
        orderList: "\u05DE\u05E1\u05E4\u05D5\u05E8",
        unorderList: "\u05EA\u05D1\u05DC\u05D9\u05D8\u05D9\u05DD",
        horizontalRule: "\u05E7\u05D5 \u05D0\u05D5\u05E4\u05E7\u05D9",
        hr_solid: "\u05E7\u05D5",
        hr_dotted: "\u05E0\u05E7\u05D5\u05D3\u05D5\u05EA",
        hr_dashed: "\u05DE\u05E7\u05E4\u05D9\u05DD",
        table: "\u05D8\u05D1\u05DC\u05D4",
        link: "\u05E7\u05D9\u05E9\u05D5\u05E8",
        math: "\u05DE\u05EA\u05DE\u05D8\u05D9\u05E7\u05D4",
        image: "\u05EA\u05DE\u05D5\u05E0\u05D4",
        video: "\u05D7\u05D5\u05D6\u05D9",
        audio: "\u05E9\u05DE\u05E2",
        fullScreen: "\u05DE\u05E1\u05DA \u05DE\u05DC\u05D0",
        showBlocks: "\u05D4\u05E6\u05D2 \u05D2\u05D5\u05E9\u05D9\u05DD",
        codeView: "\u05D4\u05E6\u05D2 \u05E7\u05D5\u05D3",
        undo: "\u05D1\u05D8\u05DC",
        redo: "\u05D7\u05D6\u05D5\u05E8",
        preview: "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4",
        print: "\u05D4\u05D3\u05E4\u05E1",
        tag_p: "\u05E4\u05E1\u05E7\u05D4",
        tag_div: "\u05E8\u05D2\u05D9\u05DC\u05D4 (DIV)",
        tag_h: "\u05DB\u05D5\u05EA\u05E8\u05EA",
        tag_blockquote: "\u05E6\u05D9\u05D8\u05D5\u05D8",
        tag_pre: "\u05E7\u05D5\u05D3",
        template: "\u05EA\u05D1\u05E0\u05D9\u05EA",
        lineHeight: "\u05D2\u05D5\u05D1\u05D4 \u05D4\u05E9\u05D5\u05E8\u05D4",
        paragraphStyle: "\u05E1\u05D2\u05E0\u05D5\u05DF \u05E4\u05E1\u05E7\u05D4",
        textStyle: "\u05E1\u05D2\u05E0\u05D5\u05DF \u05D2\u05D5\u05E4\u05DF",
        imageGallery: "\u05D2\u05DC\u05E8\u05D9\u05EA \u05EA\u05DE\u05D5\u05E0\u05D5\u05EA",
        dir_ltr: "\u05DE\u05E9\u05DE\u05D0\u05DC \u05DC\u05D9\u05DE\u05D9\u05DF",
        dir_rtl: "\u05DE\u05D9\u05DE\u05D9\u05DF \u05DC\u05E9\u05DE\u05D0\u05DC",
        mention: "\u05D4\u05D6\u05DB\u05E8"
      },
      dialogBox: {
        linkBox: {
          title: "\u05D4\u05DB\u05E0\u05E1 \u05E7\u05E9\u05D5\u05E8",
          url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05E7\u05E9\u05D5\u05E8",
          text: "\u05EA\u05D9\u05D0\u05D5\u05E8",
          newWindowCheck: "\u05E4\u05EA\u05D7 \u05D1\u05D7\u05DC\u05D5\u05DF \u05D7\u05D3\u05E9",
          downloadLinkCheck: "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05D4\u05D5\u05E8\u05D3\u05D4",
          bookmark: "\u05E1\u05DE\u05E0\u05D9\u05D4"
        },
        mathBox: {
          title: "\u05E0\u05D5\u05E1\u05D7\u05D4",
          inputLabel: "\u05E1\u05D9\u05DE\u05E0\u05D9\u05DD \u05DE\u05EA\u05DE\u05D8\u05D9\u05DD",
          fontSizeLabel: "\u05D2\u05D5\u05D3\u05DC \u05D2\u05D5\u05E4\u05DF",
          previewLabel: "\u05EA\u05E6\u05D5\u05D2\u05D4 \u05DE\u05E7\u05D3\u05D9\u05DE\u05D4"
        },
        imageBox: {
          title: "\u05D4\u05DB\u05E0\u05E1 \u05EA\u05DE\u05D5\u05E0\u05D4",
          file: "\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05D1\u05E5",
          url: "\u05DB\u05EA\u05D5\u05D1\u05EA URL \u05EA\u05DE\u05D5\u05E0\u05D4",
          altText: "\u05EA\u05D9\u05D0\u05D5\u05E8 (\u05EA\u05D2\u05D9\u05EA alt)"
        },
        videoBox: {
          title: "\u05D4\u05DB\u05E0\u05E1 \u05E1\u05E8\u05D8\u05D5\u05DF",
          file: "\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05D1\u05E5",
          url: "\u05DB\u05EA\u05D5\u05D1\u05EA \u05D4\u05D8\u05DE\u05E2\u05D4 YouTube/Vimeo"
        },
        audioBox: {
          title: "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05DE\u05E2",
          file: "\u05D1\u05D7\u05E8 \u05DE\u05E7\u05D5\u05D1\u05E5",
          url: "\u05DB\u05EA\u05D5\u05D1\u05EA URL \u05E9\u05DE\u05E2"
        },
        browser: {
          tags: "\u05EA\u05D2",
          search: "\u05D7\u05E4\u05E9"
        },
        caption: "\u05D4\u05DB\u05E0\u05E1 \u05EA\u05D9\u05D0\u05D5\u05E8",
        close: "\u05E1\u05D2\u05D5\u05E8",
        submitButton: "\u05E9\u05DC\u05D7",
        revertButton: "\u05D1\u05D8\u05DC",
        proportion: "\u05E9\u05DE\u05E8 \u05D9\u05D7\u05E1",
        basic: "\u05D1\u05E1\u05D9\u05E1\u05D9",
        left: "\u05E9\u05DE\u05D0\u05DC",
        right: "\u05D9\u05DE\u05D9\u05DF",
        center: "\u05DE\u05E8\u05DB\u05D6",
        width: "\u05E8\u05D5\u05D7\u05D1",
        height: "\u05D2\u05D5\u05D1\u05D4",
        size: "\u05D2\u05D5\u05D3\u05DC",
        ratio: "\u05D9\u05D7\u05E1"
      },
      controller: {
        edit: "\u05E2\u05E8\u05D5\u05DA",
        unlink: "\u05D4\u05E1\u05E8 \u05E7\u05D9\u05E9\u05D5\u05E8\u05D9\u05DD",
        remove: "\u05D4\u05E1\u05E8",
        insertRowAbove: "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05D5\u05E8\u05D4 \u05DE\u05E2\u05DC",
        insertRowBelow: "\u05D4\u05DB\u05E0\u05E1 \u05E9\u05D5\u05E8\u05D4 \u05DE\u05EA\u05D7\u05EA",
        deleteRow: "\u05DE\u05D7\u05E7 \u05E9\u05D5\u05E8\u05D4",
        insertColumnBefore: "\u05D4\u05DB\u05E0\u05E1 \u05E2\u05DE\u05D5\u05D3\u05D4 \u05DC\u05E4\u05E0\u05D9",
        insertColumnAfter: "\u05D4\u05DB\u05E0\u05E1 \u05E2\u05DE\u05D5\u05D3\u05D4 \u05D0\u05D7\u05E8\u05D9",
        deleteColumn: "\u05DE\u05D7\u05E7 \u05E2\u05DE\u05D5\u05D3\u05D4",
        fixedColumnWidth: "\u05E7\u05D1\u05E2 \u05E8\u05D5\u05D7\u05D1 \u05E2\u05DE\u05D5\u05D3\u05D5\u05EA",
        resize100: "\u05DC\u05DC\u05D0 \u05D4\u05E7\u05D8\u05E0\u05D4",
        resize75: "\u05D4\u05E7\u05D8\u05DF 75%",
        resize50: "\u05D4\u05E7\u05D8\u05DF 50%",
        resize25: "\u05D4\u05E7\u05D8\u05DF 25%",
        autoSize: "\u05D4\u05E7\u05D8\u05DF \u05D0\u05D5\u05D8\u05D5\u05DE\u05D8\u05D9\u05EA",
        mirrorHorizontal: "\u05D4\u05E4\u05D5\u05DA \u05DC\u05E8\u05D5\u05D7\u05D1",
        mirrorVertical: "\u05D4\u05E4\u05D5\u05DA \u05DC\u05D2\u05D5\u05D1\u05D4",
        rotateLeft: "\u05E1\u05D5\u05D1\u05D1 \u05E9\u05DE\u05D0\u05DC\u05D4",
        rotateRight: "\u05E1\u05D5\u05D1\u05D1 \u05D9\u05DE\u05D9\u05E0\u05D4",
        maxSize: "\u05D2\u05D5\u05D3\u05DC \u05DE\u05E8\u05D1\u05D9",
        minSize: "\u05D2\u05D5\u05D3\u05DC \u05DE\u05D6\u05E2\u05E8\u05D9",
        tableHeader: "\u05DB\u05D5\u05EA\u05E8\u05EA \u05D8\u05D1\u05DC\u05D4",
        mergeCells: "\u05DE\u05D6\u05D2 \u05EA\u05D0\u05D9\u05DD",
        splitCells: "\u05E4\u05E6\u05DC \u05EA\u05D0",
        HorizontalSplit: "\u05E4\u05E6\u05DC \u05DC\u05D2\u05D5\u05D1\u05D4",
        VerticalSplit: "\u05E4\u05E6\u05DC \u05DC\u05E8\u05D5\u05D7\u05D1"
      },
      menu: {
        spaced: "\u05DE\u05E8\u05D5\u05D5\u05D7",
        bordered: "\u05D1\u05E2\u05DC \u05DE\u05D9\u05EA\u05D0\u05E8",
        neon: "\u05D6\u05D5\u05D4\u05E8",
        translucent: "\u05E9\u05E7\u05D5\u05E3 \u05DC\u05DE\u05D7\u05E6\u05D4",
        shadow: "\u05E6\u05DC",
        code: "\u05E7\u05D5\u05D3"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "he", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Xe);
const Ke = Xe.exports;
var Je = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG una finestra con un documento");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "it",
      toolbar: {
        default: "Predefinita",
        save: "Salva",
        font: "Font",
        formats: "Formato",
        fontSize: "Grandezza",
        bold: "Grassetto",
        underline: "Sottolineato",
        italic: "Corsivo",
        strike: "Barrato",
        subscript: "Apice",
        superscript: "Pedice",
        removeFormat: "Rimuovi formattazione",
        fontColor: "Colore testo",
        hiliteColor: "Colore sottolineatura",
        indent: "Aumenta rientro",
        outdent: "Riduci rientro",
        align: "Allinea",
        alignLeft: "Allinea a sinistra",
        alignRight: "Allinea a destra",
        alignCenter: "Allinea al centro",
        alignJustify: "Giustifica testo",
        list: "Elenco",
        orderList: "Elenco numerato",
        unorderList: "Elenco puntato",
        horizontalRule: "Linea orizzontale",
        hr_solid: "Linea continua",
        hr_dotted: "Puntini",
        hr_dashed: "Trattini",
        table: "Tabella",
        link: "Collegamento ipertestuale",
        math: "Formula matematica",
        image: "Immagine",
        video: "Video",
        audio: "Audio",
        fullScreen: "A tutto schermo",
        showBlocks: "Visualizza blocchi",
        codeView: "Visualizza codice",
        undo: "Annulla",
        redo: "Ripristina",
        preview: "Anteprima",
        print: "Stampa",
        tag_p: "Paragrafo",
        tag_div: "Normale (DIV)",
        tag_h: "Titolo",
        tag_blockquote: "Citazione",
        tag_pre: "Codice",
        template: "Modello",
        lineHeight: "Interlinea",
        paragraphStyle: "Stile paragrafo",
        textStyle: "Stile testo",
        imageGallery: "Galleria di immagini",
        dir_ltr: "Da sinistra a destra",
        dir_rtl: "Da destra a sinistra",
        mention: "Menzione"
      },
      dialogBox: {
        linkBox: {
          title: "Inserisci un link",
          url: "Indirizzo",
          text: "Testo da visualizzare",
          newWindowCheck: "Apri in una nuova finestra",
          downloadLinkCheck: "Link per scaricare",
          bookmark: "Segnalibro"
        },
        mathBox: {
          title: "Matematica",
          inputLabel: "Notazione matematica",
          fontSizeLabel: "Grandezza testo",
          previewLabel: "Anteprima"
        },
        imageBox: {
          title: "Inserisci immagine",
          file: "Seleziona da file",
          url: "Indirizzo immagine",
          altText: "Testo alternativo (ALT)"
        },
        videoBox: {
          title: "Inserisci video",
          file: "Seleziona da file",
          url: "Indirizzo video di embed, YouTube/Vimeo"
        },
        audioBox: {
          title: "Inserisci audio",
          file: "Seleziona da file",
          url: "Indirizzo audio"
        },
        browser: {
          tags: "tag",
          search: "Ricerca"
        },
        caption: "Inserisci didascalia",
        close: "Chiudi",
        submitButton: "Invia",
        revertButton: "Annulla",
        proportion: "Proporzionale",
        basic: "Da impostazione",
        left: "Sinistra",
        right: "Destra",
        center: "Centrato",
        width: "Larghezza",
        height: "Altezza",
        size: "Dimensioni",
        ratio: "Rapporto"
      },
      controller: {
        edit: "Modifica",
        unlink: "Elimina link",
        remove: "Rimuovi",
        insertRowAbove: "Inserisci riga sopra",
        insertRowBelow: "Inserisci riga sotto",
        deleteRow: "Cancella riga",
        insertColumnBefore: "Inserisci colonna prima",
        insertColumnAfter: "Inserisci colonna dopo",
        deleteColumn: "Cancella colonna",
        fixedColumnWidth: "Larghezza delle colonne fissa",
        resize100: "Ridimensiona 100%",
        resize75: "Ridimensiona 75%",
        resize50: "Ridimensiona 50%",
        resize25: "Ridimensiona 25%",
        autoSize: "Ridimensione automatica",
        mirrorHorizontal: "Capovolgi orizzontalmente",
        mirrorVertical: "Capovolgi verticalmente",
        rotateLeft: "Ruota a sinistra",
        rotateRight: "Ruota a destra",
        maxSize: "Dimensione massima",
        minSize: "Dimensione minima",
        tableHeader: "Intestazione tabella",
        mergeCells: "Unisci celle",
        splitCells: "Dividi celle",
        HorizontalSplit: "Separa orizontalmente",
        VerticalSplit: "Separa verticalmente"
      },
      menu: {
        spaced: "Spaziato",
        bordered: "Bordato",
        neon: "Luminoso",
        translucent: "Traslucido",
        shadow: "Ombra",
        code: "Codice"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "it", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Je);
const Ze = Je.exports;
var Qe = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "ja",
      toolbar: {
        default: "\u30C7\u30D5\u30A9\u30EB\u30C8",
        save: "\u4FDD\u5B58",
        font: "\u30D5\u30A9\u30F3\u30C8",
        formats: "\u6BB5\u843D\u5F62\u5F0F",
        fontSize: "\u30B5\u30A4\u30BA",
        bold: "\u592A\u5B57",
        underline: "\u4E0B\u7DDA",
        italic: "\u30A4\u30BF\u30EA\u30C3\u30AF",
        strike: "\u53D6\u308A\u6D88\u3057\u7DDA",
        subscript: "\u4E0B\u4ED8\u304D",
        superscript: "\u4E0A\u4ED8\u304D",
        removeFormat: "\u5F62\u5F0F\u3092\u524A\u9664",
        fontColor: "\u6587\u5B57\u8272",
        hiliteColor: "\u6587\u5B57\u306E\u80CC\u666F\u8272",
        indent: "\u30A4\u30F3\u30C7\u30F3\u30C8",
        outdent: "\u30A4\u30F3\u30C7\u30F3\u30C8",
        align: "\u30BD\u30FC\u30C8",
        alignLeft: "\u5DE6\u63C3\u3048",
        alignRight: "\u53F3\u63C3\u3048",
        alignCenter: "\u4E2D\u592E\u63C3\u3048",
        alignJustify: "\u4E21\u7AEF\u63C3\u3048",
        list: "\u30EA\u30B9\u30C8",
        orderList: "\u6570\u5024\u30D6\u30EA\u30C3\u30C8",
        unorderList: "\u5186\u5F62\u30D6\u30EA\u30C3\u30C8",
        horizontalRule: "\u6C34\u5E73\u7DDA\u3092\u633F\u5165",
        hr_solid: "\u5B9F\u7DDA",
        hr_dotted: "\u70B9\u7DDA",
        hr_dashed: "\u30C0\u30C3\u30B7\u30E5",
        table: "\u30C6\u30FC\u30D6\u30EB",
        link: "\u30EA\u30F3\u30AF",
        math: "\u6570\u5B66",
        image: "\u753B\u50CF",
        video: "\u52D5\u753B",
        audio: "\u30AA\u30FC\u30C7\u30A3\u30AA",
        fullScreen: "\u30D5\u30EB\u30B9\u30AF\u30EA\u30FC\u30F3",
        showBlocks: "\u30D6\u30ED\u30C3\u30AF\u8868\u793A",
        codeView: "HTML\u306E\u7DE8\u96C6",
        undo: "\u5143\u306B\u623B\u3059",
        redo: "\u518D\u5B9F\u884C",
        preview: "\u30D7\u30EC\u30D3\u30E5\u30FC",
        print: "\u5370\u5237",
        tag_p: "\u672C\u6587",
        tag_div: "\u57FA\u672C\uFF08DIV\uFF09",
        tag_h: "\u30BF\u30A4\u30C8\u30EB",
        tag_blockquote: "\u5F15\u7528",
        tag_pre: "\u30B3\u30FC\u30C9",
        template: "\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8",
        lineHeight: "\u884C\u306E\u9AD8\u3055",
        paragraphStyle: "\u6BB5\u843D\u30B9\u30BF\u30A4\u30EB",
        textStyle: "\u30C6\u30AD\u30B9\u30C8\u30B9\u30BF\u30A4\u30EB",
        imageGallery: "\u30A4\u30E1\u30FC\u30B8\u30AE\u30E3\u30E9\u30EA\u30FC",
        dir_ltr: "\u5DE6\u304B\u3089\u53F3\u3078",
        dir_rtl: "\u53F3\u304B\u3089\u5DE6\u306B",
        mention: "\u8A00\u53CA\u3059\u308B"
      },
      dialogBox: {
        linkBox: {
          title: "\u30EA\u30F3\u30AF\u306E\u633F\u5165",
          url: "\u30A4\u30F3\u30BF\u30FC\u30CD\u30C3\u30C8\u30A2\u30C9\u30EC\u30B9",
          text: "\u753B\u9762\u306E\u30C6\u30AD\u30B9\u30C8",
          newWindowCheck: "\u5225\u30A6\u30A3\u30F3\u30C9\u30A6\u3067\u958B\u304F",
          downloadLinkCheck: "\u30C0\u30A6\u30F3\u30ED\u30FC\u30C9\u30EA\u30F3\u30AF",
          bookmark: "\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF"
        },
        mathBox: {
          title: "\u6570\u5B66",
          inputLabel: "\u6570\u5B66\u8868\u8A18",
          fontSizeLabel: "\u30B5\u30A4\u30BA",
          previewLabel: "\u30D7\u30EC\u30D3\u30E5\u30FC"
        },
        imageBox: {
          title: "\u753B\u50CF\u306E\u633F\u5165",
          file: "\u30D5\u30A1\u30A4\u30EB\u306E\u9078\u629E",
          url: "\u30A4\u30E1\u30FC\u30B8\u30A2\u30C9\u30EC\u30B9",
          altText: "\u7F6E\u63DB\u6587\u5B57\u5217"
        },
        videoBox: {
          title: "\u52D5\u753B\u3092\u633F\u5165",
          file: "\u30D5\u30A1\u30A4\u30EB\u306E\u9078\u629E",
          url: "\u30E1\u30C7\u30A3\u30A2\u57CB\u3081\u8FBC\u307F\u30A2\u30C9\u30EC\u30B9, YouTube/Vimeo"
        },
        audioBox: {
          title: "\u30AA\u30FC\u30C7\u30A3\u30AA\u3092\u633F\u5165",
          file: "\u30D5\u30A1\u30A4\u30EB\u306E\u9078\u629E",
          url: "\u30AA\u30FC\u30C7\u30A3\u30AA\u30A2\u30C9\u30EC\u30B9"
        },
        browser: {
          tags: "\u30BF\u30B0",
          search: "\u63A2\u3059"
        },
        caption: "\u8AAC\u660E\u4ED8\u3051",
        close: "\u9589\u3058\u308B",
        submitButton: "\u78BA\u8A8D",
        revertButton: "\u5143\u306B\u623B\u3059",
        proportion: "\u306E\u5272\u5408\u30AB\u30B9\u30BF\u30DE\u30A4\u30BA",
        basic: "\u57FA\u672C",
        left: "\u5DE6",
        right: "\u53F3",
        center: "\u4E2D\u592E",
        width: "\u6A2A",
        height: "\u7E26",
        size: "\u30B5\u30A4\u30BA",
        ratio: "\u6BD4\u7387"
      },
      controller: {
        edit: "\u7DE8\u96C6",
        unlink: "\u30EA\u30F3\u30AF\u89E3\u9664",
        remove: "\u524A\u9664",
        insertRowAbove: "\u4E0A\u306B\u884C\u3092\u633F\u5165",
        insertRowBelow: "\u4E0B\u306B\u884C\u3092\u633F\u5165",
        deleteRow: "\u884C\u306E\u524A\u9664",
        insertColumnBefore: "\u5DE6\u306B\u5217\u3092\u633F\u5165",
        insertColumnAfter: "\u53F3\u306B\u5217\u3092\u633F\u5165",
        deleteColumn: "\u5217\u3092\u524A\u9664\u3059\u308B",
        fixedColumnWidth: "\u56FA\u5B9A\u5217\u5E45",
        resize100: "100\uFF05 \u30B5\u30A4\u30BA",
        resize75: "75\uFF05 \u30B5\u30A4\u30BA",
        resize50: "50\uFF05 \u30B5\u30A4\u30BA",
        resize25: "25\uFF05 \u30B5\u30A4\u30BA",
        autoSize: "\u81EA\u52D5\u30B5\u30A4\u30BA",
        mirrorHorizontal: "\u5DE6\u53F3\u53CD\u8EE2",
        mirrorVertical: "\u4E0A\u4E0B\u53CD\u8EE2",
        rotateLeft: "\u5DE6\u306B\u56DE\u8EE2",
        rotateRight: "\u53F3\u306B\u56DE\u8EE2",
        maxSize: "\u6700\u5927\u30B5\u30A4\u30BA",
        minSize: "\u6700\u5C0F\u30B5\u30A4\u30BA",
        tableHeader: "\u8868\u306E\u30D8\u30C3\u30C0\u30FC",
        mergeCells: "\u30BB\u30EB\u306E\u7D50\u5408",
        splitCells: "\u30BB\u30EB\u3092\u5206\u5272",
        HorizontalSplit: "\u6A2A\u5206\u5272",
        VerticalSplit: "\u5782\u76F4\u5206\u5272"
      },
      menu: {
        spaced: "\u6587\u5B57\u9593\u9694",
        bordered: "\u5883\u754C\u7DDA",
        neon: "\u30CD\u30AA\u30F3",
        translucent: "\u534A\u900F\u660E",
        shadow: "\u5F71",
        code: "\u30B3\u30FC\u30C9"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ja", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(Qe);
const et = Qe.exports;
var tt = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "ko",
      toolbar: {
        default: "\uAE30\uBCF8\uAC12",
        save: "\uC800\uC7A5",
        font: "\uAE00\uAF34",
        formats: "\uBB38\uB2E8 \uD615\uC2DD",
        fontSize: "\uD06C\uAE30",
        bold: "\uAD75\uAC8C",
        underline: "\uBC11\uC904",
        italic: "\uAE30\uC6B8\uC784",
        strike: "\uCDE8\uC18C\uC120",
        subscript: "\uC544\uB798 \uCCA8\uC790",
        superscript: "\uC704 \uCCA8\uC790",
        removeFormat: "\uD615\uC2DD \uC81C\uAC70",
        fontColor: "\uAE00\uC790\uC0C9",
        hiliteColor: "\uBC30\uACBD\uC0C9",
        indent: "\uB4E4\uC5EC\uC4F0\uAE30",
        outdent: "\uB0B4\uC5B4\uC4F0\uAE30",
        align: "\uC815\uB82C",
        alignLeft: "\uC67C\uCABD \uC815\uB82C",
        alignRight: "\uC624\uB978\uCABD \uC815\uB82C",
        alignCenter: "\uAC00\uC6B4\uB370 \uC815\uB82C",
        alignJustify: "\uC591\uCABD \uC815\uB82C",
        list: "\uB9AC\uC2A4\uD2B8",
        orderList: "\uC22B\uC790\uD615 \uB9AC\uC2A4\uD2B8",
        unorderList: "\uC6D0\uD615 \uB9AC\uC2A4\uD2B8",
        horizontalRule: "\uAC00\uB85C \uC904 \uC0BD\uC785",
        hr_solid: "\uC2E4\uC120",
        hr_dotted: "\uC810\uC120",
        hr_dashed: "\uB300\uC2DC",
        table: "\uD14C\uC774\uBE14",
        link: "\uB9C1\uD06C",
        math: "\uC218\uC2DD",
        image: "\uC774\uBBF8\uC9C0",
        video: "\uB3D9\uC601\uC0C1",
        audio: "\uC624\uB514\uC624",
        fullScreen: "\uC804\uCCB4 \uD654\uBA74",
        showBlocks: "\uBE14\uB85D \uBCF4\uAE30",
        codeView: "HTML \uD3B8\uC9D1",
        undo: "\uC2E4\uD589 \uCDE8\uC18C",
        redo: "\uB2E4\uC2DC \uC2E4\uD589",
        preview: "\uBBF8\uB9AC\uBCF4\uAE30",
        print: "\uC778\uC1C4",
        tag_p: "\uBCF8\uBB38",
        tag_div: "\uAE30\uBCF8 (DIV)",
        tag_h: "\uC81C\uBAA9",
        tag_blockquote: "\uC778\uC6A9\uBB38",
        tag_pre: "\uCF54\uB4DC",
        template: "\uD15C\uD50C\uB9BF",
        lineHeight: "\uC904 \uB192\uC774",
        paragraphStyle: "\uBB38\uB2E8 \uC2A4\uD0C0\uC77C",
        textStyle: "\uAE00\uC790 \uC2A4\uD0C0\uC77C",
        imageGallery: "\uC774\uBBF8\uC9C0 \uAC24\uB7EC\uB9AC",
        dir_ltr: "\uC67C\uCABD\uC5D0\uC11C \uC624\uB978\uCABD",
        dir_rtl: "\uC624\uB978\uCABD\uC5D0\uC11C \uC67C\uCABD",
        mention: "\uBA58\uC158"
      },
      dialogBox: {
        linkBox: {
          title: "\uB9C1\uD06C \uC0BD\uC785",
          url: "\uC778\uD130\uB137 \uC8FC\uC18C",
          text: "\uD654\uBA74 \uD14D\uC2A4\uD2B8",
          newWindowCheck: "\uC0C8\uCC3D\uC73C\uB85C \uC5F4\uAE30",
          downloadLinkCheck: "\uB2E4\uC6B4\uB85C\uB4DC \uB9C1\uD06C",
          bookmark: "\uBD81\uB9C8\uD06C"
        },
        mathBox: {
          title: "\uC218\uC2DD",
          inputLabel: "\uC218\uD559\uC801 \uD45C\uAE30\uBC95",
          fontSizeLabel: "\uAE00\uC790 \uD06C\uAE30",
          previewLabel: "\uBBF8\uB9AC\uBCF4\uAE30"
        },
        imageBox: {
          title: "\uC774\uBBF8\uC9C0 \uC0BD\uC785",
          file: "\uD30C\uC77C \uC120\uD0DD",
          url: "\uC774\uBBF8\uC9C0 \uC8FC\uC18C",
          altText: "\uB300\uCCB4 \uBB38\uC790\uC5F4"
        },
        videoBox: {
          title: "\uB3D9\uC601\uC0C1 \uC0BD\uC785",
          file: "\uD30C\uC77C \uC120\uD0DD",
          url: "\uBBF8\uB514\uC5B4 \uC784\uBCA0\uB4DC \uC8FC\uC18C, \uC720\uD29C\uBE0C/\uBE44\uBA54\uC624"
        },
        audioBox: {
          title: "\uC624\uB514\uC624 \uC0BD\uC785",
          file: "\uD30C\uC77C \uC120\uD0DD",
          url: "\uC624\uB514\uC624 \uD30C\uC77C \uC8FC\uC18C"
        },
        browser: {
          tags: "\uD0DC\uADF8",
          search: "\uAC80\uC0C9"
        },
        caption: "\uC124\uBA85 \uB123\uAE30",
        close: "\uB2EB\uAE30",
        submitButton: "\uD655\uC778",
        revertButton: "\uB418\uB3CC\uB9AC\uAE30",
        proportion: "\uBE44\uC728 \uB9DE\uCDA4",
        basic: "\uAE30\uBCF8",
        left: "\uC67C\uCABD",
        right: "\uC624\uB978\uCABD",
        center: "\uAC00\uC6B4\uB370",
        width: "\uAC00\uB85C",
        height: "\uC138\uB85C",
        size: "\uD06C\uAE30",
        ratio: "\uBE44\uC728"
      },
      controller: {
        edit: "\uD3B8\uC9D1",
        unlink: "\uB9C1\uD06C \uD574\uC81C",
        remove: "\uC0AD\uC81C",
        insertRowAbove: "\uC704\uC5D0 \uD589 \uC0BD\uC785",
        insertRowBelow: "\uC544\uB798\uC5D0 \uD589 \uC0BD\uC785",
        deleteRow: "\uD589 \uC0AD\uC81C",
        insertColumnBefore: "\uC67C\uCABD\uC5D0 \uC5F4 \uC0BD\uC785",
        insertColumnAfter: "\uC624\uB978\uCABD\uC5D0 \uC5F4 \uC0BD\uC785",
        deleteColumn: "\uC5F4 \uC0AD\uC81C",
        fixedColumnWidth: "\uACE0\uC815 \uB41C \uC5F4 \uB108\uBE44",
        resize100: "100% \uD06C\uAE30",
        resize75: "75% \uD06C\uAE30",
        resize50: "50% \uD06C\uAE30",
        resize25: "25% \uD06C\uAE30",
        autoSize: "\uC790\uB3D9 \uD06C\uAE30",
        mirrorHorizontal: "\uC88C\uC6B0 \uBC18\uC804",
        mirrorVertical: "\uC0C1\uD558 \uBC18\uC804",
        rotateLeft: "\uC67C\uCABD\uC73C\uB85C \uD68C\uC804",
        rotateRight: "\uC624\uB978\uCABD\uC73C\uB85C \uD68C\uC804",
        maxSize: "\uCD5C\uB300\uD654",
        minSize: "\uCD5C\uC18C\uD654",
        tableHeader: "\uD14C\uC774\uBE14 \uC81C\uBAA9",
        mergeCells: "\uC140 \uBCD1\uD569",
        splitCells: "\uC140 \uBD84\uD560",
        HorizontalSplit: "\uAC00\uB85C \uBD84\uD560",
        VerticalSplit: "\uC138\uB85C \uBD84\uD560"
      },
      menu: {
        spaced: "\uAE00\uC790 \uAC04\uACA9",
        bordered: "\uACBD\uACC4\uC120",
        neon: "\uB124\uC628",
        translucent: "\uBC18\uD22C\uBA85",
        shadow: "\uADF8\uB9BC\uC790",
        code: "\uCF54\uB4DC"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ko", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(tt);
const it = tt.exports;
var nt = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "lv",
      toolbar: {
        default: "Noklus\u0113juma",
        save: "Saglab\u0101t",
        font: "Fonts",
        formats: "Form\u0101ti",
        fontSize: "Fonta lielums",
        bold: "Treknraksts",
        underline: "Pasv\u012Btrot",
        italic: "Sl\u012Bpraksts",
        strike: "P\u0101rsv\u012Btrojums",
        subscript: "Apak\u0161raksts",
        superscript: "Aug\u0161raksts",
        removeFormat: "No\u0146emt form\u0101tu",
        fontColor: "Fonta kr\u0101sa",
        hiliteColor: "Teksta iez\u012Bm\u0113\u0161anas kr\u0101sa",
        indent: "Palielin\u0101t atk\u0101pi",
        outdent: "Samazin\u0101t atk\u0101pi",
        align: "Izl\u012Bdzin\u0101t",
        alignLeft: "L\u012Bdzin\u0101t pa kreisi",
        alignRight: "L\u012Bdzin\u0101t pa labi",
        alignCenter: "Centr\u0113t",
        alignJustify: "Taisnot",
        list: "Saraksts",
        orderList: "Numer\u0101cija",
        unorderList: "Aizzimes",
        horizontalRule: "Horizont\u0101la l\u012Bnija",
        hr_solid: "Ciets",
        hr_dotted: "Punkti\u0146\u0161",
        hr_dashed: "Bra\u0161a",
        table: "Tabula",
        link: "Saite",
        math: "Matem\u0101tika",
        image: "Att\u0113ls",
        video: "Video",
        audio: "Audio",
        fullScreen: "Pilnekr\u0101na re\u017E\u012Bms",
        showBlocks: "Par\u0101dit blokus",
        codeView: "Koda skats",
        undo: "Atsaukt",
        redo: "Atk\u0101rtot",
        preview: "Priek\u0161skat\u012Bjums",
        print: "Druk\u0101t",
        tag_p: "Paragr\u0101fs",
        tag_div: "Norm\u0101li (DIV)",
        tag_h: "Galvene",
        tag_blockquote: "Cit\u0101ts",
        tag_pre: "Kods",
        template: "Veidne",
        lineHeight: "L\u012Bnijas augstums",
        paragraphStyle: "Paragr\u0101fa stils",
        textStyle: "Teksta stils",
        imageGallery: "Att\u0113lu galerija",
        dir_ltr: "No kreis\u0101s uz labo",
        dir_rtl: "No lab\u0101s uz kreiso",
        mention: "Piemin\u0113t"
      },
      dialogBox: {
        linkBox: {
          title: "Ievietot saiti",
          url: "Saites URL",
          text: "Par\u0101d\u0101mais teksts",
          newWindowCheck: "Atv\u0113rt jaun\u0101 log\u0101",
          downloadLinkCheck: "Lejupiel\u0101des saite",
          bookmark: "Gr\u0101matz\u012Bme"
        },
        mathBox: {
          title: "Matem\u0101tika",
          inputLabel: "Matem\u0101tisk\u0101 not\u0101cija",
          fontSizeLabel: "Fonta lielums",
          previewLabel: "Priek\u0161skat\u012Bjums"
        },
        imageBox: {
          title: "Ievietot att\u0113lu",
          file: "Izv\u0113lieties no failiem",
          url: "Att\u0113la URL",
          altText: "Alternat\u012Bvs teksts"
        },
        videoBox: {
          title: "Ievietot video",
          file: "Izv\u0113lieties no failiem",
          url: "Multivides iegul\u0161anas URL, YouTube/Vimeo"
        },
        audioBox: {
          title: "Ievietot audio",
          file: "Izv\u0113lieties no failiem",
          url: "Audio URL"
        },
        browser: {
          tags: "Tagi",
          search: "Mekl\u0113t"
        },
        caption: "Ievietot aprakstu",
        close: "Aizv\u0113rt",
        submitButton: "Iesniegt",
        revertButton: "Atjaunot",
        proportion: "Ierobe\u017Eo proporcijas",
        basic: "Nav iesai\u0146ojuma",
        left: "Pa kreisi",
        right: "Labaj\u0101 pus\u0113",
        center: "Centrs",
        width: "Platums",
        height: "Augstums",
        size: "Izm\u0113rs",
        ratio: "Attiec\u012Bba"
      },
      controller: {
        edit: "Redi\u0123\u0113t",
        unlink: "Atsaist\u012Bt",
        remove: "No\u0146emt",
        insertRowAbove: "Ievietot rindu virs",
        insertRowBelow: "Ievietot rindu zem\u0101k",
        deleteRow: "Dz\u0113st rindu",
        insertColumnBefore: "Ievietot kolonnu pirms",
        insertColumnAfter: "Ievietot kolonnu aiz",
        deleteColumn: "Dz\u0113st kolonnu",
        fixColumnWidth: "Fiks\u0113ts kolonnas platums",
        resize100: "Main\u012Bt izm\u0113ru 100%",
        resize75: "Main\u012Bt izm\u0113ru 75%",
        resize50: "Main\u012Bt izm\u0113ru 50%",
        resize25: "Main\u012Bt izm\u0113ru 25%",
        autoSize: "Autom\u0101tiskais izm\u0113rs",
        mirrorHorizontal: "Spogulis, horizont\u0101ls",
        mirrorVertical: "Spogulis, vertik\u0101ls",
        rotateLeft: "Pagriezt pa kreisi",
        rotateRight: "Pagriezt pa labi",
        maxSize: "Maksim\u0101lais izm\u0113rs",
        minSize: "Minim\u0101lais izm\u0113rs",
        tableHeader: "Tabulas galvene",
        mergeCells: "Apvienot \u0161\u016Bnas",
        splitCells: "Sadal\u012Bt \u0161\u016Bnas",
        HorizontalSplit: "Horizont\u0101ls sadal\u012Bjums",
        VerticalSplit: "Vertik\u0101ls sadal\u012Bjums"
      },
      menu: {
        spaced: "Ar atstarpi",
        bordered: "Robe\u017Eoj\u0101s",
        neon: "Neona",
        translucent: "Caursp\u012Bd\u012Bgs",
        shadow: "\u0112na",
        code: "Kods"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "lv", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(nt);
const lt = nt.exports;
var ot = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "nl",
      toolbar: {
        default: "Standaard",
        save: "Opslaan",
        font: "Lettertype",
        formats: "Formaten",
        fontSize: "Lettergrootte",
        bold: "Vetgedrukt",
        underline: "Onderstrepen",
        italic: "Cursief",
        strike: "Doorstrepen",
        subscript: "Subscript",
        superscript: "Superscript",
        removeFormat: "Opmaak verwijderen",
        fontColor: "Tekstkleur",
        hiliteColor: "Tekst markeren",
        indent: "Inspringen",
        outdent: "Inspringen ongedaan maken",
        align: "Uitlijnen",
        alignLeft: "Links uitlijnen",
        alignRight: "Rechts uitlijnen",
        alignCenter: "In het midden uitlijnen",
        alignJustify: "Uitvullen",
        list: "Lijst",
        orderList: "Geordende lijst",
        unorderList: "Ongeordende lijst",
        horizontalRule: "Horizontale regel",
        hr_solid: "Standaard",
        hr_dotted: "Gestippeld",
        hr_dashed: "Gestreept",
        table: "Tabel",
        link: "Link",
        math: "Wiskunde",
        image: "Afbeelding",
        video: "Video",
        audio: "Audio",
        fullScreen: "Volledig scherm",
        showBlocks: "Blokken tonen",
        codeView: "Broncode weergeven",
        undo: "Ongedaan maken",
        redo: "Ongedaan maken herstellen",
        preview: "Voorbeeldweergave",
        print: "Printen",
        tag_p: "Alinea",
        tag_div: "Normaal (div)",
        tag_h: "Kop",
        tag_blockquote: "Citaat",
        tag_pre: "Code",
        template: "Sjabloon",
        lineHeight: "Lijnhoogte",
        paragraphStyle: "Alineastijl",
        textStyle: "Tekststijl",
        imageGallery: "Galerij",
        dir_ltr: "Van links naar rechts",
        dir_rtl: "Rechts naar links",
        mention: "Vermelding"
      },
      dialogBox: {
        linkBox: {
          title: "Link invoegen",
          url: "URL",
          text: "Tekst van de link",
          newWindowCheck: "In een nieuw tabblad openen",
          downloadLinkCheck: "Downloadlink",
          bookmark: "Bladwijzer"
        },
        mathBox: {
          title: "Wiskunde",
          inputLabel: "Wiskundige notatie",
          fontSizeLabel: "Lettergrootte",
          previewLabel: "Voorbeeld"
        },
        imageBox: {
          title: "Afbeelding invoegen",
          file: "Selecteer een bestand van uw apparaat",
          url: "URL",
          altText: "Alt-tekst"
        },
        videoBox: {
          title: "Video invoegen",
          file: "Selecteer een bestand van uw apparaat",
          url: "Embedded URL (YouTube/Vimeo)"
        },
        audioBox: {
          title: "Audio invoegen",
          file: "Selecteer een bestand van uw apparaat",
          url: "URL"
        },
        browser: {
          tags: "Tags",
          search: "Zoeken"
        },
        caption: "Omschrijving toevoegen",
        close: "Sluiten",
        submitButton: "Toepassen",
        revertButton: "Standaardwaarden herstellen",
        proportion: "Verhouding behouden",
        basic: "Standaard",
        left: "Links",
        right: "Rechts",
        center: "Midden",
        width: "Breedte",
        height: "Hoogte",
        size: "Grootte",
        ratio: "Verhouding"
      },
      controller: {
        edit: "Bewerken",
        unlink: "Ontkoppelen",
        remove: "Verwijderen",
        insertRowAbove: "Rij hierboven invoegen",
        insertRowBelow: "Rij hieronder invoegen",
        deleteRow: "Rij verwijderen",
        insertColumnBefore: "Kolom links invoegen",
        insertColumnAfter: "Kolom rechts invoegen",
        deleteColumn: "Kolom verwijderen",
        fixedColumnWidth: "Vaste kolombreedte",
        resize100: "Formaat wijzigen: 100%",
        resize75: "Formaat wijzigen: 75%",
        resize50: "Formaat wijzigen: 50%",
        resize25: "Formaat wijzigen: 25%",
        autoSize: "Automatische grootte",
        mirrorHorizontal: "Horizontaal spiegelen",
        mirrorVertical: "Verticaal spiegelen",
        rotateLeft: "Naar links draaien",
        rotateRight: "Naar rechts draaien",
        maxSize: "Maximale grootte",
        minSize: "Minimale grootte",
        tableHeader: "Tabelkoppen",
        mergeCells: "Cellen samenvoegen",
        splitCells: "Cellen splitsen",
        HorizontalSplit: "Horizontaal splitsen",
        VerticalSplit: "Verticaal splitsen"
      },
      menu: {
        spaced: "Uit elkaar",
        bordered: "Omlijnd",
        neon: "Neon",
        translucent: "Doorschijnend",
        shadow: "Schaduw",
        code: "Code"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "nl", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(ot);
const st = ot.exports;
var at = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "pl",
      toolbar: {
        default: "Domy\u015Blne",
        save: "Zapisz",
        font: "Czcionka",
        formats: "Formaty",
        fontSize: "Rozmiar",
        bold: "Pogrubienie",
        underline: "Podkre\u015Blenie",
        italic: "Kursywa",
        strike: "Przekre\u015Blenie",
        subscript: "Indeks dolny",
        superscript: "Indeks g\xF3rny",
        removeFormat: "Wyczy\u015B\u0107 formatowanie",
        fontColor: "Kolor tekstu",
        hiliteColor: "Kolor t\u0142a tekstu",
        indent: "Zwi\u0119ksz wci\u0119cie",
        outdent: "Zmniejsz wci\u0119cie",
        align: "Wyr\xF3wnaj",
        alignLeft: "Do lewej",
        alignRight: "Do prawej",
        alignCenter: "Do \u015Brodka",
        alignJustify: "Wyjustuj",
        list: "Lista",
        orderList: "Lista numerowana",
        unorderList: "Lista wypunktowana",
        horizontalRule: "Pozioma linia",
        hr_solid: "Ci\u0105g\u0142a",
        hr_dotted: "Kropkowana",
        hr_dashed: "Przerywana",
        table: "Tabela",
        link: "Odno\u015Bnik",
        math: "Matematyczne",
        image: "Obraz",
        video: "Wideo",
        audio: "Audio",
        fullScreen: "Pe\u0142ny ekran",
        showBlocks: "Poka\u017C bloki",
        codeView: "Widok kodu",
        undo: "Cofnij",
        redo: "Pon\xF3w",
        preview: "Podgl\u0105d",
        print: "Drukuj",
        tag_p: "Akapit",
        tag_div: "Blok (DIV)",
        tag_h: "Nag\u0142\xF3wek H",
        tag_blockquote: "Cytat",
        tag_pre: "Kod",
        template: "Szablon",
        lineHeight: "Odst\u0119p mi\u0119dzy wierszami",
        paragraphStyle: "Styl akapitu",
        textStyle: "Styl tekstu",
        imageGallery: "Galeria obraz\xF3w",
        dir_ltr: "Od lewej do prawej",
        dir_rtl: "Od prawej do lewej",
        mention: "Wzmianka"
      },
      dialogBox: {
        linkBox: {
          title: "Wstaw odno\u015Bnik",
          url: "Adres URL",
          text: "Tekst do wy\u015Bwietlenia",
          newWindowCheck: "Otw\xF3rz w nowym oknie",
          downloadLinkCheck: "Link do pobrania",
          bookmark: "Zak\u0142adka"
        },
        mathBox: {
          title: "Matematyczne",
          inputLabel: "Zapis matematyczny",
          fontSizeLabel: "Rozmiar czcionki",
          previewLabel: "Podgl\u0105d"
        },
        imageBox: {
          title: "Wstaw obraz",
          file: "Wybierz plik",
          url: "Adres URL obrazka",
          altText: "Tekst alternatywny"
        },
        videoBox: {
          title: "Wstaw wideo",
          file: "Wybierz plik",
          url: "Adres URL video, np. YouTube/Vimeo"
        },
        audioBox: {
          title: "Wstaw audio",
          file: "Wybierz plik",
          url: "Adres URL audio"
        },
        browser: {
          tags: "Tagi",
          search: "Szukaj"
        },
        caption: "Wstaw opis",
        close: "Zamknij",
        submitButton: "Zatwierd\u017A",
        revertButton: "Cofnij zmiany",
        proportion: "Ogranicz proporcje",
        basic: "Bez wyr\xF3wnania",
        left: "Do lewej",
        right: "Do prawej",
        center: "Do \u015Brodka",
        width: "Szeroko\u015B\u0107",
        height: "Wysoko\u015B\u0107",
        size: "Rozmiar",
        ratio: "Proporcje"
      },
      controller: {
        edit: "Edycja",
        unlink: "Usu\u0144 odno\u015Bnik",
        remove: "Usu\u0144",
        insertRowAbove: "Wstaw wiersz powy\u017Cej",
        insertRowBelow: "Wstaw wiersz poni\u017Cej",
        deleteRow: "Usu\u0144 wiersz",
        insertColumnBefore: "Wstaw kolumn\u0119 z lewej",
        insertColumnAfter: "Wstaw kolumn\u0119 z prawej",
        deleteColumn: "Usu\u0144 kolumn\u0119",
        fixedColumnWidth: "Sta\u0142a szeroko\u015B\u0107 kolumny",
        resize100: "Zmie\u0144 rozmiar - 100%",
        resize75: "Zmie\u0144 rozmiar - 75%",
        resize50: "Zmie\u0144 rozmiar - 50%",
        resize25: "Zmie\u0144 rozmiar - 25%",
        autoSize: "Rozmiar automatyczny",
        mirrorHorizontal: "Odbicie lustrzane w poziomie",
        mirrorVertical: "Odbicie lustrzane w pionie",
        rotateLeft: "Obr\xF3\u0107 w lewo",
        rotateRight: "Obr\xF3\u0107 w prawo",
        maxSize: "Maksymalny rozmiar",
        minSize: "Minimalny rozmiar",
        tableHeader: "Nag\u0142\xF3wek tabeli",
        mergeCells: "Scal kom\xF3rki",
        splitCells: "Podziel kom\xF3rki",
        HorizontalSplit: "Podzia\u0142 poziomy",
        VerticalSplit: "Podzia\u0142 pionowy"
      },
      menu: {
        spaced: "Rozstawiony",
        bordered: "Z obw\xF3dk\u0105",
        neon: "Neon",
        translucent: "P\xF3\u0142przezroczysty",
        shadow: "Cie\u0144",
        code: "Kod"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "pl", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(at);
const rt = at.exports;
var dt = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "pt_br",
      toolbar: {
        default: "Padr\xE3o",
        save: "Salvar",
        font: "Fonte",
        formats: "Formatos",
        fontSize: "Tamanho",
        bold: "Negrito",
        underline: "Sublinhado",
        italic: "It\xE1lico",
        strike: "Riscado",
        subscript: "Subescrito",
        superscript: "Sobrescrito",
        removeFormat: "Remover Formata\xE7\xE3o",
        fontColor: "Cor da Fonte",
        hiliteColor: "Cor de destaque",
        indent: "Recuo",
        outdent: "Avan\xE7ar",
        align: "Alinhar",
        alignLeft: "Alinhar \xE0 esquerda",
        alignRight: "Alinhar \xE0 direita",
        alignCenter: "Alinhar ao centro",
        alignJustify: "Alinhat justificado",
        list: "Lista",
        orderList: "Lista ordenada",
        unorderList: "Lista desordenada",
        horizontalRule: "Linha horizontal",
        hr_solid: "solida",
        hr_dotted: "pontilhada",
        hr_dashed: "tracejada",
        table: "Tabela",
        link: "Link",
        math: "Matem\xE1tica",
        image: "Imagem",
        video: "V\xEDdeo",
        audio: "\xC1udio",
        fullScreen: "Tela cheia",
        showBlocks: "Mostrar blocos",
        codeView: "Mostrar c\xF3digos",
        undo: "Voltar",
        redo: "Refazer",
        preview: "Prever",
        print: "imprimir",
        tag_p: "Paragr\xE1fo",
        tag_div: "(DIV) Normal",
        tag_h: "Cabe\xE7alho",
        tag_blockquote: "Citar",
        tag_pre: "C\xF3digo",
        template: "Modelo",
        lineHeight: "Altura da linha",
        paragraphStyle: "Estilo do par\xE1grafo",
        textStyle: "Estilo do texto",
        imageGallery: "Galeria de imagens",
        dir_ltr: "Da esquerda para direita",
        dir_rtl: "Direita para esquerda",
        mention: "Men\xE7\xE3o"
      },
      dialogBox: {
        linkBox: {
          title: "Inserir link",
          url: "URL para link",
          text: "Texto \xE0 mostrar",
          newWindowCheck: "Abrir em nova guia",
          downloadLinkCheck: "Link para Download",
          bookmark: "marca p\xE1ginas"
        },
        mathBox: {
          title: "Matem\xE1tica",
          inputLabel: "Nota\xE7\xE3o matem\xE1tica",
          fontSizeLabel: "Tamanho",
          previewLabel: "Prever"
        },
        imageBox: {
          title: "Inserir imagens",
          file: "Selecionar arquivos",
          url: "URL da imagem",
          altText: "Texto alternativo"
        },
        videoBox: {
          title: "Inserir v\xEDdeo",
          file: "Selecionar arquivos",
          url: "URL do YouTube/Vimeo"
        },
        audioBox: {
          title: "Inserir audio",
          file: "Selecionar arquivos",
          url: "URL da audio"
        },
        browser: {
          tags: "Tag",
          search: "Procurar"
        },
        caption: "Inserir descri\xE7\xE3o",
        close: "Fechar",
        submitButton: "Enviar",
        revertButton: "Reverter",
        proportion: "restringir propor\xE7\xF5es",
        basic: "B\xE1sico",
        left: "Esquerda",
        right: "Direita",
        center: "Centro",
        width: "Largura",
        height: "Altura",
        size: "Tamanho",
        ratio: "Propor\xE7\xF5es"
      },
      controller: {
        edit: "Editar",
        unlink: "Retirar link",
        remove: "Remover",
        insertRowAbove: "Inserir linha acima",
        insertRowBelow: "Inserir linha abaixo",
        deleteRow: "Deletar linha",
        insertColumnBefore: "Inserir coluna antes",
        insertColumnAfter: "Inserir coluna depois",
        deleteColumn: "Deletar coluna",
        fixedColumnWidth: "Largura fixa da coluna",
        resize100: "Redimensionar para 100%",
        resize75: "Redimensionar para 75%",
        resize50: "Redimensionar para 50%",
        resize25: "Redimensionar para 25%",
        autoSize: "Tamanho autom\xE1tico",
        mirrorHorizontal: "Espelho, Horizontal",
        mirrorVertical: "Espelho, Vertical",
        rotateLeft: "Girar para esquerda",
        rotateRight: "Girar para direita",
        maxSize: "Tam max",
        minSize: "Tam min",
        tableHeader: "Cabe\xE7alho da tabela",
        mergeCells: "Mesclar c\xE9lulas",
        splitCells: "Dividir c\xE9lulas",
        HorizontalSplit: "Divis\xE3o horizontal",
        VerticalSplit: "Divis\xE3o vertical"
      },
      menu: {
        spaced: "Espa\xE7ado",
        bordered: "Com borda",
        neon: "N\xE9on",
        translucent: "Transl\xFAcido",
        shadow: "Sombreado",
        code: "C\xF3digo"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "pt_br", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(dt);
const ut = dt.exports;
var ct = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "ro",
      toolbar: {
        default: "Default",
        save: "Salveaz\u0103",
        font: "Font",
        formats: "Format",
        fontSize: "Dimensiune",
        bold: "\xCEngro\u0219at",
        underline: "Subliniat",
        italic: "\xCEnclinat",
        strike: "T\u0103iat",
        subscript: "Subscript",
        superscript: "Superscript",
        removeFormat: "\u0218terge formatare",
        fontColor: "Culoare font",
        hiliteColor: "Culoare de eviden\u021Biere",
        indent: "Indenteaz\u0103",
        outdent: "F\u0103r\u0103 indentare",
        align: "Aliniere",
        alignLeft: "Aliniere la st\xE2nga",
        alignRight: "Aliniere la dreapta",
        alignCenter: "Aliniere la centru",
        alignJustify: "Aliniere st\xE2nga - dreapta",
        list: "List\u0103",
        orderList: "List\u0103 ordonat\u0103",
        unorderList: "List\u0103 neordonat\u0103",
        horizontalRule: "Linie orizontal\u0103",
        hr_solid: "Solid",
        hr_dotted: "Punctat",
        hr_dashed: "Punctate",
        table: "Tabel",
        link: "Link",
        math: "Matematic\u0103",
        image: "Imagine",
        video: "Video",
        audio: "Audio",
        fullScreen: "Tot ecranul",
        showBlocks: "Arat\u0103 blocuri",
        codeView: "Vizualizare cod",
        undo: "Anuleaz\u0103",
        redo: "Ref\u0103",
        preview: "Previzualizare",
        print: "printeaz\u0103",
        tag_p: "Paragraf",
        tag_div: "Normal (DIV)",
        tag_h: "Antet",
        tag_blockquote: "Quote",
        tag_pre: "Citat",
        template: "Template",
        lineHeight: "\xCEn\u0103l\u021Bime linie",
        paragraphStyle: "Stil paragraf",
        textStyle: "Stil text",
        imageGallery: "Galerie de imagini",
        dir_ltr: "De la st\xE2nga la dreapta",
        dir_rtl: "De la dreapta la stanga",
        mention: "Mentiune"
      },
      dialogBox: {
        linkBox: {
          title: "Insereaz\u0103 Link",
          url: "Adres\u0103 link",
          text: "Text de afi\u0219at",
          newWindowCheck: "Deschide \xEEn fereastr\u0103 nou\u0103",
          downloadLinkCheck: "Link de desc\u0103rcare",
          bookmark: "Marcaj"
        },
        mathBox: {
          title: "Matematic\u0103",
          inputLabel: "Nota\u021Bie matematic\u0103",
          fontSizeLabel: "Dimensiune font",
          previewLabel: "Previzualizare"
        },
        imageBox: {
          title: "Insereaz\u0103 imagine",
          file: "Selecteaz\u0103",
          url: "URL imagine",
          altText: "text alternativ"
        },
        videoBox: {
          title: "Insereaz\u0103 video",
          file: "Selecteaz\u0103",
          url: "Include URL, youtube/vimeo"
        },
        audioBox: {
          title: "Insereaz\u0103 Audio",
          file: "Selecteaz\u0103",
          url: "URL Audio"
        },
        browser: {
          tags: "Etichete",
          search: "C\u0103utareim"
        },
        caption: "Insereaz\u0103 descriere",
        close: "\xCEnchide",
        submitButton: "Salveaz\u0103",
        revertButton: "Revenire",
        proportion: "Constr\xE2nge propor\u021Biile",
        basic: "De baz\u0103",
        left: "St\xE2nga",
        right: "Dreapta",
        center: "Centru",
        width: "L\u0103\u021Bime",
        height: "\xCEn\u0103l\u021Bime",
        size: "Dimensiune",
        ratio: "Ratie"
      },
      controller: {
        edit: "Editeaz\u0103",
        unlink: "Scoate link",
        remove: "Elimin\u0103",
        insertRowAbove: "Insereaz\u0103 r\xE2nd deasupra",
        insertRowBelow: "Insereaz\u0103 r\xE2nd dedesupt",
        deleteRow: "\u0218terge linie",
        insertColumnBefore: "Insereaz\u0103 coloan\u0103 \xEEnainte",
        insertColumnAfter: "Insereaz\u0103 coloan\u0103 dup\u0103",
        deleteColumn: "\u0218terge coloan\u0103",
        fixedColumnWidth: "L\u0103\u021Bime fix\u0103 coloan\u0103",
        resize100: "Redimensionare 100%",
        resize75: "Redimensionare 75%",
        resize50: "Redimensionare 50%",
        resize25: "Redimensionare 25%",
        autoSize: "Dimensiune automat\u0103",
        mirrorHorizontal: "Oglind\u0103, orizontal",
        mirrorVertical: "Oglind\u0103, vertical",
        rotateLeft: "Rote\u0219te la st\xE2nga",
        rotateRight: "Rote\u0219te la dreapta",
        maxSize: "Dimensiune maxim\u0103",
        minSize: "Dimensiune minim\u0103",
        tableHeader: "Antet tabel",
        mergeCells: "\xCEmbin\u0103 celule",
        splitCells: "Divizeaz\u0103 celule",
        HorizontalSplit: "Despicare orizontal\u0103",
        VerticalSplit: "Despicare vertical\u0103"
      },
      menu: {
        spaced: "Spa\u021Biat",
        bordered: "M\u0103rginit",
        neon: "Neon",
        translucent: "Translucent",
        shadow: "Umbr\u0103",
        code: "Citat"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ro", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(ct);
const ht = ct.exports;
var pt = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "ru",
      toolbar: {
        default: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
        save: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C",
        font: "\u0428\u0440\u0438\u0444\u0442",
        formats: "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0430",
        fontSize: "\u0420\u0430\u0437\u043C\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430",
        bold: "\u041F\u043E\u043B\u0443\u0436\u0438\u0440\u043D\u044B\u0439",
        underline: "\u041F\u043E\u0434\u0447\u0451\u0440\u043A\u043D\u0443\u0442\u044B\u0439",
        italic: "\u041A\u0443\u0440\u0441\u0438\u0432",
        strike: "\u0417\u0430\u0447\u0435\u0440\u043A\u043D\u0443\u0442\u044B\u0439",
        subscript: "\u041D\u0438\u0436\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441",
        superscript: "\u0412\u0435\u0440\u0445\u043D\u0438\u0439 \u0438\u043D\u0434\u0435\u043A\u0441",
        removeFormat: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C \u0444\u043E\u0440\u043C\u0430\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435",
        fontColor: "\u0426\u0432\u0435\u0442 \u0442\u0435\u043A\u0441\u0442\u0430",
        hiliteColor: "\u0426\u0432\u0435\u0442 \u0444\u043E\u043D\u0430",
        indent: "\u0423\u0432\u0435\u043B\u0438\u0447\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F",
        outdent: "\u0423\u043C\u0435\u043D\u044C\u0448\u0438\u0442\u044C \u043E\u0442\u0441\u0442\u0443\u043F",
        align: "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435",
        alignLeft: "\u0421\u043B\u0435\u0432\u0430",
        alignRight: "\u0421\u043F\u0440\u0430\u0432\u0430",
        alignCenter: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        alignJustify: "\u041F\u043E \u0448\u0438\u0440\u0438\u043D\u0435",
        list: "\u0421\u043F\u0438\u0441\u043A\u0438",
        orderList: "\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",
        unorderList: "\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",
        horizontalRule: "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430\u044F \u043B\u0438\u043D\u0438\u044F",
        hr_solid: "\u0421\u043F\u043B\u043E\u0448\u043D\u0430\u044F",
        hr_dotted: "\u041F\u0443\u043D\u043A\u0442\u0438\u0440",
        hr_dashed: "\u0428\u0442\u0440\u0438\u0445\u043E\u0432\u0430\u044F",
        table: "\u0422\u0430\u0431\u043B\u0438\u0446\u0430",
        link: "\u0421\u0441\u044B\u043B\u043A\u0430",
        math: "\u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439",
        image: "\u0418\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
        video: "\u0412\u0438\u0434\u0435\u043E",
        audio: "\u0410\u0443\u0434\u0438\u043E",
        fullScreen: "\u041F\u043E\u043B\u043D\u044B\u0439 \u044D\u043A\u0440\u0430\u043D",
        showBlocks: "\u0411\u043B\u043E\u0447\u043D\u044B\u0439 \u0432\u0438\u0434",
        codeView: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C HTML",
        undo: "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C",
        redo: "\u0412\u0435\u0440\u043D\u0443\u0442\u044C",
        preview: "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440",
        print: "\u041F\u0435\u0447\u0430\u0442\u044C",
        tag_p: "\u0422\u0435\u043A\u0441\u0442",
        tag_div: "\u0411\u0430\u0437\u043E\u0432\u044B\u0439",
        tag_h: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        tag_blockquote: "\u0426\u0438\u0442\u0430\u0442\u0430",
        tag_pre: "\u041A\u043E\u0434",
        template: "\u0428\u0430\u0431\u043B\u043E\u043D",
        lineHeight: "\u0412\u044B\u0441\u043E\u0442\u0430 \u043B\u0438\u043D\u0438\u0438",
        paragraphStyle: "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0430",
        textStyle: "\u0421\u0442\u0438\u043B\u044C \u0442\u0435\u043A\u0441\u0442\u0430",
        imageGallery: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
        dir_ltr: "\u0421\u043B\u0435\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E",
        dir_rtl: "\u0421\u043F\u0440\u0430\u0432\u0430 \u043D\u0430\u043B\u0435\u0432\u043E",
        mention: "\u0423\u043F\u043E\u043C\u0438\u043D\u0430\u043D\u0438\u0435"
      },
      dialogBox: {
        linkBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
          url: "\u0421\u0441\u044B\u043B\u043A\u0430",
          text: "\u0422\u0435\u043A\u0441\u0442",
          newWindowCheck: "\u041E\u0442\u043A\u0440\u044B\u0432\u0430\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u043C \u043E\u043A\u043D\u0435",
          downloadLinkCheck: "\u0421\u0441\u044B\u043B\u043A\u0430 \u0434\u043B\u044F \u0441\u043A\u0430\u0447\u0438\u0432\u0430\u043D\u0438\u044F",
          bookmark: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430"
        },
        mathBox: {
          title: "\u043C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438\u0439",
          inputLabel: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0430\u044F \u0437\u0430\u043F\u0438\u0441\u044C",
          fontSizeLabel: "\u041A\u0435\u0433\u043B\u044C",
          previewLabel: "\u041F\u0440\u0435\u0434\u0432\u0430\u0440\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440"
        },
        imageBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435",
          file: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",
          url: "\u0410\u0434\u0440\u0435\u0441 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F",
          altText: "\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u044F"
        },
        videoBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0432\u0438\u0434\u0435\u043E",
          file: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",
          url: "\u0421\u0441\u044B\u043B\u043A\u0430 \u043D\u0430 \u0432\u0438\u0434\u0435\u043E, Youtube,Vimeo"
        },
        audioBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0430\u0443\u0434\u0438\u043E",
          file: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",
          url: "\u0410\u0434\u0440\u0435\u0441 \u0430\u0443\u0434\u0438\u043E"
        },
        browser: {
          tags: "\u0422\u0435\u0433\u0438",
          search: "\u041F\u043E\u0438\u0441\u043A"
        },
        caption: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043F\u043E\u0434\u043F\u0438\u0441\u044C",
        close: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C",
        submitButton: "\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044C",
        revertButton: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C",
        proportion: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0438\u0438",
        basic: "\u0411\u0435\u0437 \u043E\u0431\u0442\u0435\u043A\u0430\u043D\u0438\u044F",
        left: "\u0421\u043B\u0435\u0432\u0430",
        right: "\u0421\u043F\u0440\u0430\u0432\u0430",
        center: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        width: "\u0428\u0438\u0440\u0438\u043D\u0430",
        height: "\u0412\u044B\u0441\u043E\u0442\u0430",
        size: "\u0420\u0430\u0437\u043C\u0435\u0440",
        ratio: "\u0421\u043E\u043E\u0442\u043D\u043E\u0448\u0435\u043D\u0438\u0435"
      },
      controller: {
        edit: "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
        unlink: "\u0423\u0431\u0440\u0430\u0442\u044C \u0441\u0441\u044B\u043B\u043A\u0443",
        remove: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
        insertRowAbove: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u0432\u044B\u0448\u0435",
        insertRowBelow: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443 \u043D\u0438\u0436\u0435",
        deleteRow: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u0440\u043E\u043A\u0443",
        insertColumnBefore: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u0441\u043B\u0435\u0432\u0430",
        insertColumnAfter: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446 \u0441\u043F\u0440\u0430\u0432\u0430",
        deleteColumn: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0441\u0442\u043E\u043B\u0431\u0435\u0446",
        fixedColumnWidth: "\u0424\u0438\u043A\u0441\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u0430\u044F \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u043E\u043B\u0431\u0446\u0430",
        resize100: "\u0420\u0430\u0437\u043C\u0435\u0440 100%",
        resize75: "\u0420\u0430\u0437\u043C\u0435\u0440 75%",
        resize50: "\u0420\u0430\u0437\u043C\u0435\u0440 50%",
        resize25: "\u0420\u0430\u0437\u043C\u0435\u0440 25%",
        autoSize: "\u0410\u0432\u0442\u043E \u0440\u0430\u0437\u043C\u0435\u0440",
        mirrorHorizontal: "\u041E\u0442\u0440\u0430\u0437\u0438\u0442\u044C \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0438",
        mirrorVertical: "\u041E\u0442\u0440\u0430\u0437\u0438\u0442\u044C \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0438",
        rotateLeft: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u0440\u043E\u0442\u0438\u0432 \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0435\u043B\u043A\u0438",
        rotateRight: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u044C \u043F\u043E \u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u0441\u0442\u0440\u0435\u043B\u043A\u0435",
        maxSize: "\u0428\u0438\u0440\u0438\u043D\u0430 \u043F\u043E \u0440\u0430\u0437\u043C\u0435\u0440\u0443 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B",
        minSize: "\u0428\u0438\u0440\u0438\u043D\u0430 \u043F\u043E \u0441\u043E\u0434\u0435\u0440\u0436\u0438\u043C\u043E\u043C\u0443",
        tableHeader: "\u0421\u0442\u0440\u043E\u043A\u0430 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043A\u043E\u0432",
        mergeCells: "\u041E\u0431\u044A\u0435\u0434\u0438\u043D\u0438\u0442\u044C \u044F\u0447\u0435\u0439\u043A\u0438",
        splitCells: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u044F\u0447\u0435\u0439\u043A\u0443",
        HorizontalSplit: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
        VerticalSplit: "\u0420\u0430\u0437\u0434\u0435\u043B\u0438\u0442\u044C \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E"
      },
      menu: {
        spaced: "\u0438\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        bordered: "\u0413\u0440\u0430\u043D\u0438\u0447\u043D\u0430\u044F \u041B\u0438\u043D\u0438\u044F",
        neon: "\u043D\u0435\u043E\u043D",
        translucent: "\u043F\u043E\u043B\u0443\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u044B\u0439",
        shadow: "\u0422\u0435\u043D\u044C",
        code: "\u041A\u043E\u0434"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ru", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(pt);
const ft = pt.exports;
var gt = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "se",
      toolbar: {
        default: "Default",
        save: "Spara",
        font: "Typsnitt",
        formats: "Format",
        fontSize: "Textstorlek",
        bold: "Fet",
        underline: "Understruket",
        italic: "Kursiv",
        strike: "\xD6verstruket",
        subscript: "S\xE4nkt skrift",
        superscript: "H\xF6jd skrift",
        removeFormat: "Ta bort formattering",
        fontColor: "Textf\xE4rg",
        hiliteColor: "Bakgrundsf\xE4rg",
        indent: "Minska indrag",
        outdent: "\xD6ka indrag",
        align: "Justering",
        alignLeft: "V\xE4nsterjustering",
        alignRight: "H\xF6gerjustering",
        alignCenter: "Mittenjusteirng",
        alignJustify: "Justera indrag",
        list: "Listor",
        orderList: "Numrerad lista",
        unorderList: "Oordnad lista",
        horizontalRule: "Horisontell linje",
        hr_solid: "Solid",
        hr_dotted: "Punkter",
        hr_dashed: "Prickad",
        table: "Tabell",
        link: "L\xE4nk",
        math: "Math",
        image: "Bild",
        video: "Video",
        audio: "Ljud",
        fullScreen: "Helsk\xE4rm",
        showBlocks: "Visa block",
        codeView: "Visa koder",
        undo: "\xC5ngra",
        redo: "G\xF6r om",
        preview: "Preview",
        print: "Print",
        tag_p: "Paragraf",
        tag_div: "Normal (DIV)",
        tag_h: "Rubrik",
        tag_blockquote: "Citer",
        tag_pre: "Kod",
        template: "Mall",
        lineHeight: "Linjeh\xF6jd",
        paragraphStyle: "Stil p\xE5 stycke",
        textStyle: "Textstil",
        imageGallery: "Bildgalleri",
        dir_ltr: "V\xE4nster till h\xF6ger",
        dir_rtl: "H\xF6ger till v\xE4nster",
        mention: "Namn"
      },
      dialogBox: {
        linkBox: {
          title: "L\xE4gg till l\xE4nk",
          url: "URL till l\xE4nk",
          text: "L\xE4nktext",
          newWindowCheck: "\xD6ppna i nytt f\xF6nster",
          downloadLinkCheck: "Nedladdningsl\xE4nk",
          bookmark: "Bokm\xE4rke"
        },
        mathBox: {
          title: "Math",
          inputLabel: "Matematisk notation",
          fontSizeLabel: "Textstorlek",
          previewLabel: "Preview"
        },
        imageBox: {
          title: "L\xE4gg till bild",
          file: "L\xE4gg till fr\xE5n fil",
          url: "L\xE4gg till fr\xE5n URL",
          altText: "Alternativ text"
        },
        videoBox: {
          title: "L\xE4gg till video",
          file: "L\xE4gg till fr\xE5n fil",
          url: "B\xE4dda in video / YouTube,Vimeo"
        },
        audioBox: {
          title: "L\xE4gg till ljud",
          file: "L\xE4gg till fr\xE5n fil",
          url: "L\xE4gg till fr\xE5n URL"
        },
        browser: {
          tags: "Tags",
          search: "S\xF6k"
        },
        caption: "L\xE4gg till beskrivning",
        close: "St\xE4ng",
        submitButton: "Skicka",
        revertButton: "\xC5terg\xE5",
        proportion: "Spara proportioner",
        basic: "Basic",
        left: "V\xE4nster",
        right: "H\xF6ger",
        center: "Center",
        width: "Bredd",
        height: "H\xF6jd",
        size: "Storlek",
        ratio: "F\xF6rh\xE5llande"
      },
      controller: {
        edit: "Redigera",
        unlink: "Ta bort l\xE4nk",
        remove: "Ta bort",
        insertRowAbove: "L\xE4gg till rad \xF6ver",
        insertRowBelow: "L\xE4gg till rad under",
        deleteRow: "Ta bort rad",
        insertColumnBefore: "L\xE4gg till kolumn f\xF6re",
        insertColumnAfter: "L\xE4gg till kolumn efter",
        deleteColumn: "Ta bort kolumner",
        fixedColumnWidth: "Fast kolumnbredd",
        resize100: "F\xF6rstora 100%",
        resize75: "F\xF6rstora 75%",
        resize50: "F\xF6rstora 50%",
        resize25: "F\xF6rstora 25%",
        autoSize: "Autostorlek",
        mirrorHorizontal: "Spegling, horisontell",
        mirrorVertical: "Spegling, vertikal",
        rotateLeft: "Rotera till v\xE4nster",
        rotateRight: "Rotera till h\xF6ger",
        maxSize: "Maxstorlek",
        minSize: "Minsta storlek",
        tableHeader: "Rubrik tabell",
        mergeCells: "Sammanfoga celler (merge)",
        splitCells: "Separera celler",
        HorizontalSplit: "Separera horisontalt",
        VerticalSplit: "Separera vertikalt"
      },
      menu: {
        spaced: "Avst\xE5nd",
        bordered: "Avgr\xE4nsningslinje",
        neon: "Neon",
        translucent: "Genomskinlig",
        shadow: "Skugga",
        code: "Kod"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "se", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(gt);
const mt = gt.exports;
var bt = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "ua",
      toolbar: {
        default: "\u041F\u043E \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C",
        save: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
        font: "\u0428\u0440\u0438\u0444\u0442",
        formats: "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0443",
        fontSize: "\u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443",
        bold: "\u0416\u0438\u0440\u043D\u0438\u0439",
        underline: "\u041F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439",
        italic: "\u041A\u0443\u0440\u0441\u0438\u0432",
        strike: "\u041F\u0435\u0440\u0435\u043A\u0440\u0435\u0441\u043B\u0438\u0442\u0438",
        subscript: "\u041D\u0438\u0436\u043D\u0456\u0439 \u0456\u043D\u0434\u0435\u043A\u0441",
        superscript: "\u0412\u0435\u0440\u0445\u043D\u0456\u0439 \u0456\u043D\u0434\u0435\u043A\u0441",
        removeFormat: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
        fontColor: "\u041A\u043E\u043B\u0456\u0440 \u0442\u0435\u043A\u0441\u0442\u0443",
        hiliteColor: "\u041A\u043E\u043B\u0456\u0440 \u0432\u0438\u0434\u0456\u043B\u0435\u043D\u043D\u044F",
        indent: "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043F",
        outdent: "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043F",
        align: "\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
        alignLeft: "\u0417\u0430 \u043B\u0456\u0432\u0438\u043C \u043A\u0440\u0430\u0454\u043C",
        alignRight: "\u0417\u0430 \u043F\u0440\u0430\u0432\u0438\u043C \u043A\u0440\u0430\u0454\u043C",
        alignCenter: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        alignJustify: "\u0417\u0430 \u0448\u0438\u0440\u0438\u043D\u043E\u044E",
        list: "\u0421\u043F\u0438\u0441\u043E\u043A",
        orderList: "\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439",
        unorderList: "\u041C\u0430\u0440\u043A\u043E\u0432\u0430\u043D\u0438\u0439",
        horizontalRule: "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0430 \u043B\u0456\u043D\u0456\u044F",
        hr_solid: "\u0421\u0443\u0446\u0456\u043B\u044C\u043D\u0430",
        hr_dotted: "\u041F\u0443\u043D\u043A\u0442\u0438\u0440\u043D\u0430",
        hr_dashed: "\u0428\u0442\u0440\u0438\u0445\u043E\u0432\u0430",
        table: "\u0422\u0430\u0431\u043B\u0438\u0446\u044F",
        link: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
        math: "\u0424\u043E\u0440\u043C\u0443\u043B\u0430",
        image: "\u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
        video: "\u0412\u0456\u0434\u0435\u043E",
        audio: "\u0410\u0443\u0434\u0456\u043E",
        fullScreen: "\u041F\u043E\u0432\u043D\u0438\u0439 \u0435\u043A\u0440\u0430\u043D",
        showBlocks: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u0438 \u0431\u043B\u043E\u043A\u0438",
        codeView: "\u0420\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u044F\u043A HTML",
        undo: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
        redo: "\u0412\u0438\u043A\u043E\u043D\u0430\u0442\u0438 \u0437\u043D\u043E\u0432\u0443",
        preview: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434",
        print: "\u0414\u0440\u0443\u043A",
        tag_p: "\u0410\u0431\u0437\u0430\u0446",
        tag_div: "\u0411\u0430\u0437\u043E\u0432\u0438\u0439",
        tag_h: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A",
        tag_blockquote: "\u0426\u0438\u0442\u0430\u0442\u0430",
        tag_pre: "\u041A\u043E\u0434",
        template: "\u0428\u0430\u0431\u043B\u043E\u043D",
        lineHeight: "\u0412\u0438\u0441\u043E\u0442\u0430 \u043B\u0456\u043D\u0456\u0457",
        paragraphStyle: "\u0421\u0442\u0438\u043B\u044C \u0430\u0431\u0437\u0430\u0446\u0443",
        textStyle: "\u0421\u0442\u0438\u043B\u044C \u0442\u0435\u043A\u0441\u0442\u0443",
        imageGallery: "\u0413\u0430\u043B\u0435\u0440\u0435\u044F",
        dir_ltr: "\u0417\u043B\u0456\u0432\u0430 \u043D\u0430\u043F\u0440\u0430\u0432\u043E",
        dir_rtl: "\u0421\u043F\u0440\u0430\u0432\u0430 \u043D\u0430\u043B\u0456\u0432\u043E",
        mention: "\u0417\u0433\u0430\u0434\u0430\u0442\u0438"
      },
      dialogBox: {
        linkBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
          url: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
          text: "\u0422\u0435\u043A\u0441\u0442",
          newWindowCheck: "\u0412\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0442\u0438 \u0432 \u043D\u043E\u0432\u043E\u043C\u0443 \u0432\u0456\u043A\u043D\u0456",
          downloadLinkCheck: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0434\u043B\u044F \u0437\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
          bookmark: "\u0417\u0430\u043A\u043B\u0430\u0434\u043A\u0430"
        },
        mathBox: {
          title: "\u0424\u043E\u0440\u043C\u0443\u043B\u0430",
          inputLabel: "\u041C\u0430\u0442\u0435\u043C\u0430\u0442\u0438\u0447\u043D\u0430 \u0437\u0430\u043F\u0438\u0441",
          fontSizeLabel: "\u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443",
          previewLabel: "\u041F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u0456\u0439 \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434"
        },
        imageBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
          file: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0444\u0430\u0439\u043B",
          url: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
          altText: "\u0422\u0435\u043A\u0441\u0442\u043E\u0432\u0438\u0439 \u043E\u043F\u0438\u0441 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F"
        },
        videoBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0432\u0456\u0434\u0435\u043E",
          file: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0444\u0430\u0439\u043B",
          url: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0432\u0456\u0434\u0435\u043E, Youtube, Vimeo"
        },
        audioBox: {
          title: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0430\u0443\u0434\u0456\u043E",
          file: "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u0444\u0430\u0439\u043B",
          url: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430 \u0430\u0443\u0434\u0456\u043E"
        },
        browser: {
          tags: "\u0422\u0435\u0433\u0438",
          search: "\u041F\u043E\u0448\u0443\u043A"
        },
        caption: "\u0414\u043E\u0434\u0430\u0442\u0438 \u043F\u0456\u0434\u043F\u0438\u0441",
        close: "\u0417\u0430\u043A\u0440\u0438\u0442\u0438",
        submitButton: "\u041F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0438",
        revertButton: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438",
        proportion: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u043F\u0440\u043E\u043F\u043E\u0440\u0446\u0456\u0457",
        basic: "\u0411\u0435\u0437 \u043E\u0431\u0442\u0456\u043A\u0430\u043D\u043D\u044F",
        left: "\u0417\u043B\u0456\u0432\u0430",
        right: "\u0421\u043F\u0440\u0430\u0432\u0430",
        center: "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
        width: "\u0428\u0438\u0440\u0438\u043D\u0430",
        height: "\u0412\u0438\u0441\u043E\u0442\u0430",
        size: "\u0420\u043E\u0437\u043C\u0456\u0440",
        ratio: "\u0421\u043F\u0456\u0432\u0432\u0456\u0434\u043D\u043E\u0448\u0435\u043D\u043D\u044F"
      },
      controller: {
        edit: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438",
        unlink: "\u041F\u0440\u0438\u0431\u0440\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
        remove: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
        insertRowAbove: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0440\u044F\u0434\u043E\u043A \u0432\u0438\u0449\u0435",
        insertRowBelow: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0440\u044F\u0434\u043E\u043A \u043D\u0438\u0436\u0447\u0435",
        deleteRow: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0440\u044F\u0434\u043E\u043A",
        insertColumnBefore: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C \u0437\u043B\u0456\u0432\u0430",
        insertColumnAfter: "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C \u0441\u043F\u0440\u0430\u0432\u0430",
        deleteColumn: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C",
        fixedColumnWidth: "\u0424\u0456\u043A\u0441\u043E\u0432\u0430\u043D\u0430 \u0448\u0438\u0440\u0438\u043D\u0430 \u0441\u0442\u043E\u0432\u043F\u0446\u044F",
        resize100: "\u0420\u043E\u0437\u043C\u0456\u0440 100%",
        resize75: "\u0420\u043E\u0437\u043C\u0456\u0440 75%",
        resize50: "\u0420\u043E\u0437\u043C\u0456\u0440 50%",
        resize25: "\u0420\u043E\u0437\u043C\u0456\u0440 25%",
        autoSize: "\u0410\u0432\u0442\u043E \u0440\u043E\u0437\u043C\u0456\u0440",
        mirrorHorizontal: "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u043F\u043E \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u0456",
        mirrorVertical: "\u0412\u0456\u0434\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0438 \u043F\u043E \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u0456",
        rotateLeft: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u043F\u0440\u043E\u0442\u0438 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u043E\u0432\u043E\u0457 \u0441\u0442\u0440\u0456\u043B\u043A\u0438",
        rotateRight: "\u041F\u043E\u0432\u0435\u0440\u043D\u0443\u0442\u0438 \u0437\u0430 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A\u043E\u0432\u043E\u044E \u0441\u0442\u0440\u0456\u043B\u043A\u043E\u044E",
        maxSize: "\u0428\u0438\u0440\u0438\u043D\u0430 \u0437\u0430 \u0440\u043E\u0437\u043C\u0456\u0440\u043E\u043C \u0441\u0442\u043E\u0440\u0456\u043D\u043A\u0438",
        minSize: "\u0428\u0438\u0440\u0438\u043D\u0430 \u0437\u0430 \u0432\u043C\u0456\u0441\u0442\u043E\u043C",
        tableHeader: "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0442\u0430\u0431\u043B\u0438\u0446\u0456",
        mergeCells: "\u041E\u0431'\u0454\u0434\u043D\u0430\u0442\u0438 \u043A\u043B\u0456\u0442\u0438\u043D\u043A\u0438",
        splitCells: "\u0420\u043E\u0437\u0434\u0456\u043B\u0438\u0442\u0438 \u043A\u043B\u0456\u0442\u0438\u043D\u043A\u0443",
        HorizontalSplit: "\u0420\u043E\u0437\u0434\u0456\u043B\u0438\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
        VerticalSplit: "\u0420\u043E\u0437\u0434\u0456\u043B\u0438\u0442\u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E"
      },
      menu: {
        spaced: "\u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B",
        bordered: "\u0417 \u043B\u0456\u043D\u0456\u044F\u043C\u0438",
        neon: "\u041D\u0435\u043E\u043D",
        translucent: "\u041D\u0430\u043F\u0456\u0432\u043F\u0440\u043E\u0437\u043E\u0440\u0438\u0439",
        shadow: "\u0422\u0456\u043D\u044C",
        code: "\u041A\u043E\u0434"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "ua", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(bt);
const vt = bt.exports;
var _t = { exports: {} };
(function(e) {
  (function(t, i) {
    e.exports = t.document ? i(t, !0) : function(n) {
      if (!n.document)
        throw new Error("SUNEDITOR_LANG a window with a document");
      return i(n);
    };
  })(typeof window < "u" ? window : M, function(t, i) {
    const n = {
      code: "zh_cn",
      toolbar: {
        default: "\u9ED8\u8BA4",
        save: "\u4FDD\u5B58",
        font: "\u5B57\u4F53",
        formats: "\u683C\u5F0F",
        fontSize: "\u5B57\u53F7",
        bold: "\u7C97\u4F53",
        underline: "\u4E0B\u5212\u7EBF",
        italic: "\u659C\u4F53",
        strike: "\u5220\u9664\u7EBF",
        subscript: "\u4E0B\u6807",
        superscript: "\u4E0A\u6807",
        removeFormat: "\u6E05\u9664\u683C\u5F0F",
        fontColor: "\u5B57\u4F53\u989C\u8272",
        hiliteColor: "\u80CC\u666F\u989C\u8272",
        indent: "\u589E\u52A0\u7F29\u8FDB",
        outdent: "\u51CF\u5C11\u7F29\u8FDB",
        align: "\u5BF9\u9F50\u65B9\u5F0F",
        alignLeft: "\u5DE6\u5BF9\u9F50",
        alignRight: "\u53F3\u5BF9\u9F50",
        alignCenter: "\u5C45\u4E2D",
        alignJustify: "\u4E24\u7AEF\u5BF9\u9F50",
        list: "\u5217\u8868",
        orderList: "\u6709\u5E8F\u5217\u8868",
        unorderList: "\u65E0\u5E8F\u5217\u8868",
        horizontalRule: "\u6C34\u5E73\u7EBF",
        hr_solid: "\u5B9E\u7EBF",
        hr_dotted: "\u70B9\u7EBF",
        hr_dashed: "\u865A\u7EBF",
        table: "\u8868\u683C",
        link: "\u8D85\u94FE\u63A5",
        math: "\u6570\u5B66",
        image: "\u56FE\u7247",
        video: "\u89C6\u9891",
        audio: "\u97F3\u8BAF",
        fullScreen: "\u5168\u5C4F",
        showBlocks: "\u663E\u793A\u5757\u533A\u57DF",
        codeView: "\u4EE3\u7801\u89C6\u56FE",
        undo: "\u64A4\u6D88",
        redo: "\u6062\u590D",
        preview: "\u9884\u89C8",
        print: "\u6253\u5370",
        tag_p: "\u6BB5\u843D",
        tag_div: "\u6B63\u6587 (DIV)",
        tag_h: "\u6807\u9898",
        tag_blockquote: "\u5F15\u7528",
        tag_pre: "\u4EE3\u7801",
        template: "\u6A21\u677F",
        lineHeight: "\u884C\u9AD8",
        paragraphStyle: "\u6BB5\u843D\u6837\u5F0F",
        textStyle: "\u6587\u5B57\u6837\u5F0F",
        imageGallery: "\u56FE\u7247\u5E93",
        dir_ltr: "\u5DE6\u5230\u53F3",
        dir_rtl: "\u53F3\u5230\u5DE6",
        mention: "\u63D0\u5230"
      },
      dialogBox: {
        linkBox: {
          title: "\u63D2\u5165\u8D85\u94FE\u63A5",
          url: "\u7F51\u5740",
          text: "\u8981\u663E\u793A\u7684\u6587\u5B57",
          newWindowCheck: "\u5728\u65B0\u6807\u7B7E\u9875\u4E2D\u6253\u5F00",
          downloadLinkCheck: "\u4E0B\u8F7D\u94FE\u63A5",
          bookmark: "\u4E66\u7B7E"
        },
        mathBox: {
          title: "\u6570\u5B66",
          inputLabel: "\u6570\u5B66\u7B26\u53F7",
          fontSizeLabel: "\u5B57\u53F7",
          previewLabel: "\u9884\u89C8"
        },
        imageBox: {
          title: "\u63D2\u5165\u56FE\u7247",
          file: "\u4E0A\u4F20\u56FE\u7247",
          url: "\u56FE\u7247\u7F51\u5740",
          altText: "\u66FF\u6362\u6587\u5B57"
        },
        videoBox: {
          title: "\u63D2\u5165\u89C6\u9891",
          file: "\u4E0A\u4F20\u56FE\u7247",
          url: "\u5D4C\u5165\u7F51\u5740, Youtube,Vimeo"
        },
        audioBox: {
          title: "\u63D2\u5165\u97F3\u9891",
          file: "\u4E0A\u4F20\u56FE\u7247",
          url: "\u97F3\u9891\u7F51\u5740"
        },
        browser: {
          tags: "\u6807\u7B7E",
          search: "\u641C\u7D22"
        },
        caption: "\u6807\u9898",
        close: "\u53D6\u6D88",
        submitButton: "\u786E\u5B9A",
        revertButton: "\u6062\u590D",
        proportion: "\u6BD4\u4F8B",
        basic: "\u57FA\u672C",
        left: "\u5DE6",
        right: "\u53F3",
        center: "\u5C45\u4E2D",
        width: "\u5BBD\u5EA6",
        height: "\u9AD8\u5EA6",
        size: "\u5C3A\u5BF8",
        ratio: "\u6BD4"
      },
      controller: {
        edit: "\u7F16\u8F91",
        unlink: "\u53BB\u9664\u94FE\u63A5",
        remove: "\u5220\u9664",
        insertRowAbove: "\u5728\u4E0A\u65B9\u63D2\u5165",
        insertRowBelow: "\u5728\u4E0B\u65B9\u63D2\u5165",
        deleteRow: "\u5220\u9664\u884C",
        insertColumnBefore: "\u5728\u5DE6\u4FA7\u63D2\u5165",
        insertColumnAfter: "\u5728\u53F3\u4FA7\u63D2\u5165",
        deleteColumn: "\u5220\u9664\u5217",
        fixedColumnWidth: "\u56FA\u5B9A\u5217\u5BBD",
        resize100: "\u653E\u5927 100%",
        resize75: "\u653E\u5927 75%",
        resize50: "\u653E\u5927 50%",
        resize25: "\u653E\u5927 25%",
        mirrorHorizontal: "\u7FFB\u8F6C\u5DE6\u53F3",
        mirrorVertical: "\u7FFB\u8F6C\u4E0A\u4E0B",
        rotateLeft: "\u5411\u5DE6\u65CB\u8F6C",
        rotateRight: "\u5411\u53F3\u65CB\u8F6C",
        maxSize: "\u6700\u5927\u5C3A\u5BF8",
        minSize: "\u6700\u5C0F\u5C3A\u5BF8",
        tableHeader: "\u8868\u683C\u6807\u9898",
        mergeCells: "\u5408\u5E76\u5355\u5143\u683C",
        splitCells: "\u5206\u5272\u5355\u5143\u683C",
        HorizontalSplit: "\u6C34\u5E73\u5206\u5272",
        VerticalSplit: "\u5782\u76F4\u5206\u5272"
      },
      menu: {
        spaced: "\u95F4\u9694\u5F00",
        bordered: "\u8FB9\u754C\u7EBF",
        neon: "\u9713\u8679\u706F",
        translucent: "\u534A\u900F\u660E",
        shadow: "\u9634\u5F71",
        code: "\u4EE3\u7801"
      }
    };
    return typeof i > "u" && (t.SUNEDITOR_LANG || Object.defineProperty(t, "SUNEDITOR_LANG", {
      enumerable: !0,
      writable: !1,
      configurable: !1,
      value: {}
    }), Object.defineProperty(t.SUNEDITOR_LANG, "zh_cn", {
      enumerable: !0,
      writable: !0,
      configurable: !0,
      value: n
    })), n;
  });
})(_t);
const yt = _t.exports, Yn = { ckb: Ve, da: He, de: $e, en: oe, es: je, fr: Ye, he: Ke, it: Ze, ja: et, ko: it, lv: lt, nl: st, pl: rt, pt_br: ut, ro: ht, ru: ft, se: mt, ua: vt, zh_cn: yt }, ne = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ckb: Ve,
  da: He,
  de: $e,
  en: oe,
  es: je,
  fr: Ye,
  he: Ke,
  it: Ze,
  ja: et,
  ko: it,
  lv: lt,
  nl: st,
  pl: rt,
  pt_br: ut,
  ro: ht,
  ru: ft,
  se: mt,
  ua: vt,
  zh_cn: yt,
  default: Yn
}, Symbol.toStringTag, { value: "Module" })), Xn = (e, t, i) => {
  const n = pe(e, {
    plugins: Oe,
    lang: ne[t] ? ne[t] : oe
  });
  return me.create(i, n);
}, Kn = (e, t, i) => {
  const n = pe(e, {
    katex: Rt,
    plugins: Oe,
    lang: ne[t] ? ne[t] : oe
  });
  return me.create(i, n);
}, wt = {
  mixins: [J, j],
  props: {
    lang: { type: String, default: "en" },
    editorOptions: {
      type: Object,
      default() {
        return { buttonList: ti };
      }
    }
  },
  data() {
    return {
      editor: void 0,
      timeout: void 0
    };
  },
  watch: {
    disabled() {
      this.editor && this.updateEditorDisabled();
    }
  },
  methods: {
    storeEditorValue(e) {
      this.timeout && clearTimeout(this.timeout), this.timeout = setTimeout(() => {
        this.value = e;
      }, 300);
    },
    updateEditorDisabled() {
      this.disabled ? this.editor.disabled() : this.editor.enabled();
    }
  }
}, Jn = {
  name: "LktFieldEditor",
  components: { LktFieldState: G },
  mixins: [wt],
  mounted() {
    this.editor = Xn(this.editorOptions, this.lang, this.Identifier), this.editor.onChange = this.storeEditorValue, this.updateEditorDisabled();
  }
}, Zn = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Qn = ["name", "id", "disabled", "readonly", "placeholder"], el = ["for", "innerHTML"];
function tl(e, t, i, n, l, o) {
  const s = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-editor",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    N(e.$slots, "prefix"),
    D(W("textarea", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Qn), [
      [H, e.value]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 0 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, el)) : L("", !0),
    e.showInfoUi ? (k(), $(s, {
      key: 2,
      "show-add": e.showAdd,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, Zn);
}
const il = /* @__PURE__ */ U(Jn, [["render", tl]]), nl = {
  name: "LktFieldKatex",
  components: { LktFieldState: G },
  mixins: [wt],
  props: {
    editorOptions: {
      type: Object,
      default() {
        return { buttonList: ii };
      }
    }
  },
  mounted() {
    this.editor = Kn(this.editorOptions, this.lang, this.Identifier), this.editor.onChange = this.storeEditorValue, this.updateEditorDisabled();
  }
}, ll = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], ol = ["name", "id", "disabled", "readonly", "placeholder"], sl = ["for", "innerHTML"];
function al(e, t, i, n, l, o) {
  const s = F("lkt-field-state");
  return k(), z("div", {
    "data-lkt": "field-editor",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    N(e.$slots, "prefix"),
    D(W("textarea", {
      "onUpdate:modelValue": t[0] || (t[0] = (a) => e.value = a),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, ol), [
      [H, e.value]
    ]),
    e.canRenderLabelSlot ? N(e.$slots, "label", { key: 0 }) : L("", !0),
    e.canRenderLabelHtml ? (k(), z("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, sl)) : L("", !0),
    e.showInfoUi ? (k(), $(s, {
      key: 2,
      "show-add": e.showAdd,
      "show-error": e.showError,
      "show-info": e.showInfo,
      "show-log": e.showLog,
      "show-warn": e.showWarn,
      "text-add": e.textAdd,
      "text-error": e.textError,
      "text-info": e.textInfo,
      "text-log": e.textLog,
      "text-warn": e.textWarn,
      "show-mandatory": e.showMandatory,
      "text-mandatory": e.textMandatory,
      "show-open": e.showOpen,
      "text-open": e.textOpen,
      "show-link": e.showLink,
      "text-link": e.textLink,
      "text-reset": e.textReset,
      "show-reset": e.showReset && !e.disabled,
      onClickUi: e.onClickUi
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : L("", !0)
  ], 8, ll);
}
const rl = /* @__PURE__ */ U(nl, [["render", al]]);
function kt(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function Y(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function ee(e) {
  Y(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function dl(e, t) {
  Y(2, arguments);
  var i = ee(e), n = kt(t);
  if (isNaN(n))
    return new Date(NaN);
  if (!n)
    return i;
  var l = i.getDate(), o = new Date(i.getTime());
  o.setMonth(i.getMonth() + n + 1, 0);
  var s = o.getDate();
  return l >= s ? o : (i.setFullYear(o.getFullYear(), o.getMonth(), l), i);
}
function St(e) {
  Y(1, arguments);
  var t = ee(e), i = t.getMonth();
  return t.setFullYear(t.getFullYear(), i + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function xt(e) {
  Y(1, arguments);
  var t = ee(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function ul(e) {
  Y(1, arguments);
  var t = ee(e), i = t.getFullYear();
  return t.setFullYear(i + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function cl(e) {
  Y(1, arguments);
  var t = ee(e), i = new Date(0);
  return i.setFullYear(t.getFullYear(), 0, 1), i.setHours(0, 0, 0, 0), i;
}
function ue(e, t) {
  Y(2, arguments);
  var i = kt(t);
  return dl(e, -i);
}
const hl = () => ({ label: R.TODAY_RANGE_TEXT, range: [new Date(), new Date()] }), pl = () => ({ label: R.THIS_MONTH_RANGE_TEXT, range: [xt(new Date()), St(new Date())] }), fl = () => ({
  label: R.LAST_MONTH_RANGE_TEXT,
  range: [xt(ue(new Date(), 1)), St(ue(new Date(), 1))]
}), gl = () => ({ label: R.THIS_YEAR_RANGE_TEXT, range: [cl(new Date()), ul(new Date())] }), Sl = () => [
  hl(),
  pl(),
  fl(),
  gl()
], xl = {
  install: (e, t = ei) => {
    e.component("Datepicker", Ct).component("vue-next-select", ce).component("lkt-field-text", Si).component("lkt-field-text-area", Ri).component("lkt-field-check", Dt).component("lkt-field-switch", Pt).component("lkt-field-email", Oi).component("lkt-field-tel", Gi).component("lkt-field-unit", Ji).component("lkt-field-password", on).component("lkt-field-radio", pn).component("lkt-field-date", _n).component("lkt-field-select", Cn).component("lkt-field-editor", il).component("lkt-field-katex", rl), he(t) && (V(t.noOptionsMessage) || (R.NO_OPTIONS_MESSAGE = t.noOptionsMessage), V(t.showPasswordMessage) || (R.SHOW_PASSWORD_MESSAGE = t.showPasswordMessage), V(t.isMandatoryMessage) || (R.IS_MANDATORY_MESSAGE = t.isMandatoryMessage), V(t.todayRangeText) || (R.TODAY_RANGE_TEXT = t.todayRangeText), V(t.thisMonthRangeText) || (R.THIS_MONTH_RANGE_TEXT = t.thisMonthRangeText), V(t.lastMonthRangeText) || (R.LAST_MONTH_RANGE_TEXT = t.lastMonthRangeText), V(t.thisYearRangeText) || (R.THIS_YEAR_RANGE_TEXT = t.thisYearRangeText), V(t.followLinkMessage) || (R.FOLLOW_LINK_MESSAGE = t.followLinkMessage), V(t.openMessage) || (R.OPEN_MESSAGE = t.openMessage), V(t.resetMessage) || (R.RESET_MESSAGE = t.resetMessage));
  }
};
export {
  xl as default,
  Sl as getDefaultPresetRanges
};
