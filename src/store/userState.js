import { makeAutoObservable, runInAction } from "mobx";
import { login, signUp } from "../service/userService";

class UserState {
  data = null;
  loading = false;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  async loadData() {
    const localData = await JSON.parse(localStorage.getItem("AUTH_DATA"));
    runInAction(() => {
      this.data = localData?.user;
    });
  };

  async signUp(values) {
    try {
      this.loading = true;
      const { data } = await signUp(values);
      runInAction(() => {
        this.data = data.user;
        this.loading = false;
      });
      localStorage.setItem("AUTH_DATA", JSON.stringify(data));
    } catch (e) {
      runInAction(() => {
        this.data = e;
        this.loading = false;
      });
    }
  }

  async login(values) {
    try {
      this.loading = true;
      const { data } = await login(values);
      runInAction(() => {
        this.data = data.user;
        this.loading = false;
      });
      localStorage.setItem("AUTH_DATA", JSON.stringify(data));
    } catch (e) {
      runInAction(() => {
        this.data = e;
        this.loading = false;
      });
    }
  }
}

export default new UserState();
