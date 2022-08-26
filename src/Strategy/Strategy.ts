class SaleContext {
  strategy: SaleStrategy;

  constructor(strategy: SaleStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: SaleStrategy) {
    this.strategy = strategy;
  }

  calculate(amount: number) {
    this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy implements SaleStrategy {
  constructor(public tax: number) {}

  calculate(amount: number) {
    return amount + amount * this.tax;
  }
}

interface SaleStrategy {
  calculate(amount: number): number;
}

const regSaleSt = new RegularSaleStrategy(0.16);

const sale1 = new SaleContext(regSaleSt);

export default SaleContext;

interface LoginStrategy {
  login(user: String, password: string): boolean;
}

class LoginContext {
  private strategy!: LoginStrategy;

  constructor(strategy: LoginStrategy) {
    this.setStrategy(strategy);
  }

  setStrategy(strategy: LoginStrategy) {
    this.strategy = strategy;
  }

  login(user: string, password: string): boolean {
    return this.strategy.login(user, password);
  }
}

class LoginDBStrategy implements LoginStrategy {
  login(user: String, password: string): boolean {
    console.log("connecting to database...");
    if (user === "admin" && password === "pass") return true;
    return false;
  }
}

class LoginServiceStrategy implements LoginStrategy {
  login(user: String, password: string): boolean {
    console.log("connecting to the service...");
    if (user === "admin2" && password === "pass2") return true;
    return false;
  }
}

const auth = new LoginContext(new LoginDBStrategy());
console.log(auth.login("admin", "pass"));
auth.setStrategy(new LoginServiceStrategy());
console.log(auth.login("admin2", "pass2"));
