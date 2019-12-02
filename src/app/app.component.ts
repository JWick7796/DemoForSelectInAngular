import { Component, OnInit } from "@angular/core";
import { Country } from "./country";
import { FormGroup, FormControl } from "../../node_modules/@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  selectedCountry: Country;
  countries: Country[];
  form: FormGroup;

  ngOnInit(): void {
    //   Countries Initialized, Replace with serviceMethod.subscribe()...
    this.countries = [
      {
        id: "8f8c6e98",
        name: "USA",
        code: "USD"
      },
      {
        id: "169fee1a",
        name: "Canada",
        code: "CAD"
      },
      {
        id: "3953154c",
        name: "UK",
        code: "GBP"
      },
      {
        id: "39531",
        name: "Asia",
        code: "ASR"
      },
      {
        id: "3954c",
        name: "India",
        code: "INR"
      },
      {
        id: "3953c",
        name: "Germany",
        code: "GRE"
      }
    ];

    this.form = new FormGroup({
      // this.countries[0] basically specifies the default value for dropdown to be the first element of the array
      name: new FormControl(this.countries[0])
    });
  }

  onSubmit() {
    this.selectedCountry = this.form.controls.name.value;

    //   Now i have the entire selected country object and now i can access id, name or any other fiels to send as @pathVariable
    console.log(this.selectedCountry.id);
    console.log(this.selectedCountry.name);
    console.log(this.selectedCountry.code);
  }
}
