import{b2 as e,b3 as r}from"./chunk-707a9f2f.js";import"./app-7aa7d139.js";const E={getTasksList(){return e.get(r.TASKS_LIST,{})},getPreCheck(){return e.get(r.WALLETS_APP_PRE_CHECK,{})},updateProfile(t){return e.post(r.UPDATE_PROFILE,{params:t,formatter(n){return n.isMain=n.parentId===0,n.isSub=!n.isMain,n}})},changePassword(t,n){return e.post(r.USER_CHANGE_PASSWORD,{query:t,params:n})},getFeeRate(t){return e.get(r.FEE_RATE_CONTRACT,{query:t})},getOtp(t){return e.get(r.USER_OTP,{query:t})},otpBind(t){return e.post(r.OTP_BIND,{query:t})},otpConfirmbind(t){return e.post(r.OTP_CONFIRMBIND,{query:t})},otpConfirmunbind(t){return e.post(r.OTP_CONFIRMUNBIND,{query:t})},otpUnbind(t){return e.post(r.OTP_UNBIND,{query:t})},getSwitchAccount(){return e.get(r.SWITCH_ACCOUNT,{formatter(t){return t.rows.forEach(n=>n.isSub=n.parentId!==0),t}})},getUserChildren(t){return e.get(r.USER_CHILDREN,{query:t})},getUserChildrenV2(t){return e.get(r.USER_CHILDREN_V2,{query:t})},getUserChildrenUta(t){return e.get(r.USER_CHILDREN_UTA,{query:t})},postUserChildren(t){return e.post(r.USER_CHILDREN,{params:t})},putUserChildren(t){return e.put(r.USER_CHILDREN,{query:t})},putUserSwitch(t){return e.put(r.USER_SWITCH,{query:t})},getChildrenAssets(t){return e.get(r.CHILDREN_ASSETS,{query:t})},getChildrenAssetsV2(t){return e.get(r.CHILDREN_ASSETS_V2,{query:t})},getChildrenAssetsUta(t){return e.get(r.CHILDREN_ASSETS_UTA,{query:t})},putUserSwitchBack(t){return e.put(r.USER_SWITCHBACK,{query:t})},getCountryList(t){return e.get(r.REFERRALS_COUNTRY,{query:t})},getDisableLangList(){return e.get(r.PRIVACY_LANG,{})},getRankList(t){return e.get(r.RANK_LIST,{query:t})},getRankListAugust(t){return e.get(r.RANK_LIST_AUGUST,{query:t})},switchToSubAccount(t){return e.put(r.SUB_ACCOUNT_SWITCH,{query:{clientCnt:t}})},switchToMasterAccount(){return e.put(r.MASTER_ACCOUNT_SWITCHBACK,{})},joinAgent(t){return e.post(r.REFERRALS,{params:t})},getApplyInfo(t){return e.get(r.AGENT_APPLY_INFO,{query:t})},getBaseMembershipInfo(){return e.get(r.BASE_MEMBERSHIP_INFO,{})},updateAutoRenewConfig(t){return e.post(r.UPDATE_AUTORENEW_CONFIG,{query:t})},getKeysList(t){return e.get(r.KEYS_LIST,{query:t})},getUserBd(){return e.get(r.VIP_MANAGER_EMAIL,{query:{}})},getKeysDetail(t){return e.get(r.KEYS_DETAIL,{query:t})},postKeysUpdate(t,n){return e.post(r.KEYS_UPDATE,{query:t,params:n})},postKeysCreate(t,n){return e.post(r.KEYS_CREATE,{query:t,params:n})},postKeysDelete(t){return e.post(r.KEYS_DELETE,{query:t})},postKeysRefresh(t){return e.post(r.KEYS_REFRESH,{query:t})},shareKeyToSubAccounts(t,n,{mailCode:_,otpCode:s}){return e.post(r.KEYS_SYNC_TO_SUB_ACCOUNTS,{params:{id:t,syncToList:n,syncType:n.length===0?2:1},query:{mailCode:_,otpCode:s}})},personalRecommendInfo(t){return e.get(r.PERSONAL_RECOMMEND_INFO,{query:t})},recommendRecordList(t){return e.get(r.RECOMMEND_RECORD_LIST,{query:t})},walletsTransferOut(t){return e.post(r.TRANSFER_OUT,{params:t})},walletsTransferin(t){return e.post(r.WALLETS_TRANSFERIN,{params:t})},spotMainAccountToSubAccount(t){return e.post(r.SPOT_MAIN_ACCOUNT_TO_SUB_ACCOUNT,{params:t})},spotSubAccountToSubAccount(t){return e.post(r.SPOT_SUB_ACCOUNT_TO_SUB_ACCOUNT,{params:t})},spotSubAcountToMainAccount(t){return e.post(r.SPOT_SUB_ACCOUNT_TO_MAIN_ACCOUNT_,{params:t})},contractMainAccountToSubAccount(t){return e.post(r.CONTRACT_MAIN_ACCOUNT_TO_SUB_ACCOUNT,{params:t})},contractSubAccountToSubAccount(t){return e.post(r.CONTRACT_SUB_ACCOUNT_TO_SUB_ACCOUNT,{params:t})},contractSubAcountToMainAccount(t){return e.post(r.CONTRACT_SUB_ACCOUNT_TO_MAIN_ACCOUNT,{params:t})},childrenEmail(t){return e.put(r.CHILDREN_EMAIL,{query:t})},generalTickling(t){return e.post(r.GENERAL_TICKLING,{params:t})},getGeneralTickling(t){return e.get(r.GENERAL_TICKLING,{query:t})},uploadImage(t){return e.upload(r.UPLOAD_IMAGE,{formData:t})},getUsersAntiPhishingCode(t){return e.get(r.USERS_ANTI_PHISHING_CODE,{query:t})},genUsersAntiPhishingCodeSubmit(t,n){return e.post(r.USERS_ANTI_PHISHING_CODE_SUBMIT,{query:t,params:n})},getTradingFeeRate(t){return e.get(r.SPOT_WALLET_ASSETS_TRADING_FEE_RATE,{query:t})},getUserGrowthInfo(t,n){return e.get(r.USER_GROWTH_INFO,{query:t,params:n})},getgrowthConfigs(t,n){return e.get(r.GROWTH_CONFIG,{query:t,params:n})},getUserLevelNotifications(t,n){return e.get(r.USER_LEVEL_NOTIFICATIONS,{query:t,params:n})},getAchievements(t,n){return e.get(r.USER_ACHIEVEMENTS,{query:t,params:n})},getGrowthHistories(t,n){return e.get(r.USER_GROWTH_HISTORIES,{query:t,params:n})},getQualifications(t,n){return e.get(r.PREMIUM_QUALIFICATION_LIST,{query:t,params:n})},getGrowthTasks(t,n){return e.get(r.GROWTH_TASKS,{query:t,params:n})},confirmLevelNotifcation(t){return e.post(r.USER_LEVEL_NOTIFICATIONS_CONFIRM,{params:t})},getOfficialVerify(t){return e.get(r.OFFICIAL_VERIFY,{query:t})},genStart2fa(t){return e.post(r.ACCOUNT_GENERAL_START,{params:t})},getSoulPassSummary(){return e.get(r.XPT_SOUL_PASS_SUMMARY,{query:{}})},getXPTLevelConfig(t){return e.get(r.XPT_LEVEL_CONFIG,{query:{ref:t}})},getUserXPTLevelInfo(t){return e.get(r.XPT_USER_LEVEL_CONFIG,{query:{ref:t}})},queryUseAssets(t){return e.get(r.USER_ASSETS_QUERY,{query:{scopeType:t,currency:"USDT"}})},postWeb3Start(t){return e.post(r.WEB3_GENERAL_START,{params:t})},postAccountTransferMainSub(t){return e.post(r.ACCOUNT_TRANSFER_MAIN_SUB,{params:t})},queryPasskeyAccount(){return e.get(r.PASSKEY_LIST,{})},verifyPasskey(t){return e.post(r.PASSKEY_ENABLE,{params:t})},startRegisterPasskey(t){return e.post(r.PASSKEY_REGISTER,{params:t})},finishedRegisterPasskey(t){return e.post(r.PASSKEY_FINISHED,{params:t})},removePasskey(t){return e.post(r.PASSKEY_REMOVE,{params:t})},renamePasskey(t){return e.post(r.PASSKEY_RENAME,{params:t})}};export{E as a};
//# sourceMappingURL=chunk-d2488ba6.js.map
