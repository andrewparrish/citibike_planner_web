import { Angular2TokenService } from 'angular2-token';

export class AuthComponent {
  public error : Boolean;
  public errorMessage : String;

  constructor() {
    this.error = false;
    this.errorMessage = "";
  }

  resetError() {
    this.error = false;
  }

  handleError(err) {
    this.error = true;
    this.errorMessage = JSON.parse(err._body)["errors"];
    console.log(err);
  }
}
