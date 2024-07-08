import {
  n as z,
  a8 as nt,
  C as it,
  s as _t,
  G as ct,
  a0 as ce,
} from "./chunk-dd975def.js";
import {
  _ as st,
  a as pe,
  p as be,
  b as Ee,
  m as S,
  c as fe,
  d as ge,
  g as ot,
  O as pt,
  h as Et,
  i as te,
  j as Te,
  o as me,
  k as Pe,
  l as de,
  e as P,
  q as Le,
  n as Tt,
  u as mt,
  r as dt,
  t as le,
  v as ae,
  S as M,
  w as Rt,
  x as At,
  B as f,
  f as D,
  s as x,
  y as De,
  z as ut,
  A as Ot,
} from "./app-5c09a141.js";
var ye = {
    now: function () {
      return (ye.delegate || Date).now();
    },
    delegate: void 0,
  },
  xe = (function (e) {
    st(t, e);
    function t(r, a, n) {
      r === void 0 && (r = 1 / 0),
        a === void 0 && (a = 1 / 0),
        n === void 0 && (n = ye);
      var i = e.call(this) || this;
      return (
        (i._bufferSize = r),
        (i._windowTime = a),
        (i._timestampProvider = n),
        (i._buffer = []),
        (i._infiniteTimeWindow = !0),
        (i._infiniteTimeWindow = a === 1 / 0),
        (i._bufferSize = Math.max(1, r)),
        (i._windowTime = Math.max(1, a)),
        i
      );
    }
    return (
      (t.prototype.next = function (r) {
        var a = this,
          n = a.isStopped,
          i = a._buffer,
          _ = a._infiniteTimeWindow,
          c = a._timestampProvider,
          s = a._windowTime;
        n || (i.push(r), !_ && i.push(c.now() + s)),
          this._trimBuffer(),
          e.prototype.next.call(this, r);
      }),
      (t.prototype._subscribe = function (r) {
        this._throwIfClosed(), this._trimBuffer();
        for (
          var a = this._innerSubscribe(r),
            n = this,
            i = n._infiniteTimeWindow,
            _ = n._buffer,
            c = _.slice(),
            s = 0;
          s < c.length && !r.closed;
          s += i ? 1 : 2
        )
          r.next(c[s]);
        return this._checkFinalizedStatuses(r), a;
      }),
      (t.prototype._trimBuffer = function () {
        var r = this,
          a = r._bufferSize,
          n = r._timestampProvider,
          i = r._buffer,
          _ = r._infiniteTimeWindow,
          c = (_ ? 1 : 2) * a;
        if ((a < 1 / 0 && c < i.length && i.splice(0, i.length - c), !_)) {
          for (var s = n.now(), o = 0, T = 1; T < i.length && i[T] <= s; T += 2)
            o = T;
          o && i.splice(0, o + 1);
        }
      }),
      t
    );
  })(pe);
function lt() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var r = be(e);
  return Ee(e, r);
}
var It = Array.isArray;
function ht(e, t) {
  return It(t) ? e.apply(void 0, fe([], ge(t))) : e(t);
}
function St(e) {
  return S(function (t) {
    return ht(e, t);
  });
}
var Nt = Array.isArray,
  Ct = Object.getPrototypeOf,
  bt = Object.prototype,
  ft = Object.keys;
function gt(e) {
  if (e.length === 1) {
    var t = e[0];
    if (Nt(t)) return { args: t, keys: null };
    if (Pt(t)) {
      var r = ft(t);
      return {
        args: r.map(function (a) {
          return t[a];
        }),
        keys: r,
      };
    }
  }
  return { args: e, keys: null };
}
function Pt(e) {
  return e && typeof e == "object" && Ct(e) === bt;
}
function Lt(e, t) {
  return e.reduce(function (r, a, n) {
    return (r[a] = t[n]), r;
  }, {});
}
function Re() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  var r = be(e),
    a = ot(e),
    n = gt(e),
    i = n.args,
    _ = n.keys;
  if (i.length === 0) return Ee([], r);
  var c = new pt(
    Dt(
      i,
      r,
      _
        ? function (s) {
            return Lt(_, s);
          }
        : Te
    )
  );
  return a ? c.pipe(St(a)) : c;
}
function Dt(e, t, r) {
  return (
    r === void 0 && (r = Te),
    function (a) {
      Ie(
        t,
        function () {
          for (
            var n = e.length,
              i = new Array(n),
              _ = n,
              c = n,
              s = function (T) {
                Ie(
                  t,
                  function () {
                    var E = Ee(e[T], t),
                      u = !1;
                    E.subscribe(
                      te(
                        a,
                        function (I) {
                          (i[T] = I),
                            u || ((u = !0), c--),
                            c || a.next(r(i.slice()));
                        },
                        function () {
                          --_ || a.complete();
                        }
                      )
                    );
                  },
                  a
                );
              },
              o = 0;
            o < n;
            o++
          )
            s(o);
        },
        a
      );
    }
  );
}
function Ie(e, t, r) {
  e ? Et(r, e, t) : t();
}
function yt(e, t) {
  return (
    t === void 0 && (t = Te),
    (e = e ?? xt),
    me(function (r, a) {
      var n,
        i = !0;
      r.subscribe(
        te(a, function (_) {
          var c = t(_);
          (i || !e(n, c)) && ((i = !1), (n = c), a.next(_));
        })
      );
    })
  );
}
function xt(e, t) {
  return e === t;
}
function Ut(e) {
  e === void 0 && (e = {});
  var t = e.connector,
    r =
      t === void 0
        ? function () {
            return new pe();
          }
        : t,
    a = e.resetOnError,
    n = a === void 0 ? !0 : a,
    i = e.resetOnComplete,
    _ = i === void 0 ? !0 : i,
    c = e.resetOnRefCountZero,
    s = c === void 0 ? !0 : c;
  return function (o) {
    var T,
      E,
      u,
      I = 0,
      N = !1,
      A = !1,
      h = function () {
        E == null || E.unsubscribe(), (E = void 0);
      },
      g = function () {
        h(), (T = u = void 0), (N = A = !1);
      },
      l = function () {
        var C = T;
        g(), C == null || C.unsubscribe();
      };
    return me(function (C, b) {
      I++, !A && !N && h();
      var H = (u = u ?? r());
      b.add(function () {
        I--, I === 0 && !A && !N && (E = ne(l, s));
      }),
        H.subscribe(b),
        !T &&
          I > 0 &&
          ((T = new Pe({
            next: function (L) {
              return H.next(L);
            },
            error: function (L) {
              (A = !0), h(), (E = ne(g, n, L)), H.error(L);
            },
            complete: function () {
              (N = !0), h(), (E = ne(g, _)), H.complete();
            },
          })),
          de(C).subscribe(T));
    })(o);
  };
}
function ne(e, t) {
  for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
  if (t === !0) {
    e();
    return;
  }
  if (t !== !1) {
    var n = new Pe({
      next: function () {
        n.unsubscribe(), e();
      },
    });
    return de(t.apply(void 0, fe([], ge(r)))).subscribe(n);
  }
}
function U(e, t, r) {
  var a,
    n,
    i,
    _,
    c = !1;
  return (
    e && typeof e == "object"
      ? ((a = e.bufferSize),
        (_ = a === void 0 ? 1 / 0 : a),
        (n = e.windowTime),
        (t = n === void 0 ? 1 / 0 : n),
        (i = e.refCount),
        (c = i === void 0 ? !1 : i),
        (r = e.scheduler))
      : (_ = e ?? 1 / 0),
    Ut({
      connector: function () {
        return new xe(_, t, r);
      },
      resetOnError: !0,
      resetOnComplete: !1,
      resetOnRefCountZero: c,
    })
  );
}
function vt(e, t) {
  return me(function (r, a) {
    var n = null,
      i = 0,
      _ = !1,
      c = function () {
        return _ && !n && a.complete();
      };
    r.subscribe(
      te(
        a,
        function (s) {
          n == null || n.unsubscribe();
          var o = 0,
            T = i++;
          de(e(s, T)).subscribe(
            (n = te(
              a,
              function (E) {
                return a.next(t ? t(s, E, T, o++) : E);
              },
              function () {
                (n = null), c();
              }
            ))
          );
        },
        function () {
          (_ = !0), c();
        }
      )
    );
  });
}
const Mt = {
    PHEMEX_CONTRACT_TRADE: "/trade",
    PHEMEX_CONTRACT_INVERSE_TRADE: "/trade/BTCUSDT",
    PHEMEX_CONTRACT_TRADE_USD: "/trade/BTCUSD",
    PHEMEX_CONTRACT_TRADE_USDS: "/trade/BTCUSDT",
    PHEMEX_CONTRACT_TRADE_USDS_MARTIN:
      "/trade/BTCUSDT?t=s&type=contract_martin",
    MOC_PHEMEX_CONTRACT_TRADE_USDS: "/moc/trade/BTCMUSDT",
    PHEMEX_SPOT_MARGIN_TRADE: "/margin/trade",
    PHEMEX_SPOT_TRADE: "/spot/trade",
    PHEMEX_TRADE_ALL: "/trade/all",
    PHEMEX_KOL: "/kol/home",
    STRATEGY_DETAIL: "/",
    VIP_PORTAL: "/",
    PHEMEX_REFERENCES: "/",
    PHEMEX_BLOG: "/",
    PHEMEX_USER_GUIDES: "/",
    PHEMEX_GETTING_STARTED: "/",
    PHEMEX_HELP_CENTER: "/",
    PHEMEX_ACADEMY: "/",
    PHEMEX_REFERENCES_ANNOUNCEMENTS: "/",
    PHEMEX_30D_LV3_ANNOUNCEMENTS:
      "/",
    PHEMEX_P2P_MERCHANT_ANNOUNCEMENTS:
      "/",
    PHEMEX_REFERENCES_PRIVACY_POLICY: "/",
    PHEMEX_REFERENCES_ASSETS_SECURITY: "/",
    PHEMEX_REFERENCES_WITHDRAWAL_PROCESS:
      "/",
    PHEMEX_REFERENCES_GOOGLE_2FA:
      "/",
    PHEMEX_REFERENCES_TERMS_OF_USE: "/",
    PHEMEX_OTC_SERVICE: "/",
    PHEMEX_USE_OTC_SERVICE: "/",
    SUPPORT_DEPOSIT: "/",
    MADE_AN_INCORRRECT_DEPOSIT:
      "/",
    WHY_HASNT_MY_DEPOSIT_BEEN_CREDITED_YET_WEB:
      "/",
    CASHBACK_VOUCHERS_AND_CARDS:
      "/help-center/what-are-cashback-vouchers-and-cards",
    PHEMEX_BONUS_TERMS_AND_CONDITIONS:
      "/help-center/phemex-bonus-terms-and-conditions",
    SUPPORT_SPOT_TRADING: "/blogs/spot-trading-vs-futures-trading",
    SUPPORT_MARGIN_TRADING: "/blogs/bitcoin-margin-trading-on-phemex",
    SUPPORT_HODL: "/blogs/hodl-meaning-how-to-hodl",
    SUPPORT_XRP: "/blogs/what-is-ripple-xrp",
    SUPPORT_BUY_WITH_BITCOIN: "/blogs/what-can-you-buy-with-bitcoin",
    SUPPORT_DOGECOIN: "/",
    SUPPORT_BITCOIN: "/",
    SUPPORT_SHIBA: "/",
    SUPPORT_ADA: "/",
    SUPPORT_DOGECOIN_VS_SHIBA: "/",
    SUPPORT_BLOCKCHAIN_TECHNOLOGY: "/",
    SUPPORT_BCH: "/",
    SUPPORT_DOT: "/",
    SUPPORT_DENT: "/",
    SUPPORT_DECENTRALIZED_EXCHANGES_DEXS:
      "/",
    SUPPORT_MARKET_MAKER_AMM: "/",
    SUPPORT_ETHEREUM_LAYER: "/",
    SUPPORT_SOL_VS_ETH: "/",
    SUPPORT_SOL: "/",
    SUPPORT_AVAX: "/",
    SUPPORT_HEDERA_HASHGRAPH: "/",
    SUPPORT_LRC: "/",
    SUPPORT_MANA: "/",
    SUPPORT_MANA_VS_SAND: "/",
    SUPPORT_TRX: "/",
    SUPPORT_ZEC: "/",
    SUPPORT_MATIC: "/",
    SUPPORT_SANDBOX: "/",
    SUPPORT_USDC: "/",
    SUPPORT_XLM: "/",
    SUPPORT_BTC_VS_ETH_VS_LTC: "/",
    SUPPORT_LTC: "/",
    SUPPORT_ALGO: "/",
    SUPPORT_XTC: "/",
    SUPPORT_HOW_CRYPTO_RESEARCH: "/",
    SUPPORT_TRADE_CRYPTO: "/",
    SUPPORT_DO_YOUR_OWN_RESEARCH: "/",
    SUPPORT_TOKENS_NFTS: "/",
    SUPPORT_TECHNICAL_ANALYSIS: "/",
    SUPPORT_SMART_CONTRACTS: "/",
    SUPPORT_CRYPTO_AIRDROP: "/",
    SUPPORT_OTC:
      "/",
    PHEMEX_PRIVACY_POLICY: "/",
    PHEMEX_BONUS_TERMS: "/",
    PHEMEX_ALL_STAR_ANNOUNCEMENTS:
      "/",
    PHEMEX_WELCOME_BONUS_RESTRICTIONS:
      "/",
    LISTING_APPLICATION: "/",
    LISTING_APPLICATION_DE: "/",
    LISTING_SUGGESTIONS: "/",
    LISTING_SUGGESTIONS_DE: "/",
    PHEMEX_WHAT_IS_THE_LEARN_EARN_CRYPTO: "/",
    PHEMEX_HOW_DO_I_MAKE_WITHDRAWAL:
      "/",
    PHEMEX_HOW_DO_I_MAKE_INTERNAL_WITHDRAWAL:
      "/",
    PHEMEX_HOW_DO_I_USE_THE_CRYPTO_CONVERTER:
      "/",
    PHEMEX_WHATS_IS_THE_CRYPTO_CONVERTER:
      "/",
    PHEMEX_HOW_DO_I_BUY_OR_SELL_COIN:
      "/",
    COPY_TRADE_ENTRY: "/",
    COPY_TRADE_PROFIT_SHARING_RULES:
      "/",
    PHEMEX_HOW_DO_I_PLACE_A_PERPETUAL_CONTRACT_ORDER:
      "/",
    TAX_REPORTING_HELP_CENTER:
      "/",
    TAX_REPORTING_DOWNLOAD_ARTICAL:
      "/",
    CREDIT_CARD_PAYMENT: "/",
    CREDIT_CARD_PRIVACY: "/",
    PHEMEX_TESTNET: "/moc/trade/ETHMUSDT",
    PHEMEX_API_DOC: "#",
    ACCOUNT: "/",
    PHEMEX_FACEBOOK: "https://www.facebook.com",
    PHEMEX_FACEBOOK_KO: "https://www.facebook.com",
    PHEMEX_FACEBOOK_DE: "https://www.facebook.com/BitYarisTradingakademie",
    PHEMEX_FACEBOOK_ES:
      "https://www.facebook.com/BitYaris-en-Español-103459348698599",
    PHEMEX_FACEBOOK_VI: "https://www.facebook.com/phemexvietnam/",
    PHEMEX_TELEGRAM: "https://t.me/BitYaris_EN",
    PHEMEX_TELEGRAM_JA: "https://t.me/BitYaris_Japanese",
    PHEMEX_TELEGRAM_RU: "https://t.me/BitYaris_Russian",
    PHEMEX_TELEGRAM_KO: "https://t.me/BitYaris_Korean",
    PHEMEX_TELEGRAM_DE: "https://t.me/BitYaris_German",
    PHEMEX_TELEGRAM_TR: "https://t.me/BitYaris_Turkey",
    PHEMEX_TELEGRAM_ES: "https://t.me/BitYaris_Spanish",
    PHEMEX_TELEGRAM_PT: "https://t.me/phemexbrasil",
    PHEMEX_TELEGRAM_VI: "https://t.me/phemexvietnam",
    PHEMEX_TWITTER: "https://x.com/BitYaris_official",
    PHEMEX_TWITTER_RU: "https://x.com/BitYarisR",
    PHEMEX_TWITTER_KO: "https://x.com/phemex_Korean",
    PHEMEX_TWITTER_JA: "https://x.com/BitYarisJP",
    PHEMEX_TWITTER_PULSE: "https://x.com/Pulse_SocialFi",
    PHEMEX_TWITTER_ES: "https://x.com/BitYarisSpanish",
    PHEMEX_TWITTER_DE: "https://x.com/BitYaris_German",
    PHEMEX_TWITTER_FR: "https://x.com/FranceBitYaris",
    PHEMEX_TWITTER_TR: "https://x.com/BitYarisTurkish",
    PHEMEX_TWITTER_PT: "https://x.com/BitYarisBrasil",
    PHEMEX_TWITTER_VI:
      "https://x.com/BitYarisVietNam?t=e6HyLlAhw4hlkRZuvQMYjQ&s=09",
    PHEMEX_INSTAGRAM_TR: "https://www.instagram.com/phemexturkey/",
    PHEMEX_INSTAGRAM_EN: "https://www.instagram.com/phemexofficial/?hl=en",
    PHEMEX_INSTAGRAM_RU: "https://www.instagram.com/phemexrussia/",
    PHEMEX_INSTAGRAM_DE: "https://www.instagram.com/phemexdeutsch/",
    PHEMEX_INSTAGRAM_ES: "https://www.instagram.com/phemexinspanish/",
    PHEMEX_INSTAGRAM_VI: "https://www.instagram.com/phemexvietnam/",
    PHEMEX_YOUTUBE: "https://www.youtube.com/channel/UCtPeiP4cn2K19fH3y7o2tOg",
    PHEMEX_YOUTUBE_ES:
      "https://www.youtube.com/channel",
    PHEMEX_TIKTOK_ES: "https://www.tiktok.com",
    PHEMEX_MEDIUM: "https://medium.com/",
    PHEMEX_LINKEDIN: "https://www.linkedin.com",
    PHEMEX_KAKAO_KO: "/",
    PHEMEX_NAVER_KO: "/",
    PHEMEX_VK_RU: "/",
    PHEMEX_SNAP_CHAT_EN:
      "https://www.youtube.com/",
    PHEMEX_SNAP_CHAT_CN:
      "https://www.bilibili.com",
    PHEMEX_MICROBLOG: "https://www.weibo.com",
    PHEMEX_DISCORD: "https://discord.gg/",
    PHEMEX_TV: "https://www.tradingview.com",
    PHEMEX_BONUS_FORM:
      "https://docs.google.com/forms/d/e/1FAIpQLSeF9Nyb6FBy5LDOTDb0TElBbFeSBgFHWYr7h7d9T-NzAvK5tw/viewform",
    PHEMEX_BONUS_FORM_RU:
      "https://docs.google.com/forms/d/e/1FAIpQLScsroRESn5jDqX2Ibu7rG6x3zJJW4-Jxz-T_HRqEDXgXooppA/viewform",
    PHEMEX_BONUS_FORM_KO:
      "https://docs.google.com/forms/d/e/1FAIpQLSc2BmasFy3CqRDtuFJmDhZqNkApOZoDQcZcuwvFWApoCGjzyg/viewform",
    PHEMEX_BONUS_FORM_JA:
      "https://docs.google.com/forms/d/1AwQ1fivsnjWeEZlS_UO9mL4DjRlSsxn_UqyrlRyIdlg/viewform?ts=5e79c875&edit_requested=true",
    PHEMEX_BONUS_FORM_JOIN_KO:
      "https://docs.google.com/forms/d/e/1FAIpQLSe8drStyQo6VBhPNgUFOp2ReaDofGtqCk811C-rlZnuKfrX3g/viewform",
    PHEMEX_C2C_TAKER_FORM_EN:
      "https://docs.google.com/forms/d/1HnLA_vvjn0yO5yu4BCD-gHpHW4Ujo7yBP4ewH5WE9dE/viewform",
    PHEMEX_C2C_TAKER_FORM_RU:
      "https://docs.google.com/forms/d/e/1FAIpQLScEkMGmwx5KCgaJ-o9sUOKunnopkjYZ4nC3KLOwNP77HwtDfw/viewform",
    PHEMEX_C2C_TAKER_FORM:
      "https://docs.google.com/forms/d/e/1FAIpQLSdm0MdJYbDAIKPYcC-MJyqjCAgRnp8IBW1sYjnbvuCVdivcHQ/viewform",
    PHEMEX_CUSTOMER_SERVICE: "https://phemex.zendesk.com/hc/en-us/requests/new",
    COINMARKETCAP_LINK: "https://coinmarketcap.com/exchanges/",
    COINGECKO_LINK: "https://www.coingecko.com/en/exchanges/",
    COINCODEX_LINK: "https://coincodex.com/exchange/",
    GOOGLE_FORMS_EN:
      "https://docs.google.com/forms/d/e/1FAIpQLSd36WmWAnMKxHgqZ4YGdRArxEF8KqoGOhJLEHcoBGaMOk3hfQ/viewform",
    GOOGLE_FORMS_ES:
      "https://docs.google.com/forms/d/e/1FAIpQLScZI0BRhzU6tNSTX87B4JfyyVxesI6hJf945ygznKTO4OldXQ/viewform",
    GOOGLE_FORMS_JA:
      "https://docs.google.com/forms/d/e/1FAIpQLSeAoyMHVh4qKapOAd6v3fVETM3ps81vJdVN4ftd6tn9CTI_9Q/viewform ",
    GOOGLE_FORMS_RU:
      "https://docs.google.com/forms/d/e/1FAIpQLSdyFrmfs8zw8SujU0a69zhEBtL-a2SoteaHx1vacKRfYPJwrQ/viewform ",
    GOOGLE_FORMS_KO:
      "https://docs.google.com/forms/d/e/1FAIpQLSc2BmasFy3CqRDtuFJmDhZqNkApOZoDQcZcuwvFWApoCGjzyg/viewform",
    QQ_FORMS_CN: "https://www.wjx.top/vj/wqxTfsK.aspx",
    TRADING_COMPETITION_CRYPTOBRIEFING:
      "https://cryptobriefing.com/up-to-750000-in-btc-up-for-grabs-in-phemex-trading-competition/",
    TRADING_COMPETITION_BITCOINIST:
      "https://bitcoinist.com/phemexs-3rd-traders-arena-returns-with-bitcoin-prices-money-and-glory/",
    TRADING_COMPETITION_NEWSBTC:
      "https://www.newsbtc.com/news/company/phemex-to-launch-its-3rd-edition-of-the-traders-arena-how-to-win-up-to-750k/",
    TRADING_COMPETITION_COINGAPE:
      "https://coingape.com/phemex-traders-arena-version-3-heres-need-know/",
    TRADING_COMPETITION_BLOCKONOMI:
      "https://blockonomi.com/the-third-phemex-pt-arena-race-for-glory-set-to-deliver-epic-prizes/",
    TRADING_COMPETITION_CRYPTONEWS:
      "https://cryptonews.com/news/race-for-glory-on-phemex-trader-s-arena-iii-up-to-750k-on-th-10596.htm",
    TRADING_COMPETITION_AMBCRYPTO:
      "https://ambcrypto.com/race-for-glory-on-phemex-traders-arena-iii-up-to-750k-on-the-line/",
    TRADING_COMPETITION_CRYPTODAILY:
      "https://cryptodaily.co.uk/2021/06/race-for-glory-on-phemex-trader-s-arena",
    TRADING_COMPETITION_BTCMANAGER:
      "https://btcmanager.com/race-for-glory-phemex-traders-arena-iii-up-to-750k-on-the-line/",
    TRADING_COMPETITION_BEINCRYPTO:
      "https://beincrypto.com/race-for-glory-on-phemex-traders-arena-iii/",
    TRADING_COMPETITION_COINNESS: "https://kr.coinness.com/news/977230",
    TRADING_COMPETITION_UZMANCOIN:
      "https://uzmancoin.com/phemex-traders-arena-3-basliyor-takimlar-750-bin-dolar-icin-yarisacak/",
    TRADING_COMPETITION_ALTCOINLOG:
      "https://altcoinlog.com/pt-arena-3-race-for-glory/",
    TRADING_COMPETITION_COINREADERS: "https://www.coinreaders.com/11142",
    TRADING_COMPETITION_COINKOLIK:
      "https://www.coinkolik.com/pt-arena-3-750-000-icin-yarisin/",
    TRADING_COMPETITION_BITSMEDIA: "https://bits.media/",
    TRADING_COMPETITION_CRIPTONOTICIAS: "https://www.criptonoticias.com/",
    TRADING_COMPETITION_COINTELEGRAPH: "https://cointelegraph.com/",
    TRADING_COMPETITION_DIARIOBITCOIN: "https://www.diariobitcoin.com/",
    PHEMEX_ANNIVERSARY: "https://anniversary.phemex.com",
    PHEMEX_TR: "https://phemex.com.tr/",
    PHEMEX_TR_DOWNLOAD: "https://phemex.com.tr/indir",
    PHEMEX_JOBS: "https://www.linkedin.com/company/phemex/jobs/",
    ONFIDO_INFORMATION_SECURITY:
      "https://onfido.com/privacy/#Information%20Security",
    OVERVIEW_IDENTITY_VERIFICATION:
      "/help-center/what-is-kyc-on-phemex-identity-verification",
    FEEDBACK: "https://phemex.zendesk.com/hc/en-us/requests/new",
    EDUCATION: "https://www.youtube.com/embed/EubnhoQVVjo",
    LAUNCH_POOL_WEBSITE: "https://www.vlaunch.com/",
    LAUNCH_POOL_RULES: "/",
    LAUNCH_PAD_YOUTUBE: "/",
    ZERO_FEE_RULE:
      "/",
    ALL_STAR_VIDEO_ID: "S_ipJMLGILA",
    ALL_STAR_VIDEO_ID_JA: "4q2JdlXsS2U",
    PRICE_PAGE_DETAIL: "/markets/price/",
    KEVIN_FEKBV_FILL_OUT:
      "/",
    KEVIN_FEKBV_PLAY: "https://www.instagram.com/",
    USER_GUIDE_ON_VOUCHERS:
      "/",
    ALL_STAR_ANNOUNCEMENT:
      "/announcements/november-referral-friends-get-up-to-350-airdrop-per-referral",
    APP_STORE_LINK: "https://itunes.apple.com/us/",
    SWITCH_REGIONS_LINK: "https://support.apple.com/",
    Web3PhemexTokenXPT:
      "/",
    Web3Whitepaper: "/",
    WEB3WHITEPAPER_TOKEN_BENEFITS:
      "/",
    WEB3WHITEPAPER_PHEMEX_TOKEN:
      "/",
    MOCK_TRADE: "/moc/trade/ETHMUSDT",
    DEPOSIT_WITHDRAW_ZENDESK:
      "/",
    HOW_TO_USE_FUTURES_GRID:
      "/help-center/how-to-use-futures-grid-trading-bots-on-phemex-web",
    WITHDRAW_ADDRESS: "/",
    CHAINLINK: "/",
    TERMS_AND_CONDITIONS_LINK:
      "/",
    SOUL_PASS: "/",
    MAKET_MAKER:
      "/",
    UPDATE_PHEMEX_TOKEN:
      "/",
    HOW_CAN_SET_SPOT_GRID:
      "/help-center/how-can-i-set-my-spot-grid-trading-bot-on-phemex-web",
    HOW_CAN_SET_CONTRACT_MARTINGALE:
      "/help-center/how-to-use-futures-martingale-trading-bots-on-phemex-web",
    COPY_TRADE_AGREEMENT: "/",
    COPY_TRADE_SHARE_RULE: "/help-center/copy-trade-profit-sharing-rules",
    MAINTENANCE_MARGINS:
      "/help-center/what-are-initial-and-maintenance-margins",
    HOW_TO_ENABLE_WITHDRAWAL:
      "/help-center/how-to-enable-withdrawal-whitelist-new-address-lock(web)",
    FREQUENTLY_ASKED_QUESTIONS_WITHDRAWALS:
      "/help-center/FAQ-on-withdrawals",
    WEB3_APPLY_MODERATOR_RULE_MORE:
      "/announcements/pulse-next-generation-become-a-moderator-and-curate-your-community-for-rewards",
    HOW_TO_USE_PHEMEX:
      "/help-center/how-do-i-download-phemex-account-statements-reports",
    WEB3_PULSE_PT_REWARDS_SEE_DETAILS:
      "/announcements/introducing-the-pulse-new-era-mystery-boxes-enhanced-interface-and-more",
    WEB3_PULSE_BIND_DETAIL:
      "/announcements/pulse-as-an-individual-product",
    WEB3_PULSE_INDIVIDUAL_PRODUCT:
      "/announcements/pulse-as-an-individual-product",
  },
  wt = [
    "/support",
    "/blogs",
    "/user-guides",
    "/getting-started",
    "/help-center",
    "/academy",
    "/announcements",
    "/help-center/phemex-privacy-policy",
    "/help-center/assets-security",
    "/help-center/withdrawal-process",
    "/help-center/how-do-i-enable-google-two-factor-authentication",
    "/help-center/phemex-terms-of-use",
    "/help-center/1885",
    "/help-center/what-is-the-phemex-otc-service",
    "/help-center/how-do-i-make-a-deposit",
    "/blogs/spot-trading-vs-futures-trading",
    "/blogs/bitcoin-margin-trading-on-phemex",
    "/blogs/hodl-meaning-how-to-hodl",
    "/academy/how-to-trade-crypto",
    "/academy/dyor-do-your-own-research",
    "/announcements/listing-application",
    "/announcements/listing-suggestions",
    "/help-center/what-is-kyc-on-phemex-identity-verification",
    "/help-center/how-to-use-futures-grid-trading-bots-on-phemex-web",
    "/announcements/updates-on-phemex-token-launch-and-xpt-pre-mining-stage-4",
    "/help-center/how-can-i-set-my-spot-grid-trading-bot-on-phemex-web",
    "/academy/what-is-copy-trading",
    "/help-center/phemex-user-copy-trade-agreement",
    "/help-center/copy-trade-profit-sharing-rules",
    "/help-center/what-are-initial-and-maintenance-margins",
  ];
Gt(Mt);
function Gt(e) {
  P.isTestNet &&
    Object.keys(e).forEach((t) => {
      const r = e[t];
      wt.indexOf(r) > -1 &&
        (e[t] = window.location.origin.replace("testnet.", "") + r);
    });
}
const p = {
    ACCOUNT_API_MANAGEMENT: { pathname: "/account/api-management" },
    ACCOUNT_INVITE_FRIENDS: { pathname: "/account/referral/invite-friends" },
    ACCOUNT_INVITE_FRIENDS_ENTRY: {
      pathname: "/account/referral/invite-friends-entry",
    },
    ACCOUNT_INVITE_FRIENDS_MY_INVITATIONS: {
      pathname: "/account/referral/invite-friends/my-invitations",
    },
    SHARE_PREMIUM: { pathname: "/account/referral/share-premium" },
    ACCOUNT_OVERVIEW: { pathname: "/account/overview" },
    ACCOUNT_VERIFICATION: { pathname: "/account/verification" },
    ACCOUNT_PREMIUM_CENTER: { pathname: "/account/points/my-privileges" },
    ACCOUNT_SECURITY: { pathname: "/account/security" },
    ACCOUNT_PASSKEY_LIST: { pathname: "/account/security/passkeys" },
    ACCOUNT_SECURITY_DEVICE_MANAGE: { pathname: "/account/security/device" },
    ACCOUNT_SECURITY_AUTHORIZATION_MANAGE: {
      pathname: "/account/security/authorization",
    },
    ACCOUNT_SECURITY_DEVICE_HISTORY: {
      pathname: "/account/security/device/history",
    },
    ACCOUNT_SETTING: { pathname: "/account/setting" },
    ACCOUNT_SUB_ACCOUNTS: { pathname: "/account/sub-accounts" },
    ACCOUNT_FEEDBACK: { pathname: "/account/feedback" },
    ACCOUNT_TAX_REPORTING: { pathname: "/account/tax-reporting" },
    ASSETS_PAYMENT_METHODS: {
      pathname: "/buy-crypto/fiat/payment-methods",
      toNew: !0,
    },
    ASSETS_OVERVIEW: { pathname: "/assets/overview" },
    ASSETS_FIAT_ACCOUNT: { pathname: "/assets/fiat-account" },
    ASSETS_DEPOSIT: { pathname: "/assets/deposit" },
    ASSETS_WITHDRAWAL: { pathname: "/assets/withdrawal" },
    ASSETS_TRANSFER: { pathname: "/assets/cross-platform-transfer" },
    ASSETS_DETAILS: { pathname: "/assets/details" },
    ASSETS_FUNDS: { pathname: "/assets/funds" },
    ASSETS_SPOT_ORDER: { pathname: "/assets/spot-order-history" },
    ASSETS_SPOT_HISTORY: { pathname: "/assets/spot-history" },
    ASSETS_SPOT_PNL_DETAILS: { pathname: "/assets/spot-pnl-history" },
    ASSETS_SPOT_TRADE: { pathname: "/assets/spot-trade-history" },
    ASSETS_HISTORY: { pathname: "/assets/contract-history" },
    ASSETS_PNL_DETAILS: { pathname: "/assets/contract-pnl-details" },
    ASSETS_ORDER_HISTORY: { pathname: "/assets/contract-order-history" },
    ASSETS_TRADE_HISTORY: { pathname: "/assets/contract-trade-history" },
    ASSETS_WITHDRAWAL_ADDRESS: { pathname: "/assets/withdrawal-address" },
    ASSETS_WITHDRAWAL_CONFIRM: { pathname: "/assets/withdrawal-confirm" },
    ASSETS_CONVERT_FAQ: { pathname: "/assets/convert-faq" },
    ASSETS_MARGIN_HISTORY: { pathname: "/assets/margin-history" },
    ASSETS_MARGIN_TRADE_ORDER_HISTORY: {
      pathname: "/assets/margin-trade-order-history",
    },
    ASSETS_MARGIN_TRADE_TRADE_HISTORY: {
      pathname: "/assets/margin-trade-trade-history",
    },
    ASSETS_MARGIN_TRADE_BORROW_HISTORY: {
      pathname: "/assets/margin-trade-borrow-history",
    },
    ASSETS_MARGIN_TRADE_REPAY_HISTORY: {
      pathname: "/assets/margin-trade-repay-history",
    },
    ASSETS_MARGIN_TRADE_INTEREST_HISTORY: {
      pathname: "/assets/margin-trade-interest-history",
    },
    ASSETS_DEPOSIT_WITHDRAW_HISTORY: {
      pathname: "/assets/deposit-withdraw-history",
    },
    ASSETS_TRANSFER_CONVERT_HISTORY: {
      pathname: "/assets/transfer-convert-history",
    },
    ASSETS_CONTRACT_ACCOUNT: { pathname: "/assets/contract-account" },
    ASSETS_SPOT_ACCOUNT: { pathname: "/assets/spot-account" },
    ASSETS_INVESTMENT_ACCOUNT: { pathname: "/assets/investment-account" },
    ASSETS_MARGIN_ACCOUNT: { pathname: "/assets/margin-account" },
    BUY_CRYPTO_HISTORY: { pathname: "/assets/buy-crypto-history" },
    ASSETS_TRADING_ACCOUNT: { pathname: "/assets/trading-account" },
    ASSETS_FUND_ACCOUNT: { pathname: "/assets/fund-account" },
    ASSETS_BORROWING_DETAILS: { pathname: "/assets/borrowing-details" },
    ASSETS_ORDER_HISTORY_GROUP: { pathname: "/assets/order-history" },
    ASSETS_BUY_SELL_CRYPTO_HISTORY: {
      pathname: "/assets/fiat-buy-sell-crypto-history",
    },
    ASSETS_FIAT_DEPOSIT: { pathname: "/assets/fiat-deposit" },
    ASSETS_LENDING_ACCOUNT: { pathname: "/assets/lending-account" },
    ASSETS_LENDING_HISTORY: { pathname: "/assets/lending-history" },
    ASSETS_FIAT_WITHDRAW: { pathname: "/assets/fiat-withdraw" },
    CONTRACT_FUNDING_HISTORY: {
      pathname: "/contract/funding-history",
      toNew: !0,
    },
    CONTRACT_INDEX_PRICE: { pathname: "/contract/index-price", toNew: !0 },
    CONTRACT_INSURANCE_FUND: {
      pathname: "/contract/insurance-fund",
      toNew: !0,
    },
    CONTRACT_INTRODUCTION: { pathname: "/contract/introduction", toNew: !0 },
    CONTRACT_MARK_PRICE: { pathname: "/contract/mark-price", toNew: !0 },
    CONTRACT_DATA_INSIGHT: { pathname: "/contract/data-insight", toNew: !0 },
    CONTRACT_PERPETUAL_CONTRACT: {
      pathname: "/contract/perpetual-contract",
      toNew: !0,
    },
    CONTRACT_LEVERAGE_MARGIN: { pathname: "/contract/leverage-margin" },
    ABOUT: { pathname: "/about" },
    ABOUT_BRAND_STYLE_GUIDE: { pathname: "/about/brand-style-guide" },
    ABOUT_AMBASSADOR_KEVIN_DE_BRUYNE: {
      pathname: "/about/ambassador/kevin-de-bruyne",
    },
    ABOUT_AMBASSADOR_KEVIN_DE_BRUYNE_AUDIT: {
      pathname: "/about/ambassador/kevin-de-bruyne-audit",
    },
    ALL_STAR_PROGRAM: { pathname: "/affiliate-program" },
    ALL_STAR_PROGRAM_BAK: { pathname: "/all-star-program" },
    BONUS: { pathname: "/rewards-hub" },
    BONUS_CENTER: { pathname: "/bonus-center" },
    DOWNLOAD: { pathname: "/download" },
    DOWNLOAD_IOS_PRO: { pathname: "/download/ios-pro" },
    FEES_CONDITIONS: { pathname: "/fees-conditions" },
    HOME: { pathname: "/" },
    LOGIN: { pathname: "/login" },
    LOGOUT: { pathname: "/logout" },
    MARKETS: { pathname: "/markets" },
    EARN_HOME: { pathname: "/earn-crypto" },
    EARN: { pathname: "/earn-crypto/savings-account" },
    LAUNCHPOOL: { pathname: "/earn-crypto/launchpool" },
    EARN_ACTIVE: { pathname: "/earn-crypto/limited-time-offer" },
    EARN_MY_EARNINGS: { pathname: "/earn-crypto/my-earnings" },
    PREDICT_TO_EARN: { pathname: "/crypto-prediction-market" },
    PREDICT_TO_EARN_HISTORY: { pathname: "/crypto-prediction-market/history" },
    PREDICT_TO_EARN_DETAIL: { pathname: "/crypto-prediction-market/detail" },
    PHEMEX_PLATFORM: { pathname: "/phemex-platform" },
    PREMIUM_ARCHIVED: { pathname: "/premium/archived" },
    PROMOTIONS: { pathname: "/promotions" },
    REGISTER: { pathname: "/register" },
    REGISTER_VT1: { pathname: "/register-vt1" },
    RESET_PASSWORD: { pathname: "/reset-password" },
    SECURITY: { pathname: "/security" },
    WELCOME: { pathname: "/welcome" },
    BUY_CRYPTO: { pathname: "/buy-crypto", toNew: !0 },
    BUY_CRYPTO_PLACE_ORDER: { pathname: "/buy-crypto/place-order", toNew: !0 },
    BUY_CRYPTO_PLACE_ORDER_HISTORY: {
      pathname: "/buy-crypto/place-order/history",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_ETHEREUM: {
      pathname: "/buy-crypto/buy-ethereum",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_XTZ: { pathname: "/buy-crypto/buy-tezos-xtz", toNew: !0 },
    BUY_CRYPTO_BUY_ALGO: {
      pathname: "/buy-crypto/buy-algorand-algo",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_AVAX: {
      pathname: "/buy-crypto/buy-avax-avalanche",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_LTC: { pathname: "/buy-crypto/buy-litecoin-ltc", toNew: !0 },
    BUY_CRYPTO_BUY_XLM: {
      pathname: "/buy-crypto/buy-xlm-stellar-lumens",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_USDC: { pathname: "/buy-crypto/buy-usdc", toNew: !0 },
    BUY_CRYPTO_BUY_SAND: {
      pathname: "/buy-crypto/buy-sandbox-crypto-sand",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_ZEC: { pathname: "/buy-crypto/buy-zcash-zec", toNew: !0 },
    BUY_CRYPTO_BUY_MATIC: {
      pathname: "/buy-crypto/buy-matic-polygon",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_TRX: { pathname: "/buy-crypto/buy-tron-trx", toNew: !0 },
    BUY_CRYPTO_BUY_MANA: {
      pathname: "/buy-crypto/buy-decentraland-mana",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_LRC: { pathname: "/buy-crypto/buy-loopring-lrc", toNew: !0 },
    BUY_CRYPTO_BUY_SOL: { pathname: "/buy-crypto/buy-solana-sol", toNew: !0 },
    BUY_CRYPTO_BUY_DENT: { pathname: "/buy-crypto/buy-dent", toNew: !0 },
    BUY_CRYPTO_BUY_ADA: { pathname: "/buy-crypto/buy-cardano-ada", toNew: !0 },
    BUY_CRYPTO_BUY_DOT: { pathname: "/buy-crypto/buy-polkadot-dot", toNew: !0 },
    BUY_CRYPTO_BUY_BCH: {
      pathname: "/buy-crypto/buy-bitcoin-cash-bch",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_BTC: { pathname: "/buy-crypto/buy-bitcoin", toNew: !0 },
    BUY_CRYPTO_BUY_XRP: { pathname: "/buy-crypto/buy-xrp-ripple", toNew: !0 },
    BUY_CRYPTO_BUY_SHIB: {
      pathname: "/buy-crypto/buy-shiba-inu-coin-shib",
      toNew: !0,
    },
    BUY_CRYPTO_BUY_DOGE: { pathname: "/buy-crypto/buy-dogecoin", toNew: !0 },
    BUY_CRYPTO_HOW_TO_BUY: {
      pathname: "/buy-crypto/how-to-buy-bitcoin",
      toNew: !0,
    },
    CONTRACT_WARS: { pathname: "/crypto-trading-competition" },
    SITEMAP: { pathname: "/sitemap" },
    REGISTER_LANDING_PAGE: { pathname: "/lp-crypto-platform" },
    TESLA_GIVEAWAY: { pathname: "/lp-tesla-giveaway" },
    INSTITUTIONAL_CLIENT: { pathname: "/institutional-clients" },
    BIG_CLIENT_DASHBOARD: { pathname: "/institutional-account-dashboard" },
    TRADING_DEPOSIT_BONUS: { pathname: "/lp-trading-deposit-bonus" },
    DEPOSIT_DAZZLE_MDX: { pathname: "/lp-trading-deposit-bonus/mdx" },
    REGISTER_VERIFIED: { pathname: "/register-verified" },
    OTC_LEGEND_TRADING: { pathname: "/otc/legend-trading", toNew: !0 },
    OTC_LEGEND_TRADING_HISTORY: {
      pathname: "/otc/legend-trading/history",
      toNew: !0,
    },
    LP_CRYPTO_PLATFORM: { pathname: "/lp-crypto-platform-v2" },
    LEARN_CRYPTO: { pathname: "/learn-crypto" },
    LEARN_CRYPTO_CRYPTO_FIAT_WHAT_IS_FIAT: {
      pathname: "/learn-crypto/crypto-fiat/what-is-fiat",
    },
    LEARN_CRYPTO_CRYPTO_FIAT_WHAT_IS_CRYPTO: {
      pathname: "/learn-crypto/crypto-fiat/what-is-crypto",
    },
    LEARN_CRYPTO_CRYPTO_FIAT_HOW_DOES_CRYPTO_WORK: {
      pathname: "/learn-crypto/crypto-fiat/how-does-crypto-work",
    },
    LEARN_CRYPTO_CRYPTO_FIAT: { pathname: "/learn-crypto/crypto-fiat" },
    LEARN_CRYPTO_CRYPTO_FIAT_QUIZ: {
      pathname: "/learn-crypto/crypto-fiat/quiz",
    },
    LEARN_CRYPTO_HOW_TO_BUY_CRYPTO: {
      pathname: "/learn-crypto/how-to-buy-crypto",
    },
    LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_CREDIT_CARD: {
      pathname: "/learn-crypto/how-to-buy-crypto/credit-card",
    },
    LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_OTC_ACTIVATE: {
      pathname: "/learn-crypto/how-to-buy-crypto/otc-activate",
    },
    LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_OTC_DEPOSIT: {
      pathname: "/learn-crypto/how-to-buy-crypto/otc-deposit",
    },
    LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_OTC_PURCHASE: {
      pathname: "/learn-crypto/how-to-buy-crypto/otc-purchase",
    },
    LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_TRANSFER: {
      pathname: "/learn-crypto/how-to-buy-crypto/transfer",
    },
    LEARN_CRYPTO_HOW_TO_BUY_CRYPTO_QUIZ: {
      pathname: "/learn-crypto/how-to-buy-crypto/quiz",
    },
    LEARN_CRYPTO_SPOT_TRADING: { pathname: "/learn-crypto/spot-trading" },
    LEARN_CRYPTO_SPOT_TRADING_INTRODUCTION: {
      pathname: "/learn-crypto/spot-trading/introduction",
    },
    LEARN_CRYPTO_SPOT_TRADING_SPOT_LIMIT_ORDERS: {
      pathname: "/learn-crypto/spot-trading/spot-limit-orders",
    },
    LEARN_CRYPTO_SPOT_TRADING_SPOT_MARKET_ORDERS: {
      pathname: "/learn-crypto/spot-trading/spot-market-orders",
    },
    LEARN_CRYPTO_SPOT_TRADING_SPOT_CONDITIONAL_ORDERS: {
      pathname: "/learn-crypto/spot-trading/spot-conditional-orders",
    },
    LEARN_CRYPTO_SPOT_TRADING_TOKENBOT: {
      pathname: "/learn-crypto/spot-trading/tokenbot",
    },
    LEARN_CRYPTO_SPOT_TRADING_QUIZ: {
      pathname: "/learn-crypto/spot-trading/quiz",
    },
    LEARN_CRYPTO_CRYPTO_DERIVATIVES: {
      pathname: "/learn-crypto/crypto-derivatives",
    },
    LEARN_CRYPTO_CRYPTO_DERIVATIVES_DERIVATIVES: {
      pathname: "/learn-crypto/crypto-derivatives/derivatives",
    },
    LEARN_CRYPTO_CRYPTO_DERIVATIVES_PERPETUAL_CONTRACTS: {
      pathname: "/learn-crypto/crypto-derivatives/perpetual-contracts",
    },
    LEARN_CRYPTO_CRYPTO_DERIVATIVES_LEVERAGE_LIQUIDATION: {
      pathname: "/learn-crypto/crypto-derivatives/leverage-liquidation",
    },
    LEARN_CRYPTO_CRYPTO_DERIVATIVES_MARGIN: {
      pathname: "/learn-crypto/crypto-derivatives/margin",
    },
    LEARN_CRYPTO_CRYPTO_DERIVATIVES_QUIZ: {
      pathname: "/learn-crypto/crypto-derivatives/quiz",
    },
    LEARN_CRYPTO_PERPETUAL_CONTRACTS: {
      pathname: "/learn-crypto/perpetual-contracts",
    },
    LEARN_CRYPTO_PERPETUAL_CONTRACTS_HOW_TO_OPEN_POSITION: {
      pathname: "/learn-crypto/perpetual-contracts/how-to-open-position",
    },
    LEARN_CRYPTO_PERPETUAL_CONTRACTS_HOW_TO_SET_OR_ADJUST_LEVERAGE: {
      pathname:
        "/learn-crypto/perpetual-contracts/how-to-set-or-adjust-leverage",
    },
    LEARN_CRYPTO_PERPETUAL_CONTRACTS_HOW_TO_ADJUST_MARGIN: {
      pathname: "/learn-crypto/perpetual-contracts/how-to-adjust-margin",
    },
    LEARN_CRYPTO_PERPETUAL_CONTRACTS_QUIZ: {
      pathname: "/learn-crypto/perpetual-contracts/quiz",
    },
    LEARN_CRYPTO_HOW_TO_EARN_CRYPTO: {
      pathname: "/learn-crypto/how-to-earn-crypto",
    },
    LEARN_CRYPTO_HOW_TO_EARN_CRYPTO_PHEMEX_SAVINGS: {
      pathname: "/learn-crypto/how-to-earn-crypto/phemex-savings",
    },
    LEARN_CRYPTO_HOW_TO_EARN_CRYPTO_PHEMEX_LAUNCHPOOL: {
      pathname: "/learn-crypto/how-to-earn-crypto/phemex-launchpool",
    },
    LEARN_CRYPTO_HOW_TO_EARN_CRYPTO_PHEMEX_LAUNCHPAD: {
      pathname: "/learn-crypto/how-to-earn-crypto/phemex-launchpad",
    },
    LEARN_CRYPTO_HOW_TO_EARN_CRYPTO_QUIZ: {
      pathname: "/learn-crypto/how-to-earn-crypto/quiz",
    },
    RESET_SECURITY: { pathname: "/reset-security" },
    MO_TRADE_COMPETITION: { pathname: "/crypto-trading-competition/mo-diseax" },
    CRYPTO_CONVERTER: { pathname: "/crypto-converter" },
    BITSHIN_TRADE_COMPETITION: {
      pathname: "/crypto-trading-competition/bitshin",
    },
    CRYPTO_TRADING_COMPETITION_1_ON_1: {
      pathname: "/1-on-1-crypto-trading-competition",
    },
    KYC_MYSTERY_BOX: { pathname: "/activity/mystery-box" },
    STUDENT_FOUNDATION: { pathname: "/student-foundation" },
    STUDENT_FOUNDATION_PAPERS: { pathname: "/student-foundation/papers" },
    NOT_FOUND: { pathname: "/404" },
    CRYPTO_TRADING_REBATES: { pathname: "/activity/crypto-trading-rebates" },
    LAUNCHPAD: { pathname: "/crypto-launchpad" },
    LAUNCHPAD_DETAIL: { pathname: "/crypto-launchpad/detail" },
    LAUNCHPAD_HISTORY: { pathname: "/crypto-launchpad/history" },
    CRYPTO_COIN_FLIP: { pathname: "/activity/crypto-coin-flip" },
    P2P_ORDER_DETAILS: {
      pathname: "/buy-crypto/fiat/place-order/details",
      toNew: !0,
    },
    P2P_HOME: { pathname: "/buy-crypto/fiat", toNew: !0 },
    P2P_HOME_LOGIN: { pathname: "/buy-crypto/fiat/place-order", toNew: !0 },
    P2P_CREATE_AN_AD: { pathname: "/buy-crypto/fiat/create-an-ad", toNew: !0 },
    P2P_MY_ADS: { pathname: "/buy-crypto/fiat/my-ads", toNew: !0 },
    P2P_ORDERS: { pathname: "/buy-crypto/fiat/orders", toNew: !0 },
    P2P_ADS_DETAILS: { pathname: "/buy-crypto/fiat/my-ads/details", toNew: !0 },
    P2P_ADS_EDIT: { pathname: "/buy-crypto/fiat/my-ads/edit", toNew: !0 },
    P2P_FAQ: { pathname: "/buy-crypto/fiat/faq", toNew: !0 },
    P2P_USER_CENTER: { pathname: "/buy-crypto/fiat/user-center", toNew: !0 },
    P2P_USER_REVIEW: {
      pathname: "/buy-crypto/fiat/user-center/review",
      toNew: !0,
    },
    P2P_MERCHANT_APPLY: {
      pathname: "/buy-crypto/fiat/p2p-merchant-apply",
      toNew: !0,
    },
    PREDICT_ETH_PRICE: { pathname: "/activity/predict-eth-price" },
    KOL_HOME: { pathname: "/kol/home" },
    GENERALIZE: { pathname: "/kol/generalize" },
    MATERIAL: { pathname: "/kol/material" },
    COMMISSION: { pathname: "/kol/commission" },
    PREMIUM: { pathname: "/kol/premium" },
    ACCOUNTS: { pathname: "/kol/accounts" },
    AGENT_DEAL: { pathname: "/kol/agent-deal" },
    SUB_AGENT: { pathname: "/kol/sub-agent" },
    PERSONAL: { pathname: "/kol/personal" },
    WITHDRAW: { pathname: "/kol/withdraw" },
    EQUITY_DETAILS: { pathname: "/kol/equity-details" },
    P2P_HOME_MARKET: { pathname: "/buy-crypto/fiat/p2p-markets", toNew: !0 },
    P2P_MAKER_HOME: { pathname: "/buy-crypto/fiat/advertiser", toNew: !0 },
    P2P_ADVERTISER_REVIEW: {
      pathname: "/buy-crypto/fiat/advertiser/leave-a-review",
      toNew: !0,
    },
    P2P_APPEAL_AN_ORDER: {
      pathname: "/buy-crypto/fiat/place-order/appeal-an-order",
      toNew: !0,
    },
    COPY_TRADING_FAQ: { pathname: "/copy-trading/home/faq" },
    COPY_TRADING_LIST: { pathname: "/copy-trading/list" },
    COPY_TRADING_TRADER_SETTING: {
      pathname: "/copy-trading/trader-view/setting",
    },
    COPY_TRADING_DRAW: { pathname: "/copy-trading/draw" },
    BECOME_A_TRADER: { pathname: "/copy-trading/become-a-trader" },
    COPY_SETTINGS: { pathname: "/copy-trading/follower-view/copy-setting" },
    GMX_TRADER_LIST: { pathname: "/copy-trading/gmx-trader-list", toNew: !0 },
    TRADER_HOME_FOLLOWER_VIEW: { pathname: "/copy-trading/follower-view/home" },
    COPIER_DETAIL: { pathname: "/copy-trading/follower-view/details" },
    TRADER_HOME: { pathname: "/copy-trading/trader-view/home" },
    COPY_LEADERBOARD: { pathname: "/copy-trading/leaderboard" },
    KOL_LANDING: { pathname: "/activity/all-star" },
    KOL_LANDING_PAGE: { pathname: "/activity/kol" },
    KOL_LANDING_ACTIVITY: { pathname: "/activity/all-star/kol" },
    MARGIN_TRADING_COMPETITION: {
      pathname: "/crypto-trading-competition/that-martini-guy",
    },
    PT_ARENA_5: { pathname: "/crypto-trading-competition/pt-arena-5" },
    VIP_PROGRAM: { pathname: "/vip" },
    OFFICIAL_VERIFICATION: { pathname: "/official-verification" },
    SWAP_ETH: { pathname: "/activity/swap-eth-to-ethw-eths" },
    SWAP_ETH_HISTORY: { pathname: "/activity/swap-eth-to-ethw-eths/history" },
    EXCLUSIVE_COUPONS: { pathname: "/activity/exclusive-coupons" },
    INVESTMENT: { pathname: "/investment" },
    WORLD_CUP: { pathname: "/crypto-trading-competition/football-frenzy" },
    CHECK_ACCOUNT: { pathname: "/proof-of-reserves" },
    ACTIVITY_REGISTER_REWARDS: { pathname: "/activity/register-rewards" },
    EVENT_SUBSCRIPTION: { pathname: "/event/subscription" },
    VIP_PORTAL: { pathname: "/vip-portal" },
    YEAR_IN_REVIEW_2022: { pathname: "/year-in-review-2022" },
    SPOT_MARGIN_DATA: { pathname: "/spot/margin-data" },
    WEB3_SOUL_PASS: { pathname: "/web3/soulpass", toNew: !0 },
    WEB3_EQUITY: { pathname: "/web3/pt", toNew: !0 },
    WEB3_EQUITY_BENEFITS: { pathname: "/web3/pt-benefits" },
    WEB3_STAKE: { pathname: "/web3/stake/dashboard" },
    WEB3_STAKE_BUYBACK_HISTORY: { pathname: "/web3/stake/buyback-history" },
    WEB3_STAKE_STAKE_HISTORY: {
      pathname: "/web3/stake/stake-history?tab=stake",
    },
    WEB3_STAKE_YIELD_HISTORY: {
      pathname: "/web3/stake/stake-history/?tab=yield",
    },
    WEB3_STAKE_WITHDRAW_HISTORY: {
      pathname: "/web3/stake/stake-history/?tab=withdraw",
    },
    WEB3_STAKE_VESTING_HISTORY: {
      pathname: "/web3/stake/stake-history/?tab=vesting",
    },
    WEB3_DUTCH_AUCTION: { pathname: "/web3/pt-bidding" },
    WEB3_AIRDROPS_CRYPTO_MAS: { pathname: "/web3/airdrops/cryptomas" },
    WEB3_LENDING_MARKET: { pathname: "/web3/lending" },
    WEB3_LENDING_DETAILS: { pathname: "/web3/lending/details-info" },
    WEB3_LENDING_DASHBOARD: { pathname: "/web3/lending/dashboard" },
    FIAT_BUY_CRYPTO_PLACE_ORDER: { pathname: "/fiat/buy-crypto/place-order" },
    FIAT_BUY_CRYPTO_BUY_PAYMENT_METHOD: {
      pathname: "/fiat/buy-crypto/buy/payment-method",
    },
    FIAT_BUY_CRYPTO_BUY_CONFIRM: { pathname: "/fiat/buy-crypto/buy/confirm" },
    FIAT_BUY_CRYPTO_BUY_RESULT: { pathname: "/fiat/buy-crypto/buy/result" },
    FIAT_BUY_CRYPTO_BUY_CARD: { pathname: "/fiat/buy-crypto/buy/card" },
    FIAT_BUY_CRYPTO_SELL_PAYMENT_METHOD: {
      pathname: "/fiat/buy-crypto/sell/payment-method",
    },
    FIAT_BUY_CRYPTO_SELL_CARD: { pathname: "/fiat/buy-crypto/sell/card" },
    FIAT_BUY_CRYPTO_SELL_CONFIRM: { pathname: "/fiat/buy-crypto/sell/confirm" },
    FIAT_BUY_CRYPTO_SELL_RESULT: { pathname: "/fiat/buy-crypto/sell/result" },
    FIAT_BUY_CRYPTO_BUY_TRANSAK_RESULT: {
      pathname: "/fiat/buy-crypto/buy/transak/result",
      toNew: !0,
    },
    FIAT_BUY_CRYPTO_BUY_TRANSAK: {
      pathname: "/fiat/buy-crypto/buy/transak",
      toNew: !0,
    },
    FIAT_DEPOSIT: { pathname: "/fiat/deposit" },
    FIAT_WITHDRAW: { pathname: "/fiat/withdraw" },
    FIAT_WITHDRAW_ORDER_CONFIRM: { pathname: "/fiat/withdraw/order-confirm" },
    FIAT_B2C_URL_PAYMENT: { pathname: "/fiat/b2c-url-payment" },
    FIAT_B2C_PAYMENT_RESULT: { pathname: "/fiat/b2c-payment-result" },
    LEGEND_TRADING_BIND_CARD: {
      pathname: "/legend-trading/bind-card",
      toNew: !0,
    },
    FIAT_DEPOSIT_TRANSFER_INFO: { pathname: "/fiat/deposit/transfer-info" },
    LEGEND_TRADING_SYNC_KYC: {
      pathname: "/legend-trading/sync-kyc",
      toNew: !0,
    },
    LEGEND_TRADING_WRITE_QUESTIONNAIRE: {
      pathname: "/legend-trading/write-questionnaire",
      toNew: !0,
    },
    FIAT_WITHDRAW_ORDER_RESULT: { pathname: "/fiat/withdraw/order-result" },
    LEGEND_TRADING_MANAGE_CARD: {
      pathname: "/legend-trading/manage-card",
      toNew: !0,
    },
    XPT_MINING: { pathname: "/web3/premining", toNew: !0 },
    PT_MINING: { pathname: "/web3/trading-rewards", toNew: !0 },
    PHEMEXIA: { pathname: "/web3/phemexia", toNew: !0 },
    XPT_AIRDROP: { pathname: "/web3/xpt-infinity" },
    WEB3_ASSETS_OVERVIEW: { pathname: "/web3/assets/overview", toNew: !0 },
    BUY_CRYPTO_CARD_PLACE_ORDER: {
      pathname: "/buy-crypto/card/place-order",
      toNew: !0,
    },
    BUY_CRYPTO_CARD_PAY: { pathname: "/buy-crypto/card/pay", toNew: !0 },
    BUY_CRYPTO_CARD_PAYMENT: {
      pathname: "/buy-crypto/card/payment",
      toNew: !0,
    },
    BUY_CRYPTO_CARD_ORDER_SUCCESS: {
      pathname: "/buy-crypto/card/order-success",
      toNew: !0,
    },
    BUY_CRYPTO_CARD_ORDER_FAIL: {
      pathname: "/buy-crypto/card/order-fail",
      toNew: !0,
    },
    BUY_CRYPTO_CARD_HISTORY: {
      pathname: "/buy-crypto/card/history",
      toNew: !0,
    },
    BUY_CRYPTO_CARD_ORDER_CONFIRM: {
      pathname: "/buy-crypto/card/order-confirm",
      toNew: !0,
    },
    BUY_CRYPTO_CARD_DETAILS: {
      pathname: "/buy-crypto/card/card-details",
      toNew: !0,
    },
    BUY_CRYPTO_CARD_SELL_CONFIRM: {
      pathname: "/buy-crypto/card/sell-confirm",
      toNew: !0,
    },
    BUY_CRYPTO_CARD_SELL_RESULT: {
      pathname: "/buy-crypto/card/sell-result",
      toNew: !0,
    },
    CEX_AIRDROP: {
      pathname: "/web3/xpt-infinity/cryptic-bounty-airdrop",
      toNew: !0,
    },
    DEX_AIRDROP: {
      pathname: "/web3/xpt-infinity/dexclusive-airdrop",
      toNew: !0,
    },
    FTX_AIRDROP: {
      pathname: "/web3/xpt-infinity/resurge-rewards-airdrop",
      toNew: !0,
    },
    STRATEGY_SQUARE: { pathname: "/trading-bots" },
    STRATEGY_DETAIL: { pathname: "/bot-detail" },
    FUTURE_GRIDS_TRADING_CONTEST: {
      pathname: "/trading-bots/futuregrids-contest",
      toNew: !0,
    },
    LEGEND_TRADING_BILLING_ADDRESS: {
      pathname: "/legend-trading/billing-address",
      toNew: !0,
    },
    LEGEND_TRADING_CARD_BINDING: {
      pathname: "/legend-trading/card-binding",
      toNew: !0,
    },
    LEGEND_TRADING_PAYMENT: { pathname: "/legend-trading/payment", toNew: !0 },
    OAUTH_AUTHORIZE: { pathname: "/oauth" },
    OAUTH_AUTHORIZE_LOGIN: { pathname: "/oauth-login" },
    WEB3_SPACEID: { pathname: "/web3/airdrops/spaceid" },
    WEB3_ETH: { pathname: "/web3/airdrops/100eth" },
    BROKER_INDEX: { pathname: "/broker" },
    BROKER_DASHBOARD: { pathname: "/broker/dashboard" },
    BROKER_TRADERS: { pathname: "/broker/traders" },
    BROKER_COMMISSIONS_CONTRACT: { pathname: "/broker/contract-commissions" },
    BROKER_COMMISSIONS_SPOT: { pathname: "/broker/spot-commissions" },
    BROKER_ASSETS: { pathname: "/broker/assets" },
    BROKER_USER_INFO: { pathname: "/broker/user-info" },
    WEB3_1000BTC: { pathname: "/web3/airdrops/1000btc" },
    APIS: { pathname: "/home-api" },
    PT_PREHEAT_AIRDROP: { pathname: "/web3/pt-to-the-moon" },
    WEB3_PULSE_HOME: { pathname: "/" },
    WEB3_SOCIAL_TRADE_EXPLORE_GROUPS: {
      pathname: "/",
    },
    WEB3_SOCIAL_TRADE_MY_GROUPS: { pathname: "/" },
    WEB3_SOCIAL_TRADE_GROUP_DETAIL: { pathname: "/" },
    WEB3_SOCIAL_TRADE_CAST_DETAIL: { pathname: "/" },
    WEB3_SOCIAL_TRADE_PT_REWARDS: { pathname: "/web3/phemex-pulse/pt-rewards" },
    WEB3_SOCIAL_TRADE_INVITE: {
      pathname: "/phemex-pulse/invite-friends-group",
    },
    WEB3_SOCIAL_TRADE_MY_GROUP_PASS: {
      pathname: "/web3/phemex-pulse/my-group-pass",
    },
    WEB3_SOCIAL_TRADE_INSCRIPTION_MARKETPLACE: {
      pathname: "/web3/phemex-pulse/inscription-marketplace",
    },
    WEB3_SOCIAL_TRADE_PULSE_PROFILE: { pathname: "/web3/phemex-pulse/profile" },
    WEB3_SOCIAL_TRADE_PULSE_PROFILE_EDIT: {
      pathname: "/web3/phemex-pulse/edit-profile",
    },
    WEB3_SOCIAL_TRADE_PULSE_DROP: { pathname: "/web3/phemex-pulse/pulsedrop" },
    WEB3_SOCIAL_TRADE_MOBILE_PULSE_DROP: {
      pathname: "/web3/phemex-pulse/m-pulsedrop",
    },
    WEB3_SOCIAL_TRADE_MOBILE_INSCRIPTION_MARKETPLACE: {
      pathname: "/web3/phemex-pulse/m-inscription-marketplace",
    },
    REDIRECT: { pathname: "/redirect" },
    SSR_KOL_LANDING: { pathname: "/promo/kol/[name]" },
  },
  Or = [p.XPT_MINING.pathname, p.PT_PREHEAT_AIRDROP.pathname],
  F = [];
function Yt(e, t) {
  return { subscribe: Ue(e, t).subscribe };
}
function Ue(e, t = z) {
  let r;
  const a = new Set();
  function n(c) {
    if (_t(e, c) && ((e = c), r)) {
      const s = !F.length;
      for (const o of a) o[1](), F.push(o, e);
      if (s) {
        for (let o = 0; o < F.length; o += 2) F[o][0](F[o + 1]);
        F.length = 0;
      }
    }
  }
  function i(c) {
    n(c(e));
  }
  function _(c, s = z) {
    const o = [c, s];
    return (
      a.add(o),
      a.size === 1 && (r = t(n) || z),
      c(e),
      () => {
        a.delete(o), a.size === 0 && (r(), (r = null));
      }
    );
  }
  return { set: n, update: i, subscribe: _ };
}
function Bt(e, t, r) {
  const a = !Array.isArray(e),
    n = a ? [e] : e,
    i = t.length < 2;
  return Yt(r, (_) => {
    let c = !1;
    const s = [];
    let o = 0,
      T = z;
    const E = () => {
        if (o) return;
        T();
        const I = t(a ? s[0] : s, _);
        i ? _(I) : (T = ct(I) ? I : z);
      },
      u = n.map((I, N) =>
        nt(
          I,
          (A) => {
            (s[N] = A), (o &= ~(1 << N)), c && E();
          },
          () => {
            o |= 1 << N;
          }
        )
      );
    return (
      (c = !0),
      E(),
      function () {
        it(u), T();
      }
    );
  });
}
const lr = [
    { text: "English", value: "en" },
    { text: "Pусский", value: "ru" },
    { text: "日本語", value: "ja" },
    { text: "한국어", value: "ko" },
    { text: "Español", value: "es" },
    { text: "Deutsch", value: "de" },
    { text: "Français", value: "fr" },
    { text: "Türkçe", value: "tr" },
    { text: "Português", value: "pt" },
    { text: "tiếng Việt", value: "vi" },
  ],
  Ht = ["cn", "ko"],
  ve = "lang";
function Ft() {
  return localStorage.getItem(ve) || "en";
}
function kt(e) {
  localStorage.setItem(ve, e);
}
const Me = "device";
function we() {
  return JSON.parse(localStorage.getItem(Me)) || {};
}
function Wt(e) {
  return we()[e];
}
function Vt(e, t) {
  localStorage.setItem(Me, JSON.stringify({ ...we(), [e]: t }));
}
function v() {
  return Math.floor((1 + Math.random()) * 65536)
    .toString(16)
    .substring(1);
}
const Kt = {
    build() {
      return `${v()}${v()}-${v()}-${v()}-${v()}-${v()}${v()}${v()}`;
    },
  },
  he = "p_b_i_d";
function Ge() {
  {
    if (P.isApp) return window.navigator.userAgent.split(" ")[3];
    const e = localStorage.getItem(he);
    if (e && e.length === 36) return e;
    const t = Kt.build();
    return localStorage.setItem(he, t), t;
  }
}
const Ye = "USER_USED_UID";
function Ae() {
  return P.isServer
    ? []
    : (localStorage.getItem(Ye) || "")
        .split(",")
        .filter(Boolean)
        .map((e) => parseInt(e));
}
function Ir(e) {
  if (!P.isServer && e !== 0) {
    const t = Ae();
    localStorage.setItem(Ye, [e, ...t.filter((r) => r !== e)].join(","));
  }
}
function hr() {
  return Ae().length > 0;
}
const Xt = "https://et.phemex.com/web.gif?",
  Be = P.isServer ? !1 : localStorage.getItem("et_show_log") === "Y",
  se = { bid: Ge(), t0: Date.now() };
function qt(e, t) {
  He(e, t);
}
function Qt(e) {
  He("page_view", e);
}
function jt(e) {
  Object.assign(se, e),
    Be && (console.log("%c [ET] profile:", "color:#0f0;"), console.table(se));
}
function He(e, t) {
  const r = Ae(),
    a = {
      ...se,
      uid: r[0] || "",
      time: Date.now(),
      event: e,
      url: window.location.href,
      context: t,
    };
  Be && (console.log(`%c [ET] event: ${e}`, "color:#0f0;"), console.table(a)),
    (new Image().src = Xt + Le.stringify({ d: zt(a) }));
}
function zt(e) {
  try {
    const t = window.btoa(JSON.stringify(e));
    return [
      [/\+/g, "-"],
      [/\//g, "_"],
      [/=+$/, ""],
    ].reduce((r, a) => r.replace(a[0], a[1]), t);
  } catch {
    return "";
  }
}
P.isServer || (window.dataLayer = window.dataLayer || []);
const Jt = !P.isServer && localStorage.getItem("ga4_show_log") === "Y";
function $t(e, t) {
  Fe({ event: e, ...t });
}
function Zt(e) {
  Fe({ event: "page_view", ...e });
}
function Fe(e) {
  P.isServer ||
    (Jt &&
      (console.log(`%c [GA4] event: ${e.event}`, "color:#0f0;"),
      console.table(e)),
    window.dataLayer.push(e));
}
const ue = ea();
function ea() {
  return !P.isServer && !P.isBot
    ? {
        setProfile(e) {
          jt(e);
        },
        track(e, t) {
          qt(e, t), $t(e, t);
        },
        pageView(e) {
          Qt(e), Zt(e);
        },
      }
    : { setProfile(e) {}, track(e, t) {}, pageView(e) {} };
}
function Sr(e) {
  Wt(e) || (ue.track(e, { support: !!window[e] }), Vt(e, !0));
}
const W = Ue(ta());
function ta() {
  return Tt ? (mt(), dt) : ra();
}
W.subscribe((e) => {
  if (!e) return;
  if (le(e) !== e) return W.set(le(e));
  ue.setProfile({ language: e });
  const t = ae.parsePathname(window.location.pathname);
  e === t.lang || P.isApp || (kt(e), aa(t.pathname, e));
});
const Nr = Bt(
  [W],
  ([e], t) => {
    let r = (a) => a;
    return (
      e !== "en" &&
        (r = (a, n = "") =>
          n === "CMS" && ["cn", "vi"].indexOf(e) > -1
            ? Se(a)
            : "/" + e + Se(a)),
      t(r)
    );
  },
  (e) => e
);
function Se(e) {
  return e === "/" ? "" : e;
}
function aa(e, t) {
  const r = ae.parsePathname(window.location.pathname).pathname,
    n = (t === "en" ? "" : "/" + t) + (r === "/" ? "" : r),
    i = location.origin + n + location.search + location.hash;
  location.assign(i);
}
function ra() {
  {
    const e = ae.parsePathname(window.location.pathname);
    return Ht.includes(e.lang) ? "en" : e.lang;
  }
}
var na = 20,
  ia = 1,
  w = 1e6,
  Ne = 1e6,
  _a = -7,
  ca = 21,
  sa = !1,
  $ = "[big.js] ",
  G = $ + "Invalid ",
  re = G + "decimal places",
  oa = G + "rounding mode",
  ke = $ + "Division by zero",
  O = {},
  y = void 0,
  pa = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function We() {
  function e(t) {
    var r = this;
    if (!(r instanceof e)) return t === y ? We() : new e(t);
    if (t instanceof e) (r.s = t.s), (r.e = t.e), (r.c = t.c.slice());
    else {
      if (typeof t != "string") {
        if (e.strict === !0 && typeof t != "bigint")
          throw TypeError(G + "value");
        t = t === 0 && 1 / t < 0 ? "-0" : String(t);
      }
      Ea(r, t);
    }
    r.constructor = e;
  }
  return (
    (e.prototype = O),
    (e.DP = na),
    (e.RM = ia),
    (e.NE = _a),
    (e.PE = ca),
    (e.strict = sa),
    (e.roundDown = 0),
    (e.roundHalfUp = 1),
    (e.roundHalfEven = 2),
    (e.roundUp = 3),
    e
  );
}
function Ea(e, t) {
  var r, a, n;
  if (!pa.test(t)) throw Error(G + "number");
  for (
    e.s = t.charAt(0) == "-" ? ((t = t.slice(1)), -1) : 1,
      (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
      (a = t.search(/e/i)) > 0
        ? (r < 0 && (r = a), (r += +t.slice(a + 1)), (t = t.substring(0, a)))
        : r < 0 && (r = t.length),
      n = t.length,
      a = 0;
    a < n && t.charAt(a) == "0";

  )
    ++a;
  if (a == n) e.c = [(e.e = 0)];
  else {
    for (; n > 0 && t.charAt(--n) == "0"; );
    for (e.e = r - a - 1, e.c = [], r = 0; a <= n; ) e.c[r++] = +t.charAt(a++);
  }
  return e;
}
function Y(e, t, r, a) {
  var n = e.c;
  if (
    (r === y && (r = e.constructor.RM),
    r !== 0 && r !== 1 && r !== 2 && r !== 3)
  )
    throw Error(oa);
  if (t < 1)
    (a =
      (r === 3 && (a || !!n[0])) ||
      (t === 0 &&
        ((r === 1 && n[0] >= 5) ||
          (r === 2 && (n[0] > 5 || (n[0] === 5 && (a || n[1] !== y))))))),
      (n.length = 1),
      a ? ((e.e = e.e - t + 1), (n[0] = 1)) : (n[0] = e.e = 0);
  else if (t < n.length) {
    if (
      ((a =
        (r === 1 && n[t] >= 5) ||
        (r === 2 &&
          (n[t] > 5 ||
            (n[t] === 5 && (a || n[t + 1] !== y || n[t - 1] & 1)))) ||
        (r === 3 && (a || !!n[0]))),
      (n.length = t),
      a)
    ) {
      for (; ++n[--t] > 9; )
        if (((n[t] = 0), t === 0)) {
          ++e.e, n.unshift(1);
          break;
        }
    }
    for (t = n.length; !n[--t]; ) n.pop();
  }
  return e;
}
function V(e, t, r) {
  var a = e.e,
    n = e.c.join(""),
    i = n.length;
  if (t)
    n =
      n.charAt(0) + (i > 1 ? "." + n.slice(1) : "") + (a < 0 ? "e" : "e+") + a;
  else if (a < 0) {
    for (; ++a; ) n = "0" + n;
    n = "0." + n;
  } else if (a > 0)
    if (++a > i) for (a -= i; a--; ) n += "0";
    else a < i && (n = n.slice(0, a) + "." + n.slice(a));
  else i > 1 && (n = n.charAt(0) + "." + n.slice(1));
  return e.s < 0 && r ? "-" + n : n;
}
O.abs = function () {
  var e = new this.constructor(this);
  return (e.s = 1), e;
};
O.cmp = function (e) {
  var t,
    r = this,
    a = r.c,
    n = (e = new r.constructor(e)).c,
    i = r.s,
    _ = e.s,
    c = r.e,
    s = e.e;
  if (!a[0] || !n[0]) return a[0] ? i : n[0] ? -_ : 0;
  if (i != _) return i;
  if (((t = i < 0), c != s)) return (c > s) ^ t ? 1 : -1;
  for (_ = (c = a.length) < (s = n.length) ? c : s, i = -1; ++i < _; )
    if (a[i] != n[i]) return (a[i] > n[i]) ^ t ? 1 : -1;
  return c == s ? 0 : (c > s) ^ t ? 1 : -1;
};
O.div = function (e) {
  var t = this,
    r = t.constructor,
    a = t.c,
    n = (e = new r(e)).c,
    i = t.s == e.s ? 1 : -1,
    _ = r.DP;
  if (_ !== ~~_ || _ < 0 || _ > w) throw Error(re);
  if (!n[0]) throw Error(ke);
  if (!a[0]) return (e.s = i), (e.c = [(e.e = 0)]), e;
  var c,
    s,
    o,
    T,
    E,
    u = n.slice(),
    I = (c = n.length),
    N = a.length,
    A = a.slice(0, c),
    h = A.length,
    g = e,
    l = (g.c = []),
    C = 0,
    b = _ + (g.e = t.e - e.e) + 1;
  for (g.s = i, i = b < 0 ? 0 : b, u.unshift(0); h++ < c; ) A.push(0);
  do {
    for (o = 0; o < 10; o++) {
      if (c != (h = A.length)) T = c > h ? 1 : -1;
      else
        for (E = -1, T = 0; ++E < c; )
          if (n[E] != A[E]) {
            T = n[E] > A[E] ? 1 : -1;
            break;
          }
      if (T < 0) {
        for (s = h == c ? n : u; h; ) {
          if (A[--h] < s[h]) {
            for (E = h; E && !A[--E]; ) A[E] = 9;
            --A[E], (A[h] += 10);
          }
          A[h] -= s[h];
        }
        for (; !A[0]; ) A.shift();
      } else break;
    }
    (l[C++] = T ? o : ++o), A[0] && T ? (A[h] = a[I] || 0) : (A = [a[I]]);
  } while ((I++ < N || A[0] !== y) && i--);
  return (
    !l[0] && C != 1 && (l.shift(), g.e--, b--),
    C > b && Y(g, b, r.RM, A[0] !== y),
    g
  );
};
O.eq = function (e) {
  return this.cmp(e) === 0;
};
O.gt = function (e) {
  return this.cmp(e) > 0;
};
O.gte = function (e) {
  return this.cmp(e) > -1;
};
O.lt = function (e) {
  return this.cmp(e) < 0;
};
O.lte = function (e) {
  return this.cmp(e) < 1;
};
O.minus = O.sub = function (e) {
  var t,
    r,
    a,
    n,
    i = this,
    _ = i.constructor,
    c = i.s,
    s = (e = new _(e)).s;
  if (c != s) return (e.s = -s), i.plus(e);
  var o = i.c.slice(),
    T = i.e,
    E = e.c,
    u = e.e;
  if (!o[0] || !E[0])
    return E[0] ? (e.s = -s) : o[0] ? (e = new _(i)) : (e.s = 1), e;
  if ((c = T - u)) {
    for (
      (n = c < 0) ? ((c = -c), (a = o)) : ((u = T), (a = E)),
        a.reverse(),
        s = c;
      s--;

    )
      a.push(0);
    a.reverse();
  } else
    for (r = ((n = o.length < E.length) ? o : E).length, c = s = 0; s < r; s++)
      if (o[s] != E[s]) {
        n = o[s] < E[s];
        break;
      }
  if (
    (n && ((a = o), (o = E), (E = a), (e.s = -e.s)),
    (s = (r = E.length) - (t = o.length)) > 0)
  )
    for (; s--; ) o[t++] = 0;
  for (s = t; r > c; ) {
    if (o[--r] < E[r]) {
      for (t = r; t && !o[--t]; ) o[t] = 9;
      --o[t], (o[r] += 10);
    }
    o[r] -= E[r];
  }
  for (; o[--s] === 0; ) o.pop();
  for (; o[0] === 0; ) o.shift(), --u;
  return o[0] || ((e.s = 1), (o = [(u = 0)])), (e.c = o), (e.e = u), e;
};
O.mod = function (e) {
  var t,
    r = this,
    a = r.constructor,
    n = r.s,
    i = (e = new a(e)).s;
  if (!e.c[0]) throw Error(ke);
  return (
    (r.s = e.s = 1),
    (t = e.cmp(r) == 1),
    (r.s = n),
    (e.s = i),
    t
      ? new a(r)
      : ((n = a.DP),
        (i = a.RM),
        (a.DP = a.RM = 0),
        (r = r.div(e)),
        (a.DP = n),
        (a.RM = i),
        this.minus(r.times(e)))
  );
};
O.neg = function () {
  var e = new this.constructor(this);
  return (e.s = -e.s), e;
};
O.plus = O.add = function (e) {
  var t,
    r,
    a,
    n = this,
    i = n.constructor;
  if (((e = new i(e)), n.s != e.s)) return (e.s = -e.s), n.minus(e);
  var _ = n.e,
    c = n.c,
    s = e.e,
    o = e.c;
  if (!c[0] || !o[0]) return o[0] || (c[0] ? (e = new i(n)) : (e.s = n.s)), e;
  if (((c = c.slice()), (t = _ - s))) {
    for (t > 0 ? ((s = _), (a = o)) : ((t = -t), (a = c)), a.reverse(); t--; )
      a.push(0);
    a.reverse();
  }
  for (
    c.length - o.length < 0 && ((a = o), (o = c), (c = a)), t = o.length, r = 0;
    t;
    c[t] %= 10
  )
    r = ((c[--t] = c[t] + o[t] + r) / 10) | 0;
  for (r && (c.unshift(r), ++s), t = c.length; c[--t] === 0; ) c.pop();
  return (e.c = c), (e.e = s), e;
};
O.pow = function (e) {
  var t = this,
    r = new t.constructor("1"),
    a = r,
    n = e < 0;
  if (e !== ~~e || e < -Ne || e > Ne) throw Error(G + "exponent");
  for (n && (e = -e); e & 1 && (a = a.times(t)), (e >>= 1), !!e; )
    t = t.times(t);
  return n ? r.div(a) : a;
};
O.prec = function (e, t) {
  if (e !== ~~e || e < 1 || e > w) throw Error(G + "precision");
  return Y(new this.constructor(this), e, t);
};
O.round = function (e, t) {
  if (e === y) e = 0;
  else if (e !== ~~e || e < -w || e > w) throw Error(re);
  return Y(new this.constructor(this), e + this.e + 1, t);
};
O.sqrt = function () {
  var e,
    t,
    r,
    a = this,
    n = a.constructor,
    i = a.s,
    _ = a.e,
    c = new n("0.5");
  if (!a.c[0]) return new n(a);
  if (i < 0) throw Error($ + "No square root");
  (i = Math.sqrt(a + "")),
    i === 0 || i === 1 / 0
      ? ((t = a.c.join("")),
        (t.length + _) & 1 || (t += "0"),
        (i = Math.sqrt(t)),
        (_ = (((_ + 1) / 2) | 0) - (_ < 0 || _ & 1)),
        (e = new n(
          (i == 1 / 0
            ? "5e"
            : (i = i.toExponential()).slice(0, i.indexOf("e") + 1)) + _
        )))
      : (e = new n(i + "")),
    (_ = e.e + (n.DP += 4));
  do (r = e), (e = c.times(r.plus(a.div(r))));
  while (r.c.slice(0, _).join("") !== e.c.slice(0, _).join(""));
  return Y(e, (n.DP -= 4) + e.e + 1, n.RM);
};
O.times = O.mul = function (e) {
  var t,
    r = this,
    a = r.constructor,
    n = r.c,
    i = (e = new a(e)).c,
    _ = n.length,
    c = i.length,
    s = r.e,
    o = e.e;
  if (((e.s = r.s == e.s ? 1 : -1), !n[0] || !i[0]))
    return (e.c = [(e.e = 0)]), e;
  for (
    e.e = s + o,
      _ < c && ((t = n), (n = i), (i = t), (o = _), (_ = c), (c = o)),
      t = new Array((o = _ + c));
    o--;

  )
    t[o] = 0;
  for (s = c; s--; ) {
    for (c = 0, o = _ + s; o > s; )
      (c = t[o] + i[s] * n[o - s - 1] + c),
        (t[o--] = c % 10),
        (c = (c / 10) | 0);
    t[o] = c;
  }
  for (c ? ++e.e : t.shift(), s = t.length; !t[--s]; ) t.pop();
  return (e.c = t), e;
};
O.toExponential = function (e, t) {
  var r = this,
    a = r.c[0];
  if (e !== y) {
    if (e !== ~~e || e < 0 || e > w) throw Error(re);
    for (r = Y(new r.constructor(r), ++e, t); r.c.length < e; ) r.c.push(0);
  }
  return V(r, !0, !!a);
};
O.toFixed = function (e, t) {
  var r = this,
    a = r.c[0];
  if (e !== y) {
    if (e !== ~~e || e < 0 || e > w) throw Error(re);
    for (
      r = Y(new r.constructor(r), e + r.e + 1, t), e = e + r.e + 1;
      r.c.length < e;

    )
      r.c.push(0);
  }
  return V(r, !1, !!a);
};
O[Symbol.for("nodejs.util.inspect.custom")] =
  O.toJSON =
  O.toString =
    function () {
      var e = this,
        t = e.constructor;
      return V(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
    };
O.toNumber = function () {
  var e = Number(V(this, !0, !0));
  if (this.constructor.strict === !0 && !this.eq(e.toString()))
    throw Error($ + "Imprecise conversion");
  return e;
};
O.toPrecision = function (e, t) {
  var r = this,
    a = r.constructor,
    n = r.c[0];
  if (e !== y) {
    if (e !== ~~e || e < 1 || e > w) throw Error(G + "precision");
    for (r = Y(new a(r), e, t); r.c.length < e; ) r.c.push(0);
  }
  return V(r, e <= r.e || r.e <= a.NE || r.e >= a.PE, !!n);
};
O.valueOf = function () {
  var e = this,
    t = e.constructor;
  if (t.strict === !0) throw Error($ + "valueOf disallowed");
  return V(e, e.e <= t.NE || e.e >= t.PE, !0);
};
var R = We();
const Ta = {
  floor(e, t, r = 0) {
    if (isNaN(e) || e === void 0) return "";
    const a = e < 0 ? -1 : 1;
    return R(e).abs().times(R(10).pow(-r)).round(t, 0).times(a).toFixed(t);
  },
  unscale(e, t = 0) {
    if (isNaN(e) || e === void 0) return "";
    const r = e < 0 ? -1 : 1;
    return R(e).abs().times(R(10).pow(-t)).times(r).toString();
  },
  ceil(e, t, r = 0) {
    if (isNaN(e)) return "";
    const a = e < 0 ? -1 : 1;
    return R(e).abs().times(R(10).pow(-r)).round(t, 3).times(a).toFixed(t);
  },
  roundPrice(e, t, r, a = "Sell") {
    if (e === "") return e;
    const n = Number(e);
    if (isNaN(n)) return "";
    const i = R(10).pow(r),
      _ = R(n).times(i),
      c = R(t).times(i);
    let s;
    return (
      a === "Buy" && (s = _.div(c).round(0, 3)),
      a === "Sell" && (s = _.div(c).round(0, 0)),
      s === 0 ? String(t) : R(s).times(t).toFixed(r)
    );
  },
  delimit(e) {
    const t = String(e);
    let r = "(\\d)(?=(\\d{3})+\\.)";
    return (
      t.indexOf(".") < 0 && (r = "(\\d)(?=(\\d{3})+$)"),
      t.replace(new RegExp(r, "g"), "$1,")
    );
  },
  pad(e) {
    return (e < 10 ? "0" : "") + String(e);
  },
  parseFloat(e, t, r = 0) {
    if (isNaN(e)) return "";
    const a = e < 0 ? -1 : 1,
      n = R(e).abs().times(R(10).pow(-r)).round(t, 0).times(a).toFixed(t);
    return parseFloat(n);
  },
  abbreviateNumber(e) {
    const t = e.toString();
    if (String(Math.abs(parseInt(e))).length <= 3) return t;
    const r = [
      { number: 1e3, unit: "K" },
      { number: 1e6, unit: "M" },
      { number: 1e9, unit: "B" },
      { number: 1e12, unit: "T" },
      { number: 1e15, unit: "P" },
      { number: 1e18, unit: "E" },
    ];
    let a;
    for (a = r.length - 1; a > 0 && !(e >= r[a].number); a--);
    const n = r[a];
    if (!n) return t;
    const { number: i, unit: _ } = n;
    return (
      this.floor(
        (e / i).toString().replace(/\.0+$|(\.[0-9]*[1-9])0+$/, "$1"),
        2
      ) + _
    );
  },
  unAbbreviateNumber(e) {
    const t = { K: 1e3, M: 1e6, B: 1e9, T: 1e12, P: 1e15, E: 1e18 },
      r = ("" + e).replace(/,/g, ""),
      a = Object.keys(t).find((n) => r.endsWith(n));
    return a ? parseFloat(r.slice(0, -1)) * t[a] : parseFloat(r);
  },
  trimEnd0(e) {
    const t = e.split(".");
    if (t.length < 1 || t.length < 2) return e;
    const r = t[0],
      a = t[1].replace(/0+$/, "");
    return a === "" ? r : [r, a].join(".");
  },
  startWithNumber(e) {
    return /^\d/.test(e);
  },
  isNumber(e) {
    return /^\d+$/.test(e);
  },
  parseInt(e) {
    const t = { K: 1e3, M: 1e6, B: 1e9, T: 1e12, P: 1e15, E: 1e18 },
      r = Object.keys(t).find((a) => e.endsWith(a));
    return r ? parseInt(e.slice(0, -1)) * t[r] : parseInt(e);
  },
  compare(e, t, r) {
    const n = {
      ">": (i, _) => i.gt(_),
      "=": (i, _) => i.eq(_),
      ">=": (i, _) => i.gte(_),
      "<": (i, _) => i.lt(_),
      "<=": (i, _) => i.lte(_),
    }[r];
    if (n)
      try {
        return n(new R(e || "0"), new R(t || "0"));
      } catch {}
    return !1;
  },
  getFullNum(e) {
    if (isNaN(e)) return e;
    const t = "" + e;
    return /e/i.test(t) ? e.toFixed(18).replace(/\.?0+$/, "") : e;
  },
};
function ma(e) {
  const t = R(e).abs().toString(),
    r = R(e).gte(0) ? "" : "-";
  if (!/e/.test(t)) return r + t;
  const a = Number(t.match(/\d+$/)[0]),
    n = t.match(/^[\d\.]+/)[0].replace(/\./, "");
  return /e-/.test(t)
    ? r + n.padStart(a + n.length, "0").replace(/^0/, "0.")
    : n.length < a
    ? r + n.padEnd(a + 1, "0")
    : r + n.substring(0, a + 1) + "." + n.substring(a + 1);
}
function Cr(e, t) {
  return R(e).minus(t).toString();
}
function br(e, t) {
  return R(e).plus(t).toString();
}
function fr(e, t) {
  return R(e).times(t).toString();
}
function gr(e, t, r = -1, a = 1) {
  return r === -1 ? R(e).div(t).toString() : da(R(e).div(t), r, a);
}
function Pr(e, ...t) {
  return t.length === 0
    ? R(e).toString()
    : t.reduce((r, a) => (r.gt(a) ? R(a) : r), R(e)).toString();
}
function Lr(e, ...t) {
  return t.length === 0
    ? R(e).toString()
    : t.reduce((r, a) => (r.gt(a) ? r : R(a)), R(e)).toString();
}
function Dr(e, t) {
  return R(e).gt(t);
}
function yr(e, t) {
  return R(e).gte(t);
}
function xr(e, t) {
  return R(e).lt(t);
}
function Ur(e, t) {
  return R(e).lte(t);
}
function vr(e, t) {
  return R(e).eq(t);
}
function Mr(e, t = !1) {
  const r = R(10).pow(Number(R(e).toString()));
  return t ? ma(r) : r;
}
function da(e, t = 8, r = 1) {
  return R(e).round(t, r).toFixed(t);
}
const Ra = `${M.STATIC_URL}/s/home`,
  ie = {
    LOGO_DARK: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_LIGHT: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_DARK_TR: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_CONTRACT_DARK: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_CONTRACT_LIGHT: "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    GRID_LIGHT: "/menu/gird-dark.svg",
    GRID_DARK: "/menu/grid-light.svg",
    PC_HOME_BANNER: "/pc/banner_v3.png",
    PC_HOME_BANNER_IN: "/pc/banner_introduce.png",
    PC_HOME_BANNER_MASK: "/pc/banner_mask.png",
    PC_HOME_ICON_1: "/pc/sy.png",
    PC_HOME_ICON_2: "/pc/cu.png",
    PC_HOME_ICON_3: "/pc/as.png",
    PC_HOME_ICON_4: "/pc/ad.png",
    PC_HOME_GETSTARTED: "/pc/getStarted.png",
    PC_HOME_INVALID: "/pc/invalid.jpg",
    PC_HOME_JACK: "/pc/jack_home.png",
    PC_HOME_LINKEDIN: "/pc/linkedin.png",
    PC_HOME_TWITTER: "/pc/twitter.png",
    PC_HOME_TELEGRAM: "/pc/telegram.png",
    PC_ABOUT_BUILDING: "/pc/building.png",
    PC_ABOUT_ICON_EMAIL: "/pc/icon-email.png",
    PC_ABOUT_FOOT_T: "/pc/foot_t.png",
    PC_ABOUT_IMG_1: "/pc/img02.png",
    PC_ABOUT_IMG_2: "/pc/img03.png",
    PC_ABOUT_YANG: "/pc/yang.png",
    PC_ABOUT_GIULIA: "/pc/paladini.png",
    PC_ABOUT_FEDERICO: "/pc/federico.png",
    PC_FOOTER_FACEBOOK: "/pc/facebook.png",
    PC_FOOTER_TWITTER: "/pc/twitter.png",
    PC_FOOTER_TELEGRAM: "/pc/telegram.png",
    PC_FOOTER_YOUTUBE: "/pc/youtube.png",
    PC_BONUS_BANNER: "/pc/banner_bonus_v2.png",
    PC_BONUS_BANNER_MASK: "/pc/bonus_left_mask.png",
    PC_BONUS_ICON: "/pc/icon.png",
    PC_BONUS_BG: "/pc/bonus_bg.png",
    PC_BONUS_GIRL: "/pc/bonus_girl.png",
    PC_BONUS_NEWPIC: "/pc/bonus_newPic.png",
    MOBILE_HOME_MBANNER: "/mobile/mbanner_v1.png",
    MOBILE_HOME_ICON_1: "/mobile/sy.png",
    MOBILE_HOME_ICON_2: "/mobile/cu.png",
    MOBILE_HOME_ICON_3: "/mobile/as.png",
    MOBILE_HOME_ICON_4: "/mobile/ad.png",
    MOBILE_HOME_GETSTARTED: "/mobile/getStarted.png",
    MOBILE_HOME_MISSION: "/mobile/img01.png",
    MOBILE_HOME_PRODUCT: "/mobile/img05.png",
    MOBILE_HOME_LINKEDIN: "/mobile/linkedin.png",
    MOBILE_HOME_TWITTER: "/mobile/twitter.png",
    MOBILE_HOME_TELEGRAM: "/mobile/telegram.png",
    MOBILE_ABOUT_CLOSEURL: "/mobile/invalid-name2.svg",
    MOBILE_ABOUT_ISCLOSEURL: "/mobile/invalid-name.svg",
    MOBILE_ABOUT_CONTACT: "/mobile/icon-email.png",
    MOBILE_ABOUT_MAIL: "/mobile/mail.png",
    MOBILE_ABOUT_BRANDSTORY: "/mobile/img08_v1.png",
    MOBILE_HOME_INVALID: "/mobile/invalid.png",
    MOBILE_BONUS_BANNER: "/mobile/banner_bonus_mobile_v1.png",
    PC_ALL_STAR_BANNER: "/allstar/banner_right.png",
    PC_ALL_STAR_BUSINESS: "/allstar/business.png",
    PC_ALL_STAR_COMPUTER: "/allstar/computer.png",
    PC_ALL_STAR_DOT: "/allstar/dot.png",
    PC_ALL_STAR_GROW_1: "/allstar/grow_1.png",
    PC_ALL_STAR_GROW_2: "/allstar/grow_2.png",
    PC_ALL_STAR_GROW_3: "/allstar/grow_3.png",
    PC_ALL_STAR_GROW_4: "/allstar/grow_4.png",
    PC_ALL_STAR_ICON_1: "/allstar/icon_1.svg",
    PC_ALL_STAR_ICON_2: "/allstar/icon_2.svg",
    PC_ALL_STAR_ICON_3: "/allstar/icon_3.svg",
    PC_ALL_STAR_ICON_4: "/allstar/icon_4.svg",
    PC_ALL_STAR_ICON_98: "/allstar/icon_98.svg",
    PC_ALL_STAR_ICON_BLUE: "/allstar/icon_blue.svg",
    PC_ALL_STAR_ICON_LEFT: "/allstar/icon_left.svg",
    PC_ALL_STAR_ICON_LOGO: "/logo/logo-icon-dark.svg",
    PC_ALL_STAR_ICON_TYX: "/allstar/icon_tyx.png",
    PC_ALL_STAR_ICON_YOU: "/allstar/icon_you.svg",
    PC_ALL_STAR_JOIN_LEFT: "/allstar/join_left_v1.png",
    PC_ALL_STAR_JOIN_RIGHT: "/allstar/join_right_v1.png",
    PC_ALL_STAR_JT_LEFT: "/allstar/jtleft.svg",
    PC_ALL_STAR_JT_RIGHT: "/allstar/jtright.svg",
    PC_ALL_STAR_M_JOIN: "/allstar/mJoin.png",
    APP_STORE: "/download/app-store.png",
    GOOGLE_PLAY: "/download/google-play.png",
    APP_DOWNLOAD_QR_CODE: "/download/qrcode.png",
    BUY_CRYPTO_NEW: "/pc/new.svg",
    MARKET_NO_DATA: "/buy-crypto/no-data.png",
    H5_MASK: "/3.0/mask.png",
    CRYPTO_TRADING_HOT: "/war/hot-v3.svg",
    APPLE_PAY: "/buy-crypto/apple-pay.png",
    BANK: "/buy-crypto/bank.png",
    DEBIT_CARD: "/buy-crypto/debit-card.png",
    BUY_CRYPTO_DOWNLOAD: "/buy-crypto/phemex-buy-crypto.jpg",
    FEEDBACK_ADD: "/account/feedback/add.svg",
    WARING: "/war/waring.png",
    WELCOME_CURRENCY: "/earn/currency.png",
    EARN_ORANGE: "/earn/earn-orange.svg",
    EARN_NEW: "/earn/earn-new.svg",
    EARN_NEW_2: "/earn/earn-new-2.svg",
    REGISTER_LANDING_PAGE_BANNER: "/register-landing-page/banner-bg.jpg",
    REGISTER_LANDING_PAGE_ADVANCED: "/register-landing-page/advanced.png",
    REGISTER_LANDING_PAGE_BITFINEX: "/register-landing-page/bitfinex.png",
    REGISTER_LANDING_PAGE_BITMEX: "/register-landing-page/bitmex.png",
    REGISTER_LANDING_PAGE_BONUS: "/register-landing-page/bonus.png",
    REGISTER_LANDING_PAGE_CARD_ICON: "/register-landing-page/card-icon.png",
    REGISTER_LANDING_PAGE_COINDESK: "/register-landing-page/coindesk-v1.png",
    REGISTER_LANDING_PAGE_COINTELEGRAPHY:
      "/register-landing-page/cointelegraphy.png",
    REGISTER_LANDING_PAGE_FEE_BG: "/register-landing-page/fee-bg.png",
    REGISTER_LANDING_PAGE_HIGH_PERFORMANCE:
      "/register-landing-page/high-performance.png",
    REGISTER_LANDING_PAGE_KYC: "/register-landing-page/kyc.png",
    REGISTER_LANDING_PAGE_REUTERS: "/register-landing-page/reuters.png",
    REGISTER_LANDING_PAGE_SECURITY: "/register-landing-page/security.png",
    REGISTER_LANDING_PAGE_SUPPORT: "/register-landing-page/support.png",
    REGISTER_LANDING_PAGE_TRADE_ICON: "/register-landing-page/trade-icon.png",
    REGISTER_LANDING_PAGE_TRIAL: "/register-landing-page/trial.png",
    REGISTER_LANDING_PAGE_EMAIL_GIF: "/register-landing-page/email-v1.gif",
    KING: "/big-client/king.png",
    KING_WATERMARK: "/big-client/king-bg.png",
    TESLA_MB_BANANA_BG: "/register-landing-page/tesla-mb-banner-v3.png",
    TESLA_PC_BANANA_BG: "/register-landing-page/tesla-banner-bg-v3.png",
    CONTRACT_WHITE: "/earn/contract-white.png",
    CONTRACT_GREY: "/earn/contract-grey.png",
    INVESTMENT_WHITE: "/earn/investment-white.png",
    INVESTMENT_GREY: "/earn/investment-grey.png",
    SPOT_WHITE: "/earn/spot-white.png",
    SPOT_GREY: "/earn/spot-grey.png",
    RECOMMEND: "/ja-image/recommend.png",
    DEPOSIT_IMG: "/bonus/deposit-img.png",
    DEPOSIT_BONUS: "/assets/60-bonus.png",
    DEPOSIT_BG: "/bonus/deposit-bg.png",
    MENU: "/ja-image/menu.svg",
    SHARE: "/account/invite-friends/share_v1.png",
    BIRTHDAY: "/3.0/birthday-v2.png",
    HOT: "/2.0/hot.png",
    MARKET_HOT: "https://static.phemex.com/s/home/market/market-hot.png",
    TOP_GAINERS: "https://static.phemex.com/s/home/market/top-gainers.png",
    NEW_LISTING: "https://static.phemex.com/s/home/market/new-listing.png",
  };
Object.keys(ie).forEach((e) => (ie[e] = ie[e].startsWith("https://") ? ie[e] : [Ra, ie[e]].join("")));
const wr = `${M.STATIC_URL}/s/web/assets/`,
  Gr = `${M.STATIC_URL}/s/web/fiat/`,
  Yr = `${M.STATIC_URL}/s/web/account`,
  Aa = `${M.STATIC_URL}/pubimg/`,
  j = {
    LOGO_PULSE_LIGHT:
      "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    LOGO_PULSE_DARK:
      "https://i.postimg.cc/mgwdRtfD/573-5732729-yourlogo-png-transparent-png-removebg-preview.png",
    EMPTY:
      "f922b25bf0e8d266efb9884d6430f81ed41d0ea0373557495c8ca38a8c0fc685.png",
    SHARE:
      "a79d194585260943e3f7c4ab96333744bed40d987ebe6357f5773a4cbbedfef5.png",
    SEVENTY_BONUS:
      "393e424e7d1a0ceef8f8c49216357aa8068f66efa7e0dc1b9bfb51c348eb305a.png",
    SEVENTY_BONUS_10:
      "2cbdd20d17e10fd41180f82b7ecd7798676ab6517d1781ba4989f96f1540c8ce.png",
    SEVENTY_BONUS_2000:
      "189dd31245315c85f3e3d298b5eec1e99df3587544e7845813187e76c7a3ad67.png",
    LY_BANNER_BACKGROUND:
      "ab7a429eae47f4cf1014487e84d74906622504f3c6658b573024682051448246.jpg",
    LY_BANNER_M_BACKGROUND:
      "6c9db72c53c6de4b42d60a0de16294dc38e8ae4156e488e21cfe901255cc027c.jpg",
    EARN_BANNER:
      "e6a2a0a4ae8754fef88f30ac49a74cc8a55bf8f945b8ed108ef640d9c3b8bede.png",
    HOT_EARN_TAG:
      "97800cec7fd3880e3403a7872fb9d663bcb93fdb6573ad5c12211a31ee6efb10.png",
    NEW_EARN_TAG:
      "7fa244f39a41d2422c0cbd4998b2da939b7a02c5599160a57b82f36293f22711.png",
    CHECKED:
      "905624acb394f4867b87134f960179c5fba5160d8cbfbd02cdf3d1ac80a1fed8.png",
    NO_DATA_IMG:
      "ea9a54ed742a1a4398fdc8cef348511dce7d854984b75ca08a48500a1c1c0605.png",
    BUY_CRYPTO_TITLE:
      "8d24e84d4ad038db3110e13cce3068abced5139f26ada19f8fad39bf8bd97352.png",
    BUY_CRYPTO_STEP_1:
      "929f18dd165569ac7990089f4c855603a325e5d6bc3d74f315306d00b2a37aa7.png",
    BUY_CRYPTO_STEP_2:
      "4df5b4cd3cf44f85e5c066c6098bc01d2f3d191734622378c5865edbe9ff0a17.png",
    BUY_CRYPTO_STEP_3:
      "b69c4b09f55370ea73dfca264574ac2301fbe30bcb9e00c55f01e98aa00eae40.png",
    GIFT: "c556cfd09127838a5507b6891f641c09e9e1c1ff94d3f09dc62377ac2b28c09e.png",
    HUNDREDX:
      "b6586ed7d479774aba30e96fc84e5482b9841a3ceab85dba4b33051714409839.png",
    DOWNLOAD_ICON:
      "7b685e1d84e6de0959c883e2fedf1bcb22af3524118de8e7d9c7033750f223c9.png",
    ASSETS_EARN_LINK:
      "114cfb62410bd305ec0884167a1c574200ca73f963d180498fc447fb618a06b2.png",
    PREMIUM_LINK:
      "5125bfafe0b574948090fd83d2a4956fc0365ae5a6b987a8bf7293802d694a98.png",
    LEARN_AND_EARN:
      "ad45da51018e0a8225cf6b54cb09046be14eb67f8e76c2e10d576b0aa3e0d66d.png",
    ADVANTAGE_BG:
      "b6d88b6ff18fd43b9f14344d850e85baea325077a164025b69a755af4cbb9dde.png",
    FOOTER_ICON:
      "44b484e8af8463687ab1f2e2d82ac8b8d585fca001f6240ac527219531c9ec87.png",
    MARKET_BG:
      "e0596956e4006bbd13633496391779a395ce7b451235bf7887dc172175fbc641.png",
    BANNER_BG:
      "efb9abcb261759be868cdbb8ffc4c21cccc0fd9e8d963d755d0324d5fb648347.png",
    BANNER_KEVIN:
      "25bdeddad1c006813a090c93178c7975baad329fd3c14a9bb1610d6a7a39529d.png",
    BANNER_KEVIN_LOGIN:
      "b2dbdd2132974a73fb240b8322b1763739b328a79fadabc1fe28482a62336a15.png",
    BONUS:
      "476075d97dbd718f1361a9a0d9345ad320e7b9766323b6ff57841d8fec1b3526.png",
    CREDIT_CARD:
      "dc0c95c291a35ca47f767e5d3e3322b4caa11d035fae90aeef2879841e1b116f.png",
    CREDIT_DEBIT_CARDS:
      "925a281e64e62a543f0b4dfbfbd3aee4d1b2b6b54119cbed9223cc689c4bc401.png",
    OTC: "ff763f30963144efea49f64bb97a6184ce0b26da0ae5ea6aff2101b53dca7978.png",
    BUY_CRYPTO_DEPOSIT:
      "168c24f6c27429bd8e57b11c6aa2dd891669964c866e086f326c71cac71dd761.png",
    SPOT_TRADING:
      "f821c3543d0ee1dd31d53668d0654eb08a34afa881cc1aa3fe2fb4a64e23db8e.png",
    CONTRACT_TRADING:
      "a7781485af8e0ffbb6b69025d8fadd9102c2b37171e4470ab0e07b0e3e80c80e.png",
    CONVERT:
      "881843ab755d4ec18b581e2ba53c1535f97f70aef1a8e8997f829c6e2de9c52f.png",
    LAUNCHPAD:
      "9515716d0bf8084e174c2779c201d0d2cc6931bea0ca78b07da96e645e23092c.png",
    EARN_HOME:
      "716c8088a9894cefd1a75cb9276e688c633025185ffbac7ca876ded08a94535f.png",
    EARN: "ef03ebf89d992ae89b34c3250e74d10bd935b8bbf0ab3fd76fc47148bd377251.png",
    ACADEMY:
      "bb4b602577046ce4beb10c9ab8c7f86fbd4db568843a5753d21f88c9cf005d4b.png",
    WELCOME_BONUS:
      "f4dfc668514c50d7aed020089021012cf535bb16bdf060dc0fc0ef8b09ee8d6f.png",
    HIGH_PERFORMANCE:
      "e6590736c8de5378318550018d6f1ad9a165439c215c6135bd474e2d856ff235.png",
    COMMON_BANNER_BG:
      "317dc2b0b0584d7088f6e92e2ed5a42652d3e2f21b4182572cf0fbe6956f2781.png",
    PREMIUM:
      "998dc3a8a2a392eda453f6aca4e2bebc8c6b37a58b7f7773c7251bd7f85a963d.png",
    FULL_START:
      "baa28936eddfba506f91c265db9c7e0ea55147a5c86d7fa7f0c7e6f3bb59d503.png",
    START:
      "ac9dd0816818831540ffc5457a85c60da6380ee9d6ef53a1e07ff55c641f9a1c.png",
    BANNER:
      "8519b1775cd897458857858de0d523b92a26f6e7f0544c7d49580cbe42795966.jpg",
    BG_1: "7a90fc48b510fac2271bd5b707237ee87cc7bcb85083f8ef30a7660be5d316f3.png",
    BG_2: "5b44f9a85c1050c820bdb93824d6b3eeb98131279443e27908b915475e730718.png",
    BG_3: "715796b4ddbaea9a51040fa7f0f6180a11afa96cc7879951bb3eac19f657f599.png",
    CONNECT_ICON:
      "a63a2289ed9b384c448746a356fea0ea250ecb6dbedaf07437fde95b87be290b.png",
    CONNECT_ICON_TOP:
      "04b8e62a3b7f1c7a4c835201e9b8b0cbe087de996a22d52775c0f42ba1bf21a5.png",
    TRANSFER_ARROW:
      "7e00f9e03fc388344e9b752c3924fff46918bb87e0369588ec68f354c95320a4.png",
    TRANSFER_ICON_ARROW:
      "f648c19c20c2d530b20e65f9e22e59e06f6648765018fa2754492203c093cd96.png",
    GOOGLE_ICON:
      "96b63ebadef061f01f52db5c462b508c72900284538206b4e365afa08f122936.png",
    KYC_ICON:
      "5a0611e640312ce79a3bd544a05732cc5adcac1f0c0afc004edde2657fb56618.png",
    ERROR_ICON:
      "2093d21b4b42c34ed28dcf870d16957da86b0184322dfcd7236e968cd0112d25.png",
    SUCCESS_ICON:
      "f66376910963f00f1fe16d459585f3a8f2864880716a885320c9df7370927997.png",
    FAILED_ICON:
      "6235556bca0c1adb40c16c0fc796da4698f36d997b7c9a4241687b37e7f7134a.png",
    WARING:
      "1efd8dd37b128e853ad9bde23f485c6fad54689d09a8b45abb86ec0b2cb54ecc.png",
    FAIL: "5be86c2ca84bb97e79779c94d2b3fd79cf966571ee5d8fa96c1f93a1b35cf179.png",
    SUCCESS:
      "8bdcdef82d04eb6d725280d639d6734cde53b588382b301a785c9403ebdedcb5.png",
    FAILED_GREEN:
      "3a33026a9063fd0a3d2ab56cdcc3edf247773440ab2f7f6b77feca75f62d8fc8.png",
    SUCCESS_GREEN:
      "07f30c1d62048f3ba4f5d6feacca2db80631247814a17533ba455dbbcdc21659.png",
    PROGRESS_GREEN:
      "bb63699ced3e14e625054e90bf45d290d49313361e0219ed690743304a41d963.png",
    TR_GUIDE:
      "c95b23a244be1e9d559534b6bb58d4bf83273ec3564a406f84292b416e6b77f6.png",
    GIFT_BONUS:
      "53724bc30eec04e147e0f4565a54e61a066d16792a7fb71a194a0df5967b1e6d.png",
    BUY_CRYPTO_ZERO_FEE:
      "2b8f43a1054b7b8aac121b5d84348551b6f50139b6bc420dbe47098d09d38ea0.png",
    BUY_CRYPTO_ZERO_FEE2:
      "6af9a97de7155bd1cd64608b2220d2eed7ee59d8d9ebdb0d4670b8b3dc5fd4c5.png",
    BUY_CRYPTO_ZERO_FEE_DEPOSIT:
      "f2286d1c0242d8ddc8a93dd1c883229d140bba1a4935bb9cf814977adac96db8.png",
    BUY_CRYPTO_ZERO_FEE_HEADER:
      "c2f7ea976a543c7732295f655821f7820a8606918418be4d1c28d083046b8dca.png",
    APP_PHONE:
      "c8bf803a018c757b62a9b191fa1596f2b7efa32e6d6392fc46cfa6073f9c1eae.png",
    DEPOSIT_TIP:
      "c51a7518d85f34fa94274e5b87ef23939c887500f8c46d5af2c7e31f649b5143.png",
    APP_STROE:
      "5923004d4a9167409cd5ad1f322999135b097e07f09c3d991469c79e9ad21423.png",
    GOOGLE_PLAY:
      "97e84362b8ae1a8d4c003677702cff087158521a2fef47345a4b82202d1ae754.png",
    TRADE:
      "a9ec7eaf859b6175f5adf1fd3b46cb72484ee289a8968af4984cb0536388275c.png",
    CODE_URL:
      "b1f243393e0aafd6456d1d9e1909ae3d5ca93cb22f11e0c0fae454e014618d8f.png",
    SPOT_CONTRACT:
      "e4a5302dc001aa8c69c6cb67f5c012f4687c4d53fc2880b04296728fa7f8a3b4.png",
    PROFESSIONAL_TRADING:
      "88a3a50713e7b5e20dfa8c071674ad4397d953063b48d75246355396bc3cf111.png",
    CODE_WHITE:
      "954b28e383148438caea88cd2334b51d55ad4c54331fbd40d07acf6a8900a27c.png",
    APP_ICON:
      "a0fcc04928bb15b8bb911ad639eccbd31e7ed5c8062536d623160baafbe56c0c.png",
    GOOGLES_ICON:
      "516e9a6ec92aebc225aa43feb0bbd17654f34243f386c7101ea4bbbed8b7f5c0.png",
    ZERO_FEE:
      "ce49f8816e1e7c194b84b626c9b78eb562bad99230d8f726fbfd236d99238a25.png",
    MAXI_NUM:
      "672b3de541de477fb622f43454bedd86536f69f561309224aac512a06e94e0da.png",
    PROFESSION:
      "1049ee39fa928b029023c8d81a7fc2225d9f2f733c4731af7832f02c9869fc51.png",
    MULTIPLE:
      "f33bfd4570dc7467314afeb9514825416c6efe8368fcf59252eb2f71e37d8f40.png",
    BEGINNER:
      "fac72d11b2b79d85aaf5a0cf298a6ce755ffede14e345cfaefb421f2ddc758e1.png",
    ADVANCED:
      "434da4e41b80631ac5f1aad1f5ed7a1062a113154c1a04e3c8fdf32108ad609e.png",
    SECURITY:
      "479d442091b3e3cd726df63fd46742ca9fcf2d9c9e07ca9e3eac5e199eefd32e.png",
    SUPPORT:
      "139b4f94ff857369dcade8b61f7b7284156faa2a478827069bff952ad3d74e12.png",
    TRADE_APP:
      "6aff0353ea4b5b1e0b338a2991ff1ea34fccd7bd3f965196783d83c1bf7df803.png",
    HOT: "data/ee7a5587-51d8-40e5-bd20-a71fdecaa9f1.png",
    LOGO_LIGHT:
      "85b07d05756a81e31f13766ec4e0bcf53f7577940725df3ab882326d1bd5a3d0.png",
    SUCCESS_NEW:
      "e14122adc3186ab51e7a8b408ce523bfc393694e6b95a148f17d583370dc7636.png",
    CAUTION_ICON_TIP:
      "53c7df660ebc9fab73430055140544c108fd8b1de73f7e40d7f02e56c643f210.png",
    CALCULATOR_FAB:
      "63f33c6868bb1f079748b36780b561fb0843eaae1aa19f4e8bc77aed8431e764.png",
    TRUSTED:
      "06c600874e0fd1e9298992f13d562d78495356e6b33f51f62e051791bd489e67.png",
    USERFRIENDLY:
      "52678b3b783d0c778641f06c69efb3afb2cd7fb9e64fe5ef52448576b5237765.png",
    MONITOR:
      "63d391ac3a84e7e4822463cb6d4600ee2e9b3742b75513ad429b36e8541b0f91.png",
    GOLD: "dc6a11f501341f035c0e4ff536a39eda01ecf664ef3a3f443c63f2d2bd6a4d35.png",
    BONUT:
      "e04fdd32d977ab2a10c8cf339426bbd0e44324e6bcd664044cada4cb4eb6ba78.png",
    REAL_TIME:
      "f8d4ac05a67fabd74733674585b1f7ba6198a3b69dab132ee0d0c884e717a81e.png",
    CONSTANT:
      "fbc9b639dd3912d5f93134477e0bf7eee01a17de7f8037fa67e15c8f240dc2da.png",
    CUSTOMIZABLE:
      "38024f2a8b203d325f70b3d724f69f6a06c62467acf5fc9cd6d130b7262ca86c.png",
    ACCURATE:
      "f2f90b1d1fa13ad570cdacbf394e4ae1823a661adc148a33fec0a7c08c6e41cc.png",
    APP_STORE_HOME:
      "9daf0c9a1965375cda5bbabe4b89cc19f6ce8176b265539c288a6dd679f9c0ac.png",
    GOOGLE_PLAY_HOME:
      "93907b0d27f50e25a01e44588edcc658abca262fb8f96bf33e7bc6bb5c91d9d0.png",
    GET_PAID:
      "bd30ef452c1e3f5e20a0a882e873c79150225d49eb5dbc6071bf3d2055f5e11e.png",
    CHECK_ALL:
      "da73f6be8732f1226af681d2e99f57e4c2b3d259646a52f8c63a547fbce49e13.png",
    BUY_BG_LEFT:
      "49033d4d04948643990b40705971e0e55ca47009899bdc85f044867363e81464.png",
    BUY_BG_RIGHT:
      "1f1a8f65c6bccfd6350b4cddc03f3c10c8f61ff886ef8848e8b8cd0f78407cac.png",
    BUY_BG:
      "3539da1bf6315ed6c7532ff0f62e51a7652110d0fa79fd5b57207d3e7b3abda1.png",
    MAGNIFIER:
      "402075b91dc41aa57f51b9a27d5c15d4179090a5ca6d547a291f505f014d15ff.png",
    CRYPTO_CONVERTER:
      "6dccd1337341520c6ef67abc81ef1046cb33ce07c5d9a6469dd22fd011f43e21.png",
    SELL: "ca7f60281bae6994bfdd27c658ca70632315f6cfc26ae735e1e873c855bbe704.png",
    OTC_TRADING:
      "daccf7a4700cef3d602d75872d75dea8622b1633604cf717f6b145e4a1699f68.png",
    BUY_BG_MOBILE:
      "bf5a48bb8c6a9100a1220f8008166eec55613d2e4414572fc35bd00d4f7289c8.png",
    DOWNLOAD:
      "ad608a63bc713d0ee48e1f17a97f97176405e12e89c6c262f8e38435dbc72bfd.png",
    COMING_SOON:
      "a6823bd0ac6d282f9c7b7b32102ea5f85d2540c1e6a2c861c0b07aeb4e4516e8.png",
    LEVEL_BADGE_L0:
      "842a95c107d6d3f15537418edd1aa5b011cb3bd302b82fd2705d965c91c8deba.png",
    LEVEL_BADGE_L1:
      "23b61dcfb16f082168582ff6878c16b2138c793e2ebdbe38e994c1e664fcfc46.png",
    LEVEL_BADGE_L2:
      "0ba0c35a26cbf0940feefb6e25ab18c50c8df36dffb73be15ee22f62c3a00cd0.png",
    LEVEL_BADGE_L3:
      "abd374ddc850de6ac5fe2c5f866fdf49458d88992338563415fdfab4e9ba7ec5.png",
    LEVEL_BADGE_L4:
      "a5e03501cd3d8b6cf7f2320ca5ce3a3fec10b797eb1e7e2ea54201e6e03d6c59.png",
    LEVEL_BADGE_L5:
      "f1c430d18c0fcae7d9a38e3cac13421055b5e77187227dd64c09295c7cf3563a.png",
    LEVEL_BADGE_L6:
      "9910fb156b5ba2a873d1f7e0de2c8c8c36ced1ff8bbafb7f1247e26367b57e58.png",
    LEVEL_BADGE_L7:
      "3e339b8a749c70a21d9065a1e582f3940018fff9e8105d41cde8a560c64fc76a.png",
    LEVEL_BADGE_L8:
      "890a576eddabe3f4cfec4041d3c160af600a8681cb6093ceb7a5b1536970fbe2.png",
    LEVEL_BADGE_L9:
      "9c0c97a97b22dad820d8a46abd1b4e5e285aa88de268e7be0d2670aa082a610e.png",
    LEVEL_BADGE_L10:
      "ba3c2dc98165e7c75881929d1b542f0314c08eb3520556c20ee70bbe23649f7d.png",
    OG_ABOUT_US:
      "f11ab0559d0eb5dd1533579716e77173b5a214d14e0e3ec3e3e5d93b00a61942.jpg",
    OG_ALL_STAR:
      "3f74b10af865ac4deb60a0aea5be2552e13989d8c3562c62f57fe87e839df878.png",
    OG_CRYTO_CONVERTER:
      "e4a5775708eefa5999438df31b575619c9fcaf50cbc77ccc3f13cbbe23be40d3.jpg",
    OG_EARN_CRYPTO:
      "b77ae2d6fa215b301c075e4b0128b9420c09bb0293cc26ae994bbfeb1bbfb769.png",
    OG_LEARN_CRYTO:
      "6f26e6ce13c73a4a73ba144be173a939b98fcdf47acfccf181e23ddb4c671657.jpg",
    OG_SECURITY:
      "e42ddb9cdba613c4794d659df50088e6c25fe9448f5fa870768d1d9418de2cd8.jpg",
    OG_WELCOME:
      "7b8d20b60a5bf97a7ca8ac1d39fc5f1b51c09929a632edaffd2110bddb0c4d48.jpg",
    OG_MARKETS:
      "6aca0bdc3093a89f9d43831e8f55323b1c4f2d53b6e64a4c3b0f5e0c0ee7e437.jpg",
    KYC_CERTIFICATION:
      "6ae1dbc14346e22b18c42dc11fc3c84bd9508ec49896e09aadd65a4728af4709.png",
    GOOGLE_VERIFY:
      "60b8b5093c3731e9abc40e6bc4ba21b750a5325fca413793122a8e0ebbcdbd3d.png",
    NO_DATA:
      "4c9cd9f7f3d96689b276dc710ea52efd5212b3a4277de24820853bd0b0d147c0.png",
    P2P_MARKER_PLACE_ICON:
      "9c3908b994a609a5e0d8437d0e357ad2a3331a47d6b6b1aeabffa48542665d02.png",
    P2P_ORDER_PROCESSING_COUNTDOWN:
      "a2ee9a6d3cd1b76441dea8d934086869fd9bdc42e9652768d065f913ddd665e5.png",
    NEW_NO_DATA:
      "d840c36dbe3ad794c5c3625fe5d18cc6af9f252118cadb1045e906d68490bc6a.png",
    OG_NORMAL:
      "ba6e212389adabcf0c72252f9c61fb398fe0df1b5030efb0f022a8a665162bde.jpg",
    OG_NORMAL_JP:
      "f4c6cbe0a417908d24e5fb759ac1d4911fcf72f57a7b4caddd18b47fc30988f7.png",
    OG_BUY_CRYPTO:
      "6aca0bdc3093a89f9d43831e8f55323b1c4f2d53b6e64a4c3b0f5e0c0ee7e437.jpg",
    P2P_MARKERPLACE_ICON:
      "9c3908b994a609a5e0d8437d0e357ad2a3331a47d6b6b1aeabffa48542665d02.png",
    WaringTriangleBlue:
      "0fe5f960188309ec6c2517f7e31cfa3eecd5594a07ddc7ef74558fd4484fc372.png",
    ACCURATE_LEADER:
      "09fe2fc2eab962a78505ad96611a384b6b72c5b7a814e72e68e4342d29a71e9f.png",
    ACCURATE_GLASS:
      "75010e047819e560a2073e4863823783bd9806b47ddfec1a48d4bc6294784d97.png",
    ACCURATE_GRAND:
      "042bf4dd845e384c175840e29bb4ecc90ea96fbed45da23d21a026ec490e566f.png",
    ACCURATE_FIRST:
      "7dbcc279c70ac115f3923372b3c6cbe2fd27ab20aa5a8d4d18ad9852b303de89.png",
    ACCURATE_SECOND:
      "ef926ebf43486eec95aca9c4bfa411b79cc55314e5bfb4a27c57cf9347c9f634.png",
    ACCURATE_FIRST_ICON:
      "7550ade9f8b23650ee3f1be8de99ee0b0ae5404788ee449a74721e975a9beb86.png",
    ACCURATE_SECOND_ICON:
      "de38a3110da028eba363a8bc4ead4c7e5592749737abfcb83e160d4d7de1a18b.png",
    RECOMMEND:
      "34a04ad2bd34cc58b10dcaee38325e62b7105c4c0988a61b00373ef4f0a4d92e.png",
    RECENT:
      "1efec3eb1e945868fb7283e2f9b9b090cc1a7b6cc77a6ae5d139d9c74320288c.png",
    P2P_FEEDBACK_EDIT:
      "166df18a7398cfbac9bb240ee5d70a7061ac6bf2abdb4bb4921c2cc40f9f1764.png",
    P2P_FEEDBACK_GOOD:
      "ee5175fe025c8fa5eb36138b3686a4bf15bc542bb72d6bd97362d6280ba2bdf9.png",
    P2P_FEEDBACK_BAD:
      "86c0396ee3e89df86493dbe7cbf06411f58ee31c3fd1aaea433fd5e46f090140.png",
    P2P_FEEDBACK_GOOD_NORMAL:
      "5aa97381d0c6905ec640cc5ee78ee34a88af57267f672ade7be7352dbf48e889.png",
    P2P_FEEDBACK_BAD_NORMAL:
      "f8c3ee0490eaab4a5adecb68466e290fe4b68fac1f959dabab4d1edb1cd6d38e.png",
    P2P_APPEAL_CUSTOMER_SERVICE:
      "48314d7a1e98e7f352718b86562598843903acb916d00b0398c49a1e3b4cb913.png",
    P2P_IM_ATTACHMENT:
      "acfc017c6d7cd43be2f75ae6cb98ea05ed79ff4c520ebe395ed140deb1e1223e.png",
    P2P_IM_ATTACHMENT_HOVER:
      "445e066db5ae9c5a9e953a0b651e04fd241b6003b33f27b72d465dcf35057d46.png",
    P2P_IM_SEND:
      "3377887e18864107101df1aa7f0f23e562a0e7556b1de52f1f234c9c6b93ff79.png",
    P2P_IM_SEND_HOVER:
      "0fa2b36f8d671e4b1a53bacc690cc9c901f3623829ad61f4d3634ebd486059df.png",
    P2P_IM_FILE:
      "206398b8c6500ddd755a517f1175ced17b250c7cbb872ac00f4aa4f5ae3c5321.png",
    P2P_IM_BEEN_SENT:
      "3230198257c641d782754e89331150d0957038d9f9d2455321b88eff81ec541c.png",
    P2P_DEFAULT_FILE:
      "ff585d36438bdfd314c51ea6bd4a9d8aa980bedde41e079299646acfacfd9e2d.png",
    P2P_BANNER:
      "4683ecd5ed1edb813ed6fb076771400298c546249bd0436922fffc1afe18ad43.png",
    P2P_BANNER_ACTIVE1:
      "67147e230dd413cdb905ae7dc558323bfa67dc45f58343b2ae3a183af80367e4.png",
    COPY_LIST_BANNER_PART:
      "2b178cd01a121ea03f02dc19eaf8d34dce86ad24c7184050760df862b582da08.png",
    NO_ATTENTION_YET:
      "9a95ad4c83e7fd8f44a399345174478c81a3e01331d09743f4e7d19d949cb7da.png",
    CONTRACT_TRADE:
      "4d31778889d32958af0f9b2b115c237f19b6735f3d7fef63faf543037c466cd6.svg",
    COPY_TRADE:
      "e4286b45863c4d6c2953fb200bd15cb97811e21d98c1e3e4c12b6c3c91de98b4.svg",
    CLOSE_ICON:
      "da60efc0d41cf0503665ea4a34cab9d151d4bc88f7185f34509d3ef7604ebd2a.png",
    GOTO_ARROW:
      "f20d74cb525be1407dc6f3b67702f9029ca4ac176eb1a3feb0b97d420b48a5e4.png",
    BUY_CRYPTO_DOWNLOAD_JA:
      "b64add0e6bb6f04535f3080494bc44c5e52f3d1809fedfdaf382802ecd7d3c49.jpg",
    COPY_TRADING_NOTICE:
      "47b81b7a9640e59a7f9ff8ce9590d131659f11ea2375ad56b184d66bb84af944.png",
    KOL_BANNER:
      "84ed63b0f372b21a5efeb842819c956efe1349fb119771bf1ab0274ff7264618.png",
    KOL_HOME_BG:
      "d95bbbed2e3df7ef7fa54c47e3147f7bd2d0cd49684427f85aa2d05679949fc4.png",
    HEADER_NEW_ICON:
      "3d41c97379e870bb77c9c3808d6cd4ab241826b0df9e8fb988fb9e7f137b1be0.png",
    CHAT: "c6a4055699d3cf1d4c9e2cae94bcaba44d269ae4b810549cffc9e6c23be8c80e.png",
    USER_GUIDANCE:
      "8924d7630cc8ac4e1c85e8e66ab6e6759c187c2d0e7525a441316448529bdc77.png",
    LINK: "11ae14a8cbdb4181f69f30ed00fea5f53772a6523aab787859ef665dec6f397b.png",
    ARROW:
      "5cc3ba3cbc532535326c22c141fc3c7d33ae641ed20020041d39770d7d25632d.png",
    SCAM_ICON:
      "3234b0e7f79bc3cbdee93cd9b1e3d7f9e2171eebc4101c28ecf3d828a61ecbc3.png",
    BOX_CHECKED:
      "7767e45cc4f650d6204f1fee86cd88bd6dd0fcd9e972c4ed5793d45d5d3659ad.png",
    BOX_UNCHECK:
      "136e84858afd87d4bdaf585558cec463312af75474202bc069761d5523f3d6a0.png",
    VIDEO:
      "6ccc802a77cf193e9d26a1e1ebce2342a92221ca24b8cea6f47f6641d78a0023.png",
    PREDICT_ICON:
      "acfbcd1ad0e7e87c82d8e8527ebbbc1a36d9544e4094151aca44d00c90c8246b.png",
    DANGER_ICON:
      "714130c1c44e093df75a169ffadd19251701cb9e80b80a6e240a546f1790fa4e.png",
    NOTICE_ICON:
      "cd8b92f436638532b96caa6f7ad34dff2b1dcb2860bc6b743a5d4f75dc9994f6.png",
    CLOCK_ICON:
      "52520da507c0cbb54eb32745ff377ff0902fe5d8d6bdabe425419f6bf90a5928.png",
    RECOMMEND_GIFT:
      "8f48aea164b034999266cc59b84c9e04ea536ac7baa225663936821e0b6bc8a0.png",
    ARROW_BLUE:
      "5bab57ea3c54bcf1e465b596471b524e415f43f814df3dec17bf4b05bd75f5e9.png",
    ALL_STAR_REFERRAL:
      "b258001327b2053ba29cdf08d2546af17d1c19a4dc752949a57b31decb3a23f6.png",
    SECURITY_ICON:
      "e740429b2da0c8333534d6c78d0689e6abdb404e3c6ce624942b113f5ed03f06.png",
    COINM_PERPETUAL_MENU:
      "bb1e2564aabb7ae0810f4e2a02abfba2e8f0d6ce88a1400ebec5c927eca6ccca.png",
    USDC_PERPETUAL_MENU:
      "394994490bcba826df2f42d07982de7b639ed6ee7f40eacf8d2ec75cbc0c6e76.png",
    WITHDRAWAL_SUCCESS:
      "55e55bd28505778c4f80b0bc8db8ce9de94dd9aac7cff705c3dfaf02b427a98c.png",
    WITHDRAWAL_FAIL:
      "030e5a5c1f33dad19e9ef78bb043d304727b20093b0c78d220125d432bc01091.png",
    PAY_LOGOS:
      "af81cec43f27d24d6f33423b6299ba53985428c46753f78ddd11125f6bd3df0f.png",
    WAIT_ICON:
      "f6d2551bb9152e6e6d89813b15938575e6710457a6fcdf883ce727e242527bb8.png",
    OTC_BANNER:
      "2a5de86d8e8a2835b2c19315c8c0ae2c32f9a42963379c0b52115e8bb391f8ff.png",
    KOL_BACK:
      "66e277891167cac1556bf644baa098e333f24846417b76f0c8e26b8b5f9404cd.png",
    KOL_EDIT:
      "7cf92f26dff0abc57ba0b1ae45fda3d92e0425046b8fd5cb4f97fe9e284f2251.png",
    NEW_SUCCESS:
      "b0ea07600996c5bff938f57a784814fa90a448ea508b11775b13107c09766743.png",
    BTC_ETH:
      "7831bbea72b44f37246b43c63ba6d91911dfea6f992f58d9caf65fb8312f0281.png",
    USER_ICON:
      "c629e3bf7069057d96cdc7e2e3390d4e92c8248dd22fc36c180a90349113832d.png",
    STORE_ICON:
      "3080e726a32fecdf67175fc2a923a4e97d6425b431336ec6dd60618024b220d5.png",
    VIP_MENU:
      "03ce95826ed67df8c47fcc17f9d162a89181ac0fb063c550c586320780dbfa55.png",
    Fire: "data/cfe774d8-cfe8-48dd-b4a5-4b98d4e63850.png",
    MARGIN_TRADE_ICON:
      "0f13a181a5f87d62d620490c276f9a33638c5fb0df6aeece828028296c2c769c.png",
    QUESTION_ICON:
      "342e83bd479113a38e514b9baf3b7eed339d997afcd8fa2c9f995882f4788216.png",
  };
Object.keys(j).forEach(
  (e) => (j[e] = j[e].startsWith("https://") ? j[e] : [Aa, j[e]].join(""))
);
const ee = {
    FACEBOOK_IMG: "web/media/facebook.svg",
    TWITTER_IMG:
      "https://img.phemex.com/v1/c80f707e-e491-410c-b9ed-e28fdf5e3d6c/twitter.svg",
    TELEGRAM_IMG: "web/media/telegram.svg",
    MICROBLOG_IMG: "web/media/microblog.svg",
    LINKEDIN_IMG: "web/media/linkedin.svg",
    REDDIT_IMG: "web/media/reddit.svg",
    VK_IMG: "web/media/vk.svg",
    WHATSAPP_IMG: "web/media/whatsapp.svg",
    SNAPCHAT_IMG: "web/media/snapchat.svg",
  },
  ua = `${M.STATIC_URL}/s/`;
Object.keys(ee).forEach((e) => {
  /^http/.test(ee[e]) || (ee[e] = [ua, ee[e]].join(""));
});
const Oa = `${M.IMG_URL}/v1/`,
  _e = {
    TRADING_BOTS: "dc7ecf3d/trading-bots.png",
    FUTURES_GRID: "697906b2/futures-grid.png",
    SPOT_GRID: "56532aef/futures-grid.png",
    SIGNAL: "dd9f2d46-931a-4496-be09-d978ea3d0cf4/signal-trading-icon.svg",
    MARTINGALE: "e9d61e8b-c3bb-4529-813c-cfef838a0e7e/futures-martingale.svg",
    TAG: "8d091996/tag.png",
    SHARE_BG: "dbf91b70/share-bg.png",
    COPY: "0541141f/copy.png",
    SAVE: "f2e759d5/save.png",
    LOGO_LIGHT: "d4dd5c7b/logo-transparent.png",
    OG: "01eacd71/bots-og.png",
    BOTS_ICON: "9b968b03/bot.png",
    NEWS: "d4f84019/new.png",
    BOTS_ENTRY: "829add93/banner-bot.png",
    FIRST_FRAME: "5c7022b6/first-frame.png",
    BANNER_VIDEO: "ab509b9d/p-v.mp4",
    ETH_BANNER_VIDEO: "b9146ca5/video-bg.png",
    ETH_SUBTRACT: "c1f5b039/subtract.png",
    STANDARD: "524e1f06/0-2x.png",
    VIP_1: "38fb6448/1-2x.png",
    VIP_2: "282625d3/2-2x.png",
    VIP_3: "58212980/3-2x.png",
    VIP_4: "f4f45c60/4-2x.png",
    VIP_5: "3eb98014/5-2x.png",
    VIP_6: "0c0e06e2/pro1-2x.png",
    VIP_7: "88a46410/pro2-2x.png",
    STAR_VIP: "f7d0bfd7/star-2x.png",
    MARGIN_TRADE_ICON: "f310cd8c/magin-trade-3x.png",
    PSP: "8d63c884/psp.png",
    REPORT: "a3a96534-9045-4daa-bbf5-551d927b1f92/report.svg",
    MM_SLIVER: "7fd829a3-6226-442c-acbd-62c5a2b1b3ba/mm-sliver.png",
    MM_GOLD: "7c6a58cb-3287-4eb0-99d6-586f571483c3/mm-gold.png",
    MM_GOLD_1: "f4fa073f-355a-4376-bed7-c3ef5a5629cd/mm-1-2x.png",
    MM_GOLD_2: "c0742a01-3368-4f5a-b59a-7ca5f54996b9/mm-2-2x.png",
    MM_GOLD_3: "c3f79c21-14da-4562-b871-1276ab5aa93a/mm-3-2x.png",
    EMAIL_BG: "0f4a2baa-2763-486b-8b1c-d3663ce5f9d5/email-bg.png",
    BONUS_OG: "20fbce13-a8ae-4a19-8257-d63e0d4db07a/og.png",
    BONUS_ICON: "7d2cdb02-8932-4e6f-b264-964cd36c3411/bonus.gif",
    BONUS_ICON_KYC: "0aad78c2-a788-4298-be3f-2f04dbaa7758/welcome.svg",
    BONUS_ICON_OVERVIEW: "2fa26df5-9cf5-4ac7-8a84-e3053ce67b59/image-27.png",
    NEW: "7fe796c9/new-v1.png",
    DANGER_ICON: "19cf1973-7359-4f12-81c7-3552f6790d09/close.svg",
    SUCCESS_ICON: "b5d2b7e9-9b34-4da5-a34a-2153775d51b2/tick-circle.svg",
    TIP_ICON: "d2658c7c-189e-4824-9038-a409c78875a9/warning-1.svg",
    LOCK_ICON: "1db83def-11c8-4dcd-9b5b-d96d248a8a60/lock.svg",
    TV: "a14807f4-e10b-4de8-b17c-9a94d870141d/tradingview.png",
    ACCOUNT_CONTRACT: "aed0feb4-aca5-4a9b-a58c-d2dea08521e3/contract.svg",
    ACCOUNT_CONTRACT_LOCK: "dfe4b6cf-5088-4d20-957e-933c4a3f8bf7/lock-1.svg",
    ENABLE_WHITELIST_LOCK_WARING:
      "1cf445b2-89aa-492b-8b28-93edeca3dc4a/icon-1.png",
    ENABLE_WHITELIST_LOCK_SUCCESS:
      "2d1d2677-5fdc-4d49-b6c2-97c2b5f3442c/icon-2.png",
    CLOSE: "318892bf-6200-4fb3-bb2c-605d040c58aa/close-1.svg",
    COIN_TRACKING:
      "2bcf38e4-1f15-494d-bf6f-16f956d37ba6/coin-tracking-info-1.svg",
    KOINLY:
      "f173cf46-1eb3-4796-9beb-b8108ec2e483/koinly-free-crypto-tax-software-1.svg",
    DOWNLOAD_CSV: "e8404685-eec4-452c-bb93-d9c7459fb2fc/frame.svg",
    DOWNLOAD_LOADING: "ce6ceeb9-58ec-4ee2-a7e4-5066fd6a5799/loading.gif",
    DOWNLOAD_BANNER: "26b13a84-8d3f-4d27-aca0-70d7b1144aa1/tax-2x.png",
    CIRCLE_RIGHT: "09e2ce6c-4f98-4d38-a2bb-45078f524c0e/circle-right.svg",
    CIRCLE_RIGHT_CHECKED:
      "d0943681-0dc3-4a8a-9d8d-1f8db82361b4/circle-right-checked.svg",
    FIRE: "664623f1-8884-4e08-81ff-c71e0d3fd96e/fire.svg",
    WATCHLIST_SHARE: "81fe38a0-e574-49a4-90e9-73bf0483f36d/watchlist-share.png",
  };
Object.keys(_e).forEach((e) => (_e[e] = [Oa, _e[e]].join("")));
const m = {
  CONFIG_PRODUCTS: "/public/products-plus",
  COIN_BASIC_LIST: "/phemex-common-service/public/data/coin/basic/list",
  PROMOTIONS: "/phemex-user/public/promotions",
  FEE_CONDITION: "/phemex-user/public/fees-conditions",
  ACTIVITY_CONTENTS_VIEW_LOGOUT: "/phemex-activity/public/data/contents/list",
  ACTIVITY_CONTENTS_VIEW_LOGIN: "/phemex-activity/contents/list",
  SYSTEM_TIME: "/public/time",
  KLINE: "/phemex-user/public/md/kline",
  KLINE_V2: "/phemex-user/public/md/v2/kline/list",
  TREND: "/phemex-user/public/md/trend",
  TREND_V2: "/phemex-user/public/md/v2/trend",
  BROWSE_TIME: "/phemex-activity/contents/browse-time",
  PUBLIC_CODES_MAIL: "/phemex-user/public/codes/mail",
  CODES_MAIL: "/phemex-user/codes/mail",
  SELF: "/tokens/self",
  USERS_SELF: "/phemex-user/users/self",
  USERS_LOGOUT: "/phemex-user/users/logout",
  USER_LOGIN: "/phemex-user/users/login",
  USERS_CONFIRM_LOGIN: "/phemex-user/users/v2/confirm/login",
  USER_SIGNUP: "/phemex-user/users/register",
  USERS_CONFIRM_REGISTER: "/phemex-user/users/v2/confirm/register",
  PREPARE_PASSWORD: "/phemex-user/users/prepare/resetPassword",
  CONFIRM_PASSWORD: "/phemex-user/users/confirm/resetPassword",
  PREFERENCE: "/phemex-user/users/preference",
  DELETE_ACCOUNT: "/phemex-user/users/deleteAccount",
  PUBLIC_GEO: "/phemex-user/public/geo",
  PUBLIC_GEO_V2: "/phemex-user/public/v2/geo",
  GOOGLE_CLIENT_ID: "/phemex-user/users/google-client-id",
  USER_DEVICES: "/phemex-user/users/device/list",
  USER_DEVICE_HISTORY: "/phemex-user/users/device/history/list",
  DELETE_USER_DEVICE: "/phemex-user/users/device/delete",
  USER_GROWTH_INFO: "/phemex-user/users/member",
  USER_LEVEL_NOTIFICATIONS:
    "/phemex-user/users/member/confirm/level-notification-list",
  USER_LEVEL_NOTIFICATIONS_CONFIRM:
    "/phemex-user/users/member/confirm/level-notification",
  USER_ACHIEVEMENTS: "/phemex-user/users/member/achievements",
  USER_GROWTH_HISTORIES: "/phemex-user/users/member/growth-point-txns",
  PROFIT_EMAIL_NOTIFICATION: "/phemex-wm/wm-settings/profit-email-notification",
  DELETE_APPLY: "/phemex-user/users/delete-account/apply",
  DELETE_SAVE_ASSET: "/phemex-user/users/delete-account/save-asset-decision",
  DELETE_CONFIRM: "/phemex-user/users/delete-account/confirm",
  USER_AVATAR: "/phemex-user/users/avatars",
  USERS_AUTH_LOGIN: "/phemex-user/users/auth/login",
  CONFIRM_USERS_AUTH_LOGIN: "/phemex-user/users/auth/confirm/login",
  OAUTH_TRADINGVIEW_AUTHORIZE: "/phemex-oauth2/oauth2/user/authorize",
  OAUTH_LIST: "/phemex-oauth2/oauth2/user/list",
  OAUTH_INVALID: "/phemex-oauth2/oauth2/user/invalid",
  GET_TWITTER_CLIENT_ID: "/phemex-user/public/cfg/users/auth/client-id",
  USER_SOCIAL_AVATAR:
    "/phemex-user/public/cfg/users/auth/refresh-social-avatar",
  USER_QR_LOGIN: "/phemex-user/users/public/qr/login",
  USER_QR_CHECK: "/phemex-user/users/public/qr/login/check",
  USER_QR_CONFIRM_LOGIN: "/phemex-user/users/qr/confirm/login",
  USER_PROFILE_META: "/phemex-user/users/profile",
  TELEGRAM_BIND_STATUS: "/phemex-user/users/social/query",
  TELEGRAM_BIND: "/phemex-user/users/social/bind",
  TELEGRAM_UNBIND: "/phemex-user/users/social/unbind",
  TELEGRAM_BOT_INFO: "/phemex-user/public/social/queryName",
  WALLETS: "/phemex-user/wallets",
  USER_WALLET_LIST: "/phemex-user/wallets/userWalletList",
  FEE_RATE_CONTRACT: "/phemex-user/fee-rate/contract",
  USER_CHILDREN: "/phemex-user/users/children",
  USER_CHILDREN_V2: "/phemex-user/users/v2/children",
  USER_CHILDREN_UTA: "/phemex-user/users/uta-children",
  USER_SWITCH: "/phemex-user/users/switch",
  USER_SWITCHBACK: "/phemex-user/users/switchBack",
  SWITCH_ACCOUNT: "/phemex-user/users/children/basic/info",
  CHILDREN_ASSETS: "/phemex-user/users/children/assets",
  CHILDREN_ASSETS_V2: "/phemex-user/users/v2/children/assets",
  CHILDREN_ASSETS_UTA: "/phemex-user/users/children/uta-assets",
  SUB_ACCOUNT_SWITCH: "/phemex-user/users/switch",
  MASTER_ACCOUNT_SWITCHBACK: "/phemex-user/users/switchBack",
  REFERRALS: "/phemex-kol-global/agent/apply",
  AGENT_APPLY_INFO: "/phemex-kol-global/agent/apply/info",
  WALLETS_TRANSFERIN: "/phemex-user/wallets/transferIn",
  TRANSFER_OUT: "/phemex-user/wallets/transferOut",
  UPLOAD_AVATAR: "/phemex-user/users/uploadAvatarImage",
  SPOT_MAIN_ACCOUNT_TO_SUB_ACCOUNT: "/exchanger-core/wallets/spot/transfer-out",
  SPOT_SUB_ACCOUNT_TO_SUB_ACCOUNT:
    "/exchanger-core/wallets/spot/sub2sub-transfer",
  SPOT_SUB_ACCOUNT_TO_MAIN_ACCOUNT_: "/exchanger-core/wallets/spot/transfer-in",
  CONTRACT_MAIN_ACCOUNT_TO_SUB_ACCOUNT:
    "/exchanger-core/wallets/contract/transfer-out",
  CONTRACT_SUB_ACCOUNT_TO_SUB_ACCOUNT:
    "/exchanger-core/wallets/contract/sub2sub-transfer",
  CONTRACT_SUB_ACCOUNT_TO_MAIN_ACCOUNT:
    "/exchanger-core/wallets/contract/transfer-in",
  ACCOUNT_TRANSFER_MAIN_SUB:
    "/exchanger-core/wallets/account/main-sub-transfer",
  KEYS_LIST: "/phemex-user/users/keys/list",
  KEYS_CREATE: "/phemex-user/users/keys/create",
  KEYS_DELETE: "/phemex-user/users/keys/delete",
  KEYS_DETAIL: "/phemex-user/users/keys/query",
  KEYS_UPDATE: "/phemex-user/users/keys/modify",
  KEYS_REFRESH: "/phemex-user/users/keys/refresh",
  KEYS_SYNC_TO_SUB_ACCOUNTS: "/phemex-user/users/keys/sync",
  PERSONAL_RECOMMEND_INFO: "/phemex-user/referrals/summary",
  RECOMMEND_RECORD_LIST: "/phemex-user/referrals/v2/bonus",
  BASE_MEMBERSHIP_INFO: "/phemex-user/membership/baseMembershipInfo",
  UPDATE_AUTORENEW_CONFIG: "/phemex-user/membership/updateAutoRenewConfig",
  GROWTH_CONFIG: "/phemex-user/users/public/member/info/growth-config",
  GROWTH_TASKS: "/phemex-user/users/member/growth-tasks",
  REFERRALS_COUNTRY: "/phemex-user/public/regions",
  PRIVACY_LANG: "/phemex-user/public/compliance/privacy/lang",
  ADD_GROUP_CLICK_CNT: "/phemex-kol-global/public/agent/group/click",
  RANK_LIST: "/phemex-activity/activity/referral/rankList",
  RANK_LIST_AUGUST: "/phemex-activity/activity/referral/v2/rankList",
  MARGIN_TRANSFER_LIST: "/phemex-user/margins/transfer",
  MARGIN: "/phemex-user/margins/v2",
  INDEX_QUOTE: "/phemex-user/margins/v2/quote",
  EARLY_REDEMPTION: "/phemex-wm/wm-order/timed-redemption",
  EARLY_REDEMPTION_APY_RATE: "/phemex-wm/public/product/redeem-rate",
  DEPOSIT_LIST: "/phemex-deposit/app/deposits/depositList",
  DEPOSIT_NETWORKS_LIST: "/phemex-deposit/app/deposits/network/support/list",
  DEPOSIT_ADDRESS: "/phemex-user/wallets/v2/depositAddress",
  DEPOSIT_ADDRESS_V3: "/phemex-user/wallets/v3/depositAddress",
  DEPOSIT_SORT_LIST:
    "/phemex-withdraw/withdraw/asset/info/public/currency/prop",
  WITHDRAW_LIST: "/phemex-user/wallets/withdrawList",
  WITHDRAW_FEE_INFO:
    "/phemex-withdraw/withdraw/asset/info/public/balance/fee/query",
  WITHDRAW_FEE_INFO_V2:
    "/phemex-withdraw/withdraw/asset/info/public/balance/fee/v2/query",
  WITHDRAW_KYC_LIMIT: "/phemex-withdraw/wallets/app/getWithdrawKycLimit",
  WITHDRAW_SORT_LIST: "/phemex-withdraw/wallets/app/currency/hot/list",
  WITHDRAW_KYC_LIMIT_CHECK: "/phemex-withdraw/wallets/app/kyc-limit/check",
  CANCEL_WITHDRAW: "/phemex-withdraw/wallets/app/cancelWithdraw",
  CREATE_WITHDRAW: "/phemex-withdraw/wallets/app/createWithdraw",
  CREATE_WITHDRAWADDRESS: "/phemex-user/wallets/createWithdrawAddress",
  WITHDRAWAL_CONFIRM: "/phemex-user/wallets/confirm/withdraw",
  VALIDATE_ADDRESS: "/phemex-withdraw/wallets/app/validate-address",
  SUCCESS_WITHDRAW_ORDER: "/phemex-withdraw/wallets/app/succeed",
  SUCCESS_DEPOSIT_ORDER: "/phemex-deposit/app/deposits/succeed",
  DEPOSITS_CHECK_TO_CONTRACT: "/phemex-deposit/app/deposits/contract/check",
  DEPOSITS_ACCOUNT_UPDATE: "/phemex-deposit/app/deposits/account/update",
  ASSETS_ANNOUNCEMENT: "/phemex-withdraw/app/banner/query",
  WITHDRAW_LIMIT_P2P:
    "/phemex-withdraw/withdraw/asset/info/public/p2p/withdraw/limit/by/user",
  WITHDRAW_P2P_FROZEN:
    "/phemex-withdraw/withdraw/asset/info/public/p2p/withdraw/frozen/query",
  WITHDRAW_INTERNAL_ADDRESS_VALIDATE:
    "/phemex-withdraw/wallets/inside/address/validate",
  WITHDRAW_INTERNAL_ADDRESS: "/phemex-withdraw/wallets/inside/address",
  WITHDRAW_INTERNAL_ADDRESS_CREATE: "/phemex-withdraw/wallets/inside/create",
  WITHDRAW_INTERNAL_ADDRESS_WITHDRAW_LIST:
    "/phemex-withdraw/wallets/app/withdrawList",
  WITHDRAW_INTERNAL_ADDRESS_INSIDE_PROP: "/phemex-withdraw/wallets/inside/prop",
  WALLET_DETAIL: "/phemex-user/wallets/spot/detail",
  TRADE_ACCOUNT_DETAIL_V2: "/phemex-user/wallets/v2/tradeAccountDetail",
  PNL_POSITION: "/phemex-user/margins/data/pnl/position",
  PNL_POSITION_V2: "/phemex-user/margins/data/v2/pnl/position",
  PNL_ACCOUNT: "/phemex-user/margins/data/pnl/account",
  PNL_ACCOUNT_V2: "/phemex-user/margins/data/v2/pnl/account",
  CLOSED_POSITIONS: "/phemex-user/order/closedPositionList",
  CLOSED_POSITIONS_V2: "/phemex-user/order/v2/closedPositionList",
  EXCHANGE_FEE_LIST: "/phemex-user/order/exchangeFeeList",
  EXCHANGE_FEE_LIST_V2: "/phemex-user/order/v2/exchangeFeeList",
  FUNDING_FEE_LIST: "/phemex-user/order/fundingList",
  FUNDING_FEE_LIST_V2: "/phemex-user/order/v2/fundingList",
  ORDER_LIST: "/phemex-user/order/orderList",
  ORDER_LIST_V2: "/phemex-user/order/v2/orderList",
  TRADE_LIST: "/phemex-user/order/tradingList",
  TRADE_LIST_V2: "/phemex-user/order/v2/tradingList",
  SPOT_ORDER_LIST: "/phemex-user/spot/order",
  SPOT_TRADE_LIST: "/phemex-user/spot/order/trades",
  SPOT_PNL_DATA: "/phemex-user/spot/data/pnl/graph-v2",
  SPOT_CURRENT_PNL: "/phemex-user/spot/data/assets",
  CHAIN_SETTINGS: "/phemex-user/public/cfg/chain-settings",
  ASSETS_GRAPH: "./phemex-user/users/assets/graph",
  CONTRACT_INTRODUCTION: "/phemex-user/public/instruments/contractIntroduction",
  INSURANCE_MAP: "/phemex-user/public/insurance/insuranceMap",
  INSURANCE_LIST: "/phemex-user/public/insurance/insuranceList",
  INSURANCE_LIST_V2: "/phemex-user/public/insurance/v2/insuranceList",
  FUNDING_RATE_LIST: "/phemex-user/public/cfg/fundingRateList",
  FUNDING_RATE_DATE_ALL: "/phemex-user/public/cfg/fundingRates/all",
  CONTRACT_TRANSFER_CURRENCIES: "/public/supported-currencies",
  CONTRACT_CONVERT:
    "/exchanger-core/wallets/contract/transfer-convert-transfer",
  SHARE_TIMES: "/phemex-user/membership/availablePresentQuantity",
  SHARE_HISTORY_LIST: "/phemex-user/membership/listPresentHistory",
  SHARE: "/phemex-user/membership/share",
  RECEIVE_LIST: "/phemex-user/membership/availableMembershipsFromPresent",
  RECEIVE: "/phemex-user/membership/drawMembershipFromPresent",
  COMPLETE_TASK: "/phemex-user/membership/completeTask",
  PREMIUM_LIST: "/phemex-marketing/premium/template",
  USER_TASKS: "/phemex-user/membership/userTasks",
  MEMBERSHIP_PURCHASE_PLANS:
    "/phemex-user/membership/view/membershipPurchasePlans",
  MEMBERSHIP_PURCHASE: "/phemex-user/membership/purchase",
  SUPPORT_CURRENCY: "/phemex-user/membership/view/membershipConfig",
  USER_KYC_INFO: "/phemex-user/membership/user-kyc-info",
  UPDATE_PROFILE: "/phemex-user/users/updateProfile",
  TASKS_LIST: "/phemex-user/tasks/list",
  USER_CHANGE_PASSWORD: "/phemex-user/users/change/password",
  USER_OTP: "/phemex-user/users/otp",
  OTP_BIND: "/phemex-user/users/otp/bind",
  OTP_CONFIRMBIND: "/phemex-user/users/otp/confirmBind",
  OTP_CONFIRMUNBIND: "/phemex-user/users/otp/confirmUnbind",
  OTP_UNBIND: "/phemex-user/users/otp/unbind",
  CHILDREN_EMAIL: "/phemex-user/users/children/email",
  PUBLIC_MISC: "/phemex-user/public/misc",
  GENERAL_TICKLING: "/phemex-activity/general/tickling",
  UPLOAD_IMAGE: "/phemex-activity/s3/image",
  WALLETS_APP_PRE_CHECK: "/phemex-withdraw/wallets/app/pre-check",
  DOWNLOAD_CONTRACT_ORDER: "/phemex-user/order/download/orderList",
  DOWNLOAD_CONTRACT_ORDER_V2: "/phemex-user/order/v2/download/orderList",
  DOWNLOAD_CONTRACT_TRADE: "/phemex-user/order/download/tradingList",
  DOWNLOAD_CONTRACT_TRADE_V2: "/phemex-user/order/v2/download/tradingList",
  DOWNLOAD_SPOT_ORDER: "/phemex-user/spot/download/order",
  DOWNLOAD_SPOT_TRADES: "/phemex-user/spot/download/trades",
  DOWNLOAD_WALLET_DETAILS: "/phemex-user/wallets/spot/download/detail",
  DOWNLOAD_DEPOSIT: "/phemex-user/wallets/download/depositList",
  DOWNLOAD_WITHDRAW: "/phemex-user/wallets/download/withdrawList",
  BUY_CRYPTO_PLACE_ORDER: "/phemex-user/fiatPayment/createPaymentOrder",
  SUPPORTED_CONFIG: "/phemex-user/fiatPayment/view/supportedConfig",
  SMART_PRICING: "/phemex-user/fiatPayment/smartPricing",
  SIMPLEX_PRE_ORDER_INFO: "/phemex-user/fiatPayment/simplex/preOrderInfo",
  BUY_CRYPTO_ORDER_HISTORY: "/phemex-user/fiatPayment/orders",
  USER_CPFS: "/phemex-user/users/cpfs",
  BUY_CRYPTO_BANNER: "/phemex-uni-trade/banner/public/common-banners",
  BUY_CRYPTO_OTC_LEGEND_HISTORY:
    "/phemex-uni-trade/buy-crypto/otc-trade-req/list",
  B2C_ORDERS: "/phemex-uni-trade/buy-crypto/b2c/order/list",
  PAYBIS_ORDERS: "/phemex-uni-trade/buy-crypto/inst/agent/order/list",
  B2C_BANK_CARD_LIST: "/phemex-uni-trade/channel/bank-card/list",
  DELETE_B2C_BANK_CARD: "/phemex-uni-trade/channel/bank-card/remove",
  B2C_BANK_CARD: "/phemex-uni-trade/channel/bank-card",
  B2C_BANK_CARD_SET_DEFAULT: "/phemex-uni-trade/channel/bank-card/default",
  B2C_PLACE_ORDER: "/phemex-uni-trade/buy-crypto/b2c/place-order",
  PAYBIS_PLACE_ORDER: "/phemex-uni-trade/buy-crypto/inst/agent/place-order",
  B2C_BIND_CARD_PLACE_ORDER:
    "/phemex-uni-trade/buy-crypto/b2c/place-order-for-bind-card",
  B2C_KYC_VALIDATE: "/phemex-uni-trade/buy-crypto/b2c/kyc-verify",
  B2C_CREDIT_ORDER_FAILED:
    "/phemex-uni-trade/buy-crypto/b2c/credit/failed-set-order",
  B2C_FIAT_BANNER_LIST: "/phemex-uni-trade/general/banner/query_list",
  EXCHANGE_BONUS: "/exchange/bonus",
  EXCHANGE_BONUS_IP: "/phemex-common-service/public/geo/location",
  HASH_CLIENT_ID: "/phemex-user/users/hash-id",
  SUMMARY: "/phemex-activity/public/data/competition/summary",
  TEAM_DETAIL_INFO:
    "/phemex-activity/public/data/competition/team-detail/team-info",
  TEAM_DETAIL_USER_LIST:
    "/phemex-activity/public/md/competition/team-detail/user-list",
  TEAM_JOIN: "/phemex-activity/competition/team/join",
  USER_INFO: "/phemex-activity/competition/self",
  TEAM_LEADER_APPLICATION:
    "/phemex-activity/competition/teamLeader/application",
  ROI_RANK: "/phemex-activity/competition/public/user/roi/rank",
  PUB_VIP_APPLY: "/phemex-user/public/vip-mm/member/apply",
  VIP_APPLY: "/phemex-user/vip-mm/member/apply",
  VIP_CONFIG: "/phemex-user/public/cfg/vip-mm/vip/configs",
  DMM_CONFIG: "/phemex-user/public/cfg/vip-mm/mm/configs",
  VIP_LEVEL_LIST: "/phemex-user/public/vip-level/list",
  BIG_CLIENT_LIST: "/phemex-user/vip-mm/member/list",
  BIG_CLIENT_SELF: "/phemex-user/vip-mm/self",
  BIG_CLIENT_DOWNLOAD: "/phemex-user/vip-mm/details/download",
  APPLY_STATUS: "/phemex-user/vip-mm/member/apply/status",
  INVESTMENT_PRODUCT: "/phemex-wm/public/product/v2/on-sale",
  INVESTMENT_PRODUCT_ONLY: "/phemex-wm/public/product/on-sale-act-only",
  INVESTMENT_ACCOUNT_INFO: "/phemex-wm/account/v2",
  INVESTMENT_ORDER: "/phemex-wm/wm-order",
  INVESTMENT_ORDER_AUTORENEW: "/phemex-wm/wm-order/autoRenew",
  INVESTMENT_TRANSFER: "/phemex-wm/account/asset/transfer",
  INVESTMENT_BUY: "/phemex-wm/wm-order",
  INVESTMENT_JOURNAL: "/phemex-wm/account/journal",
  USER_LOCATION: "/phemex-user/users/location",
  PRODUCT_ACTIVITY: "/phemex-wm/public/product/activity",
  INVESTMENT_BONUS_HISTORY: "/phemex-wm/wm-order/bonus/order-list",
  INVESTMENT_BONUS_LIST: "/phemex-wm/account/bonus-list",
  ASSETS_ACCOUNT: "/phemex-wm/account/v3",
  ACCOUNT_ACTIVITY: "/phemex-wm/account/activity",
  BONUS_APPLY: "/phemex-activity/activity/apply",
  BONUS_BATCH_APPLY: "/phemex-activity/activity/batch/apply",
  BONUS_APPLY_RECORD: "/phemex-activity/activity/apply/record",
  BONUS_DETAIL: "/phemex-activity/public/data/activity/detail",
  BONUS_EFFECTIVE_TOP_UP: "/phemex-activity/bonus/effective-top-up",
  SUBMIT_TWITTER_INFO: "/phemex-activity/bonus/submit-twitter-info",
  TWITTER_PROCESS_STATUS: "/phemex-activity/bonus/twitter-process-status",
  REGISTER_VERIFIED: "/phemex-user/users/v2/confirm/registerWithToken",
  LOGIN_WITH_TOKEN: "/phemex-user/users/v2/confirm/loginWithToken",
  OTC_LEGEND_GEO: "/otc/legend/geo",
  OTC_LEGEND_PARAMS: "/otc/legend/page-params",
  OTC_KYC_CHECK: "/otc/legend/check-and-sync",
  OTC_KYC_APPROVED_STATUS: "/otc/legend/query-kyc-approved",
  OTC_KYC_APPROVED_STATUS_V2: "/otc/legend/query-kyc-approved/v2",
  OTC_DEPOSIT_ADDRESS: "/otc/legend/deposit-address",
  OTC_LEGEND_QUESTIONNAIRE: "/otc/legend/query-questionnaire",
  SUBMIT_OTC_LEGEND_QUESTIONNAIRE: "/otc/legend/check-and-sync/v2",
  KYC_SUMMARY: "/phemex-kyc/kyc/summary",
  KYC_COUNTRIES: "/phemex-kyc/kyc/base-kyc/country-list",
  KYC_COUNTRY_DOCUMENT_TYPES: "/phemex-kyc/kyc/base-kyc/support-document",
  KYC_BASIC_INFO: "/phemex-kyc/kyc/base-kyc/query",
  KYC_BASIC_SUBMIT: "/phemex-kyc/kyc/base-kyc/submit",
  BASE_KYC_CHECK: "/phemex-kyc/kyc/base-kyc/check",
  GET_BONUS: "/phemex-activity/general/public/val",
  GET_ALL_KYC_SUMMAY: "/phemex-kyc/kyc/summary-all",
  KYC_COUNTRY_REGIONS: "/phemex-kyc/public/data/country-regions",
  BASIC_KYC_AMEND: "/phemex-kyc/kyc/basic-kyc/amend",
  KYC_CHECK_ENABLE: "/phemex-kyc/kyc/jumio/check-enable",
  KYC_JUMIO_TOKEN: "/phemex-kyc/kyc/jumio/token",
  KYC_JUMIO_CHECK: "/phemex-kyc/kyc/jumio/check",
  LEARN_LESSON_OVERVIEW_LOGOUT:
    "/phemex-activity/public/data/learn-and-earn/course/overview",
  LEARN_LESSON_OVERVIEW_LOGIN:
    "/phemex-activity/learn-and-earn/course/overview",
  LEARN_COURSE_DETAIL_LOGOUT:
    "/phemex-activity/public/data/learn-and-earn/course/detail",
  LEARN_COURSE_DETAIL_LOGIN: "/phemex-activity/learn-and-earn/course/detail",
  LEARN_QUIZ_LOGOUT: "/phemex-activity/public/data/learn-and-earn/quiz",
  LEARN_QUIZ_LOGIN: "/phemex-activity/learn-and-earn/quiz",
  LEARN_QUIZ_ANSWER: "/phemex-activity/learn-and-earn/quiz/answer",
  LEARN_QUIZ_COMPLETE: "/phemex-activity/learn-and-earn/quiz/complete",
  LEARN_QUIZ_RESULT: "/phemex-activity/learn-and-earn/learn-task-result",
  LEARN_QUIZ_ANSWER_ALL:
    "/phemex-activity/public/data/learn-and-earn/quiz-answer-all",
  LEARN_QUIZ_PERMIT: "/phemex-activity/public/learn-and-earn/permit",
  LEARN_BENEFIT: "/phemex-activity/public/learn-and-earn/benefit",
  LEARN_AND_EARN_LESSON_COUNT:
    "/phemex-activity/public/data/learn-and-earn/lesson/count",
  LEARN_AND_EARN_USER_LESSON_COUNT:
    "/phemex-activity/learn-and-earn/lesson/count",
  PUBLIC_OTP_RESET: "/phemex-user/public/users/otp/reset",
  PUBLIC_OTP_CONFIRMRESET: "/phemex-user/public/users/otp/confirmReset",
  PUBLIC_OTP_RESET_QUESTIONS: "/phemex-user/public/users/otp/reset/questions",
  PUBLIC_OTP_RESET_QUESTIONS_JUDGE:
    "/phemex-user/public/users/otp/reset/questions/judge",
  PUBLIC_OTP_RESET_AUDIT: "/phemex-user/public/users/otp/reset/audit",
  OTP_RESET: "/phemex-user/users/otp/reset",
  OTP_CONFIRMRESET: "/phemex-user/users/otp/confirmReset",
  OTP_RESET_QUESTIONS: "/phemex-user/users/otp/reset/questions",
  OTP_RESET_QUESTIONS_JUDGE: "/phemex-user/users/otp/reset/questions/judge",
  OTP_RESET_AUDIT: "/phemex-user/users/otp/reset/audit",
  PUBLIC_UPDATE_IMAGE: "/phemex-activity/public/s3/image",
  PUBLIC_UPDATE_PRESIGN: "/phemex-user/public/users/otp/reset/presign/upload",
  PUBLIC_UPDATE_PRESIGN_DOWNLOAD:
    "/phemex-user/public/users/otp/reset/presign/download",
  OFFLINE_DOWNLOAD_CREATE: "/phemex-user/offline-download/create",
  OFFLINE_DOWNLOAD_QUERY: "/phemex-user/offline-download/query",
  OFFLINE_DOWNLOAD_LIMIT_CHECK: "/phemex-user/offline-download/limit-check",
  KOL_CLIENT_EXPORT_QUERY: "/phemex-kol-global/client/export/list",
  KOL_CLIENT_EXPORT_CSV: "/phemex-kol-global/client/export/download",
  KOL_CLIENT_EXPORT_APPLY: "/phemex-kol-global/client/export/apply",
  MO_COMPETITION_INFO: "/phemex-activity/public/data/competition/info",
  MO_COMPETITION_JOIN: "/phemex-activity/competition/members/join",
  MO_COMPETITION_SELF: "/phemex-activity/competition/members/self",
  MO_COMPETITION_RANK: "/phemex-activity/public/data/competition/members/sort",
  CONVERSION_SUPPORTED_CURRENCIES:
    "/exchanger-core/wallets/public/data/conversion/supported-currencies",
  CONVERSION_QUOTE: "/exchanger-core/wallets/v3/conversion/quote",
  CONVERSION: "/exchanger-core/wallets/v3/conversion",
  CONVERSIONS_LIST: "/exchanger-core/wallets/v1/conversions",
  TRANSFER: "/exchanger-core/wallets/v3/transfer",
  CONVERT_UTA: "/exchanger-core/wallets/universal/convert",
  ACTIVITY_COMPETITION_INFO: "/phemex-activity/public/data/competition/info",
  ACTIVITY_COMPETITION_CREATE_TEAM: "/phemex-activity/competition/teams/create",
  ACTIVITY_COMPETITION_JOIN: "/phemex-activity/competition/members/join",
  ACTIVITY_COMPETITION_INDIVIDUAL_RANK:
    "/phemex-activity/public/data/competition/members/sort",
  ACTIVITY_COMPETITION_TEAM_DETAIL:
    "/phemex-activity/public/data/competition/team",
  ACTIVITY_COMPETITION_TEAM_RANK:
    "/phemex-activity/public/md/competition/teams/list/sort",
  ACTIVITY_COMPETITION_SELF: "/phemex-activity/competition/members/self",
  CROSS_SITE_TRANSFER_SUPPORTED_CURRENCIES:
    "/exchanger-core/cross-site-transfer/supported-currencies",
  CROSS_SITE_TRANSFER_OUT: "/exchanger-core/cross-site-transfer/transfer-out",
  CROSS_SITE_CONNECTION_USER: "/phemex-user/cross-site/connection-user",
  CROSS_SITE_QUICK_REGISTER: "/phemex-user/users/cross-site/quick-register",
  CROSS_SITE_USERS_CONFIRM_LOGIN: "/phemex-user/users/cross-site/confirm/login",
  CROSS_SITE_USER_SIGNUP: "/phemex-user/users/cross-site/register",
  KYC_LOTTERY_PRIZE_POOL: "/phemex-activity/public/data/kyc-lottery/prizes",
  KYC_LOTTERY_INFO: "/phemex-activity/public/data/kyc-lottery/activity-info",
  KYC_LOTTERY_DRAW: "/phemex-activity/kyc-lottery/lottery",
  KYC_LOTTERY_CLAIM: "/phemex-activity/kyc-lottery/claim",
  KYC_LOTTERY_CLAIM_RECORDS: "/phemex-activity/kyc-lottery/claim-record",
  KYC_LOTTERY_MY_TO_CLAIM_PRIZES: "/phemex-activity/kyc-lottery/my-prizes",
  KYC_LOTTERY_TODAY_DRAW_RECORDS:
    "/phemex-activity/kyc-lottery/lottery-record/list",
  KYC_LOTTERY_CHECK_CLAIM_DISCOUNT:
    "/phemex-activity/kyc-lottery/check-claim-contract-discount",
  USER_TAG: "/phemex-client-data/users/tag/query",
  USERS_ANTI_PHISHING_CODE: "/phemex-user/users/fishCode",
  USERS_ANTI_PHISHING_CODE_SUBMIT: "/phemex-user/users/fishCode/submit",
  LAUNCHPOOL_PUBLIC_POOL: "/launchpool/public/pool",
  LAUNCHPOOL_PUBLIC_POOL_DETAIL: "/launchpool/public/pool/detail",
  LAUNCHPOOL_USER_POOL: "/launchpool/user/pool",
  LAUNCHPOOL_MYSELF_UNCLAIMED_REBATE: "/launchpool/user/unclaimed-rebate",
  LAUNCHPOOL_REBATE_CLAIM: "/launchpool/rebate/claim",
  LAUNCHPOOL_REBATE_STAT: "/launchpool/rebate/stat",
  LAUNCHPOOL_REBATE_LIST: "/launchpool/rebate/list",
  LAUNCHPOOL_REBATE_CLAIMED_LIST: "/launchpool/rebate/claimed-list",
  LAUNCHPOOL_PURCHASE: "/launchpool/purchase",
  LAUNCHPOOL_REDEMPTION: "/launchpool/redemption",
  LAUNCHPOOL_FUNDS: "/launchpool/funds",
  LAUNCHPOOL_POOL_DESC: "/launchpool/public/pool/desc",
  LAUNCHPOOL_REBATE_COUNTDOWN: "/launchpool/rebate/countdown",
  TRADE_MINING_INFO: "/phemex-activity/public/data/trade-mining/minings",
  TRADE_MINING_MISSION_LIST:
    "/phemex-activity/public/data/trade-mining/minings/missions",
  TRADE_MINING_USER_SCORE_INFO:
    "/phemex-activity/trade-mining/applications/scores",
  TRADE_MINING_USER_MISSION_INFO:
    "/phemex-activity/trade-mining/applications/missions",
  TRADE_MINING_APPLY: "/phemex-activity/trade-mining/applications",
  TRADE_MINING_UPLOAD_TWITTER_SCREENSHOT:
    "/phemex-activity/trade-mining/twitter-audit",
  LAUNCHPAD_PROJECT_SUMMARY_PUBLIC: "/launchpad/public/data/project/summary",
  LAUNCHPAD_PROJECT_SUMMARY_LOGIN: "/launchpad/project/summary",
  LAUNCHPAD_PROJECT_LIST_PUBLIC: "/launchpad/public/data/groups",
  LAUNCHPAD_PROJECT_LIST_LOGIN: "/launchpad/groups",
  LAUNCHPAD_PROJECT_DETAIL_PUBLIC: "/launchpad/public/data/group/details",
  LAUNCHPAD_PROJECT_DETAIL_LOGIN: "/launchpad/group/details",
  LAUNCHPAD_PROJECT_ASSETS: "/launchpad/user/group-asset",
  LAUNCHPAD_PROJECT_SUBSCRIBE: "/launchpad/subscribe",
  LAUNCHPAD_PROJECT_REDEEM: "/launchpad/redeem",
  LAUNCHPAD_PROJECT_SUB_HISTORY: "/launchpad/user/sub-history",
  COIN_INFO_LIST: "/phemex-common-service/public/data/coin/info/list",
  CLIP_COIN_ACTIVITY_INFO: "/phemex-activity/public/data/coin/activity/detail",
  CLIP_COIN_USER_ACTIVITY_APPLY_STATUS:
    "/phemex-activity/coin/activity/apply/status",
  CLIP_COIN_APPLY_ACTIVITY: "/phemex-activity/coin/activity/apply",
  CLIP_COIN_APPLY_ACTIVITY_RESULT:
    "/phemex-activity/coin/activity/apply/result",
  CLIP_COIN_ACTIVITY_APPLY_HISTORY:
    "/phemex-activity/coin/activity/apply/history",
  CLIP_COIN_CLAIM_REWARD: "/phemex-activity/coin/activity/claim",
  CLIP_COIN_ACTIVITY_RANK_LOGOUT:
    "/phemex-activity/public/data/coin/activity/rank",
  CLIP_COIN_ACTIVITY_RANK_LOGIN: "/phemex-activity/coin/activity/rank",
  CLIP_COIN_GET_BARRAGERS: "/phemex-activity/public/data/coin/activity/message",
  CLIP_COIN_SEND_BARRAGER: "/phemex-activity/coin/activity/message/submit",
  PRODUCTS_SCALE: "/public/index-products",
  PREMIUM_PRIVILEGE_HISTORY_LIST: "/phemex/marketing/privilege/list",
  PREMIUM_LOTTERY: "/phemex/marketing/privilege/lottery",
  PREMIUM_QUALIFICATION_LIST: "/phemex/marketing/qualification/list",
  PREMIUM_PRIVILEGE_DETAILS: "/phemex/marketing/privilege/details",
  PREMIUM_PRIVILEGE_THIRDPRIVILEGEINFO:
    "/phemex/marketing/privilege/thirdPrivilegeInfo",
  PREMIUM_USER_MEMBER: "/phemex-user/users/member",
  PREMIUM_GROWTH_CONFIG: "/phemex-user/users/public/member/info/growth-config",
  MEMBER_IS_PREMIUM: "/phemex-user/users/member/is-premium",
  MEMBER_STAGE: "/phemex-user/users/public/member/stage",
  PREMIUM_PRIVILEGE_EXCHANEGE: "/phemex/marketing/privilege/exchange",
  SPOT_WALLET_ASSETS_TRADING_FEE_RATE: "/spot-wallet-assets/trading-fee-rate",
  PRIVACY_COIN: "/phemex-user/public/compliance/privacy/coin",
  PRODUCTS_COIN_INFO: "/phemex-common-service/public/data/coin/info",
  FAVORITE_LIST: "/phemex-user/users/favorites/list",
  ADD_FAVORITE: "/phemex-user/users/favorites",
  DEL_FAVORITE: "/phemex-user/users/favorites",
  CATEGORY_LIST: "/phemex-common-service/public/data/category/list",
  FAVORITES_MERGE: "/phemex-user/users/favorites/merge",
  COIN_BASIC: "/phemex-common-service/public/data/coin/basic",
  EARN_CRYPTO_ACCOUNT_OVERVIEW: "/phemex-wm/account/v3",
  EARN_CRYPTO_RECOMMEND: "/phemex-wm/public/product/recommend",
  EARN_CRYPTO_PRODUCT_LIST: "/phemex-wm/public/product/v3/on-sale",
  EARN_CRYPTO_PRODUCT_LIST_NEW: "/phemex-wm/public/web/diversify-your-earnings",
  EARN_CRYPTO_PRODUCT_SELECT: "/phemex-wm/public/product/select",
  EARN_CRYPTO_AUTO_MATIC: "/phemex-wm/account/asset/config",
  EARN_CRYPTO_NEW_USER: "/phemex-wm/account/is-new-user",
  INVESTMENT_ACCOUNT_LIST: "/phemex-wm/account/v3",
  INVESTMENT_MY_EARNINGS_LIST: "/phemex-wm/wm-order/v2/active",
  INVESTMENT_ORDER_HISTORY_LIST: "/phemex-wm/wm-order/v2/history",
  INVESTMENT_SETTLEMENT_HISTORY_LIST: "/phemex-wm/wm-order/v2/settlement",
  INVESTMENT_TIMED_REDEMPTION: "/phemex-wm/wm-order/timed-redemption",
  C2C_CONFIG: "/phemex-uni-trade/public/data/config",
  C2C_ADVERTISE_UPDATE: "/phemex-uni-trade/delegate-order",
  C2C_ADVERTISE: "/phemex-uni-trade/delegate-order",
  C2C_ADVERTISE_MAKER_LIST: "/phemex-uni-trade/delegate-order/maker-list",
  C2C_ADVERTISE_STATUS: "/phemex-uni-trade/delegate-order/status",
  C2C_QUERY_ORDERS: "/phemex-uni-trade/order",
  C2C_QUERY_ALL_ORDERS: "/phemex-uni-trade/order/status-mutually-exclusive",
  C2C_QUERY_AD_DETAIL: "/phemex-uni-trade/delegate-order/detail",
  C2C_CAROUSEL: "/phemex-uni-trade/banner/p2p-banner-list/query",
  C2C_QUERY_TRADING_ADS:
    "/phemex-uni-trade/delegate-order/public/trading-ad-list",
  C2C_QUERY_MAKER_TRADING_ADS:
    "/phemex-uni-trade/delegate-order/public/maker-trading-ad-list",
  C2C_QUERY_MAKER_FEATURE:
    "/phemex-uni-trade/delegate-order/public/maker-feature",
  C2C_QUERY_USER_DEFAULT_BEHAVIOR:
    "/phemex-uni-trade/delegate-order/public/user-default-behavior",
  C2C_QUERY_USER_FEATURE: "/phemex-uni-trade/delegate-order/maker-feature",
  C2C_CREATE_ORDER: "/phemex-uni-trade/order",
  C2C_ORDER_DETAIL_BY_ID: "/phemex-uni-trade/order/id",
  C2C_ORDER_PAYMENT_METHOD: "/phemex-uni-trade/order/payment-method",
  C2C_CANCEL_ORDER: "/phemex-uni-trade/order/cancel",
  C2C_ORDER_SELLER_CONFIRM: "/phemex-uni-trade/order/transfer/confirm",
  C2C_ORDER_BUYER_CONFIRM: "/phemex-uni-trade/order/payment/confirm",
  C2C_ORDER_COMMENT: "/phemex-uni-trade/order/comment",
  C2C_ORDER_APPEAL: "/phemex-uni-trade/order/appeal",
  C2C_QUERY_FAST_ADVERTISE: "/phemex-uni-trade/delegate-order/match-list",
  C2C_QUERY_PRICE_BY_CRYPTO: "/phemex-uni-trade/pricing/public/digital-fiat",
  C2C_ORDER_APPEAL_PROVE: "/phemex-uni-trade/order/appeal/prove",
  C2C_ORDER_APPEAL_DELETE: "/phemex-uni-trade/order/appeal",
  C2C_ORDER_APPEAL_WORKFLOW: "/phemex-uni-trade/order/appeal/work-flow",
  C2C_CANCEL_ORDER_CS: "/phemex-uni-trade/order/cancel-by-applicant",
  C2C_ORDER_APPEAL_DETAIL: "/phemex-uni-trade/order/appeal/detail",
  C2C_QUERY_BEST_PRICE:
    "/phemex-uni-trade/pricing/public/delegate-order/best-price",
  C2C_QUERY_USER_PAYMENT_METHODS:
    "/phemex-merchant-app/user/payment-method/query",
  C2C_CREATE_PAYMENT_METHOD: "/phemex-merchant-app/user/payment-method/add",
  C2C_UPDATE_PAYMENT_METHOD: "/phemex-merchant-app/user/payment-method/update",
  C2C_DELETE_PAYMENT_METHOD: "/phemex-merchant-app/user/payment-method/delete",
  C2C_QUERY_METHOD_TEMPLATE:
    "/phemex-merchant-app/c2c/merchant/query-payment-templates",
  C2C_QUERY_METHOD_TEMPLATE_PUBLIC:
    "/phemex-merchant-app/c2c/merchant/public/query-payment-templates",
  C2C_QUERY_PERMISSION: "/phemex-merchant-app/c2c/query-permission",
  C2C_TO_MAKER_COMMENT: "/phemex-uni-trade/order/public/comment/maker-list",
  C2C_TO_USER_COMMENT: "/phemex-uni-trade/order/comment/maker-list",
  C2C_COMMENT_MAKER_LIST: "/phemex-unitrade-core/order/comment/maker-list",
  C2C_IM_CHAT_CHANNEL: "/phemex-uni-trade/c2c/im/chat/channel",
  C2C_IM_NOTIFY_CHANNEL: "/phemex-uni-trade/c2c/im/notify/channel",
  PREDICT_ACTIVITY_INFO:
    "/phemex-activity/public/data/prophecy/activity/config/query",
  PREDICT_ACTIVITY_BET: "/phemex-activity/prophecy/activity/record/add",
  PREDICT_ACTIVITY_USER_TODAY_RECORDS:
    "/phemex-activity/prophecy/activity/record/query",
  PREDICT_ACTIVITY_USER_RECORDS:
    "/phemex-activity/prophecy/activity/my/record/query",
  PREDICT_ACTIVITY_NOTIFICATIONS:
    "/phemex-activity/public/md/prophecy/activity/record/mask",
  PUSH_DEVICE_UPDATE: "/phemex-activity/push-device/public/update",
  SPOT_FEE_CONFIG: "/phemex-account/public/data/users/fee-config",
  SPOT_PROFILE: "/phemex-account/users/vip/profile",
  USER_MEMBER_LEVEL: "/phemex-account/users/member/level",
  DASHBOARD_SUMMARY: "/phemex-kol-global/agent/dashboard/summary",
  DASHBOARD_REGISTER: "/phemex-kol-global/agent/dashboard/register",
  DASHBOARD_TUNNEL: "/phemex-kol-global/agent/dashboard/tunnel",
  DASHBOARD_TREND_CLIENT: "/phemex-kol-global/agent/dashboard/trend/client",
  DASHBOARD_TREND_AGENT: "/phemex-kol-global/agent/dashboard/trend/agent",
  DASHBOARD_TREND_TRADE: "/phemex-kol-global/agent/dashboard/trend/trade",
  DASHBOARD_TREND_REGISTER: "/phemex-kol-global/agent/dashboard/trend/register",
  DASHBOARD_TREND_MEMBERSHIP:
    "/phemex-kol-global/agent/dashboard/trend/membership",
  REBATE_DETAIL_LIST: "/phemex-kol-global/agent/commission/list",
  MEMBER_REBATE_LIST: "/phemex-kol-global/agent/commission/membership",
  USER_DETAIL_LIST: "/phemex-kol-global/agent/commission/userDetail",
  REBATE_RECORD_LIST: "/phemex-kol-global/agent/commission/recordDetail",
  AGENT_DETAIL_LIST: "/phemex-kol-global/agent/commission/agentDetail",
  AGENT_COMMISSION_RATE: "/phemex-kol-global/agent/commission/rule",
  ADD_GROUP: "/phemex-kol-global/agent/group/add",
  GROUP_LIST: "/phemex-kol-global/agent/group/list",
  GROUP_STATUS: "/phemex-kol-global/agent/group/status",
  USER_PROFILE: "/phemex-kol-global/agent/userProfile",
  SHORT_URL_LIST: "/phemex-kol-global/agent/shortUrl/list",
  SHORT_URL_CREATE: "/phemex-kol-global/agent/shortUrl/create",
  SHORT_URL_DETAIL: "/phemex-kol-global/agent/shortUrl/detail",
  BD_INFO: "/phemex-kol-global/agent/bdInfo",
  ALL_GROUP: "/phemex-kol-global/agent/allGroup",
  ALL_CURRENCY: "/phemex-kol-global/agent/allCurrency",
  AGENT_INFO: "/phemex-kol-global/agent/info",
  BALANCE: "/phemex-kol-global/agent/wallet/balance",
  WALLET_SUMMARY: "/phemex-kol-global/agent/wallet/summary",
  WITHDRAW_ALL: "/phemex-kol-global/agent/wallet/withdraw/all",
  WALLET_RECORD_LIST: "/phemex-kol-global/agent/wallet/record/list",
  WITHDRAW: "/phemex-kol-global/agent/wallet/withdraw",
  FOLLOW_TRADER: "/phemex-lb/user/follow",
  UNFOLLOW_TRADER: "/phemex-lb/user/unfollow",
  ME_SETTING: "/phemex-lb/user/preferences",
  TRADER_AVAILABLE_AVATARS: "/phemex-lb/user/avatars",
  USER_PNL_CHART: "/phemex-lb/public/data/user/pnl-chart",
  USER_PNL_RATE_CHART: "/phemex-lb/public/data/user/pnl-rate-chart",
  MY_FOLLOW_TRADERS: "/phemex-lb/v3/user/following",
  RECOMMEND_TRADERS: "/phemex-lb/public/data/v3/user/recommend",
  USER_RECOMMEND_TRADERS: "/phemex-lb/v3/user/recommend",
  TRADER_APPLICATION: "/phemex-lb/user/application",
  COPY_TRADE_ANNOUNCEMENT: "/phemex-lb/public/data/announcement",
  COPY_TRADE_SYS_CONFIG: "/phemex-lb/public/data/v3/sys/config",
  COPY_TRADE_TRANSFER_CURRENCIES:
    "/exchanger-core/public/data/copy-trade/transfer/currencies",
  CT_FOLLOWER_DETAIL: "/phemex-lb/v3/user",
  CT_FOLLOWER_POSITION_CURRENT: "/phemex-lb/public/data/position/current/v2",
  CT_FOLLOWER_POSITION_CURRENT_DETAIL:
    "/phemex-lb/public/data/position/operations/v2",
  CT_FOLLOWER_POSITION_HISTORY: "/phemex-lb/public/data/position/closed/v2",
  CT_FOLLOWER_POSITION_HISTORY_DETAIL:
    "/phemex-lb/public/data/position/operations/v2",
  CT_COPIER_ACCOUNT: "/phemex-lb/copier/v3/account",
  CT_COPIER_POSITION_CLOSED: "/phemex-lb/copier/position/closed/v2",
  CT_COPIER_POSITION_CURRENT: "/phemex-lb/copier/position/current/v2",
  CT_COPIER_MY_TRADER: "/phemex-lb/copier/v3/my-traders",
  CT_COPIER_UNCOPY: "/phemex-lb/user/uncopy",
  CT_COPIER_CLOSEPOSITION: "/phemex-lb/copier/close-copy-position",
  CT_TRADER_DETAIL: "/phemex-lb/v3/user/me",
  CT_TRADER_MY_COPIER: "/phemex-lb/trader/v3/my-copier/list",
  CT_TRADER_MY_COPIER_UNCOPY: "/phemex-lb/trader/uncopy",
  CT_TRADER_MY_COPIER_PROFIT: "/phemex-lb/trader/v3/my-profit/list",
  CT_TRADER_SETTINGS: "/phemex-lb/trader/v3/setting",
  CT_TRADER_EXIT: "/phemex-lb/trader/withdraw",
  CT_TRADER_POSITION_CURRENT: "/phemex-lb/position/my/current/v2",
  CT_TRADER_POSITION_CURRENT_DETAIL: "/phemex-lb/position/my/operations/v2",
  CT_TRADER_POSITION_HISTORY: "/phemex-lb/position/my/closed/v2",
  CT_TRADER_POSITION_HISTORY_DETAIL: "/phemex-lb/position/my/operations/v2",
  TRADER_DETAIL_PUBLIC: "/phemex-lb/public/data/v3/user",
  COPY_TRADE_ACCOUNT_TRANSFER: "/exchanger-core/wallets/account/transfer",
  COPY_TRADE_COPIER_SETTINGS: "/phemex-lb/copier/v3/setting",
  ALTER_MESSAGE_STATUS: "/phemex-lb/copier/alert-message",
  TRADER_COPYING_SYMBOLS: "/phemex-lb/trader/copying-symbols",
  COPY_TRADE_MY_RANKING: "/phemex-lb/trader/my-ranking",
  COPY_TRADE_USER_LEADERS: "/phemex-lb/public/data/user/leaders",
  CT_ACTIVITY_TASK_STATUS: "/phemex-lb/activity/2022-oct-tasks",
  CT_ACTIVITY_PARTICIPATION_LIST:
    "/phemex/marketing/public/md/scroll-privilege",
  CT_ACTIVITY_PRIVILEGE_LIST: "/phemex/marketing/privilege/condition/list",
  CT_ACTIVITY_SHARE: "/phemex-lb/activity/share",
  CT_COMMENTARY_UNREAD: "/phemex-lb-community/post/unread",
  CT_COMMENTARY_LIST: "/phemex-lb-community/post/list",
  CT_COMMENTARY_PUBLISH: "/phemex-lb-community/post/publish",
  CT_COMMENTARY_DELETE: "/phemex-lb-community/post/delete",
  CT_COMMENTARY_OPINION: "/phemex-lb-community/post/opinion",
  CT_COMMENTARY_TRANSLATE: "/phemex-lb-community/post/translate",
  CT_COMMENTARY_IMG_UPLOAD: "/phemex-lb-community/file/post/img/upload",
  CT_CHECK_COPIER_RESTRICTION: "/phemex-lb/copier/check",
  CHANNEL_BANK_CARD: "/phemex-uni-trade/channel/bank-card",
  GMX_RECOMMEND_TRADERS: "/phemex-lb/public/data/user/gmx/recommend",
  GMX_USER_RECOMMEND_TRADERS: "/phemex-lb/user/gmx/recommend",
  GMX_FOLLOWER_POSITION_HISTORY: "/phemex-lb/public/data/position/gmx/closed",
  GMX_FOLLOWER_POSITION_CURRENT: "/phemex-lb/public/data/position/gmx/current",
  GMX_FOLLOWER_POSITION_CURRENT_DETAIL:
    "/phemex-lb/public/data/position/gmx/operations",
  GMX_FOLLOWER_POSITION_HISTORY_DETAIL:
    "/phemex-lb/public/data/position/gmx/operations",
  KOL_EXCLUSIVE_ACTIVITY_INFO:
    "/phemex-activity/public/data/kol/exclusive/activity-info",
  KOL_EXCLUSIVE_ACTIVITY_CLAIM: "/phemex-activity/kol/exclusive/claim",
  KOL_EXCLUSIVE_ACTIVITY_USER_INFO: "/phemex-activity/kol/exclusive/user-info",
  KOL_LANDING_PAGE_EXIST: "/phemex-activity/public/data/kol/page/exclusive",
  ACCOUNT_ASSET_CONFIG: "/phemex-wm/account/asset/config",
  VIP_CONTRACT_INFO: "/phemex-activity/vip/contract/info",
  VIP_RATIO_CONFIG: "/phemex-account/public/data/users/level-ratio-config",
  OFFICIAL_VERIFY: "/phemex-account/public/data/users/official/verify",
  SWAP_CONFIG: "/exchanger-core/public/data/swap/config",
  SWAP_CREATE: "/exchanger-core/wallets/spot/swap",
  SWAP_HISTORY: "/exchanger-core/wallets/spot/swap",
  PREDICT_TOPIC_CATEGORY: "/phemex-predict/public/data/topic/category",
  PREDICT_TOPICS: "/phemex-predict/public/topic",
  PREDICT_TOPICS_BUY: "/phemex-predict/order/buy",
  PREDICT_KYC_CHECK: "/phemex-predict/account/kyc/check",
  PREDICT_MESSAGE: "/phemex-predict/public/data/predict/message",
  ACCOUNT_SHARES: "/phemex-predict/account/shares",
  ACCOUNT_ASSETS: "/phemex-predict/account/assets",
  ACCOUNT_POSITION: "/phemex-predict/account/position",
  ORDER_HISTORY: "/phemex-predict/order/history",
  ORDER_REDEEM: "/phemex-predict/order/redeem",
  PREDICT_SUCCESS_COUNT: "/phemex-predict/account/success-topic-count",
  COMMON_ABTEST: "/phemex-common-service/abtest",
  CUSTOMIZE_ACTIVITY_INFO: "/phemex-activity/public/data/campaign/info",
  CUSTOMIZE_ACTIVITY_SIGN_UP: "/phemex-activity/campaign/sign-up",
  CUSTOMIZE_ACTIVITY_SUBSCRBE: "/phemex-activity/public/data/campaign/submit",
  COUPON_DETAIL: "/phemex/marketing/public/md/exchange/code/query/detail",
  COUPON_PRIVILEGE: "/phemex/marketing/privilege/condition/list",
  COUPON_EXCHANGE: "/phemex/marketing/privilege/exchange",
  WELCOME_BONUS_MEDIA_RECORDS: "/phemex-activity/bonus/twitter-process-status",
  WELCOME_BONUS_AMOUNT: "/phemex-activity/public/data/welcome/detail",
  WELCOME_BONUS_USER_CREATE_TIME: "/phemex-user/users/self",
  WEB_RECOMMEND: "/phemex-predict/public/data/web/recommend",
  ROTATION_BAR: "/phemex-predict/public/md/web/rotation-bar",
  KOL_INFO: "/phemex-predict/public/data/kol-name",
  REFERRAL_LINK_PAGE: "/phemex-activity/activity/referral/link/page",
  REFERRAL_REWARD_PAGE: "/phemex-activity/activity/referral/reward/page",
  REFERRAL_REWARD_SUMMARY: "/phemex-activity/activity/referral/reward/summary",
  REFERRAL_CONFIG: "/phemex-activity/public/data/referral/config",
  REFERRAL_EARNING: "/phemex-activity/activity/referral/reward/monthSummary",
  REFERRAL_HISTORY: "/phemex-activity/activity/referral/link/page",
  REFERRAL_DEPOSIT_STATUS: "/phemex-activity/activity/referral/status",
  REFERRAL_KYC: "/phemex-kyc/kyc/summary-all",
  ADDRESS_EXIST: "/phemex-withdraw/wallets/app/address-exist",
  GET_COIN_LIST: "/phemex-activity/public/md/query/coin-list",
  CAMPAIGN_INCREMENT_ANDGET:
    "/phemex-activity/public/data/campaign/incrementAndGet",
  ACTIVITY_USER_INFO: "/phemex-activity/activity/user/info",
  HOT_SPOT_CONTRACT: "/phemex-activity/public/data/hot/symbol/config",
  VIP_ASSETS: "/phemex-kol-global/vip/asset",
  VIP_HISTORY: "/phemex-kol-global/vip/asset/history",
  VIP_TRANSACTIONS: "/phemex-kol-global/vip/transaction",
  VIP_ALL_TRANSACTIONS: "/phemex-kol-global/vip/all-transaction",
  VIP_CONTRACT_SUMMARY: "/phemex-kol-global/vip/contract/summary",
  VIP_CONTRACT_TOTAL: "/phemex-kol-global/vip/contract/total",
  VIP_CONTRACT_PAIRS: "/phemex-kol-global/vip/contract/trading-symbol",
  VIP_MANAGER_EMAIL: "/phemex-kol-global/vip/info",
  VIP_TRADE_SYMBOLS: "/phemex-kol-global/vip/symbol",
  VIP_ASSETS_DOWNLOAD_DATA: "/phemex-kol-global/vip/asset/detail",
  VIP_CONTRACT_DOWNLOAD_DATA: "/phemex-kol-global/vip/contract/detail",
  ANNUAL_DATA: "/contract-biz/period-report/annual/data",
  ANNUAL_RANK: "/contract-biz/period-report/annual/rank",
  ACTIVITY_REWARDS: "/activity/rewards",
  MT_BORROW_INTERESTS_HISTORY: "/margin/borrow/interests",
  MT_FUNDS_HISTORY: "/margin/funds",
  MT_BORROW: "/margin/borrow",
  MT_REPAY: "/margin/payback",
  MT_BORROW_HISTORY: "/margin/borrow",
  MT_REPAY_HISTORY: "/margin/payback",
  MT_ORDER_HISTORY: "/margin/orders",
  MT_TRADE_HISTORY: "/margin/orders/trades",
  MT_TRADE_LIMIT: "/phemex-assets-mgmt/margin_trade_config/public/list",
  MARGIN_SYS_REMAINING_BORROW: "/margin-trade/wallets/query-firm-account",
  MARGIN_SYS_REMAINING_BORROW_UTA:
    "/uta/margin-trade/wallets/query-firm-account",
  COMMON_GRAY: "/phemex-user/biz-gray",
  MT_WALLETS: "/margin/query-wallets",
  WEB3_SOUL_PASS_OVERVIEW: "/phemex-account/soul-pass/overview",
  WEB3_MINT: "/phemex-account/soul-pass/mint",
  WEB3_REVOKE: "/phemex-account/soul-pass/revoke",
  WEB3_ADDRESSES_CREATE: "/phemex-account/soul-pass/wallets/create",
  WEB3_ADDRESSES_BIND: "/phemex-account/soul-pass/wallets/bind",
  WEB3_ADDRESSES_UNBIND: "/phemex-account/soul-pass/wallets/unbind",
  WEB3_MNEMONIC: "/phemex-account/soul-pass/mnemonic",
  WEB3_SOUL_PASS_STATUS: "/phemex-account/soul-pass/status",
  SPOT_EQUITY_ASSET_HISTORY: "/phemex-user/wallets/spot/equity/detail",
  SPOT_EQUITY_ASSET_HISTORY_UTA: "/margin/equity/detail",
  WEB3_SOUL_PASS_MINT_QUALIFY: "/phemex-account/soul-pass/qualifications",
  WEB3_SBT_LIST: "/phemex-account/account/sbt/sbt-meta-all",
  WEB3_GENERAL_START: "/phemex-user/public/users/web3/general-start",
  WEB3_WALLET_LOGIN: "/phemex-user/users/web3/wallet-login",
  WEB3_BIND_WALLET: "/phemex-user/users/web3/bind-wallet",
  WEB3_PRE_BIND_EMAIL: "/phemex-user/users/pre-bind-email",
  WEB3_BIND_EMAIL: "/phemex-user/users/bind-email",
  WEB3_CRYPTO_LIST: "/phemex-account/web3/assets",
  WEB3_NFT_LIST: "/phemex-account/web3/nft",
  WEB3_INFO: "/phemex-account/web3/query",
  WEB3_100ETH_INFO: "/phemex-activity/public/cfg/100eth/info",
  WEB3_100ETH_USER: "/phemex-activity/public/data/100eth/users",
  WEB3_100ETH_WINNERS: "/phemex-activity/public/data/100eth/winners",
  WEB3_SUPPORT_CHAINS: "/phemex-account/public/data/users/web3/chain-name",
  WEB3_1000BTC_GROUP: "/phemex-activity/public/md/vote/btc/group",
  WEB3_1000BTC_LIST: "/phemex-activity/vote/btc/list",
  WEB3_1000BTC_VOTE: "/phemex-activity/vote/btc",
  WEB3_1000BTC_PARTICIPANT: "/phemex-activity/public/scroll/participant/list",
  WEB3_1000BTC_GROUP_LOGIN: "/phemex-activity/public/md/vote/btc/group",
  WEB3_1000BTC_PRICE: "/phemex-activity/public/md/vote/btc/price",
  WEB3_STAKE_PUBLIC_DATA_PROJECTS: "/phemex-stake/public/data/projects",
  WEB3_STAKE_OVERVIEW_PUBLIC: "/phemex-stake/public/data/overview",
  WEB3_STAKE_OVERVIEW: "/phemex-stake/overview",
  WEB3_STAKE_REDEEM: "/phemex-stake/redeem",
  WEB3_STAKE_STAKE: "/phemex-stake/stake",
  WEB3_STAKE_REWARDS_CLAIM: "/phemex-stake/rewards/claim",
  WEB3_STAKE_REWARDS_AUTO_COMPOUND: "/phemex-stake/rewards/auto-compound",
  WEB3_STAKE_VESTING_PLAN: "/phemex-stake/vesting/plan",
  WEB3_STAKE_VESTING_PLAN_DETAIL: "/phemex-stake/vesting/plan/detail",
  WEB3_STAKE_REDEEM_HISTORY: "/phemex-stake/redeem",
  WEB3_STAKE_STAKE_HISTORY: "/phemex-stake/stake",
  WEB3_STAKE_REWARDS_CLAIM_HISTORY: "/phemex-stake/rewards/claim",
  WEB3_STAKE_BUYBACK_HISTORY: "/phemex-stake/public/data/buyback",
  WEB3_STAKE_REWARDS_APR_HISTORY: "/phemex-stake/public/data/rewards/apr",
  WEB3_PT_MINING_PUBLIC_MINING_POOL:
    "/phemex-pt-mining-app/public/data/mining/pool",
  WEB3_PT_MINING_AWARD_RECORD: "/phemex-pt-mining-app/award/query",
  WEB3_PT_MINING_MINING_USER: "/phemex-pt-mining-app/mining/user",
  WEB3_PT_MINING_AWARD_BOOST: "/phemex-pt-mining-app/award/boost",
  WEB3_PT_MINING_AWARD_TYPE_UPDATE: "/phemex-pt-mining-app/award/type/update",
  WEB3_PT_MINING_MONTH_STATISTIC: "/phemex-pt-mining-app/month/statistic",
  WEB3_PT_MINING_AWARD_BOOST_CALCULATE:
    "/phemex-pt-mining-app/award/boost/calculate",
  AUCTION_REDEEM: "/launchpad/auction/redeem",
  AUCTION_BALANCE: "/launchpad/auction/balance",
  AUCTION_COMMIT: "/launchpad/auction/commit",
  AUCTION_PROJECTS_PT: "/launchpad/auction/public/md/projects/pt",
  WEB3_SOCIAL_PRIZE_POOL: "/phemex-activity/public/cfg/social/reward/pool",
  WEB3_SOCIAL_MY_TRADE_GROUPS: "/phemex-activity/social/user/group",
  WEB3_SOCIAL_MY_INFO: "/phemex-activity/social/user/info",
  WEB3_SOCIAL_TRADE_GROUPS: "/phemex-activity/public/data/social/v1/group/list",
  WEB3_SOCIAL_RAFFLE_CONFIGS:
    "/phemex-activity/public/data/social/raffle/config",
  WEB3_SOCIAL_RAFFLE_CONFIGS_:
    "/phemex-activity/public/data/social/raffle/config",
  WEB3_SOCIAL_TRADE_GROUPS_LOGIN: "/phemex-activity/social/v1/group/list",
  WEB3_SOCIAL_TRADE_GROUP_LEADER_BOARD:
    "/phemex-activity/public/data/social/group/board",
  WEB3_SOCIAL_TRADE_GROUP_LEADER_BOARD_LOGIN:
    "/phemex-activity/social/group/board",
  WEB3_SOCIAL_CREATE_GROUP: "/phemex-uni-trade/group/im/create/group/v2",
  WEB3_SOCIAL_JOIN_GROUP: "/phemex-uni-trade/group/im/direct/join/group",
  WEB3_SOCIAL_INVITE_JOIN_GROUP: "/phemex-uni-trade/group/im/join/group",
  WEB3_SOCIAL_INVITE_JOIN_GROUP_WITH_REFERRAL_CODE:
    "/phemex-uni-trade/group/im/join/group/by/referralCode",
  WEB3_SOCIAL_GROUP_INFO_WITH_EN_GROUP:
    "/phemex-uni-trade/public/data/group/im/group/profile/query",
  WEB3_SOCIAL_GROUP_INFO_WITH_REFERRAL_CODE:
    "/phemex-uni-trade/public/group/im/profile/query/by/referralCode",
  WEB3_SOCIAL_GROUP_INFO: "/phemex-activity/public/data/social/v1/group/detail",
  WEB3_SOCIAL_GROUP_INFO_LOGIN: "/phemex-activity/social/v1/group/detail",
  WEB3_SOCIAL_SHARE_LINKS: "/phemex-uni-trade/group/im/group/share/all-link",
  WEB3_SOCIAL_SHARE_INFO: "/phemex-uni-trade/group/im/group/share/info",
  WEB3_SOCIAL_SHARE_CAST: "/phemex-im-server/im/post/share/last-cast",
  WEB3_GROUP_DETAIL: "/phemex-activity/public/data/social/v1/group/detail",
  WEB3_GROUP_DETAIL_LOGIN: "/phemex-activity/social/v1/group/detail",
  IM_UPLOAD_IMAGE: "/phemex-im-server/im/post/s3/upload/image",
  ACCOUNT_VIP_PROFILE: "/phemex-account/users/vip/campaign/profile",
  ACCOUNT_VIP_LEVEL_CONFIG:
    "/phemex-account/public/data/users/simple/level-config",
  ACCOUNT_BIZ_GRAY: "/phemex-account/biz-gray",
  ACCOUNT_GENERAL_START: "/phemex-account/general/start",
  KOL_COMMISSION_EQUITY_AMOUNT: "/phemex-kol-global/sbt/total",
  KOL_COMMISSION_EQUITY_DETAIL: "/phemex-kol-global/sbt/detail",
  KOL_COMMISSION_EQUITY_PRICE: "/phemex-kol-global/sbt/currency",
  KOL_COMMISSION_SUMMARY: "/phemex-kol-global/dashboard/summary/commission",
  KOL_TRADE_SUMMARY: "/phemex-kol-global/dashboard/summary/trade",
  KOL_REFERRAL_SUMMARY: "/phemex-kol-global/dashboard/summary/referral",
  KOL_REFERRAL_TRADE_SUMMARY:
    "/phemex-kol-global/dashboard/summary/referral-trade",
  KOL_DASHBOARD_WALLET_SUMMARY: "/phemex-kol-global/dashboard/summary/wallet",
  KOL_DASHBOARD_EXPORT: "/phemex-kol-global/dashboard/summary/export",
  SHARE_PAGE_LIST: "/phemex-kol-global/agent/sharepage/list",
  KOL_DASHBOARD_XPT_DISTRIBUTION: "/phemex-kol-global/sbt/sum",
  KOL_DASHBOARD_VEPT_PHRASES: "/phemex-kol-global/public/agent/commission/vept",
  KOL_LANDING_PAGE_DETAIL: "/phemex-activity/kol/page/public/data/config-info",
  KOL_ACTIVITY_CONFIG: "/phemex-activity/public/data/campaign/info",
  KOL_ACTIVITY_USER_INFO: "/phemex-activity/campaign/user-info",
  KOL_ACTIVITY_SIGN_UP: "/phemex-activity/campaign/sign-up",
  INNER_DIALOG: "/phemex-activity/dialog/available/list",
  INNER_DIALOG_TESTING: "/phemex-activity/dialog/tester/list",
  FIAT_BALANCE_QUERY: "/phemex-uni-trade/fiat/balance/query",
  FIAT_DEPOSIT_ACCOUNT_QUERY: "/phemex-uni-trade/fiat/deposit/account/query",
  FIAT_DEPOSIT_SUCCESS_CONFIRM:
    "/phemex-uni-trade/fiat/deposit-success/confirm",
  FIAT_DEPOSIT_QUERY: "/phemex-uni-trade/fiat/deposit-order/query",
  FIAT_DEPOSIT_WITHDRAW_QUERY: "/phemex-uni-trade/fiat/withdraw/config",
  FIAT_DEPOSIT_WITHDRAW_CARDS: "/phemex-uni-trade/fiat/withdraw/cards",
  FIAT_DEPOSIT_WITHDRAW_SUBMIT: "/phemex-uni-trade/fiat/withdraw/submit",
  FIAT_WITHDRAW_ORDER_LIST: "/phemex-uni-trade/fiat/withdraw/order/query",
  FIAT_BALANCE_CHANGE_QUERY: "/phemex-uni-trade/fiat/balance/change/query",
  FIAT_ORDER_QUERY: "/phemex-uni-trade/fiat/order/query",
  FIAT_DEPOSIT_ORDER_LIST: "/phemex-uni-trade/fiat/deposit/order/query",
  FIAT_DEPOSIT_CONFIRM: "/phemex-uni-trade/fiat/deposit/success/confirm",
  FIAT_BIZ_GARY: "/phemex-uni-trade/biz-gray",
  FIAT_RISK_CHECK: "/phemex-uni-trade/fiat/risk/check",
  OC_CONFIG: "/phemex-uni-trade/one-click/config",
  OC_FIAT_ORDER: "/phemex-uni-trade/buy-crypto/fiat-balance/place-order",
  OC_BANK_CARD: "/phemex-uni-trade/channel/bank-card",
  OC_PLACE_ORDER: "/phemex-uni-trade/buy-crypto/b2c/place-order",
  OC_RISK_CHECK: "/phemex-uni-trade/buy-crypto/b2c/risk-check",
  OC_KYC_VALIDATE: "/phemex-uni-trade/buy-crypto/b2c/kyc-verify",
  OC_FIAT_BALANCE_HISTORY: "/phemex-uni-trade/buy-crypto/otc-trade-req/list",
  OC_CREDIT_DEBIT_CARD_HISTORY: "/phemex-uni-trade/buy-crypto/b2c/order/list",
  OC_DEFAULT_PAYMENT_METHOD: "/phemex-uni-trade/buy-crypto/last-trade",
  OC_CREDIT_DEBIT_BIND_CARD: "/phemex-uni-trade/channel/bank-card",
  OC_NEW_CARD_DETAIL: "/phemex-uni-trade/channel/bank-card",
  OC_THIRD_PARTY_HISTORY: "/phemex-user/fiatPayment/orders",
  OC_TRANSAK_ORDER: "/phemex-uni-trade/buy-crypto/transak/place-order",
  OC_TRANSAK_SAVE_ORDER:
    "/phemex-uni-trade/buy-crypto/transak/outer-order-id-save",
  OC_TRANSAK_ORDER_LIST: "/phemex-uni-trade/buy-crypto/transak/bank-order/list",
  XPT_MINING_INFO: "/phemex-activity/public/md/xpt-mining/info",
  XPT_MINING_USER_INFO: "/phemex-activity/xpt-mining/user-info",
  XPT_MINING_RANK_LIST: "/phemex-activity/public/md/xpt-mining/rank-page",
  XPT_SOUL_PASS_SUMMARY: "/phemex-account/public/data/users/soul-pass-summary",
  XPT_LEVEL_CONFIG: "/phemex-account/public/data/users/campaign/level-config",
  XPT_LEVEL_SIMPLE_CONFIG:
    "/phemex-account/public/data/users/simple/level-config",
  XPT_USER_LEVEL_CONFIG: "/phemex-account/users/vip/campaign/profile",
  MARKETPLACE_SUMMARY:
    "/phemex-strategy/strategy/public/data/marketplace/summary",
  MARKETPLACE_DROPDOWN_INFO:
    "/phemex-strategy/strategy/public/data/marketplace/dropdown-info",
  MARKETPLACE_SEARCH:
    "/phemex-strategy/strategy/public/data/marketplace/search",
  STRATEGY_ORDER_LIST: "/phemex-strategy/strategy/detail-order-list",
  STRATEGY_ARBI_SUMMARY: "/phemex-strategy/strategy/detail-arbi-summary",
  STRATEGY_DETAIL_MAIN: "/phemex-strategy/strategy/detail-main",
  STRATEGY_UPDATE_TPSL: "/phemex-strategy/strategy/adjust-tpsl",
  STRATEGY_ARBI_LIST: "/phemex-strategy/strategy/detail-arbi-list",
  STRATEGY_ADD_BALANCE: "/phemex-strategy/strategy/increase-balance",
  STRATEGY_ALL_MY_OPEN: "/phemex-strategy/strategy/my/all-open",
  MARKETPLACE_MARTINGALE:
    "/phemex-strategy/strategy/public/data/martin/marketplace/search",
  MARTINGALE_DETAIL_MAIN: "/phemex-strategy/strategy/martin/detail-main",
  MARTINGALE_CYCLE_HISTORY_LIST:
    "/phemex-strategy/strategy/martin/cycle-history-list",
  MARTINGALE_DETAIL_ORDER_LIST:
    "/phemex-strategy/strategy/martin/detail-order-list",
  MARTINGALE_ADJUST_TP_SL: "/phemex-strategy/strategy/martin/adjust-tpsl",
  SIGNAL_DETAIL_MAIN: "/phemex-strategy/strategy/signal/detail-main",
  SIGNAL_DETAIL_OPEN_POSITION:
    "/phemex-strategy/strategy/signal/detail-open-pos",
  SIGNAL_DETAIL_CLOSE_POSITION:
    "/phemex-strategy/strategy/signal/detail-close-pos",
  SIGNAL_DETAIL_ORDER_LIST:
    "/phemex-strategy/strategy/signal/detail-order-list",
  SIGNAL_DETAIL_ORDER_RECORD:
    "/phemex-strategy/strategy/signal/detail-signal-rec",
  SIGNAL_DETAIL_DECREASE_BALANCE: "/phemex-strategy/strategy/decrease-balance",
  SIGNAL_DETAIL_SETTINGS: "/phemex-strategy/signal/detail",
  SPOT_MARKETPLACE_DROPDOWN_INFO:
    "/spot-strategy/strategy/public/data/marketplace/dropdown-info",
  SPOT_MARKETPLACE_SEARCH:
    "/spot-strategy/strategy/public/data/marketplace/search",
  SPOT_STRATEGY_DETAIL_MAIN: "/spot-strategy/strategy/detail-main",
  SPOT_STRATEGY_ORDER_LIST: "/spot-strategy/strategy/detail-order-list",
  SPOT_STRATEGY_ARBI_SUMMARY: "/spot-strategy/strategy/detail-arbi-summary",
  SPOT_STRATEGY_ARBI_LIST: "/spot-strategy/strategy/detail-arbi-list",
  SPOT_STRATEGY_UPDATE_TPSL: "/spot-strategy/strategy/adjust-tpsl",
  UPDATE_CUSTOMIZE: "/contract-biz/cfg/customize/update",
  QUERY_CUSTOMIZE: "/contract-biz/cfg/customize/query",
  ACTIVITY_OPERATION_INFO: "/phemex-activity/public/md/operation/activity/info",
  ACTIVITY_OPERATION_SUBMIT_MATERIAL:
    "/phemex-activity/operation/task/submit/material",
  ACTIVITY_OPERATION_USER_TASK_LIST: "/phemex-activity/operation/task/list",
  ACTIVITY_QUERY_PRIZE_POOL_LOGIN: "/phemex/marketing/prize/pool/query",
  ACTIVITY_QUERY_PRIZE_POOL: "/phemex/marketing/public/md/prize/pool/query",
  ACTIVITY_CLAIM_PRIZE: "/phemex/marketing/privilege/lottery",
  ACTIVITY_SCROLL_PARTICIPANT:
    "/phemex-activity/public/md/operation/activity/participant/scroll",
  ACTIVITY_XPT_AIRDROP_GARY: "/phemex-activity/public/gray/info",
  ADDRESS_DOMAIN_CONVERT: "/phemex-withdraw/wallets/app/address/domain/convert",
  BUY_CRYPTO_CONFIG: "/phemex-uni-trade/config/channels",
  BUY_CRYPTO_PRICING: "/phemex-uni-trade/buy-crypto/pricing/v2",
  PUBLIC_BUY_CRYPTO_CONFIG: "/phemex-uni-trade/public/md/config/channels",
  PUBLIC_BUY_CRYPTO_PRICING: "/phemex-uni-trade/public/md/buy-crypto/pricing",
  PUBLIC_B2C_BANNER: "/phemex-withdraw/public/data/app/banner/query_list",
  PUBLIC_FIAT_DEPOSIT_CONFIG: "/phemex-uni-trade/public/md/fiat/deposit/config",
  SPACE_ID_SUBMIT_WALLET_ADDRESS: "/phemex-activity/space/psp/submit",
  SPACE_ID_CLAIM_GIFTCARD: "/phemex-activity/space/psp/claim",
  SPACE_ID_CHECK_WALLET_ADDRESS: "/phemex-activity/space/psp/check-address",
  SPACE_ID_CHECK_CLAIM_STATUS: "/phemex-activity/space/psp/claim-status",
  SPACE_ID_GIFTCARD_COUNT: "/phemex-activity/space/psp/find-claim",
  SPACE_ID_PUBLIC_GIFTCARD_COUNT:
    "/phemex-activity/public/space/psp/find-claim",
  ACTIVITY_GARY: "/phemex-activity/public/gray/info",
  ACTIVITY_REFERRAL_TOTAL_INFO: "/phemex-activity/referral/user/summary",
  ACTIVITY_REFERRAL_INFO: "/phemex-activity/referral/user/detail/list",
  ACTIVITY_REFERRAL_SELF_USER_TYPE: "/phemex-activity/referral/user/self/info",
  ACTIVITY_REFERRAL_STAGE_REWARDS:
    "/phemex-activity/public/data/referral/award-config",
  FUTURE_GRIDS_CONTEST_INFO: "/phemex-activity/public/data/competition/info",
  FUTURE_GRIDS_CONTEST_USER_INFO: "/phemex-activity/competition/members/self",
  FUTURE_GRIDS_CONTEST_JOIN: "/phemex-activity/competition/members/join",
  FUTURE_GRIDS_CONTEST_RANKING:
    "/phemex-activity/public/data/competition/members/sort",
  FUTURE_GRIDS_CONTEST_AWARD:
    "/phemex-activity/public/data/competition/award/page",
  FUTURE_GRIDS_CONTEST_SUMMARY: "/phemex-activity/competition/strategy/summary",
  FUTURE_GRIDS_CONTEST_TASK: "/phemex-activity/competition/strategy/v1/task",
  USER_ASSETS_QUERY: "/phemex-account/users/assets/query",
  BROKER_APPLY: "/phemex-kol-global/broker/apply",
  BROKER_APPLY_INFO: "/phemex-kol-global/broker/apply/info",
  BROKER_INFO: "/phemex-kol-global/broker/info",
  BROKER_DASHBOARD_COMMISSIONS:
    "/phemex-kol-global/broker/dashboard/summary/commission",
  BROKER_DASHBOARD_TRADE_VOLUME:
    "/phemex-kol-global/broker/dashboard/summary/trade",
  BROKER_DASHBOARD_TRADERS:
    "/phemex-kol-global/broker/dashboard/summary/trader",
  BROKER_DASHBOARD_WALLET: "/phemex-kol-global/broker/dashboard/summary/wallet",
  BROKER_DASHBOARD_EXPORT: "/phemex-kol-global/broker/dashboard/summary/export",
  BROKER_TRADERS: "/phemex-kol-global/broker/client",
  BROKER_CONTRACT_COMMISSIONS: "/phemex-kol-global/broker/trade/contract",
  BROKER_SPOT_COMMISSIONS: "/phemex-kol-global/broker/trade/spot",
  BROKER_ASSETS_SUMMARY: "/phemex-kol-global/broker/commission/sum",
  BROKER_ISSUED_COMMISSIONS: "/phemex-kol-global/broker/commission/total",
  BROKER_ISSUED_COMMISSION_DETAILS:
    "/phemex-kol-global/broker/commission/detail",
  VIP_QUERY_IS_INSTITUTIONAL_USER: "/phemex-activity/vip/data/isVipMember",
  VIP_INSTITUTIONAL_LAST_30_DAYS_DATA: "/phemex-activity/vip/data/thirty-data",
  VIP_INSTITUTIONAL_SUMMARY: "/phemex-activity/vip/data/summary",
  VIP_INSTITUTIONAL_DATA: "/phemex-activity/vip/data/symbol",
  VIP_INSTITUTIONAL_BASE_INFO: "/phemex-activity/vip/data/base-info",
  PT_PREHEAT_INFO: "/phemex-activity/public/data/pt/preheat/info",
  PT_PREHEAT_SIGN_UP: "/phemex-activity/pt/preheat/sign-up",
  PT_PREHEAT_USER_INFO: "/phemex-activity/pt/preheat/user-info",
  PT_MINING_USER_AWARD_HISTORY: "/phemex-pt-mining-app/award/history",
  EMAIL_CONFIRM: "/phemex-activity/public/mail/info",
  EMAIL_UNSUBSCRIBE: "/phemex-activity/public/mail/unsubscribes",
  EMAIL_SUBSCRIBE: "/phemex-activity/public/mail/subscribes",
  UTA_QUERY: "/phemex-account/users/unified-account/query",
  UTA_SPOT_UPGRADE_ANSWER_COMPLETED:
    "/phemex-account/users/unified-account/spot-upgrade/answer-completed",
  UTA_SPOT_UPGRADE_APPLY:
    "/phemex-account/users/unified-account/spot-upgrade/apply",
  UTA_SPOT_UPGRADE_CHECK_SUB:
    "/phemex-account/users/unified-account/spot-upgrade/check-sub",
  UTA_SPOT_UPGRADE_APPLY_SUB:
    "/phemex-account/users/unified-account/spot-upgrade/apply-sub",
  EXPIRED_BONUS: "/contract-biz/bonus/expiring",
  SPOT_PT_DISCOUNT: "/margin/currency/discount",
  CONTRACT_PT_DISCOUNT: "/g-accounts/set-account-status",
  VEPT_REWARD_INFO: "/phemex-uni-trade/reward/info",
  VEPT_AIRDROP_CONFIG: "/phemex-uni-trade/reward/getConfigurationsByPage",
  ACTIVITY_DETAIL: "/phemex-activity/public/data/activity/detail",
  ACTIVITY_APPLY: "/phemex-activity/activity/apply",
  ACTIVITY_CHRISTMAS_USER_INFO: "/phemex-activity/christmas/user-info",
  BONUS_WELCOME_CONFIG: "/phemex-activity/public/data/welcome/config",
  BONUS_TASK_LIST: "/phemex-activity/operation/task/list",
  BONUS_PRIVILEGE_LOTTERY: "/phemex/marketing/privilege/lottery",
  BONUS_PRIVILEGE_DETAILS: "/phemex/marketing/privilege/details",
  SOCIAL_GROUP_INFO: "/phemex-uni-trade/group/im/chat/room/info",
  SOCIAL_SHARE_INFO: "/phemex-uni-trade/group/im/group/share/info",
  SOCIAL_SHARE_LINK: "/phemex-uni-trade/group/im/group/share/link",
  SOCIAL_PROFILE_EDIT: "/phemex-uni-trade/group/im/group/profile/edit",
  SOCIAL_GROUP_EDIT: "/phemex-im-server/im/group/profile/edit",
  SOCIAL_GROUP_TAG_EDIT: "/phemex-im-server/im/post/group/tag/edit",
  SOCIAL_PROFILE_QUERY: "/phemex-uni-trade/group/im/group/profile/query",
  SOCIAL_GROUP_BOARD: "/phemex-activity/social/group/board",
  SOCIAL_WEEK_STATISTIC: "/phemex-activity/social/user/week/statistic",
  SOCIAL_WEEK_SCORE: "/phemex-activity/social/user/week/score",
  SOCIAL_GROUP_LIST: "/phemex-activity/social/user/group",
  SOCIAL_TIME_PASS_OPEN: "/phemex-activity/time-pass/open",
  SOCIAL_LEADERBOARD_LIST:
    "/phemex-activity/public/md/social/leader-board/rank",
  SOCIAL_RAFFLE_LEADERBOARD_LIST:
    "/phemex-activity/public/data/social/raffle/rank",
  SOCIAL_RAFFLE_ORDERS: "/phemex-activity/social/cast/rewards/list",
  SOCIAL_TIME_PASS_IS_OPEN: "/phemex-activity/time-pass/is-open",
  SOCIAL_REWARD_POOL: "/phemex-activity/public/cfg/social/reward/pool",
  SOCIAL_MY_GROUPS: "/phemex-activity/social/v1/user/group",
  SOCIAL_REFRESH_MY_POINTS: "/phemex-activity/social/raffle/refresh",
  SOCIAL_MY_RAFFLE: "/phemex-activity/social/raffle/detail",
  SOCIAL_RAFFLE_CONFIG: "/phemex-activity/public/data/social/raffle/config",
  SOCIAL_WEEK_MY_POINTS: "/phemex-activity/social/v1/user/week/score",
  SOCIAL_USER_INFO: "/phemex-activity/social/user/info",
  SOCIAL_CONVERT_POINT: "/phemex-activity/social/score/exchange",
  SOCIAL_BUY_RAFFLE: "/phemex-activity/social/raffle/buy",
  SOCIAL_POINT_INVEST: "/phemex-activity/social/raffle/invest",
  SOCIAL_TIME_PASS_PRICE: "/phemex-activity/time-pass/price/inquiry",
  SOCIAL_TIME_PASS_ORDER: "/phemex-activity/time-pass/group/scroll",
  SOCIAL_GROUP_TIME_PASS: "/phemex-activity/time-pass/group/query",
  SOCIAL_MY_TIME_PASS: "/phemex-activity/time-pass/self/query",
  SOCIAL_TIME_PASS_BUY: "/phemex-activity/time-pass/buy",
  SOCIAL_TIME_PASS_SELL: "/phemex-activity/time-pass/sell",
  SOCIAL_EXIT_GROUP: "/phemex-uni-trade/group/im/leave/group",
  SOCIAL_GROUP_WEEK_DATA:
    "/phemex-activity/public/data/social/group/week/statistic",
  SOCIAL_USER_CONFIG: "/phemex-uni-trade/group/im/user/config",
  SOCIAL_USER_TODAY_POINT: "/phemex-activity/social/user/score/query",
  SOCIAL_EXCHANGE_INFO: "/phemex-activity/social/exchange/info",
  SOCIAL_CAST_LIST: "/phemex-im-server/im/post/page",
  SOCIAL_CAST_LIST_BY_KEYWORD: "/phemex-im-server/im/post/search",
  SOCIAL_CAST_LIST_BY_SORTMETHOD: "/phemex-im-server/im/post/v2/page",
  SOCIAL_PUBLIC_CAST_LIST_BY_SORTMETHOD:
    "/phemex-im-server/public/md/im/post/page",
  SOCIAL_POST_CAST: "/phemex-im-server/im/post/post",
  SOCIAL_POST_NEWCAST: "/phemex-im-server/im/post/post/v2",
  SOCIAL_CAST_LIKED: "/phemex-im-server/im/post/opinion",
  SOCIAL_CAST_CONFIG: "/phemex-activity/public/data/social/cast/config",
  SOCIAL_CAST_TIPPING: "/phemex-activity/social/cast/tip",
  SOCIAL_CAST_TIPPER: "/phemex-activity/social/cast/tip/info/list",
  SOCIAL_CAST_POINT: "/phemex-activity/social/cast/detail",
  SOCIAL_CAST_LEADERBOARD: "/phemex-activity/public/data/social/cast/rank",
  SOCIAL_TIPPING_LIST: "/phemex-activity/social/cast/tip/from/others",
  SOCIAL_TIPPING_RETURN_POING_LIST:
    "/phemex-activity/social/cast/tip/to/others",
  SOCIAL_CAST_CONTENT_CONFIG: "/phemex-im-server/im/post/cast/limit",
  SOCIAL_USER_WHITELIST: "/phemex-uni-trade/group/im/user/isWhiteList",
  SOCIAL_PULSER_LIST: "/phemex-im-server/im/post/user/search",
  SOCIAL_SHARE_REPORT: "/phemex-activity/social/pulse/shared/report",
  SOCIAL_MODERATOR_CONFIG: "/phemex-im-server/im/post/cast/limit",
  SOCIAL_MODERATOR_APPLY: "/phemex-im-server/im/role/moderator/apply",
  SOCIAL_MODERATOR_INFO: "/phemex-im-server/im/role/moderator/info",
  SOCIAL_CHAT_DELETE_MESSAGE_ITEM: "/phemex-im-server/im/channel/message",
  SOCIAL_USER_ROLE: "/phemex-im-server/im/role/get",
  SOCIAL_MUTE_USER: "/phemex-im-server/im/channel/user/mute",
  SOCIAL_UMMUTE_USER: "/phemex-im-server/im/channel/user/unmute",
  SOCIAL_BAN_USER: "/phemex-im-server/im/channel/user/ban",
  SOCIAL_UMBAN_USER: "/phemex-im-server/im/channel/user/unban",
  SOCIAL_MODERATOR_RECEIVED_POINT_LIST:
    "/phemex-activity/pulse/moderator/history",
  SOCIAL_GROUP_CATEGORY_LIST:
    "/phemex-activity/public/data/social/v1/group/category/list",
  SOCIAL_GROUP_TAG_LIST: "/phemex-im-server/im/post/category",
  SOCIAL_USER_PROFILE_UPDATE: "/phemex-activity/social/user/updateProfile",
  SOCIAL_MYSTERY_BOX_DATA: "/phemex-activity/public/data/mystery/data",
  SOCIAL_MYSTERY_BOX_CREATE: "/phemex-activity/mystery/create",
  SOCIAL_MYSTERY_BOX_NUMS: "/phemex-activity/mystery/nums",
  SOCIAL_MYSTERY_BOX_SHARE: "/phemex-activity/mystery/share",
  SOCIAL_MYSTERY_BOX_CONFIG: "/phemex-activity/public/info/mystery",
  SOCIAL_GROUP_PASS_DEPLOY: "/phemex-activity/group-pass/deploy",
  SOCIAL_GROUP_PASS_DEPLOY_DETAIL: "/phemex-activity/group-pass/deploy/info",
  SOCIAL_GROUP_PASS_MINT: "/phemex-activity/group-pass/mint",
  SOCIAL_GROUP_PASS_GROUP_LIST: "/phemex-activity/group-pass/group/list",
  SOCIAL_GROUP_PASS_GROUP_LIST_PUBLIC:
    "/phemex-activity/public/group-pass/group/list",
  SOCIAL_GROUP_PASS_GROUP: "/phemex-activity/group-pass/group",
  SOCIAL_GROUP_PASS_ORDER_BOOK_LIST: "/phemex-activity/group-pass/order/list",
  SOCIAL_GROUP_PASS_ORDER_BOOK_LIST_K:
    "/phemex-activity/group-pass/order/kline",
  SOCIAL_GROUP_PASS_MY_GROUP_AVAILABLE: "/phemex-activity/group-pass/available",
  SOCIAL_GROUP_PASS_MY_GROUP_ORDER_BOOK_LIST:
    "/phemex-activity/group-pass/order/my-group/list",
  SOCIAL_GROUP_PASS_PENDING_ORDER: "/phemex-activity/group-pass/order/pending",
  SOCIAL_GROUP_PASS_CANCEL_LIST: "/phemex-activity/group-pass/order/cancel",
  SOCIAL_GROUP_PASS_BUY: "/phemex-activity/group-pass/order/buy",
  SOCIAL_GROUP_PASS_MINT_INQUIRY: "/phemex-activity/group-pass/mint/inquiry",
  SOCIAL_GROUP_PASS_CONFIG: "/phemex-activity/public/group-pass/config",
  SOCIAL_PULSE_DROP_TASK: "/phemex-activity/pulse/drop/task",
  SOCIAL_PULSE_DROP_CONFIG:
    "/phemex-activity/public/data/pulse/drop/activity/get",
  SOCIAL_PULSE_DROP_TASK_ADD: "/phemex-activity/pulse/drop/fetch",
  SOCIAL_PULSE_PROFILE: "/phemex-activity/social/user/info",
  SOCIAL_PULSE_USER_CAST_LIST: "/phemex-im-server/im/post/user/home/query",
  PASSKEY_ENABLE: "/phemex-user/users/passkey/verify",
  PASSKEY_REGISTER: "/phemex-user/users/passkey/register/start",
  PASSKEY_FINISHED: "/phemex-user/users/passkey/register/finish",
  PASSKEY_LIST: "/phemex-user/users/passkey/credential/all",
  PASSKEY_REMOVE: "/phemex-user/users/passkey/credential/delete",
  PASSKEY_RENAME: "/phemex-user/users/passkey/device/modify",
  PASSKEY_CHECK: "/phemex-user/public/users/verify/filter",
  PASSKEY_LOGIN: "/phemex-user/users/passkey/auth/login",
  PASSKEY_CONFIRM_LOGIN: "/phemex-user/users/passkey/auth/confirm/login",
  GET_CURRENCY_EXCHANGE_RATE: "/phemex-activity/public/md/query/exchange/rate",
  GET_FIAT_LIST: "/phemex-activity/public/md/query/currency-list",
  GET_PRICE_DETAIL: "/phemex-activity/public/md/query/coin-detail",
  GET_COIN_ABOUT: "/phemex-activity/public/data/price/page/coin/detail",
  IM_ROBOT_INFO: "/phemex-im-server/public/data/zendesk/robot",
  IM_CS_EVALUATION: "/phemex-im-server/public/data/zendesk/csat",
  LENDING_POOL: "/phemex-lending/pool",
  LENDING_PUBLIC_DATA_POOL: "/phemex-lending/public/data/pool",
  LENDING_ASSETS_OVERVIEW: "/phemex-lending/assets/overview",
  LENDING_HIST_COLLATERAL: "/phemex-lending/hist/collateral",
  LENDING_HIST_LIQ: "/phemex-lending/hist/liq",
  LENDING_HIST_LOAN: "/phemex-lending/hist/loan",
  LENDING_HIST_PAYBACK: "/phemex-lending/hist/payback",
  LENDING_HIST_INTEREST: "/phemex-lending/hist/loan/interests",
  LENDING_HIST_FUNDS: "/phemex-lending/hist/funds",
  LENDING_LOAN_ACTIVE: "/phemex-lending/loan/active",
  LENDING_LOAN_QUOTA: "/phemex-lending/loan/quota",
  LENDING_PUBLIC_DATA_APR: "/phemex-lending/public/data/apr",
  LENDING_LOAN: "/phemex-lending/loan",
  LENDING_INTERNAL_POOL_CONFIG: "/phemex-lending/internal/pool/config",
  LENDING_INTERNAL_POOL_CONFIG_DB: "/phemex-lending/internal/pool/config-db",
  LENDING_LOAN_ADD_COLLATERAL: "/phemex-lending/loan/add-collateral",
  LENDING_PAYBACK: "/phemex-lending/payback",
  LENDING_ACCOUNTS_OPEN: "/phemex-account/accounts/lending/open",
  LENDING_SUPPORT_CURRENCIES:
    "/phemex-lending/public/data/supported-currencies",
  LENDING_SUPPLY: "/phemex-lending/supply",
  LENDING_REDEEM: "/phemex-lending/redeem",
  LENDING_AUTO_INVEST: "/phemex-lending/auto-invest",
  LENDING_ASSETS_ACCOUNT_SUPPLY: "/phemex-lending/assets/account/supply",
  LENDING_SUPPLY_ACTIVE: "/phemex-lending/supply/active",
  LENDING_HIST_SUPPLY: "/phemex-lending/hist/supply",
  LENDING_HIST_SUPPLY_REDEMPTION: "/phemex-lending/hist/redeem	",
  LENDING_HIST_SUPPLY_INTEREST: "/phemex-lending/hist/supply/interests",
  SETTINGS_QUERY: "/phemex-account/users/settings/query",
  SETTINGS_MODIFY: "/phemex-account/users/settings/modify",
  SETTINGS_QUERY_OPTIONS: "/phemex-account/users/settings/queryOptions",
  ADDRESS_NOTE: "/phemex-withdraw/wallets/withdraw-address",
  UID_ADDRESS_NOTE: "/phemex-withdraw/wallets/inside/withdraw-address",
  ADDRESS_DELETE: "/phemex-wallet/wallets/withdraw-address",
  WITHDRAW_ADDRESSLIST: "/phemex-withdraw/wallets/withdraw-address",
  DELETE_WITHDRAWADDRESS: "/phemex-withdraw/wallets/withdraw-address",
  WITHDRAW_INTERNAL_ADDRESS_DELETE:
    "/phemex-withdraw/wallets/inside/v2/address",
  WALLETS_WITHDRAW_ADDRESS_EXPORT:
    "/phemex-wallet/wallets/withdraw-address-export",
  INSIDE_WITHDRAW_ADDRESS_EXPORT:
    "/phemex-withdraw/wallets/inside/withdraw-address-export",
  WALLETS_CONVERSIONS: "/exchanger-core/wallets/tiny/v1/conversions",
  WALLETS_CONVERSIONS_DETAIL:
    "/exchanger-core/wallets/tiny/v1/conversion/detail",
  CONVERSION_SUPPORTED_CCY:
    "/exchanger-core/wallets/public/data/tiny/conversion/supported-ccy",
  TINY_CONVERSION_QUOTE: "/exchanger-core/wallets/tiny/v1/conversion/quote",
  TINY_CONVERSION: "/exchanger-core/wallets/tiny/v1/conversion",
  TINY_CONVERSION_DETAIL: "/exchanger-core/wallets/tiny/v1/conversion/detail",
  DATA_ASSETS_OVERVIEW: "/margin/assets/overview",
  MARKET_FAVORITE_GROUPS: "/phemex-account/users/favorite/group/query-all",
  MARKET_FAVORITE_GROUPS_ADD: "/phemex-account/users/favorite/group/add",
  MARKET_FAVORITE_GROUPS_DELETE: "/phemex-account/users/favorite/group/delete",
  MARKET_FAVORITE_GROUPS_RENAME: "/phemex-account/users/favorite/group/rename",
  MARKET_FAVORITE_INSTRUMENT_add:
    "/phemex-account/users/favorite/instrument/add",
  MARKET_FAVORITE_INSTRUMENT_DELETE:
    "/phemex-account/users/favorite/instrument/delete",
  MARKET_FAVORITE_INSTRUMENT_TOP:
    "/phemex-account/users/favorite/instrument/top",
  MARKET_FAVORITE_INSTRUMENT_SORT:
    "/phemex-account/users/favorite/instrument/sort",
  MARKET_FAVORITE_SHARE: "/phemex-account/users/favorite/group/share",
  MARKET_FAVORITE_GROUP_IMPORT: "/phemex-account/users/favorite/group/import",
};
Object.keys(m).forEach((e) => (m[e] = [M.API, m[e]].join("")));
class la {
  constructor() {
    this.channels = {};
  }
  subscribe(t, r, a) {
    const n = this.channels,
      i = n[t] || (n[t] = {});
    return (
      (i[r] || (i[r] = [])).push(a),
      () => {
        (i[r] = i[r].filter((s) => s !== a)).length < 1 &&
          (delete i[r], Object.keys(i).length < 1 && delete n[t]);
      }
    );
  }
  send(t, r, a) {
    const n = this.channels[t];
    if (!n) return;
    const i = n[r];
    !i || i.length < 1 || i.forEach((_) => _.apply(null, [a]));
  }
}
const J = new la(),
  Oe = "phemex-auth-token",
  Ia = "admin-kol-token";
function ha() {
  return localStorage.getItem(Oe);
}
function Sa() {
  return localStorage.getItem(Ia);
}
function Na(e) {
  localStorage.setItem(Oe, e);
}
function Ca() {
  localStorage.removeItem(Oe);
}
function ba() {
  const e = /admin_broker_token=([^&?]+)/,
    t = window.location.search.match(e);
  return t && decodeURIComponent(t[1]);
}
const fa = [],
  ga = [
    p.LOGOUT.pathname,
    p.ACCOUNT_OVERVIEW.pathname,
    p.ACCOUNT_VERIFICATION.pathname,
    p.ACCOUNT_PREMIUM_CENTER.pathname,
    p.ACCOUNT_SECURITY.pathname,
    p.ACCOUNT_SUB_ACCOUNTS.pathname,
    p.ACCOUNT_API_MANAGEMENT.pathname,
    p.ACCOUNT_SETTING.pathname,
    p.ACCOUNT_FEEDBACK.pathname,
    p.ACCOUNT_SECURITY_DEVICE_MANAGE.pathname,
    p.ACCOUNT_SECURITY_DEVICE_HISTORY.pathname,
    p.ACCOUNT_TAX_REPORTING.pathname,
    p.SHARE_PREMIUM.pathname,
    p.ASSETS_DEPOSIT.pathname,
    p.ASSETS_DETAILS.pathname,
    p.ASSETS_FUNDS.pathname,
    p.ASSETS_ORDER_HISTORY.pathname,
    p.ASSETS_OVERVIEW.pathname,
    p.ASSETS_PNL_DETAILS.pathname,
    p.ASSETS_SPOT_ORDER.pathname,
    p.ASSETS_SPOT_TRADE.pathname,
    p.ASSETS_SPOT_PNL_DETAILS.pathname,
    p.ASSETS_TRADE_HISTORY.pathname,
    p.ASSETS_WITHDRAWAL.pathname,
    p.ASSETS_WITHDRAWAL_ADDRESS.pathname,
    p.ASSETS_CONTRACT_ACCOUNT.pathname,
    p.ASSETS_SPOT_ACCOUNT.pathname,
    p.ASSETS_INVESTMENT_ACCOUNT.pathname,
    p.ASSETS_MARGIN_ACCOUNT.pathname,
    p.CHECK_ACCOUNT.pathname,
    p.ASSETS_TRADING_ACCOUNT.pathname,
    p.ASSETS_FUND_ACCOUNT.pathname,
    p.ASSETS_BORROWING_DETAILS.pathname,
    p.ASSETS_ORDER_HISTORY_GROUP.pathname,
    p.BUY_CRYPTO_PLACE_ORDER.pathname,
    p.BIG_CLIENT_DASHBOARD.pathname,
    p.EARN_ACTIVE.pathname,
    p.ASSETS_TRANSFER.pathname,
    p.EARN_MY_EARNINGS.pathname,
    p.TRADER_HOME_FOLLOWER_VIEW.pathname,
    p.TRADER_HOME.pathname,
    p.COPIER_DETAIL.pathname,
    p.ACTIVITY_REGISTER_REWARDS.pathname,
    p.FIAT_WITHDRAW.pathname,
    p.FIAT_WITHDRAW_ORDER_CONFIRM.pathname,
    p.LEGEND_TRADING_BIND_CARD.pathname,
    p.FIAT_DEPOSIT_TRANSFER_INFO.pathname,
    p.LEGEND_TRADING_SYNC_KYC.pathname,
    p.LEGEND_TRADING_WRITE_QUESTIONNAIRE.pathname,
    p.FIAT_WITHDRAW_ORDER_RESULT.pathname,
    p.LEGEND_TRADING_MANAGE_CARD.pathname,
    p.ASSETS_FIAT_ACCOUNT.pathname,
    p.FIAT_BUY_CRYPTO_BUY_PAYMENT_METHOD.pathname,
    p.FIAT_BUY_CRYPTO_BUY_CONFIRM.pathname,
    p.FIAT_BUY_CRYPTO_BUY_RESULT.pathname,
    p.FIAT_BUY_CRYPTO_BUY_CARD.pathname,
    p.FIAT_BUY_CRYPTO_SELL_CARD.pathname,
    p.BUY_CRYPTO_CARD_DETAILS.pathname,
    p.BUY_CRYPTO_CARD_SELL_CONFIRM.pathname,
    p.BUY_CRYPTO_CARD_SELL_RESULT.pathname,
    p.FIAT_BUY_CRYPTO_SELL_PAYMENT_METHOD.pathname,
    p.FIAT_BUY_CRYPTO_SELL_CONFIRM.pathname,
    p.FIAT_BUY_CRYPTO_SELL_RESULT.pathname,
    p.BUY_CRYPTO_CARD_PAYMENT.pathname,
    p.BUY_CRYPTO_CARD_ORDER_SUCCESS.pathname,
    p.BUY_CRYPTO_CARD_ORDER_FAIL.pathname,
    p.BUY_CRYPTO_CARD_HISTORY.pathname,
    p.BUY_CRYPTO_CARD_ORDER_CONFIRM.pathname,
    p.STRATEGY_DETAIL.pathname,
    p.LEGEND_TRADING_BILLING_ADDRESS.pathname,
    p.LEGEND_TRADING_CARD_BINDING.pathname,
    p.LEGEND_TRADING_PAYMENT.pathname,
    p.ASSETS_BUY_SELL_CRYPTO_HISTORY.pathname,
    p.ASSETS_FIAT_DEPOSIT.pathname,
    p.ASSETS_FIAT_WITHDRAW.pathname,
    p.ACCOUNT_SECURITY_AUTHORIZATION_MANAGE.pathname,
    p.WEB3_ASSETS_OVERVIEW.pathname,
    p.ASSETS_SPOT_HISTORY.pathname,
    p.ASSETS_MARGIN_HISTORY.pathname,
    p.ASSETS_HISTORY.pathname,
    p.BUY_CRYPTO_HISTORY.pathname,
    p.COPY_TRADING_TRADER_SETTING.pathname,
    p.WEB3_SOCIAL_TRADE_PT_REWARDS.pathname,
    p.WEB3_SOCIAL_TRADE_MY_GROUPS.pathname,
    p.WEB3_SOCIAL_TRADE_EXPLORE_GROUPS.pathname,
    p.WEB3_SOCIAL_TRADE_PULSE_PROFILE.pathname,
    p.WEB3_SOCIAL_TRADE_INSCRIPTION_MARKETPLACE.pathname,
    p.WEB3_SOCIAL_TRADE_PULSE_DROP.pathname,
    p.ACCOUNT_PASSKEY_LIST.pathname,
    p.ASSETS_TRANSFER_CONVERT_HISTORY.pathname,
    p.ASSETS_DEPOSIT_WITHDRAW_HISTORY.pathname,
  ];
function Pa(e) {
  return fa.indexOf(e) < 0;
}
function La(e) {
  return (
    (!Ve(e) && e.indexOf("phemex-kol-global") > 0) || e.indexOf("kol/agent") > 0
  );
}
function Ve(e) {
  return e.indexOf("/phemex-kol-global/broker/") >= 0;
}
function Br(e) {
  const t = ae.parsePathname(e).pathname;
  return ga.indexOf(t) >= 0;
}
function Hr() {
  if (P.isApp) {
    const e = window.navigator.userAgent.split(" ")[1];
    if (e === "iOS") return "IOS";
    if (e === "Android") return "ANDROID";
  }
  return "WEB";
}
function Da() {
  if (P.isApp) {
    const e = window.navigator.userAgent.split(" ")[1];
    if (e === "iOS") return "IOS-H5";
    if (e === "Android") return "ANDROID-H5";
  }
  return "WEB";
}
function Fr() {
  return window.location.origin + p.REDIRECT.pathname;
}
function Ce() {
  return localStorage.getItem("x-phemex-twitter-header-mock");
}
const Ke = "phemex-auth-token",
  ya = "admin-kol-token",
  xa = "admin-broker-token",
  Ua = "x-phemex-site",
  d = { get: Ma, post: wa, put: Ga, delete: Ya, upload: Ba };
function va(e, { url: t, headers: r }) {
  if (
    (e.setRequestHeader("bid", Ge()),
    e.setRequestHeader("Accept-Language", Ft()),
    P.isApp && e.setRequestHeader("x-phemex-device", Da()),
    Rt && e.setRequestHeader(Ua, At),
    P.isProduction ||
      (Ce() && e.setRequestHeader("x-phemex-auth-mock-profile-id", Ce())),
    Pa(t))
  ) {
    const a = ha();
    a && e.setRequestHeader(Ke, a);
  }
  if (La(t)) {
    const a = Sa();
    a && e.setRequestHeader(ya, a);
  }
  if (Ve(t)) {
    const a = ba();
    a && e.setRequestHeader(xa, a);
  }
  r && Object.keys(r).forEach((a) => e.setRequestHeader(a, r[a]));
}
function Z(e) {
  e = e || {};
  let t = e.querystring || Le.stringify(e.query);
  t = t ? "?" + t : "";
  const r = e.url + t,
    a = e.formData ? e.formData : e.params ? JSON.stringify(e.params) : null,
    n = window.XMLHttpRequest
      ? new XMLHttpRequest()
      : new ActiveXObject("Microsoft.XMLHTTP");
  (n.responseType = e.responseType || ""),
    (n.onreadystatechange = () => {
      if (n.readyState === 2) {
        const i = n.getResponseHeader(Ke);
        i && (Na(i), console.log("update TK"));
      }
      if (n.readyState === 4) {
        const i = n.status;
        if ((i >= 200 && i < 300) || i === 400) {
          if (n.responseType === "blob") {
            const c = n.response;
            if (c) {
              e.success && e.success(c, c);
              return;
            }
            if (e.fail) {
              e.fail({ code: 498, message: "blob is empty" }, null),
                k(r, c.code, n);
              return;
            }
          }
          let _ = {};
          try {
            _ = JSON.parse(n.responseText);
          } catch {
            _ = { status: i, code: 498, msg: "json parse error" };
          }
          if (_.code === 0) {
            e.success &&
              e.success(e.formatter ? e.formatter(_.data) : _.data, _);
            return;
          }
          if (e.fail) {
            e.fail({ code: _.code, message: _.msg }, _), k(r, _.code, n);
            return;
          }
        }
        if (i === 401) {
          const _ = JSON.parse(n.responseText);
          P.isApp || Ca(),
            J.send("http", "401", { reply: _ }),
            e.fail({ code: 401, message: "Unauthorized" }, null),
            k(r, _.code, n);
          return;
        }
        if (i === 403) {
          e.fail({ code: 403, message: "Request denied" }, null), k(r, 403, n);
          return;
        }
        if (i === 429) {
          const _ = "Too many requests, Please try again later";
          e.fail({ code: i, message: _ }, null),
            k(r, i, n),
            J.send("toast", "error", { message: _ });
          return;
        }
        if (e.fail) {
          let _ = 499;
          try {
            _ = JSON.parse(n.responseText).code;
          } catch {}
          console.warn("network error", "status: ", i, "code: ", _),
            e.fail({ code: _, message: "network error" }, null),
            k(r, _, n);
        }
      }
    }),
    n.open(e.type, r, !0),
    va(n, e),
    n.send(a);
}
function Ma(e, { query: t = {}, ...r }) {
  return new Promise((a) =>
    Z({
      url: e,
      type: "GET",
      query: t,
      success(n, i) {
        a({ loading: !1, success: !0, data: n, reply: i });
      },
      fail(n, i) {
        a({ loading: !1, fail: !0, error: n, reply: i });
      },
      ...r,
    })
  );
}
function wa(e, { query: t = {}, params: r = {}, ...a }) {
  const { fail: n, ...i } = a;
  return new Promise((_) =>
    Z({
      url: e,
      type: "POST",
      headers: { "Content-Type": "application/json" },
      query: t,
      params: r,
      success(c, s) {
        _({ loading: !1, success: !0, data: c, reply: s });
      },
      fail(c, s) {
        n && n(c, s), _({ loading: !1, fail: !0, error: c, reply: s });
      },
      ...i,
    })
  );
}
function Ga(e, { query: t, params: r, ...a }) {
  return new Promise((n) =>
    Z({
      url: e,
      type: "PUT",
      headers: { "Content-Type": "application/json" },
      query: t,
      params: r,
      success(i, _) {
        n({ loading: !1, success: !0, data: i, reply: _ });
      },
      fail(i, _) {
        n({ loading: !1, fail: !0, error: i, reply: _ });
      },
      ...a,
    })
  );
}
function Ya(e, { query: t, params: r, ...a }) {
  return new Promise((n) =>
    Z({
      url: e,
      type: "DELETE",
      headers: { "Content-Type": "application/json" },
      query: t,
      params: r,
      success(i, _) {
        n({ loading: !1, success: !0, data: i, reply: _ });
      },
      fail(i, _) {
        n({ loading: !1, fail: !0, error: i, reply: _ });
      },
      ...a,
    })
  );
}
function Ba(e, { formData: t }) {
  return new Promise((r) =>
    Z({
      url: e,
      type: "POST",
      formData: t,
      success(a, n) {
        r({ loading: !1, success: !0, data: a, reply: n });
      },
      fail(a, n) {
        r({ loading: !1, fail: !0, error: a, reply: n });
      },
    })
  );
}
function k(e, t, { status: r, responseText: a }) {
  t !== 31108 &&
    ue.track("web_debug", {
      debug_type: "http_error",
      debug_info: { url: e, status: r, code: t, responseText: a },
    });
}
const Ha = 4,
  K = {
    getProductList() {
      return d.get(m.CONFIG_PRODUCTS, {
        formatter(e) {
          let {
            currencies: t,
            products: r,
            riskLimits: a,
            leverages: n,
            leveragesV2: i = [],
            perpProductsV2: _ = [],
            riskLimitsV2: c = [],
            collaterals: s = [],
            marginRiskLevels: o,
            tradeLevels: T,
            leverageMargins: E = [],
          } = e;
          (n = n || []), (s = s || []);
          const u = Ka(t),
            I = [...r.filter((C) => C.type === "Perpetual"), ..._],
            N = [...a, ...Xa(c)],
            A = Fa(I, u, N),
            h = r.filter((C) => C.type === "Spot"),
            g = ka(h, t);
          c.map((C) => ({
            ...C,
            version: "V2",
            riskLimitConvert: function (b) {
              return {
                initialMargin: b.initialMarginRr,
                maintenanceMargin: b.maintenanceMarginRr,
                limit: b.limit,
              };
            },
          }));
          const l = qa(N, I);
          return {
            currencies: t,
            contracts: A,
            spots: g,
            riskLimits: l,
            leverages: n,
            leveragesV2: i,
            collaterals: s,
            marginRiskLevels: o,
            tradeLevels: T,
            leverageMargins: E,
          };
        },
      });
    },
    getBaseConfig() {
      return d.get(m.PUBLIC_MISC, {
        formatter(e) {
          const { fiat: t } = e;
          return (
            t.map((r) => ((r.text = r.code), (r.value = r.code), r)),
            { fiat: t }
          );
        },
      });
    },
    getFeeCondition(e) {
      return d.get(m.FEE_CONDITION, { query: e });
    },
    getPromotions(e) {
      return d.get(m.PROMOTIONS, { query: e });
    },
    getCoinBasicList() {
      return d.get(m.COIN_BASIC_LIST, {
        formatter(e) {
          const { rows: t } = e;
          return (
            t.map((r) => {
              const { addrExtra: a } = r;
              (r.addrExtraStr = a ? (a === 1 ? "Memo" : "Tag") : ""),
                (r.depositOpen = !!r.depositOpen),
                (r.withdrawOpen = !!r.withdrawOpen);
            }),
            t
          );
        },
      });
    },
    getCoinInfoList(e) {
      return d.get(m.COIN_INFO_LIST, { query: e });
    },
    getProductsScale() {
      return d.get(m.PRODUCTS_SCALE, {});
    },
    getPrivateCoin() {
      return d.get(m.PRIVACY_COIN, {});
    },
    getCoinInfo(e) {
      return d.get(m.PRODUCTS_COIN_INFO, { query: e });
    },
    getCategoryList(e) {
      return d.get(m.CATEGORY_LIST, {
        query: e,
        formatter({ rows: t }) {
          return t.map((r) => {
            const { coins: a, name: n, id: i, ..._ } = r;
            return {
              ..._,
              text: n,
              value: i,
              id: i,
              coins: a.map((c) => c.replace(" ", "")),
            };
          });
        },
      });
    },
    getCoinBase(e) {
      return d.get(m.COIN_BASIC, { query: e });
    },
    getFeeConfig(e = {}) {
      return d.get(m.SPOT_FEE_CONFIG, { query: e });
    },
    getFeeConfigList(e = {}) {
      return d.get(m.XPT_LEVEL_SIMPLE_CONFIG, { query: e });
    },
  };
function Fa(e, t, r) {
  return e.map((a) => {
    const {
        settleCurrency: n,
        quoteCurrency: i,
        contractUnderlyingAssets: _,
        type: c,
      } = a,
      s = _.indexOf(" ") > -1 && Ta.startWithNumber(_);
    let o = _;
    s && (o = _.split(" ")[1]);
    const T = _.replaceAll(" ", ""),
      E = n === i ? o : n;
    let u = t.find((b) => b.currency === n);
    u ||
      (console.warn(
        "not found config for " + n + " settle currency in currencies list"
      ),
      (u = oe(n))),
      (a.contractTimes = 1),
      (a.isPerpetualV2 = c === "PerpetualV2");
    const { valueScale: I } = u,
      N = t.find((b) => b.currency === E),
      { steps: A } = r.find((b) => b.symbol === a.symbol) || {};
    (a.contractSide = n === i ? 1 : -1),
      (a.baseCurrencyName = N ? N.name : E),
      (a.baseCurrency = s ? T : E),
      (a.ratioFactor = Math.pow(10, a.ratioScale)),
      (a.ratioPrecision = 2),
      (a.valuePrecision = n === "USD" ? 2 : 4),
      (a.riskLimitSteps = A);
    const h = a.contractSide > 0 ? E : i,
      g = a.contractSide > 0 ? _ : i;
    (a.pairName = n === i ? T + i : n + i), (a.symbolV2 = a.pairName);
    const l = c === "PerpetualV2";
    (a.isSupportHedge = l),
      (a.qtyPrecision = l ? a.qtyPrecision : 0),
      (a.contPrecision = l ? a.qtyPrecision : 0),
      (a.settleValuePrecision = l ? a.qtyPrecision : 8),
      (a.qtyScale = l ? 0 : 8),
      (a.qtyFactor = l ? 1 : 1e8),
      (a.contTickSizeEv = l ? Number(a.qtyStepSize) : 1e8),
      (a.settleTickSizeEv = l ? Number(a.qtyStepSize) : 1),
      (a.status = Wa(a)),
      (a.contractSizePrecision = Qa(a)),
      (a.priceScale = l ? 0 : Ha),
      (a.priceFactor = l ? 1 : 1e4),
      (a.tickSizeEp = a.tickSize * (l ? 1 : 1e4));
    const C = l ? 0 : I;
    return (
      (a.valueScale = C),
      (a.valueFactor = Math.pow(10, C)),
      (a.contractSize = l ? 1 : a.contractSize),
      (a.maxPriceEp = l ? Number(a.maxPriceRp) : a.maxPriceEp),
      (a.contAmount = s ? g : String(a.contractSize) + h),
      (a.tickSizeEv = (n === "USD" ? 0.01 : 1e-4) * a.valueFactor),
      (a.maxOrderQty = l ? Number(a.maxOrderQtyRq) : a.maxOrderQty),
      (a.tipOrderQty = l ? Number(a.tipOrderQtyRq) : a.tipOrderQty),
      (a.qtyStepSize = Number(a.qtyStepSize || 0)),
      delete a.description,
      a
    );
  });
}
function ka(e, t) {
  return e.map((r) => {
    let a = t.find((i) => i.currency === r.baseCurrency),
      n = t.find((i) => i.currency === r.quoteCurrency);
    return (
      a ||
        (console.warn(
          "not found config for " +
            r.baseCurrency +
            " currency in currencies list"
        ),
        (a = oe(r.baseCurrency))),
      n ||
        (console.warn(
          "not found config for " +
            r.quoteCurrency +
            " currency in currencies list"
        ),
        (n = oe(r.quoteCurrency))),
      (r.indexSymbol = "." + r.baseCurrency),
      (r.baseCurrencyName = a.name),
      (r.quoteCurrencyName = n.name),
      (r.baseQtyScale = a.valueScale),
      (r.quoteQtyScale = n.valueScale),
      (r.baseQtyFactor = Math.pow(10, a.valueScale)),
      (r.quoteQtyFactor = Math.pow(10, n.valueScale)),
      (r.baseDeltaSizeEv = r.baseTickSizeEv),
      (r.baseDeltaSize = r.baseTickSizeEv / 1e8),
      (r.quoteDeltaSizeEv = 1e8),
      (r.quoteDeltaSize = 1),
      (r.quoteQtyTickSizeEv = Number(
        R(10).pow(Number(R(r.quoteQtyScale).minus(r.quoteQtyPrecision)))
      )),
      (r.quoteQtyTickSize = Number(R(10).pow(-r.quoteQtyPrecision))),
      (r.quoteTickSize = r.quoteTickSizeEv / 1e8),
      (r.baseQtyTickSizeEv = r.baseTickSizeEv),
      (r.baseQtyTickSize = r.baseTickSizeEv / 1e8),
      (r.status = Va(r)),
      (r.displayBaseCurrency = a.displayCurrency),
      r
    );
  });
}
function Wa(e) {
  const [t, r, a, n, i] = e.timeline || [0, 0, 0, 0, 0],
    _ = Date.now();
  return a === 0 && n === 0 && i === 0
    ? _ < t
      ? "Init"
      : _ < r
      ? "PreList"
      : "Listed"
    : _ < t
    ? "Init"
    : _ < r
    ? "PreList"
    : _ < a
    ? "Listed"
    : _ < n
    ? "Suspend"
    : _ < i
    ? "Delisted"
    : "Hide";
}
function Va(e) {
  const [t, r, , a, n] = e.timeline || [0, 0, 0, 0, 0],
    i = Date.now();
  return a === 0 && n === 0
    ? i < t
      ? "Init"
      : i < r
      ? "PreList"
      : "Listed"
    : i < t
    ? "Init"
    : i < r
    ? "PreList"
    : i < a
    ? "Listed"
    : i < n
    ? "Delisted"
    : "Hide";
}
function oe(e) {
  return {
    code: 1,
    currency: e,
    depositOpen: !0,
    displayCurrency: e,
    maxValueEv: 5e18,
    minValueEv: 1,
    name: e,
    needAddrTag: 0,
    qtyPrecision: 8,
    status: "Listed",
    valueFactor: 1e8,
    valuePrecision: 8,
    valueScale: 8,
    withdrawOpen: !0,
    inAssetsDisplay: 1,
  };
}
function Ka(e) {
  return e.map(
    (t) => (
      (t.symbol = t.currency), (t.valueFactor = Math.pow(10, t.valueScale)), t
    )
  );
}
function Xa(e) {
  return e.map((t) => {
    const { symbol: r, riskLimits: a, steps: n } = t,
      i = a.map((_) => {
        const { limit: c, initialMarginRr: s, maintenanceMarginRr: o } = _,
          T = Number(c),
          E = Number(s),
          u = R(s).times(100) + "%",
          I = Number(o),
          N = R(o).times(100) + "%";
        return {
          limit: c,
          riskLimitEv: T,
          initialMarginEr: E,
          maintenanceMarginEr: I,
          initialMargin: u,
          maintenanceMargin: N,
        };
      });
    return { symbol: r, steps: n, riskLimits: i };
  });
}
function qa(e, t) {
  return e.map((r) => {
    const { symbol: a, riskLimits: n, steps: i } = r,
      _ = t.find((s) => s.symbol === a);
    if (!_) {
      const s = n.map((o) => ((o.riskLimitEv = 0), o));
      return { symbol: a, steps: i, riskLimits: s };
    }
    const c = n.map((s) => ((s.riskLimitEv = s.limit * _.valueFactor), s));
    return { symbol: a, steps: i, riskLimits: c };
  });
}
function Qa(e) {
  if (e.isSupportHedge) return e.qtyPrecision;
  const { contractSize: t } = e;
  return t && t.toString().includes(".")
    ? t.toString().split(".")[1].length
    : 0;
}
function X(e, t) {
  return e.reduce((r, a) => r.set(a[t], a), new Map());
}
const Xe = new f([]),
  q = new f([]),
  kr = q.pipe(
    D((e) => e.length > 0),
    S((e) => X(e, "currency")),
    x(new Map()),
    U(1)
  ),
  Wr = q.pipe(
    S((e) => e.filter((t) => !!t.chain)),
    x([])
  );
q.pipe(
  D((e) => e.length > 0),
  S((e) => X(e, "code")),
  x(new Map()),
  U(1)
);
const qe = new f([]),
  Qe = new f([]),
  je = new f([]),
  ze = new f([]),
  Vr = je.pipe(
    D((e) => e.length > 0),
    S((e) => X(e, "symbol")),
    x(new Map()),
    U(1)
  );
ze.pipe(
  D((e) => e.length > 0),
  S((e) => X(e, "index_id")),
  x(new Map()),
  U(1)
);
const B = new f([]);
B.pipe(S((e) => e.map((t) => ({ value: t.symbol, text: t.displaySymbol }))));
B.pipe(S(ja), U(1));
const Kr = B.pipe(
  D((e) => e.length > 0),
  S((e) => X(e, "symbol")),
  x(new Map()),
  U(1)
);
B.pipe(
  D((e) => e.length > 0),
  S((e) =>
    e.reduce((t, r) => {
      if (!t.has(r.baseCurrency)) return t.set(r.baseCurrency, [r]);
      const a = t.get(r.baseCurrency);
      return t.set(r.baseCurrency, [...a, r]);
    }, new Map())
  ),
  x(new Map()),
  U(1)
);
const Xr = B.pipe(
  D((e) => e.length > 0),
  S((e) => e.filter((t) => t.hasOwnProperty("leverage") && t.leverage > 0)),
  S((e) => X(e, "symbol")),
  x(new Map()),
  U(1)
);
function ja(e) {
  return Object.fromEntries(
    e.filter((t) => t.stStatus === 1).map((t) => [t.symbol, t])
  );
}
const qr = new f(!1),
  za = new f(null),
  Je = new f([]),
  Q = Re([Je, q]).pipe(
    S(([e, t]) =>
      e
        .map((r) => {
          const a = t.find((n) => n.currency === r.currency);
          return a
            ? {
                ...r,
                name: a.name,
                displayCurrency: a.displayCurrency,
                valuePrecision: a.valuePrecision,
                status: a.status,
                valueScale: 0,
                valueFactor: 1,
              }
            : null;
        })
        .filter(Boolean)
    ),
    x([])
  ),
  Qr = Q.pipe(
    S((e) => e.reduce((t, r) => ((t[r.currency] = r), t), new Map()))
  ),
  $e = B.pipe(S((e) => e.filter((t) => t.canMarginTrade)));
$e.pipe(S((e) => e.map((t) => ({ value: t.symbol, text: t.displaySymbol }))));
Q.pipe(
  S((e) =>
    e
      .filter((t) => t.canBorrow)
      .map((t) => ({ value: t.currency, text: t.currency, name: t.name }))
  )
);
Q.pipe(
  S((e) =>
    e
      .filter((t) => t.canRepay)
      .map((t) => ({ value: t.currency, text: t.currency, name: t.name }))
  )
);
const jr = Q.pipe(
    S((e) =>
      e
        .filter((t) => t.canTransferIn)
        .map((t) => ({ value: t.currency, text: t.currency }))
    )
  ),
  zr = Q.pipe(
    S((e) =>
      e
        .filter((t) => t.canTransferOut)
        .map((t) => ({ value: t.currency, text: t.currency }))
    )
  );
Q.pipe(S((e) => e.map((t) => ({ value: t.currency, text: t.currency }))));
const Jr = $e.pipe(
    S((e) => e && e[0] && e[0].leverage),
    D(Boolean),
    x(5)
  ),
  Ja = new f([]),
  $a = new f([]),
  Ze = new f({ currencyList: [], contractSymbolList: [], spotSymbolList: [] }),
  et = new xe(),
  Za = new f(!1),
  er = {
    getPool(e) {
      return d.get(m.LENDING_POOL, { query: e });
    },
    getPublicPool(e) {
      return d.get(m.LENDING_PUBLIC_DATA_POOL, { query: e });
    },
    getAssets(e) {
      return d.get(m.LENDING_ASSETS_OVERVIEW, { query: e });
    },
    getSupportCurrencies() {
      return d.get(m.LENDING_SUPPORT_CURRENCIES, {});
    },
    getHistCollateral(e) {
      return d.get(m.LENDING_HIST_COLLATERAL, { query: e });
    },
    getHistLiq(e) {
      return d.get(m.LENDING_HIST_LIQ, { query: e });
    },
    getHistLoan(e) {
      return d.get(m.LENDING_HIST_LOAN, { query: e });
    },
    getHistPayback(e) {
      return d.get(m.LENDING_HIST_PAYBACK, { query: e });
    },
    getHistInterest(e) {
      return d.get(m.LENDING_HIST_INTEREST, { query: e });
    },
    getHisFunds(e) {
      return d.get(m.LENDING_HIST_FUNDS, { query: e });
    },
    getLoanActiveOrders(e) {
      return d.get(m.LENDING_LOAN_ACTIVE, { query: e });
    },
    getLoanQuota(e) {
      return d.get(m.LENDING_LOAN_QUOTA, { query: e });
    },
    getPublicDataApr(e) {
      return d.get(m.LENDING_PUBLIC_DATA_APR, { query: e });
    },
    postLoan(e) {
      return d.post(m.LENDING_LOAN, { params: e });
    },
    postInternalPoolConfig(e) {
      return d.post(m.LENDING_INTERNAL_POOL_CONFIG, { params: e });
    },
    postInternalPoolConfigDb(e) {
      return d.post(m.LENDING_INTERNAL_POOL_CONFIG_DB, { params: e });
    },
    postLoanAddCollateral(e) {
      return d.post(m.LENDING_LOAN_ADD_COLLATERAL, { params: e });
    },
    postPayback(e) {
      return d.post(m.LENDING_PAYBACK, { params: e });
    },
    postAccountsOpen() {
      return d.post(m.LENDING_ACCOUNTS_OPEN, {});
    },
    postSupply(e) {
      return d.post(m.LENDING_SUPPLY, { params: e });
    },
    postRedeem(e) {
      return d.post(m.LENDING_REDEEM, { params: e });
    },
    postAutoInvest(e) {
      return d.post(m.LENDING_AUTO_INVEST, { params: e });
    },
    getSupplyAccounts(e) {
      return d.get(m.LENDING_ASSETS_ACCOUNT_SUPPLY, { query: e });
    },
    getSupplyActive(e) {
      return d.get(m.LENDING_SUPPLY_ACTIVE, { query: e });
    },
    getHistSupply(e) {
      return d.get(m.LENDING_HIST_SUPPLY, { query: e });
    },
    getHistSupplyRedemption(e) {
      return d.get(m.LENDING_HIST_SUPPLY_REDEMPTION, { query: e });
    },
    getHistSupplyInterest(e) {
      return d.get(m.LENDING_HIST_SUPPLY_INTEREST, { query: e });
    },
  },
  tt = new pe(),
  at = new f([]);
at.subscribe((e) => {
  De.next({ type: "lending-account-asset", data: e });
});
ut.isMock() || tt.pipe(vt(tr), D(Boolean)).subscribe(at);
async function tr() {
  const { data: e, error: t } = await er.getAssets({ showAll: !0 });
  return t ? (J.send("toast", "error", t), null) : (e && e.rows) || null;
}
Za.pipe(yt(), D(Boolean)).subscribe(() => tt.next());
const ar = lt(!0).pipe(D(Boolean), U(1)),
  rt = new f({
    currencies: [],
    contracts: [],
    spots: [],
    riskLimits: [],
    collaterals: [],
    leverages: [],
    marginRiskLevels: null,
    tradeLevels: { blackSymbols: [], levels: [] },
    leverageMargins: [],
  }),
  rr = new f({ tradeLevels: { blackSymbols: [], levels: [] } });
ar.subscribe(() => Promise.all([or(), nr(), ir(), _r(ce(W)), pr(ce(W)), sr()]));
Re([Xe, qe, Qe])
  .pipe(S(cr), D(Boolean))
  .subscribe((e) => q.next(e));
Re([rt, q, Ze, et]).subscribe(([e, t, r, a]) => {
  if (t.length === 0) return;
  const {
      contracts: n,
      spots: i,
      riskLimits: _,
      collaterals: c,
      marginRiskLevels: s,
      leverages: o,
      leverageMargins: T,
    } = e,
    { currencyList: E, contractSymbolList: u, spotSymbolList: I } = r,
    N = t.filter((L) => !E.includes(L.currency)),
    A = dr(n, u, a),
    h = c.map((L) => Er(L)),
    g = h.filter(({ canTrade: L }) => L).map(({ currency: L }) => L),
    l = Rr(i, I, N, a, g),
    C = _.filter((L) => !u.includes(L.symbol)),
    b = Tr(l),
    H = mr(h, N);
  De.send({
    type: "foundation-data",
    currencies: N,
    contracts: A,
    spots: l,
    riskLimits: JSON.parse(JSON.stringify(C)),
    leverages: o,
    marginCurrencies: H,
    marginPairs: b,
    marginRiskLevels: s,
    leverageMargins: T,
  }),
    s && za.next(s),
    je.next(A),
    ze.next(T),
    B.next(l),
    Ja.next(C),
    Je.next(h);
});
async function nr() {
  const e = Ot.createAutoEvent({ key: "products_load" }),
    { data: t, error: r } = await K.getProductList();
  t && (e.end(), rt.next(t), rr.next(t.tradeLevels), Xe.next(t.currencies)),
    r && (e.fail(), console.warn("getProductList error", r));
}
async function ir() {
  const { data: e, error: t } = await K.getCoinBasicList();
  e && qe.next(e),
    t && console.warn("load coin basic list error", { error: t });
}
async function _r(e) {
  const { data: t, error: r } = await K.getCoinInfoList({ lang: e });
  t && Qe.next(t.rows),
    r && console.warn("load coin basic list error", { error: r });
}
function cr([e, t, r]) {
  return e.length < 1 || t.length < 1 || r.length < 1
    ? null
    : e.map((a) => {
        const n = t.find((_) => _.currency === a.currency) || {
            assetsPrecision: 8,
          },
          i = r.find((_) => _.currency === a.currency) || { fullName: a.name };
        return (
          (a.valuePrecision = n.assetsPrecision || 8),
          (a.qtyPrecision = ["USD", "USDT"].indexOf(a.currency) < 0 ? 8 : 2),
          (a.valueFactor = Math.pow(10, a.valueScale)),
          (a.name = i.fullName),
          (a.depositOpen = n.depositOpen),
          (a.withdrawOpen = n.withdrawOpen),
          (a.chain = n.chain),
          a
        );
      });
}
async function sr() {
  const { data: e, error: t } = await K.getProductsScale();
  e && $a.next(e), t && J.send("toast", "error", t);
}
async function or() {
  const { data: e } = await K.getPrivateCoin();
  e && Ze.next(e);
}
async function pr() {
  const e = ce(W),
    { data: t, error: r } = await K.getCategoryList({ lang: e });
  t && et.next(t), r && J.send("toast", "error", r);
}
function Er(e) {
  const t = !e.markDelete;
  return {
    ...e,
    canTransferOut: !0,
    canRepay: !0,
    canTransferIn: t,
    canBorrow: t,
    canTrade: t,
  };
}
function Tr(e) {
  return e.reduce((t, r) => {
    if (r.supportMarginTrade) {
      const a = { ...r, mode: "Margin" };
      t.push(a);
    }
    return t;
  }, []);
}
function mr(e, t) {
  return t.length === 0
    ? e
    : e.map((r) => {
        const a = t.find((n) => n.currency === r.currency);
        return a
          ? {
              ...r,
              name: a.name,
              displayCurrency: a.displayCurrency,
              valuePrecision: a.valuePrecision,
              pricePrecision: a.pricePrecision,
              status: a.status,
              valueFactor: 1,
              valueScale: 0,
            }
          : (console.warn(
              "not found config for " +
                r.currency +
                " currency in currencies list"
            ),
            r);
      });
}
function dr(e, t, r) {
  return e
    .filter(({ symbol: a }) => !t.includes(a))
    .map((a) => {
      let n = [];
      return (
        r
          .filter(({ coins: i }) => i.includes(a.baseCurrency))
          .map(({ id: i }) => n.push(i)),
        { ...a, categoryIds: n }
      );
    });
}
function Rr(e, t, r, a, n) {
  return e
    .filter(({ symbol: i }) => !t.includes(i))
    .map((i) => {
      const _ = r.find(({ currency: T }) => T === i.baseCurrency),
        c = _ ? _.name : "",
        s =
          i.leverage &&
          n.includes(i.baseCurrency) &&
          n.includes(i.quoteCurrency);
      let o = [];
      return (
        a
          .filter(({ coins: T }) => T.includes(i.baseCurrency))
          .map(({ id: T }) => o.push(T)),
        { ...i, name: c, categoryIds: o, canMarginTrade: s }
      );
    });
}
export {
  Vr as $,
  m as A,
  R as B,
  Wr as C,
  kr as D,
  Dr as E,
  gr as F,
  fr as G,
  lt as H,
  j as I,
  Za as J,
  br as K,
  Mt as L,
  ma as M,
  qr as N,
  Qr as O,
  p as P,
  jr as Q,
  zr as R,
  qe as S,
  tt as T,
  kt as U,
  da as V,
  Mr as W,
  yr as X,
  Ur as Y,
  vr as Z,
  K as _,
  B as a,
  Kr as a0,
  xe as a1,
  Xr as a2,
  Hr as a3,
  lr as a4,
  Ht as a5,
  Lr as a6,
  Pr as a7,
  X as a8,
  Or as a9,
  ye as aa,
  ha as ab,
  Ir as ac,
  Sr as ad,
  Ca as ae,
  Br as af,
  Na as ag,
  hr as ah,
  Fr as ai,
  Jr as aj,
  Cr as ak,
  xr as al,
  Re as b,
  je as c,
  ie as d,
  vt as e,
  Nr as f,
  Yr as g,
  q as h,
  gt as i,
  St as j,
  Lt as k,
  W as l,
  J as m,
  Ta as n,
  wr as o,
  Gr as p,
  d as q,
  Bt as r,
  ue as s,
  ar as t,
  $a as u,
  U as v,
  yt as w,
  Ge as x,
  Ue as y,
  _e as z,
};
//# sourceMappingURL=chunk-65793be5.js.map
