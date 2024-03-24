import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {
    /* bad approach */
    this.actions$.subscribe((action) => {
      if (action.type === "[Login Page] User Login")
        localStorage.setItem("user", JSON.stringify(action["user"]));
    });
  }
}
