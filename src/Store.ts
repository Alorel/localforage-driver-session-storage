const stores: { [store: string]: Store } = {};

/** @internal */
export class Store {

  private constructor(private readonly kp: string) {
  }

  public static resolve(kp: string): Store {
    if (!stores[kp]) {
      stores[kp] = new Store(kp);
    }

    return stores[kp];
  }

  public clear(): void {
    const keys = this.keys();
    for (let i = 0; i < keys.length; i++) {
      this.rm(keys[i]);
    }
  }

  public drop(): void {
    this.clear();
    delete stores[this.kp];
  }

  public get(key: string): any {
    return sessionStorage.getItem(this.kp + key);
  }

  public key(idx: number): string {
    return this.keys()[idx];
  }

  public keys(): string[] {
    const out: string[] = [];
    let key: string | null;
    for (let i = sessionStorage.length - 1; i >= 0; i--) {
      key = sessionStorage.key(i);

      if (key && key.indexOf(this.kp) === 0) {
        out.push(key.substr(this.kp.length));
      }
    }

    return out;
  }

  public rm(key: string): void {
    sessionStorage.removeItem(this.kp + key);
  }

  public set(k: string, v: any): void {
    sessionStorage.setItem(this.kp + k, v);
  }
}
