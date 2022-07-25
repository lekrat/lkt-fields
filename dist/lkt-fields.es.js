import Z from "@vuepic/vue-datepicker";
import U from "vue-next-select";
import { openBlock as n, createElementBlock as s, renderSlot as f, withDirectives as p, createElementVNode as R, vModelCheckbox as N, createCommentVNode as d, resolveComponent as k, vModelText as g, createBlock as b, vModelDynamic as V, Fragment as c, renderList as x, vModelRadio as _, createVNode as D } from "vue";
const $ = (e) => typeof e == "function", ee = (e) => typeof e == "object", w = (e) => typeof e > "u", O = (e = 10) => {
  let t = "", a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", h = a.length;
  for (let i = 0; i < e; i++)
    t += a.charAt(Math.floor(Math.random() * h));
  return t;
};
class te {
  constructor(t, a) {
    this.id = void 0, this.value = void 0, this.id = t, this.value = a;
  }
}
const T = (e, t) => new te(e, t), y = {
  props: {
    value: { type: [String, Number, Object, Array, Date, Boolean], default: () => {
    } },
    placeholder: { type: String, default: "" },
    label: { type: String, default: "" },
    state: { type: String, default: "" },
    name: { type: String, default: O(16) },
    invalid: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    canReset: { type: Boolean, default: !1 },
    emptyLabel: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Value: this.value,
      Identifier: O(16),
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
      this.$emit("keyup", e, T(this.name, { value: this.Value }));
    },
    onKeyDown(e) {
      this.$emit("keydown", e, T(this.name, { value: this.Value }));
    },
    onFocus(e) {
      this.$emit("focus", e, T(this.name, { value: this.Value }));
    },
    onBlur(e) {
      this.$emit("blur", e, T(this.name, { value: this.Value }));
    },
    onClick(e) {
      this.$emit("click", e, T(this.name, { value: this.Value }));
    }
  },
  watch: {
    value(e) {
      this.Value = e;
    },
    Value(e) {
      this.validate(e), this.canEmit === !0 && (this.$emit("input", e), this.$emit("change", e));
    }
  },
  mounted() {
    this.canEmit = !0;
  }
}, m = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [h, i] of t)
    a[h] = i;
  return a;
}, ae = {
  name: "LktFieldCheck",
  mixins: [y],
  props: {
    value: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Value: !1,
      ValueOriginal: !1
    };
  }
}, ne = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], oe = ["name", "id", "disabled", "readonly", "placeholder", "value"], le = ["for", "innerHTML"];
function se(e, t, a, h, i, u) {
  return n(), s("div", {
    "data-lkt": "field-check",
    "data-state": e.state,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !i.Value,
    "data-filled": !!i.Value
  }, [
    f(e.$slots, "prefix"),
    p(R("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => i.Value = l),
      type: "checkbox",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder,
      value: i.Value ? "true" : "false"
    }, null, 8, oe), [
      [N, i.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 0 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, le)) : d("", !0)
  ], 8, ne);
}
const de = /* @__PURE__ */ m(ae, [["render", se]]), ie = {
  name: "LktFieldSwitch",
  mixins: [y],
  props: {
    value: { type: Boolean, default: !1 }
  },
  data() {
    return {
      Value: !1,
      ValueOriginal: !1
    };
  }
}, re = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], ue = ["name", "id", "disabled", "readonly", "placeholder"], he = ["for", "innerHTML"];
function fe(e, t, a, h, i, u) {
  return n(), s("div", {
    "data-lkt": "field-switch",
    "data-state": e.state,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !i.Value,
    "data-filled": !!i.Value
  }, [
    f(e.$slots, "prefix"),
    p(R("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (l) => i.Value = l),
      type: "checkbox",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, ue), [
      [N, i.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 0 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, he)) : d("", !0)
  ], 8, re);
}
const pe = /* @__PURE__ */ m(ie, [["render", fe]]);
class r {
}
r.SHOW_PASSWORD_MESSAGE = F;
r.IS_MANDATORY_MESSAGE = C;
r.FOLLOW_LINK_MESSAGE = H;
r.OPEN_MESSAGE = P;
r.RESET_MESSAGE = B;
r.NO_OPTIONS_MESSAGE = G;
r.TODAY_RANGE_TEXT = W;
r.THIS_MONTH_RANGE_TEXT = Y;
r.LAST_MONTH_RANGE_TEXT = K;
r.THIS_YEAR_RANGE_TEXT = X;
const we = {
  showAdd: {
    type: Boolean,
    default: !1
  },
  showLink: {
    type: Boolean,
    default: !1
  },
  showOpen: {
    type: Boolean,
    default: !1
  },
  showInfo: {
    type: Boolean,
    default: !1
  },
  showPassword: {
    type: Boolean,
    default: !1
  },
  showMandatory: {
    type: Boolean,
    default: !1
  },
  showError: {
    type: Boolean,
    default: !1
  },
  showWarn: {
    type: Boolean,
    default: !1
  },
  showLog: {
    type: Boolean,
    default: !1
  },
  showReset: {
    type: Boolean,
    default: !1
  },
  textAdd: {
    type: String,
    default: ""
  },
  textInfo: {
    type: String,
    default: "More info"
  },
  textPassword: {
    type: String,
    default: r.SHOW_PASSWORD_MESSAGE
  },
  textMandatory: {
    type: String,
    default: r.IS_MANDATORY_MESSAGE
  },
  textError: {
    type: String,
    default: ""
  },
  textWarn: {
    type: String,
    default: ""
  },
  textLog: {
    type: String,
    default: ""
  },
  textLink: {
    type: String,
    default: "Follow link"
  },
  textOpen: {
    type: String,
    default: "Show details"
  },
  textReset: {
    type: String,
    default: "Reset"
  }
}, F = "Show password", C = "This is mandatory", H = "Follow link", P = "Show details", B = "Reset", G = "No results. Try typing some text.", W = "Today", Y = "This month", K = "Last month", X = "This year", me = {
  noOptionsMessage: G,
  showPasswordMessage: F,
  isMandatoryMessage: C,
  followLinkMessage: H,
  openMessage: P,
  resetMessage: B,
  todayRangeText: W,
  thisMonthRangeText: Y,
  lastMonthRangeText: K,
  thisYearRangeText: X
}, j = {
  props: we,
  computed: {
    showInfoUi() {
      return this.showAdd || this.showMandatory || this.showOpen || this.showInfo || this.showError || this.showLog || this.showWarn || this.showLink || this.showReset || this.showPassword;
    }
  },
  methods: {
    onUIStatusClick(e, t, a = {}) {
      this.$emit("click-ui", e, T(t, a));
    }
  }
}, S = {
  mixins: [j],
  methods: {
    onClickUi(e, t) {
      if (t === "reset") {
        this.reset();
        return;
      }
      if (t === "undo") {
        this.undo();
        return;
      }
      if (t === "show-password" && this.hasOwnProperty("visiblePassword")) {
        this.visiblePassword = !this.visiblePassword;
        return;
      }
      this.onUIStatusClick(e, t, {
        field: this
      });
    }
  }
}, ye = {
  name: "lktFieldState",
  mixins: [j]
};
const ke = { "data-lkt": "field-state-ui" }, ge = ["title"], be = ["title"], Se = ["title"], Le = ["title"], Me = ["title"], Te = ["title"], Ee = ["title"], Re = ["title"], Ie = ["title"], Ve = ["title"];
function $e(e, t, a, h, i, u) {
  return n(), s("div", ke, [
    e.showAdd ? (n(), s("i", {
      key: 0,
      "data-lkt": "add-icon",
      title: e.textAdd,
      onClick: t[0] || (t[0] = (l) => e.onUIStatusClick(l, "add"))
    }, null, 8, ge)) : d("", !0),
    e.showOpen ? (n(), s("i", {
      key: 1,
      "data-lkt": "open-icon",
      title: e.textOpen,
      onClick: t[1] || (t[1] = (l) => e.onUIStatusClick(l, "open"))
    }, null, 8, be)) : d("", !0),
    e.showLink ? (n(), s("i", {
      key: 2,
      "data-lkt": "link-icon",
      title: e.textLink,
      onClick: t[2] || (t[2] = (l) => e.onUIStatusClick(l, "link"))
    }, null, 8, Se)) : d("", !0),
    e.showInfo ? (n(), s("i", {
      key: 3,
      "data-lkt": "info-icon",
      title: e.textInfo,
      onClick: t[3] || (t[3] = (l) => e.onUIStatusClick(l, "info"))
    }, null, 8, Le)) : d("", !0),
    e.showPassword ? (n(), s("i", {
      key: 4,
      "data-lkt": "show-password-icon",
      title: e.textPassword,
      onClick: t[4] || (t[4] = (l) => e.onUIStatusClick(l, "show-password"))
    }, null, 8, Me)) : d("", !0),
    e.showLog ? (n(), s("i", {
      key: 5,
      "data-lkt": "log-icon",
      title: e.textLog,
      onClick: t[5] || (t[5] = (l) => e.onUIStatusClick(l, "log"))
    }, null, 8, Te)) : d("", !0),
    e.showWarn ? (n(), s("i", {
      key: 6,
      "data-lkt": "warn-icon",
      title: e.textWarn,
      onClick: t[6] || (t[6] = (l) => e.onUIStatusClick(l, "warn"))
    }, null, 8, Ee)) : d("", !0),
    e.showError ? (n(), s("i", {
      key: 7,
      "data-lkt": "error-icon",
      title: e.textError,
      onClick: t[7] || (t[7] = (l) => e.onUIStatusClick(l, "error"))
    }, null, 8, Re)) : d("", !0),
    e.showMandatory ? (n(), s("i", {
      key: 8,
      "data-lkt": "mandatory-icon",
      title: e.textMandatory,
      onClick: t[8] || (t[8] = (l) => e.onUIStatusClick(l, "mandatory"))
    }, null, 8, Ie)) : d("", !0),
    e.showReset ? (n(), s("i", {
      key: 9,
      "data-lkt": "reset-icon",
      title: e.textReset,
      onClick: t[9] || (t[9] = (l) => e.onUIStatusClick(l, "reset"))
    }, null, 8, Ve)) : d("", !0)
  ]);
}
const L = /* @__PURE__ */ m(ye, [["render", $e]]), Oe = {
  name: "LktFieldText",
  components: { lktFieldState: L },
  mixins: [y, S],
  emits: ["input", "change", "keyup", "keydown", "focus", "blur", "click"],
  props: {
    value: { type: String, default: "" }
  },
  methods: {
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    }
  }
}, Ae = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled", "data-labeled"], ve = ["name", "id", "disabled", "readonly", "placeholder"], Ue = ["name", "id", "disabled", "readonly"], Ne = ["for", "innerHTML"];
function De(e, t, a, h, i, u) {
  const l = k("lkt-field-state");
  return n(), s("div", {
    "data-lkt": "field-text",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value,
    "data-labeled": e.canRenderLabelHtml
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((n(), s("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.Value = o),
      ref: "input",
      type: "text",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder,
      onKeyup: t[1] || (t[1] = (...o) => e.onKeyUp && e.onKeyUp(...o)),
      onKeydown: t[2] || (t[2] = (...o) => e.onKeyDown && e.onKeyDown(...o)),
      onFocus: t[3] || (t[3] = (...o) => e.onFocus && e.onFocus(...o)),
      onBlur: t[4] || (t[4] = (...o) => e.onBlur && e.onBlur(...o)),
      onClick: t[5] || (t[5] = (...o) => e.onClick && e.onClick(...o))
    }, null, 40, ve)), [
      [g, e.Value]
    ]) : p((n(), s("input", {
      key: 1,
      "onUpdate:modelValue": t[6] || (t[6] = (o) => e.Value = o),
      ref: "input",
      type: "text",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      onKeyup: t[7] || (t[7] = (...o) => e.onKeyUp && e.onKeyUp(...o)),
      onKeydown: t[8] || (t[8] = (...o) => e.onKeyDown && e.onKeyDown(...o)),
      onFocus: t[9] || (t[9] = (...o) => e.onFocus && e.onFocus(...o)),
      onBlur: t[10] || (t[10] = (...o) => e.onBlur && e.onBlur(...o)),
      onClick: t[11] || (t[11] = (...o) => e.onClick && e.onClick(...o))
    }, null, 40, Ue)), [
      [g, e.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Ne)) : d("", !0),
    e.showInfoUi ? (n(), b(l, {
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
  ], 8, Ae);
}
const Fe = /* @__PURE__ */ m(Oe, [["render", De]]), Ce = {
  name: "LktFieldTextArea",
  components: { lktFieldState: L },
  mixins: [y, S],
  props: {
    value: { type: String, default: "" }
  }
}, He = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Pe = ["name", "id", "disabled", "readonly", "placeholder"], Be = ["name", "id", "disabled", "readonly"], Ge = ["for", "innerHTML"];
function We(e, t, a, h, i, u) {
  const l = k("lkt-field-state");
  return n(), s("div", {
    "data-lkt": "field-textarea",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((n(), s("textarea", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.Value = o),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, Pe)), [
      [g, e.Value]
    ]) : p((n(), s("textarea", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (o) => e.Value = o),
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, Be)), [
      [g, e.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Ge)) : d("", !0),
    e.showInfoUi ? (n(), b(l, {
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
  ], 8, He);
}
const Ye = /* @__PURE__ */ m(Ce, [["render", We]]), Ke = {
  name: "LktFieldEmail",
  components: { lktFieldState: L },
  mixins: [y, S],
  props: {
    value: { type: String, default: "" }
  }
}, Xe = ["data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], je = ["name", "id", "disabled", "readonly", "placeholder"], qe = ["name", "id", "disabled", "readonly"], ze = ["for", "innerHTML"];
function Je(e, t, a, h, i, u) {
  const l = k("lkt-field-state");
  return n(), s("div", {
    "data-lkt": "field-email",
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((n(), s("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.Value = o),
      type: "email",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, je)), [
      [g, e.Value]
    ]) : p((n(), s("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (o) => e.Value = o),
      type: "email",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, qe)), [
      [g, e.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, ze)) : d("", !0),
    e.showInfoUi ? (n(), b(l, {
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
  ], 8, Xe);
}
const Qe = /* @__PURE__ */ m(Ke, [["render", Je]]), Ze = {
  name: "LktFieldTel",
  components: { lktFieldState: L },
  mixins: [y, S],
  props: {
    value: { type: String, default: "" }
  }
}, ce = ["data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], xe = ["name", "id", "disabled", "readonly", "placeholder"], _e = ["name", "id", "disabled", "readonly"], et = ["for", "innerHTML"];
function tt(e, t, a, h, i, u) {
  const l = k("lkt-field-state");
  return n(), s("div", {
    "data-lkt": "field-tel",
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((n(), s("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.Value = o),
      type: "tel",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, xe)), [
      [g, e.Value]
    ]) : p((n(), s("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (o) => e.Value = o),
      type: "tel",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, _e)), [
      [g, e.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, et)) : d("", !0),
    e.showInfoUi ? (n(), b(l, {
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
  ], 8, ce);
}
const at = /* @__PURE__ */ m(Ze, [["render", tt]]), nt = {
  name: "LktFieldUnit",
  components: { lktFieldState: L },
  mixins: [y, S],
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
      return w(this.min) ? !1 : parseInt(this.min);
    },
    Max() {
      return w(this.max) ? !1 : parseInt(this.max);
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
}, ot = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled", "data-ranged"], lt = ["id", "name", "disabled", "readonly", "min", "max"], st = ["name", "id", "disabled", "readonly", "min", "max", "step", "placeholder"], dt = ["for", "innerHTML"];
function it(e, t, a, h, i, u) {
  const l = k("lkt-field-state");
  return n(), s("div", {
    "data-lkt": "field-unit",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !i.Value,
    "data-filled": !!i.Value,
    "data-ranged": a.addRange
  }, [
    a.addRange ? p((n(), s("input", {
      key: 0,
      type: "range",
      id: e.Identifier + "Points",
      name: e.name + "Points",
      "onUpdate:modelValue": t[0] || (t[0] = (o) => i.Value = o),
      disabled: e.disabled,
      readonly: e.readonly,
      min: u.Min,
      max: u.Max
    }, null, 8, lt)), [
      [g, i.Value]
    ]) : d("", !0),
    f(e.$slots, "prefix"),
    p(R("input", {
      "onUpdate:modelValue": t[1] || (t[1] = (o) => i.Value = o),
      type: "number",
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      min: u.Min,
      max: u.Max,
      step: a.step,
      placeholder: e.placeholder
    }, null, 8, st), [
      [g, i.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 1 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 2,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, dt)) : d("", !0),
    e.showInfoUi ? (n(), b(l, {
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
  ], 8, ot);
}
const rt = /* @__PURE__ */ m(nt, [["render", it]]), ut = {
  name: "LktFieldPassword",
  components: { lktFieldState: L },
  mixins: [y, S],
  props: {
    value: { type: String, default: "" }
  },
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
}, ht = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], ft = ["type", "name", "id", "disabled", "readonly", "placeholder"], pt = ["type", "name", "id", "disabled", "readonly"], wt = ["for", "innerHTML"];
function mt(e, t, a, h, i, u) {
  const l = k("lkt-field-state");
  return n(), s("div", {
    "data-lkt": "field-password",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    f(e.$slots, "prefix"),
    e.placeholder ? p((n(), s("input", {
      key: 0,
      "onUpdate:modelValue": t[0] || (t[0] = (o) => e.Value = o),
      type: u.inputType,
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly,
      placeholder: e.placeholder
    }, null, 8, ft)), [
      [V, e.Value]
    ]) : p((n(), s("input", {
      key: 1,
      "onUpdate:modelValue": t[1] || (t[1] = (o) => e.Value = o),
      type: u.inputType,
      name: e.name,
      id: e.Identifier,
      disabled: e.disabled,
      readonly: e.readonly
    }, null, 8, pt)), [
      [V, e.Value]
    ]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 2 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 3,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, wt)) : d("", !0),
    e.showInfoUi ? (n(), b(l, {
      key: 4,
      "show-add": e.showAdd,
      "show-password": e.showPassword && e.Value.length > 0,
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
  ], 8, ht);
}
const yt = /* @__PURE__ */ m(ut, [["render", mt]]), kt = () => r.NO_OPTIONS_MESSAGE, gt = (e = {}) => e.label, bt = (e = {}, t = 0) => e, A = (e, t) => e.map((a, h) => t(a, h)), q = {
  props: {
    options: { type: Array, default: () => [] },
    multiple: { type: Boolean, default: !1 },
    canTag: { type: Boolean, default: !1 },
    noOptionsMessage: { type: String, default: kt() },
    optionFormatter: { type: Function, default: gt },
    optionParser: { type: Function, default: bt }
  },
  data() {
    return {
      Options: A(this.options, this.optionParser)
    };
  },
  computed: {
    renderSelectedOption: {
      cache: !1,
      get() {
        let e = this.Options.filter((t) => t.selected === !0);
        return e && e.length > 0 && $(this.optionFormatter) ? this.optionFormatter(e[0]) : this.fetchString;
      }
    }
  },
  watch: {
    options: {
      handler() {
        this.Options = A(this.options, this.optionParser);
      },
      deep: !0
    }
  },
  methods: {
    getDropdownOptionSelector(e, t = -1, a = -1) {
      let h = { "is-highlight": t == a, "is-selected": e.selected === !0 };
      return e.selector && e.selector.split(" ").forEach((u) => {
        h[u] = !0;
      }), h;
    },
    renderOption(e) {
      return $(this.optionFormatter) ? this.optionFormatter(e) : e.label;
    }
  }
}, St = {
  name: "LktFieldRadio",
  mixins: [y, q],
  props: {
    value: { type: String, default: "" }
  }
}, Lt = ["data-state", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Mt = { "data-role": "option" }, Tt = ["name", "id", "disabled", "readonly", "placeholder", "value", "checked"], Et = ["for", "innerHTML"];
function Rt(e, t, a, h, i, u) {
  return n(), s("div", {
    "data-lkt": "field-radio",
    "data-state": e.state,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    f(e.$slots, "prefix"),
    (n(!0), s(c, null, x(e.Options, (l, o) => (n(), s("div", Mt, [
      p(R("input", {
        type: "radio",
        "onUpdate:modelValue": t[0] || (t[0] = (E) => e.Value = E),
        name: e.name,
        id: e.Identifier + o,
        disabled: e.disabled,
        readonly: e.readonly,
        placeholder: e.placeholder,
        value: l.id,
        checked: l.id === e.Value
      }, null, 8, Tt), [
        [_, e.Value]
      ]),
      R("label", {
        for: e.Identifier + o,
        innerHTML: l.text
      }, null, 8, Et)
    ]))), 256))
  ], 8, Lt);
}
const It = /* @__PURE__ */ m(St, [["render", Rt]]), Vt = {
  name: "LktFieldDate",
  components: { lktFieldState: L },
  mixins: [y, S],
  props: {
    value: { type: [String, Date], default: "" },
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
    autoRange: { type: [Number, String], default: null },
    multiCalendars: { type: [Boolean, Number, String], default: null },
    flow: { type: Array, default: () => [] },
    presetRanges: { type: Array, default: () => [] },
    minDate: { type: [Date, String], default: null },
    maxDate: { type: [Date, String], default: null }
  }
}, $t = ["data-state", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Ot = ["for", "innerHTML"];
function At(e, t, a, h, i, u) {
  const l = k("Datepicker"), o = k("lkt-field-state");
  return n(), s("div", {
    "data-lkt": "field-date",
    "data-state": e.state,
    "data-show-ui": e.showInfoUi,
    "data-error": e.invalid,
    "data-disabled": e.disabled,
    "data-changed": e.changed,
    "data-empty": !e.Value,
    "data-filled": !!e.Value
  }, [
    f(e.$slots, "prefix"),
    D(l, {
      modelValue: e.Value,
      "onUpdate:modelValue": t[0] || (t[0] = (E) => e.Value = E),
      uid: e.Identifier,
      disabled: e.disabled,
      name: e.name,
      range: a.range,
      "auto-range": a.autoRange,
      "multi-calendars": a.multiCalendars,
      "month-picker": a.monthPicker,
      "time-picker": a.timePicker,
      inline: a.inline,
      "multi-dates": a.multiDates,
      flow: a.flow,
      utc: a.utc,
      "week-picker": a.weekPicker,
      "year-picker": a.yearPicker,
      "preset-ranges": a.presetRanges,
      "disabled-dates": a.disabledDates,
      "min-date": a.minDate,
      "max-date": a.maxDate,
      "prevent-min-max-navigation": a.preventMinMaxNavigation
    }, null, 8, ["modelValue", "uid", "disabled", "name", "range", "auto-range", "multi-calendars", "month-picker", "time-picker", "inline", "multi-dates", "flow", "utc", "week-picker", "year-picker", "preset-ranges", "disabled-dates", "min-date", "max-date", "prevent-min-max-navigation"]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 0 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Ot)) : d("", !0),
    e.showInfoUi ? (n(), b(o, {
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
  ], 8, $t);
}
const vt = /* @__PURE__ */ m(Vt, [["render", At]]), Ut = {
  name: "LktFieldSelect",
  components: { lktFieldState: L, VueNextSelect: U },
  mixins: [y, S, q]
}, Nt = ["data-state", "data-multiple", "data-show-ui", "data-error", "data-disabled", "data-changed", "data-empty", "data-filled"], Dt = ["for", "innerHTML"];
function Ft(e, t, a, h, i, u) {
  const l = k("vue-next-select"), o = k("lkt-field-state");
  return n(), s("div", {
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
    D(l, {
      modelValue: e.Value,
      "onUpdate:modelValue": t[0] || (t[0] = (E) => e.Value = E),
      options: [{ label: "red", id: 1 }, { label: "green", value: 2 }, { label: "test", id: 3, children: [{ label: "yellow", id: 4 }] }]
    }, null, 8, ["modelValue"]),
    e.canRenderLabelSlot ? f(e.$slots, "label", { key: 0 }) : d("", !0),
    e.canRenderLabelHtml ? (n(), s("label", {
      key: 1,
      for: e.Identifier,
      innerHTML: e.label
    }, null, 8, Dt)) : d("", !0),
    e.showInfoUi ? (n(), b(o, {
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
  ], 8, Nt);
}
const Ct = /* @__PURE__ */ m(Ut, [["render", Ft]]);
function z(e) {
  if (e === null || e === !0 || e === !1)
    return NaN;
  var t = Number(e);
  return isNaN(t) ? t : t < 0 ? Math.ceil(t) : Math.floor(t);
}
function M(e, t) {
  if (t.length < e)
    throw new TypeError(e + " argument" + (e > 1 ? "s" : "") + " required, but only " + t.length + " present");
}
function I(e) {
  M(1, arguments);
  var t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new Date(e.getTime()) : typeof e == "number" || t === "[object Number]" ? new Date(e) : ((typeof e == "string" || t === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"), console.warn(new Error().stack)), new Date(NaN));
}
function Ht(e, t) {
  M(2, arguments);
  var a = I(e), h = z(t);
  if (isNaN(h))
    return new Date(NaN);
  if (!h)
    return a;
  var i = a.getDate(), u = new Date(a.getTime());
  u.setMonth(a.getMonth() + h + 1, 0);
  var l = u.getDate();
  return i >= l ? u : (a.setFullYear(u.getFullYear(), u.getMonth(), i), a);
}
function J(e) {
  M(1, arguments);
  var t = I(e), a = t.getMonth();
  return t.setFullYear(t.getFullYear(), a + 1, 0), t.setHours(23, 59, 59, 999), t;
}
function Q(e) {
  M(1, arguments);
  var t = I(e);
  return t.setDate(1), t.setHours(0, 0, 0, 0), t;
}
function Pt(e) {
  M(1, arguments);
  var t = I(e), a = t.getFullYear();
  return t.setFullYear(a + 1, 0, 0), t.setHours(23, 59, 59, 999), t;
}
function Bt(e) {
  M(1, arguments);
  var t = I(e), a = new Date(0);
  return a.setFullYear(t.getFullYear(), 0, 1), a.setHours(0, 0, 0, 0), a;
}
function v(e, t) {
  M(2, arguments);
  var a = z(t);
  return Ht(e, -a);
}
const Gt = () => ({ label: r.TODAY_RANGE_TEXT, range: [new Date(), new Date()] }), Wt = () => ({ label: r.THIS_MONTH_RANGE_TEXT, range: [Q(new Date()), J(new Date())] }), Yt = () => ({
  label: r.LAST_MONTH_RANGE_TEXT,
  range: [Q(v(new Date(), 1)), J(v(new Date(), 1))]
}), Kt = () => ({ label: r.THIS_YEAR_RANGE_TEXT, range: [Bt(new Date()), Pt(new Date())] }), zt = () => [
  Gt(),
  Wt(),
  Yt(),
  Kt()
], Jt = {
  install: (e, t = me) => {
    e.component("Datepicker", Z).component("vue-next-select", U).component("lkt-field-text", Fe).component("lkt-field-text-area", Ye).component("lkt-field-check", de).component("lkt-field-switch", pe).component("lkt-field-email", Qe).component("lkt-field-tel", at).component("lkt-field-unit", rt).component("lkt-field-password", yt).component("lkt-field-radio", It).component("lkt-field-date", vt).component("lkt-field-select", Ct), ee(t) && (w(t.noOptionsMessage) || (r.NO_OPTIONS_MESSAGE = t.noOptionsMessage), w(t.showPasswordMessage) || (r.SHOW_PASSWORD_MESSAGE = t.showPasswordMessage), w(t.isMandatoryMessage) || (r.IS_MANDATORY_MESSAGE = t.isMandatoryMessage), w(t.todayRangeText) || (r.TODAY_RANGE_TEXT = t.todayRangeText), w(t.thisMonthRangeText) || (r.THIS_MONTH_RANGE_TEXT = t.thisMonthRangeText), w(t.lastMonthRangeText) || (r.LAST_MONTH_RANGE_TEXT = t.lastMonthRangeText), w(t.thisYearRangeText) || (r.THIS_YEAR_RANGE_TEXT = t.thisYearRangeText), w(t.followLinkMessage) || (r.FOLLOW_LINK_MESSAGE = t.followLinkMessage), w(t.openMessage) || (r.OPEN_MESSAGE = t.openMessage), w(t.resetMessage) || (r.RESET_MESSAGE = t.resetMessage));
  }
};
export {
  Jt as default,
  zt as getDefaultPresetRanges
};
