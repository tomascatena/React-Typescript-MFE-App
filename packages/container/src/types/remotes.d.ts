declare module 'marketingApp/MountMarketingApp' {
  export default function mount(
    el: Element,
    marketingOptions: MarketingOptions
  ): MountReturn;
}
declare module 'authApp/MountAuthApp' {
  export default function mount(
    el: Element,
    authOptions: AuthOptions
  ): MountReturn;
}
