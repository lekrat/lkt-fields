import z from "@vuepic/vue-datepicker";
import F from "vue-next-select";
import { openBlock as o, createElementBlock as s, renderSlot as f, withDirectives as p, createElementVNode as T, vModelCheckbox as C, createCommentVNode as d, resolveComponent as y, vModelText as k, createBlock as S, vModelDynamic as D, Fragment as c, renderList as x, vModelRadio as _, createVNode as H } from "vue";
const O = (e, t) => {
  let a = e.indexOf(t);
  return e.splice(a, 1), e;
}, V = (e) => typeof e == "function", ee = (e) => typeof e == "object", m = (e) => typeof e > "u", b = (e = 10) => {
  let t = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", i = a.length;
  for (let r = 0; r < e; r++)
    t += a.charAt(Math.floor(Math.random() * i));
  return t;
}, B = {
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: Boolean, default: !1 },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: b(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Identifier: b(16),
      originalValue: this.modelValue
    };
  },
  computed: {
    isValid() {
      return V(this.valid) ? this.valid() : this.valid;
    },
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
}, w = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [i, r] of t)
    a[i] = r;
  return a;
}, te = {
  name: "LktFieldCheck",
  mixins: [B]
}, ae = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], ne = ["name", "id", "disabled", "readonly", "placeholder", "value"], oe = ["for", "innerHTML"];
function le(e, t, a, i, r, u) {
  return o(), s("div", {
    "data-lkt": "field-check",
    "data-state": e.state,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.modelValue,
    "data-filled": !!e.modelValue
  }, [
    f(e.$slots, "prefix"),
    p(T("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.modelValue = l),
      type: "checkbox",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder,
      value: e.modelValue ? "true" : "false"
    }, null, 8, ne), [
      [C, e.modelValue]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 0 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, oe)) : d("", !0)
  ], 8, ae);
}
const se = /* @__PURE__ */ w(te, [["render", le]]), ie = {
  name: "LktFieldSwitch",
  mixins: [B]
}, de = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], re = ["name", "id", "disabled", "readonly", "placeholder"], ue = ["for", "innerHTML"];
function he(e, t, a, i, r, u) {
  return o(), s("div", {
    "data-lkt": "field-switch",
    "data-state": e.state,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.modelValue,
    "data-filled": !!e.modelValue
  }, [
    f(e.$slots, "prefix"),
    p(T("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => e.modelValue = l),
      type: "checkbox",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, re), [
      [C, e.modelValue]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 0 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, ue)) : d("", !0)
  ], 8, de);
}
const fe = /* @__PURE__ */ w(ie, [["render", he]]);
class h {
}
h.SHOW_PASSWORD_MESSAGE = "";
h.IS_MANDATORY_MESSAGE = "";
h.FOLLOW_LINK_MESSAGE = "";
h.OPEN_MESSAGE = "";
h.RESET_MESSAGE = "";
h.NO_OPTIONS_MESSAGE = "";
h.TODAY_RANGE_TEXT = "";
h.THIS_MONTH_RANGE_TEXT = "";
h.LAST_MONTH_RANGE_TEXT = "";
h.THIS_YEAR_RANGE_TEXT = "";
const pe = {
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
  textPassword: { type: String, default: h.SHOW_PASSWORD_MESSAGE },
  textMandatory: { type: String, default: h.IS_MANDATORY_MESSAGE },
  textError: { type: String, default: "" },
  textWarn: { type: String, default: "" },
  textLog: { type: String, default: "" },
  textLink: { type: String, default: h.FOLLOW_LINK_MESSAGE },
  textOpen: { type: String, default: h.OPEN_MESSAGE },
  textReset: { type: String, default: h.RESET_MESSAGE }
}, me = "Show password", we = "This is mandatory", ye = "Follow link", ke = "Show details", ge = "Reset", be = "No results. Try typing some text.", Se = "Today", Le = "This month", Ee = "Last month", Me = "This year", $e = {
  noOptionsMessage: be,
  showPasswordMessage: me,
  isMandatoryMessage: we,
  followLinkMessage: ye,
  openMessage: ke,
  resetMessage: ge,
  todayRangeText: Se,
  thisMonthRangeText: Le,
  lastMonthRangeText: Ee,
  thisYearRangeText: Me
};
class Te {
  constructor(t, a) {
    this.id = void 0, this.value = void 0, this.id = t, this.value = a;
  }
}
const $ = (e, t) => new Te(e, t), P = (e, t, a, i = {}) => {
  e.$emit("click-ui", t, $(a, i));
}, G = (e, t, a, i = {}) => {
  e.$emit("keyup", t, $(a, i));
}, W = (e, t, a, i = {}) => {
  e.$emit("keydown", t, $(a, i));
}, Y = (e, t, a, i = {}) => {
  e.$emit("focus", t, $(a, i));
}, K = (e, t, a, i = {}) => {
  e.$emit("blur", t, $(a, i));
}, X = (e, t, a, i = {}) => {
  e.$emit("click", t, $(a, i));
}, j = {
  props: pe,
  computed: {
    showInfoUi() {
      return this.showAdd || this.showMandatory || this.showOpen || this.showInfo || this.showError || this.showLog || this.showWarn || this.showLink || this.showReset || this.showPassword;
    }
  },
  methods: {
    onUIStatusClick(e, t, a = {}) {
      P(this, e, t, a);
    }
  }
}, L = {
  mixins: [j],
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
      P(this, e, t, { field: this });
    }
  }
}, Ve = {
  name: "lktFieldState",
  mixins: [j]
};
const Re = { "data-lkt": "field-state-ui" }, ve = ["title"], Ie = ["title"], Oe = ["title"], Ae = ["title"], Ue = ["title"], De = ["title"], Ne = ["title"], Fe = ["title"], Ce = ["title"], He = ["title"];
function Be(e, t, a, i, r, u) {
  return o(), s("div", Re, [
    e.showAdd ? (o(), s("i", {
      key: 0,
      "data-lkt": "add-icon",
      title: e.textAdd,
      onClick: t[0] || (t[0] = (l) => e.onUIStatusClick(l, "add"))
    }, null, 8, ve)) : d("", !0),
    e.showOpen ? (o(), s("i", {
      key: 1,
      "data-lkt": "open-icon",
      title: e.textOpen,
      onClick: t[1] || (t[1] = (l) => e.onUIStatusClick(l, "open"))
    }, null, 8, Ie)) : d("", !0),
    e.showLink ? (o(), s("i", {
      key: 2,
      "data-lkt": "link-icon",
      title: e.textLink,
      onClick: t[2] || (t[2] = (l) => e.onUIStatusClick(l, "link"))
    }, null, 8, Oe)) : d("", !0),
    e.showInfo ? (o(), s("i", {
      key: 3,
      "data-lkt": "info-icon",
      title: e.textInfo,
      onClick: t[3] || (t[3] = (l) => e.onUIStatusClick(l, "info"))
    }, null, 8, Ae)) : d("", !0),
    e.showPassword ? (o(), s("i", {
      key: 4,
      "data-lkt": "show-password-icon",
      title: e.textPassword,
      onClick: t[4] || (t[4] = (l) => e.onUIStatusClick(l, "show-password"))
    }, null, 8, Ue)) : d("", !0),
    e.showLog ? (o(), s("i", {
      key: 5,
      "data-lkt": "log-icon",
      title: e.textLog,
      onClick: t[5] || (t[5] = (l) => e.onUIStatusClick(l, "log"))
    }, null, 8, De)) : d("", !0),
    e.showWarn ? (o(), s("i", {
      key: 6,
      "data-lkt": "warn-icon",
      title: e.textWarn,
      onClick: t[6] || (t[6] = (l) => e.onUIStatusClick(l, "warn"))
    }, null, 8, Ne)) : d("", !0),
    e.showError ? (o(), s("i", {
      key: 7,
      "data-lkt": "error-icon",
      title: e.textError,
      onClick: t[7] || (t[7] = (l) => e.onUIStatusClick(l, "error"))
    }, null, 8, Fe)) : d("", !0),
    e.showMandatory ? (o(), s("i", {
      key: 8,
      "data-lkt": "mandatory-icon",
      title: e.textMandatory,
      onClick: t[8] || (t[8] = (l) => e.onUIStatusClick(l, "mandatory"))
    }, null, 8, Ce)) : d("", !0),
    e.showReset ? (o(), s("i", {
      key: 9,
      "data-lkt": "reset-icon",
      title: e.textReset,
      onClick: t[9] || (t[9] = (l) => e.onUIStatusClick(l, "reset"))
    }, null, 8, He)) : d("", !0)
  ]);
}
const E = /* @__PURE__ */ w(Ve, [["render", Be]]), R = {
  emits: ["update:modelValue", "keyup", "keydown", "focus", "blur", "click"],
  props: {
    modelValue: { type: String, default: "" },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: b(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Identifier: b(16),
      originalValue: this.modelValue,
      value: this.modelValue
    };
  },
  computed: {
    isValid() {
      return V(this.valid) ? this.valid() : this.valid;
    },
    isEmpty() {
      return !this.modelValue;
    },
    changed() {
      return this.value !== this.originalValue;
    },
    canRenderLabelSlot() {
      return !!this.$slots.label;
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
      G(this, e, this.name, { value: this.Value });
    },
    onKeyDown(e) {
      W(this, e, this.name, { value: this.Value });
    },
    onFocus(e) {
      Y(this, e, this.name, { value: this.Value });
    },
    onBlur(e) {
      K(this, e, this.name, { value: this.Value });
    },
    onClick(e) {
      X(this, e, this.name, { value: this.Value });
    }
  }
}, Pe = {
  name: "LktFieldText",
  components: { lktFieldState: E },
  mixins: [R, L]
}, Ge = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled", "data-labeled"], We = ["name", "id", "disabled", "readonly", "placeholder"], Ye = ["name", "id", "disabled", "readonly"], Ke = ["for", "innerHTML"];
function Xe(e, t, a, i, r, u) {
  const l = y("lkt-field-state");
  return o(), s("div", {
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
    f(e.$slots, "prefix"),
    e.placeholder ? p((o(), s("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (n) => e.value = n),
      ref: "input",
      type: "text",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder,
      onKeyup: t[1] || (t[1] = (...n) => e.onKeyUp && e.onKeyUp(...n)),
      onKeydown: t[2] || (t[2] = (...n) => e.onKeyDown && e.onKeyDown(...n)),
      onFocus: t[3] || (t[3] = (...n) => e.onFocus && e.onFocus(...n)),
      onBlur: t[4] || (t[4] = (...n) => e.onBlur && e.onBlur(...n)),
      onClick: t[5] || (t[5] = (...n) => e.onClick && e.onClick(...n))
    }, null, 40, We)), [
      [k, e.value]
    ]) : p((o(), s("input", {
      key: 1,
      "onUpdate:modelValue": t[6] || (t[6] = (n) => e.value = n),
      ref: "input",
      type: "text",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      onKeyup: t[7] || (t[7] = (...n) => e.onKeyUp && e.onKeyUp(...n)),
      onKeydown: t[8] || (t[8] = (...n) => e.onKeyDown && e.onKeyDown(...n)),
      onFocus: t[9] || (t[9] = (...n) => e.onFocus && e.onFocus(...n)),
      onBlur: t[10] || (t[10] = (...n) => e.onBlur && e.onBlur(...n)),
      onClick: t[11] || (t[11] = (...n) => e.onClick && e.onClick(...n))
    }, null, 40, Ye)), [
      [k, e.value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Ke)) : d("", !0),
    e.showInfoUi ? (o(), S(l, {
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
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : d("", !0)
  ], 8, Ge);
}
const je = /* @__PURE__ */ w(Pe, [["render", Xe]]), qe = {
  name: "LktFieldTextArea",
  components: { lktFieldState: E },
  mixins: [R, L]
}, Je = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Qe = ["name", "id", "disabled", "readonly", "placeholder"], Ze = ["name", "id", "disabled", "readonly"], ze = ["for", "innerHTML"];
function ce(e, t, a, i, r, u) {
  const l = y("lkt-field-state");
  return o(), s("div", {
    "data-lkt": "field-textarea",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((o(), s("textarea", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (n) => e.value = n),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Qe)), [
      [k, e.value]
    ]) : p((o(), s("textarea", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (n) => e.value = n),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, Ze)), [
      [k, e.value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, ze)) : d("", !0),
    e.showInfoUi ? (o(), S(l, {
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
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : d("", !0)
  ], 8, Je);
}
const xe = /* @__PURE__ */ w(qe, [["render", ce]]), _e = {
  name: "LktFieldEmail",
  components: { lktFieldState: E },
  mixins: [R, L]
}, et = ["data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], tt = ["name", "id", "disabled", "readonly", "placeholder"], at = ["name", "id", "disabled", "readonly"], nt = ["for", "innerHTML"];
function ot(e, t, a, i, r, u) {
  const l = y("lkt-field-state");
  return o(), s("div", {
    "data-lkt": "field-email",
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((o(), s("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (n) => e.value = n),
      type: "email",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, tt)), [
      [k, e.value]
    ]) : p((o(), s("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (n) => e.value = n),
      type: "email",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, at)), [
      [k, e.value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, nt)) : d("", !0),
    e.showInfoUi ? (o(), S(l, {
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
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : d("", !0)
  ], 8, et);
}
const lt = /* @__PURE__ */ w(_e, [["render", ot]]), st = {
  name: "LktFieldTel",
  components: { lktFieldState: E },
  mixins: [R, L]
}, it = ["data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], dt = ["name", "id", "disabled", "readonly", "placeholder"], rt = ["name", "id", "disabled", "readonly"], ut = ["for", "innerHTML"];
function ht(e, t, a, i, r, u) {
  const l = y("lkt-field-state");
  return o(), s("div", {
    "data-lkt": "field-tel",
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((o(), s("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (n) => e.value = n),
      type: "tel",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, dt)), [
      [k, e.value]
    ]) : p((o(), s("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (n) => e.value = n),
      type: "tel",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, rt)), [
      [k, e.value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, ut)) : d("", !0),
    e.showInfoUi ? (o(), S(l, {
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
    }, null, 8, ["show-error", "show-info", "show-log", "show-warn", "text-error", "text-info", "text-log", "text-warn", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : d("", !0)
  ], 8, it);
}
const ft = /* @__PURE__ */ w(st, [["render", ht]]), U = {
  props: {
    modelValue: { type: [String, Number, Object, Array, Date, Boolean], default: () => {
    } },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: b(16) },
    invalid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    canReset: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Value: this.modelValue,
      Identifier: b(16),
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
      G(this, e, this.name, { value: this.Value });
    },
    onKeyDown(e) {
      W(this, e, this.name, { value: this.Value });
    },
    onFocus(e) {
      Y(this, e, this.name, { value: this.Value });
    },
    onBlur(e) {
      K(this, e, this.name, { value: this.Value });
    },
    onClick(e) {
      X(this, e, this.name, { value: this.Value });
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
}, pt = {
  name: "LktFieldUnit",
  components: { lktFieldState: E },
  mixins: [U, L],
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
      return m(this.min) ? !1 : parseInt(this.min);
    },
    Max() {
      return m(this.max) ? !1 : parseInt(this.max);
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
}, mt = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled", "data-ranged"], wt = ["id", "name", "disabled", "readonly", "min", "max"], yt = ["name", "id", "disabled", "readonly", "min", "max", "step", "placeholder"], kt = ["for", "innerHTML"];
function gt(e, t, a, i, r, u) {
  const l = y("lkt-field-state");
  return o(), s("div", {
    "data-lkt": "field-unit",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !r.Value,
    "data-filled": !!r.Value,
    "data-ranged": a.addRange
  }, [
    a.addRange ? p((o(), s("input", {
      key: 0,
      type: "range",
      id: e.Identifier + "Points",
      name: e.name + "Points",
      "onUpdate:modelValue": t[0] || (t[0] = (n) => r.Value = n),
      disabled: e.disabled,
      readonly: e.readonly,
      min: u.Min,
      max: u.Max
    }, null, 8, wt)), [
      [k, r.Value]
    ]) : d("", !0),
    f(e.$slots, "prefix"),
    p(T("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (n) => r.Value = n),
      type: "number",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      min: u.Min,
      max: u.Max,
      step: a.step,
      placeholder: e.placeholder
    }, null, 8, yt), [
      [k, r.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 1 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 2,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, kt)) : d("", !0),
    e.showInfoUi ? (o(), S(l, {
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
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : d("", !0)
  ], 8, mt);
}
const bt = /* @__PURE__ */ w(pt, [["render", gt]]), St = {
  name: "LktFieldPassword",
  components: { lktFieldState: E },
  mixins: [R, L],
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
}, Lt = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Et = ["type", "name", "id", "disabled", "readonly", "placeholder"], Mt = ["type", "name", "id", "disabled", "readonly"], $t = ["for", "innerHTML"];
function Tt(e, t, a, i, r, u) {
  const l = y("lkt-field-state");
  return o(), s("div", {
    "data-lkt": "field-password",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": e.isEmpty,
    "data-filled": !e.isEmpty
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((o(), s("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (n) => e.value = n),
      type: u.inputType,
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Et)), [
      [D, e.value]
    ]) : p((o(), s("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (n) => e.value = n),
      type: u.inputType,
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, Mt)), [
      [D, e.value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, $t)) : d("", !0),
    e.showInfoUi ? (o(), S(l, {
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
    }, null, 8, ["show-add", "show-password", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "text-password", "show-reset", "onClickUi"])) : d("", !0)
  ], 8, Lt);
}
const Vt = /* @__PURE__ */ w(St, [["render", Tt]]), Rt = () => h.NO_OPTIONS_MESSAGE, vt = (e = {}) => e.label, It = (e = {}, t = 0) => e, A = (e, t, a = !1) => {
  if (a) {
    let i = [];
    return e.forEach((r) => {
      let u = Object.keys(r);
      O(u, "id"), O(u, "text"), O(u, "children"), O(u, "disabled");
      let l = !1, n = [];
      r.children && (l = !0, n = A(r.children, t, a));
      let g = {};
      u.forEach((I) => {
        g[I] = r[I];
      }), i.push({
        group: l,
        disabled: r.disabled && r.disabled === !0 || l,
        value: l ? n : r.id,
        label: r.text,
        data: g
      }), n.forEach((I) => {
        i.push(I);
      });
    }), i;
  }
  return e.map((i, r) => t(i, r));
}, q = {
  props: {
    options: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: Rt() },
    optionFormatter: { type: Function, default: vt },
    optionParser: { type: Function, default: It },
    select2Compatibility: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Options: A(this.options, this.optionParser, this.select2Compatibility)
    };
  },
  computed: {
    renderSelectedOption: {
      cache: !1,
      get() {
        let e = this.Options.filter((t) => t.selected === !0);
        return e && e.length > 0 && V(this.optionFormatter) ? this.optionFormatter(e[0]) : this.fetchString;
      }
    }
  },
  watch: {
    options: {
      handler() {
        this.Options = A(this.options, this.optionParser, this.select2Compatibility);
      },
      deep: !0
    }
  },
  methods: {
    getDropdownOptionSelector(e, t = -1, a = -1) {
      let i = { "is-highlight": t == a, "is-selected": e.selected === !0 };
      return e.selector && e.selector.split(" ").forEach((u) => {
        i[u] = !0;
      }), i;
    },
    renderOption(e) {
      return V(this.optionFormatter) ? this.optionFormatter(e) : e.label;
    }
  }
}, Ot = {
  name: "LktFieldRadio",
  mixins: [U, q],
  props: {
    value: { type: String, default: "" }
  }
}, At = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Ut = { "data-role": "option" }, Dt = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], Nt = ["for", "innerHTML"];
function Ft(e, t, a, i, r, u) {
  return o(), s("div", {
    "data-lkt": "field-radio",
    "data-state": e.state,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    f(e.$slots, "prefix"),
    (o(!0), s(c, null, x(e.Options, (l, n) => (o(), s("div", Ut, [
      p(T("input", {
        type: "radio",
        "onUpdate:modelValue": t[0] || (t[0] = (g) => e.Value = g),
        name: e.name,
        id: e.Identifier + n,
        disabled: e.disabled,
        readonly: e.readonly,
        placeholder: e.placeholder,
        value: l.id,
        checked: l.id === e.Value
      }, null, 8, Dt), [
        [_, e.Value]
      ]),
      T("label", {
        for: e.Identifier + n,
        innerHTML: l.text
      }, null, 8, Nt)
    ]))), 256))
  ], 8, At);
}
const Ct = /* @__PURE__ */ w(Ot, [["render", Ft]]), Ht = {
  emits: ["update:modelValue"],
  props: {
    modelValue: { type: [String, Date], default: "" },
    disabledDates: {
      type: Object,
      default() {
        return {};
      }
    },
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
    flow: { type: Array, default: () => [] },
    presetRanges: { type: Array, default: () => [] },
    minDate: { type: [Date, String], default: () => null },
    maxDate: { type: [Date, String], default: () => null },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: b(16) },
    valid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Identifier: b(16),
      originalValue: this.modelValue
    };
  },
  computed: {
    isValid() {
      return V(this.valid) ? this.valid() : this.valid;
    },
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
    reset() {
      this.modelValue = this.originalValue;
    },
    getValue() {
      return this.modelValue;
    }
  }
}, Bt = {
  name: "LktFieldDate",
  components: { lktFieldState: E },
  mixins: [Ht, L]
}, Pt = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Gt = ["for", "innerHTML"];
function Wt(e, t, a, i, r, u) {
  const l = y("Datepicker"), n = y("lkt-field-state");
  return o(), s("div", {
    "data-lkt": "field-date",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": !e.isValid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.modelValue,
    "data-filled": !!e.modelValue
  }, [
    f(e.$slots, "prefix"),
    H(l, {
      modelValue: e.modelValue,
      "onUpdate:modelValue": t[0] || (t[0] = (g) => e.modelValue = g),
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
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 0 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Gt)) : d("", !0),
    e.showInfoUi ? (o(), S(n, {
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
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : d("", !0)
  ], 8, Pt);
}
const Yt = /* @__PURE__ */ w(Bt, [["render", Wt]]), Kt = {
  name: "LktFieldSelect",
  components: { lktFieldState: E, VueNextSelect: F },
  mixins: [U, L, q]
}, Xt = ["data-state", "data-multiple", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], jt = ["for", "innerHTML"];
function qt(e, t, a, i, r, u) {
  const l = y("vue-next-select"), n = y("lkt-field-state");
  return o(), s("div", {
    "data-lkt": "api-select",
    "data-state": e.state,
    "data-multiple": e.multiple,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    f(e.$slots, "prefix"),
    H(l, {
      modelValue: e.Value,
      "onUpdate:modelValue": t[0] || (t[0] = (g) => e.Value = g),
      options: e.Options,
      "label-by": "label",
      "group-by": "group"
    }, null, 8, ["modelValue", "options"]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 0 }) : d("", !0),
    e.canRenderLabelHtml ? (o(), s("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, jt)) : d("", !0),
    e.showInfoUi ? (o(), S(n, {
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
    }, null, 8, ["show-add", "show-error", "show-info", "show-log", "show-warn", "text-add", "text-error", "text-info", "text-log", "text-warn", "show-mandatory", "text-mandatory", "show-open", "text-open", "show-link", "text-link", "text-reset", "show-reset", "onClickUi"])) : d("", !0)
  ], 8, Xt);
}
const Jt = /* @__PURE__ */ w(Kt, [["render", qt]]);
function J(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function M(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function v(e) {
  M(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Qt(e, t) {
  M(2, arguments);
  var a = v(e), i = J(t);
  if (isNaN(i))
    return new Date(NaN);
  if (!i)
    return a;
  var r = a.getDate(), u = new Date(a.getTime());
  u.setMonth(a.getMonth() + i + 1, 0);
  var l = u.getDate();
  return r >= l ? u : (a.setFullYear(u.getFullYear(), u.getMonth(), r), a);
}
function Q(e) {
  M(1, arguments);
  var t = v(e), a = t.getMonth();
  return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Z(e) {
  M(1, arguments);
  var t = v(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Zt(e) {
  M(1, arguments);
  var t = v(e), a = t.getFullYear();
  return t.setFullYear(a + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function zt(e) {
  M(1, arguments);
  var t = v(e), a = new Date(0);
  return a.setFullYear(t.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function N(e, t) {
  M(2, arguments);
  var a = J(t);
  return Qt(e, -a);
}
const ct = () => ({ label: h.TODAY_RANGE_TEXT, range: [new Date(), new Date()] }), xt = () => ({ label: h.THIS_MONTH_RANGE_TEXT, range: [Z(new Date()), Q(new Date())] }), _t = () => ({
  label: h.LAST_MONTH_RANGE_TEXT,
  range: [Z(N(new Date(), 1)), Q(N(new Date(), 1))]
}), ea = () => ({ label: h.THIS_YEAR_RANGE_TEXT, range: [zt(new Date()), Zt(new Date())] }), oa = () => [
  ct(),
  xt(),
  _t(),
  ea()
], la = {
  install: (e, t = $e) => {
    e.component("Datepicker", z).component("vue-next-select", F).component("lkt-field-text", je).component("lkt-field-text-area", xe).component("lkt-field-check", se).component("lkt-field-switch", fe).component("lkt-field-email", lt).component("lkt-field-tel", ft).component("lkt-field-unit", bt).component("lkt-field-password", Vt).component("lkt-field-radio", Ct).component("lkt-field-date", Yt).component("lkt-field-select", Jt), ee(t) && (m(t.noOptionsMessage) || (h.NO_OPTIONS_MESSAGE = t.noOptionsMessage), m(t.showPasswordMessage) || (h.SHOW_PASSWORD_MESSAGE = t.showPasswordMessage), m(t.isMandatoryMessage) || (h.IS_MANDATORY_MESSAGE = t.isMandatoryMessage), m(t.todayRangeText) || (h.TODAY_RANGE_TEXT = t.todayRangeText), m(t.thisMonthRangeText) || (h.THIS_MONTH_RANGE_TEXT = t.thisMonthRangeText), m(t.lastMonthRangeText) || (h.LAST_MONTH_RANGE_TEXT = t.lastMonthRangeText), m(t.thisYearRangeText) || (h.THIS_YEAR_RANGE_TEXT = t.thisYearRangeText), m(t.followLinkMessage) || (h.FOLLOW_LINK_MESSAGE = t.followLinkMessage), m(t.openMessage) || (h.OPEN_MESSAGE = t.openMessage), m(t.resetMessage) || (h.RESET_MESSAGE = t.resetMessage));
  }
};
export {
  la as default,
  oa as getDefaultPresetRanges
};
